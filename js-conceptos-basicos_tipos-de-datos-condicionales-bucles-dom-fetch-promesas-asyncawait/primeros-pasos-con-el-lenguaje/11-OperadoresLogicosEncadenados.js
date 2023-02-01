const ciudadDestino = "Bogota";
const ciudadesDisponibles = new Array(
  "Bogota",
  "Lima",
  "Santiago",
  "Montevideo"
);

let edadPasajero = 19;
let estarAcompanhado = true;
let tienePasaporte = true;
let estaCasado = true;

console.log(`Verificando pasajes para ${ciudadDestino} `);
// A && B || C
if (
  conciudadesDisponibles.indexOf(ciudadDestino) > -1 &&
  edadPasajero >= 18 &&
  tienePasaporte &&
  !estaCasado
) {
  console.log("Paquete para solteros disponible para venta");
} else {
  console.log("Ciudad no disponible para viajar");
}
