function swap(arr, index1, index2) {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }

    swap(arr, i, minIndex);
  }

  return arr;
}

console.log(selectionSort([5, 4, 3, 2, 1]));

module.exports = {
  selectionSort,
  swap,
};
