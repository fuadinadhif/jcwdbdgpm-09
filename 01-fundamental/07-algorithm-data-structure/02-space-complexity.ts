/* ----------------------------- Constant - O(1) ---------------------------- */
function findMax(array: number[]): number {
  let max = array[0]; // 1

  for (const num of array) {
    // 1
    if (num > max) max = num;
  }

  return max;
}
// 1 + 1
// O(1)

console.log(findMax([10, 5, 100]));

/* ------------------------------ Linear - O(n) ----------------------------- */
function copyArray(array: any[]): any[] {
  const newArray: any[] = []; // n

  for (const element of array) {
    // 1
    newArray.push(element);
  }

  return newArray;
}
// n + 1
// n
// O(n)

console.log(copyArray([10, "Hello", true, false]));
