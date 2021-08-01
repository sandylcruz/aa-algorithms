// Given a 32-bit integer, return the number with its bits reversed.
// 7/20/21

const reverse32Bit = (number) => {
  let currentNumber = number;
  let total = 0;
  let numberOfDigits = 0;

  while (currentNumber !== 0) {
    total <<= 1;
    const isLastBitSet = (currentNumber & 1) === 1;

    if (isLastBitSet) {
      total += 1;
    }

    currentNumber >>= 1;

    numberOfDigits += 1;
  }
  const remainder = 32 - numberOfDigits;
  return total << remainder;
};

const x = 55; // 00000000000000000000000000110111
console.log(reverse32Bit(55)); // => -335544320
