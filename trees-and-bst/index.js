class BinarySearchTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(value) {
    if (this.value >= value) {
      if (!this.left) {
        const newNode = new BinarySearchTreeNode(value);
        this.left = newNode;
      } else {
        this.left.add(value);
      }
    } else {
      if (!this.right) {
        const newNode = new BinarySearchTreeNode(value);
        this.right = newNode;
      } else {
        this.right.add(value);
      }
    }
  }

  depthFirstForEachInOrderTraversal(callback) {
    //in order traversal

    if (this.left) {
      // looking at right
      this.left.depthFirstForEach(callback);
    }

    callback(this.value); // looking at given node

    if (this.right) {
      this.right.depthFirstForEach(callback);
    }
  }

  depthFirstForEachPostOrderTraversal(callback) {
    //post order traversal

    if (this.left) {
      // looking at right
      this.left.depthFirstForEach(callback);
    }

    if (this.right) {
      this.right.depthFirstForEach(callback);
    }

    callback(this.value); // looking at given node
  }

  depthFirstForEachPreOrderTraversal(callback) {
    //pre order traversal

    callback(this.value); // looking at given node

    if (this.left) {
      // looking at right
      this.left.depthFirstForEach(callback);
    }

    if (this.right) {
      this.right.depthFirstForEach(callback);
    }
  }
}

const tree = new BinarySearchTreeNode(5);
tree.add(3);
tree.add(8);
tree.add(2);
tree.add(4);

for (let i = 0; i < 20; i++) {
  const numberToPush = Math.floor(Math.random() * 100);
  tree.add(numberToPush);
}

console.log(tree.value === 5);
console.log(tree.left.value === 3);
console.log(tree.left.right.value === 4);

tree.depthFirstForEach((value) => {
  console.log(value);
});
