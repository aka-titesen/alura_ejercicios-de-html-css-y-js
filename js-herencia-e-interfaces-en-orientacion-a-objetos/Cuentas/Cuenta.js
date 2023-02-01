import { Cliente } from '../Cliente.js'
export class Cuenta {
    //Con el # especificamos el atributo va a ser privado
    //Node a partir de la versión permite establecer atributos privado pero js aún no
    //En JavasScript establecemos atributos privados con el simbolo _ (underscore)
    //Aún podemos ejecutar código con el # mientras estemos usando Node
    //Lo recomendado es usar # para establecer atributos privados
    #cliente;
    numero;
    #saldo;
    agencia;
    set cliente(valor) {
        if (valor instanceof Cliente) {
            this.#cliente = valor;
        }
    }
    get cliente() {
        return this.#cliente;
    }
    constructor(cliente, numero, agencia, saldo) {
        if(this.constructor == Cuenta){
            throw new Error("No se debe instanciar objetos de la clase Cuenta");
        }
        this.cliente = cliente;
        this.numero = numero;
        this.agencia = agencia;
        this.#saldo = saldo;
    }
    depositarEnCuenta(valor) {
        if (valor > 0) {
            this.#saldo += valor;
        }
        return this.#saldo;
    }
    retirarEnCuenta(valor){
        //Método abstracto
        throw new Error("Debe implementar el método retirarEnCuenta en su clase");
    }
    _retirarEnCuenta(valor,comision) {
        valor *= (1+comision/100);
        if (valor <= this.#saldo) {
            this.#saldo -= valor;
        }
        return this.#saldo;
    }
    verSaldo() {
        return this.#saldo;
    }
    transferirParaCuenta(valor, cuentaDestino) {
        cuentaDestino.depositarEnCuenta(this.retirarEnCuenta(valor));
    }
}