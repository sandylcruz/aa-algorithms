function swap(array: Array<number>, idx1: number, idx2: number) {
  let temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
  return array;
}
const arr = [3, 2, 1];
console.log(swap(arr, 0, 1));

function bubbleSort(array: Array<number>) {
  let sorted = true;

  while (sorted) {
    sorted = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        sorted = true;
      }
    }
  }

  return array;
}

console.log(bubbleSort([5, 4, 3, 2, 1]));

module.exports = {
  bubbleSort,
  swap,
};
