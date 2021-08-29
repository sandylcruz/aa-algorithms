// O(n^2) time, O(1) space
const quadraticTwoSum = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }

  return false;
};

// O(n) time, O(n) space
const twoSum = (array, target) => {
  const seenNumbers = new Set();

  for (let i = 0; i < array.length; i++) {
    const currentNumber = array[i];
    const remainder = target - currentNumber;
    if (seenNumbers.has(remainder)) {
      return true;
    } else {
      seenNumbers.add(currentNumber);
    }
  }
  return false;
};
console.log(twoSum([1, 2, 3, 4, 5], 7)); // true
console.log(twoSum([100, 21, 30, 4, 500], 104)); // true
console.log(twoSum([100, 200, 300, 400, 500], 104)); // false
