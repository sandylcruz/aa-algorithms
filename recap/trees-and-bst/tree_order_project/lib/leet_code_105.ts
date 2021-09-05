//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

/*
Given two integer arrays preorder and inorder where preorder 
is the preorder traversal of a binary tree and inorder is 
the inorder traversal of the same tree, construct and 
return the binary tree.
*/
const { TreeNode } = require('./tree_node.ts');

function buildTree(preorder, inorder) {
  if (preorder.length === 0 && inorder.length === 0) return null;

  let rootVal = preorder[0];
  const root = new TreeNode(rootVal);

  let middleIndex = inorder.indexOf(rootVal);
  let leftInorder = inorder.slice(0, middleIndex);
  let rightInorder = inorder.splice(middleIndex + 1);

  let leftPreorder = preorder.filter((value) => leftInorder.includes(value));
  let rightPreorder = preorder.filter((value) => rightInorder.includes(value));

  let leftTree = buildTree(leftPreorder, leftInorder);
  let rightTree = buildTree(rightPreorder, rightInorder);

  root.left = leftTree;
  root.right = rightTree;

  return root;
}

const preorder = [3, 9, 20, 15, 7];
const inorder = [9, 3, 15, 20, 7];

console.log(buildTree(preorder, inorder));
// console.log(buildTree([], []));
