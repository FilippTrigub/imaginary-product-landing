/**
 * Exercise 8: Sum All Numbers
 * Difficulty: 🟢 Beginner
 *
 * PROBLEM:
 * Write a function that returns the sum of all numbers in an array.
 *
 * EXAMPLES:
 * sumArray([1, 2, 3, 4, 5]) → 15
 * sumArray([10, 20, 30]) → 60
 * sumArray([]) → 0
 * sumArray([-5, 5, -10, 10]) → 0
 */

function sumArray(arr) {
  // YOUR CODE HERE
}

// Test Cases
console.log("Exercise 8: Sum All Numbers");
console.log("===========================");
console.log(sumArray([1, 2, 3, 4, 5]) === 15 ? "✓ Test 1 passed" : "✗ Test 1 failed");
console.log(sumArray([10, 20, 30]) === 60 ? "✓ Test 2 passed" : "✗ Test 2 failed");
console.log(sumArray([]) === 0 ? "✓ Test 3 passed" : "✗ Test 3 failed");
console.log(sumArray([-5, 5, -10, 10]) === 0 ? "✓ Test 4 passed" : "✗ Test 4 failed");
console.log(sumArray([0, 0, 0]) === 0 ? "✓ Test 5 passed" : "✗ Test 5 failed");
console.log(sumArray([100]) === 100 ? "✓ Test 6 passed" : "✗ Test 6 failed");
