// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below!
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
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor(front, back) {
    this.front = front;
    this.back = back;
    this.length = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (!this.front) {
      this.front = newNode;
      this.back = newNode;
    } else {
      this.back.next = newNode;
      this.back = newNode;
    }

    this.length++;
    return this.length;
  }

  dequeue() {
    const removedItem = this.front;

    if (!this.front) {
      return null;
    } else if (this.length === 1) {
      this.front = null;
      this.back = null;
    } else if (this.length > 1) {
      this.front = this.front.next;
    }

    this.length--;
    return removedItem.value;
  }

  size() {
    return this.length;
  }
}

exports.Node = Node;
exports.Queue = Queue;
