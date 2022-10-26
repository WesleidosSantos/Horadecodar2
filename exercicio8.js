var soma = 0;
var numero1 = parseInt(prompt("Digite o primeiro valor: "));
var numero2 = parseInt(prompt("Digite o segundo valor: "));
var numero3 = parseInt(prompt("Digite o terceiro valor: "));
var numero4 = parseInt(prompt("Digite o quarto valor: "));
var media = (numero1 + numero2 + numero3 + numero4) / 4;

alert("A sua média é " + media);


       if (media < 5){
           soma += numero1;
           alert("tente novamente");
       }
       if (media > 5){
            soma += numero2;
            alert("Você foi aprovado");
       }