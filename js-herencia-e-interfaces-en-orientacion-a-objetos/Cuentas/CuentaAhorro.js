import { Cuenta } from "./Cuenta.js";

export class CuentaAhorro extends Cuenta {
    constructor(cliente, numero,agencia,saldo) {
        super(cliente, numero, agencia, saldo);
    }
    retirarEnCuenta(valor) {
        super._retirarEnCuenta(valor,2);
    }
}