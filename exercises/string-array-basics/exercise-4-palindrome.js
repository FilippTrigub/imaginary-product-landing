/**
 * Exercise 4: Check Palindrome
 * Difficulty: 🟡 Intermediate
 *
 * PROBLEM:
 * Write a function that checks if a string is a palindrome.
 * A palindrome reads the same forwards and backwards.
 * Ignore spaces and case sensitivity.
 *
 * EXAMPLES:
 * isPalindrome("racecar") → true
 * isPalindrome("hello") → false
 * isPalindrome("A man a plan a canal Panama") → true
 * isPalindrome("Was it a car or a cat I saw") → true
 */

function isPalindrome(str) {
  // YOUR CODE HERE
}

// Test Cases
console.log("Exercise 4: Check Palindrome");
console.log("===========================");
console.log(isPalindrome("racecar") === true ? "✓ Test 1 passed" : "✗ Test 1 failed");
console.log(isPalindrome("hello") === false ? "✓ Test 2 passed" : "✗ Test 2 failed");
console.log(isPalindrome("A man a plan a canal Panama") === true ? "✓ Test 3 passed" : "✗ Test 3 failed");
console.log(isPalindrome("Was it a car or a cat I saw") === true ? "✓ Test 4 passed" : "✗ Test 4 failed");
console.log(isPalindrome("level") === true ? "✓ Test 5 passed" : "✗ Test 5 failed");
console.log(isPalindrome("12321") === true ? "✓ Test 6 passed" : "✗ Test 6 failed");
