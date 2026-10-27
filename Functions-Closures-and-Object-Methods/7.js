const person = {
  name: "Vasya Pupkin",
  age: 25,
  logPerson: function (...args) {
    return `Person: ${this.name},${this.age},${args}`;
  },
};

const person1 = {
  name: "Ivan Ivanov",
  age: 41,
};

const logPerson = person.logPerson.bind(person);
const logPerson1 = person.logPerson.bind(person1);

console.log(logPerson());
console.log(logPerson1());
