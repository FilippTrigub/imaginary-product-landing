/**
 * Exercise 9: Find Max Number
 * Difficulty: 🟢 Beginner
 *
 * PROBLEM:
 * Write a function that finds and returns the largest number in an array.
 * If the array is empty, return null.
 *
 * EXAMPLES:
 * findMax([1, 5, 3, 9, 2]) → 9
 * findMax([100, 50, 75]) → 100
 * findMax([-5, -10, -1]) → -1
 * findMax([]) → null
 */

function findMax(arr) {
  // YOUR CODE HERE
}

// Test Cases
console.log("Exercise 9: Find Max Number");
console.log("===========================");
console.log(findMax([1, 5, 3, 9, 2]) === 9 ? "✓ Test 1 passed" : "✗ Test 1 failed");
console.log(findMax([100, 50, 75]) === 100 ? "✓ Test 2 passed" : "✗ Test 2 failed");
console.log(findMax([-5, -10, -1]) === -1 ? "✓ Test 3 passed" : "✗ Test 3 failed");
console.log(findMax([]) === null ? "✓ Test 4 passed" : "✗ Test 4 failed");
console.log(findMax([42]) === 42 ? "✓ Test 5 passed" : "✗ Test 5 failed");
console.log(findMax([0, 0, 0]) === 0 ? "✓ Test 6 passed" : "✗ Test 6 failed");
