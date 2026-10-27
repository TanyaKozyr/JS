const set = new Set([1, 2, 3, 4, 5]);

const square = [...new Set(set)].map((num) => num * num);

console.log(square);
