// Problem 1.4 'Palindrome Permutation
const palindromePermutation = (string) => {
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

  const hash = hashFromString(string.toLowerCase().split(' ').join(''));

  if (string.length % 2 === 0) {
    return Object.keys(hash).every((key) => hash[key] % 2 === 0);
  } else {
    let odd = Object.keys(hash).reduce((acc, char) => {
      if (hash[char] % 2 === 1) {
        acc.push(char);
      }
      return acc;
    }, []);

    return odd.length === 1;
  }
}

console.log(palindromePermutation('aabbcd'));
