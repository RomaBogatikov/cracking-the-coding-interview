// Problem 1.2
// Given two strings, write a method to decide if one is a permutation of the other

const isPermutation = (str1, str2) => {
  const hashFromString = (str) => (
    str.split('').reduce((acc, char) => {
      if (!acc[char]) {
        acc[char] = 1;
      } else {
        acc[char]++;
      }
      return acc;
    }, {})
  );

  let str1Hash = hashFromString(str1);
  let str2Hash = hashFromString(str2);

  if (Object.keys(str1Hash).length !== Object.keys(str2Hash).length) {
    return false;
  }

  const isNumOfCharsSame = Object.keys(str1Hash).every((char) => str1Hash[char] === str2Hash[char]);

  return isNumOfCharsSame;
};


console.log(isPermutation('abc', 'bcaa'))
