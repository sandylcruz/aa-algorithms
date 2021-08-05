// Write a function, stepper(nums), that takes in an array of non negative numbers.
// Each element of the array represents the maximum number of steps you can take from that position in the array.
// The function should return a boolean indicating if it is possible to travel from the
// first position of the array to the last position.
//
// For Example:
//
// Given [3, 1, 0, 5, 10]
//      - We begin at first position, 3.
//      - Since the element is 3 we can take up to 3 steps from this position.
//      - This means we can step to the 1, 0, or 5
//      - Say we step to 1
//      - Since the element is 1, now the only option is to take 1 step to land on 0
//      - etc...
//
// Try to solve this in two ways, using tabulation and memoization.
//
// Examples:
//
// stepper([3, 1, 0, 5, 10]);           // => true, because we can step through elements 3 -> 5 -> 10
// stepper([3, 4, 1, 0, 10]);           // => true, because we can step through elements 3 -> 4 -> 10
// stepper([2, 3, 1, 1, 0, 4, 7, 8])    // => false, there is no way to step to the end

// function stepperTab(numbers) {
//   const table = new Array(numbers.length + 1).fill(false);
//   table[0] = true;

//   for (let i = 0; i < table.length; i++) {
//     let currentNum = table[i];
//     if (currentNum === true) {
//       let maxRange = numbers[i];

//       for (let j = 1; j <= maxRange; j++) {
//         if (currentNum + j <= table.length) {
//           table[j] = true;
//         }
//       }
//     }
//   }
//   return table[table.length - 1];
// }

const stepper = (numbers, memo = {}) => {
  let key = String(numbers);
  if (key in memo) return memo[key];

  if (numbers.length === 0) return true;
  let maxRange = numbers[0];

  for (let step = 1; step <= maxRange; step++) {
    const slicedArray = numbers.slice(step);
    if (stepper(slicedArray, memo)) {
      memo[key] = true;
      return true;
    }
  }
  memo[key] = false;
  return false;
};

// console.log(stepper([3, 1, 0, 5, 10])); // true
// console.log(stepper([2, 3, 1, 1, 0, 4, 7, 8])); // false

// Write a function, maxNonAdjacentSum(nums), that takes in an array of nonnegative numbers.
// The function should return the maximum sum of elements in the array we can get if we cannot take
// adjacent elements into the sum.
//
// Try to solve this in two ways, using tabulation and memoization.
//
// Examples:
//
// maxNonAdjacentSum([2, 7, 9, 3, 4])   // => 15, because 2 + 9 + 4
// maxNonAdjacentSum([4,2,1,6])         // => 10, because 4 + 6

function maxNonAdjacentSumTabulation(nums) {
  if (nums.length === 0) return 0;
  let table = new Array(nums.length).fill(0);
  table[0] = nums[0];

  for (let i = 1; i < table.length; i++) {
    /*
      storing max non-adjacent sum in the table
      take current element. cannot add immediate before or after number
      if at index i, skip the left neighbor
      on first iteration, we start at index 1 = 1, so now index is 1- 2 which is -1.
      if this value at table[i - 2] is off the left edge of table, use 0 instead.
      if not undefined, use the same value
    */

    let skipLeftNeighbor = table[i - 2] === undefined ? 0 : table[i - 2];

    // include current num and everything immediately to the left
    let includeThisNum = skipLeftNeighbor + nums[i];

    // if you don't include current num, use this
    let notIncludeThisNum = table[i - 1];

    /*
      choose the bigger number between includeThisNum and notIncludeThisNum
      choose either taking the number at hand, therefore skip left neighbor
      or not take number at hand, and take immediate left neighbor and all those max non-adj sum
    */

    table[i] = Math.max(includeThisNum, notIncludeThisNum);
  }
  return table[table.length - 1];
}

const maxNonAdjacentSum = (nums, memo = {}) => {
  if (nums.length in memo) return memo[nums.length];
  if (nums.length === 0) return 0;

  /*
  is it better to take current element (forgoing next neighbor,), or not take this 
  element and use the next neighbor
  */

  let firstElement = nums[0];

  memo[nums.length] = Math.max(
    // slice array to include current element and skip the right adjacent neighbor
    firstElement + maxNonAdjacentSum(nums.slice(2), memo),
    // or skip current element and move on immediate right neighbor
    maxNonAdjacentSum(nums.slice(1), memo)
  );

  return memo[nums.length];
};

// Write a function, minChange(coins, amount), that accepts an array of coin values
// and a target amount as arguments. The method should the minimum number of coins needed
// to make the target amount. A coin value can be used multiple times.
//
// You've seen this problem before with memoization, but now solve it using the Tabulation strategy!
//
// Examples:1 `````````
//
// minChange([1, 2, 5], 11)         // => 3, because 5 + 5 + 1 = 11
// minChange([1, 4, 5], 8))         // => 2, because 4 + 4 = 8
// minChange([1, 5, 10, 25], 15)    // => 2, because 10 + 5 = 15
// minChange([1, 5, 10, 25], 100)   // => 4, because 25 + 25 + 25 + 25 = 100

function minChange(coins, amount) {
  // make default positive infinity so any number we find will trump infinity
  let table = new Array(amount + 1).fill(Infinity);
  table[0] = 0;

  /*
  iterate through coins first. consider which possible coin is the best one.
  this is exhaustive so we have to try every possibility
  */

  coins.forEach((val) => {
    // every index corresponds to an amount of set
    for (let amount = 0; amount < table.length; amount++) {
      // iterate up to maximal quantity of this coin value that's less than or equal to sub-amount targeting
      for (let quantity = 0; quantity * val <= amount; quantity++) {
        // table index corresponds to amount. element at index corresponds to minimum num coins to make that amount
        let remainder = amount - quantity * val;
        // give num coins to attain amount.
        let attempt = table[remainder] + quantity;
        if (attempt < table[amount]) {
          // if better than current coin amounts, overwrite the response
          table[amount] = attempt;
        }
      }
    }
  });

  return table[table.length - 1];
}
// console.log(minChange([1, 2, 5], 11)); // 3
// console.log(minChange([1, 4, 5], 8));

module.exports = {
  stepper,
  maxNonAdjacentSum,
  minChange,
};
