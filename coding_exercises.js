/*
  Coding Exercises: Array Manipulation in JavaScript

  These exercises focus on common array manipulation techniques in JavaScript.
  Solve each problem by writing a function that fulfills the given requirements.
  Aim for efficient and readable solutions.

  ---

  Exercise 1: Sum Array Elements

  Write a function called `sumArray` that takes an array of numbers as input
  and returns the sum of all its elements.

  Example:
  sumArray([1, 2, 3, 4, 5]); // Expected output: 15
  sumArray([]);             // Expected output: 0

*/
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

/*
  ---

  Exercise 2: Find Maximum Value

  Write a function called `findMax` that takes an array of numbers as input
  and returns the largest number in the array. If the array is empty, return -Infinity.

  Example:
  findMax([10, 4, 7, 20, 5]); // Expected output: 20
  findMax([-1, -5, -2]);      // Expected output: -1
  findMax([]);                // Expected output: -Infinity

*/
function findMax(arr) {
  if (arr.length === 0) {
    return -Infinity;
  }
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

/*
  ---

  Exercise 3: Filter Even Numbers

  Write a function called `filterEvenNumbers` that takes an array of numbers as input
  and returns a new array containing only the even numbers from the original array.

  Example:
  filterEvenNumbers([1, 2, 3, 4, 5, 6]); // Expected output: [2, 4, 6]
  filterEvenNumbers([7, 9, 11]);        // Expected output: []

*/
function filterEvenNumbers(arr) {
  const evenNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumbers.push(arr[i]);
    }
  }
  return evenNumbers;
}

/*
  ---

  Exercise 4: Reverse Array

  Write a function called `reverseArray` that takes an array as input
  and returns a new array with the elements in reverse order.
  Do not use the built-in `reverse()` method.

  Example:
  reverseArray([1, 2, 3, 4]);    // Expected output: [4, 3, 2, 1]
  reverseArray(['a', 'b', 'c']); // Expected output: ['c', 'b', 'a']

*/
function reverseArray(arr) {
  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

/*
  ---

  Exercise 5: Remove Duplicates

  Write a function called `removeDuplicates` that takes an array as input
  and returns a new array with all duplicate elements removed.
  The order of the remaining elements should be preserved.

  Example:
  removeDuplicates([1, 2, 2, 3, 4, 4, 5]); // Expected output: [1, 2, 3, 4, 5]
  removeDuplicates(['a', 'b', 'a', 'c']); // Expected output: ['a', 'b', 'c']

*/
function removeDuplicates(arr) {
  const uniqueElements = [];
  const seen = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (!seen.has(arr[i])) {
      uniqueElements.push(arr[i]);
      seen.add(arr[i]);
    }
  }
  return uniqueElements;
}

module.exports = {
  sumArray,
  findMax,
  filterEvenNumbers,
  reverseArray,
  removeDuplicates,
};