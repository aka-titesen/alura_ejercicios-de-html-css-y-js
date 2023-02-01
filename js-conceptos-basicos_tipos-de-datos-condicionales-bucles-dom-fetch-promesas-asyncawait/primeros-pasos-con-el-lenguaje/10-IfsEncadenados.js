const ciudadDestino = "Bogota";
const ciudadesDisponibles = new Array(
  "Bogota",
  "Lima",
  "Santiago",
  "Montevideo"
);

let edadPasajero = 19;
let estarAcompanhado = true;

console.log(`Verificando pasajes para ${ciudadDestino}`);
//Verificamos que el pasajero cumple las reglas
if (edadPasajero >= 18 || estarAcompanhado) {
  //Evaluamos si la ciudad está disponible
  if (conciudadesDisponibles.indexOf(ciudadDestino) > -1) {
    console.log("Pasaje disponible para venta");
  } else {
    console.log("Ciudad no disponible para viajar");
  }
} else {
  if (edadPasajero >= 16 && ciudadDestino == "Lima") {
    console.log("Pasaje disponible para venta");
  } else {
    console.log("El pasajero no cumple las reglas");
  }
}
