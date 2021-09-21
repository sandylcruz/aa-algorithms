/*
Write a function, pairProduct, that takes in an array and a target 
product as arguments. The function should return an array containing a 
pair of indices whose elements multiply to the given target. The 
indices returned must be unique.
*/

const pairProduct = (numbers, target) => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 1; j < numbers.length; j++) {
      if (numbers[i] * numbers[j] === target) {
        return [i, j];
      }
    }
  }
};

console.log(pairProduct([3, 2, 5, 4, 1], 8));
