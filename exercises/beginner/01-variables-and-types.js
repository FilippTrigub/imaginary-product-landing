/**
 * EXERCISE 1: Variables and Data Types
 * 
 * Learn about JavaScript variables, data types, and basic operations.
 */

// ============================================
// CHALLENGE 1: Variable Declaration
// ============================================
/**
 * Create three variables:
 * - userName (string) with your name
 * - userAge (number) with your age
 * - isStudent (boolean) indicating if you're a student
 */

// YOUR CODE HERE
let userName;
let userAge;
let isStudent;


// ============================================
// CHALLENGE 2: String Manipulation
// ============================================
/**
 * Create a function that takes a first name and last name
 * and returns a full name in the format "LastName, FirstName"
 * 
 * Example: formatName("John", "Doe") => "Doe, John"
 */

function formatName(firstName, lastName) {
    // YOUR CODE HERE
}


// ============================================
// CHALLENGE 3: Number Operations
// ============================================
/**
 * Create a function that calculates the area of a rectangle
 * Formula: area = width * height
 * 
 * Example: calculateArea(5, 10) => 50
 */

function calculateArea(width, height) {
    // YOUR CODE HERE
}


// ============================================
// CHALLENGE 4: Type Conversion
// ============================================
/**
 * Create a function that takes a string number and returns
 * the number multiplied by 2
 * 
 * Example: doubleStringNumber("5") => 10
 */

function doubleStringNumber(strNum) {
    // YOUR CODE HERE
}


// ============================================
// CHALLENGE 5: Template Literals
// ============================================
/**
 * Create a function that takes name, age, and city
 * and returns a formatted introduction string using template literals
 * 
 * Example: createIntro("Alice", 25, "NYC") 
 * => "Hi, I'm Alice. I'm 25 years old and I live in NYC."
 */

function createIntro(name, age, city) {
    // YOUR CODE HERE
}


// ============================================
// TESTS - Don't modify below this line
// ============================================

function runTests() {
    console.log("Running Tests for Exercise 1...\n");
    
    // Test formatName
    console.log("Test formatName:");
    console.log(formatName("John", "Doe") === "Doe, John" ? "✓ PASS" : "✗ FAIL");
    console.log(formatName("Jane", "Smith") === "Smith, Jane" ? "✓ PASS" : "✗ FAIL");
    
    // Test calculateArea
    console.log("\nTest calculateArea:");
    console.log(calculateArea(5, 10) === 50 ? "✓ PASS" : "✗ FAIL");
    console.log(calculateArea(7, 3) === 21 ? "✓ PASS" : "✗ FAIL");
    
    // Test doubleStringNumber
    console.log("\nTest doubleStringNumber:");
    console.log(doubleStringNumber("5") === 10 ? "✓ PASS" : "✗ FAIL");
    console.log(doubleStringNumber("42") === 84 ? "✓ PASS" : "✗ FAIL");
    
    // Test createIntro
    console.log("\nTest createIntro:");
    const intro1 = createIntro("Alice", 25, "NYC");
    console.log(intro1 === "Hi, I'm Alice. I'm 25 years old and I live in NYC." ? "✓ PASS" : "✗ FAIL");
    
    console.log("\n" + "=".repeat(50));
}

// Uncomment to run tests
// runTests();

module.exports = { formatName, calculateArea, doubleStringNumber, createIntro };
