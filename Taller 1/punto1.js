//El programa debe pedir al usuario que digite el valor de la factura, si el valor de la factura es superior a $50.000 debe 
// imprimir en pantalla el valor de la factura más el 15% de impuestos. 


const prompt = require("prompt-sync")();
const valorDado = parseFloat(prompt("¿cual es el valor de la factura?"));

if (valorDado > 50000) {
    const impuesto = valorDado* 0.15;  
    const total = valorDado + impuesto; 
    console.log("El total con impuestos es: $" + total); 
} else {
    console.log("El valor de la factura es: $" + valorDado);
}
