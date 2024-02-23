// VARIABLES
// Botenes centrales
let btnPi = document.getElementById("btnPi");
let btnPa = document.getElementById("btnPa");
let btnTi = document.getElementById("btnTi");
//opciones que se muestran al seleccionar
let opcionJugador = document.getElementById("opcionJugador");
let opcionMaquina = document.getElementById("opcionMaquina");
// Marcador
let resultUser = document.getElementById("resultUser");
let resultMaquina = document.getElementById("resultMaquina");
// contadores
let contadorResultUser = 0;
let contadorResultMaquina = 0;
// modal inicio
let modalWelcome = document.getElementById("modalWelcome");
let btnInicio = document.getElementById("btnInicio");
// modal ganador
let modalGanador = document.getElementById("modalGanador");
let btnReset = document.getElementById("btnReset");
let ganador = document.getElementById("ganador");


// * FUNCIONES
// Oculta modal de bienvenida
function ocultarBienvenida() {
  modalWelcome.style.display = "none";
}
// Selección opción Humano
function seleccionJugador() {
  let valorMarcado = this.value;
  opcionJugador.textContent = valorMarcado;
  const maquina = seleccionMaquina();
  buscarGanador(valorMarcado, maquina);
}
// Selección opción Máquina
function seleccionMaquina() {
  const ppt = ["✊", "🖐️", "✌️"];
  const indiceAletorio = Math.floor(Math.random() * ppt.length);
  const maquina = ppt[indiceAletorio];
  opcionMaquina.textContent = maquina;
  return maquina;
}
// Compara las opciones y evalua
function buscarGanador(valorMarcado, maquina) {
  if (valorMarcado === maquina) {
    // console.log("Empate");
    // alert("EMPATE");
  } else if (
    (valorMarcado === "✊" && maquina === "✌️") ||
    (valorMarcado === "🖐️" && maquina === "✊") ||
    (valorMarcado === "✌️" && maquina === "🖐️")
  ) {
    // console.log("Ganaste");
    contadorResultUser++;
  } else {
    // alert("PERDISTE");
    contadorResultMaquina++;
  }

  if (contadorResultUser > 9) {
    let humansWin = "humansWin";
    mostrarModalGanador(humansWin);
    reset();
  } else if (contadorResultMaquina > 9) {
    let machineWin = "machineWin";
    mostrarModalGanador(machineWin);
    reset();
  } else {
    actualizarMarcador(contadorResultUser, contadorResultMaquina);
  }
}
// Actualiza Marcador
function actualizarMarcador(user, maquina) {
  resultUser.textContent = user;
  resultMaquina.textContent = maquina;
}
// Muestra el modal ganador
function mostrarModalGanador(ganadorString) {
  modalGanador.style.display = "flex";
  if (ganadorString == "humansWin") {
    ganador.textContent = "🧔";
  } else if (ganadorString == "machineWin") {
    ganador.textContent = "🤖";
  }
}
// Oculta el modal ganador
function ocultarModalGanador() {
  modalGanador.style.display = "none";
}
// Función reset (puntuación > 9)
function reset() {
  contadorResultUser = 0;
  contadorResultMaquina = 0;
  actualizarMarcador(contadorResultUser, contadorResultMaquina);
}


// EVENT LISTENERS
btnPi.addEventListener("click", seleccionJugador);
btnPa.addEventListener("click", seleccionJugador);
btnTi.addEventListener("click", seleccionJugador);

btnInicio.addEventListener("click", ocultarBienvenida);
btnReset.addEventListener("click", ocultarModalGanador);
