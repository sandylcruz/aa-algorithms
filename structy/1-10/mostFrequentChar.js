/*
Write a function, mostFrequentChar, that takes in a string as an argument. The 
function should return the most frequent character of the string. If there are 
ties, return the character that appears earlier in the string
*/

const mostFrequentChar = (s) => {
  const seenChars = {};

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (seenChars[char]) {
      seenChars[char] += 1;
    } else {
      seenChars[char] = 1;
    }
  }

  return Object.keys(seenChars).reduce((a, b) =>
    seenChars[a] >= seenChars[b] ? a : b
  );
};

console.log(mostFrequentChar('bookkeeper'));
