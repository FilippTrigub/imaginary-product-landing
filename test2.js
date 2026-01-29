// Test script 2: Array functionality tests
const assert = require('assert');

function testArrayLength() {
  const arr = [1, 2, 3, 4, 5];
  assert.strictEqual(arr.length, 5, 'Array length should be 5');
  console.log('✓ Array length test passed');
}

function testArrayIncludes() {
  const arr = ['apple', 'banana', 'cherry'];
  assert.strictEqual(arr.includes('banana'), true, 'Array should include banana');
  console.log('✓ Array includes test passed');
}

testArrayLength();
testArrayIncludes();
console.log('All tests in test2.js passed!');
