/* -------------------------------------------------------------------------- */
/*                                   IF ELSE                                  */
/* -------------------------------------------------------------------------- */
/*
if (kondisi 1) {
  kode yang akan dijalankan kalau kondisi 1 BENAR
} else if (kondisi 2) {
  kode yang akan dijalankan kalau kondisi 2 BENAR
} else if (kondisi 3) {
  kode yang akan dijalankan kalau kondisi 3 BENAR
}
else {
  kode yang akan dijalankan kalau SEMUA kondisi SALAH
}
*/

let password = "supersecret";
if (password === "supersecret") {
  console.log("Super secret message!");
} else if (password === "regulersecret") {
  console.log("Reguler secret message!");
} else {
  console.log("Public message. Everybody can read this");
}

/* -------------------------------------------------------------------------- */
/*                                 SWITCH CASE                                */
/* -------------------------------------------------------------------------- */
let pass = "regulersecret";

switch (pass) {
  case "supersecret":
    console.log("Super secret message!");
    break;
  case "regulersecret":
    console.log("Reguler secret message!");
    break;
  default:
    console.log("Public message. Everybody can read this");
}

/* -------------------------------------------------------------------------- */
/*                              TERNARY OPERATOR                              */
/* -------------------------------------------------------------------------- */
// let salary = 5000;
// if (salary > 10_000) {
//   console.log("Ricchhhhh!");
// } else if (salary > 6000) {
//   console.log("Still rich");
// } else if (salary > 2000) {
//   console.log("Rich juga");
// } else {
//   console.log("Poor");
// }

let salary = 50_000;
// salary > 10_000 ? console.log("Richhh!") : console.log("Poor");
salary > 10_000
  ? console.log("Richhh!")
  : salary > 6000
  ? console.log("Still rich")
  : salary > 2000
  ? console.log("Rich juga")
  : console.log("Poor");

/*
kondisi ? kode untuk kondisi benar : kode untuk kondisi salah;

kondisi 1 
  ? kode untuk kondisi 1 benar
  : kondisi 2
  ? kode untuk kondisi 2 benar
  : kondisi 3
  ? kode untuk kondisi 3 benar
  : kode untuk semua kondisi salah
*/
