// Given a list of integers find the smallest number in the list.

/*
First, write a function that compares each 
element to every other element of the list. 
Return the element if all other elements in 
the array are larger.

What is the time complexity for this function?
*/

const myMin = (array: Array<number>) => {
  let min = array[0];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] < array[j]) {
        min = array[i];
        j++;
      } else {
        min = array[j];
      }
      i++;
    }
  }
  return min;
};

const array1 = [0, 3, 5, 4, -5];
console.log(myMin(array)); // = -5

/* 
Phase II
Now ,rewrite the function to iterate through 
the list just once while keeping track of 
the minimum.

What is the time complexity?
*/

const myMin2 = (array: Array<number>) => {
  let min = array[0];

  array.forEach((number) => {
    if (number < min) {
      min = number;
    }
  });

  return min;
};

console.log(myMin2(array)); // = -5
