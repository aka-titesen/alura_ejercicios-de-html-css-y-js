//Operadores de comparación

const valorPasaje = "1000";

if (valorPasaje == 1000) {
  //Con 2 signos iguales, js solo compara el valor. Con 3 signos iguales evualua tanto el valor como el tipo de dato
  console.log("El pasaje vale mil");
}

const ciudadDestino = "Bogota";
const ciudadesDisponibles = new Array(
  "Bogota",
  "Lima",
  "Santiago",
  "Montevideo"
);
//If evalua una condición.

/*
console.log(`Verificando pasajes para ${ciudadDestino} `);
if (conciudadesDisponibles.indexOf(ciudadDestino) >= 0) {
  console.log("Pasaje disponible para venta");
} else {
  console.log("Ciudad no disponible para viajar");
}
*/

//Operadores lógicas
// Y (AND) && - Se deben cumplir las 2 condiciones
// O (OR) || - Se debe cumplir 1 condición al menos
// No (NOT) ! - No se cumple la condición

const edadPasajero = 19;
const estarAcompanhado = true;

console.log(`Verificando pasajes para ${ciudadDestino} `);

if (
  conciudadesDisponibles.indexOf(ciudadDestino) > -1 &&
  (edadPasajero >= 18 || estarAcompanhado)
) {
  console.log("Pasaje disponible para venta");
} else {
  console.log("Ciudad no disponible para viajar");
}
