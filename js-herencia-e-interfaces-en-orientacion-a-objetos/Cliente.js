//Creación de clase
export class Cliente {
    nombre;
    dni;
    cuil;
    #clave;
     asginarClave(clave) {
        this.#clave = clave;
    }
    autenticable(clave) {
        return clave === this.#clave;
    }
    constructor(nombre,dni,cuil){
        this.nombre = nombre;
        this.dni = dni;
        this.cuil = cuil;
        this.#clave = "";
    }
}