/**
 * Solution: typeof Operator
 */

const value1 = "Hello";
const value2 = 42;
const value3 = true;
const value4 = undefined;

const type1 = typeof value1;  // "string"
const type2 = typeof value2;  // "number"
const type3 = typeof value3;  // "boolean"
const type4 = typeof value4;  // "undefined"

if (typeof module !== 'undefined') {
  module.exports = { type1, type2, type3, type4 };
}
