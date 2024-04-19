function calculateDeterminant() {
  // Pegar os valores inseridos pelo usuário
  var matrix = [
    [
      document.getElementById("l1c1").value,
      document.getElementById("l1c2").value,
      document.getElementById("l1c3").value,
    ],
    [
      document.getElementById("l2c1").value,
      document.getElementById("l2c2").value,
      document.getElementById("l2c3").value,
    ],
    [
      document.getElementById("l3c1").value,
      document.getElementById("l3c2").value,
      document.getElementById("l3c3").value,
    ],
  ];

  // Converter os valores para números
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      matrix[i][j] = parseFloat(matrix[i][j]);
    }
  }

  // Calcular o determinante da matriz 3x3
  var determinant =
    matrix[0][0] * (matrix[1][1] * matrix[2][2] - matrix[1][2] * matrix[2][1]) -
    matrix[0][1] * (matrix[1][0] * matrix[2][2] - matrix[1][2] * matrix[2][0]) +
    matrix[0][2] * (matrix[1][0] * matrix[2][1] - matrix[1][1] * matrix[2][0]);

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