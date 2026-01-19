/**
 * Exercise 6: Word Frequency Counter
 * Difficulty: 🟡 Intermediate
 *
 * PROBLEM:
 * Write a function that counts the frequency of each word in a sentence.
 * Return an object with words as keys and frequencies as values.
 * Words should be lowercase and punctuation should be ignored.
 *
 * EXAMPLES:
 * wordFrequency("hello world hello") → { hello: 2, world: 1 }
 * wordFrequency("The quick brown fox jumps over the lazy dog")
 *   → { the: 2, quick: 1, brown: 1, fox: 1, jumps: 1, over: 1, lazy: 1, dog: 1 }
 * wordFrequency("a a a b b c") → { a: 3, b: 2, c: 1 }
 */

function wordFrequency(sentence) {
  // YOUR CODE HERE
}

// Test Cases
console.log("Exercise 6: Word Frequency Counter");
console.log("==================================");

const test1 = wordFrequency("hello world hello");
console.log(test1.hello === 2 && test1.world === 1 ? "✓ Test 1 passed" : "✗ Test 1 failed");

const test2 = wordFrequency("The quick brown fox jumps over the lazy dog");
console.log(test2.the === 2 && test2.quick === 1 ? "✓ Test 2 passed" : "✗ Test 2 failed");

const test3 = wordFrequency("a a a b b c");
console.log(test3.a === 3 && test3.b === 2 && test3.c === 1 ? "✓ Test 3 passed" : "✗ Test 3 failed");

const test4 = wordFrequency("hello, world! hello?");
console.log(test4.hello === 2 && test4.world === 1 ? "✓ Test 4 passed" : "✗ Test 4 failed");
