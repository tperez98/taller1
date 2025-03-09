//El programa debe pedir al usuario su edad en años, el sistema debe imprimir si es mayor de edad o menor de edad.
const prompt = require("prompt-sync")();
const edadDada = parseFloat(prompt("¿cuntos años tiene?"));


if(edadDada > 18){
    console.log("Usted es mayor de edad");

}
else{
     console.log("usted es menor de edad");
    }