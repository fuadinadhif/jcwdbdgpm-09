// FOR LOOP
// 1. for let: general loop
// 2. for of: array loop
// 3. for in: object dan array loop

const teachers = ["Herman", "Syamsul", "Budi", "Cyntia"];
const userData = { id: 1, name: "Vikagi" };

/* --------------------------------- for let -------------------------------- */
for (let i = 0; i < 10; i++) {}

/* --------------------------------- for of --------------------------------- */
// for let array
for (let i = 0; i < teachers.length; i++) {
  console.log(teachers[i]);
}

// for of array
for (const element of teachers) {
  console.log(element);
}

/* --------------------------------- for in --------------------------------- */
// for in array
for (const index in teachers) {
  console.log(index);
  console.log(teachers[index]);
}

// for in object
for (const key in userData) {
  console.log(key);
  console.log(userData[key]);
}
