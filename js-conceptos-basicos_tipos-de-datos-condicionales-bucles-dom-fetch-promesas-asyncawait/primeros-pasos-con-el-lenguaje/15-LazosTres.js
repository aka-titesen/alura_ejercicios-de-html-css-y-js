const ciudadesDisponibles = new Array(
  "Bogota",
  "Lima",
  "Santiago",
  "Montevideo"
);
const precioCiudad = new Array(500, 400, 380, 200);
const datos = [
  {
    ciduad: "Bogota",
    precio: 500,
  },
  {
    ciduad: "Lima",
    precio: 400,
  },
  {
    ciduad: "Santiago",
    precio: 380,
  },
  {
    ciduad: "Montevideo",
    precio: 200,
  },
];
const presupuestoDisponible = 600;

//While 0 o más veces
//Do While ... 1 o más veces
let i = 0;
/*
while (i < datos.length && datos[i].precio > presupuestoDisponible) {
  i++;
}
*/
//for ... valor inicial para un valor final
let ciudadSeleccionada = "";

for (let i = 0; i < datos.length; i++) {
  const element = datos[i];
  if (element.precio <= presupuestoDisponible) {
    ciudadSeleccionada = element.ciduad;
    break;
  }
}
/*
do {
  if (datos[i].precio <= presupuestoDisponible) {
    ciudadSeleccionada = datos[i].ciduad;
    break;
  }
  i++;
} while (i < datos.length && ciudadSeleccionada == "");
*/
if (ciudadSeleccionada == "") {
  console.log("No tenemos pasajes disponibles");
} else {
  console.log(`Puedes comprar pasaje para ${ciudadSeleccionada}`);
}
