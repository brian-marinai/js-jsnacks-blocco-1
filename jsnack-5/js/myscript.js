

var btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  var numero1 = parseInt(document.getElementById("numero1").value);
  var numero2 = parseInt(document.getElementById("numero2").value);
  var op document.getElementById("selezione").value;
  var risultato = document.getElementById("risultato");

  if (!op) {
    risultato.innerHTML = "non hai selezionato nessuna operazione"
  } else if (op == 1) {
    risultato.innerHTML = numero1 + numero2;
  } else if (op == 2) {
    risultato.innerHTML = numero1 - numero2;
  } else if (op == 3) {
    risultato.innerHTML = numero1 * numero2;
  } else if (op == 4) {
    risultato.innerHTML = numero1 / numero2;
  }
});
