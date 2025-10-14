/* ------------------------------ Binary Search ----------------------------- */
function binarySearch(array: number[], target: number): number {
  let lowest = 0;
  let highest = array.length - 1;
  let middle = Math.round((lowest + highest) / 2);

  while (lowest <= highest) {
    if (array[middle] === target) {
      return middle;
    } else if (array[middle] < target) {
      lowest = middle - 1;
    } else {
      highest = middle + 1;
    }

    middle = Math.round((lowest + highest) / 2);
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 10, 20, 30, 35, 40, 100, 200, 300], 100));
