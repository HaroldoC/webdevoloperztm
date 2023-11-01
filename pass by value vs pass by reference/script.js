// Advanced Objects

var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };
console.log(object1 === object2); // true
console.log(object1 === object3); // false
object1.value = 15;
console.log(object2.value); // 15
console.log(object3.value); // 10

// Context vs Scope

// Scope
function b() {
  let a = 4;
}
console.log(a); // ReferenceError: a is not defined
b();
console.log(a); // ReferenceError: a is not defined

// Context
console.log(this); // Window
function a() {
  console.log(this); // Window
}
a();
const object4 = {
  a: function () {
    console.log(this); // object4
  },
};
object4.a();

// Instantiation
class Player {
  constructor(name, type) {
    console.log(this); // Wizard
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }
}
class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
    console.log(this); // Wizard
  }
  play() {
    console.log(`WEEEE I'm a ${this.type}`);
  }
}
const wizard1 = new Wizard("Shelly", "Healer");
const wizard2 = new Wizard("Shawn", "Dark Magic");
wizard1.play();
wizard1.introduce();
wizard2.play();
