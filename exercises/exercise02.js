/**
 * Exercise 02: Operators
 *
 * Operators are symbols that perform operations on variables and values.
 * JavaScript has various types of operators for different purposes.
 *
 * Task:
 * 1. Arithmetic operators (+, -, *, /, %, **)
 * 2. Assignment operators (=, +=, -=, *=, /=, %=)
 * 3. Comparison operators (==, ===, !=, !==, <, >, <=, >=)
 * 4. Logical operators (&&, ||, !)
 * 5. Increment/decrement operators (++ , --)
 * 6. Ternary operator (condition ? value1 : value2)
 * 7. Operator precedence
 *
 * To run this exercise:
 * node exercises/exercise02.js
 */

// TODO: Arithmetic operators
// let a = 10;
// let b = 3;

// console.log("Addition:", a + b);
// console.log("Subtraction:", a - b);
// console.log("Multiplication:", a * b);
// console.log("Division:", a / b);
// console.log("Modulus:", a % b);
// console.log("Exponentiation:", a ** b);

// TODO: Assignment operators
// let x = 5;
// x += 3;  // x = x + 3
// console.log("After +=:", x);

// x *= 2;  // x = x * 2
// console.log("After *=:", x);

// TODO: Comparison operators
// let num1 = 5;
// let num2 = "5";

// console.log("5 == '5':", num1 == num2);    // Loose equality
// console.log("5 === '5':", num1 === num2);  // Strict equality
// console.log("5 != '5':", num1 != num2);    // Loose inequality
// console.log("5 !== '5':", num1 !== num2);  // Strict inequality

// TODO: Logical operators
// let isAdult = true;
// let hasLicense = false;

// console.log("AND (true && false):", isAdult && hasLicense);
// console.log("OR (true || false):", isAdult || hasLicense);
// console.log("NOT (!true):", !isAdult);

// TODO: Increment/decrement
// let counter = 5;
// console.log("Original:", counter);
// console.log("Post-increment:", counter++);  // Returns 5, then increments
// console.log("After post-increment:", counter);
// console.log("Pre-increment:", ++counter);   // Increments, then returns 7

