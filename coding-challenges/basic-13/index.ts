/* 1. Print 1-255 Write a program that would print all the numbers from 1 to 255. */

const printTo255 = () => {
  for (let i = 1; i <= 255; i++) {
    console.log(i);
  }
};

/* 2. Print odd numbers between 1-255 Write a program that would print all the odd numbers from 1 to 255. */

const printOddTo255 = () => {
  for (let i = 1; i <= 255; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
};

/*
3. Print Sum Write a program that would print the numbers from 0 to 255 but this time, it would also print the sum of the numbers that have been 
printed so far. For example, your output should be something like this:
New number: 0 Sum: 0 New number: 1 Sum: 1 New number: 2 Sum: 3 New number: 3 Sum: 6 ... New number: 255 Sum: __ Do NOT use an array to do this exercise.
*/

const printSum = () => {
  let newNumber = 0;
  let runningTotal = 0;

  for (let i = 1; i <= 255; i++) {
    runningTotal += i;
    console.log(`New Number: ${i}, Sum: ${runningTotal}`);
  }
};

/*
4. Iterating through an array Given an array X, say [1,3,5,7,9,13], write a program that would iterate through each member of the array and print each value 
on the screen. Being able to loop through each member of the array is extremely important.
*/

const iterateOver = (array: Array<number>) => {
  array.forEach((number) => {
    console.log(number);
  });
};

/*
5. Find Max Write a program (sets of instructions) that takes any array and prints the maximum value in the array. Your program should also work 
with a given array that has all negative numbers (e.g. [-3, -5, -7]), or even a mix of positive numbers, negative numbers and zero.
*/

const findMax = (array: Array<number>) => {
  let currentMax = array[0];

  for (let i = 0; i < array.length; i++) {
    const currentNumber = array[i];
    if (currentNumber > currentMax) {
      currentMax = currentNumber;
    }
  }

  return currentMax;
};

/*
6. Get Average Write a program that takes an array, and prints the AVERAGE of the values in the array. For example for an array [2, 10, 3], your program 
should print an average of 5. Again, make sure you come up with a simple base case and write instructions to solve that base case first, 
then test your instructions for other complicated cases. You can use a length function with this assignment.
*/

const getAverage = (array: Array<number>) => {
  let totalSum = array[0];

  for (let i = 1; i < array.length; i++) {
    totalSum += array[i];
  }

  return totalSum / array.length;
};

/*
7. Array with Odd Numbers Write a program that creates an array 'y' that contains all the odd numbers between 1 to 255. When the program is done, 'y' 
should have the value of [1, 3, 5, 7, ... 255].
*/

const oddArray = (array: Array<number>) => {
  const odds = [];

  for (let i = 0; i < 255; i++) {
    const currentNumber = i;

    if (currentNumber % 2 !== 0) {
      odds.push(currentNumber);
    }
  }

  return odds;
};

/*
8. Greater Than Y Write a program that takes an array and returns the number of values in that array whose value is greater than a given value y. 
For example, if array = [1, 3, 5, 7] and y = 3, after your program is run it will print 2 (since there are two values in the array that are 
greater than 3).
*/

const greaterThanY = (array: Array<number>, target: number) => {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    const currentNum = array[i];

    if (currentNum > target) {
      counter += 1;
    }
  }
  return counter;
};

/*
9. Square the values Given any array x, say [1, 5, 10, -2], create an algorithm (sets of instructions) that multiplies each value in the array by itself. 
When the program is done, the array x should have values that have been squared, say [1, 25, 100, 4].
*/

const squaredArray = (array: Array<number>) => {
  const squared = [];

  for (let i = 0; i < array.length; i++) {
    const currentNum = array[i];
    let newNum = currentNum * currentNum;
    squared.push(newNum);
  }

  return squared;
};

/*
10. Eliminate Negative Numbers Given any array x, say [1, 5, 10, -2], create an algorithm that replaces any negative number with the value of 0. 
When the program is done, x should have no negative values, say [1, 5, 10, 0].
*/

const removeNegatives = (array: Array<number>) => {
  const positives = [];

  array.forEach((num) => {
    if (num < 0) {
      positives.push(0);
    } else {
      positives.push(num);
    }
  });

  return positives;
};

/*
11. Max, Min, and Average Given any array x, say [1, 5, 10, -2], create an algorithm that returns a hash with the maximum number in the array, 
the minimum value in the array, and the average of the values in the array.
*/

const maxMinAverage = (array: Array<number>) => {
  let data = {};

  let minNumber = 0;
  let maxNumber = 0;
  let sum = 0;
  let average;

  for (let i = 0; i < array.length; i++) {
    const currentNumber = array[i];

    if (currentNumber < minNumber) {
      minNumber = currentNumber;
    }

    if (currentNumber > maxNumber) {
      maxNumber = currentNumber;
    }

    sum += currentNumber;
  }

  const computedAverage = sum / array.length;
  data['Minimum number'] = minNumber;
  data['Maximum number'] = maxNumber;
  data['Average number'] = computedAverage;

  return data;
};

// /*
// 12. Shifting the Values in the Array Given any array x, say [1, 5, 10, 7, -2], create an algorithm that shifts each number by one to the front.
// For example, when the program is done, an x of [1, 5, 10, 7, -2] should become [5, 10, 7, -2, 0].
// */

const shiftArray = (array: Array<number>, numRotations: number) => {
  const rotated = [];

  return rotated;
};

console.log(shiftArray([1, 5, 10, 7, -2], 2));

/*
13. Number to String Write a program that takes an array of numbers and replaces any negative number with the string 'Dojo'. For example, 
if array x is initially [-1, -3, 2] after your program is done that array should be ['Dojo', 'Dojo', 2].
*/
