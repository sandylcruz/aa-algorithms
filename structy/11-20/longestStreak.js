/*
Write a function, longestStreak, that takes in the head of a linked list as an 
argument. The function should return the length of the longest consecutive 
streak of the same value within the list.
*/

const longestStreak = (head) => {
  let longestConsecutiveCount = 0;
  let currentCount = 0;
  let current = head;
  let previous = null;

  while (current !== null) {
    if (current.val === previous) {
      currentCount += 1;
    } else {
      currentCount = 1;
    }

    if (currentCount > longestConsecutiveCount) {
      longestConsecutiveCount = currentCount;
    }

    previous = current.val;
    current = current.next;
  }

  return longestConsecutiveCount;
};
