/* -------------------------------------------------------------------------- */
/*                                MEMBUAT ARRAY                               */
/* -------------------------------------------------------------------------- */
let array = [];
let newArray = new Array();
console.log(array);
console.log(newArray);

let alphabetArray = ["A", "B", "C", "D"];
let newAlphabetArray = new Array("A", "B", "C", "D");
console.log(alphabetArray);
console.log(newAlphabetArray);

let randomArray = [10, "Sepuluh", null, undefined, true];
let anotherArray = [1, 2, 3, ["A", "B"]];
console.log(anotherArray);

/* -------------------------------------------------------------------------- */
/*                           MENGAKSES ELEMENT ARRAY                          */
/* -------------------------------------------------------------------------- */
let arrayOfStudents = ["Andhika", "Akmal", "Ale", "Nata", "Kayla"];
console.log(arrayOfStudents);
console.log(arrayOfStudents[3]);
console.log(arrayOfStudents[0]);

let multiDimensionArray = ["A", "B", "C", [null, undefined, [10, 20, 30]]];
console.log(multiDimensionArray[3][2][1]);
