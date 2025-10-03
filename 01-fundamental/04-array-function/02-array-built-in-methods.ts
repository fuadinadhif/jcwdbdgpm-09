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
