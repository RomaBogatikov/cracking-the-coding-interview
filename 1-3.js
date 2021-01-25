// Problem 1.3 'URLify'
// Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the 'true' length of the string
const urlify = (string) => {
  return string.split(' ').join('%20');
}

console.log(urlify('one two three '))
