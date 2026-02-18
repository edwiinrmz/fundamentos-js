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
    //metodo
    emitirSonido(){
        console.log("El perro ladra")
    }
    //metodo correr
    correr(){
        console.log(`${this.nombre} corre alegremente`);
    }
}

//instancia
const perro1 = new Perro("Bobby", "Perro", "labrador");

console.log(perro1);
perro1.correr();
perro1.emitirSonido();