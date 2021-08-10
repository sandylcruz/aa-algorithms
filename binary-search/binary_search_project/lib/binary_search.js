function binarySearch(array, target) {
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
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 7));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 8));
console.log(binarySearch([-1, 2, 3, 4, 5, 6, -7], 7));

function binarySearchIndex(array, target) {}

module.exports = {
  binarySearch,
  binarySearchIndex,
};
