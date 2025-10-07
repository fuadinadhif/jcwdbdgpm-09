interface IPeople {
  name: string;
  age: number;
  gender?: string;
  profession?: string;
}

let people: IPeople = {
  name: "Ronaldo Dicaprio",
  age: 82,
  gender: "Male",
};

console.log(people);

people.profession = "Footballer"; // Add new property

console.log(people);

delete people.gender; // Delete property

console.log(people);

people.name = "Christiano Ronaldo"; // Update property

console.log(people);
