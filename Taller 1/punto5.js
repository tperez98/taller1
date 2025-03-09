//Cree un programa que permita pedir el valor n de la serie Fibonacci e imprima en pantalla toda la serie hasta ese número

const prompt = require("prompt-sync")(); 

// Función para generar la serie de Fibonacci
function fibonacci(n) {
    let fibSeries = [0, 1]; // Inicializamos la serie con los dos primeros números de Fibonacci
    for (let i = 2; i < n; i++) { 
        let nextNumber = fibSeries[i - 1] + fibSeries[i - 2]; // Suma de los dos números anteriores
        fibSeries.push(nextNumber); // Agregamos el nuevo número a la serie
    }
    return fibSeries; 
}

const n = parseInt(prompt("Ingrese el número de términos de la serie Fibonacci: "));

console.log(`Serie de Fibonacci hasta ${n} términos:`, fibonacci(n));
