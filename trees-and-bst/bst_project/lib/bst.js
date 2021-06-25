class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val, root = this.root) {
    const newNode = new TreeNode(val);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    if (val < root.val) {
      if (!root.left) {
        root.left = newNode;
      } else {
        this.insert(val, root.left);
      }
    } else {
      if (!root.right) {
        root.right = newNode;
      } else {
        this.insert(val, root.right);
      }
    }
  }
}

module.exports = {
  TreeNode,
  BST,
};
