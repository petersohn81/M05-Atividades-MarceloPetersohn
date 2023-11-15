function coletaDados() {
  
  
  //Criação de váriáveis que recebem a coleta de dados do elemento form.//
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  
  //Criação da variável div//
  const div = document.createElement('div');
  
  //Inserindo dados no HTML no elemento <div>//
  div.innerHTML = `
  <span> Dados Usuário: </span>
  <p>Nome: ${nome} </p>
  <p>Email: ${email} </p>
  <p>Senha: ${senha} </p>`;

  
  //Inserir o elemento <div> no final do <body>
  document.body.appendChild(div);
  
  //Resetando o formulário utilizando comando reset//
  document.getElementById('cadastroForm').reset();
}


  



  
  

