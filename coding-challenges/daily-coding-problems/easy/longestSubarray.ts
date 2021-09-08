/*
Given an array of elements, return the length of the longest subarray where all its elements are distinct.

For example, given the array [5, 1, 3, 5, 2, 3, 4, 1], return 5 as the longest subarray of distinct elements is [5, 2, 3, 4, 1].
*/

const longestSubArray = (array: Array<number>) => {
  let longestSubArray: Array<number> = [];
  let seenCharacters = new Set();
  let currentSubarray = [];

  for (let i = 0; i < array.length; i++) {
    const currentChar = array[i];

    if (seenCharacters.has(currentChar)) {
      currentSubarray = [];
      seenCharacters.clear();
    }
    seenCharacters.add(currentChar);
    currentSubarray.push(currentChar);

    if (currentSubarray.length > longestSubArray.length) {
      longestSubArray = currentSubarray;
    }
  }

  return longestSubArray;
};

console.log(longestSubArray([5, 1, 3, 5, 2, 3, 4, 1])); // [5, 2, 3, 4, 1]
