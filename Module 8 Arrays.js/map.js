const temperatures =  [-5,0,15,30]
const fahrenheit = temperatures.map(myFunction)
const kelvin = fahrenheit.map(newFunction)

function myFunction (value){
    return value * 1.8 + 32
}
function newFunction(value){
    const result = ((value + 459.67) / 1.8).toFixed(2)
    return parseFloat(result)
}

console.log(fahrenheit)
console.log(kelvin)