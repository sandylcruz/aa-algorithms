/*
# Extend the Array class to include a method named `my_each` 
that takes a
# block, calls the block on every element of the array, and 
then returns
# the original array. Do not use Enumerable's `each` method. 

*/
const myForEach = (array) => {
  newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i]);
  }

  return newArray;
};
// const fruits = ['Apple', 'Banana', 'Strawberry'];
// console.log(myForEach(fruits));

/*
my_flatten should return all elements of the array into a 
new, one-dimensional array. Hint: use recursion!
*/

const myFlatten1 = (array) => {
  const flattened = [];
  array.forEach((item) => {
    if (Array.isArray(item)) {
      flattened.push(...myFlatten(item));
    } else {
      flattened.push(item);
    }
  });

  return flattened;
};

const myFlatten = (array) => {
  const acc = [];

  array.forEach((el) => {
    if (Array.isArray(el)) {
      acc.push(...myFlatten(el));
    } else {
      acc.push(el);
    }
  });

  return acc;
};

// const oneLevel = ['🔥', ['🦁', '🍕'], '🦋'];
// console.log(myFlatten(oneLevel)); // ['🔥', '🦁', '🍕', '🦋'];
// const twoLevel = ['🔥', ['🦁', ['👸', '🤴'], ' 🦋'], '🍉'];
// console.log(myFlatten(twoLevel));
// ['🔥', '🦁', ['👸', '🤴'], ' 🦋', '🍉'];
// console.log(myFlatten([]));

const myIncludes = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return true;
    }
  }

  return false;
};
// const fruits = ['Apple', 'Banana', 'Strawberry'];
// console.log(myIncludes([1, 2, 3, 4, 5], 5)); // => true
// console.log(myIncludes(fruits, 'App')); // => false
// console.log(myIncludes(fruits, 'Apple')); // => true
// console.log(myIncludes(fruits, 'Apples')); // => false

const myIndexOf = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }

  return -1;
};
// const fruits = ['Apple', 'Banana', 'Strawberry'];
// console.log(myIndexOf(fruits, 'Apple'));
// console.log(myIndexOf(fruits, 'Banana'));
// console.log(myIndexOf(fruits, 'Strawberry'));
// console.log(myIndexOf(fruits, 'Applez'));

/*
myJoin returns a single string containing all the elements of 
the array, separated by the given string separator. If no 
separator is given, an empty string is used.
*/

const myJoin1 = (string, joiner) => {
  let stringToReturn = '';

  for (let i = 0; i < string.length; i++) {
    const currentChar = string[i];
    if (joiner && currentChar !== string[string.length - 1]) {
      stringToReturn += currentChar + joiner;
    } else {
      stringToReturn += currentChar;
    }
  }

  return stringToReturn;
};

const myJoin = (elements, joiner) => {
  return elements.reduce((accumulator, el) => {
    if (joiner) {
      accumulator += el + joiner;
    } else {
      accumulator += el;
    }
    return accumulator;
  }, '');
};

// const array1 = ['c', 'a', 'l', 'l', 'i', 'e'];
// const array2 = [4, 5, 6];
// const alphabet = ['a', 'b', 'c', 'd'];
// console.log(myJoin(alphabet)); // => "abcd"
// console.log(myJoin(alphabet, '$')); // => "a$b$c$d"
// console.log(myJoin(array1)); // => 'callie

const myLength1 = (array) => {
  return array.reduce((acc, el) => {
    acc += 1;
    return acc;
  }, 0);
};

const myLength = (array) => {
  let count = 0;

  array.forEach((el) => {
    count += 1;
  });

  return count;
};
// const fruits = ['Apple', 'Banana', 'Strawberry'];
// console.log(myLength(fruits)); // => 2
// console.log(myLength([1, 2, 3, 4, 5, 6, 7, 8, 9])); // 9
// console.log(myLength([1, 2, 3, 'cat', 5, 6, { num: 9 }]));
// console.log(myLength([])); // => 0

const myPop = (array) => {
  const lastIndex = array.length - 1;
  const lastEl = array[lastIndex];

  array.splice(0, lastIndex);
  console.log('spliced array:', array);
  return lastEl;
};
// const fruits = ['Apple', 'Banana', 'Strawberry'];
// console.log(myPop(fruits)); // => ["Strawberry"]
// console.log(myPop(fruits)); // => ["Strawberry"]
// console.log(myPop(fruits)); // => ["Strawberry"]

const myPush = (array, newEl) => {
  return array.reduce((acc, currentEl) => {
    acc = array;
    acc += ',' + newEl;

    return acc;
  }, []);
};

// const myPush = (array, el) => {
//   return array + ',' + el;
// };

console.log(myPush([1, 2, 3], 4));
console.log(myPush(['a', 'b', 'c'], 'd'));

const myReduce = () => {};

/*
Write a method that returns a new array containing all the 
elements of the original array in reverse order.
*/

// const byCount = (array) => {
//   const newObject = {};

//   for (let i = 0; i < array.length; i++) {
//     const num = array[i];

//     if (newObject[num]) {
//       newObject[num] += 1;
//     } else {
//       newObject[num] = 1;
//     }
//   }

//   return newObject;
// };

const byCount = (array) =>
  array.reduce((accumulator, currentElement) => {
    if (accumulator[currentElement]) {
      accumulator[currentElement] += 1;
    } else {
      accumulator[currentElement] = 1;
    }

    return accumulator;
  }, {});

// console.log(byCount([1, 1, 2, 3, 4, 5, 5, 5, 5]));

const myReverse = (array) => {
  return array.reduce((accumulator, element) => {
    accumulator.unshift(element);

    return accumulator;
  }, []);
};

const myReverse2 = (array) => {
  const accumulator = [];

  array.forEach((element) => {
    accumulator.unshift(element);
  });

  return accumulator;
};

// console.log(myReverse([1, 2, 3, 4])); // [6, 5, 4, 3, 2, 1]
// console.log(myReverse([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// console.log(myReverse(['a', 'b', 'c'])); // => ["c", "b", "a"]
// console.log(myReverse([1])); // => [1]
// console.log(myReverse([]));

/*
Write a method my_rotate that returns a new array containing 
all the elements of the original array in a rotated order. 
By default, the array should rotate by one element. If a 
negative value is given, the array is rotated in the 
opposite direction.
*/
const myRotate = (array, num) => {
  const rotated = [];

  if (num) {
  } else {
  }

  return rotated;
};
const array = ['a', 'b', 'c', 'd'];
// console.log(myRotate(array)); // => ["b", "c", "d", "a"]
// console.log(myRotate(array, 2)); // => ["c", "d", "a", "b"]
// console.log(myRotate(array, -3)); // => ["b", "c", "d", "a"]
// console.log(myRotate(array, 15)); // => ["d", "a", "b", "c"]

const mySelect = () => {};

// Remove item from beginning of array
const myShift = (array) => {};
// console.log();

// Remove item by index position
const mySlice = (array, num) => {};
// console.log(mySlice[('strawberry', 'banana', 'mango')], 1); // => ['strawberry', 'mango']

// Return true if at least one el satisfies function
const mySome = (array) => {};

const myToString = (array) => {};

// Add item to beginning of array
const myUnshift = (array) => {};
