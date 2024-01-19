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
        console.log("Empate")
      } else if (
        (valorMarcado === "✊" && maquina === "✌️") ||
        (valorMarcado === "🖐️" && maquina === "✊") ||
        (valorMarcado === "✌️" && maquina === "🖐️")
      ) {
        console.log("Ganaste")
      } else {
        console.log("Gana máquina")
      }


//   if (usuario === computadora) {
//     return "Empate";
//   } else if (
//     (usuario === "✊" && computadora === "✌️") ||
//     (usuario === "🖐️" && computadora === "✊") ||
//     (usuario === "✌️" && computadora === "🖐️")
//   ) {
//     return "¡Ganaste!";
//   } else {
//     return "¡La computadora gana!";
//   }
}

let btnPi = document.getElementById("btnPi");
let btnPa = document.getElementById("btnPa");
let btnTi = document.getElementById("btnTi");

let opcionJugador = document.getElementById("opcionJugador");
let opcionMaquina = document.getElementById("opcionMaquina");

function seleccionJugador() {
  let valorMarcado = this.value;
  opcionJugador.textContent = valorMarcado;
 
  const maquina = seleccionMaquina();
  console.log(maquina)

  console.log("valor marcado" + valorMarcado);
  console.log("valor maquina" + maquina);

buscarGanador(valorMarcado,maquina);
  




  
}

function seleccionMaquina() {
  const ppt = ["✊", "🖐️", "✌️"];
  const indiceAletorio = Math.floor(Math.random() * ppt.length);
  const maquina = ppt[indiceAletorio];
  opcionMaquina.textContent = maquina;
  return maquina;
}

btnPi.addEventListener("click", seleccionJugador);
btnPa.addEventListener("click", seleccionJugador);
btnTi.addEventListener("click", seleccionJugador);

