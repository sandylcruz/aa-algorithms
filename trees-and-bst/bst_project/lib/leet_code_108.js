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

function sortedArrayToBST(array) {
  const middleIndex = Math.floor(array.length / 2);
  const middleNumber = array[middleIndex];
  let leftArray = [];
  let rightArray = [];

  return [middleNumber];
}

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
