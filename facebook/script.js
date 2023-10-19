var database = [
  {
    username: "Haroldo",
    password: "supersecret",
  },
];

var newsFeed = [
  {
    username: "Bobby",
    timeline: "So tired from all that learning!",
  },
  {
    username: "Sally",
    timeline: "Javascript is sooooo cool!",
  },
  {
    username: "Mitch",
    timeline: "Javascript is preeetyy cool!",
  },
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function signIn(user, pass) {
  if (user === database[0].username && pass === database[0].password) {
    console.log(newsFeed);
  } else {
    alert("Sorry, wrong username and password!");
  }
}
signIn(userNamePrompt, passwordPrompt);

// function declaration
function newFunction() {}
newFunction(); // calling the function
// function expression
var newFunction = function () {};
newFunction(); // calling the function
// expression
1 + 3;
var a = 2;
return true;
// calling or invoking a function
alert();
newFunction(param1, param2);
// assign a variable
var a = true;
// function vs method
function thisIsAFunction() {}
var obj = {
  thisIsAMethod: function () {},
};
thisIsAFunction();
obj.thisIsAMethod();
// arrow functions
const arrowFunction = () => {};
// assign a method
var obj = {
  thisIsAMethod: function () {},
};
obj.thisIsAMethod();
// accessing properties
obj.property1;
obj["property1"];
// accessing methods
obj.method1();
obj["method1"]();
// accessing nested objects
obj.nestedObject.property1;
obj["nestedObject"]["property1"];
// accessing nested arrays
obj.nestedArray[0];
obj["nestedArray"][0];
// accessing nested methods
obj.nestedObject.method1();
obj["nestedObject"]["method1"]();
// accessing nested arrays
obj.nestedArray[0]();
obj["nestedArray"][0]();
