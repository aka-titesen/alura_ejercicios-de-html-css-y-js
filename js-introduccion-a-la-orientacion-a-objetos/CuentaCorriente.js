import {Cliente} from './Cliente.js';
//Ponemos export para decirle a node que éste clase va a ser importada como modulo en otro archivo js
//P.D antes debemos configurarlo con npm init para realizar las importaciones 
export class CuentaCorriente {
    //Con el # especificamos el atributo va a ser privado
    //Node a partir de la versión permite establecer atributos privado pero js aún no
    //En JavasScript establecemos atributos privados con el simbolo _ (underscore)
    //Aún podemos ejecutar código con el # mientras estemos usando Node
    //Lo recomendado es usar # para establecer atributos privados
    #cliente;
    numero;
    #saldo;
    agencia;
    /*Defino un atributo estático común para todas las instancias de la clase*/
    static cantidadDeCuentas = 0;

    set cliente(valor) {
        if (valor instanceof Cliente) {
            this.#cliente = valor;
        }
    }
    get cliente() {
        return this.#cliente;
    }

    constructor(cliente,numero,agencia) {
        this.cliente=cliente;
        this.numero = numero;
        this.agencia = agencia;
        this.#saldo = 0;
        /*Cada vez que instancio un objeto se va incrementar el atributo estático para llevar la cuenta de todas las cuentas creadas*/
        CuentaCorriente.cantidadDeCuentas++;
    }

    depositarEnCuenta(valor) {
        if (valor > 0) {
            this.#saldo += valor;
        }
        return this.#saldo;
    }
    retirarEnCuenta(valor) {
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
//En las funciones cuando pasamos un valor por parámetros cuando los datos sean primitivas js hace una copia de los valores, es decir; lo puedes modificar dentro de la función pero conservará su valor original que tiene antes de entrar a la misma, ésto esta pensado para que devuelva valores que se puedan usar para otras partes del código. Cambia la cuestión cuando pasamos objetos por parámetro, en ésto caso, lo pasa como referencia, es decir; si hacemos cambios dentro de la función éste los conservará cuando salga de ella.