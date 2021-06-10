// ============================================================================
// Interview Problem: StackQueue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement your preferred Stack implementation, including the methods:
//
//   - Push
//   - Pop
//   - Size
//
// Then, implement a Queue by instantiating two Stack instances for storage.
//
// The StackQueue implementation should include the following methods:
//
//   - Enqueue
//   - Dequeue
//   - Size
//
// -----------
// Let's code!
// -----------

class Node {
  // TODO: Implement the Node class!
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
    const newNode = new Node(value.value);

    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const formerTopItem = this.top;
      this.top = newNode;
      this.top.next = formerTopItem;
    }
    this.length++;
    return this.length;
  }

  pop() {
    const itemToRemove = this.top;

    if (this.length === 0) {
      return null;
    } else if (this.length === 1) {
      this.bottom = null;
      this.top = null;
    } else {
      this.top = this.top.next;
    }

    this.length--;
    return itemToRemove;
  }

  size() {
    return this.length;
  }
  // TODO: Implement the Stack class!
}

class StackQueue {
  // TODO: Implement the StackQueue class!
  constructor() {
    this.inStack = null;
    this.outStack = null;
    this.front = null;
    this.back = null;
    this.length = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.front = newNode;
      this.back = newNode;
    } else if (this.length > 1) {
      this.front.next = this.front;
      this.front = newNOde;
    }

    this.length++;
    return this.size;
  }
  dequeue() {}
  size() {
    return this.size;
  }
}

exports.Node = Node;
exports.Stack = Stack;
exports.StackQueue = StackQueue;
