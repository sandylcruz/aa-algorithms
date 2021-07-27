// tabulated solution

const tabulatedFib = (num) => {
  let table = new Array(num + 1);
  table[0] = 0;
  table[1] = 1;

  for (let i = 2; i < table.length; i++) {
    table[i] = table[i - 1] + table[i - 2];
  }
  console.log(table);

  return table[num];
};

// console.log(tabulatedFib(7));

// optimal solution
const fib = (num) => {
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

const wordBreak = (string, dictionary) => {
  // table size should be equal to string length
  let table = new Array(string.length + 1);
  // empty string is recognized. table[0] is always true
  table[0] = true;

  for (let i = 0; i < table.length; i++) {
    // iterate through potential starting points for our next word; consider only if entry on table is true;
    // if table at this position is a starting point, continue
    if (table[i] === false) continue;

    for (let j = i + 1)
  }
};

console.log(wordBreak('leetcode', ['leet', 'code'])); // => true
console.log(wordBreak('applepen', ['apple', 'pen'])); // => true
