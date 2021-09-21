/*
Write a function, sumList, that takes in the head of a linked list containing 
numbers as an argument. The function should return the total sum of all values 
in the linked list.
*/

const sumList = (head) => {
  let sum = 0;

  let current = head;

  while (current !== null) {
    sum += current.val;
    current = current.next;
  }

  return sum;
};
