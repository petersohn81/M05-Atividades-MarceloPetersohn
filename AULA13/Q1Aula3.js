const prompt = require("prompt-sync")();

function verificaEmail(email) {
  
 if(email.indexOf("gmail.com") !== -1) {
    console.log("O email contém o domínio!");
    let indexDominio = email.indexOf("@");
    let nomeUsuario = email.slice(0, indexDominio);
    console.log("O nome do usuário é: " + nomeUsuario);
 } 
 else {
   console.log("O dominio do email nao é @gmail.com");
   let indexDominio = email.indexOf("@");
   let dominio = email.slice(indexDominio);
   console.log("O domínio do email é" + dominio);
   
 }
 
}

let email = prompt("Digite seu email: ");
const verifica = verificaEmail(email);
