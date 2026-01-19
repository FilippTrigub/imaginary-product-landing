/**
 * Solution: const vs let
 */

const PI = 3.14159;
let radius = 5;
const area = PI * radius * radius;  // 78.53975

if (typeof module !== 'undefined') {
  module.exports = { PI, radius, area };
}
