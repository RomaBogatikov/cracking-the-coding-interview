// Problem 1.5 'One Away'
// There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.s
const oneAway = (string1, string2) => {
  let numberMismatches = 0;
  let j = 0;
  const isEqualLength = string1.length === string2.length;
  for (let i = 0; i < string1.length; i++) {
    if (numberMismatches > 1) return false;
    if (string1[i] !== string2[j]) {
      numberMismatches++;
      // is length of strings is equal, we can't add/remove
      if (isEqualLength) {
        j++;
        continue;
      };
    }

    // remove/add char from first or second string
    if (string1[i] === string2[j+1]) j++;
    if (string1[i+1] === string2[j]) i++;

    j++;
  }
  return numberMismatches;
}

console.log(oneAway('pales', 'pale'))
