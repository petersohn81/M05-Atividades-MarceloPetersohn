const prompt = require("prompt-sync")();

function retangulo(largura, altura) {
  
  let resultado = '';
  for (let i = 0; i < altura; i++) {
    
    for (let j = 0; j < largura; j++) {
      
      resultado += '*';
      
    }
    resultado += '\n';
  }
  return resultado;
  
}

let imprimir = 's';

while(imprimir =='s') {
  
  
  imprimir = prompt("Deseja imprimir um retângulo(s/n)? ")
  if (imprimir == 's') {
  
      let largura = parseInt(prompt("Digite a largura do retângulo: "))
      let altura = parseInt(prompt("Digite a altura do retângulo: "))
      if (largura > altura) 
          console.log(retangulo(largura, altura));
      else 
          console.log("Entrada inválida.")
  }
  else {
  
      console.log("Programa finalizado.")
  }

  
}

