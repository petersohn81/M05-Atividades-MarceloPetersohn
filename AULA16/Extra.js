const prompt = require("prompt-sync")();

//Variável client representa a lista de clientes//
const client = [{nome:"Pedro", cpf: 46381239032},{nome:"Marcelo", cpf: 12387434508}];


//Variável product representa a lista de produtos//
const product = [{nome:"Calça", preco:150.00}, {nome:"Camisa", preco:180.00}, {nome:"Sapato", preco:300.00}, {nome:"Cinto", preco:90.00}];


//Função para inserir cliente na lista//

function InserirCliente(nome, cpf) {
  const novocli = {
    nome: nome,
    cpf: cpf
  };
  
  client.push(novocli);
  
}

//Função para inserir produto na lista//

function InserirProduto(nome, preco) {
  const novoprod = {
    nome: nome,
    preco: preco
  };
  product.push(novoprod);
  
}

//Função para realizar venda//


function RealizarVenda(prod, quant) {
  
  const venda = 0;
  
  
    if (prod === 1){
      
      venda += product[0][1] * quant;
    } else if (prod === 2){
      
      venda += product[1][1] * quant;
    } else if (prod === 3){
      
      venda += product[2][1] * quant;
    } else if (prod === 4){
      
      venda += product[3][1] * quant;
    } else {
      console.log("Número inválido.");
      
    }
};
    




//Executando a função://

console.log("Lista de Produtos:");
console.log("1 - Inserir Cliente: "); 
console.log("2 - Inserir Produto: ");
console.log("3 - Realizar Venda: ");




while (true) {
  
  const opcao = parseInt(prompt("Selecione a opção do menu: "));
  
  if (opcao === 1) { 
  
    InserirCliente(prompt("Digite o nome do cliente:"),prompt("Digite o cpf:"))
    console.log(client);
  }
  if (opcao === 2) {
  
    InserirProduto(prompt("Digite o nome do produto:"),prompt("Digite o preço:"))
    console.log(product);
  }
  if (opcao === 3) {
    console.log("Menu:");
    console.log("1 - Calça ");  
    console.log("2 - Camisa ");
    console.log("3 - Sapato ");
    console.log("4 - Cinto ");

 
    const venda = RealizarVenda(prompt("Selecione o produto que deseja comprar: "),prompt("Selecione a quantidade: "));
    console.log("Venda realizada:")
    console.log(venda);
  
  } 
  else {
      console.log("Número inválido.");
      break;
  }
  

};



