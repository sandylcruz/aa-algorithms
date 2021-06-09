/*
You have an array of integers and you want to find the 
largest contiguous (together in sequence) sub-sum. Find 
the sums of all contiguous sub-arrays and return the max.
*/

/* Phase 1
Write a function that iterates through the array and 
finds all sub-arrays using nested loops. First make an 
array to hold all sub-arrays. Then find the sums of each 
sub-array and return the max.

Discuss the time complexity of this solution.
*/
const array = [5, 3, -7];

const largestSubSum = (array) => {
  let subArrays = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j <= array.length; j++) {
      subArrays.push(array.slice(i, j));
    }
  }

  sums = [];

  subArrays.map((subArray) => {
    sum = subArray.reduce((a, b) => a + b, 0);
    sums.push(sum);
  });

  return Math.max.apply(null, sums);
};

console.log("**", largestSubSum(array));

/* Phase 2
Let's make a better version. Write a new function using 
O(n) time with O(1) memory. Keep a running tally of the 
largest sum.
*/

const largestSubSum2 = (array) => {
  largestSum = 0;
  currentSum = 0;
  const largestSubSum = 0;

  return largestSubSum;
};

// console.log(largestSubSum2(array));
