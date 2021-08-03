const runningMedian = (array) => {
  const runningArray = [];

  runningArray.push(array[0]);

  for (let i = 0; i < array.length; i++) {
    const currentNum = array[i];
  }
  console.log(runningArray);
  return runningArray;
};
console.log(runningMedian([7, 3, 5, 2])); //
// [2, 3, 5, 7]

// console.log(runningMedian([2, 1, 5, 7, 2, 0, 5]));
// => [2, 1.5, 2, 3.5, 2, 2, 2]

// [2, 1, 5, 7, 2, 0, 5];

// [2, 1.5, 2, 3.5, 2, 2, 2];
