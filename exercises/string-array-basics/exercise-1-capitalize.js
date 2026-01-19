/**
 * Exercise 1: Capitalize First Letter
 * Difficulty: 🟢 Beginner
 *
 * PROBLEM:
 * Write a function that takes a string and returns it with the first letter
 * capitalized and the rest in lowercase.
 *
 * EXAMPLES:
 * capitalizeFirst("hello") → "Hello"
 * capitalizeFirst("WORLD") → "World"
 * capitalizeFirst("jAvAsCrIpT") → "Javascript"
 */

function capitalizeFirst(str) {
  // YOUR CODE HERE
}

// Test Cases
console.log("Exercise 1: Capitalize First Letter");
console.log("=====================================");
console.log(capitalizeFirst("hello") === "Hello" ? "✓ Test 1 passed" : "✗ Test 1 failed");
console.log(capitalizeFirst("WORLD") === "World" ? "✓ Test 2 passed" : "✗ Test 2 failed");
console.log(capitalizeFirst("jAvAsCrIpT") === "Javascript" ? "✓ Test 3 passed" : "✗ Test 3 failed");
console.log(capitalizeFirst("a") === "A" ? "✓ Test 4 passed" : "✗ Test 4 failed");
console.log(capitalizeFirst("") === "" ? "✓ Test 5 passed" : "✗ Test 5 failed");
