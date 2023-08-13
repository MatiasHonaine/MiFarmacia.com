alert("Bienvenido a MiFamarmacia.com");

function solicitarNombre() {
    let nombreApellido = prompt("Ingresa tu nombre y apellido.");

    return nombre;

}

function solicitarEdad() {
    let edad = parseInt(prompt("Ingrese su edad para poder comprar"));

    return edad;
}


while (solicitarEdad >= 18) {
    alert("Bienvenido " + solicitarNombre)

    alert("Para comprar en nuestra pagina usted debe generar un usuario y clave.")
    let usuario;
    let clave;

    for (let i = 1; i <= 3; i++) {
        usuario = prompt("ingrese su usuario: ");
        clave = prompt("ingrese su clave: ");

        if ((usuario == "MatiasHonaine") && (clave == "123456")) {
            alert("Bienvenido" + usuario)
            break;
        } else {
            alert("Debe ingresar un usuario o clave correcta. Te quedan " + (3 - i) + " intentos, sino se bloquea la cuenta.")
        }

    }

    let idProducto = prompt("Para hacer una busqueda mas rapida ingrese el numero del producto que quieres llevar.")

    switch (idProducto) {
        case '1234':
            alert("Jabon nivea...$700")
            break;
        case '4444':
            alert("Shampoo de frutos rojos...$1500")
            break;
        case '45625':
            alert("Desodorante Rexona...$1105")
            break;
        case '88888':
            alert("Alcohol en gel...$800")
            break;
        case '2222':
            alert("Cepillo de dientes...$800")
            break;
        case '9999':
            alert("Barbijo...$400")
            break;
        case '9111':
            alert("Talco...$900")
            break;
        case '7777':
            alert("Crema facial...$3000")
            break;
        case '8585':
            alert("Proteinas...$10000")
            break;
        default:
            alert("Se encuentra fuera de stcok")
            break;
    }

    alert("Este es tu carrito de compra " + idProducto);
}

function salirSesion() {
    let salirSesion = prompt("Para cerrar sesion escriba la palabra ESC")

    while (salirSesion == "ESC" || salirSesion == "esc") {
        alert("Gracias por comprar en MiFarmacia.com")


        salirSesion = prompt("Para cerrar sesion escriba la palabra ESC")
    }

    return salirSesion;
}



