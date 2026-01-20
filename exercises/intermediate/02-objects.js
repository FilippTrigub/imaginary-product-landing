/**
 * EXERCISE 4: Objects and Object Methods
 * 
 * Master JavaScript objects, destructuring, and object manipulation.
 */

// ============================================
// CHALLENGE 1: Create Person Object
// ============================================
/**
 * Create a function that returns a person object with:
 * - firstName, lastName, age properties
 * - A method getFullName() that returns "firstName lastName"
 * - A method isAdult() that returns true if age >= 18
 * 
 * Example: createPerson("John", "Doe", 25).getFullName() => "John Doe"
 */

function createPerson(firstName, lastName, age) {
    // YOUR CODE HERE
}


// ============================================
// CHALLENGE 2: Merge Objects
// ============================================
/**
 * Create a function that merges two objects
 * If keys conflict, values from obj2 should override obj1
 * 
 * Example: mergeObjects({a:1,b:2}, {b:3,c:4}) => {a:1,b:3,c:4}
 */

function mergeObjects(obj1, obj2) {
    // YOUR CODE HERE
}


// ============================================
// CHALLENGE 3: Object Destructuring
// ============================================
/**
 * Create a function that takes a user object and returns
 * a formatted string using destructuring
 * User object: { name, email, age }
 * 
 * Example: formatUser({name:"Alice",email:"alice@test.com",age:25})
 * => "Alice (alice@test.com) - 25 years old"
 */

function formatUser(user) {
    // YOUR CODE HERE (use destructuring)
}


// ============================================
// CHALLENGE 4: Count Properties
// ============================================
/**
 * Create a function that counts the number of properties in an object
 * 
 * Example: countProperties({a:1,b:2,c:3}) => 3
 */

function countProperties(obj) {
    // YOUR CODE HERE
}


// ============================================
// CHALLENGE 5: Invert Object
// ============================================
/**
 * Create a function that inverts an object (swap keys and values)
 * 
 * Example: invertObject({a:"1",b:"2"}) => {"1":"a","2":"b"}
 */

function invertObject(obj) {
    // YOUR CODE HERE
}


// ============================================
// CHALLENGE 6: Deep Clone
// ============================================
/**
 * Create a function that deep clones an object
 * (nested objects should also be cloned, not referenced)
 * 
 * Example: 
 * const original = {a:1, b:{c:2}};
 * const cloned = deepClone(original);
 * cloned.b.c = 3;
 * original.b.c should still be 2
 */

function deepClone(obj) {
    // YOUR CODE HERE
}


// ============================================
// CHALLENGE 7: Pick Properties
// ============================================
/**
 * Create a function that picks specific properties from an object
 * 
 * Example: pick({a:1,b:2,c:3}, ["a","c"]) => {a:1,c:3}
 */

function pick(obj, keys) {
    // YOUR CODE HERE
}


// ============================================
// CHALLENGE 8: Has Path
// ============================================
/**
 * Create a function that checks if a nested path exists in an object
 * 
 * Example: 
 * hasPath({a:{b:{c:1}}}, "a.b.c") => true
 * hasPath({a:{b:{c:1}}}, "a.b.d") => false
 */

function hasPath(obj, path) {
    // YOUR CODE HERE
}


// ============================================
// TESTS - Don't modify below this line
// ============================================

function runTests() {
    console.log("Running Tests for Exercise 4...\n");
    
    // Test createPerson
    console.log("Test createPerson:");
    const person = createPerson("John", "Doe", 25);
    console.log(person.getFullName() === "John Doe" ? "✓ PASS" : "✗ FAIL");
    console.log(person.isAdult() === true ? "✓ PASS" : "✗ FAIL");
    
    // Test mergeObjects
    console.log("\nTest mergeObjects:");
    const merged = mergeObjects({a:1,b:2}, {b:3,c:4});
    console.log(merged.a === 1 && merged.b === 3 && merged.c === 4 ? "✓ PASS" : "✗ FAIL");
    
    // Test formatUser
    console.log("\nTest formatUser:");
    const formatted = formatUser({name:"Alice",email:"alice@test.com",age:25});
    console.log(formatted === "Alice (alice@test.com) - 25 years old" ? "✓ PASS" : "✗ FAIL");
    
    // Test countProperties
    console.log("\nTest countProperties:");
    console.log(countProperties({a:1,b:2,c:3}) === 3 ? "✓ PASS" : "✗ FAIL");
    
    // Test invertObject
    console.log("\nTest invertObject:");
    const inverted = invertObject({a:"1",b:"2"});
    console.log(inverted["1"] === "a" && inverted["2"] === "b" ? "✓ PASS" : "✗ FAIL");
    
    // Test deepClone
    console.log("\nTest deepClone:");
    const original = {a:1, b:{c:2}};
    const cloned = deepClone(original);
    cloned.b.c = 3;
    console.log(original.b.c === 2 ? "✓ PASS" : "✗ FAIL");
    
    // Test pick
    console.log("\nTest pick:");
    const picked = pick({a:1,b:2,c:3}, ["a","c"]);
    console.log(picked.a === 1 && picked.c === 3 && picked.b === undefined ? "✓ PASS" : "✗ FAIL");
    
    // Test hasPath
    console.log("\nTest hasPath:");
    console.log(hasPath({a:{b:{c:1}}}, "a.b.c") === true ? "✓ PASS" : "✗ FAIL");
    console.log(hasPath({a:{b:{c:1}}}, "a.b.d") === false ? "✓ PASS" : "✗ FAIL");
    
    console.log("\n" + "=".repeat(50));
}

// Uncomment to run tests
// runTests();

module.exports = { 
    createPerson, 
    mergeObjects, 
    formatUser, 
    countProperties, 
    invertObject, 
    deepClone, 
    pick, 
    hasPath 
};
