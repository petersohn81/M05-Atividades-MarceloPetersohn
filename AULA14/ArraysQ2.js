 let numeros = [1, 2, 7, 14, 5, 0, 10, 23, 13, 17, 8, 19];


// 1:

function ehPrimo(numero) {
  
  if (numero <= 1)
    return false;
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

// 2:

let numerosPrimos = numeros.filter(ehPrimo);
console.log("Lista de números primos:")
console.log(numerosPrimos);

// 3:

let quadradosDosPrimos = numeros.map(numero => numero * numero);
console.log("Quadrado dos Primos:")
console.log(quadradosDosPrimos);