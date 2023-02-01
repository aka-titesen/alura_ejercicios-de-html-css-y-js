//Importo las clases CuentaCorriente y Cliente
import {Cliente} from './Cliente.js';
import { Empleado } from './Empleados/Empleado.js';
import { Gerente } from './Empleados/Gerente.js';
import { Director } from './Empleados/Director.js';
import { SistemaAutenticacion} from './SistemaAutenticacion.js';

//Obejtos de la clase cliente y cuenta relacionados

const felix = new Cliente("Felix","30807581","20308075817");
felix.asginarClave("12345");
console.log(SistemaAutenticacion.login(felix,"12345"));
const florian = new Cliente("Florian","50109713","20501097137");

const juanEmpleado = new Empleado("Juan Perez", "12358132",1600);
const pedroGerente = new Gerente("Pedro Rivas","30237918",4000);
const elenaDirectora = new Director("Elena Moreno","38117208",6400);

/* console.log(juanEmpleado.verBonificacion());
console.log(pedroGerente.verBonificacion());
console.log(elenaDirectora.verBonificacion()); */
/* const cuentaDeFelix = new CuentaCorriente(felix,"1","0001");

const cuentaDeFlorian = new CuentaCorriente(florian,"2","0002");

console.log(`Le depositan su sueldo a Felix $${cuentaDeFelix.depositarEnCuenta(50000000000)}`);
cuentaDeFelix.transferirParaCuenta(100000000,cuentaDeFlorian);
console.log(`Felix le deposita el sueldo a Florian $${cuentaDeFlorian.verSaldo()}`);

const cuentaAhorroFlorian = new CuentaAhorro(florian,"1","1112",50000000);

console.log(`Florian tiene en su cuenta de ahorros $${cuentaAhorroFlorian.verSaldo()}`);
 */