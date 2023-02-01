const ciudadesDisponibles = new Array(
  "Bogota",
  "Lima",
  "Santiago",
  "Montevideo"
);

const paisesDisponibles = [
  "Colombia",
  "Perú",
  "Chile",
  "Brasil",
  "Argentina",
  "Uruguay",
  "Venezuela",
];

let cantidadCiudades = ciudadesDisponibles.length;

console.log(`En la lista de ciudades tenemos ${cantidadCiudades} elementos`);
console.log(
  `En la lista de paises tenemos ${paisesDisponibles.length} elementos`
);

//Remover el primer elemento
ciudadesDisponibles.shift();

//Remover el último elemento
ciudadesDisponibles.pop();

console.log(
  `En la lista de ciudades tenemos ${ciudadesDisponibles.length} elementos`
);
console.log(
  `En la lista de ciudades tenemos ${ciudadesDisponibles.length} elementos`
);

//Filtro de elementos de la lista
const paisesFiltrados = paisesDisponibles.filter((e) => e === "Brasil");
console.log(paisesFiltrados);

//Unificar los elementos de la lista de carácteres
console.log(paisesDisponibles.join("-"));

//Ordenar la lista
console.log(paisesDisponibles.sort());

//Conociendo la posición
console.log(`Perú está en la posición: ${paisesDisponibles.indexOf("Perú")}`);

//Unificar 2 listas
const listasPaisesYCiudades = paisesDisponibles.concat(ciudadesDisponibles);

console.log(listasPaisesYCiudades);
