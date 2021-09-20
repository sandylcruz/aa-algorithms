/*
Write a function, maxValue, that takes in array of numbers as an argument. 
The function should return the largest number in the array.
*/

const maxValue = (numbers: Array<number>): number => {
  let maximum = numbers[0];

  numbers.forEach((num) => (num > maximum ? (maximum = num) : null));

  return maximum;
};

module.exports = {
  maxValue,
};
