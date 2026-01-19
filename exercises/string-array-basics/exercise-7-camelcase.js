/**
 * Exercise 7: Camel Case Converter
 * Difficulty: 🔴 Advanced
 *
 * PROBLEM:
 * Write a function that converts a string to camelCase.
 * Handle multiple word separators: spaces, hyphens, and underscores.
 * The first word should be lowercase, subsequent words capitalized.
 *
 * EXAMPLES:
 * toCamelCase("hello world") → "helloWorld"
 * toCamelCase("hello-world") → "helloWorld"
 * toCamelCase("hello_world_foo") → "helloWorldFoo"
 * toCamelCase("HELLO WORLD") → "helloWorld"
 * toCamelCase("helloWorld") → "helloWorld"
 */

function toCamelCase(str) {
  // YOUR CODE HERE
}

// Test Cases
console.log("Exercise 7: Camel Case Converter");
console.log("===============================");
console.log(toCamelCase("hello world") === "helloWorld" ? "✓ Test 1 passed" : "✗ Test 1 failed");
console.log(toCamelCase("hello-world") === "helloWorld" ? "✓ Test 2 passed" : "✗ Test 2 failed");
console.log(
  toCamelCase("hello_world_foo") === "helloWorldFoo" ? "✓ Test 3 passed" : "✗ Test 3 failed"
);
console.log(toCamelCase("HELLO WORLD") === "helloWorld" ? "✓ Test 4 passed" : "✗ Test 4 failed");
console.log(toCamelCase("helloWorld") === "helloWorld" ? "✓ Test 5 passed" : "✗ Test 5 failed");
console.log(toCamelCase("a-b-c-d") === "aBCD" ? "✓ Test 6 passed" : "✗ Test 6 failed");
