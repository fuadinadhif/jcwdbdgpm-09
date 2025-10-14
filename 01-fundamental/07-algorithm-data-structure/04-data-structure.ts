const numbers = new Set();

console.log(numbers);

numbers.add("A");
numbers.add("B");
numbers.add("C");
numbers.add("D");
numbers.add("E");
numbers.add("A");
numbers.add("F");

console.log(numbers);

const array = [1, 2, 2, 2, 3, 3, 4, 5, 6, 7, 8, 8, 8, 8, 9, 10, 10];
const uniqueArray = new Set(array);
console.log(uniqueArray);
