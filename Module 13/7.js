const someArr = [1, 1987, 4253248551, 12, 4000, -15, 0];

someArr.sort((a, b) => a - b);
console.log(someArr);

someArr.sort((a, b) => b - a);
console.log(someArr);
