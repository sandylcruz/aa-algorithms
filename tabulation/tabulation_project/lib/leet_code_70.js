// Work through this problem on https://leetcode.com/problems/climbing-stairs/ and use the specs given there.
// Feel free to use this file for scratch work.

/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:
  Input: n = 2
  Output: 2
  Explanation: There are two ways to climb to the top.
  1. 1 step + 1 step
  2. 2 steps

Example 2:
  Input: n = 3
  Output: 3
  Explanation: There are three ways to climb to the top.
  1. 1 step + 1 step + 1 step
  2. 1 step + 2 steps
  3. 2 steps + 1 step
*/

const climbStairsMemo = (num, memo = {}) => {
  if (num === 0 || num === 1) return 1;
  if (num in memo) return memo[num];

  memo[num] = climbStairs(num - 1, memo) + climbStairs(num - 2, memo);
  return memo[num];
};

const climbStairs = (num) => {
  const table = new Array(num + 1).fill(0);
  table[0] = 1;
  table[1] = 1;

  for (let i = 2; i < table.length; i++) {
    table[i] = table[i] = table[i - 1] + table[i - 2];
  }

  return table[table.length - 1];
};

console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
console.log(climbStairs(40)); // 3
