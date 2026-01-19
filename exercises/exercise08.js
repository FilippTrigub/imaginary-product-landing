/**
 * Exercise 08: Strings
 *
 * Strings are sequences of characters used to represent text.
 * JavaScript provides many methods for working with strings.
 *
 * Task:
 * 1. Create and concatenate strings
 * 2. Access string characters
 * 3. Use string methods (length, toUpperCase, toLowerCase, etc.)
 * 4. Search within strings (indexOf, includes)
 * 5. Extract substrings (slice, substring, substr)
 * 6. Replace and split strings
 * 7. Template literals
 *
 * To run this exercise:
 * node exercises/exercise08.js
 */

// TODO: Create and concatenate strings
// let firstName = "John";
// let lastName = "Doe";
// let fullName = firstName + " " + lastName;

// TODO: Access characters
// console.log("First character:", fullName[0]);
// console.log("Last character:", fullName[fullName.length - 1]);

// TODO: String methods
// console.log("Length:", fullName.length);
// console.log("Uppercase:", fullName.toUpperCase());
// console.log("Lowercase:", fullName.toLowerCase());

// TODO: Search methods
// let sentence = "The quick brown fox jumps over the lazy dog";
// console.log("Index of 'fox':", sentence.indexOf("fox"));
// console.log("Includes 'dog':", sentence.includes("dog"));

// TODO: Extract substrings
// console.log("Slice(4, 9):", sentence.slice(4, 9));
// console.log("Substring(4, 9):", sentence.substring(4, 9));

// TODO: Replace and split
// let newSentence = sentence.replace("lazy", "sleepy");
// console.log("Replaced:", newSentence);

// let words = sentence.split(" ");
// console.log("Words array:", words);

// TODO: Template literals
// let age = 25;
// let greeting = `Hello, my name is ${fullName} and I am ${age} years old.`;
// console.log(greeting);

/*
SOLUTION:
console.log("=== Creating and Concatenating Strings ===");
let firstName = "Alice";
let lastName = "Johnson";
let fullName = firstName + " " + lastName;

console.log("First name:", firstName);
console.log("Last name:", lastName);
console.log("Full name (concatenation):", fullName);

// Using concat() method
let greeting = "Hello".concat(", ", firstName, "!");
console.log("Greeting:", greeting);

console.log("\n=== Accessing String Characters ===");
let message = "JavaScript";
console.log("String:", message);
console.log("Length:", message.length);
console.log("First character:", message[0]);
console.log("Last character:", message[message.length - 1]);
console.log("Character at index 4:", message[4]);

console.log("\n=== String Methods ===");
let text = "Hello World";
console.log("Original:", text);
console.log("toUpperCase():", text.toUpperCase());
console.log("toLowerCase():", text.toLowerCase());
console.log("charAt(6):", text.charAt(6));
console.log("charCodeAt(0):", text.charCodeAt(0));

console.log("\n=== Search Methods ===");
let paragraph = "The quick brown fox jumps over the lazy dog. The fox is clever.";
console.log("Text:", paragraph);

console.log("indexOf('fox'):", paragraph.indexOf("fox"));
console.log("lastIndexOf('fox'):", paragraph.lastIndexOf("fox"));
console.log("indexOf('cat'):", paragraph.indexOf("cat")); // -1 if not found

console.log("includes('dog'):", paragraph.includes("dog"));
console.log("includes('cat'):", paragraph.includes("cat"));
console.log("startsWith('The'):", paragraph.startsWith("The"));
console.log("endsWith('clever.'):", paragraph.endsWith("clever."));

console.log("\n=== Extracting Substrings ===");
let sentence = "JavaScript is a powerful programming language";
console.log("Original:", sentence);

console.log("slice(0, 10):", sentence.slice(0, 10));
console.log("slice(11, 13):", sentence.slice(11, 13));
console.log("slice(-8):", sentence.slice(-8)); // Last 8 characters

console.log("substring(0, 10):", sentence.substring(0, 10));
console.log("substr(11, 2):", sentence.substr(11, 2)); // Deprecated but still works

console.log("\n=== Replace and Split ===");
let originalText = "I love cats. Cats are cute. Cats are fun.";
console.log("Original:", originalText);

let replacedText = originalText.replace("cats", "dogs");
console.log("After single replace:", replacedText);

let replacedAllText = originalText.replace(/cats/gi, "dogs"); // Global, case-insensitive
console.log("After global replace:", replacedAllText);

let words = sentence.split(" ");
console.log("Split by space:", words);

let csvData = "apple,banana,orange,grape";
let fruits = csvData.split(",");
console.log("Split CSV:", fruits);

console.log("\n=== Template Literals ===");
let name = "Bob";
let age = 30;
let city = "New York";

// Old way (string concatenation)
let oldWay = "Hello, my name is " + name + ", I am " + age + " years old and I live in " + city + ".";
console.log("Old way:", oldWay);

// New way (template literals)
let newWay = `Hello, my name is ${name}, I am ${age} years old and I live in ${city}.`;
console.log("Template literal:", newWay);

// Multi-line strings
let multiLine = `This is a multi-line string.
It can span multiple lines
without using escape characters.`;
console.log("Multi-line string:");
console.log(multiLine);

// Expressions in template literals
let price = 19.99;
let quantity = 3;
let total = `Total cost: $${(price * quantity).toFixed(2)}`;
console.log(total);

console.log("\n=== String Trimming ===");
let messyString = "   Hello World   ";
console.log("Original (with quotes):", `"${messyString}"`);
console.log("trim():", `"${messyString.trim()}"`);
console.log("trimStart():", `"${messyString.trimStart()}"`);
console.log("trimEnd():", `"${messyString.trimEnd()}"`);

console.log("\n=== String Padding ===");
let number = "5";
console.log("padStart(3, '0'):", number.padStart(3, "0"));
console.log("padEnd(3, '*'):", number.padEnd(3, "*"));

console.log("\n=== String Repeat ===");
let star = "*";
console.log("Repeat 5 times:", star.repeat(5));

let separator = "-".repeat(20);
console.log("Separator:", separator);
*/