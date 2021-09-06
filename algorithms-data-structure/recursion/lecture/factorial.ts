// Write a method `factorial(n)` which takes a number and returns the factorial of n.
// A factorial is the product of all whole numbers between 1 and n, inclusive.
// For example, `factorial(5)` is 5 * 4 * 3 * 2 * 1 = 120.

// factorial(5) = 5 * 4 * 3 * 2 * 1
// factorial(4) = 4 * 3 * 2 * 1
// factorial(3) = 3 * 2 * 1
// factorial(2) = 2 * 1
// factorial(1) = 1 (base case)

// factorial(5) = 5 * factorial(4)
// factorial(4) = 4 * factorial(3)
// factorial(3) = 3 * factorial(2)
// factorial(2) = 2 * factorial(1)
// factorial(1) = 1 (base case)

const factorial2 = (num: number) => {
  if (num === 1) {
    return 1;
  }

  return num * factorial(num - 1);
};

// console.log(factorial(5)); // => 120

const fib2 = (num: number) => {
  if (num === 1 || num === 2) {
    return 1;
  }

  return fib(num - 1) + fib(num - 2);
};
console.log(fib(6));
