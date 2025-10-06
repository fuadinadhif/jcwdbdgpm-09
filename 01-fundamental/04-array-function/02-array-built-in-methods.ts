/* -------------------------------------------------------------------------- */
/*                                    JOIN                                    */
/* -------------------------------------------------------------------------- */
// Menggabungkan element-element array menjadi string
const arrayOfFruits = ["Apple", "Banana", "Grape", "Watermelon"];
console.log(arrayOfFruits.join());
console.log(arrayOfFruits.join(""));
console.log(arrayOfFruits.join(" "));
console.log(arrayOfFruits.join("-"));

/* -------------------------------------------------------------------------- */
/*                                    PUSH                                    */
/* -------------------------------------------------------------------------- */
// Menambah element baru di akhir array
const employeeNames = ["Joko", "Pinurbo", "Anthony"];
console.log(employeeNames);
console.log(employeeNames.push("Brian"));
console.log(employeeNames);

/* -------------------------------------------------------------------------- */
/*                                     POP                                    */
/* -------------------------------------------------------------------------- */
// Menghapus element di akhir array
const citizens = ["Dadang", "Mamad", "Bejo", "Sutejo"];
console.log(citizens);
console.log(citizens.pop());
console.log(citizens);

/* -------------------------------------------------------------------------- */
/*                                   UNSHIFT                                  */
/* -------------------------------------------------------------------------- */
// Menambah element baru di awal array
const scores = [100, 75, 90, 95];
console.log(scores);
console.log(scores.unshift(45));
console.log(scores);

/* -------------------------------------------------------------------------- */
/*                                    SHIFT                                   */
/* -------------------------------------------------------------------------- */
// Menghapus element di awal array
const values = [50, 65, 85, 100];
console.log(values);
console.log(values.shift());
console.log(values);

/* -------------------------------------------------------------------------- */
/*                                   SPLICE                                   */
/* -------------------------------------------------------------------------- */
// Memotong / mengganti isi sebuah array - CUT
// Array original akan terpengaruh
/*
Array.splice(start) => Potong dari start sampai akhir
Array.splice(start, deleteCount) => Potong dari start sampai jumlah delete terpenuhi
Array.splice(start, deleteCount, item1, item2, ..., itemN)
*/
const fruits = ["Banana", "Apple", "Avocado", "Watermelon", "Orange"];

console.log(fruits.splice(2, 3));
console.log(fruits);

/* -------------------------------------------------------------------------- */
/*                                    SLICE                                   */
/* -------------------------------------------------------------------------- */
// Mengambil isi sebuah array - COPY
// Array original aman
/*
Array.slice(start)
Array.slice(start, end)
*/

const names = ["Andhika", "Galih", "Ratna", "Soraya", "Angelina"];
console.log(names.slice(2, 4));
console.log(names);

/* --------------------------------- INDEXOF -------------------------------- */
const employees = [
  "Alice Johnson",
  "Bob Smith",
  "Charlie Davis",
  "Diana Miller",
  "Ethan Wilson",
  "Fiona Taylor",
  "George Brown",
  "Hannah Clark",
  "Ian Lewis",
  "Julia Walker",
  "Kevin Hall",
  "Laura Allen",
  "Michael Young",
  "Nina Hernandez",
  "Oscar King",
  "Paula Wright",
  "Quincy Lopez",
  "Rachel Hill",
  "Sam Green",
  "Tina Adams",
  "Umar Baker",
  "Vera Scott",
  "Will Perez",
  "Xenia Mitchell",
  "Yusuf Carter",
  "Zara Roberts",
  "Adam Turner",
  "Bella Phillips",
  "Caleb Campbell",
  "Daisy Parker",
  "Edward Evans",
  "Faith Collins",
  "Gavin Stewart",
  "Hailey Morris",
  "Isaac Rogers",
  "Jade Cook",
  "Kyle Morgan",
  "Lily Reed",
  "Mason Bailey",
  "Nora Rivera",
  "Oliver Cooper",
  "Penny Richardson",
  "Quinn Cox",
  "Riley Howard",
  "Sebastian Ward",
  "Tara Torres",
  "Uriel Peterson",
  "Vanessa Gray",
  "Wyatt Ramirez",
  "Xander James",
  "Yara Watson",
  "Zion Brooks",
  "Aaron Kelly",
  "Bianca Sanders",
  "Colin Price",
  "Delilah Bennett",
  "Elliot Wood",
  "Farah Barnes",
  "Grayson Ross",
  "Harper Henderson",
  "Isabel Coleman",
  "Jack Jenkins",
  "Kylie Perry",
  "Liam Powell",
  "Maya Long",
  "Noah Patterson",
  "Olivia Hughes",
  "Preston Flores",
  "Quiana Simmons",
  "Ryan Foster",
  "Sophia Bryant",
  "Tristan Butler",
  "Uma Chavez",
  "Victor Gonzales",
  "Wendy Alexander",
  "Ximena Russell",
  "Yvonne Griffin",
  "Zeke Diaz",
  "Aiden Hayes",
  "Brooke Myers",
  "Carter Ford",
  "Daphne Hamilton",
  "Elias Graham",
  "Freya Sullivan",
  "Gabriel Wallace",
  "Hazel West",
  "Ian Stone",
  "Jasmine Cole",
  "Kai Jenkins",
  "Leah Perry",
  "Miles Powell",
  "Naomi Bell",
  "Owen Cook",
  "Phoebe Murphy",
  "Quentin Simmons",
  "Rosa Ortiz",
];

