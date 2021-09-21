/*
Write a function, fiveSort, that takes in an array of numbers as an argument. 
The function should rearrange elements of the array such that all 5s appear 
at the end. Your function should perform this operation in-place by mutating 
the original array. The function should return the array.
*/

const fiveSort = (numbers) => {
  let i = 0;
  let j = numbers.length - 1;

  while (i < j) {
    if (numbers[j] === 5) {
      j--;
    } else if (numbers[i] === 5) {
      let temp = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = temp;
    } else {
      i++;
    }
  }

  return numbers;
};
