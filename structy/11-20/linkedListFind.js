/*
Write a function, linkedListFind, that takes in the head of a linked list 
and a target value. The function should return a boolean indicating whether 
or not the linked list contains the target.
*/

const linkedListFind = (head, target) => {
  let current = head;

  while (current !== null) {
    if (current.val === target) {
      return true;
    }

    current = current.next;
  }

  return false;
};
