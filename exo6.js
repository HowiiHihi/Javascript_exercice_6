// getElementById permet de récupérer un élément du fichier HTML  par son ID (ne pas oublier .document au début et .value à la fin)
function reste()
{
  var firstNumber = document.getElementById('firstNumber').value;
  var secondNumber = document.getElementById('secondNumber').value;
  var result = firstNumber % secondNumber;
  alert(`Reste de la division : ${result}`);
}
