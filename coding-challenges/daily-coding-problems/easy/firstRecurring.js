/*
Given a string, return the first recurring character in it, or null if there is no recurring character.

For example, given the string "acbbac", return "b". Given the string "abcdef", return null.
7/18/21
*/

const firstRecurring = (string) => {
  const hasSeen = new Set();

  for (let i = 0; i < string.length; i++) {
    if (hasSeen.has(string[i])) {
      return string[i];
    } else {
      hasSeen.add(string[i]);
    }
  }

  return null;
};

console.log(firstRecurring('acbbac'));
console.log(firstRecurring('acbdf'));
