console.table(productos);
let carrito = [];

const contenedorProds = document.getElementById('misprods');
const tablaBody = document.getElementById('tablabody');

//DOM Y EVENTOS

function renderizarProds(listaProds) {
    for (const prod of listaProds) {
        contenedorProds.innerHTML += `
            <div class="card" style="width: 15rem;">
                <img class="card-img-top" src=${prod.foto} alt=${prod.nombre}/>
                    <div class="card-body">
                        <h5 class="cardi-ttle">${prod.nombre}</h5>
                        <p class="card-text"> $ ${prod.precio}</p>
                        <button id=${prod.numero} class="btn btn-primary comprar">Agregar al carrito</button>
                    </div>
            </div>
        `;
    }

    let botones = document.getElementsByClassName('comprar');
    console.log(botones);
    for (const boton of botones) {
        boton.addEventListener('click', (e) => {
            if (productos.some(el => el.numero === Number(e.target.id))) {
                agregarAlCarrito(productos.find(el => el.numero === Number(e.target.id)))
            } else {
                console.log('❌Error producto no encontrado')
            }
        })
        boton.onmouseover = () => boton.classList.replace('btn-primary', 'btn-warning');
        boton.onmouseout = () => boton.classList.replace('btn-warning', 'btn-primary');
    }
}


obtenerJSON();
renderizarProds(productos);


function agregarAlCarrito(productos) {
    const productoEnCarrito = { ...productos, cantidad: 1 }
    carrito.push(productoEnCarrito);
    console.table(carrito);
    alert(`Agregaste ${productos.nombre} al carro 🛒`);

    tablaBody.innerHTML += `
    <tr id="fila-${productoEnCarrito.numero}">
        <td>${productoEnCarrito.numero}</td>
        <td>${productoEnCarrito.nombre}</td>
        <td id="precio-$${productoEnCarrito.numero}">$${(productoEnCarrito.precio * productoEnCarrito.cantidad).toFixed(2)}</td>
        <td>
        <button class="btn btn-primary btn-sm" onclick="aumentarCantidad(${productoEnCarrito.numero})">+</button>
        <span id="cantidad-${productoEnCarrito.numero}">${productoEnCarrito.cantidad}</span>
        <button class="btn btn-primary btn-sm" onclick="disminuirCantidad(${productoEnCarrito.numero})">-</button>
        </td>
    </tr>
`;
    //calcular total aqui
    /*const total = carrito.reduce((acc, el) => acc += el.precio, 0);
    console.log(total);
    const totalDOM = document.getElementById('totalVisual');
    totalDOM.innerText = `El total a pagar es de $${total}`*/

    calcularTotal();
    guardarCarritoEnLocalStorage();
}



function aumentarCantidad(numeroProducto) {
    const cantidadDOM = document.getElementById(`cantidad-${numeroProducto}`);
    const precioDOM = document.getElementById(`precio-${numeroProducto}`);

    const producto = carrito.find(el => el.numero === numeroProducto);
    if (producto) {

        producto.cantidad = (producto.cantidad || 0) + 1;
        cantidadDOM.innerText = producto.cantidad;
        precioDOM.innerHTML = producto.cantidad * producto.precio;

        console.log(producto);
        calcularTotal();
        guardarCarritoEnLocalStorage();
    }

}



function disminuirCantidad(numeroProducto) {
    const cantidadDOM = document.getElementById(`cantidad-${numeroProducto}`);
    const precioDOM = document.getElementById(`precio-${numeroProducto}`);
    const productoIndex = carrito.findIndex(el => el.numero === numeroProducto);

    if (productoIndex != -1) {
        const productoEnCarrito = carrito[productoIndex];
        productoEnCarrito.cantidad = (productoEnCarrito.cantidad || 0) - 1;
        cantidadDOM.innerText = productoEnCarrito.cantidad;
        precioDOM.innerHTML = productoEnCarrito.cantidad * productoEnCarrito.precio;

        calcularTotal();
        guardarCarritoEnLocalStorage();

        if (productos.cantidad === 0) {

            carrito.splice(productoIndex, 1);
            cantidadDOM.parentElement.parentElement.remove();
        }

    }
}


function calcularTotal() {
    const total = carrito.reduce((acc, el) => acc += (el.precio * (el.cantidad || 0)), 0);
    console.log(total);
    const totalDOM = document.getElementById('totalVisual');
    totalDOM.innerText = `El total a pagar es de $${total}`;

}



function vaciarCarrito(productos) {
    carrito.splice(productos)
    console.log(carrito)
    tablaBody.innerHTML = " ";
    //alert('Vaciaste el carrito')

    Swal.fire({
        title: 'Estas seguro?',
        text: "Vas a perder todos tus productos!!!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, vaciar carrito!!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Vacio!'

            )
        }
    })
}



//evento de borrar carrito
const borrarCarrito = document.getElementById('vaciar');
borrarCarrito.addEventListener('click', () => {

    vaciarCarrito(carrito.productos)

})


//evento finalizar compra
const terminarCompra = document.getElementById('finalizar');
terminarCompra.addEventListener('click', () => {

    Swal.fire({
        title: 'Gracias por comprar en MiFarma.',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    })
})



//eventos de teclado
const campoNombre = document.getElementById('nombre');
const campoEmail = document.getElementById('email');

campoNombre.onkeyup = () => {
    if (campoNombre.value.length < 3) {
        console.log('Nombre de menos de 3 letras');
        campoNombre.style.color = 'red';
    } else {
        campoNombre.style.color = 'black';
    }
}

campoNombre.onchange = () => {
    if (campoNombre.value.length > 3) {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Nombre correcto',
            showConfirmButton: false,
            timer: 1500
        })
    } else if (campoNombre.value.length < 3) {
        Swal.fire({
            icon: 'error',
            title: 'ERROR!',
            text: 'Ingrese un nombre verdadero'
        })
    }

}

campoEmail.addEventListener('input', () => {
    if ((!campoEmail.value.includes('@')) || (!campoEmail.value.includes('.'))) {
        document.getElementById('mensaje').innerText = "Ingrese un mail valido!";
    } else {
        document.getElementById('mensaje').innerText = "";
    }

    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Bienvenido',
        showConfirmButton: false,
        timer: 1500
    })
});


const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', validar);

function validar(evento) {
    if ((campoNombre.value == '') || (campoEmail.value == '')) {
        evento.preventDefault();
        alert('Ingrese nombre o email faltante🚨');
    }
}


/*local storage*/
function guardarCarritoEnLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

//FETCH y promesas
function obtenerJSON() {
    const URLJSON = "/productos.json";
    fetch(URLJSON)
        .then((resultado) => resultado.json())
        .then((productos) =>
            console.log(productos));
    const listaProductos = productos.productos;
    

    function mostrarProductos(productos){
        productos.forEach(prod => {
            contenedorProds.innerHTML += `
            <div class="card" style="width: 15rem;">
                <img class="card-img-top" src=${prod.foto} alt=${prod.nombre}/>
                    <div class="card-body">
                        <h5 class="cardi-ttle">${prod.nombre}</h5>
                        <p class="card-text"> $ ${prod.precio}</p>
                        <button id=${prod.numero} class="btn btn-primary comprar">Agregar al carrito</button>
                    </div>
            </div>
        `;
            
        });
    }

}
obtenerJSON();