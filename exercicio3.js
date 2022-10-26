var numero1=window.prompt("Informe um numero")
var numero2=window.prompt("Informe um segundo numero")
var numero3=window.prompt("Informe um terceiro numero")

if(numero1 > numero2 && numero1 > numero3){
    alert( numero1 + " é maior ");
}
if(numero1 > numero2 && numero1 > numero3){
    alert( numero2 + " é maior ");
}
if(numero3 > numero1 && numero3 > numero2){
   alert( numero3 + " é maior ");
}