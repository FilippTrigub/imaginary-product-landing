// Test 3: Object tests

function testObjectProperty() {
  const obj = { name: 'test', value: 42 };
  console.assert(obj.name === 'test', 'Object property should equal "test"');
  console.log('✓ Object property test passed');
}

function testObjectKeys() {
  const obj = { a: 1, b: 2, c: 3 };
  console.assert(Object.keys(obj).length === 3, 'Object should have 3 keys');
  console.log('✓ Object keys test passed');
}

testObjectProperty();
testObjectKeys();
console.log('All test3.js tests completed!');
