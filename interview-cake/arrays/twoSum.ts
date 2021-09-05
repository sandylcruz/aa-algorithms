// O(n^2) time, O(1) space
const quadraticTwoSum = (array: Array<number>, target: number) => {
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
const linearTwoSum = (array: Array<number>, target: number) => {
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

// O(n log n) time, O(1) space
const twoSum = (array: Array<number>, target: number) => {
  const sorted = array.sort();

  let low = 0;
  let high = sorted.length - 1;

  while (low < high) {
    const potentialSum = sorted[low] + sorted[high];

    if (potentialSum < target) {
      low++;
    } else if (potentialSum > target) {
      high--;
    } else {
      return true;
    }
  }

  return false;
};

console.log(twoSum([5, 4, 3, 2, 1], 7)); // true
console.log(twoSum([100, 21, 30, 4, 500], 104)); // true
console.log(twoSum([100, 200, 300, 400, 500], 104)); // false
