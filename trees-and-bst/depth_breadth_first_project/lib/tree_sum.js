function treeSum(root) {
  let sum = 0;
  const stack = [root];

  if (!root) return 0;

  while (stack.length) {
    let node = stack.pop();

    sum += node.val;

    if (node.right) {
      stack.push(node.right);
    }

    if (node.left) {
      stack.push(node.left);
    }
  }
  return sum;
}

module.exports = {
  treeSum,
};
