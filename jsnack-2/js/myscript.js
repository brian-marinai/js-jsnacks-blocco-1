var creanome = document.getElementById("creanome");

creanome.addEventListener("click", function () {
  var nome = document.getElementById("nome").value;
  var cognome = document.getElementById("cognome").value;
  console.log(nome + " " + cognome);
});
