/**
 * Exercise 2: Reverse a String
 * Difficulty: 🟢 Beginner
 *
 * PROBLEM:
 * Write a function that takes a string and returns it reversed.
 *
 * HINT: Consider converting the string to an array, using array methods,
 * then converting back to a string.
 *
 * EXAMPLES:
 * reverseString("hello") → "olleh"
 * reverseString("JavaScript") → "tpircSavaJ"
 * reverseString("12345") → "54321"
 */

function reverseString(str) {
  // YOUR CODE HERE
}

// Test Cases
console.log("Exercise 2: Reverse a String");
console.log("============================");
console.log(reverseString("hello") === "olleh" ? "✓ Test 1 passed" : "✗ Test 1 failed");
console.log(reverseString("JavaScript") === "tpircSavaJ" ? "✓ Test 2 passed" : "✗ Test 2 failed");
console.log(reverseString("12345") === "54321" ? "✓ Test 3 passed" : "✗ Test 3 failed");
console.log(reverseString("a") === "a" ? "✓ Test 4 passed" : "✗ Test 4 failed");
console.log(reverseString("") === "" ? "✓ Test 5 passed" : "✗ Test 5 failed");
