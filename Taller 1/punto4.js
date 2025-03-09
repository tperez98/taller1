/*Cree un programa que le presente las siguientes opciones al usuario y según la opción ingresada solicite los números e imprima el resultado en pantalla:
a. 1: Sumar
b. 2: Restar
c. 3: Multiplicar
d. 4: Dividir
e. 5: Raíz Cuadrada
f. 6: Salir*/

const prompt = require("prompt-sync")();
function mostrarMenu() {
    console.log("Seleccione una operación:");
    console.log("1: Suma");
    console.log("2: Resta");
    console.log("3: Multiplicacion");
    console.log("4: Dividision");
    console.log("5: Raíz Cuadrada");
    console.log("6: Salir");
}

let opcion;

do {
    mostrarMenu();
    opcion = parseInt(prompt("Ingrese una opción: "));

    if (opcion >= 1 && opcion <= 4) {
        const num1 = parseFloat(prompt("Por favor ingrese el primer número: "));
        const num2 = parseFloat(prompt("Por favor ingrese el segundo número: "));
        
        switch (opcion) {
            case 1:
                console.log(`Resultado: ${num1} + ${num2} = ${num1 + num2}`);
                break;
            case 2:
                console.log(`Resultado: ${num1} - ${num2} = ${num1 - num2}`);
                break;
            case 3:
                console.log(`Resultado: ${num1} * ${num2} = ${num1 * num2}`);
                break;
            case 4:
                if (num2 !== 0) {
                    console.log(`Resultado: ${num1} / ${num2} = ${num1 / num2}`);
                } else {
                    console.log("Error: No se puede dividir por cero.");
                }
                break;
        }
    } else if (opcion === 5) {
        const num = parseFloat(prompt("Ingrese un número para calcular su raíz cuadrada: "));
        if (num >= 0) {
            console.log(`Resultado: √${num} = ${Math.sqrt(num)}`);
        } else {
            console.log("Error: No se puede calcular la raíz cuadrada de un número negativo.");
        }
    } else if (opcion === 6) {
        console.log("Saliendo...");
    }
} while (opcion !== 6); // para salir del bucle 
