var todos = [
  "clean room",
  "brush teeth",
  "exercise",
  "study javascript",
  "eat healthy",
];
var todosLength = todos.length;
for (var i = 0; i < todos.length; i++) {
  console.log(i);
}

todos.forEach(function (todo, i) {
  console.log(todo, i);
});

// for (var i = 0; i < todos.length; i++) {
//   console.log(todos[i] + "!");
// }
// for (let todo of todos) {
//   console.log(todo + "!");
// }

// var counterOne = 0;
// while (counterOne < 10) {
//   console.log(counterOne);
//   counterOne++;
// }

// var counterTwo = 10;
// do {
//   console.log(counterTwo);
//   counterTwo--;
// } while (counterTwo > 0);

// function addTodos() {
//   var input = document.getElementById("input").value;
//   todos.push(input);
//   console.log(todos);
// }

// function displayTodos() {
//   console.log(todos);
// }

// function changeTodos() {
//   var input = document.getElementById("input").value;
//   var index = document.getElementById("index").value;
//   todos[index] = input;
//   console.log(todos);
// }

// function deleteTodos() {
//   var index = document.getElementById("index").value;
//   todos.splice(index, 1);
//   console.log(todos);
// }
