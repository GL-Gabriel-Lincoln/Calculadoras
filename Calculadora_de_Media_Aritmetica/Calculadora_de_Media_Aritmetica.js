// A função principal em JavaScript é geralmente uma função anônima ou uma função nomeada.
// Não precisamos declarar o tipo de retorno como em C (linha "int main() {")
function clearResult() {
  document.getElementById("result").innerHTML = "";
  document.getElementById("result").style.display = "none";
}

function calculateBMI() {
  let average_arithmetic;
  let a = document.getElementById("a").value;
  let b = document.getElementById("b").value;
  let c = document.getElementById("c").value;

  // Substitui todas as vírgulas por pontos
  a = a.replace(",", ".");
  b = b.replace(",", ".");
  c = c.replace(",", ".");

  average_arithmetic = (parseFloat(a) + parseFloat(b) + parseFloat(c)) / 3;
  average_arithmetic = average_arithmetic.toFixed(2);

  // Em HTML, usamos o método innerHTML para exibir a saída
  document.getElementById("result").innerHTML =
    "Média aritmética: " + average_arithmetic;
  document.getElementById("result").style.display = "block";
  document.getElementById("a").value = "";
  document.getElementById("b").value = "";
  document.getElementById("c").value = "";
}