console.log(1);

// for (let i = 0; i < 100_000_000_000; i++) {}

setTimeout(() => {
  console.log(2);
}, 1000);

console.log(3);
console.log(4);
console.log(5);

setTimeout(() => {
  console.log(6);
}, 0);
