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

console.log(tabulatedFib(7));

// optimal solution
// const fib = (num) => {
//   if (num === 0) return 0;
//   if (num === 1) return 1;

//   let secondLast = 0;
//   let last = 1;

//   for (let i = 2; i <= num; i++) {
//     let temp = last;
//     last = last + secondLast;
//     secondLast = temp;
//   }

//   return last;
// };

// console.log(fib(7));
