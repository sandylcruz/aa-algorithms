/*
Assume an array of non-negative integers. A second array is 
formed by shuffling the elements of the first array and 
deleting a random element. Given these two arrays, find 
which element is missing in the second array. Do this 
in linear time with constant memory use.
*/

const findMissingNumber = (array1: Array<number>, array2: Array<number>) => {
  const array1XOred = array1.reduce((a, b) => a ^ b, 0);
  const array2XOred = array2.reduce((a, b) => a ^ b, 0);

  return array1XOred ^ array2XOred;
};

const findMissingNumber2 = (array1: Array<number>, array2: Array<number>) => {
  const array1Sum = array1.reduce((a, b) => a + b, 0);
  const array2Sum = array2.reduce((a, b) => a + b, 0);
  return array1Sum - array2Sum;
};

console.log(findMissingNumber([8, 3, 5, 1], [1, 5, 3])); // = 8
console.log(findMissingNumber([1, 1, 1, 1], [1, 1, 1])); // = 1
console.log(findMissingNumber([3, 4, 5, 8, 7, 9], [7, 4, 3, 5, 9])); // = 8
