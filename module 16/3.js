class BankAccount {
  #balance = 0;

  get balance() {
    return this.#balance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    this.#balance -= amount;
  }
}

const acc1 = new BankAccount();

console.log(acc1.balance);
acc1.deposit(100);
console.log(acc1.balance);

acc1.withdraw(50);
console.log(acc1.balance);
