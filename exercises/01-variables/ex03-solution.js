/**
 * Solution: Arithmetic Operations
 */

const num1 = 20;
const num2 = 5;

const sum = num1 + num2;           // 25
const difference = num1 - num2;     // 15
const product = num1 * num2;        // 100
const quotient = num1 / num2;       // 4

if (typeof module !== 'undefined') {
  module.exports = { sum, difference, product, quotient };
}
