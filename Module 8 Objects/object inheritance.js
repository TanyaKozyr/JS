function Person(name,age) {
    this.name = name;
    this.age = age;
};
Person.prototype.greet = function() {
    console.log("Hello, " + this.name + " " + this.age + "!");
  };

function Student  (name,age,studentId) {
    this.studentId = studentId;
    Person.call(this,name,age)
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.greet = function() {
    console.log("Hello, student " + this.name + "(" + this.studentId + ")" + "!");
};
const someStudent = new Student("Dick Johnson",25,"5899972IT")
someStudent.greet();