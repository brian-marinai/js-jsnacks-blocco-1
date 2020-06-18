var creanumero = document.getElementById("creanumero");
var colore = document.getElementById("colore");

creanumero.addEventListener("click", function () {
  var numero = prompt ("inserisci un numero");

  if (numero > 0) {
    colore.className = "green";
  } else if (numero < 0) {
    colore.className = "red";
  } else {
    colore.className = "blue";
  }
});
