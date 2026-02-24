/*switch(expresion){
    case valor1:
        //código a ejecutar
       break; 
    case valor2:
        //código a ejecutar
        break;
    case valor3:
        //código a ejecutar
        break;
    default:
        //código
}*/

let expr = "uvas"

switch(expr){
    case "Naranjas":
        console.log("Las naranjas cuestan $20 el kilo")
        break;
    case "Manzanas":
        console.log("las Manzanas cuestan $43 el kilo")
        break;
    case "Platanos":
        console.log("El platano esta en $30 el kilo")
        break;
    case "Mangos":
    case "Papayas":
        console.log("Los mangos y las papayas cuestan $25 pesos el kilo ")
        break;
        default:
            console.log(`Lo siento, no contamos con ${expr} `);
}

console.log("Hay algo mas que desees?");

/*
Menu videojuego
var select = '1'

switch(select ){
    case '1':
        console.log("Inicio")
        break;
    case '2':
        console.log('Jugadores')
        break
    case '3':
        console.log('Partida')
        break;
    case '4':
        console.log('Guardar')
        break;
}
*/