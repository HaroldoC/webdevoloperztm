// var button = document.getElementsByTagName("button");

// button[0].addEventListener("click", function () {
//   console.log("Button clicked");
//   alert("Button clicked");
// });

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function creatListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}

function addListAfterClick() {
  if (inputLength > 0) {
    creatListElement();
  }
}

function addListAfterkeydown(event) {
  if (inputLength > 0 && event.key === "Enter") {
    creatListElement();
  }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keydown", addListAfterkeydown);
