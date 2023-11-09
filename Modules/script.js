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
