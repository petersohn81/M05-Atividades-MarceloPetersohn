const prompt = require("prompt-sync")();

let palavra = prompt("Digite uma palavra: ");

let tamanho = palavra.length;
let string_invertida = '';


for (let i = tamanho - 1; i >= 0; i--) {
    string_invertida += palavra[i];
  
}

console.log(`String Invertida: ${string_invertida}`);
