function calculateDeterminant() {
  // Pegar os valores inseridos pelo usuário
  var matrix = [
    [
      parseFloat(document.getElementById("l1c1").value),
      parseFloat(document.getElementById("l1c2").value),
      parseFloat(document.getElementById("l1c3").value),
    ],
    [
      parseFloat(document.getElementById("l2c1").value),
      parseFloat(document.getElementById("l2c2").value),
      parseFloat(document.getElementById("l2c3").value),
    ],
    [
      parseFloat(document.getElementById("l3c1").value),
      parseFloat(document.getElementById("l3c2").value),
      parseFloat(document.getElementById("l3c3").value),
    ],
  ];

  // Calcular o determinante da matriz 3x3
  var determinant = 0;
  for (let j = 0; j < matrix.length; j++) {
    determinant += matrix[0][j] * cofator(matrix, 0, j);
  }

  // Exibir o determinante
  document.getElementById("result").style.display = "inline-block";
  document.getElementById("result").innerHTML =
    "O determinante da matriz é: " + determinant;

  document.getElementById("l1c1").value = "";
  document.getElementById("l1c2").value = "";
  document.getElementById("l1c3").value = "";
  document.getElementById("l2c1").value = "";
  document.getElementById("l2c2").value = "";
  document.getElementById("l2c3").value = "";
  document.getElementById("l3c1").value = "";
  document.getElementById("l3c2").value = "";
  document.getElementById("l3c3").value = "";
}

function cofator(matrix, i, j) {
  return Math.pow(-1, i + j) * determinanteSubMatriz(matrix, i, j);
}

function determinanteSubMatriz(matrix, i, j) {
  let subMatriz = [];
  for (let m = 0, p = 0; m < matrix.length; m++) {
    if (m === i) continue;
    subMatriz[p] = [];
    for (let n = 0, q = 0; n < matrix[m].length; n++) {
      if (n === j) continue;
      subMatriz[p][q] = matrix[m][n];
      q++;
    }
    p++;
  }
  return calcularDeterminante2x2(subMatriz);
}

function calcularDeterminante2x2(matrix) {
  return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
}
