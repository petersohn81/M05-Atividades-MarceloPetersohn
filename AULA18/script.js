//Atividade sobre DOM//

//1. Visibilidade de um elemento://

function mostradiv() {
  const div = document.getElementById('foto');
  if (div.style.visibility == 'visible')
    div.style.visibility = 'hidden';
  else
    div.style.visibility = 'visible';
}

//2. Formatação://

function formatarTexto() {
  
  const formatar = document.getElementById('sobre');
  const input2 = document.getElementById('formatacao');
  formatar.style.textAlign = input2.value;
}


//3. Alterando a cor do rodapé e do título://

function alterarCorFundo() {
  
  const cor = document.getElementById('header');
  const cor2 = document.getElementById('footer');
  const input3 = document.getElementById('cabecalho');
  if(input3.value == 'black') {
    cor.style.backgroundColor = 'black';
    cor.style.color = 'white';
    cor2.style.backgroundColor = 'black';
    cor2.syle.color = 'white';
  }
  else if(input3.value == 'white'){
    cor.style.backgroundColor = 'white';
    cor.style.color = 'black';
    cor2.style.backgroundColor = 'white';
    cor2.syle.color = 'black';
  }
  else{
      cor.style.backgroundColor = input3.value;
      cor2.style.backgroundColor = input3.value;
  }
}
  
//4. Alterando Fonte://
  
function AlterarFonte(){
  const texto = document.getElementById('sobre');
  const input = document.getElementById('alterafonte');
  texto.style.fontFamily = input.value;
  
}

  
//5. Modo escuro/claro://  
  
function alternarModo() {
  
  const secao = document.getElementById('conteudo');
  if(secao.style.backgroundColor == 'white'){
    secao.style.backgroundColor = 'black';
    secao.style.color = 'white';
  }
  else{
    secao.style.backgroundColor = 'white';
    secao.style.color = 'black';
  }
}


