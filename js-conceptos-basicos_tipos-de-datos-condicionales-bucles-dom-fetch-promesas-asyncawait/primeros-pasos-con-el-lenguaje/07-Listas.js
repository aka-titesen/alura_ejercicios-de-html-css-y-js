//Definición de una lista con tipos de datos alfanúmerico
const ciudadesDisponibles = new Array("Bogota", "Lima", "Santiago");
console.log(ciudadesDisponibles);

//Definición de una lista de una forma abreviada
const paisesDisponibles = ["Colombia", "Pero", "Chile", "Brasil", "Argentina"];
console.log(paisesDisponibles);

//Agruegamos más datos a los arreglos
paisesDisponibles.push("Uruguay"); //Agrega al final
ciudadesDisponibles.push("Montevideo"); //Agrega al final

paisesDisponibles.unshift("Ecuador"); //Agrega al comienzo
ciudadesDisponibles.unshift("Quito"); //Agrega al comienzo

//Mostrando el primer elemento de la lista
console.log(paisesDisponibles[0]);
console.log(ciudadesDisponibles[0]);

//Elimino a partir de la posición 1 y borro 2 elementos, luego agrego Venezuela y Paraguay
paisesDisponibles.splice(1, 2, "Venezuela", "Paraguay");
