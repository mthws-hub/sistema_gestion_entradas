const PRECIO_ENTRADA = 20;
const CUPOS_INICIALES = 50;
const DESCUENTO_ESTUDIANTE = 30;    
const DESCUENTO_DOCENTE = 15;       
const DESCUENTO_GENERAL = 0;        
const MAX_ENTRADAS_POR_COMPRA = 5;

let cuposDisponibles = CUPOS_INICIALES;
let entradasVendidas = 0;
let ingresosAcumulados = 0;
let numeroCompras = 0;

function mostrarMenu() {
    return prompt(
        "SISTEMA INNOVA ESPE 2026\n\n" +
        "1. Comprar entradas\n" +
        "2. Consultar cupos disponibles\n" +
        "3. Consultar ingresos acumulados\n" +
        "4. Salir\n\n" +
        "Ingrese el número de la opción:"
    );
}

function iniciarSistema() {
    let opcion;

    do {
        opcion = mostrarMenu();
        if (opcion === null) {
            opcion = "4";
        }
        opcion = opcion.trim();

        switch (opcion) {
            case "1":
                comprarEntradas();
                break;
            case "2":
                alert("consultarCupos()");
                break;
            case "3":
                alert("consultarIngresos()");
                break;
            case "4":
                alert("finalizarSistema()");
                break;
            default:
                alert("Opción no válida. Por favor elija una opción del 1 al 4.");
                console.log("Opción de menú inexistente: " + opcion);
        }
    } while (opcion !== "4");
}

function obtenerDescuento(tipo) {
    if (tipo === "estudiante") {
        return DESCUENTO_ESTUDIANTE;
    } else if (tipo === "docente") {
        return DESCUENTO_DOCENTE;
    } else if (tipo === "publico general" || tipo === "público general" || tipo === "general") {
        return DESCUENTO_GENERAL;
    } else {
        return -1;
    }
}

function nombreTipo(tipo) {
    if (tipo === "estudiante") {
        return "Estudiante";
    } else if (tipo === "docente") {
        return "Docente";
    } else {
        return "Público general";
    }
}

function cantidadValida(cantidad) {
    return Number.isInteger(cantidad) && cantidad >= 1 && cantidad <= MAX_ENTRADAS_POR_COMPRA;
}

function comprarEntradas() {
    const nombre = prompt("Ingrese el nombre del comprador:");
    if (nombre === null || nombre.trim() === "") {
        alert("Compra rechazada: el nombre es obligatorio.");
        console.log("Compra rechazada: nombre vacío.");
        return;
    }

    const tipoIngresado = prompt("Tipo de participante (estudiante, docente o publico general):");
    if (tipoIngresado === null) {
        alert("Compra cancelada.");
        return;
    }
    const tipo = tipoIngresado.trim().toLowerCase();
    const porcentajeDescuento = obtenerDescuento(tipo);

    if (porcentajeDescuento === -1) {
        alert("Compra rechazada: tipo de participante no válido.");
        console.log("Compra rechazada: tipo de participante inválido -> " + tipoIngresado);
        return;
    }

    const cantidadIngresada = prompt("Cantidad de entradas (entre 1 y " + MAX_ENTRADAS_POR_COMPRA + "):");
    if (cantidadIngresada === null || cantidadIngresada.trim() === "") {
        alert("Compra rechazada: debe ingresar una cantidad.");
        console.log("Compra rechazada: cantidad vacía.");
        return;
    }
    const cantidad = Number(cantidadIngresada);

    if (!cantidadValida(cantidad)) {
        alert("Compra rechazada: la cantidad debe ser un número entero entre 1 y " + MAX_ENTRADAS_POR_COMPRA + ".");
        console.log("Compra rechazada: cantidad inválida -> " + cantidadIngresada);
        return;
    }

    if (cantidad > cuposDisponibles) {
        alert("Compra rechazada: solo quedan " + cuposDisponibles + " cupos disponibles.");
        console.log("Compra rechazada: cupos insuficientes. Solicitados: " + cantidad + ", disponibles: " + cuposDisponibles);
        return;
    }

    const subtotal = cantidad * PRECIO_ENTRADA;
    const descuento = subtotal * porcentajeDescuento / 100;
    const total = subtotal - descuento;

    cuposDisponibles = cuposDisponibles - cantidad;
    entradasVendidas = entradasVendidas + cantidad;
    ingresosAcumulados = ingresosAcumulados + total;
    numeroCompras = numeroCompras + 1;

    const resumen =
        "RESUMEN DE COMPRA\n\n" +
        "Nombre: " + nombre.trim() + "\n" +
        "Tipo de participante: " + nombreTipo(tipo) + "\n" +
        "Cantidad de entradas: " + cantidad + "\n\n" +
        "Subtotal: $" + subtotal.toFixed(2) + "\n" +
        "Descuento (" + porcentajeDescuento + " %): $" + descuento.toFixed(2) + "\n" +
        "Total a pagar: $" + total.toFixed(2) + "\n\n" +
        "Compra realizada exitosamente.\n\n" +
        "Cupos restantes: " + cuposDisponibles;

    alert(resumen);
    console.log(resumen);
}