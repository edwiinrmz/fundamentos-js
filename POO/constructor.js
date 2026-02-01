//ESTRUCTURA FUNCION CONSTRUCTORA
/*
const persona = {
    nombre: "Edwin",
    apellido: "Ramirez"
}
*/
//funcion contructora 
function Persona(nombre,apellido,edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}
//instancias 
const persona1 = new Persona("Juan","Perez", 30);
console.log(persona1);

const persona2 = new Persona("Edwin","Ramirez", 30);
console.log(persona2);

//Prototipe 
Persona.prototype.telefono = "555-555-555";

//agregar una nueva propiedad a una instancia en particular 
//y que no se ocmparta en las demas
persona1.nacionalidad = "Mexicano";

//agregar un metodo con funcion constructora
Persona.prototype.saludar = function() {
    console.log(`Hola. me llamo ${this.nombre} ${this.apellido}`);
};

persona1.saludar();
persona2.saludar();

