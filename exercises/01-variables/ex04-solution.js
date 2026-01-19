/**
 * Solution: Template Literals
 */

const name = "Sarah";
const age = 28;

const introduction = `My name is ${name} and I am ${age} years old.`;

if (typeof module !== 'undefined') {
  module.exports = { introduction };
}
