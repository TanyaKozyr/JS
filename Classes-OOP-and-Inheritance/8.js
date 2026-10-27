class Shape {
  constructor(type) {
    this.type = type;
  }
  area() {
    console.log("Area of " + this.type + " is somenum");
  }
}
class Circle extends Shape {
  constructor(type, radius) {
    super(type);
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle extends Shape {
  constructor(type, width, height) {
    super(type);
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
}
let circle = new Circle("Circle", 5);
let rectangle = new Rectangle("Rectangle", 2, 4);

console.log(circle.area());
console.log(rectangle.area());
