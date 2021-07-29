/* Write a method, all_vowel_pairs, that takes in an array of words and returns all pairs of words
# that contain every vowel. Vowels are the letters a, e, i, o, u. A pair should have its two words
# in the same order as the original array. 
#
*/

function all_vowel_pairs(words) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const holder = {};
  const result = [];
  const pairs = [];

  for (let i = 0; i < words.length + 1; i++) {
    for (let j = i + 1; j < words.length; j++) {
      const word1 = words[i];
      const word2 = words[j];
      const wordPair = word1 + ' ' + word2;

      if (!pairs.includes(wordPair)) pairs.push(wordPair);
    }
  }

  pairs.forEach((pair) => {
    if (vowels.every((vowel) => pair.includes(vowel))) {
      result.push(pair);
    }
  });

  return result;
}

const all_vowel_pairs2 = (words) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const pairs = [];
  const acc = [];

  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      const wordPair = words[i] + ' ' + words[j];
      if (!pairs.includes(wordPair)) {
        pairs.push(wordPair);
      }
      // console.log(wordPair);
    }
  }

  pairs.forEach((pair) => {
    if (vowels.every((vowel) => pair.includes(vowel))) {
      acc.push(pair);
    }
  });

  return acc;
};

// console.log(
//   all_vowel_pairs(['goat', 'action', 'tear', 'impromptu', 'tired', 'europe'])
// ); // => ["action europe", "tear impromptu"]
// console.log(
//   all_vowel_pairs(['upper', 'goalie', 'unstoppable', 'cranky', 'terrible'])
// ); // => ["upper goalie", "goalie unstoppable", "unstoppable terrible"]
// console.log(all_vowel_pairs(['city', 'stair', 'dog'])); // => []

/*
Write a method, composite?, that takes in a number and returns a boolean indicating if the number
has factors besides 1 and itself
*/

function composite(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return true;
    }
  }

  return false;
}

// console.log(composite(9)); // => true
// console.log(composite(13)); // => false

/*
A bigram is a string containing two letters.
Write a method, find_bigrams, that takes in a string and an array of bigrams.
The method should return an array containing all bigrams found in the string.
The found bigrams should be returned in the the order they appear in the original array.
*/

function find_bigrams(str, bigrams) {
  let bigramsToReturn = [];
  const words = str.split(' ');
  const counter = {};

  words.forEach((word) => {
    for (let i = 0; i < word.length - 1; i++) {
      const char1 = word[i];
      const char2 = word[i + 1];
      const newBigram = [char1 + char2];

      if (counter[newBigram]) {
        counter[newBigram] += 1;
      } else {
        counter[newBigram] = 1;
      }
    }
  });

  bigrams.forEach((bigram) => {
    if (bigram in counter) {
      bigramsToReturn.push(bigram);
    }
  });

  return bigramsToReturn;
}

// console.log(
//   find_bigrams('the theater is empty', ['cy', 'em', 'ty', 'ea', 'oo'])
// ); // => ["em", "ty", "ea"]
// console.log(find_bigrams('to the moon and back', ['ck', 'oo', 'ha', 'at'])); // => ["ck", "oo"]

/*
Write a method, String#substrings, that takes in a optional length argument
The method should return an array of the substrings that have the given length.
If no length is given, return all substrings.
*/
function substrings(word, length) {
  const chars = word.split('');
  let substrings = [];

  for (let i = 0; i < chars.length + 1; i++) {
    for (let j = i + 1; j < chars.length + 1; j++) {
      substrings.push(word.slice(i, j));
    }
  }

  if (length !== undefined) {
    return substrings.filter((str) => str.length === length);
  } else {
    return substrings;
  }
}

// console.log(substrings('cats')); // => ["c", "ca", "cat", "cats", "a", "at", "ats", "t", "ts", "s"]
// console.log(substrings('cats', 2)); // => ["ca", "at", "ts"]

/*
Write a method, String#caesar_cipher, that takes in an a number.
The method should return a new string where each char of the original string is shifted
the given number of times in the alphabet.

Examples:

p "apple".caesar_cipher(1)    #=> "bqqmf"
p "bootcamp".caesar_cipher(2) #=> "dqqvecor"
p "zebra".caesar_cipher(4)    #=> "difve"
*/

function lowercase_caesar_cipher(word, shift) {
  const newWord = [];
  const chars = word.split('');

  chars.forEach((char) => {
    const initialAscii = char.charCodeAt();
    const asciiCode = ((initialAscii - 97 + shift) % 26) + 97;
    const newLetter = String.fromCharCode(asciiCode);
    newWord.push(newLetter);
  });

  return newWord.join('');
}

console.log(lowercase_caesar_cipher('apple', 1)); // => "bqqmf"
console.log(lowercase_caesar_cipher('bootcamp', 2)); // => "dqqvecor"
console.log(lowercase_caesar_cipher('zebra', 4)); // => "difve"

/*
Write a method prime_factorization(num) that accepts a 
number and returns an array representing the prime 
factorization of the given number. This means that the 
array should contain only prime numbers that multiply 
together to the given num. The array returned should 
contain numbers in ascending order. Do this recursively.
*/

const isPrime = (num) => {
  for (let i = 2; i < num - 1; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};
// console.log(isPrime(5));

const prime_factorization = (num) => {
  const primeFactors = [];

  for (let i = 2; i < num; i++) {
    if (num % i === 0 && isPrime(i)) {
      primeFactors.push(i);
    }
  }

  return primeFactors;
};

// console.log(prime_factorization(30)); // => [2, 3, 5]
