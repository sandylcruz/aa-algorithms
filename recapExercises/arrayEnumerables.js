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

// const myFlatten = (array) => {
//   const flattened = [];
//   array.forEach((item) => {
//     if (Array.isArray(item)) {
//       flattened.push(...myFlatten(item));
//     } else {
//       flattened.push(item);
//     }
//   });

//   return flattened;
// };

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

const myJoin = (string, joiner) => {};
const array1 = ['c', 'a', 'l', 'l', 'i', 'e'];
const array2 = [4, 5, 6];
const alphabet = ['a', 'b', 'c', 'd'];
// console.log(myJoin(alphabet))         // => "abcd"
// console.log(a.myJoin(alphabet, "$"))    // => "a$b$c$d"
// console.log(myJoin(array1)); // => 'callie

const myLength = (array) => {};
// console.log(myLength(fruits)); // => 2
// console.log(myLength[]) // => 0

const myMap = (array) => {};

const myPop = (array) => {};
// console.log(myPop(fruits)); // => ["Apple", "Banana"]

const myPush = (array) => {};

const myReduce = () => {};

/*
Write a method that returns a new array containing all the 
elements of the original array in reverse order.
*/
const myReverse = () => {};
// console.log(myReverse(['a', 'b', 'c'])); // => ["c", "b", "a"]
// console.log(myReverse([1])); // => [1]

/*
Write a method my_rotate that returns a new array containing 
all the elements of the original array in a rotated order. 
By default, the array should rotate by one element. If a 
negative value is given, the array is rotated in the 
opposite direction.
*/
const myRotate = (array, num) => {};
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
