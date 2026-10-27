let arr = [3, 8, 52, 42, 121, 2];
const bigNum = (arr) => arr > 100;

const bigNum1 = arr.find(bigNum);
const bigNum2 = arr.findIndex(bigNum);
const bigNum3 = arr.some(bigNum);
const bigNum4 = arr.every(bigNum);

console.log(bigNum1);
console.log(bigNum2);
console.log(bigNum3);
console.log(bigNum4);

const deepArr = [[1, 2, 3], 4, [5, 6, 7], 8];
const arr1 = deepArr
  .flatMap((subArr) => subArr)
  .reduce((acc, num) => acc + num, 0);

console.log(arr1);
