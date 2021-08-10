// What digit is at the given place value in num?
const getDigitFrom = (num, place) => {
  const numbers = num.toString().split('');
  return numbers[place - 1];
};

// console.log(getDigitFrom(12345, 1));
// console.log(getDigitFrom(12345, 2));
// console.log(getDigitFrom(12345, 3));
// console.log(getDigitFrom(12345, 4));
// console.log(getDigitFrom(12345, 5));

// How many digits are in num?
const getIntLength1 = (num) => {
  let count = 0;
  const numbers = num.toString().split('');

  numbers.forEach((num) => {
    count += 1;
  });

  return count;
};

// console.log(getIntLength(12345)); // 5
// console.log(getIntLength(123456)); // 6
// console.log(getIntLength(1234567)); // 7

// How many digits does the integer with the most digits have?
const getMaxDigits = (nums) => {
  let currentMax = 0;
  let currentNumMax = 0;

  nums.forEach((num) => {
    currentNumMax += 1;
  });

  if (currentNumMax > currentMax) {
    currentMax = currentNumMax;
  }

  return currentMax;
};
console.log(getMaxDigits([1, 22, 333, 4444, 55555]));
