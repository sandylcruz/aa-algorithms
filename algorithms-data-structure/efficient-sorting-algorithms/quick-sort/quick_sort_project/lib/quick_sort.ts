const partition = (array: Array<number>, pivot: number) => {
  const leftHalf = [];
  const rightHalf = [];

  for (let i = 0; i < array.length; i++) {
    const currentNum = array[i];
    if (currentNum <= pivot) {
      leftHalf.push(currentNum);
    } else {
      rightHalf.push(currentNum);
    }
  }

  return [leftHalf, rightHalf];
};

// console.log(partition([5, 4, 3, 2, 1], 3));

function quickSort(array: Array<number>) {
  if (array.length <= 1) return array;
  const pivot: number | undefined = array.shift();
  const left = array.filter((el) => el < pivot);
  const right = array.filter((el) => el >= pivot);

  const leftSorted = quickSort(left);
  const rightSorted = quickSort(right);

  return [...leftSorted, pivot, ...rightSorted];
}

console.log(quickSort([5, 4, 3, 2, 1]));

module.exports = {
  quickSort,
};
