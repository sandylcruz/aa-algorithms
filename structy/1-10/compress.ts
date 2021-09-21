/*
Write a function, compress, that takes in a string as an argument. The function 
should return a compressed version of the string where consecutive occurrences 
of the same characters are compressed into the number of occurrences followed by 
the character. Single character occurrences should not be changed.
*/
const compress = (string: string) => {
  const arrayToReturn = [];
  let i = 0;
  let j = 0;

  while (j <= string.length) {
    if (string[i] === string[j]) {
      j++;
    } else {
      const numTimes = j - i;
      if (numTimes === 1) {
        arrayToReturn.push(string[i]);
      } else {
        arrayToReturn.push(String(numTimes), string[i]);
      }

      i = j;
    }
  }

  return arrayToReturn.join('');
};

console.log(compress('ccaaatsss'));
