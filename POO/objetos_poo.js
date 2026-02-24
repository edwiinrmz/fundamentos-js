/*

objetos estructura de datos que ayuda a guardar datos de forma

llamada key / value

objeto {

    propiedad: valor,
    propiedad: valor,
    propiedad: valor,

    metodos()
}
    llamar el metodos

*/

const persona = {
    nombre: "John",
    edad: 30,
    direccion: {
        calle: "Av Insurgentes 187",
        ciudad: "CDMX",
    },
    saludar(){
        console.log(`hola,mi nombre es ${this.nombre}`)
    }
}
//declaras el metodo
persona.saludar();