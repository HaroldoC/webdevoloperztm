// Advanced Arrays

const array = [1, 2, 10, 16];
const double = [];
const newArray = array.forEach((num) => {
  double.push(num * 2);
});

console.log(double);

// map, filter, reduce

const numbers = [5, 3, 8, 4, 7];
const mapArray = numbers.map((num) => {
  return num * 2;
});
console.log(mapArray);
const evenNumbers = numbers.filter((num) => {
  return num % 2 === 0;
});
console.log(evenNumbers);
const reduceArray = numbers.reduce((accumulator, num) => {
  return accumulator + num;
}, 0);
console.log(reduceArray);

// Advanced Objects
