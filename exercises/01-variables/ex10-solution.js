/**
 * Solution: Type Conversion
 */

const numString = "123";
const numValue2 = 456;
const boolString = "true";

const numValue = Number(numString);        // 123
const stringValue = String(numValue2);     // "456"
const boolValue = boolString === "true";   // true

if (typeof module !== 'undefined') {
  module.exports = { numValue, stringValue, boolValue };
}
