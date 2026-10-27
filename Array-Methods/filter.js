const ages = [13,25,48,4,55,10]
const newAges = ages.filter(myFunction)

function myFunction (value, index, array){
    return value >= 18
}

console.log(newAges)


