alert("Bienvenido a MiFamarmacia.com");

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

function agregarItem(item, precio) {
    let item = parseInt(prompt("Para hacer una busqueda mas rapida ingrese el numero de item del producto que quieres llevar."))

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
agregarItem(item, precio);


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

