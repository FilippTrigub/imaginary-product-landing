/**
 * Exercise 14: Count Vowels
 * Difficulty: Medium
 *
 * Task: Count the number of vowels in a string.
 *
 * Instructions:
 * 1. Create a string variable
 * 2. Loop through each character
 * 3. Count how many vowels (a, e, i, o, u) are in the string
 * 4. Print the count
 */

// Solution:
const text = "Hello World";
const vowels = "aeiouAEIOU";
let count = 0;

for (let i = 0; i < text.length; i++) {
    if (vowels.includes(text[i])) {
        count++;
    }
}

console.log(`Number of vowels in '${text}':`, count);
