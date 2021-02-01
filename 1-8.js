// Problem 1.8 'Zero Matrix'
// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0

const setToZero = (matrix) => {
  let resultMatrix = Array(matrix.length).fill().map(() => Array(matrix[0].length).fill());
  console.log(resultMatrix)
  const setZeros = (column, row, columnsTotal, rowsTotal) => {
    // set column to 0
    for (let n = 0; n < rowsTotal; n++) {
      resultMatrix[n][column] = 0;
    }
    // set row to 0
    for (let m = 0; m < columnsTotal; m++) {
      resultMatrix[row][m] = 0;
    }
  };

  for (let m = 0; m < matrix[0].length; m++) {
    for (let n = 0; n < matrix.length; n++) {
      if (matrix[n][m] === 0) {
        console.log('n=', n);
        console.log('m=', m);
        setZeros(m, n, matrix[0].length, matrix.length);
        continue;
      }
      if (resultMatrix[n][m] !== 0) {
        resultMatrix[n][m] = matrix[n][m];
      }
    }
  }
  return resultMatrix;
}

console.log(setToZero(
  [
    [1, 2, 3],
    [4, 0, 6],
    [7, 8, 9],
    [10, 11, 0]
  ]
));
