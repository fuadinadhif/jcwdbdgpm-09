/* -------------------------------------------------------------------------- */
/*                               REST VS SPREAD                               */
/* -------------------------------------------------------------------------- */
// Reast
function someFunc(...rest) {}

// Spread
const object1 = {};
const array1 = [];
// {...object1}
// [...array1]

/* -------------------------------------------------------------------------- */
/*                                ARRAY SPREAD                                */
/* -------------------------------------------------------------------------- */
const points = [100, 85, 70, 65, 95];
// const newPoints = [1000, points[0], points[1], points[2], points[3], points[4], 50];
const newPoints = [1000, ...points, 50];

console.log(points);
console.log(newPoints);

points[0] = 0;

console.log(points);
console.log(newPoints);

/* -------------------------------------------------------------------------- */
/*                                OBJECT SPREAD                               */
/* -------------------------------------------------------------------------- */
const person = { name: "John Doe", age: 70, address: "Jl Buah Batu" };
// const newPerson = {
//   name: person.name,
//   age: person.age,
//   address: person.address,
//   gender: "Male"
// };
const newPerson = { ...person, gender: "Male", age: 25 };

console.log(person);
console.log(newPerson);

person.name = "Suprapto";

console.log(person);
console.log(newPerson);
