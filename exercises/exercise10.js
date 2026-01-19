/**
 * Exercise 10: Error Handling
 *
 * Error handling is crucial for writing robust JavaScript code.
 * JavaScript provides try-catch-finally blocks for handling errors.
 *
 * Task:
 * 1. Use try-catch blocks
 * 2. Throw custom errors
 * 3. Use finally blocks
 * 4. Handle different types of errors
 * 5. Create error-safe functions
 * 6. Use error objects
 *
 * To run this exercise:
 * node exercises/exercise10.js
 */

// TODO: Basic try-catch
// try {
//     let result = 10 / 0;
//     console.log("Result:", result);
// } catch (error) {
//     console.log("Error caught:", error.message);
// }

// TODO: Throw custom error
// function divide(a, b) {
//     if (b === 0) {
//         throw new Error("Division by zero is not allowed");
//     }
//     return a / b;
// }

// TODO: Try-catch-finally
// try {
//     console.log("Trying to execute code...");
//     let data = JSON.parse('{"name": "John"}');
//     console.log("Data:", data);
// } catch (error) {
//     console.log("Error:", error.message);
// } finally {
//     console.log("This always executes");
// }

// TODO: Handle different error types
// function processData(data) {
//     try {
//         if (typeof data !== "string") {
//             throw new TypeError("Data must be a string");
//         }
//         let parsed = JSON.parse(data);
//         if (!parsed.name) {
//             throw new ReferenceError("Name property is required");
//         }
//         return parsed;
//     } catch (error) {
//         if (error instanceof TypeError) {
//             console.log("Type error:", error.message);
//         } else if (error instanceof ReferenceError) {
//             console.log("Reference error:", error.message);
//         } else if (error instanceof SyntaxError) {
//             console.log("Syntax error:", error.message);
//         } else {
//             console.log("Unknown error:", error.message);
//         }
//         return null;
//     }
// }

// TODO: Error-safe function
// function safeDivide(a, b) {
//     try {
//         if (typeof a !== "number" || typeof b !== "number") {
//             throw new TypeError("Both arguments must be numbers");
//         }
//         if (b === 0) {
//             throw new Error("Division by zero");
//         }
//         return a / b;
//     } catch (error) {
//         console.error("Error in safeDivide:", error.message);
//         return null;
//     }
// }

