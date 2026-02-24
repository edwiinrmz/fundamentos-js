//Explicit Tipe Casting
//Convertir tipos de la forma explicita
//convercion de string to numero
const string = '42'
const integer = parseInt(string)
console.log(integer)
console.log(typeof integer)

//convertir de string a decimal
const stringDecimal = '3.14'
const  float = parseFloat(stringDecimal)
console.log(float)
console.log(typeof float)

//convertir a binario
const binary = '1010'
const decimal = parseInt(binary, 2)
console.log(decimal)
console.log(typeof decimal)

//Implicit Type Casting
const sum = '5' + 3
console.log(sum)

//boolean
const sumWithBoolean = '3' + true
console.log(sumWithBoolean)

const stringValue = '10'
const numberValue = 10
const booleanValue = true
console.log('--------------')
//SI HAY UN STRING CONCATENA 
//SI NO HAY NINGUN STRING SUMA 
console.log(stringValue + stringValue)  //CONCATENA
console.log(stringValue + numberValue ) //CONCATENA
console.log(stringValue + booleanValue) //CONCATENA
console.log(numberValue + stringValue)  //CONCATENA
console.log(numberValue + numberValue)  //SUMA
console.log(numberValue + booleanValue) //SUMA
console.log(booleanValue + stringValue) //CONCATENA
console.log(booleanValue + numberValue) //SUMA
console.log(booleanValue + booleanValue)//SUMA


//EJERCICIO

const numero = '596'
const numeroConvertido = parseInt(numero)

console.log(typeof numero)
console.log(typeof numeroConvertido)

//respuesta string / numero
