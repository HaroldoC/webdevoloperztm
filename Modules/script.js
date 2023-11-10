// Modules
// IIFE
//JS1 first file loaded
var myApp = {}(
  //IIFE second file loaded
  function () {
    myApp.add = function (a, b) {
      return a + b;
    };
  }
)();

// Jquery uses this: allows us to use $

//----------------- CommonJS + Browserify----------------

// JS1
module.exports = function add(a, b) {
  return a + b;
};
// JS2
var add = require("./add");
const add = require("./js1");
console.log(add(5, 6));

//------------------ ES6 + Webpack --------------------------------
// JS1
export default function add(a, b) {
  return a + b;
}
// JS2
import add from "./add";
