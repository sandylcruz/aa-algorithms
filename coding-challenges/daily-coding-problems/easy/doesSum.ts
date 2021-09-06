/*
Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17
*/

const doesSum = (array: Array<number>, target: number) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false;
};

console.log(doesSum([10, 15, 3, 7], 17));
console.log(doesSum([10, 15, 3, 7], 25));
console.log(doesSum([10, 15, 3, 7], 1));
