// ES2020

// 1. BigInt
// 2. Dynamic Import
// 3. Nullish Coalescing Operator
// 4. Optional Chaining Operator

// 4. Optional Chaining Operator

let will_pokemon = {
  pikachu: {
    species: "mouse pokemon",
    height: 0.4,
    weight: 6,
  },
};

let andrei_pokemon = {
  pikachu: {
    species: "mouse pokemon",
    height: 0.8,
    weight: 30,
    power: "",
  },
};

let power = andrei_pokemon?.pikachu?.power ?? "no power";
console.log(power);

// 3. Nullish Coalescing Operator

const a = null;
console.log(a ?? "null"); // Output: null

const b = undefined;
console.log(b ?? "undefined"); // Output: undefined
const c = "";
console.log(c ?? "empty string"); // Output: empty string
const d = 0;
console.log(d ?? "0"); // Output: 0
const e = false;
console.log(e ?? "false"); // Output: false
const f = NaN;
console.log(f ?? "NaN"); // Output: NaN
const g = "false";
console.log(g ?? "false"); // Output: false

// if (andrei_pokemon && andrei_pokemon.pikachu && andrei_pokemon.pikachu)
//   console.log(andrei_pokemon.pikachu.weight);
// else console.log("chu");
// console.log(will_pokemon?.pikachu?.species ?? "no chu");
// console.log(andrei_pokemon?.pikachu?.species ?? "no chu");
// console.log(andrei_pokemon?.raichu?.species ?? "no chu");
// console.log(andrei_pokemon?.raichu?.species ?? "no chu");

let weight3 = andrei_pokemon?.pikachu?.weight;
console.log(weight3);

let weightPikachu = will_pokemon.pikachu.weight;
console.log("weight", weightPikachu);
// Remove the redeclaration of the function
// const getPokemonByName = (name, data) => {
//   return data[name] || null;
// };

// Instead, you can modify the existing function like this:

const getPokemonWeight = (name) => {
  return new Promise((resolve, reject) => {
    if (will_pokemon[name]) {
      resolve(will_pokemon[name].weight);
    } else {
      reject("pokemon not found");
    }
  });
};

console.log(will_pokemon);
console.log(andrei_pokemon);
getPokemonWeight("raichu")
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
// const getPokemonWeight = (name) => {
//   return new Promise((resolve, reject) => {
//     if (will_pokemon[name]) {
//       resolve(will_pokemon[name].weight);
//     } else {
//       reject("pokemon not found");
//     }
//   });
// };

// getPokemonWeight("pikachu")
//   .then((weight) => {
//     console.log("weight", weight);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// getPokemonWeight("raichu")
//   .then((weight) => {
//     console.log("weight", weight);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// getPokemonWeight("squirtle")
//   .then((weight) => {
//     console.log("weight", weight);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const getPokemonByName = (name, data) => {
//   return data[name] || null;
// };
// const getPokemonSpecies = (name) => {
//   return getPokemonByName(name, will_pokemon);
// };
// const getPokemonHeight = (name) => {
//   return getPokemonSpecies(name).height;
// };
// const getPokemonWeight = (name) => {
//   return getPokemonSpecies(name).weight;
// };
// let weight = getPokemonWeight("pikachu");
// console.log(weight);
// let weight2 = getPokemonWeight("raichu");
// console.log(weight2);
// let weight3 = getPokemonWeight("squirtle");
// console.log(weight3);
// const pokemons = [
//   "charizard",
//   "blastoise",
//   "venusaur",

// let pokemons = [
//   {
//     id: 1,
//     name: 'Bulbasaur',
//     type: 'grass',
//     base_experience: 64
//   },
//   {
//     id: 2,
//     name: 'Ivysaur',
//     type: 'grass',
//     base_experience: 142
//   },
//   {
//     id: 3,
//     name: 'Venusaur',
//     type: 'grass',
//     base_experience: 236
//   },
//   {
//     id: 4,
//     name: 'Charmander',
//     type: 'fire',
//     base_experience: 62
//   },
//   {
//     id: 5,
//     name: 'Charmeleon',
//     type: 'fire',
//     base_experience: 142
//   },
//   {
//     id: 6,
//     name: 'Charizard',
//     type: 'fire',
//     base_experience: 240
//   },
//   {
//     id: 7,
//     name: 'Squirtle',
//     type: 'water',
//     base_experience: 63
//   },

//   {
//     id: 8,
//     name: 'Wartortle',
//     type: 'water',
//     base_experience: 142
//   },
