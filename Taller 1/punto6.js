//Cree un programa que le pida al usuario un número hasta que la suma de las entradas sea superior o igual a 50.

const prompt = require("prompt-sync")();

let suma = 0; // Variable para almacenar la suma de los números ingresados

while (suma <= 50) {
    let numero = parseFloat(prompt("Por favor ingrese un número: "));  
    suma += numero; // Suma sin verificar si es un número válido
    console.log(`Suma actual: ${suma}`);
}

console.log("La suma ha alcanzado o superado el número 50. Finalizando...");
