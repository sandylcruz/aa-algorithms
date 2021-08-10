// Work through this problem on https://leetcode.com/problems/minimum-path-sum/ and use the specs given there.
// Feel free to use this file for scratch work.

/*
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which 
minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

Input: grid = 
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
Output: 7
Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.
*/

function minPathSum(grid) {
  // table must also be grid of the same dimension
  let m = grid.length;
  let n = grid[0].length;

  // start with outer most grid
  let table = new Array(m).fill().map(() => new Array(n).fill(Infinity));
  // bottom right corner needs to correspond from the start
  table[0][0] = grid[0][0];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // set up right and down neighbor
      // choose b/w either go through path going through current pos or not

      if (j < n - 1) {
        /*  
          Right neighbor:
          table[i][j] = best way to get to current position
          grid[i][j + 1] = value at right neighbor
          Check if you add these two together compare with what's already stored as best
          Consider if should reassign table[i][j + 1] to get to right neighbor
          Choose minimum of what's already stored or the path exploring now w/ current pos
      */
        table[i][j + 1] = Math.min(
          table[i][j] + grid[i][j + 1],
          table[i][j + 1]
        );
      }

      if (i < m - 1) {
        // downNeighbor
        table[i + 1][j] = Math.min(
          table[i][j] + grid[i + 1][j],
          table[i + 1][j]
        );
      }
    }
  }

  return table[m - 1][n - 1];
}
console.log(
  minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ])
);
