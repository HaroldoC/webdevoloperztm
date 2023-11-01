// Closures - a function ran. the function executed. It's never going

const first = () => {
  const greet = "Hi";
  const second = () => {
    alert(greet);
  };
  return second;
};
const newFunc = first();
newFunc();

// 1. Function that returns a function
function interviewQuestion(job) {
  if (job === "designer") {
    return function (name) {
      console.log(name + ", can you please explain what UX design is?");
    };
  } else if (job === "teacher") {
    return function (name) {
      console.log("What subject do you teach, " + name + "?");
    };
  } else {
    return function (name) {
      console.log("Hello " + name + ", what do you do?");
    };
  }
}

// Currying
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(3)(4);
const multiplyBy5 = curriedMultiply(5);
multiplyBy5(5);

// Compose
const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;
compose(sum, sum)(5);

// Avoiding side effects, functional purity

var a = 1;
function b() {
  a = 2;
}
console.log(a); // 2
b();
console.log(a); // 2

// Pure functions

function b() {
  var a = 1;
  return a;
}
console.log(a); // 1
b();
console.log(a); // 1
