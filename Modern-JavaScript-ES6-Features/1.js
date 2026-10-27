const arr = [10, 20, 30, 40, 50];
const [firstElem, , , , lastElem] = arr;
console.log(firstElem, lastElem);

let per = {
  fname: "Tom",
  age: 35,
  country: "USA",
};
let { fname } = per;
let { age } = per;
let { country } = per;

console.log(fname);
console.log(age);
console.log(country);
