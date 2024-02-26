const person = {
  name: "Vasya Pupkin",
  age: 25,
};

function bind(context, fn) {
  return function (...args) {
    fn.apply(context, args);
  };
}
function logPerson() {
  console.log(`Person: ${this.name},${this.age}`);
}

bind(person, logPerson)();
