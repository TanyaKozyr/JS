function calc() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
    if (count === 6) {
      clearInterval(intervalId);
    }
  };
}

let a = calc();
let intervalId = setInterval(a, 1000);
