// JavaScript Array Methods Coding Exercises
// These exercises demonstrate common array manipulation techniques using built-in JavaScript methods

// Exercise 1: Using map() to transform an array
// Problem: Given an array of numbers, create a new array where each number is doubled
function doubleNumbers(numbers) {
  // Solution: Use map() to transform each element
  return numbers.map(num => num * 2);
}

// Test Exercise 1
console.log('Exercise 1 - Double Numbers:');
console.log(doubleNumbers([1, 2, 3, 4, 5])); // Expected: [2, 4, 6, 8, 10]

// Exercise 2: Using filter() to select elements
// Problem: Given an array of numbers, return only the even numbers
function getEvenNumbers(numbers) {
  // Solution: Use filter() to select elements that meet the condition
  return numbers.filter(num => num % 2 === 0);
}

// Test Exercise 2
console.log('\nExercise 2 - Even Numbers:');
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // Expected: [2, 4, 6]

// Exercise 3: Using reduce() to accumulate values
// Problem: Given an array of numbers, calculate the sum of all elements
function sumArray(numbers) {
  // Solution: Use reduce() to accumulate the sum
  return numbers.reduce((sum, num) => sum + num, 0);
}

// Test Exercise 3
console.log('\nExercise 3 - Sum Array:');
console.log(sumArray([1, 2, 3, 4, 5])); // Expected: 15

// Exercise 4: Using find() to locate an element
// Problem: Given an array of objects representing people, find the person with a specific name
function findPersonByName(people, targetName) {
  // Solution: Use find() to locate the first matching element
  return people.find(person => person.name === targetName);
}

// Test Exercise 4
console.log('\nExercise 4 - Find Person:');
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];
console.log(findPersonByName(people, 'Bob')); // Expected: { name: 'Bob', age: 30 }

// Exercise 5: Using some() and every() for validation
// Problem: Check if any number in the array is greater than 10, and if all numbers are positive
function validateNumbers(numbers) {
  // Solution: Use some() and every() for different types of validation
  const hasNumberGreaterThan10 = numbers.some(num => num > 10);
  const allPositive = numbers.every(num => num > 0);

  return {
    hasNumberGreaterThan10,
    allPositive
  };
}

// Test Exercise 5
console.log('\nExercise 5 - Validate Numbers:');
console.log(validateNumbers([1, 5, 12, 3])); // Expected: { hasNumberGreaterThan10: true, allPositive: true }
console.log(validateNumbers([-1, 5, 8, 3])); // Expected: { hasNumberGreaterThan10: false, allPositive: false }

// Exercise 6: Combining multiple array methods
// Problem: Given an array of products, find products that cost more than $50,
// then create a new array with just their names in uppercase
function getExpensiveProductNames(products) {
  // Solution: Chain filter() and map() methods
  return products
    .filter(product => product.price > 50)
    .map(product => product.name.toUpperCase());
}

// Test Exercise 6
console.log('\nExercise 6 - Expensive Product Names:');
const products = [
  { name: 'Laptop', price: 999 },
  { name: 'Mouse', price: 25 },
  { name: 'Keyboard', price: 75 },
  { name: 'Monitor', price: 299 }
];
console.log(getExpensiveProductNames(products)); // Expected: ['LAPTOP', 'KEYBOARD', 'MONITOR']