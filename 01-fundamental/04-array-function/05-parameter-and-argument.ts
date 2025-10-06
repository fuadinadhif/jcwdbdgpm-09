/* -------------------------------------------------------------------------- */
/*                              DEFAULT PARAMETER                             */
/* -------------------------------------------------------------------------- */
function multiplyByN(num: number = 7, n: number = 2) {
  const result = num * n;
  return result;
}

console.log(multiplyByN(10, 5));
console.log(multiplyByN(10));
console.log(multiplyByN(1));
console.log(multiplyByN(2));
console.log(multiplyByN(3, 10));
console.log(multiplyByN());

/* -------------------------------------------------------------------------- */
/*                               REST PARAMETER                               */
/* -------------------------------------------------------------------------- */
/* -------------------------------- Contoh 1 -------------------------------- */
// function sumAll(
//   num1: number,
//   num2: number,
//   num3: number = 0,
//   num4: number = 0
// ) {
//   return num1 + num2 + num3 + num4;
// }

function sumAll(num1: number, ...rest: number[]) {
  let restTotal = 0;

  for (let i = 0; i < rest.length; i++) {
    restTotal = restTotal + rest[i];
  }

  return num1 + restTotal;
}

// sumAll(10, 20, 30, 40) => 100
console.log(sumAll(10, 20, 30, 40));

// sumAll(10, 20, 30) => 60
console.log(sumAll(10, 20, 30));

// sumAll(40, 50) => 90
console.log(sumAll(40, 50));

/* -------------------------------- Contoh 2 -------------------------------- */
function getLastArgument(...restParams: number[]) {
  return restParams[restParams.length - 1];
}

// getLastArgument(10, 20, 30, 40) => 40
console.log(getLastArgument(10, 20, 30, 40));

// getLastArgument(10, 20, 30) => 30
console.log(getLastArgument(10, 20, 30));

// getLastArgument(10, 20) => 20
console.log(getLastArgument(10, 20));

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
function sayHello() {
  return "Hello";
}
console.log(sayHello());
console.log(sayHello());

function sayHi(name: string) {
  return "Hi" + " " + name;
}
console.log(sayHi("Adi"));
console.log(sayHi("Budi"));

/* ------------------------------- Loop Array ------------------------------- */
const scores = [5, 10, 25, 100, 500];
console.log(scores.length);
console.log(scores[1]);

let totalScores = 0;

for (let i = 0; i < scores.length; i++) {
  totalScores = totalScores + scores[i];
}

console.log(totalScores);

/* -------------------------- Function as argument -------------------------- */
function calculateTax(salary: number, taxPercentage: number) {
  return salary * taxPercentage;
}

function showTax(
  calculateTaxFunc: (x: number, y: number) => {},
  name: string,
  s: number,
  t: number
) {
  const tax = calculateTaxFunc(s, t);
  return name + " " + "your tax is" + " " + tax;
}

console.log(showTax(calculateTax, "Adi", 5000, 0.1));

/* ------------------------ Function as return value ------------------------ */
function someFunc() {
  return function anotherFunction() {};
}
