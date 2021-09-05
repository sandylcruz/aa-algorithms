/*
Write a function reverseWords() that takes a message as an array of characters and 
reverses the order of the words in place.
*/

const reverseWords = (message: Array<string>) => {
  const reversed = [];
  let words = message.join('');

  let leftIndex = 0;
  let rightIndex = words.length - 1;

  while (leftIndex < rightIndex) {
    const temp = words[leftIndex];
    words[leftIndex] = words[rightIndex];
    words[rightIndex] = temp;
    leftIndex++;
    rightIndex--;
  }
  console.log(words);

  // return words;
};

const message = [
  'c',
  'a',
  'k',
  'e',
  ' ',
  'p',
  'o',
  'u',
  'n',
  'd',
  ' ',
  's',
  't',
  'e',
  'a',
  'l',
];

console.log(reverseWords(message));
