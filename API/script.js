// ES9
// Object spread operator

const animals = {
  tiger: 23,
  lion: 5,
  monkey: 2,
  bird: 40,
};

const { tiger, lion, ...rest } = animals;

console.log(tiger);
console.log(lion);
console.log(rest);

const array = [1, 2, 3, 4, 5];
function sum(a, b, c, d, e) {
  return a + b + c + d + e;
}
console.log(sum(...array));

// Rest parameters in functions

function objectSpread(p1, p2, p3) {
  console.log(p1);
  console.log(p2);
  console.log(p3);
}

const { lion, ...rest } = animals;
const tiger = animals.tiger;

objectSpread(tiger, lion, rest);

// Default parameter values

function sum(a, b = 1) {
  return a + b;
}

console.log(sum(5));

// URLS
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const getData = async function () {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map((url) => {
        return fetch(url).then((response) => response.json());
      })
    );
  } catch (err) {
    console.log("oops", err);
  }
};

const getData2 = async function () {
  const arrayOfPromises = urls.map((url) => fetch(url));
  for await (let request of arrayOfPromises) {
    const data = await request.json();
    console.log(data);
  }

  // Promise.all(
  //   urls.map((url) => {
  //     return fetch(url).then((response) => response.json());
  //   })
  // )
  //   .then((results) => {
  //     console.log(results[0]);
  //     console.log(results[1]);
  //     console.log(results[2]);
  //   })
  //   .catch(() => console.log("error"));
}

  .then((results) => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
  })
  .catch(() => console.log("error"));
