/**
 * Solution: Variable Reassignment
 */

let counter = 0;
counter = counter + 1;  // or counter += 1 or counter++
counter = counter + 5;  // or counter += 5
counter = counter * 2;  // or counter *= 2
// Final value: 12

if (typeof module !== 'undefined') {
  module.exports = { counter };
}
