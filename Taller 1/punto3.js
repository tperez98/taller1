/*El programa debe pedir al usuario la edad y debe imprimir lo siguiente:
a. Entre 0 y 9 años  Es niño
b. Entre 10 y 17 años  Es adolescente
c. Entre 18 y 40 años  Es adulto
d. Entre 40 y 60 años  Es adulto mayor
e. Mayor a 60 años  Es abuelo*/
const prompt = require("prompt-sync")();
const edadDada = parseInt(prompt("¿cuntos años tiene?"));

if (edadDada>= 0 && edadDada <= 9) {
    console.log("Eres un niño.");
} else if (edadDada>= 10 && edadDada <= 17) {
    console.log("Eres un adolescente.");
} else if (edadDada >= 18 && edadDada <= 40) {
    console.log("Eres un adulto.");
} else if (edadDada > 40 && edadDada <= 60) {
    console.log("Eres un adulto mayor.");
} else if (edadDada > 60) {
    console.log("Eres un abuelo.");
} else {
    console.log("Edad no válida. Ingresa un número positivo.");
}