/* -------------------------------------------------------------------------- */
/*                                SHORT CIRCUIT                               */
/* -------------------------------------------------------------------------- */
/* --------------------------------- AND && --------------------------------- */
// value 1 && value 2
// Akan memberikan value falsy atau jika tidak ada value falsy maka dia akan memberikan value truthy terakhir
// T1 && T2 => T2
// T1 && F1 => F1
// F1 && T1 => F1
// F1 && F2 => F1
console.log(10 && "Hello");
console.log(10 && 0);
console.log(0 && 10);
console.log(0 && "");

/* ---------------------------------- OR || --------------------------------- */
// value 1 || value 2
// T1 || T2 => T1
// T1 || F1 => T1
// F1 || T1 => T1
// F1 || F2 => F2
console.log(10 || "Hello");
console.log(10 || 0);
console.log(0 || 10);
console.log(0 || "");
