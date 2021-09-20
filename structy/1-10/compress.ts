/*
Write a function, compress, that takes in a string as an argument. The function 
should return a compressed version of the string where consecutive occurrences 
of the same characters are compressed into the number of occurrences followed by 
the character. Single character occurrences should not be changed.
*/

const compress = (string) => {
  const arrayToReturn = [];
  let numTimes = 1;

  for (let i = 0; i < string.length; i++) {
    let currentChar = string[i + 1];
    let previousChar = string[i];

    if (currentChar === previousChar) {
      numTimes + 1;
      previousChar = currentChar;
      console.log('hiasdfadsf');
    } else {
      arrayToReturn.push(numTimes);
      arrayToReturn.push(currentChar);
      numTimes = 1;
    }

    console.log(numTimes, currentChar, previousChar);
  }

  return arrayToReturn.join('');
};

console.log(compress('ccaaatsss'));
