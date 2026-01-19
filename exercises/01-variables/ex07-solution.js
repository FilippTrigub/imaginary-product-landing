/**
 * Solution: Number Methods
 */

const decimal = 3.14159;
const numberString = "42";

const rounded = Math.round(decimal);      // 3
const fixed = decimal.toFixed(2);         // "3.14"
const parsed = parseInt(numberString);    // 42

if (typeof module !== 'undefined') {
  module.exports = { rounded, fixed, parsed };
}
