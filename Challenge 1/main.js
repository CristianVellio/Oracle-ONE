const msj = document.querySelector("#textarea");
const btnEncriptar = document.querySelector("#encriptar");
const btnDesencriptar = document.querySelector("#desencriptar");
const btnCopiar = document.querySelector("#copiar");
const msjFinal = document.querySelector("#resultado");

const msjEncriptar = (txt) => {
  switch (txt) {
    case "a":
      return "ia";
    case "e":
      return "enter";
    case "i":
      return "imes";
    case "o":
      return "ober";
    case "u":
      return "ufat";
    default:
      return txt;
  }
};

const encriptar = (txt) => {
  const msjEncriptado = txt.replace(/a|e|i|o|u/g, msjEncriptar);
  toggleElementVisibility("ocultar", false);
  toggleElementVisibility("resultado", true);
  toggleElementVisibility("copiar", true);
  return msjEncriptado;
};

const msjDesencriptar = (txt) => {
  switch (txt) {
    case "ia":
      return "a";
    case "enter":
      return "e";
    case "imes":
      return "i";
    case "ober":
      return "o";
    case "ufat":
      return "u";
    default:
      return txt;
  }
};

const desencriptar = (txt) => {
  const msjDesencriptado = txt.replace(
    /ia|enter|imes|ober|ufat/g,
    msjDesencriptar
  );
  return msjDesencriptado;
};
btnEncriptar.addEventListener("click", (event) => {
  event.preventDefault();
  const txt = msj.value;
  msjFinal.value = "";
  const msjSeguro = encriptar(txt);
  msjFinal.value = msjSeguro;
});

btnDesencriptar.addEventListener("click", (event) => {
  event.preventDefault();
  const txt = msj.value;
  msjFinal.value = "";
  const msjSeguro = desencriptar(txt);
  msjFinal.value = msjSeguro;
});

btnCopiar.addEventListener("click", (event) => {
  event.preventDefault();
  msjFinal.select();
  navigator.clipboard.writeText(msjFinal.value);
});

const toggleElementVisibility = (elementId, shouldShow) => {
  const element = document.getElementById(elementId);
  if (shouldShow) {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
};
