/*
Write a function, insertNode, that takes in the head of a linked list, a value, 
and an index. The function should insert a new node with the value into the list 
at the specified index. Consider the head of the linked list as index 0. The 
function should return the head of the resulting linked list.

Do this in-place.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const insertNode = (head, value, index) => {
  const nodeToInsert = new Node(value);
  let indexCount = 0;
  let current = head;

  if (index === 0) {
    nodeToInsert.next = head;
    return nodeToInsert;
  }

  while (current !== null) {
    if (indexCount === index - 1) {
      const next = current.next;
      current.next = nodeToInsert;
      current.next.next = next;
    }

    indexCount += 1;
    current = current.next;
  }

  return head;
};
