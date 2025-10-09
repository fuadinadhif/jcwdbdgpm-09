import { sayHello, sayHi, saySalam, fullName, age } from "./05-module-a.ts";
import ucapkanAbrakadabra from "./05-module-a.ts";

console.log(sayHello());
console.log(sayHi());
console.log(saySalam());
console.log(fullName);
console.log(age);
console.log(ucapkanAbrakadabra());

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
// 1. Named export => Harus dibungkus dengan kurung kurawal dan namanya tidak boleh diganti
// 2. Default export => Tidak boleh dibungkus kurung kurawal dan bisa diganti namanya
