function quickSort(array) {
  const pivot = Math.random(array.length);

  console.log(pivot);
}

console.log(quickSort([5, 4, 3, 2, 1]));

module.exports = {
  quickSort,
};
