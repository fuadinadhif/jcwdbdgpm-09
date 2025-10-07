// Mutable - Bisa diubah
// Immutable - Tidak bisa diubah
// Reassigned - Mengisi ulang

/* -------- Mutable VS Reassigned | Mengubah value VS Mengganti Value ------- */
const names = ["Bohemian Rhapsody", "Rhoma Irama", "Tenxi"];

// Mutate | Mengubah
console.log(names);
names[2] = "Jemsi";
console.log(names);

// Reassigned | Mengganti
// names = ["Bohemian Rhapsody", "Rhoma Irama", "Naykilla"];

/* -------------------------- Mutable VS Immutable -------------------------- */
const fullName: string = "Radja Nainggolan"; // Tidak bisa diubah. Immutable (primitive value)
const scores: number[] = [100, 75, 85, 90]; // Mutable
const player: { name: string; age: number } = { name: "Mo Salah", age: 30 }; // Mutable

scores[0] = 80;
player.age = 31;
player.name = "Anthony The GOAT";

console.log(scores);
console.log(player);
