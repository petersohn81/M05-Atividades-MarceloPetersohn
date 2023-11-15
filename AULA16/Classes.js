class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  };
};

class Cliente {
  constructor(nome, cpf) {
    this.nome = nome;
    this.cpf = cpf;
  };
  
};

class Venda {
  constructor(cliente, lista) {
    this.cliente = cliente;
    this.lista = lista;
    
  };
  total() {
    let total = 0;
    for(let i = 0; i < this.lista.length; i++) {
      total += this.lista[i].price;
      
    }
    return total;
  }
};

const clientsStringJson = '[{"name":"Client 1", "cpf":"12345678901"},'+ '{"name":"Client 2", "cpf":"10987654321"},'+ '{"name":"Client 3", "cpf":"12345098765"},'+ '{"name":"Client 4", "cpf":"12345098765"},'+ '{"name":"Client 5", "cpf":"12345098765"},'+ '{"name":"Client 6", "cpf":"12345098765"},'+ '{"name":"Client 7", "cpf":"12345098765"},'+ '{"name":"Client 8", "cpf":"12345098765"},'+ '{"name":"Client 9", "cpf":"12345098765"},'+ '{"name":"Client 10", "cpf":"12345098765"}]';

const cli = JSON.parse(clientsStringJson); //Transforma em lista de objetos//
console.log(cli);


const productsStringJson = '[{"name":"Product 1", "price":1.00},'+ '{"name":"Product 2", "price":2.00},'+ '{"name":"Product 3", "price":3.00},'+ '{"name":"Product 4", "price":4.00},'+ '{"name":"Product 5", "price":5.00},'+ '{"name":"Product 6", "price":6.00},'+ '{"name":"Product 7", "price":7.00},'+ '{"name":"Product 8", "price":8.00},'+ '{"name":"Product 9", "price":9.00},'+ '{"name":"Product 10", "price":10.00}]';

const prod = JSON.parse(productsStringJson);
console.log(prod);

const venda1 = new Venda(cli[0], prod);
console.log("O valor total dos produtos pagos é:");
console.log(venda1.total());






