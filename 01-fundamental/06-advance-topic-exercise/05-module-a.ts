export function sayHello() {
  return `Hellooo!`;
}

export function sayHi() {
  return "Hiiii!";
}

export function saySalam() {
  return "Assalamualaikum!";
}

export const fullName = "Budi Gunawan";
export const age = 80;

export default function sayAbrakadabra() {
  return "Say abrakadabra";
}

// export default function saySimSalabim() {
//   return "Simsalabim";
// }

// const address = "Jalan Pandega Martha";
// export default address;

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
// 1. Named export => Bisa dilakukan berkali-kali di dalam satu file
// export function [FUNCTION_NAME] () {}
// export const [VARIABLE_NAME] = ...

// 2. Default export => Hanya bisa dilakukan sekali di dalam satu file
// export default function [FUNCTION_NAME] () {}
// export default [VARIABLE_NAME]
