import { Cuenta } from "./Cuenta";

export class CuentaNomina extends Cuenta{
    constructor(cliente, numero,agencia,saldo) {
        super(cliente, numero, agencia, saldo);
    }
    retirarEnCuenta(valor){
        super._retirarEnCuenta(valor,1);
    }
}