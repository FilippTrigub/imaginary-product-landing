#!/usr/bin/env node

// Dummy script demonstrating basic JavaScript functionality

const greet = (name) => {
  return `Hello, ${name}!`;
};

const performCalculation = (a, b) => {
  return {
    sum: a + b,
    difference: a - b,
    product: a * b,
    quotient: b !== 0 ? a / b : 'Cannot divide by zero'
  };
};

const generateRandomNumber = (min = 1, max = 100) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Main execution
console.log('=== Dummy Script ===');
console.log(greet('World'));
console.log('\nRandom number:', generateRandomNumber());
console.log('\nCalculations for 10 and 5:');
console.log(performCalculation(10, 5));
console.log('\n=== Script Complete ===');
