// EXAMPLE 1 - Add a Key/Value pair to a Map object in JavaScript

const map1 = new Map();

map1.set('name', 'bobby hadz');
map1.set('age', 30);

// 👇️️ Map(2) { 'name' => 'bobby hadz', 'age' => 30 }
console.log(map1);
console.log(map1.get('name')); // 👉️ bobby hadz

// ------------------------------------------------------------------

// // EXAMPLE 2 - Chaining calls to the `Map.set()` method

// const map1 = new Map();

// map1
//   .set('name', 'bobby hadz')
//   .set('number', 5)
//   .set('color', 'blue')
//   .set('city', 'Santiago');

// // Map(4) {
// //   'name' => 'bobby hadz',
// //   'number' => 5,
// //   'color' => 'blue',
// //   'city' => 'Santiago'
// // }
// console.log(map1);

// ------------------------------------------------------------------

// // EXAMPLE 3 - Conditionally adding key-value pairs to a Map object

// const map1 = new Map();

// map1.set('name', 'bobby hadz');
// map1.set('age', 30);

// if (!map1.has('name')) {
//   map1.set('name', 'alice');
// }

// // 👇️ Map(2) { 'name' => 'bobby hadz', 'age' => 30 }
// console.log(map1);

// // 👇️ bobby hadz
// console.log(map1.get('name'));

// ------------------------------------------------------------------

// // EXAMPLE 4 - The keys and values of a Map can be of any type

// const map1 = new Map();
// const obj = {country: 'Chile'};

// map1.set(obj, {city: 'Santiago'});

// // 👇️ { {country: 'Chile'} => {city: 'Santiago'} }
// console.log(map1);

// console.log(map1.get(obj)); // 👉️ {city: 'Santiago'}
