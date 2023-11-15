// Aqui serão adicionados seus scripts

//Acessando e Exibindo Conteúdo do DOM://
const a = document.getElementById('noticia-principal');
//alert(a.innerHTML);//

//Atualizando Estilos de Títulos://
const b = document.getElementsByTagName("h1");
for(const x of b){
    x.style.color = "green";
}


//Modificando Parágrafos://
const c = document.getElementsByClassName("paragrafo-noticia");
for(const x of c){
  x.innerHTML = "Noticia Completa";
}


// Adicionando Comentários://

const comentario = document.getElementById("secao-cometarios");
const novo = document.createElement("p");
novo.innerHTML = "Deixe seus comentários.";
comentario.appendChild(novo);

//Removendo Última Atualização://

const atualizar = document.getElementById("ultimas-atualizacoes");
const ultimo = atualizar.lastElementChild;
atualizar.removeChild(ultimo);


//Extra//

const alternar = document.getElementById("alternar-tema");
alternar.addEventListener("click", () => {
    document.body.style.backgroundColor = "#333";
    document.body.style.color = "#fff";
  
  }
)
                          
//addEventListener -> Adicionar um evento onde, no caso do exercício extra, seria o click.



