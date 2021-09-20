/*
Write a function, pairSum, that takes in an array and a target sum as 
arguments. The function should return an array containing a pair of 
indices whose elements sum to the given target. The indices returned 
must be unique.

Be sure to return the indices, not the elements themselves.
*/

const pairSum = (numbers, target) => {
  const pair = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i, j];
      }
    }
  }

  return pair;
};

console.log(pairSum([3, 2, 5, 4, 1], 8)); // [0, 2]
