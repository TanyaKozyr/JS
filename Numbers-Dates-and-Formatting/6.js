const num = 10000.0;
const option = {
  style: "currency",
  currency: "USD",
};
console.log(new Intl.NumberFormat("en-US", option).format(num));

console.log(new Intl.NumberFormat(num.toLocaleString, option).format(num));
