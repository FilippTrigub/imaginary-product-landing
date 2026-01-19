// ============================================
// VARIABLES & DATA TYPES - SOLUTIONS
// ============================================

// Exercise 1: Create a variable
function exercise1() {
  const myName = "John Doe";
  return myName;
}

// Exercise 2: Create a number variable
function exercise2() {
  const myAge = 25;
  return myAge;
}

// Exercise 3: Create a boolean variable
function exercise3() {
  const isStudent = true;
  return isStudent;
}

// Exercise 4: String concatenation
function exercise4(firstName, lastName) {
  return firstName + " " + lastName;
}

// Exercise 5: Template literals
function exercise5(name, age) {
  return `Hello, ${name}! You are ${age} years old.`;
}

// Exercise 6: Type conversion
function exercise6(stringNumber) {
  return Number(stringNumber) + 10;
}

// Exercise 7: Calculate area
function exercise7(length, width) {
  return length * width;
}

// Exercise 8: Swap variables
function exercise8(a, b) {
  return [b, a];
}

// Exercise 9: Multiple variables
function exercise9(price, quantity) {
  const total = price * quantity;
  return total;
}

// Exercise 10: Check data type
function exercise10(value) {
  return typeof value;
}

// Export for testing
if (typeof module !== 'undefined') {
  module.exports = {
    exercise1, exercise2, exercise3, exercise4, exercise5,
    exercise6, exercise7, exercise8, exercise9, exercise10
  };
}
