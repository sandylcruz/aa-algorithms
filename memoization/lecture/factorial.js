const memo = {};

const factorialBeforeMemo = (num) => {
  if (num === 1) return 1;

  return num * factorial(num - 1);
};

const factorial = (num) => {
  if (num === 1) {
    return 1;
  }

  if (num in memo) {
    return memo[num];
  }

  const answer = num * factorial(num - 1);

  memo[num] = answer;
  console.log(`stored memo for ${num}`);
  return answer;
};

console.log(factorial(6));
console.log(memo);
