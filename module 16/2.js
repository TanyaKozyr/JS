class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  makeSound() {
    console.log(this.name + " says " + this.sound);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name, "Woof!");
  }
}

let buddy = new Dog("Buddy");
buddy.makeSound();
