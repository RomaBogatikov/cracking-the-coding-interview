// Problem 1.9 'String Rotation'
// Assume you have a method isSubstring which checks if one word is a substring of another. Given two strings, s1 ans s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring (e.g. 'waterbottle' is a rotation of 'erbottlewat')

const isRotation = (s1, s2) => {
  const s1Arr = s1.split('');
  const s2Arr = s2.split('');
  const arrBuffer = Array(s2Arr.length).fill();

  for (let i = 0; i < s1Arr.length; i++) {
    let flag = true;
    for (let j = 0; j < s2Arr.length; j++) {
      if (s1Arr[i] === s2Arr[j] && flag) {
        arrBuffer[i] = s2Arr[j];
        s2Arr[j] = null;
        flag = false;
      }
      if (flag === false) break;
    }
  }
  // return arrBuffer;
  // basically, === opertor here is equal to one call of a provided isSubstring() method. In some languages (like C) there should be a separate method to compare strings
  return arrBuffer.join('') === s1;
}

console.log(isRotation('waterbottle', 'erbottlewat'));
