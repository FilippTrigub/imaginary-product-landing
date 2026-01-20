/**
 * EXERCISE 8: Algorithm Challenges
 * 
 * Practice common algorithms and problem-solving patterns.
 */

// ============================================
// CHALLENGE 1: Two Sum
// ============================================
/**
 * Given an array of numbers and a target sum,
 * return indices of two numbers that add up to the target
 * 
 * Example: twoSum([2,7,11,15], 9) => [0,1]
 * (because nums[0] + nums[1] = 2 + 7 = 9)
 */

function twoSum(nums, target) {
    // YOUR CODE HERE
}


// ============================================
// CHALLENGE 2: Palindrome Check
// ============================================
/**
 * Check if a string is a palindrome (reads same forwards and backwards)
 * Ignore spaces, punctuation, and case
 * 
 * Example: isPalindrome("A man a plan a canal Panama") => true
 */

function isPalindrome(str) {
    // YOUR CODE HERE
}


// ============================================
// CHALLENGE 3: Anagram Check
// ============================================
/**
 * Check if two strings are anagrams
 * (contain the same characters in different order)
 * 
 * Example: isAnagram("listen", "silent") => true
 */

function isAnagram(str1, str2) {
    // YOUR CODE HERE
}


// ============================================
// CHALLENGE 4: Fibonacci Sequence
// ============================================
/**
 * Generate the first n numbers of the Fibonacci sequence
 * 
 * Example: fibonacci(7) => [0,1,1,2,3,5,8]
 */

function fibonacci(n) {
    // YOUR CODE HERE
}


// ============================================
// CHALLENGE 5: Binary Search
// ============================================
/**
 * Implement binary search on a sorted array
 * Return the index of the target, or -1 if not found
 * 
 * Example: binarySearch([1,3,5,7,9], 5) => 2
 */

function binarySearch(sortedArray, target) {
    // YOUR CODE HERE
}


// ============================================
// CHALLENGE 6: Reverse Words
// ============================================
/**
 * Reverse the order of words in a string
 * 
 * Example: reverseWords("Hello World") => "World Hello"
 */

function reverseWords(str) {
    // YOUR CODE HERE
}


// ============================================
// CHALLENGE 7: Longest Common Prefix
// ============================================
/**
 * Find the longest common prefix among an array of strings
 * 
 * Example: longestCommonPrefix(["flower","flow","flight"]) => "fl"
 */

function longestCommonPrefix(strs) {
    // YOUR CODE HERE
}


// ============================================
// CHALLENGE 8: Valid Parentheses
// ============================================
/**
 * Check if a string of parentheses is valid
 * Valid means every opening bracket has a matching closing bracket
 * in the correct order
 * 
 * Example: isValidParentheses("()[]{}") => true
 * Example: isValidParentheses("([)]") => false
 */

function isValidParentheses(str) {
    // YOUR CODE HERE
}


// ============================================
// CHALLENGE 9: Merge Sorted Arrays
// ============================================
/**
 * Merge two sorted arrays into one sorted array
 * 
 * Example: mergeSorted([1,3,5], [2,4,6]) => [1,2,3,4,5,6]
 */

function mergeSorted(arr1, arr2) {
    // YOUR CODE HERE
}


// ============================================
// CHALLENGE 10: Find Missing Number
// ============================================
/**
 * Given an array containing n distinct numbers from 0 to n,
 * find the missing number
 * 
 * Example: findMissing([0,1,3]) => 2
 */

function findMissing(nums) {
    // YOUR CODE HERE
}


// ============================================
// CHALLENGE 11: Rotate Array
// ============================================
/**
 * Rotate an array to the right by k steps
 * 
 * Example: rotateArray([1,2,3,4,5], 2) => [4,5,1,2,3]
 */

function rotateArray(arr, k) {
    // YOUR CODE HERE
}


// ============================================
// CHALLENGE 12: Longest Substring Without Repeating
// ============================================
/**
 * Find the length of the longest substring without repeating characters
 * 
 * Example: longestUniqueSubstring("abcabcbb") => 3 ("abc")
 */

function longestUniqueSubstring(str) {
    // YOUR CODE HERE
}


// ============================================
// CHALLENGE 13: Prime Numbers
// ============================================
/**
 * Find all prime numbers up to n using Sieve of Eratosthenes
 * 
 * Example: findPrimes(10) => [2,3,5,7]
 */

function findPrimes(n) {
    // YOUR CODE HERE
}


// ============================================
// CHALLENGE 14: Matrix Transpose
// ============================================
/**
 * Transpose a matrix (swap rows and columns)
 * 
 * Example: transpose([[1,2,3],[4,5,6]]) => [[1,4],[2,5],[3,6]]
 */

function transpose(matrix) {
    // YOUR CODE HERE
}


