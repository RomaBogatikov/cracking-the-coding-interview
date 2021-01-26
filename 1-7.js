// Problem 1.7 'Rotate Matrix'
// Given an image represented by an nxm matrix ,where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees

const rotate = (matrix) => {
  const rotatedMatrix = [];
  const numberOfColumnsInMatrix = matrix[0].length;
  const numberOfRowsInMatrix = matrix.length;
  // n is number of rows in a rotated matrix
  // m is number of columns in a rotated matrix
  for (let n = 0; n < numberOfColumnsInMatrix; n++) {
    rotatedMatrix[n] = [];
    for (let m = 0; m < numberOfRowsInMatrix; m++) {
      rotatedMatrix[n].unshift(matrix[m].shift())
    }
  }
  return rotatedMatrix;
}

console.log(rotate(
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12]
  ]
));