/*
SOLUTION:
console.log("=== Basic Try-Catch ===");
try {
    console.log("Attempting division by zero...");
    let result = 10 / 0;
    console.log("Result:", result); // This will execute (Infinity)
} catch (error) {
    console.log("Error caught:", error.message);
}

try {
    console.log("Attempting to access undefined variable...");
    console.log(undefinedVariable); // This will throw ReferenceError
} catch (error) {
    console.log("Error caught:", error.message);
}

console.log("\n=== Throwing Custom Errors ===");
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("Both arguments must be numbers");
    }
    return a / b;
}

try {
    console.log("Dividing 10 by 2:", divide(10, 2));
    console.log("Dividing 10 by 0:", divide(10, 0));
} catch (error) {
    console.log("Error:", error.message);
}

try {
    console.log("Dividing with strings:", divide("10", "2"));
} catch (error) {
    console.log("Error:", error.message);
}

console.log("\n=== Try-Catch-Finally ===");
function processFile(fileName) {
    try {
        console.log(`Processing file: ${fileName}`);
        // Simulate file processing
        if (fileName === "error.txt") {
            throw new Error("File not found");
        }
        console.log("File processed successfully");
        return "success";
    } catch (error) {
        console.log("Error during processing:", error.message);
        return "error";
    } finally {
        console.log("Cleanup: Closing file handles");
    }
}

processFile("data.txt");
console.log("---");
processFile("error.txt");

console.log("\n=== Handling Different Error Types ===");
function processData(data) {
    try {
        if (typeof data !== "string") {
            throw new TypeError("Data must be a string");
        }

        let parsed = JSON.parse(data);

        if (!parsed.name) {
            throw new ReferenceError("Name property is required");
        }

        if (parsed.age && typeof parsed.age !== "number") {
            throw new RangeError("Age must be a number");
        }

        return parsed;
    } catch (error) {
        if (error instanceof TypeError) {
            console.log("Type error:", error.message);
        } else if (error instanceof ReferenceError) {
            console.log("Reference error:", error.message);
        } else if (error instanceof SyntaxError) {
            console.log("JSON syntax error:", error.message);
        } else if (error instanceof RangeError) {
            console.log("Range error:", error.message);
        } else {
            console.log("Unknown error:", error.message);
        }
        return null;
    }
}

// Test different error scenarios
let testData = [
    '{"name": "John", "age": 30}',  // Valid
    123,                           // TypeError
    '{"name": "Jane"}',            // Valid
    '{"age": 25}',                 // ReferenceError
    '{"name": "Bob", "age": "25"}', // RangeError
    '{"name": "Alice", invalid}',   // SyntaxError
];

for (let data of testData) {
    console.log(`Processing: ${data}`);
    let result = processData(data);
    console.log("Result:", result);
    console.log("---");
}

console.log("\n=== Error-Safe Functions ===");
function safeDivide(a, b) {
    try {
        if (typeof a !== "number" || typeof b !== "number") {
            throw new TypeError("Both arguments must be numbers");
        }
        if (b === 0) {
            throw new Error("Division by zero");
        }
        return a / b;
    } catch (error) {
        console.error(`Error in safeDivide(${a}, ${b}):`, error.message);
        return null;
    }
}

function safeParseJSON(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.error(`Error parsing JSON "${jsonString}":`, error.message);
        return null;
    }
}

function safeArrayAccess(array, index) {
    try {
        if (!Array.isArray(array)) {
            throw new TypeError("First argument must be an array");
        }
        if (typeof index !== "number") {
            throw new TypeError("Index must be a number");
        }
        if (index < 0 || index >= array.length) {
            throw new RangeError(`Index ${index} is out of bounds`);
        }
        return array[index];
    } catch (error) {
        console.error(`Error accessing array[${index}]:`, error.message);
        return undefined;
    }
}

// Test error-safe functions
console.log("safeDivide(10, 2):", safeDivide(10, 2));
console.log("safeDivide(10, 0):", safeDivide(10, 0));
console.log("safeDivide('10', 2):", safeDivide("10", 2));

console.log("\nsafeParseJSON('{\"name\": \"John\"}'):", safeParseJSON('{"name": "John"}'));
console.log("safeParseJSON('invalid json'):", safeParseJSON("invalid json"));

let testArray = [1, 2, 3, 4, 5];
console.log("\nsafeArrayAccess([1,2,3,4,5], 2):", safeArrayAccess(testArray, 2));
console.log("safeArrayAccess([1,2,3,4,5], 10):", safeArrayAccess(testArray, 10));
console.log("safeArrayAccess('not array', 0):", safeArrayAccess("not array", 0));

console.log("\n=== Custom Error Classes ===");
class ValidationError extends Error {
    constructor(message, field) {
        super(message);
        this.name = "ValidationError";
        this.field = field;
    }
}

class DatabaseError extends Error {
    constructor(message, code) {
        super(message);
        this.name = "DatabaseError";
        this.code = code;
    }
}

function validateUser(user) {
    if (!user.name) {
        throw new ValidationError("Name is required", "name");
    }
    if (!user.email) {
        throw new ValidationError("Email is required", "email");
    }
    if (user.age && user.age < 0) {
        throw new ValidationError("Age cannot be negative", "age");
    }
    return true;
}

function saveToDatabase(user) {
    // Simulate database error
    if (user.email === "error@example.com") {
        throw new DatabaseError("Database connection failed", 500);
    }
    return "User saved successfully";
}

function createUser(userData) {
    try {
        validateUser(userData);
        return saveToDatabase(userData);
    } catch (error) {
        if (error instanceof ValidationError) {
            console.log(`Validation error in field "${error.field}": ${error.message}`);
        } else if (error instanceof DatabaseError) {
            console.log(`Database error (code ${error.code}): ${error.message}`);
        } else {
            console.log("Unexpected error:", error.message);
        }
        return null;
    }
}

// Test custom errors
let users = [
    { name: "John", email: "john@example.com", age: 30 },
    { name: "Jane" }, // Missing email
    { name: "Bob", email: "bob@example.com", age: -5 }, // Invalid age
    { name: "Error", email: "error@example.com" }, // Database error
];

for (let user of users) {
    console.log(`Creating user: ${JSON.stringify(user)}`);
    let result = createUser(user);
    console.log("Result:", result);
    console.log("---");
}
*/