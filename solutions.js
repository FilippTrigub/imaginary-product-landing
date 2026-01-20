/**
 * JAVASCRIPT CODING CHALLENGES - REFERENCE SOLUTIONS
 *
 * This file contains reference implementations for all 5 coding challenges.
 * These solutions demonstrate best practices and meet the specified constraints.
 */

// ===== Challenge 1: Reverse a String =====
/**
 * Reverses a string without using the built-in reverse() method
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// Alternative solution using array destructuring and join
function reverseStringAlt(str) {
  return [...str].reverse().join('');
}

// ===== Challenge 2: Find the Longest Word =====
/**
 * Returns the longest word in a string
 * If multiple words have the same length, returns the first one
 * Time Complexity: O(n) where n is the total number of characters
 * Space Complexity: O(n) for the words array
 */
function longestWord(str) {
  const words = str.split(' ');
  let longest = words[0];

  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }

  return longest;
}

// Alternative solution using reduce
function longestWordAlt(str) {
  return str.split(' ').reduce((longest, word) => {
    return word.length > longest.length ? word : longest;
  });
}

// ===== Challenge 3: Check if a Number is Prime =====
/**
 * Determines if a number is prime
 * A prime number is only divisible by 1 and itself
 * Time Complexity: O(√n)
 * Space Complexity: O(1)
 */
function isPrime(num) {
  // Numbers less than 2 are not prime
  if (num < 2) {
    return false;
  }

  // 2 is the only even prime number
  if (num === 2) {
    return true;
  }

  // All even numbers greater than 2 are not prime
  if (num % 2 === 0) {
    return false;
  }

  // Check odd divisors up to √num
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// ===== Challenge 4: Array Deduplication =====
/**
 * Removes duplicate values from an array while maintaining order of first occurrence
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function removeDuplicates(arr) {
  const seen = new Set();
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!seen.has(arr[i])) {
      seen.add(arr[i]);
      result.push(arr[i]);
    }
  }

  return result;
}

// Alternative solution using filter with indexOf
function removeDuplicatesAlt(arr) {
  return arr.filter((value, index) => arr.indexOf(value) === index);
}

// Note: The filter approach is simpler but has O(n²) time complexity
// The Set approach is better for larger arrays

// ===== Challenge 5: Fibonacci Sequence Generator =====
/**
 * Generates Fibonacci sequence with specified count
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function fibonacciSequence(count) {
  if (count <= 0) {
    return [];
  }

  if (count === 1) {
    return [0];
  }

  const sequence = [0, 1];

  for (let i = 2; i < count; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  return sequence;
}

/**
 * Generates Fibonacci sequence up to maximum value
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function fibonacciMax(maxValue) {
  const sequence = [0, 1];

  while (true) {
    const nextValue = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    if (nextValue > maxValue) {
      break;
    }
    sequence.push(nextValue);
  }

  return sequence;
}

// Export all functions
module.exports = {
  reverseString,
  reverseStringAlt,
  longestWord,
  longestWordAlt,
  isPrime,
  removeDuplicates,
  removeDuplicatesAlt,
  fibonacciSequence,
  fibonacciMax
};
