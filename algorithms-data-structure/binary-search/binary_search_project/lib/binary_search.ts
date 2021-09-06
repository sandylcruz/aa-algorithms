function binarySearch(array: Array<number>, target: number): boolean {
  if (array.length === 0) return false;

  const middleIndex = Math.floor(array.length / 2);
  const middleElement = array[middleIndex];
  const left = array.slice(0, middleIndex);
  const right = array.slice(middleIndex + 1);

  if (target < middleElement) {
    return binarySearch(left, target);
  } else if (target > middleElement) {
    return binarySearch(right, target);
  } else {
    return true;
  }
}
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10));
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 7));
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 8));
// console.log(binarySearch([-1, 2, 3, 4, 5, 6, -7], 7));

function binarySearchIndex(array: Array<number>, target: number) {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (target < array[mid]) {
      high = mid - 1;
    } else if (target > array[mid]) {
      low = mid + 1;
    } else {
      return mid;
    }
  }

  return -1;
}

console.log(binarySearchIndex([5, 10, 12, 15, 20, 30, 70], 12)); // 2
console.log(binarySearchIndex([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10)); // 9
console.log(binarySearchIndex([1, 2, 3, 4, 5, 6, 7], 7)); // 6
console.log(binarySearchIndex([1, 2, 3, 4, 5, 6, 7], 8)); // -1
console.log(binarySearchIndex([-1, 2, 3, 4, 5, 6, -7], 7)); // -1

module.exports = {
  binarySearch,
  binarySearchIndex,
};
