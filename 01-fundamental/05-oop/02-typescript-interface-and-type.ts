const score: number = 100;
const message: string = "Hello hello Bandung";
const isLogin: boolean = true;
const address: string | undefined = undefined;
const students: string[] = ["Adiguna", "Adigini", "Adigunu"];
const randomArray: (string | number | null | undefined)[] = [
  "Hello",
  1,
  null,
  undefined,
];
const user: { id: number; name: string; age: number; address: undefined } = {
  id: 1,
  name: "John Doe",
  age: 10,
  address: undefined,
};

/* -------------------------------- INTERFACE ------------------------------- */
interface IEmployee {
  id: number;
  name: string;
  salary: number;
  gender: string;
}

const employee: IEmployee = {
  id: 1,
  name: "Angelina Jolie",
  salary: 2_000_000,
  gender: "Female",
};

/* ---------------------------------- TYPE ---------------------------------- */
type TGender = "MALE" | "FEMALE";

type TTeacher = {
  id: number;
  name: string;
  topic: string;
  gender: TGender;
};

const teacher: TTeacher = {
  id: 1,
  name: "Herman",
  topic: "Bahasa",
  gender: "FEMALE",
};
