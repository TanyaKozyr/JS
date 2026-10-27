const person1 = {
  firstName: "Mary",
  lastName: "Poppins",
};

const person2 = Object.assign({}, person1);
person2.lastName = "Poppins-Davis";

console.log("Before marriage:", person1.firstName, person1.lastName);
console.log("After marriage:", person2.firstName, person2.lastName);
