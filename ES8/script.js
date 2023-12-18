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
  const firstMove = await movePlayer(100, "left"); // pause
  await movePlayer(400, "left"); // pause
  await movePlayer(10, "right"); // pause
}
