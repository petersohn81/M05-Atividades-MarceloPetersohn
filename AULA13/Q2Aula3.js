const prompt = require("prompt-sync")();

let controle = 0;

while(controle != 1) {
  
  let nomeUsuario = prompt("Digite o nome do usuário: ");
  
  if (nomeUsuario.length >= 12) {
    
    nomeUsuario = nomeUsuario.toLowerCase();
    if(nomeUsuario.indexOf("@") === -1) {
      
      console.log("Erro! O nome de usuário deve conter '@'!");
      
    }
  
  if(nomeUsuario.indexOf("admin") !== -1) {
    
    console.log("Erro! O nome de usuarios nao podem começar com 'admin'");
    
  }
    
  else if(nomeUsuario.indexOf("user") !== -1) {
    
    console.log("Nome válido!");
    console.log("O nome do usuário é: " + nomeUsuario);
    controle = 1;
  }
    
  } else {
    
    console.log("Erro! O nome do usuário deve conter pelo menos 12 caracteres")
  }
}