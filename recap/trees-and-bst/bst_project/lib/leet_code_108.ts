// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

/*
Given an integer array nums where the elements are sorted 
in ascending order, convert it to a height-balanced binary 
search tree.

A height-balanced binary tree is a binary tree in which the 
depth of the two subtrees of every node never differs by 
more than one.

*/

const sortedArrayToBST = (nums: Array<number>) => {
  if (!nums.length) return null;
  const middleIndex = Math.floor(nums.length / 2);
  let root = new TreeNode(nums[middleIndex]);
  root.left = sortedArrayToBST(nums.slice(0, middleIndex));
  root.right = sortedArrayToBST(nums.slice(middleIndex + 1));

  return root;
};

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
