/* --------------------------------- AND && --------------------------------- */
// condition 1 && condition 2
// AND && => Hanya akan bernilai benar, kalau kedua kondisi benar
// T && T => T
// T && F => F
// F && T => F
// F && F => F
console.log(10 === 10 && 5 > 1);
console.log(10 === 10 && 5 > 10);
console.log(10 === 100 && 5 > 1);
console.log(10 === 100 && 5 > 10);

/* ---------------------------------- OR || --------------------------------- */
// condition 1 || condition 2
// Hanya akan bernilai salah, kalau kedua kondisi salah
// T || T => T
// T || F => T
// F || T => T
// F || F => F
console.log(10 === 10 || 5 > 1);
console.log(10 === 10 || 5 > 10);
console.log(10 === 100 || 5 > 1);
console.log(10 === 100 || 5 > 10);

/* ----------------------------- NOT (Negasi) ! ----------------------------- */
// Dia akan memberikan value opposite dari sebuah value
console.log(!true);
console.log(!Boolean("hello"));
console.log(!"world");
console.log(!null);
