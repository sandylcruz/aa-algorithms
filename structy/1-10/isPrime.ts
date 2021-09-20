/*
Write a function, isPrime, that takes in a number as an argument. The function 
should return a boolean indicating whether or not the given number is prime.
*/

const isPrime = (n: number): boolean => {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  if (n === 1) {
    return false;
  }

  return true;
};

module.exports = {
  isPrime,
};
