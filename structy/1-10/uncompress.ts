/*
Write a function, uncompress, that takes in a string as an argument. The input 
string will be formatted into multiple groups.

The function should return an uncompressed version of the string where each 
'char' of a group is repeated 'number' times consecutively. You may assume 
that the input string is well-formed according to the previously mentioned 
pattern.
*/

const uncompress = (string) => {
  const numbers = '0123456789';
  const uncompressed = [];
  let i = 0;
  let j = 0;

  while (j < string.length) {
    if (numbers.includes(string[i])) {
      j += 1;
    } else {
      const numberOfTimes = Number(string.slice(i, j));
      for (let count = 0; count < numberOfTimes; count += 1) {
        uncompressed.push(string[j]);
      }
      j += 1;
      i = j;
    }
  }

  return uncompressed.join('');
};

console.log(uncompress('3n10e2z'));
