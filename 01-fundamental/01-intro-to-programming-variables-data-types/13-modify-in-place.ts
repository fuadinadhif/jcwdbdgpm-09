let counter = 10;
counter = 100;
counter = 100 + 10;

let score = 15;
// score = score + 10; // bentuk 1
score += 10; // bentuk 2

// score = score - 5;
score -= 5;

// score = score * 10;
score *= 10;

// score = score + 1; // bentuk 1
// score += 1; // bentuk 2
score++; // bentuk 3 => INCREMENT

// score = score - 1;
// score -= 1;
score--; // DECREMENT

console.log(score);

/* ---------------------------- Postfix & Prefix ---------------------------- */
let value = 100;
console.log(value++); // postfix
console.log(value);

let number = 100;
console.log(++number); // prefix
console.log(number);

let highestScore = 50;
let finalScore = ++highestScore;

console.log(finalScore);
