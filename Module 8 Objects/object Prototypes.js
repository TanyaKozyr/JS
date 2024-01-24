function Person(name,age) {
    this.name = name;
    this.age = age;
};
Person.prototype.greet = function() {
    console.log("Hello, " + this.name + " " + this.age + "!");
  };
 
const somePerson = new Person("Dick",25).greet();
console.log(somePerson)