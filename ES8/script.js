// ES8
// .padstart()
// .padend()

const fun = (a, b, c, d) => {
  console.log(a);
};

fun(1, 2, 3, 4);

Object.values;
Object.entries;
Object.keys;
let obj = {
  username0: "Santa",
  username1: "Rudolf",
  username2: "Mr.Grinch",
};

Object.keys(obj).forEach((key, index) => {
  console.log(Object.values({ a: "A", b: "B" })); // ['A', 'B']
  console.log(Object.entries({ a: "A", b: "B" })); // [['a', 'A'], ['b', 'B']]
  console.log(Object.keys({ a: "A", b: "B" })); // ['a', 'b']
  console.log(Object.keys(obj)[index]);
  console.log(obj[key]);
});

// ASYNC AWAIT

// Callbacks pyramid of doom

movePlayer(100, "left")
  .then(() => movePlayer(400, "left"))
  .then(() => movePlayer(10, "right"))
  .then(() => movePlayer(330, "left"));

// ASYNC
async function playerStart() {
  const first = await movePlayer(100, "left"); // pause
  const second = await movePlayer(400, "left"); // pause
  const third = await movePlayer(10, "right"); // pause
  const fourth = await movePlayer(330, "left"); // pause
}

// Fetch function
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then(console.log);

// ASYNC AWAIT
async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await resp.json();
  console.log(data);
}

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

// Try catch

const getData = async function () {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map((url) => {
        return fetch(url).then((response) => response.json());
      })
    );
    console.log(users);
    console.log(posts);
    console.log(albums);
  } catch (err) {
    console.log("oops", err);
  }
};
