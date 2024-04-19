// Desenvolva o código em JavaScript de um programa que soma números inteiros informados
// pelo usuário até que um número negativo seja informado e então imprime o resultado da
// soma na tela.

function clearResult() {
  document.getElementById("result").innerHTML = "";
  document.getElementById("result").style.display = "none";
}

function calculateSum() {
  let x = 0;
  let sum = 0;
  let numbers = []; // Vetor para armazenar os números

  while (x >= 0) {
    x = prompt("Digite o(s) valor(es) que quer somar com outro(s) valor(es): ");

    x = parseInt(x);

    if (x < 0) {
      break;
    }

    numbers.push(x); // Adiciona o número ao vetor
    sum += x;
  }

  // Cria uma string com a soma
  let sumString =
    "O resultado da soma de " + numbers.join(" + ") + " é: " + sum;

  // Em HTML, usamos o método innerHTML para exibir a saída
  document.getElementById("result").innerHTML = sumString;
  document.getElementById("result").style.display = "block";
}
