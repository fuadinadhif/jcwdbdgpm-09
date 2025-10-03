/* -------------------------------------------------------------------------- */
/*                                  FOR LOOP                                  */
/* -------------------------------------------------------------------------- */
// for (let counter = 0; counter < 3; counter++) {
//   console.log("Hello");
// }

// for (variable counter; loop condition; increment) {code to be executed}

// LOOP 1
// counter = 0
// counter < 3 => 0 < 3 = true => kode di dalam loop dijalankan (console.log("Hello")) 1
// counter = counter + 1 => 0 + 1 = 1

// LOOP 2
// counter = 1
// counter < 3 => 1 < 3 = true => kode di dalam loop dijalankan (console.log("Hello")) 2
// counter = counter + 1 => 1 + 1 = 2

// LOOP 3
// counter = 2
// counter < 3 => 2 < 3 = true => kode di dalam loop dijalankan (console.log("Hello")) 3
// counter = counter + 1 => 2 + 1 = 3

// LOOP 4
// counter = 3
// counter < 3 => 3 < 3 = false => loop berhenti.

/* -------------------------------------------------------------------------- */
/*                                 WHILE LOOP                                 */
/* -------------------------------------------------------------------------- */
// let counter = 0;

// while (counter < 1) {
// console.log("Hello");
// counter++;
// }

// LOOP 1
// counter = 0
// counter < 1 => 0 < 1 = true => kode di dalam loop dijalankan (console.log("Hello")) 1
// counter = counter + 1 => 0 + 1 = 1

// LOOP 2
// counter = 1
// counter < 1 => 1 < 1 = false => loop berhenti.

/* -------------------------------------------------------------------------- */
/*                                DO WHILE LOOP                               */
/* -------------------------------------------------------------------------- */
// let newCounter = 0;

// do {
//   console.log("Hello");
//   newCounter++;
// } while (newCounter < 1);

/* ------------------------- WHILE VS DO WHILE LOOP ------------------------- */
let whileCounter = 0;
while (whileCounter > 0) {
  console.log("WHILE!");
  whileCounter++;
}

let doWhileCounter = 0;
do {
  console.log("DO WHILE!");
  whileCounter++;
} while (doWhileCounter > 0);
