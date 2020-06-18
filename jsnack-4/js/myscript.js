


var genera = document.getElementById("genera");
var numero = document.getElementById("numero");
numero.classList.add("pari", "dispari");

genera.addEventListener ("click", function () {
  numero = (Math.floor(Math.random() * 10) + 1);



  if (!(numero % 2)) {
    numero.classList.remove ("pari");
  } else if (numero % 2) {
    numero.classList.remove ("dispari");
  }
});
