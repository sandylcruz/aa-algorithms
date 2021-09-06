const fib = (num: number, memo = {}): number => {
  if (num === 1 || num === 0) {
    return 1;
  }

  if (num in memo) {
    console.log(`fetching ${num}`);
    return memo[num];
  }

  const result = fib(num - 1, memo) + fib(num - 2, memo);
  memo[num] = result;
  console.log(`stored result in memo for num: ${num}`);
  return result;
};
console.log(fib(5));
console.log(fib(100));
