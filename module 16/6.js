class Calculator {
  constructor() {
    this.result = 0;
  }

  add(value) {
    this.result += value;
    return this;
  }

  subtract(value) {
    this.result -= value;
    return this;
  }

  multiply(value) {
    this.result *= value;
    return this;
  }

  divide(value) {
    this.result /= value;
    return this;
  }
}

const calculator = new Calculator();
const result = calculator.add(5).subtract(3).multiply(2).divide(4).result;
console.log(result);
