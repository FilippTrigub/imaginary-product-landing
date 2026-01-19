// ============================================
// VARIABLES & DATA TYPES - TESTS
// ============================================

const exercises = require('./exercises.js');

let passed = 0;
let failed = 0;

function test(exerciseName, exerciseFunc, testCases) {
  console.log(`\n🧪 Testing ${exerciseName}...`);
  
  testCases.forEach((testCase, index) => {
    try {
      const result = exerciseFunc(...testCase.input);
      const expected = testCase.expected;
      
      if (JSON.stringify(result) === JSON.stringify(expected)) {
        console.log(`  ✅ Test ${index + 1} passed`);
        passed++;
      } else {
        console.log(`  ❌ Test ${index + 1} failed`);
        console.log(`     Expected: ${JSON.stringify(expected)}`);
        console.log(`     Got: ${JSON.stringify(result)}`);
        failed++;
      }
    } catch (error) {
      console.log(`  ❌ Test ${index + 1} error: ${error.message}`);
      failed++;
    }
  });
}

// Run tests
console.log('='.repeat(50));
console.log('VARIABLES & DATA TYPES - TEST SUITE');
console.log('='.repeat(50));

test('Exercise 1', exercises.exercise1, [
  { input: [], expected: expect => typeof expect === 'string' }
]);

test('Exercise 2', exercises.exercise2, [
  { input: [], expected: expect => typeof expect === 'number' }
]);

test('Exercise 3', exercises.exercise3, [
  { input: [], expected: expect => typeof expect === 'boolean' }
]);

test('Exercise 4', exercises.exercise4, [
  { input: ['John', 'Doe'], expected: 'John Doe' },
  { input: ['Jane', 'Smith'], expected: 'Jane Smith' }
]);

test('Exercise 5', exercises.exercise5, [
  { input: ['John', 25], expected: 'Hello, John! You are 25 years old.' },
  { input: ['Alice', 30], expected: 'Hello, Alice! You are 30 years old.' }
]);

test('Exercise 6', exercises.exercise6, [
  { input: ['5'], expected: 15 },
  { input: ['100'], expected: 110 }
]);

test('Exercise 7', exercises.exercise7, [
  { input: [5, 10], expected: 50 },
  { input: [7, 3], expected: 21 }
]);

test('Exercise 8', exercises.exercise8, [
  { input: [1, 2], expected: [2, 1] },
  { input: ['a', 'b'], expected: ['b', 'a'] }
]);

test('Exercise 9', exercises.exercise9, [
  { input: [10, 5], expected: 50 },
  { input: [25, 4], expected: 100 }
]);

test('Exercise 10', exercises.exercise10, [
  { input: [42], expected: 'number' },
  { input: ['hello'], expected: 'string' },
  { input: [true], expected: 'boolean' }
]);

// Summary
console.log('\n' + '='.repeat(50));
console.log(`✅ Passed: ${passed}`);
console.log(`❌ Failed: ${failed}`);
console.log(`📊 Total: ${passed + failed}`);
console.log('='.repeat(50));
