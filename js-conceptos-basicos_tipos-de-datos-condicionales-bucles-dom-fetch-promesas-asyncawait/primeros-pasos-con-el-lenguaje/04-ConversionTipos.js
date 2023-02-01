//Tipos de datos
//Alfanúmerico
const nombrePasajero = "Pedro Silva";
//Númerico
let valorBoleto = 1000;
const impuestoAeropuerto = 100;
const porcentajeTasaEmbarque = 60 / 100; //60%
var gestionAgencia = 100;
//Lógico (True or False)
let boletoActivo = true;

//Operaciones aritméticas
//let totalBoletas = valorBoleto + tasaEmbarque + gestionAgencia;

//Orden de Precedencia
// 1. ()
// 2. * y /
// 3. + y -
let totalBoletasDos =
  (valorBoleto + impuestoAeropuerto) * porcentajeTasaEmbarque + gestionAgencia;
console.log(totalBoletasDos);

//Concatenación de texto
let nombreViajante = "Facundo";
let apellidoViajante = "González";

let nombreCompleto = nombreViajante + apellidoViajante;
let pasaporte = "1000" + "12";
let multiplicacion = "1000" / "12"; //Por la división js entiende que son números
let multiplicacionConversionManul = parseInt("1000") / parseFloat("12"); //Conversión manual
console.log(multiplicacionConversionManul);

let noEsUnNumero = parseInt("ABC");
console.log(noEsUnNumero); //Devolverá NaN (Not a Number)
