/*
In order to win the prize for most cookies sold, my friend Alice and I are going to merge our 
Girl Scout Cookies orders and enter as one unit.

Each order is represented by an "order id" (an integer).

We have our lists of orders sorted numerically already, in arrays. Write a function to merge 
our arrays of orders into one sorted array.
*/

const mergeArrays = (array1: Array<number>, array2: Array<number>) => {
  const merged = [];

  let i = 0;
  let j = 0;
  while (array1.length + array2.length > merged.length) {
    const leftEl = array1[i];
    const rightEl = array2[j];
    if (leftEl <= rightEl) {
      merged.push(leftEl);
      i++;
    } else {
      merged.push(rightEl);
      j++;
    }
  }

  return merged;
};

const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];

const myArray2 = [3, 4];

// console.log(mergeArrays(myArray, alicesArray)); // [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]
// console.log(mergeArrays(myArray2, alicesArray));
