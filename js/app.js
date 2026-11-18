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
                alert("comprarEntradas()");
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