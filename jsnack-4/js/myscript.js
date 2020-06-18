
var genera = document.getElementById("genera");


genera.addEventListener ("click", function () {

  var numero = document.getElementById("numero");

  element = (Math.floor(Math.random() * 10) + 1);

  numero.classList.add ("pari", "dispari");



  if (!(element % 2)) {
    numero.classList.remove ("pari");
  } else if (element % 2) {
    numero.classList.remove ("dispari");
  }

  numero.innerHTML = element;


});