console.log(employees.indexOf("Adams"));
console.log(employees.indexOf("Owen Cook"));
console.log(employees.indexOf("Rosa Ortiz"));
console.log(employees.indexOf("Akmal"));

/* -------------------------------------------------------------------------- */
/*                                 LASTINDEXOF                                */
/* -------------------------------------------------------------------------- */
const cities = [
  "Jakarta",
  "Bandung",
  "Yogyakarta",
  "Tegal",
  "Jakarta",
  "Tegal",
  "Bandung",
];

console.log(cities.indexOf("Jakarta"));
console.log(cities.lastIndexOf("Jakarta"));

/* -------------------------------------------------------------------------- */
/*                                    SORT                                    */
/* -------------------------------------------------------------------------- */
const points = [10, 2, 7];
points.sort((a, b) => {
  return a - b;
});

// LOOP 1
// a = 10 (index 0)
// b = 2 (index 1)
// return 10 - 2 = 8 (positive)
// [2, 10, 7]

// LOOP 2
// a = 10 (index 1)
// b = 7 (index 2)
// return 10 - 7 = 3 (positive)
// [2, 7, 10]

// LOOP 3
// a = 10 (index 2)
// b = undefined (index 3)
// return 10 - undefined = NaN
// [2, 7, 10]

const students = [
  "Joko Widodo",
  "Susilo Bambang",
  "B.J Habibie",
  "Prabowo Subianto",
];
console.log(students.sort());

/* -------------------------------------------------------------------------- */
/*                                   REVERSE                                  */
/* -------------------------------------------------------------------------- */
const string = "KASUR";
const stringArray = string.split("");
console.log(stringArray.reverse());

const arrayOfNumbers = [20, 30, 40, 50, 60];
console.log(arrayOfNumbers.reverse());

const randomArray = [false, undefined, "Hello", 1, 2, 3];
console.log(randomArray.reverse());

/* -------------------------------------------------------------------------- */
/*                                     MAP                                    */
/* -------------------------------------------------------------------------- */
const ages = [19, 14, 25];
console.log(
  ages.map((element, index) => {
    return element + 10;
  })
);

// LOOP 1
// newArray = []
// element = 19
// index = 0
// return element + 10 = 19 + 10 = 29
// newArray = [29]

// LOOP 2
// newArray = [29]
// element = 14
// index = 1
// return element + 10 = 14 + 10 = 24
// newArray = [29, 24]

// LOOP 3
// new Array = [29, 24]
// element 25
// index = 2
// return element + 10 = 25 + 10 = 35
// newArray = [29, 24, 35]

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
const fruitsArray = ["Apple", "Banana", "Cherry", "Date", "Watermelon"];

function fruitsString(fruits: string[]) {
  const lastFruits = "and " + fruits[fruits.length - 1];
  fruits.splice(fruits.length - 1, 1, lastFruits);
  const fruitsString = fruits.join(", ");

  return fruitsString;
}

console.log(fruitsString(fruitsArray));
