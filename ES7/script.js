// ES7
const pets = ["cat", "dog", "bat"];

pets.includes("dog"); // false
pets.includes("cat"); // true

const square = (x) => x ** 2;
const cube = (y) => y ** 3;
const addSquareCube = (a, b) => {
  const squared = square(a);
  const cubed = cube(b);
  return squared + cubed;
};
const addSquareCube = (a, b) => square(a) + cube(b);
console.log(addSquareCube(10, 5));
