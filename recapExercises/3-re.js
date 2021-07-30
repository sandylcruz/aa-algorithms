/*
Write a method no_dupes?(arr) that accepts an array as 
an arg and returns an new array containing the elements 
that were not repeated in the array.
*/

function no_dupes(array) {
  const counter = {};
  const result = [];

  array.forEach((el) => {
    if (counter[el]) {
      counter[el] += 1;
    } else {
      counter[el] = 1;
    }
  });

  for (el in counter) {
    if (counter[el] === 1) {
      result.push(el);
    }
  }

  return result;
}

// console.log(no_dupes([1, 1, 2, 1, 3, 2, 4])); // => [3, 4]
// console.log(no_dupes(['x', 'x', 'y', 'z', 'z'])); // => ['y']
// console.log(no_dupes([true, true, true])); // => []

/*
Write a method no_consecutive_repeats?(arr) that accepts 
an array as an arg. The method should return true if an 
element never appears consecutively in the array; it 
should return false otherwise.
*/

function no_consecutive_repeats(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1]) {
      return false;
    }
  }
  return true;
}

// console.log(no_consecutive_repeats(['cat', 'dog', 'mouse', 'dog'])); // => true
// console.log(no_consecutive_repeats(['cat', 'dog', 'dog', 'mouse'])); // => false
// console.log(no_consecutive_repeats([10, 42, 3, 7, 10, 3])); // => true
// console.log(no_consecutive_repeats([10, 42, 3, 3, 10, 3])); // => false
// console.log(no_consecutive_repeats(['x'])); // => true

/*
Write a method char_indices(str) that takes in a string as 
an arg. The method should return a hash containing 
characters as keys. The value associated with each key 
should be an array containing the indices where that 
character is found.
*/

function char_indices(word) {
  const chars = word.split('');
  const counter = {};

  for (let i = 0; i < chars.length; i++) {
    const char = chars[i];

    if (!counter[char]) {
      counter[char] = [i];
    } else {
      counter[char].push(i);
    }
  }
  return counter;
}

// console.log(char_indices('mississippi')); // => {"m"=>[0], "i"=>[1, 4, 7, 10], "s"=>[2, 3, 5, 6], "p"=>[8, 9]}
// console.log(char_indices('classroom')); // => {"c"=>[0], "l"=>[1], "a"=>[2], "s"=>[3, 4], "r"=>[5], "o"=>[6, 7], "m"=>[8]}

/*
Write a method longest_streak(str) that accepts a string 
as an arg. The method should return the longest streak 
of consecutive characters in the string. If there are 
any ties, return the streak that occurs later in the 
string.
*/

function longest_streak(string) {
  let currentStreak = string[0];
  let longestStreak = '';
  const chars = string.split('');

  for (let i = 0; i < chars.length + 1; i++) {
    const currentChar = chars[i];
    const previousChar = chars[i - 1];

    if (currentChar === previousChar) {
      currentStreak += currentChar;
    } else {
      if (currentStreak.length > longestStreak.length) {
        longestStreak = currentStreak;
      } else if (currentStreak.length === longestStreak.length) {
        longestStreak = currentStreak;
      }
      currentStreak = currentChar;
    }
  }

  return longestStreak;
}

// console.log(longest_streak('a')); // => 'a'
// console.log(longest_streak('accccbbbaa')); // => 'cccc'
// console.log(longest_streak('aaaxyyyyyzz')); // => 'yyyyy'
// console.log(longest_streak('aaabbb')); // => 'bbb'
// console.log(longest_streak('abc')); // => 'c'

/*
Write a method bi_prime?(num) that accepts a number as an arg 
and returns a boolean indicating whether or not the number is
a bi-prime. A bi-prime is a positive integer that can be 
obtained by multiplying two prime numbers.
*/

const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

function bi_prime(num) {
  const factors = [];
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }

  if (factors.length > 2) return false;

  return factors.every((factor) => isPrime(factor));
}

// console.log(bi_prime(14)); // => true
// console.log(bi_prime(22)); // => true
// console.log(bi_prime(25)); // => true
// console.log(bi_prime(94)); // => true
// console.log(bi_prime(24)); // => false
// console.log(bi_prime(64)); // => false

/*
The Lucas Sequence is a sequence of numbers. The first 
number of the sequence is 2. The second number of the 
Lucas Sequence is 1. To generate the next number of the 
sequence, we add up the previous two numbers. 
For example, the first six numbers of the sequence 
are: 2, 1, 3, 4, 7, 11, ...

Write a method lucasSequence that accepts a number 
representing a length as an arg. The method should 
return an array containing the Lucas Sequence up to 
the given length. Solve this recursively.
*/

function lucasSequence(num) {
  if (num === 1) return 2;
  if (num === 2) return 1;

  return lucasSequence(num - 1) + lucasSequence(num - 2);
}

