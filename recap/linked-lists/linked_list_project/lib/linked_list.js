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

    const oldTail = this.tail;
    this.tail = newNode;
    // this.tail.prev = oldTail;
    this.length++;
    return this;
  }

  // TODO: Implement the addToHead method here
  addToHead(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // TODO: Implement the removeTail method here
  removeTail() {
    if (!this.head) return undefined;

    if (this.head === this.tail) {
      const currentTail = this.tail;
      this.head = null;
      this.tail = null;
      this.length--;

      return currentTail;
    }

    const tailToRemove = this.tail;
    let secondToLastNode = null;
    let currentNode = this.head;

    while (currentNode !== this.tail) {
      secondToLastNode = currentNode;
      currentNode = currentNode.next;
    }

    this.tail = secondToLastNode;
    this.tail.next = null;
    this.length--;

    return tailToRemove;
  }

  // TODO: Implement the removeHead method here
  removeHead() {
    if (!this.head) return undefined;

    const headToRemove = this.head;
    const newHead = headToRemove.next;
    this.head = newHead;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return headToRemove;
  }

  // TODO: Implement the contains method here
  contains(target) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  // TODO: Implement the get method here
  get(index) {
    if (index > this.length - 1) return null;

    let counter = 0;
    let node = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;
  }

  // TODO: Implement the set method here
  set(index, val) {
    if (index > this.length - 1) return false;

    let counter = 0;
    let node = this.head;

    while (node) {
      if (counter === index) {
        node.value = val;
        return true;
      }
      counter++;
      node = node.next;
    }
  }

  // TODO: Implement the insert method here
  insert(index, val) {
    if (index < 0 || index > this.length - 1) return false;
    if (index === 0) return !!this.addToHead(val);

    const newNodeToInsert = new Node(val);
    let beforeInsertNode = this.get(index - 1);
    let afterInsertNode = this.get(index);
    beforeInsertNode.next = newNodeToInsert;
    newNodeToInsert.next = afterInsertNode;
    this.length++;
    return true;
  }

  // TODO: Implement the remove method here
  remove(index) {
    if (index > this.length - 1) return undefined;

    const nodeToRemove = this.get(index);
    let beforeNodeToRemove = this.get(index - 1);
    let afterNodeToRemove = nodeToRemove.next;
    beforeNodeToRemove.next = afterNodeToRemove;
    this.length--;

    return nodeToRemove;
  }

  // TODO: Implement the size method here
  size() {
    let count = 0;
    let node = this.head;

    while (node) {
      count++;
      node = node.next;
    }

    return count;
  }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