// ============================================
// CHALLENGE 15: Kadane's Algorithm (Max Subarray Sum)
// ============================================
/**
 * Find the contiguous subarray with the largest sum
 * 
 * Example: maxSubarraySum([-2,1,-3,4,-1,2,1,-5,4]) => 6
 * (subarray [4,-1,2,1] has the largest sum)
 */

function maxSubarraySum(nums) {
    // YOUR CODE HERE
}


// ============================================
// TESTS - Don't modify below this line
// ============================================

function runTests() {
    console.log("Running Tests for Exercise 8...\n");
    
    // Test twoSum
    console.log("Test twoSum:");
    console.log(JSON.stringify(twoSum([2,7,11,15], 9)) === JSON.stringify([0,1]) ? "✓ PASS" : "✗ FAIL");
    
    // Test isPalindrome
    console.log("\nTest isPalindrome:");
    console.log(isPalindrome("A man a plan a canal Panama") === true ? "✓ PASS" : "✗ FAIL");
    console.log(isPalindrome("hello") === false ? "✓ PASS" : "✗ FAIL");
    
    // Test isAnagram
    console.log("\nTest isAnagram:");
    console.log(isAnagram("listen", "silent") === true ? "✓ PASS" : "✗ FAIL");
    console.log(isAnagram("hello", "world") === false ? "✓ PASS" : "✗ FAIL");
    
    // Test fibonacci
    console.log("\nTest fibonacci:");
    console.log(JSON.stringify(fibonacci(7)) === JSON.stringify([0,1,1,2,3,5,8]) ? "✓ PASS" : "✗ FAIL");
    
    // Test binarySearch
    console.log("\nTest binarySearch:");
    console.log(binarySearch([1,3,5,7,9], 5) === 2 ? "✓ PASS" : "✗ FAIL");
    console.log(binarySearch([1,3,5,7,9], 6) === -1 ? "✓ PASS" : "✗ FAIL");
    
    // Test reverseWords
    console.log("\nTest reverseWords:");
    console.log(reverseWords("Hello World") === "World Hello" ? "✓ PASS" : "✗ FAIL");
    
    // Test longestCommonPrefix
    console.log("\nTest longestCommonPrefix:");
    console.log(longestCommonPrefix(["flower","flow","flight"]) === "fl" ? "✓ PASS" : "✗ FAIL");
    
    // Test isValidParentheses
    console.log("\nTest isValidParentheses:");
    console.log(isValidParentheses("()[]{}") === true ? "✓ PASS" : "✗ FAIL");
    console.log(isValidParentheses("([)]") === false ? "✓ PASS" : "✗ FAIL");
    
    // Test mergeSorted
    console.log("\nTest mergeSorted:");
    console.log(JSON.stringify(mergeSorted([1,3,5], [2,4,6])) === JSON.stringify([1,2,3,4,5,6]) ? "✓ PASS" : "✗ FAIL");
    
    // Test findMissing
    console.log("\nTest findMissing:");
    console.log(findMissing([0,1,3]) === 2 ? "✓ PASS" : "✗ FAIL");
    
    // Test rotateArray
    console.log("\nTest rotateArray:");
    console.log(JSON.stringify(rotateArray([1,2,3,4,5], 2)) === JSON.stringify([4,5,1,2,3]) ? "✓ PASS" : "✗ FAIL");
    
    // Test longestUniqueSubstring
    console.log("\nTest longestUniqueSubstring:");
    console.log(longestUniqueSubstring("abcabcbb") === 3 ? "✓ PASS" : "✗ FAIL");
    
    // Test findPrimes
    console.log("\nTest findPrimes:");
    console.log(JSON.stringify(findPrimes(10)) === JSON.stringify([2,3,5,7]) ? "✓ PASS" : "✗ FAIL");
    
    // Test transpose
    console.log("\nTest transpose:");
    console.log(JSON.stringify(transpose([[1,2,3],[4,5,6]])) === JSON.stringify([[1,4],[2,5],[3,6]]) ? "✓ PASS" : "✗ FAIL");
    
    // Test maxSubarraySum
    console.log("\nTest maxSubarraySum:");
    console.log(maxSubarraySum([-2,1,-3,4,-1,2,1,-5,4]) === 6 ? "✓ PASS" : "✗ FAIL");
    
    console.log("\n" + "=".repeat(50));
}

// Uncomment to run tests
// runTests();

module.exports = { 
    twoSum, 
    isPalindrome, 
    isAnagram, 
    fibonacci, 
    binarySearch, 
    reverseWords, 
    longestCommonPrefix, 
    isValidParentheses, 
    mergeSorted, 
    findMissing, 
    rotateArray, 
    longestUniqueSubstring, 
    findPrimes, 
    transpose, 
    maxSubarraySum 
};
