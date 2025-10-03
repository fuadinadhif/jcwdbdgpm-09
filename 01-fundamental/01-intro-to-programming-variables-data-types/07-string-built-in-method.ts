const favoriteProfessor = "Wisnu Lupa";

console.log(favoriteProfessor.toLowerCase());
console.log(favoriteProfessor.toUpperCase());

/* --------------------------------- slice() -------------------------------- */
// Untuk memotong sebuah string
// slice(indexStart, indexEnd)
/*
"Purwadhika JCWD BDG"
P: 0
u: 1
r: 2
w: 3
...
*/

const message = "I love banana very much";
console.log(message.slice(7, 18));

/* -------------------------------- replace() ------------------------------- */
const text =
  "Namaku adalah Andi dan aku suka sekali makan apel dan juga suka tidur.";
console.log(text.replace("suka", "benci"));
console.log(text.replaceAll("suka", "benci"));

/* --------------------------------- trim() --------------------------------- */
const fullName = "               Joko Anwar   ";
console.log(fullName);
console.log(fullName.trim());
