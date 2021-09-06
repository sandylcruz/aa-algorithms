function swap(arr: Array<number>, index1: number, index2: number) {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
  return arr;
}

// function selectionSortNested(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let minIndex = i;

//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[minIndex] > arr[j]) {
//         minIndex = j;
//       }
//     }

//     swap(arr, i, minIndex);
//   }

//   return arr;
// }

const selectionSort = (array: Array<number>) => {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    swap(array, i, minIndex);
  }

  return array;
};

console.log(selectionSort([5, 4, 3, 2, 1]));

module.exports = {
  selectionSort,
  swap,
};
