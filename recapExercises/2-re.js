/*
# Write a method, least_common_multiple, that takes in two numbers and returns the smallest number that is a mutiple
# of both of the given numbers

*/

function least_common_multiple(num1, num2) {
  const lcm = null;
  let num1Multiples = [];
  let num2Multiples = [];

  for (let i = 2; i < num1; i++) {
    if (num1 % i === 0) {
      num1Multiples.push(i);
    }
  }

  for (let j = 2; j < num2; j++) {
    if (num2 % j === 0) {
      num2Multiples.push(j);
    }
  }

  num1Multiples;

  return lcm;
}

// console.log(least_common_multiple(20, 10));
// console.log(least_common_multiple(4, 10)); // 20
// console.log(least_common_multiple(7, 21)); // 21

/*
# Write a method, most_frequent_bigram, that takes in a string and returns the two adjacent letters that appear the
# most in the string.
*/

function most_frequent_bigram(string) {
  const counter = {};

  for (let i = 0; i < string.length - 1; i++) {
    let char1 = string[i];
    let char2 = string[i + 1];
    let newBigram = [char1 + char2];

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
function inverse(object) {
  const inversedObject = {};
  const previousKeys = Object.keys(object);
  const previousValues = Object.values(object);
  console.log(previousKeys, previousValues);

  const previousObject = Object.entries(object);
  console.log(previousObject);

  return inversedObject;
}

// console.log(inverse({ a: 1, b: 2 })); // => {1: 'a', 2: 'b'}
// console.log(inverse({ a: 1, b: 1 })); // => {1: ['a', 'b']}
// console.log(inverse({ name: 'fido', hungry: true })); // => {"fido": "name", true: 'hungry'}

/*
Write a method, Array#pair_sum_count, that takes in a target number returns the number of pairs of elements that sum to the given target
*/
function pairSumCount(array, targetNum) {
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
function bubbleSort() {}
// console.log(bubbleSort([4, 12, 2, 8, 1, 14, 9, 25, 24, 81])); // => [1, 2, 4, 8, 9, 12, 14, 24, 25, 81]
// console.log(bubbleSort([5, 4, 7])); // => [4, 5, 7]

const fizzBuzz = (num) => {
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

console.log(fizzBuzz(35)); // =>
// [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'Fizz Buzz', 16, 17, 'Fizz', 19, 'Buzz', 'Fizz', 22, 23, 'Fizz', 'Buzz', 26, 'Fizz', 28, 29, 'Fizz Buzz', 31, 32, 'Fizz', 34, 'Buzz', 'Fizz']
