/*
Given a roman numeral, convert it to an integer.
There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
*/

const romanToInteger = (string) => {
  const convertedInteger = 0;
  const characters = string.split('');

  for (let i = 0; i < characters.length; i++) {}

  return convertedInteger;
};

console.log(romanToInteger('III'));
console.log(romanToInteger('IV'));
console.log(romanToInteger('VI'));
console.log(romanToInteger('VII'));
console.log(romanToInteger('VIII'));
console.log(romanToInteger('IX'));
