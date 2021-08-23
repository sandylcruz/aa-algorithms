/*
Write a function reverseWords() that takes a message as an array of characters and 
reverses the order of the words in place.
*/

const reverseWords = (message) => {
  for (let i = 0; i < message.length; i++) {
    const currentEl = message[i];
    const nextEl = message[i + 1];

    const startingIndex = 0;
    let endingIndex;

    if (nextEl === '') {
      endIndex = i;
      const wordRange = [startingIndex, endingIndex];
      console.log(wordRange);

      startingIndex = nextEl + 1;
    } else {
    }
  }

  return message;
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

console.log(reverseWords(message.join('')));
