class Engine {
  start(make, model) {
    console.log("Starting " + make + " " + model);
  }
}
class Car {
  constructor(make, model, engine) {
    this.make = make;
    this.model = model;
    this.engine = engine;
    this.engine.start(make, model);
  }
}

let engine = new Engine();
let kia = new Car("KIA", "Soul", engine);

console.log(kia);
