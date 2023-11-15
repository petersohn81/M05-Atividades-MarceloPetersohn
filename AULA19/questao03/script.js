function adicionarTarefa() {
  
  const tarefa = document.getElementById('tarefa').value;
  const listaTarefas = document.getElementById('listaTarefas');
  
  //Criar elemento li//
  const novaTarefa = document.createElement('li');
  
  //Atribuir valor ao elemento <li> no HTML//
  //A referência da função é o próprio elemento <button>. Uso do this//
  novaTarefa.innerHTML = `
  <p>${tarefa}</p>
  <button onclick="removerTarefa(this)">Remover</button>`;
  
  
  listaTarefas.appendChild(novaTarefa);
  document.getElementById('tarefaform').reset();
  
}

function removerTarefa(button) {
  
  //Remover o elemento pai do button//
  const tarefa = button.parentNode;
  tarefa.remove();
  
}