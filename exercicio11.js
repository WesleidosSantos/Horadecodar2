var tipo = parseInt(prompt("Digite a operação voce deseja usar: sendo 1.Adição, 2.Subtração, 3.Multiplicação e 4.Divisão"))
var numero1 = parseInt(prompt("Digite um numero:"));
var numero2 = parseInt(prompt("Digite outro numero: "));
var resultado= 0;

if(tipo == 1){
    resultado = numero1 + numero2;
    alert ("O resultado da conta é " + resultado);
}

else if(tipo == 2){
    resultado = numero1 - numero2;
    alert ("O resultado da operação é " + resultado);
}

else if(tipo == 3){
    resultado = numero1 * numero2;
    alert ("O resultado da conta é " + resultado);
}

else if (tipo == 4){
    resultado = numero1 / numero2;
    alert ("O resultado da conta é  " + resultado);

}
else{
    alert("Algo deu errado. Tente novamente.");
}