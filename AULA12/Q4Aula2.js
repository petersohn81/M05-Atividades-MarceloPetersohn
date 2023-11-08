const prompt = require("prompt-sync")();

let num = parseInt(prompt("Digite um número inteiro positivo: "));

if (num > 0) {
  
  switch (num) {
      
    case 1:
      console.log(`Sequência Fibonnaci até ${num}:`)
      break;
    case 2:
      console.log("Sequência Fibonacci");
      console.log("0 1");
      break;
    default:
      let primeiro = 0;
      let segundo = 1;
      let resultado = '0 1';
      for (let i = 3; i <= num; i++) {
        let terceiro = primeiro + segundo;
        resultado += ` ${terceiro}`;
        primeiro = segundo;
        segundo = terceiro;
        
      }
      console.log(resultado);
      break;
  }
  
}