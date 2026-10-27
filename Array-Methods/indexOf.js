const colors = ['red','blue','green','black']

const position = colors.indexOf('green') + 1

console.log("Desired color found at position" + '',position)

const colorB = colors.findIndex(myFunction) 

function myFunction (value){
    return (value.charAt(0) === 'b')
}

console.log(colorB)