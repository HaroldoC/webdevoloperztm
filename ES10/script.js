// ES10
const array = [1, 2, 3, 4, 5];
array.flat();
const array2 = [1, [2, 3], [4, 5]];
array2.flat();
const array3 = [1, 2, [3, 4, [5]]];
array3.flat();
array3.flat(2);

// console.log(array)
// console.log(array2)
// console.log(array3)

const jurassicPark = [
  ["🦂", "🦟"],
  "💲",
  "🐢",
  ["🐍", "🦎"],
  [[[["🦖"]]], "🦕"],
  ["🐙", "👽"],
];
const flatJurassicPark = jurassicPark.flat(Infinity);
console.log(flatJurassicPark);

const entries = [
  ["bob", "sally"],
  ["cindy", "john"],
  ["anna", "joe"],
];
console.log(Object.fromEntries(entries));

const jurassicParkChaos = jurassicPark.flatMap((creature) => creature + "🦖");
console.log(jurassicParkChaos);

const userEmail = "       eddytheeagle@gmail.com";
const userEmail2 = "jonnydangerous@gmail.com           ";
console.log(userEmail.trimStart());
console.log(userEmail2.trimEnd());

//Form entries

const userProfiles = [
  ["commanderTom", 23],
  ["derekZlander", 40],
  ["hansel", 18],
];
console.log(Object.fromEntries(userProfiles));

const obj = Object.fromEntries(userProfiles);
console.log(Object.entries(obj));

try {
  true + "hi";
} catch {
  console.log("you messed up");
}

try {
  bob + "hi";
} catch {
  console.log("you messed up");
}

try {
  true + "hi";
} catch (error) {
  console.log("you messed up" + error);
}

// function addNumbers(...args: number[]): number {
//   return args.reduce((prev, curr) => prev + curr);
// }
// addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// function addNumbers2(...args: [number, number, number, number]): number {
//   return args.reduce((prev, curr) => prev + curr);
// }
// addNumbers2(1, 2, 3, 4);

// const fetchUserData = async () => {
//   const response = await fetch("/api/users");
//   const data = await response.json();
//   return data;
// };
// fetchUserData().then((data) => console.log(data));

// const animals = {
//   tiger: 23,
//   lion: 5,
//   monkey: 2,
//   bird: 40,
// };
// const { tiger, ...rest } = animals;
// console.log(tiger);
// console.log(rest);
// let x = 10;
// x += 5; // x is now 15
// x -= 5; // x is now 10
// x *= 5; // x is now 50
// x /= 5; // x is now 10
// x **= 5; // x is now 100000
// x %= 5; // x is now 0
// x <<= 5; // x is now 0
// x >>= 5; // x is now 0
// x >>>= 5; // x is now 0
// x &= 5; // x is now 0
// x ^= 5; // x is now 5
// x |= 5; // x is now 5
// const data = new Uint8Array(1024);
// console.log(data);
// const buffer = new SharedArrayBuffer(1024);
// console.log(buffer);
// const buffer2 = new ArrayBuffer(1024);
// console.log(buffer2);
// const buffer3 = new Int8Array(1024);
// console.log(buffer3);
// const buffer4 = new Uint8Array(1024);
// console.log(buffer4);
// const buffer5 = new Uint8ClampedArray(1024);
// console.log(buffer5);
// const buffer6 = new Int16Array(1024);
// console.log(buffer6);
// const buffer7 = new Uint16Array(1024);
// console.log(buffer7);
// const buffer8 = new Int32Array(1024);
// console.log(buffer8);
// const buffer9 = new Uint32Array(1024);
// console.log(buffer9);
// const buffer10 = new Float32Array(1024);
// console.log(buffer10);
