const merge = (array2, array1) => {
  const merged = [];
  while (array2.length || array1.length) {
    let firstElement = array1.length ? array1[0] : Infinity;
    let secondElement = array2.length ? array2[0] : Infinity;
    let nextElement;

    if (firstElement < secondElement) {
      nextElement = array1.shift();
    } else {
      nextElement = array2.shift();
    }

    merged.push(nextElement);
  }

  return merged;
};

arr1 = [1, 5, 10, 15];
arr2 = [0, 2, 3, 7, 10];
console.log(merge(arr1, arr2));
