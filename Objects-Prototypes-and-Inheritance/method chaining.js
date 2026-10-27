const bankAccount = {
    balance: 0,
  
    deposit(amount) {
      this.balance += amount;
      return this; 
    },
  
    withdraw(amount) {
      this.balance -= amount;
      return this; 
    },
  
    getBalance() {
      return this.balance;
    }
  };

const curBalance = bankAccount.deposit(100).withdraw(80).getBalance();
console.log(curBalance)

// Or we can print just that//
// console.log(bankAccount.deposit(100).withdraw(20).getBalance())