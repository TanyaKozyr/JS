function summ(...arg) {
  return arg.reduce((sum, cur) => sum + cur);
}

console.log(summ(1, 5, 8, 7));
console.log(summ(8, 2, 6, 54, 87));
console.log(summ(74, 521, 2, 36));

let arr1 = [5, 10, 15];
let arr2 = [20, 25, 30];

let newArr = [...arr1, ...arr2];

console.log(summ(...newArr));
