// ES2022 - .at() method

const arr = [100, 200, 400, 50000, 10];

arr[arr.length - 2]; // in the passed we used this syntax
console.log(arr.at(2)); // Output: 400
console.log(arr.at(-2)); // Output: 50000
console.log(arr.at(10)); // Output: undefined
console.log(arr.at(-10)); // Output: undefined

const str = "Hello World";
console.log(str.at(2)); // Output: l
console.log(str.at(-2)); // Output: l
console.log(str.at(10)); // Output: undefined
console.log(str.at(-10)); // Output: undefined

// .at() method returns the character at a specified index in a string
// .at() method is similar to .charAt() method
// .at() method accepts negative index
// .at() method returns an empty string if the index is out of range
// .at() method is a static method of String object
// .at() method is not supported in IE
// .at() method is chainable
// .at() method is not supported in Node.js
// .at() method is not supported in Safari
// .at() method is not supported in Firefox
// .at() method is not supported in Chrome

// .at() method syntax
string.at(index);
// Example 1: Use .at() method with positive index
console.log("Hello".at(3)); // Output: l
// Example 2: Use .at() method with negative index
console.log("Hello".at(-4)); // Output: e
// Example 3: Use .at() method with out of range index
console.log("Hello".at(10)); // Output: ""
// Example 4: Use .at() method with chainable
console.log("Hello".at(3).toUpperCase()); // Output: L
// Example 5: Use .at() method with chainable
console.log("Hello".at(3).toUpperCase().repeat(2)); // Output: LL
// Example 6: Use .at() method with chainable
console.log("Hello".at(3).toUpperCase().repeat(2).charAt(1)); // Output: L
// Example 7: Use .at() method with chainable
console.log("Hello".at(3).toUpperCase().repeat(2).charAt(1).toLowerCase()); // Output: l
// Example 8: Use .at() method with chainable
console.log(
  "Hello".at(3).toUpperCase().repeat(2).charAt(1).toLowerCase().repeat(2)
); // Output: ll
// Example 9: Use .at() method with chainable
console.log(
  "Hello".at(3).toUpperCase().repeat(2).charAt(1).toLowerCase().repeat(2).at(0)
); // Output: l
