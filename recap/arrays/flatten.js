/*
Write a method that flattens an array that can be nested multiple levels
*/

const flatten = (array) => {
  let flattened = [];

  for (let i = 0; i < array.length; i++) {
    const currentElement = array[i];

    if (Array.isArray(currentElement)) {
      flattened = flattened.concat(flatten(currentElement));
    } else {
      flattened.push(currentElement);
    }
  }
  return flattened;
};
console.log(flatten([1, [2, 3], [[[4, 5]]]]));
