function calc() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

let a = calc();

a();
