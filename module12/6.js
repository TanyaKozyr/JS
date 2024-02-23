const bill = {
  tip: 0.1,
  calculate(total) {
    return total + total * this.tip;
  },
};

const pay = bill.calculate(50);
const payOrder = bill.calculate.bind(bill);

console.log(pay);
console.log(payOrder(100));

const newBill = {
  tip: 0.2,
};
const payOrder1 = bill.calculate.bind(newBill);
console.log(payOrder1(200));

const payOrder2 = bill.calculate.call(newBill, 200);
console.log(payOrder2);

const payOrder3 = bill.calculate.apply(newBill, [200]);
console.log(payOrder3);
