/*
Given a string s consisting of some words separated by some number of spaces, return the 
length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.
*/

const longestWord = (sentence: string) => {
  let currentLongestLength: null | number = null;
  const words = sentence.split(' ');
  console.log(words);

  words.forEach((word) => {
    if (word.length > currentLongestLength) {
      currentLongestLength = word.length;
    }
  });

  return currentLongestLength;
};

console.log(longestWord('Hello World')); // 5
console.log(longestWord('fly me to the moon')); // 4
console.log(longestWord('luffy is still joyboy')); // 6
