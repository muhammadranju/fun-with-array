/**
The nested for loop in lecture5.js:

This nested for loop iterates through a 2D array called numbers and logs each number to the console.

The outer for loop iterates through the outer array numbers using the index variable i. This will loop through each inner array contained within numbers.

The inner for loop iterates through each inner array using the index variable j. This will loop through each element within the current inner array.

On each iteration of the inner loop, the current number is accessed as numbers[i][j] and logged to the console.

So this nested loop structure allows us to iterate through a 2D array, accessing each inner array and the elements within it. The end result is that each number in the 2D numbers array is logged individually.

The input is the pre-defined 2D array numbers. The output is logging each number to the console. The nested for loops provide the logic to iterate through the rows and columns of the 2D array to access each element.

Overall, this nested loop allows us to perform some operation on each element in a 2D array data structure by iterating through it row by row, column by column. Here the operation is simply logging each number, but we could perform any other logic as needed.

 * 
 * Defines a 2D array of numbers.
 *
 * The `numbers` array contains three inner arrays, each with three numbers.
 * This data structure can be used to represent a 3x3 grid or matrix of numbers.
 */
const numbers = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

/**
 * Logs each number in the 2D `numbers` array to the console.
 */
// Iterate over each sub-array in the 'numbers' array
for (let i = 0; i < numbers.length; i++) {
  // Iterate over each element in the current sub-array
  for (let j = 0; j < numbers[i].length; j++) {
    // Log the value of each element to the console
    // console.log(numbers[i][j]);
  }
}

const matrixA = [
  [1, 3],
  [1, 0],
  [1, 2],
];
const matrixB = [
  [0, 0],
  [7, 5],
  [2, 1],
];

const matrixSum = (matrixA, matrixB) => {
  const result = [];

  for (let i = 0; i < matrixA.length; i++) {
    const row = [];
    for (let j = 0; j < matrixA[i].length; j++) {
      row.push(matrixA[i][j] + matrixB[i][j]);
    }
    result.push(row);
  }
  return result;
};

const matrixC = matrixSum(matrixA, matrixB);
console.log(matrixC);
