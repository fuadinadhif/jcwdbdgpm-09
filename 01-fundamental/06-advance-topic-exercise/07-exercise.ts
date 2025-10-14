// 1.
interface IArray {
  name: string;
  email: string;
}

function mergeTwoArray(array1: IArray[], array2: IArray[]) {
  const combined = [...array1, ...array2];
  const unique = combined.filter((element, index, array) => {
    return (
      index ===
      array.findIndex((item) => {
        return item.email === element.email;
      })
    );
  });

  return unique;
}

const arrayStudent1 = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 2", email: "student2@mail.com" },
];
const arrayStudent2 = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 3", email: "student3@mail.com" },
];

console.log(mergeTwoArray(arrayStudent1, arrayStudent2));

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
const scores = [50, 60, 1000];
const filteredScores = scores.filter((element, index, array) => {
  return element >= 55;
});

// LOOP 1
// newArray = []
// element = 50
// index = 0
// array = [50, 60, 1000]
// return 50 >= 55 = false
// newArray = []

// LOOP 2
// newArray = []
// element = 60
// index = 1
// array = [50, 60, 1000]
// return 60 >= 55 = true
// newArray = [60]

// LOOP 3
// newArray = [60]
// element = 1000
// index = 2
// array = [50, 60, 1000]
// return 1000 >= 55 = true
// newArray = [60, 1000]
