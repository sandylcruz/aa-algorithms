/*
Run-length encoding is a fast and simple method of encoding 
strings. The basic idea is to represent repeated successive 
characters as a single count and character. For example, 
the string "AAAABBBCCDAA" would be encoded as "4A3B2C1D2A".

Implement run-length encoding and decoding. 
You can assume the string to be encoded have no 
digits and consists solely of alphabetic characters. 
You can assume the string to be decoded is valid.
*/

const runLengthEncoding = (string) => {
  const chars = string.split('');
  let stringToReturn = '';
  let sameCharacterCount = 0;
  let currentCharacter = chars[0];

  for (let i = 0; i < chars.length; i++) {
    const character = chars[i];

    if (character === currentCharacter) {
      sameCharacterCount += 1;
    } else {
      const newString = `${sameCharacterCount}${currentCharacter}`;
      stringToReturn = stringToReturn + newString;
      sameCharacterCount = 1;
      currentCharacter = character;
    }
  }

  const newString = `${sameCharacterCount}${currentCharacter}`;
  stringToReturn = stringToReturn + newString;

  return stringToReturn;
};
console.log(runLengthEncoding('AAAABBBCCDAA')); // 4A3B2C1D2A
console.log(runLengthEncoding('AAB')); // 2A1B
console.log(runLengthEncoding('AABC')); // 2A1B1C
