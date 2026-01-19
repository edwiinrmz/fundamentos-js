
const greeting = function (name){
    return `Hi, ${name}`
}
//Arrow function-explicit return 
const newGreeting = (name) => {
    return `Hi, ${name}`
}

//Arrow function - implicit return
const newGreetingimplicit = name => `Hi, ${name}`
//*en que casos si necesitariamos poner los parametros 
// en mas de un parametro 
const newGreetingImplicitWithTwoParameters = (name, lastName) => `Hi, I'm ${name} ${lastName}`

//Lexical binding

const finctionalCharacter = { 
    name: 'Uncle Ben',
    messageWithTraditionalFunction: function (message){
        console.log(`${this.name} says: ${message}`)
    },
    messageWithArrowFunction:  (message) => {
        console.log(`${this.name} says: ${message}`)
    }
}

finctionalCharacter.messageWithTraditionalFunction('with reat power comes great responsability.')
finctionalCharacter.messageWithArrowFunction('Beware of Doctor Octopus')