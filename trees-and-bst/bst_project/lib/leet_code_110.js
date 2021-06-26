// View the full problem and run the test cases at:
//  https://leetcode.com/problems/balanced-binary-tree/

/*
Given a binary tree, determine if it is height-balanced.
*/

function getHeight(root) {
  if (!root) return -1;

  return 1 + Math.max(getHeight(root.left), getHeight(root.right));
}

function isBalanced(root) {
  if (!root) return true;
  const heightDifference =
    Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1;

  return heightDifference && isBalanced(root.left) && isBalanced(root.right);
}
