function mergeMutation(leftArray, rightArray) {
  const merged = [];

  while (leftArray.length || rightArray.length) {
    const element1 = leftArray.length ? leftArray[0] : Infinity;
    const element2 = rightArray.length ? rightArray[0] : Infinity;

    let next;

    if (element1 < element2) {
      next = leftArray.shift();
    } else {
      next = rightArray.shift();
    }

    merged.push(next);
  }

  return merged;
}

const mergeNonMutation = (leftArray, rightArray) => {
  const merged = [];
  let i = 0;
  let j = 0;

  while (i < leftArray.length && j < rightArray.length) {
    if (leftArray[i] < rightArray[j]) {
      merged.push(leftArray[i]);
      i++;
    } else {
      merged.push(rightArray[j]);
      j++;
    }
  }

  while (i < leftArray.length) {
    merged.push(leftArray[i]);
    i++;
  }

  while (j < rightArray.length) {
    merged.push(rightArray[j]);
    j++;
  }

  return merged;
};

const mergeMutation2 = (leftArray, rightArray) => {
  const merged = [];

  while (leftArray.length || rightArray.length) {
    const firstElement = leftArray.length ? leftArray[0] : Infinity;
    const secondElement = rightArray.length ? rightArray[0] : Infinity;

    if (firstElement < secondElement) {
      merged.push(leftArray.shift());
    } else {
      merged.push(rightArray.shift());
    }
  }

  return merged;
};

const merge = (leftArray, rightArray) => {
  const merged = [];
  i = 0;
  j = 0;

  while (i < leftArray.length && j < rightArray.length) {
    if (leftArray[i] < rightArray[j]) {
      merged.push(leftArray[i]);
      i++;
    } else {
      merged.push(rightArray[j]);
      j++;
    }
  }

  while (i < leftArray.length) {
    merged.push(leftArray[i]);
    i++;
    j++;
  }

  while (j < rightArray.length) {
    merged.push(rightArray[j]);
    i++;
    j++;
  }
  return merged;
};

arr1 = [1, 5, 10, 15];
arr2 = [0, 2, 3, 7, 10];
console.log(merge(arr1, arr2));

const mergeSort = (array) => {
  if (array.length <= 1) return array;
  const middleIndex = Math.floor(array.length / 2);
  const leftArray = array.slice(0, middleIndex);
  const rightArray = array.slice(middleIndex);
  const sortedLeft = mergeSort(leftArray);
  const sortedRight = mergeSort(rightArray);
  return merge(sortedLeft, sortedRight);
};

console.log(mergeSort([10, 9, 2, 5, 6, 3, 1]));

module.exports = {
  merge,
  mergeSort,
};
