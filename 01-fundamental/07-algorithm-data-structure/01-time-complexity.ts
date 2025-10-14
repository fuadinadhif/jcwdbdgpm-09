/* ----------------------------- Constant - O(1) ---------------------------- */
function getFirstElement(array: any[]): any {
  const firstElement = array[0]; // 1
  return firstElement; // 1
}
// 1 + 1
// O(1)

/* ------------------------------ Linear - O(n) ----------------------------- */
function sumArray(array: number[]): number {
  let total = 0; // 1

  for (const num of array) {
    total = total + num; // n
  }

  return total; // 1
}
// 1 + n + 1
// n
// O(n)

function countOccurences(array: string[], values: string) {
  let count = 0; // 1

  for (const element of array) {
    if (element === values) count++; // n
  }

  return count; // 1
}
// 1 + n + 1
// n
// O(n)

function hasDuplicate(array: number[]): boolean {
  for (let i = 0; i < array.length; i++) {
    // n
    for (let j = i + 1; j < array.length; j++) {
      // n
      if (array[i] === array[j]) return true;
    }
  }

  return false; // 1
}
// n * n + 1
// n^2 + 1
// n^2
// O(n^2)

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
// n = 10
// 10 + n = 20

// n = 1000
// 10 + n = 1010

// n = 1_000_000
// 10 + n = 1_000_010

// n = 1_000_000_000
// 10 + n = 1_000_000_010

[1, 2, 3, 4, 5, 4, 6, 7, 8, 9];
