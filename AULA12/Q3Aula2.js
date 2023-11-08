const prompt = require("prompt-sync")();

let imprimir = prompt("Deseja imprimir um retângulo (s/n)? ")

  
    while (true) {
  
  
      let a = parseInt(prompt("Informe a altura do retângulo: "));
      let l = parseInt(prompt("Informe a largura do retângulo: "));
    
          if (a > l) {
    
            console.log("Entrada inválida.")
    
          }
          else {
    
            for (let i = 0; i < a; i++) {
              console.log(a);
            
                for (let i = 0; i < l; i++) {
        
                  console.log(l);
                }
            }
          }
      break;

    }

 