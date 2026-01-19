/**
 * Exercise 5: Extract Numbers
 * Difficulty: 🟡 Intermediate
 *
 * PROBLEM:
 * Write a function that extracts all numbers from a string and returns
 * them as an array of numbers (not strings).
 *
 * EXAMPLES:
 * extractNumbers("I have 2 apples and 5 oranges") → [2, 5]
 * extractNumbers("Phone: 555-1234-9876") → [555, 1234, 9876]
 * extractNumbers("No numbers here!") → []
 * extractNumbers("123abc456def789") → [123, 456, 789]
 */

function extractNumbers(str) {
  // YOUR CODE HERE
}

// Test Cases
console.log("Exercise 5: Extract Numbers");
console.log("===========================");

const test1 = extractNumbers("I have 2 apples and 5 oranges");
console.log(
  test1.length === 2 && test1[0] === 2 && test1[1] === 5 ? "✓ Test 1 passed" : "✗ Test 1 failed"
);

const test2 = extractNumbers("Phone: 555-1234-9876");
console.log(
  test2.length === 3 && test2[0] === 555 && test2[1] === 1234 ? "✓ Test 2 passed" : "✗ Test 2 failed"
);

const test3 = extractNumbers("No numbers here!");
console.log(test3.length === 0 ? "✓ Test 3 passed" : "✗ Test 3 failed");

const test4 = extractNumbers("123abc456def789");
console.log(
  test4.length === 3 && test4[0] === 123 && test4[2] === 789 ? "✓ Test 4 passed" : "✗ Test 4 failed"
);
