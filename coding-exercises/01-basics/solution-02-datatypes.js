// Solution 2: Data Types

// Task 1: Create a string variable
let greeting = "Hello, World!";

// Task 2: Create a number variable
let temperature = 72.5;

// Task 3: Create a boolean variable
let isSunny = true;

// Task 4: Use typeof to check data types
console.log('Type of greeting:', typeof greeting);      // string
console.log('Type of temperature:', typeof temperature); // number
console.log('Type of isSunny:', typeof isSunny);        // boolean

// Task 5: Create a null variable
let emptyValue = null;
console.log('Empty value:', emptyValue);
console.log('Type of emptyValue:', typeof emptyValue);  // object (this is a JavaScript quirk!)

// Task 6: Variable without assignment
let notAssigned;
console.log('Not assigned:', notAssigned);               // undefined
console.log('Type of notAssigned:', typeof notAssigned); // undefined

// Task 7: Type coercion
let num = 5;
let str = '10';
let result = num + str;
console.log('5 + "10" =', result);                      // "510" (string concatenation)
console.log('Type:', typeof result);                     // string

// Task 8: Convert string to number
let stringNumber = '42';
let convertedNumber = parseInt(stringNumber);
console.log('Converted number:', convertedNumber);      // 42
console.log('Type:', typeof convertedNumber);            // number

// Task 9: Check if something is a number using isNaN()
console.log('isNaN("hello"):', isNaN('hello'));         // true (not a number)
console.log('isNaN(42):', isNaN(42));                   // false (is a number)
console.log('isNaN("42"):', isNaN('42'));               // false (can be converted)
console.log('isNaN(NaN):', isNaN(NaN));                 // true (not a number)

console.log('\n--- Exercise 2 Complete! ---');
