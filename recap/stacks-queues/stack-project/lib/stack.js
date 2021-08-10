// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const itemToMoveDown = this.top;
      this.top = newNode;
      this.top.next = itemToMoveDown;
    }

    this.length++;
    return this.length;
  }
  pop() {
    const itemToReturn = this.top;

    if (this.length === 0) {
      return null;
    } else if (this.length === 1) {
      this.bottom = null;
      this.top = null;
    } else {
      this.top = this.top.next;
    }
    this.length--;
    return itemToReturn.value;
  }

  size() {
    return this.length;
  }
}

exports.Node = Node;
exports.Stack = Stack;
