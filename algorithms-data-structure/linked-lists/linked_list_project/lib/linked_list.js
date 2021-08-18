// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

// TODO: Implement a Singly Linked List class here
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // TODO: Implement the addToTail method here
  addToTail(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length++;
    return this;
  }

  // TODO: Implement the removeTail method here
  removeTail() {
    if (!this.head) return undefined;

    let current = this.head;
    let nextTail = this.head.next;

    // while (nextTail !== null) {}

    // while (this.head.next.next !== null) {
    //   this.tail = this.head;
    //   this.tail.next = null;
    // }

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    this.length--;
  }

  // TODO: Implement the addToHead method here
  addToHead(val) {
    const newHead = new Node(val);

    if (this.length === 0) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      const formerHead = this.head;
      this.head = newHead;
      newHead.next = formerHead;
    }

    this.length++;
    return this;
  }

  // TODO: Implement the removeHead method here
  removeHead() {
    if (this.length === 0) return undefined;

    const currentHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      const nextHead = this.head.next;
      this.head = nextHead;
    }

    this.length--;
    return currentHead;
  }

  // TODO: Implement the contains method here
  contains(target) {
    let node = this.head;

    while (node) {
      if (node.value === target) return true;
      node = node.next;
    }

    return false;
  }

  // TODO: Implement the get method here
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;

    while (counter !== index) {
      current = current.next;
      index++;
    }

    return current;
  }

  // TODO: Implement the set method here
  set(index, val) {
    if (index < 0 || index >= this.length) return false;

    const foundNode = this.get(index);

    if (foundNode) {
      foundNode.value = val;
    }
  }

  // TODO: Implement the insert method here
  insert(index, val) {
    if (index < 0 || index >= this.length) return false;
    this.length++;
  }

  // TODO: Implement the remove method here
  remove(index) {
    this.length--;
  }

  // TODO: Implement the size method here
  size() {
    return this.length;
  }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
