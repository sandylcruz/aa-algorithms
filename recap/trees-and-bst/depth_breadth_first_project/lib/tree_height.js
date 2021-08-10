function treeHeight(root) {
  let numberOfEdges = 0;
  if (!root) return -1;

  let stack = [root];

  while (stack.length) {
    let node = stack.pop();
    if (node.left && !node.right) {
      numberOfEdges += 1;
      stack.push(node.left);
    } else if (node.right && !node.left) {
      numberOfEdges += 1;
      stack.push(node.right);
    } else if (node.right && node.left) {
      numberOfEdges += 1;
      stack.push(node.left);
      stack.push(node.right);
    }
  }

  return numberOfEdges;
}

module.exports = {
  treeHeight,
};
