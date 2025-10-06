// Function declaration akan di-hoist
console.log(power(5, 2));

function power(num: number, power: number) {
  const result = num ** power;
  return result;
}

console.log(power(4, 2));

// Function expression tidak akan di-hoist
// console.log(divideBy2(10));

const divideBy2 = function (num: number) {
  const result = num / 2;

  return result;
};

console.log(divideBy2(10));
