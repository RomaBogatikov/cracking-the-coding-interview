// Problem 1.1
// implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

const allUnique = (string) => {
  const hash = string.split('').reduce((acc, char) => {
    if (!acc[char]) {
      acc[char] = 1;
    } else {
      acc[char]++;
    }
    return acc;
  }, {})

  return Object.keys(hash).length === string.length
};

// what if you cannot use additional data structures?

const allUnique2 = (string) => {
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    for (let j = i+1; j < string.length; j++) {
      if (char === string[j]) return false;
    }
  }

  return true;
}

console.log(allUnique2('sddfa'));
