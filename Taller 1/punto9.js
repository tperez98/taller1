/*Cree un programa que permita manejar un vehículo que tiene las siguientes características:
• Placa
• Color
• Marca
• Modelo
• Kilometraje
• Velocidad
El vehículo debe implementar una función denominada prender, que debe mostrar en pantalla la información completa del vehículo y al final “… ha sido prendido”.
El vehículo debe implementar una función denominada apagar que debe mostrar en pantalla las condiciones finales del carro y “… ha sido apagado”
El vehículo debe tener una función denominada acelerar que incrementa en 10km/h la velocidad del vehículo, se puede acelerar únicamente hasta 100km/h. Cada vez que se acelera se debe aumentar el kilometraje recorrido.
El usuario debe decidir la aceleración entre el encendido y el apagado, no puede apagar el carro si no ha sido encendido, no puede prender el carro si ya ha sido prendido, no puede acelerar si el carro no ha sido encendido.*/

const prompt = require("prompt-sync")();

function crearVehiculo(placa, color, marca, modelo, kilometraje) {
    let velocidad = 0;
    let encendido = false;

    function prender() {
        if (encendido) {
            console.log("El vehículo ya está encendido.");
        } else {
            encendido = true;
            console.log("\nInformación del vehículo:");
            console.log(`Placa: ${placa}`);
            console.log(`Color: ${color}`);
            console.log(`Marca: ${marca}`);
            console.log(`Modelo: ${modelo}`);
            console.log(`Kilometraje: ${kilometraje} km`);
            console.log(`Velocidad: ${velocidad} km/h`);
            console.log("El vehículo ha sido prendido.\n");
        }
    }

    function apagar() {
        if (!encendido) {
            console.log("El vehículo ya está apagado.");
        } else {
            encendido = false;
            console.log("\nCondiciones finales del vehículo:");
            console.log(`Kilometraje: ${kilometraje} km`);
            console.log(`Velocidad final: ${velocidad} km/h`);
            console.log("El vehículo ha sido apagado.\n");
            velocidad = 0;
        }
    }

    function acelerar() {
        if (!encendido) {
            console.log("No se puede acelerar porque el vehículo está apagado.");
        } else if (velocidad >= 100) {
            console.log("No se puede acelerar más. Velocidad máxima alcanzada (100 km/h).");
        } else {
            velocidad += 10;
            kilometraje += 10;
            console.log(`El vehículo ha acelerado. Velocidad actual: ${velocidad} km/h`);
        }
    }

    return {
        prender,
        apagar,
        acelerar
    };
}

// Solicitar datos del vehículo al usuario
const placa = prompt("Por favor ingrese la placa del vehículo: ");
const color = prompt("por favor ingrese el color del vehículo: ");
const marca = prompt("por favor ingrese la marca del vehículo: ");
const modelo = prompt("por favor ingrese el modelo del vehículo: ");
const kilometraje = parseFloat(prompt("por favor ingrese el kilometraje del vehículo: "));

const miVehiculo = crearVehiculo(placa, color, marca, modelo, kilometraje);

// Menú de opciones
let opcion;
do {
    console.log("Menú de opciones:");
    console.log("1. Prender vehículo");
    console.log("2. Acelerar vehículo");
    console.log("3. Apagar vehículo");
    console.log("4. Salir");

    opcion = prompt("Seleccione una opción: ");

    switch (opcion) {
        case "1":
            miVehiculo.prender();
            break;
        case "2":
            miVehiculo.acelerar();
            break;
        case "3":
            miVehiculo.apagar();
            break;
        case "4":
            console.log("Saliendo...");
            break;
        default:
            console.log("Opción no válida, intente nuevamente.");
    }
} while (opcion !== "4");

