// A função principal em JavaScript é geralmente uma função anônima ou uma função nomeada.
// Não precisamos declarar o tipo de retorno como em C (linha "int main() {")
function clearResult() {
  document.getElementById("result").innerHTML = "";
  document.getElementById("result").style.display = "none";
}

function calculateBMI() {
  // Em JavaScript, usamos "let" para declarar variáveis (linhas "float BMI;", "float weight;", "float height;")
  let BMI;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;

  // Substitui todas as vírgulas por pontos
  height = height.replace(",", ".");

  // A operação matemática é a mesma em C e JavaScript (linha "BMI = (weight/(height * height));")
  BMI = weight / (height * height);
  BMI = BMI.toFixed(2);

  // Em JavaScript, usamos "alert" ou "console.log" para exibir a saída (linha 'printf("BMI: %f\n", BMI);')
  // Em HTML, usamos o método innerHTML para exibir a saída
  document.getElementById("result").innerHTML = "IMC: " + BMI;
  document.getElementById("result").style.display = "block";
  document.getElementById("weight").value = "";
  document.getElementById("height").value = "";
}