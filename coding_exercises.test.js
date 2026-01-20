/*
  Test Cases for Coding Exercises: Array Manipulation in JavaScript

  To run these tests, you would typically use a test runner like Jest.
  For simplicity, we'll just log the results to the console.
*/

// Import the functions from coding_exercises.js (assuming they are in the same directory)
// In a real testing environment, you might use 'require' or 'import'
// For this standalone test file, we'll assume the functions are defined globally or imported.

const { sumArray, findMax, filterEvenNumbers, reverseArray, removeDuplicates } = require('./coding_exercises.js');



console.log("\n--- Running Tests ---\n");

// Exercise 1: Sum Array Elements
console.log("Exercise 1: Sum Array Elements");
console.log(`Test 1: [1, 2, 3, 4, 5] -> Expected: 15, Got: ${sumArray([1, 2, 3, 4, 5])}`);
console.log(`Test 2: [] -> Expected: 0, Got: ${sumArray([])}`);
console.log(`Test 3: [10] -> Expected: 10, Got: ${sumArray([10])}`);
console.log(`Test 4: [-1, 0, 1] -> Expected: 0, Got: ${sumArray([-1, 0, 1])}`);

// Exercise 2: Find Maximum Value
console.log("\nExercise 2: Find Maximum Value");
console.log(`Test 1: [10, 4, 7, 20, 5] -> Expected: 20, Got: ${findMax([10, 4, 7, 20, 5])}`);
console.log(`Test 2: [-1, -5, -2] -> Expected: -1, Got: ${findMax([-1, -5, -2])}`);
console.log(`Test 3: [] -> Expected: -Infinity, Got: ${findMax([])}`);
console.log(`Test 4: [42] -> Expected: 42, Got: ${findMax([42])}`);

// Exercise 3: Filter Even Numbers
console.log("\nExercise 3: Filter Even Numbers");
console.log(`Test 1: [1, 2, 3, 4, 5, 6] -> Expected: [2, 4, 6], Got: ${JSON.stringify(filterEvenNumbers([1, 2, 3, 4, 5, 6]))}`);
console.log(`Test 2: [7, 9, 11] -> Expected: [], Got: ${JSON.stringify(filterEvenNumbers([7, 9, 11]))}`);
console.log(`Test 3: [2, 4, 6] -> Expected: [2, 4, 6], Got: ${JSON.stringify(filterEvenNumbers([2, 4, 6]))}`);
console.log(`Test 4: [] -> Expected: [], Got: ${JSON.stringify(filterEvenNumbers([]))}`);

// Exercise 4: Reverse Array
console.log("\nExercise 4: Reverse Array");
console.log(`Test 1: [1, 2, 3, 4] -> Expected: [4, 3, 2, 1], Got: ${JSON.stringify(reverseArray([1, 2, 3, 4]))}`);
console.log(`Test 2: ['a', 'b', 'c'] -> Expected: ['c', 'b', 'a'], Got: ${JSON.stringify(reverseArray(['a', 'b', 'c']))}`);
console.log(`Test 3: [] -> Expected: [], Got: ${JSON.stringify(reverseArray([]))}`);
console.log(`Test 4: [5] -> Expected: [5], Got: ${JSON.stringify(reverseArray([5]))}`);

// Exercise 5: Remove Duplicates
console.log("\nExercise 5: Remove Duplicates");
console.log(`Test 1: [1, 2, 2, 3, 4, 4, 5] -> Expected: [1, 2, 3, 4, 5], Got: ${JSON.stringify(removeDuplicates([1, 2, 2, 3, 4, 4, 5]))}`);
console.log(`Test 2: ['a', 'b', 'a', 'c'] -> Expected: ['a', 'b', 'c'], Got: ${JSON.stringify(removeDuplicates(['a', 'b', 'a', 'c']))}`);
console.log(`Test 3: [] -> Expected: [], Got: ${JSON.stringify(removeDuplicates([]))}`);
console.log(`Test 4: [1, 1, 1] -> Expected: [1], Got: ${JSON.stringify(removeDuplicates([1, 1, 1]))}`);
console.log(`Test 5: [1, 2, 3] -> Expected: [1, 2, 3], Got: ${JSON.stringify(removeDuplicates([1, 2, 3]))}`);
