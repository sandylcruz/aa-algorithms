const getDigitFrom = (num: number, place: number) =>
  Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;

const getIntLength = (num: number) =>
  num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;

function getMaxDigits(nums: Array<number>) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, getIntLength(nums[i]));
  }
  return maxDigits;
}

function radixSortNonNegative(arr: Array<number>) {
  if (!Array.isArray(arr)) return null;

  if (arr.length === 0) return [];
  if (arr.length === 1) return arr;

  let maxDigits = getMaxDigits(arr);

  for (let k = 0; k < maxDigits; k++) {
    let buckets = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < arr.length; i++) {
      let digit = getDigitFrom(arr[i], k);
      buckets[digit].push(arr[i]);
    }

    arr = [].concat(...buckets);
  }

  return arr;
}

function radixSort(arr): Array<number> {
  if (!Array.isArray(arr)) {
    return null;
  }

  let maxDigits = getMaxDigits(arr);
  for (let k = 0; k < maxDigits; k++) {
    let buckets = Array.from({ length: 10 }, () => []); // Array of empty arrays

    for (let i = 0; i < arr.length; i++) {
      let digit = getDigitFrom(arr[i], k);
      buckets[digit].push(arr[i]);
    }

    arr = [].concat(...buckets);
  }
  return arr;
}

module.exports = {
  radixSort,
};
