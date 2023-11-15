// Aqui serão adicionados seus scripts

//1. Onclick://

const botao = document.getElementById('btnClick');

function alerta() {
  
  botao = alert('Botão clicado');
  
}

//2. Onchange://

const texto = document.getElementById('inputText');

function mudaCor() {
  
 texto.style.color = 'blue';
  
}


//3. Oninput://

const cor = document.getElementById('inputText');

function alteraCor() {
  
  cor.style.color = 'red';
}


//4. Onkeydown, Onkeypress, Onkeyup://

document.getElementById('inputText').onkeydown = function() {
  document.getElementById("outputMessage").innerText = "Teclado pressionado."
}

document.getElementById('inputText').onkeypress = function() {
  document.getElementById("outputMessage").innerText = "Tecla pressionada."
}

document.getElementById('inputText').onkeyup = function () {
  document.getElementById("outputMessage").innerText = "Tecla liberada."
  
  
}


//5. Onmouseover e Onmouseout://

const box = document.getElementById("box");
box.onmouseover = function() {
    this.style.background = "blue";
  
}

box.onmouseout = function() {
  this.style.background = "green";
  
}


//6. Ondrop, Ondragover, Ondragstart://

box.ondragstart = function(event) {
  event.dataTransfer.setData("text/plain", "Arrastar");
}
box.ondragover = function(event) {
  event.preventDefault();
  
}

box.ondrop = function(event) {
  event.preventDefault();
  let data = event.dataTransfer.getData();
  box.innerHTML = data;
}


//7. Onload://

window.onload = function() {
  alert("Página atualizada.")
  
}



//Desafio Extra//

let btn = document.getElementById("btnChallenge");
let contador = 0;

btn.onclick = function() {
  contador++;
  document.getElementById("count").innerHTML = contador;
}

setTimeout(function() {
  alert("Fim do tempo. Você clicou " + contador + "vezes.");
}, 10000);






