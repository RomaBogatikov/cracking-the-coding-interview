// Problem 1.6 'String Compression'
// Implement a method to perform basic string compression using the counts of repeated characters. For example, the string 'aabcccccaaa' would become 'a2b1c5a3'. If the compressed string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a-z)
const compress = (string) => {
  let compressedStr = '';
  let previous = string[0];
  let count = 1;
  for (let i = 1; i < string.length; i++) {
    if (string[i] === previous) {
      count++;
    } else {
      compressedStr += previous + count;
      previous = string[i];
      count = 1;
    }
  }
  compressedStr += previous + count;
  if (compressedStr.length < string.length) {
    return compressedStr;
  }
  return string;
}

console.log(compress('abca'))
