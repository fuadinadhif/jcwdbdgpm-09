const date = new Date();
console.log(date);

/* ----------------------------------- get ---------------------------------- */
const year = date.getFullYear();
console.log(year);

console.log(date.getDate());
console.log(date.getDay());
console.log(date.getTime());

/* ----------------------------------- set ---------------------------------- */
console.log(date);

date.setFullYear(2030);
date.setMonth(11);

console.log(date);

/* ---------------------------------- NOTES --------------------------------- */
console.log(new Date(1759310006944));
