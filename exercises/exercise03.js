/**
 * Exercise 03: Conditionals
 *
 * Conditional statements allow you to execute different code based on conditions.
 * JavaScript provides if, else if, else, and switch statements.
 *
 * Task:
 * 1. Create a variable for a person's age
 * 2. Use if-else statements to determine if they're a child, teen, adult, or senior
 * 3. Create a grading system using if-else if-else
 * 4. Use a switch statement for day of the week
 * 5. Demonstrate ternary operator
 *
 * To run this exercise:
 * node exercises/exercise03.js
 */

// TODO: Create age variable and use if-else for age categories
// let age = 25;

// if (age < 13) {
//     console.log("You are a child");
// } else if (age < 20) {
//     console.log("You are a teenager");
// } else if (age < 65) {
//     console.log("You are an adult");
// } else {
//     console.log("You are a senior");
// }

// TODO: Create grading system
// let score = 85;

// if (score >= 90) {
//     console.log("Grade: A");
// } else if (score >= 80) {
//     console.log("Grade: B");
// } else if (score >= 70) {
//     console.log("Grade: C");
// } else if (score >= 60) {
//     console.log("Grade: D");
// } else {
//     console.log("Grade: F");
// }

// TODO: Use switch statement for days
// let day = 3;

// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     default:
//         console.log("Other day");
// }

// TODO: Demonstrate ternary operator
// let isLoggedIn = true;
// let message = isLoggedIn ? "Welcome back!" : "Please log in";
// console.log(message);

/*
SOLUTION:
let age = 42;

console.log("=== Age Category Check ===");
if (age < 13) {
    console.log("You are a child");
} else if (age < 20) {
    console.log("You are a teenager");
} else if (age < 65) {
    console.log("You are an adult");
} else {
    console.log("You are a senior");
}

console.log("\n=== Grading System ===");
let score = 87;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}

console.log("\n=== Day of Week (Switch) ===");
let day = 5;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number");
}

console.log("\n=== Ternary Operator ===");
let isLoggedIn = false;
let message = isLoggedIn ? "Welcome back!" : "Please log in";
console.log(message);

// Another ternary example
let temperature = 75;
let weather = temperature > 80 ? "hot" : temperature > 60 ? "warm" : "cool";
console.log(`The weather is ${weather}`);
*/