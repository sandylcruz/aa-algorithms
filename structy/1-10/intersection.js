/*
Write a function, intersection, that takes in two arrays, a,b, as arguments. 
The function should return a new array containing elements that are in 
both of the two arrays.
*/

const intersection = (array1, array2) => {
  const appearedInBoth = [];
  const seenNumbers = {};

  for (let i = 0; i < array1.length; i++) {
    const currentNumber = array1[i];

    if (seenNumbers[currentNumber]) {
      seenNumbers[currentNumber] += 1;
    } else {
      seenNumbers[currentNumber] = 1;
    }
  }

  for (let j = 0; j < array2.length; j++) {
    const currentNumber = array2[j];
    if (seenNumbers[currentNumber]) {
      seenNumbers[currentNumber] -= 1;
    }
  }

  Object.keys(seenNumbers).map((number) => {
    if (seenNumbers[number] === 0) {
      appearedInBoth.push(Number(number));
    }
  });

  return appearedInBoth;
};

console.log(intersection([4, 2, 1, 6], [3, 6, 9, 2, 10])); // [2, 6]
