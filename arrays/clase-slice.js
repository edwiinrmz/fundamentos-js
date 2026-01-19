//slice()

const animals = ['ant','bison','camel','duck','elephant']
console.log(animals.slice(2))
//no tiene valor final incluido 
console.log(animals.slice(2,4))
//indices negativos en slice
let resultado = animals.slice(-2);
console.log(resultado);