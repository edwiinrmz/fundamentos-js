console.log('******AND&&******');
//Operador logico AND &&
//solo se cumple true si ambos lados son true 
const number1 = 10;
const number2 = 5;
//si && si true
console.log(number1>7 && number2<10);
//no && si = false
console.log(number1>10 && number2<10);
//no && si false
console.log(number1>11 && number2<7);
//no && no false
console.log(number1>11 && number2<6);

console.log('******OR||******');
//Operador OR ||
//El operador lógico OR siempre devuelve true, excepto cuando ambos lados se evalúan como false 
//
console.log(number1>7 || number2<10);
console.log(number1>11 || number2<4);

console.log('*****NOT!*******');
//Operador NOT !
//Puede pensar en el operador ! como un interruptor que 
//cambia le valor booleano 
console.log(!(6==6));
