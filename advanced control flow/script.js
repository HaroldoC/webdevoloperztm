// let + const

const player = "bobby";
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
  let wizardLevel = true;
  console.log("inside", wizardLevel);
}
console.log(wizardLevel);

// Destructuring

const obj = {
  player: "bobby",
  experience: 100,
  wizardLevel: false,
};
obj.wizardLevel = true;
console.log(obj);

const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;

const { player, experience } = obj;
let { wizardLevel } = obj;
console.log(player);
console.log(experience);
console.log(wizardLevel);

// Object properties
const name = "john snow";
const obj = {
  [name]: "hello",
  ["ray" + "smith"]: "hihi",
  [1 + 2]: "hihi",
};
console.log(obj);

const a = "Simon";
const b = true;
const c = {};
c[a] = b;
console.log(c);

// Template strings
