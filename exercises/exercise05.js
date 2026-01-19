/**
 * Exercise 05: Functions
 *
 * Functions are reusable blocks of code that perform specific tasks.
 * They help organize code and avoid repetition.
 *
 * Task:
 * 1. Define and call functions
 * 2. Function parameters and return values
 * 3. Default parameters
 * 4. Arrow functions
 * 5. Anonymous functions
 * 6. Function scope and closures
 * 7. Higher-order functions
 *
 * To run this exercise:
 * node exercises/exercise05.js
 */

// TODO: Basic function definition and call
// function greet(name) {
//     return `Hello, ${name}!`;
// }

// console.log(greet("Alice"));

// TODO: Function with multiple parameters
// function add(a, b) {
//     return a + b;
// }

// console.log("Sum:", add(5, 3));

// TODO: Default parameters
// function multiply(a, b = 1) {
//     return a * b;
// }

// console.log(multiply(5));     // Uses default b=1
// console.log(multiply(5, 3));  // Overrides default

// TODO: Arrow functions
// const square = (x) => x * x;
// const add = (a, b) => a + b;

// console.log("Square of 4:", square(4));
// console.log("5 + 7 =", add(5, 7));

// TODO: Anonymous functions
// let numbers = [1, 2, 3, 4, 5];
// let doubled = numbers.map(function(num) {
//     return num * 2;
// });

// console.log("Doubled:", doubled);

// TODO: Closures
// function createCounter() {
//     let count = 0;
//     return function() {
//         count++;
//         return count;
//     };
// }

// let counter = createCounter();
// console.log(counter()); // 1
// console.log(counter()); // 2

/*
SOLUTION:
console.log("=== Basic Functions ===");
// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function expression
const sayGoodbye = function(name) {
    return `Goodbye, ${name}!`;
};

console.log(greet("Alice"));
console.log(sayGoodbye("Bob"));

console.log("\n=== Function Parameters and Return Values ===");
function calculateArea(width, height) {
    if (width <= 0 || height <= 0) {
        return "Invalid dimensions";
    }
    return width * height;
}

function calculatePerimeter(width, height) {
    return 2 * (width + height);
}

let w = 5, h = 3;
console.log(`Rectangle ${w}x${h}:`);
console.log("Area:", calculateArea(w, h));
console.log("Perimeter:", calculatePerimeter(w, h));

console.log("\n=== Default Parameters ===");
function createUser(name, age = 18, city = "Unknown") {
    return {
        name: name,
        age: age,
        city: city
    };
}

console.log("User 1:", createUser("John"));
console.log("User 2:", createUser("Jane", 25));
console.log("User 3:", createUser("Bob", 30, "New York"));

console.log("\n=== Arrow Functions ===");
// Basic arrow function
const square = (x) => x * x;
const cube = (x) => x * x * x;

// Arrow function with multiple parameters
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

// Arrow function with body (multiple statements)
const describeNumber = (num) => {
    let description = "";
    if (num > 0) description = "positive";
    else if (num < 0) description = "negative";
    else description = "zero";

    return `The number ${num} is ${description}`;
};

console.log("Square of 5:", square(5));
console.log("Cube of 3:", cube(3));
console.log("5 + 7 =", add(5, 7));
console.log("4 * 6 =", multiply(4, 6));
console.log(describeNumber(-3));
console.log(describeNumber(0));
console.log(describeNumber(10));

console.log("\n=== Anonymous Functions and Callbacks ===");
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using anonymous function with map
let doubled = numbers.map(function(num) {
    return num * 2;
});

console.log("Original numbers:", numbers);
console.log("Doubled:", doubled);

// Using arrow function with filter
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

// Using arrow function with reduce
let sum = numbers.reduce((total, num) => total + num, 0);
console.log("Sum of all numbers:", sum);

// Sorting with anonymous function
let fruits = ["banana", "Apple", "cherry", "Date"];
let sortedFruits = fruits.sort(function(a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
});
console.log("Sorted fruits:", sortedFruits);

console.log("\n=== Function Scope and Closures ===");
// Global scope
let globalVar = "I'm global";

function outerFunction() {
    // Function scope
    let outerVar = "I'm in outer function";

    function innerFunction() {
        // Inner function scope
        let innerVar = "I'm in inner function";

        console.log("Inner function can access:");
        console.log("globalVar:", globalVar);
        console.log("outerVar:", outerVar);
        console.log("innerVar:", innerVar);
    }

    innerFunction();

    // Outer function cannot access innerVar
    console.log("Outer function can access:");
    console.log("globalVar:", globalVar);
    console.log("outerVar:", outerVar);
    // console.log(innerVar); // This would cause an error
}

outerFunction();

console.log("\n=== Closures ===");
function createCounter() {
    let count = 0; // This variable is "closed over" by the returned function

    return function() {
        count++;
        return count;
    };
}

let counter1 = createCounter();
let counter2 = createCounter();

console.log("Counter 1:", counter1()); // 1
console.log("Counter 1:", counter1()); // 2
console.log("Counter 2:", counter2()); // 1 (separate closure)
console.log("Counter 1:", counter1()); // 3

function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

let double = createMultiplier(2);
let triple = createMultiplier(3);

console.log("Double 5:", double(5));
console.log("Triple 5:", triple(5));

console.log("\n=== Higher-Order Functions ===");
// Functions that take other functions as parameters or return functions

function applyOperation(operation, a, b) {
    return operation(a, b);
}

function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function power(a, b) { return a ** b; }

console.log("5 + 3 =", applyOperation(add, 5, 3));
console.log("5 - 3 =", applyOperation(subtract, 5, 3));
console.log("5 ^ 3 =", applyOperation(power, 5, 3));

// Function that returns a function
function createGreeting(greeting) {
    return function(name) {
        return `${greeting}, ${name}!`;
    };
}

let sayHello = createGreeting("Hello");
let sayHi = createGreeting("Hi");

console.log(sayHello("Alice"));
console.log(sayHi("Bob"));

console.log("\n=== Immediately Invoked Function Expressions (IIFE) ===");
(function() {
    let privateVar = "This is private";
    console.log("IIFE executed:", privateVar);
})();

// IIFE with parameters
let result = (function(a, b) {
    return a * b + 10;
})(5, 3);

console.log("IIFE result:", result);

console.log("\n=== Recursive Functions ===");
function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Factorial of 5:", factorial(5));
console.log("Fibonacci of 8:", fibonacci(8));

console.log("\n=== Function Properties and Methods ===");
function exampleFunction(a, b, c) {
    console.log("Arguments received:", arguments.length);
    console.log("Function name:", exampleFunction.name);
}

exampleFunction(1, 2, 3, 4); // Extra arguments are accessible via arguments object

// Function with rest parameters (ES6)
function sumAll(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

console.log("Sum of 1, 2, 3, 4, 5:", sumAll(1, 2, 3, 4, 5));

// Function with spread operator
let nums = [1, 2, 3, 4, 5];
console.log("Sum using spread:", sumAll(...nums));
*/