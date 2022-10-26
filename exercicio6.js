var numero1 = parseInt(prompt("Escreva um numero"));
var numero2 = parseInt(prompt("Escreva um numero"));
var numero3 = parseInt(prompt("Escreva um numero"));
var numero4 = parseInt(prompt("Escreva um numero"));

if (numero1 > numero2 && numero1 > numero3 && numero1 > numero4) {
   alert("Primeiro valor: " + numero1  + " " + "Ultimo valor: " + numero4   + " " + "Maior valor: " + numero1 )
}

if (numero2 > numero1 && numero2 > numero3 && numero2 > numero4) {
    alert("Primeiro valor: " + numero1   + " "  + "Ultimo valor: " + numero4   + " " +  "Maior valor: " + numero2 )

}

if (numero3 > numero1 && numero3 > numero2 && numero3 > numero4) {
    alert("Primeiro valor: " + numero1   + " " + "Ultimo valor: " + numero4  + " " + "Maior valor: " + numero3 )

}

if (numero4 > numero1 && numero4 > numero2 && numero4 > numero3) {
    alert("Primeiro valor: " + numero1   + " " +"Ultimo valor: " + numero4  + " " +  "Maior valor: " + numero4 )

}
