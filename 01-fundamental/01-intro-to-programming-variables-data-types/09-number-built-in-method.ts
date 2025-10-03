/* ------------------------------- parseInt() ------------------------------- */
const width = "42px";
console.log(parseInt(width));
console.log(parseInt(true));
console.log(parseInt(null));
console.log(parseInt(undefined));
console.log(parseInt("12,3456%789"))

/* -------------------------------- Number() -------------------------------- */
console.log(Number(null));
console.log(Number(false));
console.log(Number(true));
console.log(Number("42"));

/* -------------------------------- toFixed() ------------------------------- */
const pi = 3.1415926535897932384;
console.log(pi.toFixed(4));
