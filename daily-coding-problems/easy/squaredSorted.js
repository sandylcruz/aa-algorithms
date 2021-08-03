/*
Given a sorted list of integers, square the elements and give the output in sorted order.

*/

const squareSorted = (array) => {
  const arrayToReturn = [];
  for (let i = 0; i < array.length; i++) {
    const currentSquare = Math.pow(array[i], 2);
    arrayToReturn.push(currentSquare);
  }

  let sorted = true;

  while (sorted) {
    sorted = false;
    for (let i = 0; i < arrayToReturn.length; i++) {
      if (arrayToReturn[i] > arrayToReturn[i + 1]) {
        const temp = arrayToReturn[i];
        arrayToReturn[i] = arrayToReturn[i + 1];
        arrayToReturn[i + 1] = temp;
        sorted = true;
      }
    }
  }

  return arrayToReturn;
};

console.log(squareSorted([6, 5, 4, 3, 2, 1]));
console.log(squareSorted([-9, -2, 0, 2, 3])); // => [0, 4, 4, 9, 81]
