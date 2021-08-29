/* Write a function that takes an array of characters and reverses the letters in place. */

const reverseArray = (array) => {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex < rightIndex) {
    const temp = array[leftIndex];
    array[leftIndex] = array[rightIndex];
    array[rightIndex] = temp;

    leftIndex++;
    rightIndex--;
  }

  return array;
};

console.log(reverseArray(['t', 'a', 'c']));
