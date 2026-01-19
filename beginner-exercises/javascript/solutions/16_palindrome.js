/**
 * Exercise 16: Palindrome Checker
 * Difficulty: Medium
 *
 * Task: Check if a word is a palindrome (reads the same forwards and backwards).
 *
 * Instructions:
 * 1. Create a string variable
 * 2. Check if it's the same when reversed
 * 3. Print "Palindrome" or "Not a palindrome"
 */

// Solution:
const word = "racecar";
const reversedWord = word.split("").reverse().join("");

if (word === reversedWord) {
    console.log("Palindrome");
} else {
    console.log("Not a palindrome");
}

// Test with another word
const word2 = "hello";
const reversedWord2 = word2.split("").reverse().join("");

if (word2 === reversedWord2) {
    console.log(`${word2} is a Palindrome`);
} else {
    console.log(`${word2} is Not a palindrome`);
}
