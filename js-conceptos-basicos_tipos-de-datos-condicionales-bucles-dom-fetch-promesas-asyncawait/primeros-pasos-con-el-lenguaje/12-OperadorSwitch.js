const ciudadDestino = "Bogota";
const ciudadesDisponibles = new Array(
  "Bogota",
  "Lima",
  "Santiago",
  "Montevideo"
);

let valorPasaje = 0;

console.log(`Verificando pasajes para ${ciudadDestino} `);
// A && B || C
if (conciudadesDisponibles.indexOf(ciudadDestino) > -1) {
  switch (ciudadDestino) {
    case "Bogota":
      valorPasaje = 500;
      break;
    case "Lima":
      valorPasaje = 400;
      break;
    case "Santiago":
      valorPasaje = 380;
      break;
    case "Montevideo":
      valorPasaje = 200;
      break;
    default:
      valorPasaje = 0;
      break;
  }
  console.log(`El valor del pasaje es: ${valorPasaje}`);
} else {
  console.log("Ciudad no disponible para viajar");
}
