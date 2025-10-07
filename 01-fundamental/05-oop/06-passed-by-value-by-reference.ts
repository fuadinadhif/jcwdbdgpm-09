/* -------------------------------------------------------------------------- */
/*                               PASSED BY VALUE                              */
/* -------------------------------------------------------------------------- */
let address1 = "Jalan Iskandar Muda";
let address2 = address1;

console.log(address1);
console.log(address2);

address2 = "Jalan Setiabudhi";

console.log(address1);
console.log(address2);

/* -------------------------------------------------------------------------- */
/*                             PASSED BY REFERENCE                            */
/* -------------------------------------------------------------------------- */
let people1 = { name: "John Cena", age: 45 };
let people2 = people1;

console.log(people1);
console.log(people2);

people2.name = "Ray Mysterio";

console.log(people1);
console.log(people2);
