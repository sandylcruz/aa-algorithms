/*
# Write a method, least_common_multiple, that takes in two numbers and returns the smallest number that is a mutiple
# of both of the given numbers
*/

const isPrime = (num: number) => {
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const getPrimeFactors = (num: number) => {
  const factors = {};
  for (let i = 2; i <= num; i++) {
    if (num % i === 0 && isPrime(i)) {
      if (factors[i]) {
        factors[i]++;
      } else {
        factors[i] = 1;
      }
    }
  }

  return factors;
};
console.log(getPrimeFactors(9));

function least_common_multiple(num1: number, num2: number) {
  const num1PrimeFactors = getPrimeFactors(num1);
  const num2PrimeFactors = getPrimeFactors(num2);
  // console.log(num1PrimeFactors, num2PrimeFactors);

  return num1PrimeFactors[0] * num2PrimeFactors[0];
}

// console.log(least_common_multiple(20, 10)); // 20
// console.log(least_common_multiple(4, 10)); // 20
// console.log(least_common_multiple(7, 21)); // 21

const lcm = (num1: number, num2: number) => {
  const max = num1 * num2;

  for (let i = 2; i < max; i++) {
    if (i % num1 === 0 && i % num2 === 0) {
      return i;
    }
  }
};

// console.log(lcm(20, 10));
// console.log(lcm(4, 10));
// console.log(lcm(7, 21));

/*
# Write a method, most_frequent_bigram, that takes in a string and returns the two adjacent letters that appear the
# most in the string.
*/

function most_frequent_bigram(string: string) {
  const counter = {};

  for (let i = 0; i < string.length - 1; i++) {
    let char1 = string[i];
    let char2 = string[i + 1];
    const newBigram = [char1 + char2];

    if (counter[newBigram]) {
      counter[newBigram] += 1;
    } else {
      counter[newBigram] = 1;
    }
  }

  return Object.keys(counter).reduce((a, b) =>
    counter[a] > counter[b] ? a : b
  );
}
// console.log(most_frequent_bigram('thethrillofit')); // "th"
// console.log(most_frequent_bigram('gotothemoonsoonforproof')); // "oo"
// console.log(most_frequent_bigram('bananasareanotherfruit')); // "an"

/*
# Write a method, #inverse, that returns a new hash where the key-value pairs are swapped
*/
// function inverse(object) {
//   const inverseObject = {};
//   const newValues = Object.keys(object);
//   const newKeys = Object.values(object);

//   for (let i = 0; i < newValues.length; i++) {
//     const newKey = newKeys[i];
//     const newValue = newValues[i];
//     inverseObject[newKey] = newValue;
//   }

//   return inverseObject;
// }

const inverse2 = (object: { [char: string]: number }) => {
  const inverseObject = new Map();
  const newValues = Object.keys(object);
  const newKeys = Object.values(object);

  for (let i = 0; i < newValues.length; i++) {
    const newKey = newKeys[i];
    const newValue = newValues[i];

    if (!inverseObject.get(newKey)) {
      inverseObject.set(newKey, [newValue]);
    } else {
      inverseObject.get(newKey).push(newValue);
    }
  }

  return inverseObject;
};

// console.log(inverse2({ a: 1, b: 2 })); // => {1: 'a', 2: 'b'}
// console.log(inverse2({ a: 1, b: 1 })); // => {1: ['a', 'b']}
// console.log(inverse2({ name: 'fido', hungry: true })); // => {"fido": "name", true: 'hungry'}

/*
Write a method, Array#pair_sum_count, that takes in a target number returns the number of pairs of elements that sum to the given target
*/

function pairSumCount(array: Array<number>, targetNum: number) {
  let counter = 0;

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const num1 = array[i];
      const num2 = array[j];
      if (num1 + num2 === targetNum) {
        counter += 1;
      }
    }
  }

  return counter;
}
// console.log(pairSumCount([1, 2, 1, 3, 8], 5)); // => 1
// console.log(pairSumCount([10, 3, 6, 5, 7], 13)); // => 2
// console.log(pairSumCount([10, 3, 6, 5, 7], 4)); // => 0

/*
# Write a method, Array#bubble_sort, that takes in an optional proc argument.
# When given a proc, the method should sort the array according to the proc.
# When no proc is given, the method should sort the array in increasing order.
#
# Sorting algorithms like bubble_sort, commonly accept a block. That block accepts
# two parameters, which represents the two elements in the array being compared.
# If the block returns 1, it means that the second element passed to the block
# should go before the first (i.e. switch the elements). If the block returns -1,
# it means the first element passed to the block should go before the second
# (i.e. do not switch them). If the block returns 0 it implies that
# it does not matter which element goes first (i.e. do nothing).
#
# This should remind you of the spaceship operator! Convenient :)

*/
function bubbleSort1(array: Array<number>) {
  let isSwapped = false;

  while (!isSwapped) {
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] > array[j]) {
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
          isSwapped = true;
        }
      }
    }
  }

  return array;
}

// console.log(bubbleSort1([7, 6, 5, 4, 3, 2, 1]));
// console.log(bubbleSort1([4, 12, 2, 8, 1, 14, 9, 25, 24, 81])); // => [1, 2, 4, 8, 9, 12, 14, 24, 25, 81]
// console.log(bubbleSort1([5, 4, 7])); // => [4, 5, 7]

const bubbleSort = (array: Array<number>) => {
  let isSorted = false;

  while (!isSorted) {
    isSorted = true;

    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        isSorted = false;
      }
    }
  }

  return array;
};

// console.log(bubbleSort([7, 6, 5, 4, 3, 2, 1]));
// console.log(bubbleSort([4, 12, 2, 8, 1, 14, 9, 25, 24, 81])); // => [1, 2, 4, 8, 9, 12, 14, 24, 25, 81]
// console.log(bubbleSort([5, 4, 7])); // => [4, 5, 7]

const fizzBuzz = (num: number) => {
  const arrayToReturn = [];

  for (let i = 1; i <= num; i++) {
    if (i % 15 === 0) {
      arrayToReturn.push('Fizzbuzz');
    } else if (i % 3 === 0) {
      arrayToReturn.push('Fizz');
    } else if (i % 5 === 0) {
      arrayToReturn.push('Buzz');
    } else {
      arrayToReturn.push(i);
    }
  }

  return arrayToReturn;
};

// console.log(fizzBuzz(35)); // =>
// [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'Fizz Buzz', 16, 17, 'Fizz', 19, 'Buzz', 'Fizz', 22, 23, 'Fizz', 'Buzz', 26, 'Fizz', 28, 29, 'Fizz Buzz', 31, 32, 'Fizz', 34, 'Buzz', 'Fizz']
