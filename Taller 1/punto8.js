/*Cree un programa que permita crear una persona con la siguiente información:
• Nombres
• Apellidos
• Género
• Fecha de nacimiento
• Edad
• Salario
La aplicación debe permitir pedir los datos al usuario para crear a una persona en específico, y luego mostrar un menú de opciones de la siguiente manera:
a. Consultar persona
b. Modificar persona
c. Aumentar salario
d. Verificar mayoría de edad
Utilice clases, métodos modificadores de acceso, constructores y funciones para desarrollar el problema.*/

const prompt = require("prompt-sync")();

// Definimos la clase Persona
class Persona {
    constructor(nombres, apellidos, genero, fechaNacimiento, salario) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.genero = genero;
        this.fechaNacimiento = new Date(fechaNacimiento);
        this.edad = this.calcularEdad();
        this.salario = salario;
    }
    // Método para calcular la edad
    calcularEdad() {
        const hoy = new Date();
        let edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear();
        const mes = hoy.getMonth() - this.fechaNacimiento.getMonth();
        if (mes < 0 || (mes === 0 && hoy.getDate() < this.fechaNacimiento.getDate())) {
            edad--;
        }
        return edad;
    }
    // Método para consultar la información de la persona
    consultarPersona() {
        console.log("\nInformación de la persona:");
        console.log("Nombres:", this.nombres);
        console.log("Apellidos:", this.apellidos);
        console.log("Género:", this.genero);
        console.log("Fecha de Nacimiento:", this.fechaNacimiento.toDateString());
        console.log("Edad:", this.edad, "años");
        console.log("Salario:", "$" + this.salario.toFixed(2));
    }
    // Método para modificar los datos de la persona
    modificarPersona(nombres, apellidos, genero, fechaNacimiento) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.genero = genero;
        this.fechaNacimiento = new Date(fechaNacimiento);
        this.edad = this.calcularEdad();
    }

    // Método para aumentar el salario
    aumentarSalario(porcentaje) {
        this.salario += this.salario * (porcentaje / 100);
        console.log("Nuevo salario:", "$" + this.salario.toFixed(2));
    }

    // Método para verificar si es mayor de edad
    verificarMayoriaEdad() {
        if (this.edad >= 18) {
            console.log("La persona es mayor de edad.");
        } else {
            console.log("La persona es menor de edad.");
        }
    }
}

// Pedir datos al usuario para crear una persona
const nombres = prompt("Ingrese nombres: ");
const apellidos = prompt("Ingrese apellidos: ");
const genero = prompt("Ingrese género: ");
const fechaNacimiento = prompt("Ingrese fecha de nacimiento (YYYY-MM-DD): ");
const salario = parseFloat(prompt("Ingrese salario: "));

const persona = new Persona(nombres, apellidos, genero, fechaNacimiento, salario);

// Menú de opciones
let opcion;
do {
    console.log("\nMenú de opciones:");
    console.log("a. Consultar persona");
    console.log("b. Modificar persona");
    console.log("c. Aumentar salario");
    console.log("d. Verificar mayoría de edad");
    console.log("e. Salir");

    opcion = prompt("Seleccione una opción: ");

    switch (opcion) {
        case "a":
            persona.consultarPersona();
            break;
        case "b":
            const nuevosNombres = prompt("Ingrese nuevos nombres: ");
            const nuevosApellidos = prompt("Ingrese nuevos apellidos: ");
            const nuevoGenero = prompt("Ingrese nuevo género: ");
            const nuevaFechaNacimiento = prompt("Ingrese nueva fecha de nacimiento (YYYY-MM-DD): ");
            persona.modificarPersona(nuevosNombres, nuevosApellidos, nuevoGenero, nuevaFechaNacimiento);
            console.log("Datos actualizados correctamente.");
            break;
        case "c":
            const porcentaje = parseFloat(prompt("Ingrese el porcentaje de aumento de salario: "));
            persona.aumentarSalario(porcentaje);
            break;
        case "d":
            persona.verificarMayoriaEdad();
            break;
        case "e":
            console.log("Saliendo...");
            break;
        default:
            console.log("Opción no válida, intente nuevamente.");
    }
} while (opcion !== "e");
