/**
 * This is a simple script that demonstrates the use of arrays in JavaScript.
 *
 * It initializes an array of numbers from 1 to 9 and adds the number 10 to the end of the array.
 *
 * The numbers array is then logged to the console.
 */

// Define the array of numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// Add the number 10 to the end of the array
// numbers.push(10);

// Log the updated array to the console

// remove first element
// numbers.shift();

// remove last element
// numbers.pop();
// numbers.length = numbers.length - 1;

// const toBeDeleted = 5;

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] === toBeDeleted) {
//     numbers.splice(i, 1);
//   }
// }

const toBeDeleted1 = 8;

/**
 * Removes all elements from the `numbers` array that are equal to the value of `toBeDeleted1`.
 */
numbers = numbers.filter((item) => item !== toBeDeleted1);

console.log(numbers);
