
let arr = [3, 8, 52, 42, 121, 2];

const Pi = 3.14;

const PiArr = arr.map((arr) => arr * Pi);
console.log(PiArr);

const doubleArr = arr.map((arr) => arr * arr);
console.log(doubleArr);

const oddArr = arr.filter((arr) => arr % 2 === 0);
console.log(oddArr);

const sumArr = arr.reduce((sum, cur) => sum + cur, 0);
console.log(sumArr);

// -------Assignment 5. Method Chaining----------

const newArr = arr
  .filter((arr) => arr % 2 === 0)
  .map((arr) => arr * arr)
  .reduce((sum, cur) => sum + cur, 0);

  console.log(newArr);
