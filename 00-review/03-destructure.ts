/* ------------------------------- Normal Swap ------------------------------ */
let a = 5;
let b = 10;

let temp = a;
a = b;
b = temp;

console.log(a);
console.log(b);

/* ---------------------------- Destructure Swap ---------------------------- */
let c = 5;
let d = 10;

[c, d] = [d, c];

console.log(c);
console.log(d);
