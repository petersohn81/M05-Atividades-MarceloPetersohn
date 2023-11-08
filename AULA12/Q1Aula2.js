const prompt = require("prompt-sync")();

let multiplicacao = 0;

let n1 = parseInt(prompt("Digite um número: "));
let n2 = parseInt(prompt("Digite um número: "));


for(let i = 0; i < n2; i++) {
    
    multiplicacao += n1;
  }
  

let resultado = multiplicacao;

console.log('A multiplicação dos números é igual a:' + resultado);