const Person = function (FirstName, LastName, birthYear) {
 this.FirstName = FirstName,
    this.LastName = LastName,
    this.birthYear = birthYear,
    this.age = new Date().getFullYear() - birthYear;
  console.log( `Hi,` + this.FirstName + " " + this.LastName + "," + " " + this.age);
};

let Alice = new Person("Alice", "Switner", 1968);
console.log(Alice);
let Bob = new Person("Bob", "Reglie", 1995);
console.log(Bob);
