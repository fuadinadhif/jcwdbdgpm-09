// const originalPrice = 500_000;
// const discountPercentage = 50 / 100;
// const discountPrice = originalPrice * discountPercentage;
// const finalPrice = originalPrice - discountPrice;
// console.log(finalPrice);

// const originalPrice1 = 5_000_000;
// const discountPercentage1 = 10 / 100;
// const discountPrice1 = originalPrice1 * discountPercentage1;
// const finalPrice1 = originalPrice1 - discountPrice1;
// console.log(finalPrice1);

// function definition - pembuatan fungsi
/*
function [NAMA_FUNGSI] ([PARAMETERS]) {
  kode untuk dijalankan
}
*/
function calculateFinalPrice(
  originalPrice: number,
  discountPercentage: number
) {
  const discountPrice = originalPrice * discountPercentage;
  const finalPrice = originalPrice - discountPrice;

  return finalPrice;
}

// function execution - pemanggilan fungsi
/*
[NAMA_FUNGSI] ([ARGUMENTS])
*/
console.log(calculateFinalPrice(1000, 0 / 100));
console.log(calculateFinalPrice(500_000, 50 / 100));
console.log(calculateFinalPrice(1_000_000, 10 / 100));

/* -------------------------------------------------------------------------- */
/*                     FUNCTION DECLARATION VS EXPRESSION                     */
/* -------------------------------------------------------------------------- */
/* ------------------------------- Declaration ------------------------------ */
function add(num1: number, num2: number) {
  const result = num1 + num2;
  return result;
}

console.log(add(5, 2));
console.log(add(15, -5));

/* ------------------------------- Expression ------------------------------- */
const subtract = function (num1: number, num2: number) {
  return num1 - num2;
};

console.log(subtract(10, 2));
console.log(subtract(5, 3));

const multiply = function () {};

/* -------------------------------------------------------------------------- */
/*                               ARROW FUNCTION                               */
/* -------------------------------------------------------------------------- */
const funcName = () => {};
