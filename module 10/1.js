function one() {
  console.log("1 stage");
  two();
}
function two() {
  console.log("2 stage");
  three();
}
function three() {
  console.log("3 stage");
}

console.log("all stages of processing: ");
one();
