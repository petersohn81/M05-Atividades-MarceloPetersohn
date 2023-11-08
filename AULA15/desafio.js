const animalDeEstimacao = {
  
  nome: "Snoopy",
  especie: "Cachorro",
  idade: 5,
  fazerBarulho: function() {
    console.log(`O ${animalDeEstimacao.nome} está latindo!`);
  },
  envelhecer: function() {
  this.idade++;
},
  trocarNome: function(novoNome) {
    this.nome = novoNome;
    console.log(`O nome do animal foi alterado para: ${animalDeEstimacao.nome}`);
  }
};

console.log(`Nome: ${animalDeEstimacao.nome}`);
console.log(`Especie: ${animalDeEstimacao.especie}`);
console.log(`Idade: ${animalDeEstimacao.idade}`);

animalDeEstimacao.fazerBarulho();

animalDeEstimacao.envelhecer();
animalDeEstimacao.envelhecer();
animalDeEstimacao.envelhecer();
animalDeEstimacao.envelhecer();
animalDeEstimacao.envelhecer();
console.log(`Idade Atualizada: ${animalDeEstimacao.idade}`);

animalDeEstimacao.trocarNome("Johnny");
console.log(`Nome Atualizado: ${animalDeEstimacao.nome}`);

