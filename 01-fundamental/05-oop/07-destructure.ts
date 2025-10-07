const employees = [
  "Rizaldi Patria",
  "Anies Baswedan",
  "Cak Imin",
  "Sandiaga Uno",
];

const studentData = {
  name: "Cakra Khan",
  grade: 6,
  ranking: 1,
  gender: "Male",
};

/* -------------------------------------------------------------------------- */
/*                              ARRAY DESTRUCTURE                             */
/* -------------------------------------------------------------------------- */
// const rizalFullName = employees[0];
// const aniesFullName = employees[1];
// const x = employees[2];
// const y = employees[3];
const [rizalFullName, aniesFullName, x, y] = employees;

console.log(rizalFullName);
console.log(aniesFullName);
console.log(x);
console.log(y);

/* -------------------------------------------------------------------------- */
/*                             OBJECT DESTRUCTURE                             */
/* -------------------------------------------------------------------------- */
// const name = studentData.name;
// const grade = studentData.grade;
// const ranking = studentData.ranking;
// const gender = studentData.gender;
const { grade, name, ranking, gender } = studentData;

console.log(name);
console.log(grade);
console.log(ranking);
console.log(gender);
