const prompt = require("prompt-sync")();

let soma = 0;
let contnum = 0;

while (true) {
  
  let num = parseInt(prompt("Digite um número: "));
  
  if (num == 0) {
    console.log("Você digitou 0 e saiu do programa.");
    break;
    
  }
  
  soma+=num;
  contnum++;
  
}

let media = soma/contnum;
console.log("A média dos números digitados é " + media);