// How JavaScript Works - JavaScript is a single threaded language trhat can be non-blocking??
const a = 1; // memory heap
const b = 10; // memory heap
const c = 100; // memory heap
let d = 25; // stack
console.log(a);

// Call Stack
console.log("1");
console.log("2");
console.log("3");

const one = () => {
  const two = () => {
    console.log("4");
  };
  two();
};
one();

setTimeout(() => {
  console.log("5");
}, 0);

// recursion - stack overflow
function foo() {
  foo();
}
foo();

// Asynchronous
console.log("1");
setTimeout(() => {
  console.log("2");
}, 2000);
console.log("3");

// JavaScript Runtime Environment
// Call Stack
// Web API
// Callback Queue
// Event Loop
// Microtask Queue (Promise)
// Task Queue (Mutation Observer, Fetch API, etc.)

function addTwo(num) {
  return num + 2;
}
addTwo(3);
// console.log(d);
// function scope
{
  let x = "I am in block scope";
  if (true) {
    let x = "I am in block scope";
    console.log(x);
  }
  console.log(x);
}
