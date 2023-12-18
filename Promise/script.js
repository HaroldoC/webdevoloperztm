// Promise - is a object that may produce a single value some time in the future

// 1. Promise
// State: pending -> fulfilled or rejected

// Callbacks pyramid of doom
el.addEventListener("click", submitForm);

movePlayer(100, "left", function () {
  movePlayer(400, "left", function () {
    movePlayer(10, "right", function () {
      movePlayer(330, "left", function () {});
    });
  });
});

movePlayer(100, "left")
  .then(() => movePlayer(400, "left"))
  .then(() => movePlayer(10, "right"))
  .then(() => movePlayer(330, "left"));

// Grab tweets
grabTweets("twitter/HAROLDO CARVALHO", (error, haroldoTweets) => {
  if (error) {
    throw Error;
  }
  displayTweets(haroldoTweets);
  grabTweets("twitter/ELON MUSK", (error, elonTweets) => {
    if (error) {
      throw Error;
    }
    displayTweets(elonTweets);
    grabTweets("twitter/JOHN CENA", (error, johnTweets) => {
      if (error) {
        throw Error;
      }
      displayTweets(johnTweets);
    });
  });
});

// Promise
const promise = new Promise((resolve, reject) => {
  if (false) {
    resolve("Stuff Worked");
  } else {
    reject("Error, it broke");
  }
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "HIII");
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "POOKIE");
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 5000, "Is it me you are looking for");
});

Promise.all([promise, promise2, promise3, promise4]).then((values) => {
  console.log(values);
});

promise.then((result) => console.log(result));

// URLS
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

Promise.all(
  urls.map((url) => {
    return fetch(url).then((response) => response.json());
  })
)
  .then((results) => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
  })
  .catch(() => console.log("error"));

// Chaining Promises
promise
  .then((result) => result + "!")
  .then((result2) => {
    console.log(result2);
  })

  .catch(() => console.log("error!"));
promise.catch((error) => console.log(error));
