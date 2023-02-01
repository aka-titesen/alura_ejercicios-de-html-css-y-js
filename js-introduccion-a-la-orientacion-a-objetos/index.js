//Importo las clases CuentaCorriente y Cliente
import {CuentaCorriente} from './CuentaCorriente.js';
import {Cliente} from './Cliente.js';

//Obejtos de la clase cliente y cuenta relacionados

const felix = new Cliente("Felix","30807581","20308075817");

const florian = new Cliente("Florian","50109713","20501097137");

const cuentaDeFelix = new CuentaCorriente(felix,"1","0001");

const cuentaDeFlorian = new CuentaCorriente(florian,"2","0002");

cuentaDeFelix.depositarEnCuenta(1000000);

console.log(`Dinero de la cuenta de Felix antes de transferirle a Florian $${cuentaDeFelix.verSaldo()}`);
console.log(`Dinero de la cuenta de Florian $${cuentaDeFlorian.verSaldo()}`);
cuentaDeFelix.transferirParaCuenta(500000, cuentaDeFlorian);

console.log(`Dinero de la cuenta de Felix despues de transferirle a Florian $${cuentaDeFelix.verSaldo()}`);
console.log(`Dinero de la cuenta de Florian $S${cuentaDeFlorian.verSaldo()}`);

console.log(CuentaCorriente.cantidadDeCuentas);


