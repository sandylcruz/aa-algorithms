// tabulated solution
const tabulatedFib = (num: number) => {
  let table = new Array(num + 1);
  table[0] = 0;
  table[1] = 1;

  // complete the table by moving from left to right,
  // following the fibonacci pattern
  for (let i = 2; i < table.length; i++) {
    table[i] = table[i - 1] + table[i - 2];
  }
  console.log(table);
  return table[num];
};

// console.log(tabulatedFib(7));

// optimal solution
const fib3 = (num: number) => {
  if (num === 0) return 0;
  if (num === 1) return 1;

  let secondLast = 0;
  let last = 1;

  for (let i = 2; i <= num; i++) {
    let temp = last;
    last = last + secondLast;
    secondLast = temp;
  }

  return last;
};

// console.log(fib(7));

// Word break
/*
Given a string s and a dictionary of strings wordDict, return true if s can 
be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in 
the segmentation.
*/

const wordBreak = (string: string, dictionary: Array<string>) => {
  // table size should be equal to string length + 1 because it's zero based
  // initialize table to contain all falses at start
  let table = new Array(string.length + 1).fill(false);
  // empty string is recognized. table[0] is always true
  table[0] = true;

  for (let i = 0; i < table.length; i++) {
    // iterate through potential starting points for our next word; consider only if entry on table is true;
    // if table at this position is a starting point, continue

    // iterate through possible starting points
    // if table says we can't start here, skip to next position
    // if false, don't use at starting point because there's no legal way to break up the word

    if (table[i] === false) continue;

    // if table[i] is true, then iterate potential ending points
    // ending point must be after starter
    for (let j = i + 1; j < table.length; j++) {
      // start at start index, and end before end index j
      let word = string.slice(i, j);
      if (dictionary.includes(word)) {
        table[j] = true;
      }
    }
  }

  // console.log(table);
  return table[table.length - 1];
};

console.log(wordBreak('leetcode', ['leet', 'code'])); // => true
console.log(wordBreak('applepen', ['app', 'apple', 'pen'])); // => true
console.log(wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat'])); // => false

// time complexity: O(n^2)
