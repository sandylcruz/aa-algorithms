const merge = (array1: Array<number>, array2: Array<number>) => {
  const merged = [];
  while (array2.length || array1.length) {
    let firstElement = array1.length ? array1[0] : Infinity;
    let secondElement = array2.length ? array2[0] : Infinity;
    let nextElement;

    if (firstElement < secondElement) {
      nextElement = array1.shift();
    } else {
      nextElement = array2.shift();
    }

    merged.push(nextElement);
  }

  return merged;
};

// arr1 = [1, 5, 10, 15];
// arr2 = [0, 2, 3, 7, 10];
// console.log(merge(arr1, arr2));

const mergeSort = (array: Array<number>) => {
  if (array.length <= 1) return array;

  const middleIndex = Math.floor(array.length / 2);
  const leftHalf = array.slice(0, middleIndex);
  const rightHalf = array.slice(middleIndex);

  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);

  // need to merge things not sort things
  const result = merge(sortedLeft, sortedRight);
  return result;
};

console.log(mergeSort([10, 9, 2, 5, 6, 3, 1]));
