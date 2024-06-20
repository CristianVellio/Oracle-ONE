let title = document.querySelector("h1");
titulo.innerHTML = "Hora del Desafío";

function mostarMensajeEnLaConsola() {
  console.log("El botón fue clicado!");
}

function mostrarAlerta() {
  let ciudad = prompt("Por favor, ingresa el nombre de una ciudad de Brasil:");
  alert("Estuve en " + ciudad + " y me acordé de ti.");
}

function mostarAlertaLuv() {
  alert("AMO JS");
}

function sumaDosNumeros() {
  let primerNumero = parseInt(prompt("Digite el primer numero"));
  let segunNumero = parseInt(prompt("Digite el segundo numero"));
  let resultado = primerNumero + segunNumero;
  alert("${primerNumero} + ${segunNumero} = ${resultado}");
}
