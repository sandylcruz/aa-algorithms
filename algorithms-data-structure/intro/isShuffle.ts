/*
Given three strings, return whether the third is an 
interleaving of the first two. Interleaving means it only 
contains characters from the other two, no more no less, 
and preserves their character ordering. "abdecf" is an 
interleaving of "abc" and "def". Note that the first two 
strings needn't be in alphabetical order like these.
*/

const isShuffle = (string1: string, string2: string, string3: string) => {
  if (string1.length + string2.length !== string3.length) {
    return false;
  }

  const mergedString = string1 + string2;
  const sortedString = mergedString.split('').sort().join('');

  const sortedThirdString = string3.split('').sort().join('');

  return sortedString === sortedThirdString;
};

console.log(isShuffle('cat', 'dog', 'catdog')); // = true
console.log(isShuffle('cats', 'dog', 'catdog')); //= false
