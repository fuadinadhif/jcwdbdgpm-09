/* ---------------------------- var, let VS const --------------------------- */
// 1. var dan let isinya bisa diganti
var fullName = "Purwa Hartono";
console.log(fullName);
fullName = "Bryan Hartono";
console.log(fullName);

let city = "Bandung";
city = "Jakarta";
city = "Sumedang";
console.log(city);

// 2. const isinya tidak bisa diganti
const score = 100;
// score = 5000;
console.log(score);

/* ---------------------------- var VS let, const --------------------------- */
// 1. var membuat variablenya menjadi global scope
// 2. let dan const membuat variablenya menjadi block scope
// block scope => {}

let age = 20;
console.log(age);

// console.log(gender);

{
  // scope level 1
  console.log(age);

  let gender = "Male";
  console.log(gender);

  // console.log(email)
  console.log(addres);

  {
    // scope level 2
    console.log(age);
    console.log(gender);

    let email = "john@gmail.com";
    console.log(email);

    var addres = "Jalan Soekarno Hatta";
    console.log(addres);
  }
}

console.log(addres);
