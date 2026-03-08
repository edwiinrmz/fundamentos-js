/*
this(reserved word when use inside a class) -- class
this (doing reference to the instance of the class or object)-- objeto -- class
use this in class and building functions 
*/
class Persona {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
}

const persona1 = new Persona("Yari", 29);
console.log(persona1);

persona1.nuevoMetodo = function() {
    console.log(`Mi nombre es ${this.nombre}`);
};
