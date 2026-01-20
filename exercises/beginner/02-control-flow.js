/**
 * EXERCISE 2: Control Flow (if/else, switch, loops)
 * 
 * Master conditional statements and loops in JavaScript.
 */

// ============================================
// CHALLENGE 1: Grade Calculator
// ============================================
/**
 * Create a function that takes a numeric score (0-100)
 * and returns a letter grade:
 * A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: 0-59
 * 
 * Example: getGrade(85) => "B"
 */

function getGrade(score) {
    // YOUR CODE HERE
}


// ============================================
// CHALLENGE 2: Even or Odd
// ============================================
/**
 * Create a function that determines if a number is even or odd
 * Return "even" or "odd"
 * 
 * Example: isEvenOrOdd(4) => "even"
 */

function isEvenOrOdd(num) {
    // YOUR CODE HERE
}


// ============================================
// CHALLENGE 3: FizzBuzz
// ============================================
/**
 * Create a function that returns:
 * - "Fizz" if number is divisible by 3
 * - "Buzz" if number is divisible by 5
 * - "FizzBuzz" if divisible by both 3 and 5
 * - The number itself otherwise
 * 
 * Example: fizzBuzz(15) => "FizzBuzz"
 */

function fizzBuzz(num) {
    // YOUR CODE HERE
}


// ============================================
// CHALLENGE 4: Sum of Numbers
// ============================================
/**
 * Create a function that calculates the sum of all numbers
 * from 1 to n (inclusive)
 * 
 * Example: sumUpTo(5) => 15 (1+2+3+4+5)
 */

function sumUpTo(n) {
    // YOUR CODE HERE
}


// ============================================
// CHALLENGE 5: Count Vowels
// ============================================
/**
 * Create a function that counts the number of vowels (a,e,i,o,u)
 * in a given string (case-insensitive)
 * 
 * Example: countVowels("Hello World") => 3
 */

function countVowels(str) {
    // YOUR CODE HERE
}


// ============================================
// CHALLENGE 6: Day of Week
// ============================================
/**
 * Create a function that takes a number (1-7) and returns
 * the day of the week using a switch statement
 * 1=Monday, 2=Tuesday, ..., 7=Sunday
 * 
 * Example: getDayName(1) => "Monday"
 */

function getDayName(dayNum) {
    // YOUR CODE HERE
}


// ============================================
// TESTS - Don't modify below this line
// ============================================

function runTests() {
    console.log("Running Tests for Exercise 2...\n");
    
    // Test getGrade
    console.log("Test getGrade:");
    console.log(getGrade(95) === "A" ? "✓ PASS" : "✗ FAIL");
    console.log(getGrade(85) === "B" ? "✓ PASS" : "✗ FAIL");
    console.log(getGrade(75) === "C" ? "✓ PASS" : "✗ FAIL");
    console.log(getGrade(65) === "D" ? "✓ PASS" : "✗ FAIL");
    console.log(getGrade(55) === "F" ? "✓ PASS" : "✗ FAIL");
    
    // Test isEvenOrOdd
    console.log("\nTest isEvenOrOdd:");
    console.log(isEvenOrOdd(4) === "even" ? "✓ PASS" : "✗ FAIL");
    console.log(isEvenOrOdd(7) === "odd" ? "✓ PASS" : "✗ FAIL");
    
    // Test fizzBuzz
    console.log("\nTest fizzBuzz:");
    console.log(fizzBuzz(15) === "FizzBuzz" ? "✓ PASS" : "✗ FAIL");
    console.log(fizzBuzz(9) === "Fizz" ? "✓ PASS" : "✗ FAIL");
    console.log(fizzBuzz(10) === "Buzz" ? "✓ PASS" : "✗ FAIL");
    console.log(fizzBuzz(7) === 7 ? "✓ PASS" : "✗ FAIL");
    
    // Test sumUpTo
    console.log("\nTest sumUpTo:");
    console.log(sumUpTo(5) === 15 ? "✓ PASS" : "✗ FAIL");
    console.log(sumUpTo(10) === 55 ? "✓ PASS" : "✗ FAIL");
    
    // Test countVowels
    console.log("\nTest countVowels:");
    console.log(countVowels("Hello World") === 3 ? "✓ PASS" : "✗ FAIL");
    console.log(countVowels("JavaScript") === 3 ? "✓ PASS" : "✗ FAIL");
    
    // Test getDayName
    console.log("\nTest getDayName:");
    console.log(getDayName(1) === "Monday" ? "✓ PASS" : "✗ FAIL");
    console.log(getDayName(7) === "Sunday" ? "✓ PASS" : "✗ FAIL");
    
    console.log("\n" + "=".repeat(50));
}

// Uncomment to run tests
// runTests();

module.exports = { getGrade, isEvenOrOdd, fizzBuzz, sumUpTo, countVowels, getDayName };
