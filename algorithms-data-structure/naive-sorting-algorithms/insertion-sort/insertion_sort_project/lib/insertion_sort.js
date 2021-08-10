// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let currentNum = arr[i];
//     let j = i - 1;

//     while (j >= 0 && arr[j] > currentNum) {
//       arr[j + 1] = arr[j];
//       j--;
//     }

//     arr[j + 1] = currentNum;
//   }

//   return arr;
// }

// const insertionSort = (arr) => {
//   for (let i = 1; i < arr.length; i++) {
//     let currentNum = arr[i];
//     let j = i - 1;

//     while (j >= 0 && arr[j] > currentNum) {
//       arr[j + 1] = arr[j];
//       j--;
//     }

//     arr[j + 1] = currentNum;
//   }

//   return arr;
// };

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let currentNum = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > currentNum) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = currentNum;
  }
  return arr;
};

console.log(insertionSort([5, 4, 3, 2, 1]));
module.exports = {
  insertionSort,
};
