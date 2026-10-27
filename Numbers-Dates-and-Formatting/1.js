function convertToNumber(str) {
  return Number(str);
}

let mixedArray = [1, "2", "three", 4, "five", 6];

let numbersArray = mixedArray.filter(isNumber);

function isNumber(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}

console.log(numbersArray);
console.log(isNumber(numbersArray));
