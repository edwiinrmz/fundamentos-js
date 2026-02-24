/*Example 1 .-scope chain y contexto de ejecucion
const productName = 'Smartphone'
const price = 499
const brand = 'TechCo'

function getProductDetails () {
const ProductName = 'Laptop'
const price = 899


return `The ${productName} cost $${price} and is from the brand ${brand}.`
}
 console.log(getProductDetails())

 //The Laptop costs $899 and is from the brand TechCo.



 Example 2
const productName = 'Smartphone'
const price = 499
const brand = 'TechCo'

function getProductDetails () {
const ProductName = 'Laptop'
const price = 899

return `The ${productName} cost $${price} and is from the brand ${brand}.`
}

console.log(`The ${productName} costs $${price} and is from the brand ${brand}.`)

 
EXAMPLE 3

const userPoints = 150

function checkAccess() {
    if (userPoints < 100){
        const message = "Access denied: Insufficient points!"
        return message
    } else {
        const message = "Access granted: Enjoy the premium features!"
        return message
    }
}

console.log(checkAccess())
*/

const globalVariable = '😊'

function localOne() {
    console.log('GLOBAL 1: ' , globalVariable)
    //console.log('LOCAL 1: ', localVariable)

    function localTwo() {
        const carrot = '🥕'
        console.log('LOCAL 2: ', carrot)
    }

    function localThree () {
        console.log('LOCAL 3: ', carrot)
    }

    localTwo()
    localThree()
}           

console.log(localOne())

// GLOBAL 1:😊
//ReferenceError: localVariable is not defined
//Ya tenemos contexto local por eso marca error