// Advanced Loops
// Loop through the array and print out each fruit in a sentence.
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

basket.forEach((item) => {
  console.log(item);
});

/// for of
for (item of basket) {
  console.log(item);
}

// for in - works with objects
// enumerating - properties in an object are called enumerable
// for in - loops over the properties in an object
// for of - loops over the values of an iterable object
const basket = ["apples", "oranges", "grapes"];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000,
};
for (item in detailedBasket) {
  console.log(item);
}
for (value of Object.values(detailedBasket)) {
  console.log(value);
}
for (entry of Object.entries(detailedBasket)) {
  console.log(entry);
}
for (entry of Object.entries(detailedBasket)) {
  console.log(entry[0], entry[1]);
}
for ([key, value] of Object.entries(detailedBasket)) {
  console.log(key, value);
}
