#!/usr/bin/env node

/**
 * Dummy Script
 * A simple demonstration script that performs various basic operations
 */

console.log('=== Dummy Script Started ===\n');

// 1. Basic arithmetic operations
console.log('1. Arithmetic Operations:');
const num1 = 42;
const num2 = 18;
console.log(`   ${num1} + ${num2} = ${num1 + num2}`);
console.log(`   ${num1} - ${num2} = ${num1 - num2}`);
console.log(`   ${num1} * ${num2} = ${num1 * num2}`);
console.log(`   ${num1} / ${num2} = ${num1 / num2}`);
console.log('');

// 2. String manipulation
console.log('2. String Manipulation:');
const greeting = 'Hello, World!';
console.log(`   Original: "${greeting}"`);
console.log(`   Uppercase: "${greeting.toUpperCase()}"`);
console.log(`   Lowercase: "${greeting.toLowerCase()}"`);
console.log(`   Length: ${greeting.length} characters`);
console.log('');

// 3. Array operations
console.log('3. Array Operations:');
const numbers = [1, 2, 3, 4, 5];
console.log(`   Array: [${numbers.join(', ')}]`);
console.log(`   Sum: ${numbers.reduce((a, b) => a + b, 0)}`);
console.log(`   Average: ${numbers.reduce((a, b) => a + b, 0) / numbers.length}`);
console.log(`   Max: ${Math.max(...numbers)}`);
console.log(`   Min: ${Math.min(...numbers)}`);
console.log('');

// 4. Date and time
console.log('4. Current Date & Time:');
const now = new Date();
console.log(`   Current Date: ${now.toLocaleDateString()}`);
console.log(`   Current Time: ${now.toLocaleTimeString()}`);
console.log(`   Timestamp: ${now.getTime()}`);
console.log('');

// 5. Object manipulation
console.log('5. Object Example:');
const person = {
  name: 'John Doe',
  age: 30,
  city: 'New York',
  occupation: 'Developer'
};
console.log('   Person object:');
Object.entries(person).forEach(([key, value]) => {
  console.log(`      ${key}: ${value}`);
});
console.log('');

// 6. Simple loop
console.log('6. Loop Example (Fibonacci):');
const fibonacci = [0, 1];
for (let i = 2; i < 10; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
console.log(`   First 10 Fibonacci numbers: [${fibonacci.join(', ')}]`);
console.log('');

// 7. Random number generation
console.log('7. Random Numbers:');
console.log(`   Random number (0-100): ${Math.floor(Math.random() * 101)}`);
console.log(`   Random number (1-10): ${Math.floor(Math.random() * 10) + 1}`);
console.log('');

// 8. Simple function demonstration
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

console.log('8. Prime Number Check:');
const testNumbers = [2, 7, 10, 17, 20, 23];
testNumbers.forEach(num => {
  console.log(`   ${num} is ${isPrime(num) ? 'prime' : 'not prime'}`);
});
console.log('');

console.log('=== Dummy Script Completed Successfully ===');
