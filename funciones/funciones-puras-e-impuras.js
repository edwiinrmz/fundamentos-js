//funciones puras


//Side Effects 
//1.Modificar variables globales
//2.Modificar parámetros 
//3.Solicitudes HTTP
//4.Imprimir en pantalla o consola
//5.Manipulación del DOM
//6.Obtener la hora actual 

//Estructura de una funcion pura:
function sum (a,b){
    return a + b
}
//funciones impuras
function sum (a,b){
    console.log('A:', a)
    return a + b
}

//Modificar variables globales
let total = 0;

function sumWithSideEffect(a) {
    total += a
    return total
}

//función pura 
function square(x){
    return x * x
}

function addTen (y){
    return y + 10
}
//convinacion de dos puras da pura
const number = 5
const finalResut = addTen(square(number))
console.log(finalResut)