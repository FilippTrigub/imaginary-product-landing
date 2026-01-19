/**
 * Solution: null vs undefined
 */

const emptyValue = null;
const notDefined = undefined;
const isNull = emptyValue === null;           // true
const isUndefined = notDefined === undefined; // true

if (typeof module !== 'undefined') {
  module.exports = { emptyValue, notDefined, isNull, isUndefined };
}
