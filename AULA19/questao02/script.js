function enviarReserva() {
  
  //Criação de váriáveis que recebem a coleta de dados do elemento form.//
  const nome = document.getElementById('nome').value;
  const telefone = document.getElementById('telefone').value;
  const data = document.getElementById('data').value;
  
  
  //Uso da condição if para verificar se o número de telefone é válido//
  if(!validaTelefone(telefone)){
     alert('Digitar número válido.');
      return;
  }

  //Criação da variável div//
  const div = document.getElementById('dadosReserva');
  
  //Inserindo dados no HTML no elemento <div>//
  div.innerHTML = `  
  <span>Dados da reserva:</span>
  <p>Nome do Cliente: ${nome} </p>
  <p>Tel de Contato: ${telefone}</p>
  <p>Data da Reserva: ${data}</p>`;

  //Resetando o formulário//
  document.getElementById('reservaform').reset();

}




function validaTelefone(telefone){
  
  const tel = telefone.replace(/\D/g, '');
  return tel.length >= 10 && tel.length <= 11;
}