/*
SOLUTION:
console.log("=== Arithmetic Operators ===");
let a = 15;
let b = 4;

console.log(`a = ${a}, b = ${b}`);
console.log("Addition (a + b):", a + b);
console.log("Subtraction (a - b):", a - b);
console.log("Multiplication (a * b):", a * b);
console.log("Division (a / b):", a / b);
console.log("Modulus (a % b):", a % b);  // Remainder
console.log("Exponentiation (a ** b):", a ** b);  // 15^4

// More examples
let c = 17;
let d = 3;
console.log(`\nModulus examples with ${c} and ${d}:`);
console.log(`${c} % ${d} =`, c % d);
console.log("This is useful for checking if a number is even:", c % 2 === 0 ? "even" : "odd");

console.log("\n=== Assignment Operators ===");
let x = 10;
console.log("Initial x:", x);

x += 5;  // x = x + 5
console.log("After x += 5:", x);

x -= 3;  // x = x - 3
console.log("After x -= 3:", x);

x *= 2;  // x = x * 2
console.log("After x *= 2:", x);

x /= 4;  // x = x / 4
console.log("After x /= 4:", x);

x %= 3;  // x = x % 3
console.log("After x %= 3:", x);

x **= 2; // x = x ** 2
console.log("After x **= 2:", x);

console.log("\n=== Comparison Operators ===");
let num1 = 10;
let num2 = 20;
let str1 = "10";
let str2 = "20";

console.log(`num1 = ${num1}, num2 = ${num2}, str1 = "${str1}", str2 = "${str2}"`);

// Equality operators
console.log("num1 == num2:", num1 == num2);      // false
console.log("num1 == str1:", num1 == str1);      // true (type coercion)
console.log("num1 === str1:", num1 === str1);    // false (strict equality)

// Inequality operators
console.log("num1 != num2:", num1 != num2);      // true
console.log("num1 != str1:", num1 != str1);      // false (type coercion)
console.log("num1 !== str1:", num1 !== str1);    // true (strict inequality)

// Relational operators
console.log("num1 < num2:", num1 < num2);        // true
console.log("num1 > num2:", num1 > num2);        // false
console.log("num1 <= num1:", num1 <= num1);      // true
console.log("num1 >= num1:", num1 >= num1);      // true

// String comparisons
console.log('"apple" < "banana":', "apple" < "banana");  // true (lexicographical)
console.log('"Apple" < "apple":', "Apple" < "apple");    // true (ASCII values)

console.log("\n=== Logical Operators ===");
let isStudent = true;
let hasJob = false;
let isAdult = true;
let hasLicense = false;

console.log(`isStudent: ${isStudent}, hasJob: ${hasJob}`);
console.log(`isAdult: ${isAdult}, hasLicense: ${hasLicense}`);

// AND operator (&&)
console.log("isStudent && hasJob:", isStudent && hasJob);  // false
console.log("isAdult && hasLicense:", isAdult && hasLicense);  // false
console.log("isStudent && isAdult:", isStudent && isAdult);    // true

// OR operator (||)
console.log("isStudent || hasJob:", isStudent || hasJob);  // true
console.log("hasJob || hasLicense:", hasJob || hasLicense);  // false
console.log("isStudent || isAdult:", isStudent || isAdult);  // true

// NOT operator (!)
console.log("!isStudent:", !isStudent);  // false
console.log("!hasJob:", !hasJob);       // true

// Complex logical expressions
let canDrive = isAdult && hasLicense;
let canWork = isStudent || hasJob;
let isUnemployed = !hasJob;

console.log("canDrive (isAdult && hasLicense):", canDrive);
console.log("canWork (isStudent || hasJob):", canWork);
console.log("isUnemployed (!hasJob):", isUnemployed);

// Short-circuit evaluation
console.log("Short-circuit with &&:");
let result1 = false && console.log("This won't print");
console.log("Result:", result1);

console.log("Short-circuit with ||:");
let result2 = true || console.log("This won't print");
console.log("Result:", result2);

console.log("\n=== Increment and Decrement Operators ===");
let counter = 5;
console.log("Initial counter:", counter);

// Post-increment: returns value, then increments
let postInc = counter++;
console.log("postInc = counter++:", postInc, "counter:", counter);

// Pre-increment: increments, then returns value
let preInc = ++counter;
console.log("preInc = ++counter:", preInc, "counter:", counter);

// Post-decrement: returns value, then decrements
let postDec = counter--;
console.log("postDec = counter--:", postDec, "counter:", counter);

// Pre-decrement: decrements, then returns value
let preDec = --counter;
console.log("preDec = --counter:", preDec, "counter:", counter);

// Practical example
console.log("\nLoop simulation:");
let i = 0;
while (i < 3) {
    console.log("Iteration", i);
    i++;  // Increment after each iteration
}

console.log("\n=== Ternary Operator ===");
let age = 20;
let status = age >= 18 ? "adult" : "minor";
console.log(`Age ${age}: ${status}`);

let score = 85;
let grade = score >= 90 ? "A" :
            score >= 80 ? "B" :
            score >= 70 ? "C" :
            score >= 60 ? "D" : "F";
console.log(`Score ${score}: Grade ${grade}`);

// Nested ternary operators
let temperature = 75;
let weather = temperature > 80 ? "hot" :
              temperature > 60 ? "warm" :
              temperature > 40 ? "cool" : "cold";
console.log(`Temperature ${temperature}°F: ${weather}`);

// Ternary with function calls
function getDiscount(price) {
    return price > 100 ? price * 0.1 : price * 0.05;
}

let itemPrice = 120;
let discount = getDiscount(itemPrice);
console.log(`Price: $${itemPrice}, Discount: $${discount}`);

console.log("\n=== Operator Precedence ===");
let result = 2 + 3 * 4;  // Multiplication has higher precedence
console.log("2 + 3 * 4 =", result);  // 14, not 20

let result2 = (2 + 3) * 4;  // Parentheses override precedence
console.log("(2 + 3) * 4 =", result2);  // 20

let result3 = 10 + 5 > 12 && 8 < 10;
console.log("10 + 5 > 12 && 8 < 10 =", result3);

// Complex precedence example
let complex = 5 + 3 * 2 ** 3 - 4 / 2;
console.log("5 + 3 * 2 ** 3 - 4 / 2 =", complex);
// Breakdown: 5 + 3 * 8 - 2 = 5 + 24 - 2 = 27

console.log("\n=== Type Coercion with Operators ===");
console.log("'5' + 3 =", "5" + 3);        // String concatenation: "53"
console.log("'5' - 3 =", "5" - 3);        // Numeric subtraction: 2
console.log("'5' * 3 =", "5" * 3);        // Numeric multiplication: 15
console.log("'5' / 3 =", "5" / 3);        // Numeric division: 1.666...

console.log("true + 1 =", true + 1);      // 2 (true coerces to 1)
console.log("false + 1 =", false + 1);    // 1 (false coerces to 0)
console.log("null + 1 =", null + 1);      // 1 (null coerces to 0)
console.log("undefined + 1 =", undefined + 1);  // NaN

// Comparison with type coercion
console.log("0 == false:", 0 == false);      // true
console.log("0 === false:", 0 === false);    // false
console.log("'' == false:", '' == false);    // true
console.log("'' === false:", '' === false);  // false
console.log("null == undefined:", null == undefined);    // true
console.log("null === undefined:", null === undefined);  // false

console.log("\n=== Bitwise Operators (Advanced) ===");
let numA = 5;  // Binary: 101
let numB = 3;  // Binary: 011

console.log(`numA = ${numA} (${numA.toString(2)}), numB = ${numB} (${numB.toString(2)})`);
console.log("numA & numB (AND):", numA & numB, `(${ (numA & numB).toString(2) })`);
console.log("numA | numB (OR):", numA | numB, `(${ (numA | numB).toString(2) })`);
console.log("numA ^ numB (XOR):", numA ^ numB, `(${ (numA ^ numB).toString(2) })`);
console.log("~numA (NOT):", ~numA);
console.log("numA << 1 (Left shift):", numA << 1, `(${ (numA << 1).toString(2) })`);
console.log("numA >> 1 (Right shift):", numA >> 1, `(${ (numA >> 1).toString(2) })`);

// Practical use: checking if number is even/odd
function isEven(n) {
    return (n & 1) === 0;
}

function isOdd(n) {
    return (n & 1) === 1;
}

console.log("6 is even:", isEven(6));
console.log("7 is odd:", isOdd(7));
*/