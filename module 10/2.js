let x = "21";

function one() {
  let y = () => {
    console.log(x, "is a number");
  };
  y();
}

function two() {
  let x = 1;
  let y = () => {
    console.log(x, "is a number");
  };
  y();
}

console.log(x);
one();
two();
console.log(y());
