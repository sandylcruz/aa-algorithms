/*
Write a function to flatten a nested dictionary. Namespace the keys with a period.
*/

const flattenDictionary = (dictionary) => {
  const newDictionary = {};

  return newDictionary;
};

const dictionary = {
  key: 3,
  foo: {
    a: 5,
    bar: {
      baz: 8,
    },
  },
};

console.log(flattenDictionary(dictionary)); // =>
// {
//     "key": 3,
//     "foo.a": 5,
//     "foo.bar.baz": 8
// }
