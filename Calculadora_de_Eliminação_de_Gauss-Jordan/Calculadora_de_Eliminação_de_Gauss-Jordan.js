function decimalParaFracao(decimal) {
  // Determinar o sinal do número decimal
  let sinal = decimal < 0 ? "-" : "";
  
  // Usar a função fraction da biblioteca math.js
  let fracao = math.fraction(Math.abs(decimal));
  
  // Retornar a fração como uma string, incluindo o sinal
  return sinal + fracao.n + '/' + fracao.d;
}


function gaussJordan() {
  let matrix = [
    [
      parseFloat(document.getElementById("l1c1").value),
      parseFloat(document.getElementById("l1c2").value),
      parseFloat(document.getElementById("l1c3").value),
      parseFloat(document.getElementById("l1c4").value),
    ],
    [
      parseFloat(document.getElementById("l2c1").value),
      parseFloat(document.getElementById("l2c2").value),
      parseFloat(document.getElementById("l2c3").value),
      parseFloat(document.getElementById("l2c4").value),
    ],
    [
      parseFloat(document.getElementById("l3c1").value),
      parseFloat(document.getElementById("l3c2").value),
      parseFloat(document.getElementById("l3c3").value),
      parseFloat(document.getElementById("l3c4").value),
    ],
  ];

  let steps = [];

  // Implementação da eliminação de Gauss-Jordan
  for (let i = 0; i < matrix.length; i++) {
    let pivot = matrix[i][i];
    for (let j = 0; j < matrix[i].length; j++) {
      matrix[i][j] /= pivot;
    }
    steps.push(JSON.parse(JSON.stringify(matrix)));

    for (let k = 0; k < matrix.length; k++) {
      if (k != i) {
        let factor = matrix[k][i];
        for (let l = 0; l < matrix[k].length; l++) {
          matrix[k][l] -= factor * matrix[i][l];
        }
      }
    }
    steps.push(JSON.parse(JSON.stringify(matrix)));
  }

  // Exibindo a matriz na tela
document.getElementById("matrix").style.display = "inline-block";
let matrixDiv = document.getElementById("matrix");
matrixDiv.innerHTML = "";
for (let s = 0; s < steps.length; s++) {
  let grid = document.createElement('div');
  grid.style.display = 'grid';
  grid.style.gridTemplateColumns = 'repeat(' + steps[s][0].length + ', 1fr)';
  grid.style.gap = '10px';
  grid.style.marginBottom = '20px';
  matrixDiv.innerHTML += "Passo " + (s + 1) + ":<br>";
  for (let i = 0; i < steps[s].length; i++) {
    for (let j = 0; j < steps[s][i].length; j++) {
      let valor = steps[s][i][j];
      // Se o valor é um número decimal, converta-o para uma fração
      if (valor % 1 !== 0) {
        valor = decimalParaFracao(valor);
      }
      let cell = document.createElement('div');
      cell.innerText = valor;
      grid.appendChild(cell);
    }
  }
  matrixDiv.appendChild(grid);
}

  document.getElementById("l1c1").value = "";
  document.getElementById("l1c2").value = "";
  document.getElementById("l1c3").value = "";
  document.getElementById("l1c4").value = "";
  document.getElementById("l2c1").value = "";
  document.getElementById("l2c2").value = "";
  document.getElementById("l2c3").value = "";
  document.getElementById("l2c4").value = "";
  document.getElementById("l3c1").value = "";
  document.getElementById("l3c2").value = "";
  document.getElementById("l3c3").value = "";
  document.getElementById("l3c4").value = "";
}