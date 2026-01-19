/**
 * Exercise 3: Count Characters
 * Difficulty: 🟢 Beginner
 *
 * PROBLEM:
 * Write a function that returns an object with the count of each character
 * in a string (case-sensitive). Spaces should be ignored.
 *
 * EXAMPLES:
 * countCharacters("hello") → { h: 1, e: 1, l: 2, o: 1 }
 * countCharacters("aabbcc") → { a: 2, b: 2, c: 2 }
 * countCharacters("hello world") → { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }
 */

function countCharacters(str) {
  // YOUR CODE HERE
}

// Test Cases
console.log("Exercise 3: Count Characters");
console.log("============================");

const test1 = countCharacters("hello");
console.log(test1.l === 2 && test1.h === 1 ? "✓ Test 1 passed" : "✗ Test 1 failed");

const test2 = countCharacters("aabbcc");
console.log(test2.a === 2 && test2.b === 2 && test2.c === 2 ? "✓ Test 2 passed" : "✗ Test 2 failed");

const test3 = countCharacters("hello world");
console.log(test3.l === 3 && test3.o === 2 ? "✓ Test 3 passed" : "✗ Test 3 failed");

const test4 = countCharacters("aaa");
console.log(test4.a === 3 ? "✓ Test 4 passed" : "✗ Test 4 failed");

const test5 = countCharacters("");
console.log(Object.keys(test5).length === 0 ? "✓ Test 5 passed" : "✗ Test 5 failed");
