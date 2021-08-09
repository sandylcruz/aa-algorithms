function countingSort1(arr, max) {
  const counter = new Array(max + 1).fill(0);
  const result = [];

  arr.forEach((num) => {
    counter[num] += 1;
  });

  for (let i = 0; i < counter.length; i++) {
    while (counter[i] > 0) {
      result.push(i);
      counter[i]--;
    }
  }

  return result;
}

const countingSort2 = (arr, max) => {
  const counter = new Array(max + 1).fill(0);
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    counter[arr[i]]++;
  }

  for (let j = 0; j < counter.length; j++) {
    while (counter[j] > 0) {
      result.push(j);
      counter[j]--;
    }
  }
  return result;
};

const countingSort = (arr, max) => {
  const counter = new Array(max + 1).fill(0);
  const result = [];

  arr.forEach((num) => {
    counter[num] += 1;
  });

  for (let i = 0; i < counter.length; i++) {
    while (counter[i] > 0) {
      result.push(i);
      counter[i]--;
    }
  }

  return result;
};

console.log(countingSort([5, 5, 5, 4, 3, 2, 1], 5));

module.exports = {
  countingSort,
};
