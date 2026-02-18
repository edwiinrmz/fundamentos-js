//estructura del construcotr
class Animal {
    constructor (nombre, tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    }
    //metodo
    emitirSonido(){
        console.log("El animal emite un sonido")
    }
}
//clase constructora de perro va a extender de clase Animal
class Perro extends Animal{
    constructor(nombre, tipo, raza){
        super(nombre, tipo);
        this.raza = raza;
    }
}