// console.log(lucasSequence(1)); // 2
// console.log(lucasSequence(2)); // 1
// console.log(lucasSequence(3)); // 3
// console.log(lucasSequence(4)); // 4
// console.log(lucasSequence(5)); // 7
// console.log(lucasSequence(6)); // 11
// console.log(lucasSequence(7)); // 18
// console.log(lucasSequence(8)); // 29

/*
A Vigenere Cipher is a Caesar cipher, but instead of a 
single key, a sequence of keys is used. For example, if we 
encrypt "bananasinpajamas" with the key sequence 1, 2, 3, 
then the result would be "ccqbpdtkqqcmbodt":

# Message:  b a n a n a s i n p a j a m a s
# Keys:     1 2 3 1 2 3 1 2 3 1 2 3 1 2 3 1
# Result:   c c q b p d t k q q c m b o d t

Write a method vigenere_cipher(message, keys) that accepts 
a string and a key-sequence as args, returning the 
encrypted message. Assume that the message consists of 
only lowercase alphabetic characters.


*/

function vignere_cipher(string, keys) {
  let newWord = [];
  const chars = string.split('');

  for (let i = 0; i < chars.length; i++) {
    const currentChar = chars[i];
    let currentKey = keys[i];

    if (i >= keys.length) {
      keyIndex = i % 2;
      currentKey = keys[keyIndex];
    }

    const oldAscii = currentChar.charCodeAt(0);
    const newAscii = ((oldAscii + currentKey - 97) % 26) + 97;
    const newLetter = String.fromCharCode(newAscii);

    newWord.push(newLetter);
  }

  return newWord.join('');
}

// console.log(vignere_cipher('toerrishuman', [1])); // => "upfssjtivnbo"
// console.log(vignere_cipher('toerrishuman', [1, 2])); // => "uqftsktjvobp"
// console.log(vignere_cipher('toerrishuman', [1, 2, 3])); // => "uqhstltjxncq"
// console.log(vignere_cipher('zebra', [3, 0])); // => "ceerd"
// console.log(vignere_cipher('yawn', [5, 1])); // => "dbbo"

/*
Write a method vowel_rotate(str) that accepts a string as 
an arg and returns the string where every vowel is 
replaced with the vowel the appears before it sequentially 
in the original string. The first vowel of the string 
should be replaced with the last vowel.
*/

const rotateArray = (array) => {
  const rotatedArray = [];

  const elToMove = array[array.length - 1];
  rotatedArray.push(elToMove);

  const endIndex = array.length - 1;
  const endOfArray = array.slice(0, endIndex);
  rotatedArray.push(endOfArray);

  return rotatedArray.flat();
};

function vowel_rotate(word) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const foundVowels = [];
  const chars = word.split('');
  const wordToReturn = [];

  chars.forEach((char) => {
    if (vowels.includes(char)) {
      foundVowels.push(char);
    }
  });

  const shiftedVowels = rotateArray(foundVowels);

  for (let i = 0; i < chars.length; i++) {
    const currentChar = chars[i];

    if (vowels.includes(currentChar)) {
      const newChar = shiftedVowels.shift();
      wordToReturn.push(newChar);
    } else {
      wordToReturn.push(currentChar);
    }
  }

  return wordToReturn.join('');
}

console.log(vowel_rotate('computer')); // => "cempotur"
console.log(vowel_rotate('oranges')); // => "erongas"
console.log(vowel_rotate('headphones')); // => "heedphanos"
console.log(vowel_rotate('bootcamp')); // => "baotcomp"
console.log(vowel_rotate('awesome')); // => "ewasemo"

/*
Extend the string class by defining a String#select method 
that accepts a block. The method should return a new 
string containing characters of the original string 
that return true when passed into the block. If no block 
is passed, then return the empty string. Do not use 
the built-in Array#select in your solution.

# Examples
"app academy".select { |ch| !"aeiou".include?(ch) }   # => "pp cdmy"
"HELLOworld".select { |ch| ch == ch.upcase }          # => "HELLO"
"HELLOworld".select          # => ""
*/

function stringSelect(string) {}

/*
Extend the string class by defining a String#map! method 
that accepts a block. The method should modify the 
existing string by replacing every character with the 
result of calling the block, passing in the original 
character and it's index. Do not use the built-in 
Array#map or Array#map! in your solution.
*/

function stringMap() {}

/*
Write a method multiply(a, b) that takes in two numbers 
and returns their product.

You must solve this recursively (no loops!)
You must not use the multiplication (*) operator

# Examples
multiply(3, 5)        # => 15
multiply(5, 3)        # => 15
multiply(2, 4)        # => 8
multiply(0, 10)       # => 0
multiply(-3, -6)      # => 18
multiply(3, -6)       # => -18
multiply(-3, 6)       # => -18
*/

function multiply(num1, num2) {
  if (num1 === 1 || num2 === 1) {
    return; //other number
  }
}
