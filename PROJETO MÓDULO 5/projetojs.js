/*Variável que recebe o comando querySelector para selecionar todas as células com o atributo data-cell*/
const cellElements = document.querySelectorAll("[data-cell]"); 

/*Variável que recebe o comando querySelector para selecionar todas as células com o atributo data-cell*/
const board = document.querySelector("[data-board]");

/*Variável que recebe o comando querySelector para selecionar o elemento <p> com o atributo data-winning-message-text que envia mensagem de vitória */
const winningMessageTextElement = document.querySelector("[data-winning-message-text]");

/*Variável que recebe o comando querySelector para selecionar o elemento <div> com o atributo data-winning-message que envia mensagem de vitória */
const winningMessage = document.querySelector('[data-winning-message]');

/*Variável que recebe o comando querySelector para selecionar o elemento <button> com o atributo data-restart-button*/
const restartButton = document.querySelector('[data-restart-button]');

/*Variável que representa a vez do 'O' jogar e se encontra dentro da função startGame()*/
let isCircleTurn;





/* Variável que representa um "Array sobre arrays" de combinações vencedoras*/
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];




/*Função que inicia o jogo*/
const startGame = () => {
  
  /*Uso do for para percorrer toda as células e executar um único evento de click na célula*/
  
  for (const cell of cellElements) {
  cell.classList.remove("circle");
  cell.classList.remove("x");
  cell.addEventListener("click", handleClick, { once: true });
  }
  
  isCircleTurn = false;
  
  board.classList.add("x");
  winningMessage.classList.remove("show-winning-message");
};

/*Função para verificar o fim do jogo*/
const endGame = (isDraw) => {
  if (isDraw) {
    winningMessageTextElement.innerHTML = "Empate";
  } else {
    winningMessageTextElement.innerHTML = isCircleTurn ? 'Jogador O venceu!' : 'Jogador X venceu!';
  }
  winningMessage.classList.add("show-winning-message");
  
};

/*Função para checar vitória*/
/*A função checa se o parâmetro currentPlayer contém uma combinação vencedora*/

const checkForWin = (currentPlayer) => {
  return winningCombinations.some((combination) => {
    return combination.every((index) => {
      return cellElements[index].classList.contains(currentPlayer); /*Raciocínio lógico: Para o jogador X, a célula(cellElements[index]) contem o X na posição[0]? Se sim, perguntar para a posição[1] e depois para a posição[3]. Se os 3 índices combinados tiverem o X, retorna verdadeiro */
    });
  }); 
};


/*Função que adiciona a classe X ou O na célula*/

const placeMark = (cell, classToAdd) => {
  cell.classList.add(classToAdd);
  
  
};



/* Função que muda os símbolos. Se o X jogou, agora é a vez do O*/

const swapTurns = () => {
  isCircleTurn = !isCircleTurn;
  
  /*As classes X e O são removidas para não acumular no elemento <div> do HTML.*/
  board.classList.remove("circle");
  board.classList.remove("x");
  
  if (isCircleTurn) {
    board.classList.add("circle");
  } else {
    board.classList.add("x");
  } 
};



const handleClick = (e) => {
  /*Inserir o X ou O*/
  
  const cell = e.target;
  const classToAdd = isCircleTurn ? "circle" : "x"; /*Se for a vez de O, a variável classToAdd recebe o "circle", senão o "x"*/
  
  placeMark(cell, classToAdd);
  
  /*Verificar vitória*/
  const isWin = checkForWin(classToAdd);
  
  if (isWin) {
    endGame(false);
  }
  
  swapTurns();
};

startGame();

/*Adiciona um evento de click no botão Reiniciar e inicia-se o jogo novamente*/
restartButton.addEventListener("click", startGame);


/*Variáveis, comandos e funções para utilizar um contador como placar.*/

/*Variável que recebe o elemento <button> de id "positive1"*/
const positiveButton1 = document.getElementById("positive1");

/*Variável que recebe o elemento <button> de id "negative1"*/
const negativeButton1 = document.getElementById("negative1");

/*Variável que recebe o elemento <button> de id "positive2"*/
const positiveButton2 = document.getElementById("positive2");

/*Variável que recebe o elemento <button> de id "negative2"*/
const negativeButton2 = document.getElementById("negative2");

/*Variável que recebe o elemento <span> de id "count1"*/
const value1 = document.getElementById("count1");

/*Variável que recebe o elemento <span> de id "count1"*/
const value2 = document.getElementById("count2");

let count = 0; /*Variável count que representa o contador.*/
let intervalId = 0; /*Variável criada para ser usada com o comando setInterval e fazer com que o evento "mousedown" funcione num determinado intervalo.*/

/*Função que atualiza o contador do jogador X*/
const updatevalueX = () => {
  value1.innerHTML = count;
  
};

/*Função que atualiza o contador do jogador O*/
const updatevalueO = () => {
  value2.innerHTML = count;
  
};

/*Evento "mousedown" para contar quando o mouse for clicado*/
positiveButton1.addEventListener('mousedown', () => {
  
  intervalId = setInterval(() => {
    count += 1;
    updatevalueX();
    
  }, 100);
  
})


negativeButton1.addEventListener('mousedown', () => {
  
  intervalId = setInterval(() => {
    count -= 1;
    updatevalueX();
    
  }, 100);
  
})


positiveButton2.addEventListener('mousedown', () => {
  
  intervalId = setInterval(() => {
    count += 1;
    updatevalueO();
    
  }, 100);
  
})


negativeButton2.addEventListener('mousedown', () => {
  
  intervalId = setInterval(() => {
    count -= 1;
    updatevalueO();
    
  }, 100);
  
})

/*Evento "mouseup" que interrompe a contagem quando solta o mouse*/
document.addEventListener('mouseup', () => clearInterval(intervalId));