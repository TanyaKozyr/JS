
const arr = [1,2,3,4,5,6];
const resultArr = filterEvenNumbers(arr);
function filterEvenNumbers(numbers) {

    const evenNumbers = numbers.filter(number => number % 2 === 0);
    return evenNumbers;
}

const resultArr1 = resultArr.map(doubleNumbers)
function doubleNumbers(num){
    return  num * 2; 
}

console.log(resultArr);

console.log(resultArr1)