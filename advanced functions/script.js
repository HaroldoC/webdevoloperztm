// Advanced Functions

const first = () => {
  const greet = "Hi";
  const second = () => {
    alert(greet);
  };
  return second;
};
const newFunc = first();
newFunc();

// Closures

// 1. Function that returns a function
function interviewQuestion(job) {
  if (job === "designer") {
    return function (name) {
      console.log(name + ", can you please explain what UX design is?");
    };
  } else if (job === "teacher") {
    return function (name) {
      console.log("What subject do you teach, " + name + "?");
    };
  } else {
    return function (name) {
      console.log("Hello " + name + ", what do you do?");
    };
  }
}
