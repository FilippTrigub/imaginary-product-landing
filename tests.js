// Import solutions (update path if needed)
const solutions = require('./solutions.js');

// Test utility function
function runTest(testName, testFn) {
  try {
    testFn();
    console.log(`✓ ${testName}`);
  } catch (error) {
    console.error(`✗ ${testName}: ${error.message}`);
  }
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message || 'Assertion failed');
  }
}

function assertEqual(actual, expected, message) {
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    throw new Error(message || `Expected ${JSON.stringify(expected)}, but got ${JSON.stringify(actual)}`);
  }
}

// ===== Challenge 1: Reverse String Tests =====
console.log('\n--- Challenge 1: Reverse String ---');
runTest('reverseString("hello")', () => {
  assertEqual(solutions.reverseString('hello'), 'olleh');
});

runTest('reverseString("JavaScript")', () => {
  assertEqual(solutions.reverseString('JavaScript'), 'tpircSavaJ');
});

runTest('reverseString("")', () => {
  assertEqual(solutions.reverseString(''), '');
});

runTest('reverseString("a")', () => {
  assertEqual(solutions.reverseString('a'), 'a');
});

// ===== Challenge 2: Longest Word Tests =====
console.log('\n--- Challenge 2: Longest Word ---');
runTest('longestWord("The quick brown fox jumps over")', () => {
  assertEqual(solutions.longestWord('The quick brown fox jumps over'), 'quick');
});

runTest('longestWord("JavaScript is awesome")', () => {
  assertEqual(solutions.longestWord('JavaScript is awesome'), 'JavaScript');
});

runTest('longestWord("a")', () => {
  assertEqual(solutions.longestWord('a'), 'a');
});

runTest('longestWord("one two three four five")', () => {
  assertEqual(solutions.longestWord('one two three four five'), 'three');
});

// ===== Challenge 3: Prime Number Tests =====
console.log('\n--- Challenge 3: Prime Number ---');
runTest('isPrime(7)', () => {
  assert(solutions.isPrime(7) === true);
});

runTest('isPrime(10)', () => {
  assert(solutions.isPrime(10) === false);
});

runTest('isPrime(2)', () => {
  assert(solutions.isPrime(2) === true);
});

runTest('isPrime(1)', () => {
  assert(solutions.isPrime(1) === false);
});

runTest('isPrime(0)', () => {
  assert(solutions.isPrime(0) === false);
});

runTest('isPrime(97)', () => {
  assert(solutions.isPrime(97) === true);
});

runTest('isPrime(100)', () => {
  assert(solutions.isPrime(100) === false);
});

// ===== Challenge 4: Remove Duplicates Tests =====
console.log('\n--- Challenge 4: Remove Duplicates ---');
runTest('removeDuplicates([1, 2, 2, 3, 4, 4, 5])', () => {
  assertEqual(solutions.removeDuplicates([1, 2, 2, 3, 4, 4, 5]), [1, 2, 3, 4, 5]);
});

runTest("removeDuplicates(['a', 'b', 'a', 'c'])", () => {
  assertEqual(solutions.removeDuplicates(['a', 'b', 'a', 'c']), ['a', 'b', 'c']);
});

runTest("removeDuplicates([1, '1', 1, 2, '2'])", () => {
  assertEqual(solutions.removeDuplicates([1, '1', 1, 2, '2']), [1, '1', 2, '2']);
});

runTest('removeDuplicates([])', () => {
  assertEqual(solutions.removeDuplicates([]), []);
});

// ===== Challenge 5: Fibonacci Tests =====
console.log('\n--- Challenge 5: Fibonacci Sequence ---');
runTest('fibonacciSequence(5)', () => {
  assertEqual(solutions.fibonacciSequence(5), [0, 1, 1, 2, 3]);
});

runTest('fibonacciSequence(7)', () => {
  assertEqual(solutions.fibonacciSequence(7), [0, 1, 1, 2, 3, 5, 8]);
});

runTest('fibonacciSequence(1)', () => {
  assertEqual(solutions.fibonacciSequence(1), [0]);
});

runTest('fibonacciSequence(0)', () => {
  assertEqual(solutions.fibonacciSequence(0), []);
});

runTest('fibonacciMax(10)', () => {
  assertEqual(solutions.fibonacciMax(10), [0, 1, 1, 2, 3, 5, 8]);
});

runTest('fibonacciMax(50)', () => {
  assertEqual(solutions.fibonacciMax(50), [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
});

console.log('\n--- Test Suite Complete ---');
