//Tipos de Numeros que podemos encontrarnos en JS

//1.tipo entero y tipo decimal 
const entero = 42
const decimal = 3.14
console.log(typeof entero, typeof decimal);

//typeof para saber el tipo de dato entero y tambien para tipo de dato 
//decimal

//2.Notacion cientifica 
const cientifico = 5e3
//5e para expresar la potencia seguido de 3 

//3.Infinitos y NaN  los que no son un numero
const indinito = nfinity ;
const noEsUnNumero = NaN;

//Operaciones Aritmetica 

//1.Suma, Resta, Multiplicacion y Divicion 
const sum = 3 + 4;
const resta = 3 - 4;
const multiplicacion = 3 * 4;
const divicion = 16 / 2;

//2.Modulo y Exponenciacion 
const modulo = 15 % 8;
const exponenciacion = 2 ** 3;

//JavaScript tiene siertos dilemas con la precicion 
//Precisión 
const resultado  = 0.1 + 0.3;
console.log(resultado);
//con toFixed podemos asignar cuantos decimales agregar alr esultado
console.log(resultado.toFixed(1));
// igualdad estricta === evalua el valor como el tipo
console.log(resultado === 0.3);

//Operaciones Avanzadas
const raizCuadrada = Math.sqrt(16);
const valorAbsoluto = Math.abs(-7)
const aleatorio = Math.random();
console.log(raizCuadrada); 
console.log(valorAbsoluto); 
console.log(aleatorio); 

