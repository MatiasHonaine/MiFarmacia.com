alert("Bienvenido a MiFarma.com");

alert("Para comprar en nuestra pagina usted debe generar un usuario y clave.")

let usuario;
let clave;

for (let i = 1; i <= 3; i++) {
    usuario = prompt("ingrese su usuario que debe ser su nombre y apellido : ");
    clave = prompt("ingrese su clave: ");

    if ((usuario == usuario) && (clave == "123456")) {
        alert("Bienvenido " + usuario)
        break;
    } else {
        alert("Debe ingresar un usuario o clave correcta. Te quedan " + (3 - i) + " intentos, sino se bloquea la cuenta.")
    }

}

let edad = parseInt(prompt("Ingrese su edad : "));

if (edad >= 18) {
    alert("Bienvenido " + usuario)
} else {
    alert("Debe ser mayor de 18 años para comprar en nuestra pagina")
}

let item = parseInt(prompt("Para hacer una busqueda mas rapida ingrese el numero de item del producto que quieres llevar."))

function agregarItem(item, precio) {

    switch (item) {
        case '1':
            alert("Jabon nivea..." + precio == "$700")
            break;
        case '2':
            alert("Shampoo de frutos rojos..." + precio == "$1500")
            break;
        case '3':
            alert("Desodorante Rexona..." + precio == "$1105")
            break;
        case '4':
            alert("Alcohol en gel..." + precio == "$800")
            break;
        case '5':
            alert("Cepillo de dientes..." + precio == "$800")
            break;
        case '6':
            alert("Barbijo..." + precio == "$400")
            break;
        case '7':
            alert("Talco..." + precio == "$900")
            break;
        case '8':
            alert("Crema facial..." + precio == "$3000")
            break;
        case '9':
            alert("Proteinas..." + precio == "$10000")
            break;
        default:
            alert("Se encuentra fuera de stock")
            break;

    }

}

alert("Su carrito de compras hasta el momento: ")
agregarItem();


function calcularDescuento(total, porcetanje) {
    let descuento = total * (porcetanje / 100)

    return descuento;

}

function solicitarMetodoAPagar() {
    let metodoPago = prompt("¿Como quiere abonar lo adquerido? \n1-Efectivo \n2-Debito \n3-credito")

    switch (metodoPago) {
        case '1':
            let descuentoEfectivo = calcularDescuento(metodoPago, 30);
            alert("Tenes un descuento de $ :" + descuentoEfectivo + " Por abonar en Efectivo")
            break;
        case '2':
            let descuentoDebito = calcularDescuento(metodoPago, 20);
            alert("Tenes un descuento de $ :" + descuentoDebito + " Por abonar en Debito")
            break;
        case '3':
            let descuentoCredito = 0;
            alert("Tenes un descuento de $ :" + descuentoCredito + " Por abonar en tarjeta de credito")
            break;

        default:
            alert("ERROR")
            break;
    }
}

solicitarMetodoAPagar();

function cerrarSesion() {
    let salirSesion = prompt("Para cerrar sesion escriba la palabra ESC")


    if (salirSesion == "ESC" || salirSesion == "esc") {
        alert("Gracias por comprar en MiFarmacia.com")
    } else {
        alert("Debe ingresar ESC para cerrar sesion")
    }

    return salirSesion;
}

cerrarSesion();

//Desde aca segunda Pre-Entrega

// se crea una clase con todos los objetos de la pagina a vender!!
class Item {
    constructor(numero, producto, marca, precio) {
        this.nuermo = numero;
        this.producto = producto;
        this.marca = marca;
        this.precio = precio;

    }

    /*venderItem() {
        this.vendido = true
    }
    /*aumentarPrecio() {
        this.precio = this.precio * porcetanje
        //let aumento=parseInt(prompt("ingresa el aumento que queres aplicar:"))
        //item1.aumentarPrecio(1+(aumento/100))
        //console.log("Precio auctualizado" + "$" + item1.precio)
    }*/
    mostrarItem() {
        alert(this.nuermo + '-' + this.producto + '-' + this.marca + '-' + this.precio + '-' + this.vendido)
    }
}

const item1 = new Item('1', "Jabon", "Nivea", 700);
const item2 = new Item('2', "Shampoo de frutos rojos", "Plusbelle", 1500);
const item3 = new Item('3', "Desodorante", "Rexona", 1105);
const item4 = new Item('4', "Alcohol en gel", "Rexona", 800);
const item5 = new Item('5', "Cepillo de dientes", "Gum", 800);
const item6 = new Item('6', "Barbijo", "Atom", 400);
const item7 = new Item('7', "Talco", "Rexona", 900);
const item8 = new Item('8', "Crema facial", "Nivea", 3000);
const item9 = new Item('9', "Proteinas", "Star", 10000);


//Se crea un Array vacio y se introducen todos los objetos del mercado a la lista
const listaDeItems = [];

listaDeItems.push(item1, item2, item3, item4, item5, item6, item7, item8, item9);
console.log(listaDeItems);

for (const Item of listaDeItems) {
    item.mostrarItem;
}

//Se crea un carrito de compras hardcodeado
const miCarrito = [];
listaDeItems.push(item3, item5, item9);
console.log(miCarrito)

for (const Itema of miCarrito) {
    item.mostrarItem
}

let producto = parseInt(prompt("Desea chequear su carrito de compras? Ingresa el numero de ID de ese producto!!!"));

//Se agrega un nuevo Item a la lista de la farmacia ya creada
const nuevoItem = () => {
    numero = listaDeItems.length
    producto = producto
    marca = marca
    precio = precio
    const item10 = new Item('10', "barras de proteina", "Star", 600)
    listaDeItems.push(Item)
}

nuevoItem();
console.log(listaDeItems)

const posicion = miCarrito.indexOf(producto)

if (posicion != -1) {
    alert("El producto se encuentra en su carrito en la posicion " + posicion)
} else {
    alert("Su producto no esta su carrito")
}

prompt("Si quiere puede buscar aqui un producto para agregarlo a su carrito: ");
const produEncontrado = listaDeItems.find((Item) => Item.producto === "Jabon");
const produEncontrado2 = listaDeItems.find((Item) => Item.producto === "Gel para el cabello");

console.log(produEncontrado);
console.log(produEncontrado2);

if (produEncontrado2 == undefined) {
    console.log("Producto fuera de Stock!!!")
} else {
    console.log(produEncontrado)
}

//Se agrega al carrito de compras un nuevo producto
miCarrito.push(produEncontrado);

console.table(miCarrito);

const totalGastado = Item.reduce((acum, miCarrito) => acum + miCarrito.precio, 0);
console.log("Su total es de $: " + totalGastado);

