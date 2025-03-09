//Cree un programa que pida al usuario 10 valores, los sume y muestre en pantalla el resultado de la suma, el valor mayor, menor y el promedio.

const prompt = require("prompt-sync")(); // Importamos el módulo prompt-sync

// Inicializamos variables
let valores = []; // Array para almacenar los valores ingresados
let suma = 0; // Variable para la suma de los valores

let num = parseFloat(prompt("Ingrese el valor 1: ")); 
valores.push(num);
suma += num;
let mayor = num;
let menor = num;

for (let i = 1; i < 10; i++) {
    num = parseFloat(prompt(`Ingrese el valor ${i + 1}: `)); 

    valores.push(num);
    suma += num;

    if (num > mayor) mayor = num; // Verificamos si es el mayor número ingresado
    if (num < menor) menor = num; // Verificamos si es el menor número ingresado
}
const promedio = suma / valores.length;

console.log("Valores ingresados:", valores);
console.log("Suma total:", suma);
console.log("Número mayor:", mayor);
console.log("Número menor:", menor);
console.log("Promedio:", promedio);
