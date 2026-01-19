/**
 * Solution: String Concatenation
 */

const firstName = "John";
const lastName = "Doe";

const greeting = "Hello, " + firstName + " " + lastName + "!";
// Alternative using template literals:
// const greeting = `Hello, ${firstName} ${lastName}!`;

if (typeof module !== 'undefined') {
  module.exports = { greeting };
}
