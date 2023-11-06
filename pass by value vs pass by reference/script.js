// Pass by Value vs Pass by Reference
// // In JavaScript, everything is passed by value. However, when it comes to objects and arrays, they are passed by reference. This means that
// // if you change the object or array inside the function, it will be affected outside the function as well. This is because the value of the
// // variable is a reference to the object.
// // Let's take a look at an example of this:
var a = 5;
var b = 10;

b++;
console.log(a);
console.log(b);

let objt1 = { name: "yao", password: "123" };
let objt2 = objt1;

objt2.passord = "easypeasy";
console.log("objt1 : ", objt1);
console.log("objt2 : ", objt2);

var c = [1, 2, 3, 4, 5];
var d = [].concat(c);
d.push(187628761);
console.log("c : ", c);
console.log("d : ", d);

let objt = { a: "a", b: "b", c: "c" };
let clone1 = Object.assign({}, objt);

objt.c = 5;
console.log(clone1);

let objt3 = {
  a: "a",
  b: "b",
  c: {
    deep: "try and copy me",
  },
};
let clone = Object.assign({}, objt3);
let clone2 = { ...objt3 };
let superClone = JSON.parse(JSON.stringify(objt3));
objt3.c.deep = "hahaha";
console.log("objt3 : ", objt3);
console.log("clone : ", clone);
console.log("clone2 : ", clone2);
console.log("superClone : ", superClone);
