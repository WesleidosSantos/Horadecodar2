var altura = parseFloat(prompt("Digite a sua altura:"));
var sexo = parseInt(prompt(" Digite 1 para Masculino " + " e 2 para Feminino "));

if (sexo == 1) {
  alert("O seu peso ideial é de :" + (72.7 * altura - 58) + "kilos");
}

else if (sexo == 2) {
  alert("O seu peso ideial é de:" + (62.1 * altura - 44.7) + "kilos");
}
else {
  alert("Algo deu errado. Tente novamente.") ;
}