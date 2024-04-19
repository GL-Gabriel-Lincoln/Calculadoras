var chart;

function calculateDistance() {
  var x1 = document.getElementById("x1").value;
  var y1 = document.getElementById("y1").value;
  var x2 = document.getElementById("x2").value;
  var y2 = document.getElementById("y2").value;

  var diferencaX = x2 - x1;
  var diferencaY = y2 - y1;

  var quadradoDiferencaX = Math.pow(diferencaX, 2);
  var quadradoDiferencaY = Math.pow(diferencaY, 2);

  var soma = quadradoDiferencaX + quadradoDiferencaY;

  var d = Math.sqrt(soma);
  document.getElementById("resultado").style.display = "inline-block";
  document.getElementById("resultado").innerHTML =
    "Passo a passo do cálculo: <br>" +
    "d(A,B) = √((x₂ - x₁)² + (y₂ - y₁)²) <br>" +
    "Δx = x₂ - x₁ = " +
    diferencaX +
    "<br>" +
    "Δy = y₂ - y₁ = " +
    diferencaY +
    "<br>" +
    "(Δx)² = " +
    quadradoDiferencaX +
    "<br>" +
    "(Δy)² = " +
    quadradoDiferencaY +
    "<br>" +
    "√soma = (Δx)² + (Δy)² = " +
    soma +
    "<br>" +
    "d(A, B) = √soma = " +
    d;
  if (chart) {
    chart.destroy();
  }
  document.getElementById("myChart").style.display = "inline-block";
  var ctx = document.getElementById("myChart").getContext("2d");
  chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Ponto 1", "Ponto 2"],
      datasets: [
        {
          label: "Distância",
          data: [0, d], // 0 para o Ponto 1 e 'd' para o Ponto 2
          backgroundColor: "rgba(0, 102, 255, 0.749)",
          borderColor: "rgba(85, 153, 255)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        x: {
          ticks: {
            color: "white",
          },
        },
        y: {
          beginAtZero: true,
          ticks: {
            color: "white",
          },
        },
      },
    },
  });
}
