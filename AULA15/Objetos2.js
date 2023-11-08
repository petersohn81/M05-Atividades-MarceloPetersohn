

const livro = {
  
  titulo: 'Meu Livro',
  autor: 'Marcelo',
  anoPublicacao: 2010,
  genero: 'Engenharia',
  disponivel: true,
  emprestarLivro: function() {
    this.disponivel = false;
  }
  
};

console.log("Informações:");
console.log("Título do Livro: " + livro.titulo);
console.log("Autor do Livro: " + livro.autor);
console.log("Ano de Publicação: " + livro.anoPublicacao);
console.log("Gênero: " + livro.genero);
console.log("Disponível: " + livro.disponivel);


livro.emprestarLivro();
console.log("Disponível após empréstimo: " + livro.disponivel);


