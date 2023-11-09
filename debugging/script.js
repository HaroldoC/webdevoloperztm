// Debugging

// const flattened = [
//   [0, 1],
//   [2, 3],
//   [4, 5],
// ].reduce((accumulator, array) => {
//   console.log("accumulator", accumulator);
//   console.log("array", array);
//   return accumulator.concat(array);
// }, []);

// Debugger
const flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce((accumulator, array) => {
  debugger;
  return accumulator.concat(array);
}, []);

// console.log("flattened", flattened);

// Output: [0, 1, 2, 3, 4, 5]

function flattenArrays(...arrays) {
  return arrays.reduce((a, b) => a.concat(b), []);
}
const flattened2 = flattenArrays([0, 1], [2, 3], [4, 5]);
console.log("flattened2", flattened2);
// Output: [0, 1, 2, 3, 4, 5]

const flattened3 = flattenArrays([0, 1], [2, 3], [4, 5], [6, 7]);
console.log("flattened3", flattened3);
// Output: [0, 1, 2, 3, 4, 5, 6, 7]

const flattened4 = flattenArrays([0, 1], [2, 3], [4, 5], [6, 7], [8, 9]);
console.log("flattened4", flattened4);
// Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const flattened5 = flattenArrays(
  [0, 1],
  [2, 3],
  [4, 5],
  [6, 7],
  [8, 9],
  [10, 11]
);
console.log("flattened5", flattened5);
// Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

const flattened6 = flattenArrays(
  [0, 1],
  [2, 3],
  [4, 5],
  [6, 7],
  [8, 9],
  [10, 11],
  [12, 13]
);
console.log("flattened6", flattened6);
// Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
