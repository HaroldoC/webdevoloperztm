// let + const

// const player = "bobby";
// let experience = 100;
// let wizardLevel = false;

// if (experience > 90) {
//   let wizardLevel = true;
//   console.log("inside", wizardLevel);
// }
// console.log(wizardLevel);

// Destructuring

// const obj = {
//   player: "bobby",
//   experience: 100,
//   wizardLevel: false,
// };
// obj.wizardLevel = true;
// console.log(obj);

// const {
//   player: playerName,
//   experience: playerExperience,
//   wizardLevel: playerWizardLevel,
// } = obj;
// console.log(playerName);
// console.log(playerExperience);
// console.log(playerWizardLevel);

// Object properties
// const name = "john snow";
// const obj = {
//   [name]: "hello",
//   ["ray" + "smith"]: "hihi",
//   [1 + 2]: "hihi",
// };
// console.log(obj);

// const a = "Simon";
// const b = true;
// const c = {};
// c[a] = b;

// const age = 34;
// const pet = "horse";
// const greetingBest = `Hello ${name} you seem to be ${
//   age - 10
// }. What a lovely ${pet} you have`;
// console.log(greetingBest);

// Default arguments

// function greet(name = "", age = 30, pet = "cat") {
//   return `Hello ${name} you seem to be ${
//     age - 10
//   }. What a lovely ${pet} you have`;
// }

// function addNumbers(x = 5, y = 7) {
//   console.log(x + y);
// }
// addNumbers();

// Symbol
// let sym1 = Symbol();
// let sym2 = Symbol("foo");
// let sym3 = Symbol("foo");
// console.log(sym2 === sym3);

// Arrow functions

function add(a, b) {
  return a + b;
}
const add = (a, b) => a + b;
const add = (a, b) => {
  return a + b;
};
console.log(add(4, 2));

// Array destructuring

// let a, b;
// [a, b] = [100, 200];
// console.log(a, b);
// [a, b, ...rest] = [100, 200, 300, 400, 500];
// console.log(rest);
// ({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
// console.log(a, b);
// ({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
// console.log(rest);
