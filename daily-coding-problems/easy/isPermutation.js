const isPermutation = (string1, string2) => {
  if (string1.length !== string2.length) return false;

  const charObject = {};

  string1.split('').forEach((char) => {
    if (charObject[char]) {
      charObject[char] += 1;
    } else {
      charObject[char] = 1;
    }
  });

  string2.split('').forEach((char) => {
    if (charObject[char]) {
      delete charObject[char];
    }
  });

  return Object.keys(charObject).length === 0;
};

console.log(isPermutation('cat', 'tac')); // true
console.log(isPermutation('carrace', 'racecar')); // true
console.log(isPermutation('carrace', 'daily')); // false
