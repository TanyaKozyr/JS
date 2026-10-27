function readableNum(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "_");
}

console.log(readableNum(1000000));
console.log(readableNum(123456789));
