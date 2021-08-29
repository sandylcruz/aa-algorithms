// O(n^2) time
const twoSum = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }

  return false;
};

console.log(twoSum([1, 2, 3, 4, 5], 7));
console.log(twoSum([100, 21, 30, 4, 500], 104));
console.log(twoSum([100, 200, 300, 400, 500], 104));
