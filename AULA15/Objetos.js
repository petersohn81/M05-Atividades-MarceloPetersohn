


// Criando objeto e adicionando propriedades://


const pessoa = {
  
  nome: 'Marcelo',
  idade: 42,
};

//Acessando e exibindo propriedades://

console.log(pessoa);


//Alterando propriedades://

pessoa.idade = 40;
console.log("Nova idade: " + pessoa.idade);



//Criando mais uma pessoa://

const pessoa2 = {
  
  nome: 'Marcela',
  idade: 38,
  
};

console.log(pessoa2);


//Loop em propriedades://


for(let x in pessoa2) 
  console.log(`${x}: ${pessoa2[x]}`);


//Função no objeto://

pessoa2.apresentacao = function () {
  
  console.log(`Olá! Meu nome é ${pessoa2.nome}.`);
}

pessoa2.apresentacao();



//Adicionando Propriedades Dinamicamente://

pessoa.email = 'marcelo@uol.com';
console.log("Email: " + pessoa.email);





