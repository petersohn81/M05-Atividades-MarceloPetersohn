const prompt = require("prompt-sync")();

 let tarefas = [
   "Estudar JavaScript",
   "Fazer exercícios de arrays",
   "Preparar apresentação",
   "Enviar relatório",
   "Terminar modulo 4 - Feito",
   "Aprender html e css - Feito"
 ];

// Liste todas as tarefas na console, indicando a posição de cada uma no formato "Posição - Descrição". Use um loop para percorrer o array e imprima cada tarefa na console.. //

for(let i = 0; i < tarefas.length; i++) {
  
  console.log("Listar tarefas:")
  console.log(`${i + 1} - ${tarefas[i]}`);
  
}

//Utilizando a propriedade filter, crie um novo array chamado tarefasPendentes que contenha apenas as tarefas que não contenham a palavra "Feito". Imprima o array resultante na console.//


function verifica(texto) {
  return !texto.includes("Feito");
}

let tarefasPendentes = tarefas.filter(verifica);
console.log("Filtrar tarefas:")
console.log(tarefasPendentes);
 

// Utilizando a propriedade sort, ordene as tarefas em ordem alfabética. Imprima o array resultante na console.//

let ordenar = tarefas.sort();
console.log("Ordenar tarefas:")
console.log(ordenar);

//Utilizando a propriedade slice, crie um novo array chamado primeirasTarefas que contenha as duas primeiras tarefas da lista original. Imprima o array resultante na console.//

let primeirasTarefas = tarefas.slice(0, 2);
console.log("Imprimir primeiras tarefas:")
console.log(primeirasTarefas);

// Utilizando a propriedade pop, remova a última tarefa da lista. Imprima a lista de tarefas atualizada na console.//

let remover = tarefas.pop();
console.log("Remover a última tarefa da lista:")
console.log(remover);
console.log("Listar as tarefas após a remoção:")
console.log(tarefas);

//Adicione uma nova tarefa ao final da lista. A nova tarefa deve ter a descrição "Ler livro novo". Imprima a lista de tarefas atualizada na console//

tarefas.push("Ler livro novo");
console.log("Tarefa Adicionada à lista:")
console.log(tarefas);
