/*
Write a function, isUnivalueList, that takes in the head of a linked list as an 
argument. The function should return a boolean indicating whether or not the 
linked list contains exactly one unique value.

You may assume that the input list is non-empty.
*/

const isUnivalueList = (head) => {
  const initialValue = head.val;

  let current = head;

  while (current !== null) {
    if (current.val !== initialValue) {
      return false;
    } else {
      current = current.next;
    }
  }

  return true;
};
