/**
 * Exercise 15: Reverse a String
 * Difficulty: Medium
 *
 * Task: Reverse a given string.
 *
 * Instructions:
 * 1. Create a string variable
 * 2. Reverse the string (you can use array methods or a loop)
 * 3. Print the reversed string
 */

// Solution 1: Using array methods
const text = "JavaScript";
const reversedText = text.split("").reverse().join("");
console.log("Original:", text);
console.log("Reversed:", reversedText);

// Solution 2: Using a loop
const text2 = "Programming";
let reversedText2 = "";
for (let i = text2.length - 1; i >= 0; i--) {
    reversedText2 += text2[i];
}
console.log("Original:", text2);
console.log("Reversed:", reversedText2);
