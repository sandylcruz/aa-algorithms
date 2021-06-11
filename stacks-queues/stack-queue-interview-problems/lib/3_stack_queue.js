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
    this.inStack = new Stack();
    this.outStack = new Stack();
    this.length = 0;
    this.front = null;
    this.back = null;
  }

  // get front() {
  //   if (this.inStack.length === 0) {
  //     return this.outStack.top;
  //   } else {
  //     return this.inStack.bottom;
  //   }
  // }

  // get back() {
  //   if (this.outStack.length === 0) {
  //     return this.inStack.top;
  //   } else {
  //     return this.outStack.bottom;
  //   }
  // }

  enqueue(value) {
    const newQueueNode = new Node(value);

    if (this.length === 0) {
      this.front = newQueueNode;
      this.back = newQueueNode;
    } else {
      this.back.next = newQueueNode;
      this.back = newQueueNode;
    }
    this.length++;
    this.inStack.push(new Node(newQueueNode.value));

    return this.size();
  }

  dequeue() {
    if (!this.front) {
      return null;
    } else if (this.size() === 1) {
      this.front = null;
      this.back = null;
    } else {
      this.front = this.front.next;
    }

    if (this.outStack.size() === 0) {
      while (this.inStack.size() > 0) {
        this.outStack.push(this.inStack.pop());
      }
    }
    let x = this.outStack.pop();
    return x;
  }

  size() {
    return this.inStack.size() + this.outStack.size();
  }
}

exports.Node = Node;
exports.Stack = Stack;
exports.StackQueue = StackQueue;
