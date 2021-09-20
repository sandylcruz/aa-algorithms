const anagrams = (s1: string, s2: string) => {
  const seenCharacters: any = {};

  if (s1.length !== s2.length) return false;

  for (let i = 0; i < s1.length; i++) {
    const char = s1[i];

    if (seenCharacters[char]) {
      seenCharacters[char] += 1;
    } else {
      seenCharacters[char] = 1;
    }
  }

  for (let j = 0; j < s2.length; j++) {
    const char = s2[j];

    if (seenCharacters[char]) {
      seenCharacters[char] -= 1;
    } else {
      return false;
    }
  }

  for (let char in seenCharacters) {
    if (seenCharacters[char] !== 0) {
      return false;
    }
  }

  return true;
};

console.log(anagrams('aardvark', 'tac'));
