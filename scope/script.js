// Scope

function bb() {
  var a = 10;
  console.log(a);
}

// Root Scope

var fun = 5;

function funFunction() {
  // child scope
  var fun = "hellooooo";
  console.log(1, fun);
}

function funeFunction() {
  // child scope
  var fun = "byeee";
  console.log(2, fun);
}

function funesFunction() {
  // child scope
  var fun = "Ahhhhhhhh";
  console.log(3, fun);
}

console.log("window", fun);
funFunction();
funeFunction();
funesFunction();

console.log("after function call", fun);

// Scope Chain
let x = 10;
function aa() {
  let y = 20;
  function bb() {
    let z = 30;
    console.log(x + y + z);
  }
  bb();
}
aa();

// Lexical Scope

var a = 10;
function aa() {
  var a = 20;
  console.log(a);
  bb();
}

aa();
console.log(a);
