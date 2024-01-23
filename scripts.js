// Variables
let btnPi = document.getElementById("btnPi");
let btnPa = document.getElementById("btnPa");
let btnTi = document.getElementById("btnTi");

let opcionJugador = document.getElementById("opcionJugador");
let opcionMaquina = document.getElementById("opcionMaquina");

let resultUser = document.getElementById("resultUser");
let resultMaquina = document.getElementById("resultMaquina");

let contadorResultUser = 0;
let contadorResultMaquina = 0;


// Funciones
function start() {
  const ppt = ["piedra", "papel", "tijeras"];
  const indiceAletorio = Math.floor(Math.random() * ppt.length);
  const maquina = ppt[indiceAletorio];

  console.log(maquina);

  const usuario = prompt("elige");

  const resultado = buscarGanador(usuario, maquina);
  console.log(resultado);
}

function buscarGanador(valorMarcado, maquina) {
  if (valorMarcado === maquina) {
    console.log("Empate");
    // alert("EMPATE");
  } else if (
    (valorMarcado === "✊" && maquina === "✌️") ||
    (valorMarcado === "🖐️" && maquina === "✊") ||
    (valorMarcado === "✌️" && maquina === "🖐️")
  ) {
    console.log("Ganaste");
    // alert("GANASTE");
    contadorResultUser++;
  } else {
    // alert("PERDISTE");
    console.log("Gana máquina");
    contadorResultMaquina++;
  }

  actualizarMarcador(contadorResultUser, contadorResultMaquina);
}

function seleccionJugador() {
  let valorMarcado = this.value;
  opcionJugador.textContent = valorMarcado;

  const maquina = seleccionMaquina();
  //   console.log(maquina)
  //   console.log("valor marcado" + valorMarcado);
  //   console.log("valor maquina" + maquina);

  buscarGanador(valorMarcado, maquina);
}

function seleccionMaquina() {
  const ppt = ["✊", "🖐️", "✌️"];
  const indiceAletorio = Math.floor(Math.random() * ppt.length);
  const maquina = ppt[indiceAletorio];
  opcionMaquina.textContent = maquina;
  return maquina;
}

function actualizarMarcador(user, maquina) {
  resultUser.textContent = user;
  resultMaquina.textContent = maquina;
}

// Listeners
btnPi.addEventListener("click", seleccionJugador);
btnPa.addEventListener("click", seleccionJugador);
btnTi.addEventListener("click", seleccionJugador);
