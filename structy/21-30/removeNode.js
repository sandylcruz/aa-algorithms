/*
Write a function, removeNode, that takes in the head of a linked list and a 
target value as arguments. The function should delete the node containing the 
target value from the linked list and return the head of the resulting linked 
list. If the target appears multiple times in the linked list, only remove the 
first instance of the target in the list.

Do this in-place.
*/

const removeNode = (head, targetVal) => {
  if (head.val === targetVal) return head.next;

  let current = head;
  let previous = null;

  while (current !== null) {
    if (current.val === targetVal) {
      previous.next = current.next;
      break;
    }

    previous = current;
    current = current.next;
  }

  return head;
};
