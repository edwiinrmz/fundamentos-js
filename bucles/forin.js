/*
for in ---> iterar sobre objetos enumerables
consta de 2 cosas:
propiedades = valor 

a diferencia de :
arrays , string estos tiene elementos(item)

for (variable in objeto){
    codigo
}

*/

const listaDeCompras = {
    manzana:5,
    pera: 3,
    naranja:2,
    uva:1,
}
//codigo para imprimir propiedad 
for(fruta in listaDeCompras){
    console.log(fruta);
}
//codigo para imprimir valor
for (fruta in listaDeCompras){
    console.log(`${fruta} : ${listaDeCompras[fruta]}`);
}

