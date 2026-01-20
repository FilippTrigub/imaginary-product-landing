/**
 * JAVASCRIPT CODING CHALLENGES
 * 
 * This file contains 5 coding challenges with varying difficulty levels.
 * Each challenge includes:
 * - Problem description
 * - Function signature
 * - Test cases
 * - Solution (commented out - try solving before looking!)
 */

// ============================================================================
// CHALLENGE 1: Array Chunk
// Difficulty: Easy
// ============================================================================

/**
 * Problem: Split an array into chunks of a specified size.
 * 
 * Write a function that takes an array and a chunk size, then returns a new
 * array where the original array is split into subarrays of the given size.
 * 
 * Examples:
 * chunk([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]
 * chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) => [[1, 2, 3], [4, 5, 6], [7, 8]]
 * chunk([1, 2, 3], 5) => [[1, 2, 3]]
 * chunk([], 2) => []
 */

function chunk(array, size) {
    // YOUR CODE HERE
}

// Test cases for Challenge 1
function testChallenge1() {
    console.log('=== CHALLENGE 1: Array Chunk ===');
    console.log('Test 1:', JSON.stringify(chunk([1, 2, 3, 4, 5], 2)));
    // Expected: [[1, 2], [3, 4], [5]]
    
    console.log('Test 2:', JSON.stringify(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)));
    // Expected: [[1, 2, 3], [4, 5, 6], [7, 8]]
    
    console.log('Test 3:', JSON.stringify(chunk([1, 2, 3], 5)));
    // Expected: [[1, 2, 3]]
    
    console.log('Test 4:', JSON.stringify(chunk([], 2)));
    // Expected: []
    console.log('');
}

/* SOLUTION 1 (uncomment to reveal):
function chunk(array, size) {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
}
*/


// ============================================================================
// CHALLENGE 2: Palindrome Checker
// Difficulty: Easy-Medium
// ============================================================================

/**
 * Problem: Check if a string is a palindrome.
 * 
 * A palindrome is a word, phrase, or sequence that reads the same backward
 * as forward. Ignore spaces, punctuation, and capitalization.
 * 
 * Examples:
 * isPalindrome("racecar") => true
 * isPalindrome("A man a plan a canal Panama") => true
 * isPalindrome("hello") => false
 * isPalindrome("Was it a car or a cat I saw?") => true
 */

function isPalindrome(str) {
    // YOUR CODE HERE
}

// Test cases for Challenge 2
function testChallenge2() {
    console.log('=== CHALLENGE 2: Palindrome Checker ===');
    console.log('Test 1:', isPalindrome("racecar"));
    // Expected: true
    
    console.log('Test 2:', isPalindrome("A man a plan a canal Panama"));
    // Expected: true
    
    console.log('Test 3:', isPalindrome("hello"));
    // Expected: false
    
    console.log('Test 4:', isPalindrome("Was it a car or a cat I saw?"));
    // Expected: true
    console.log('');
}

/* SOLUTION 2 (uncomment to reveal):
function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
}
*/


// ============================================================================
// CHALLENGE 3: Debounce Function
// Difficulty: Medium
// ============================================================================

/**
 * Problem: Implement a debounce function.
 * 
 * Debouncing ensures that a function is not called too frequently. The function
 * should only execute after a specified delay has passed since the last time
 * it was invoked.
 * 
 * This is commonly used for search inputs, window resize events, etc.
 * 
 * Example usage:
 * const debouncedLog = debounce(() => console.log('Hello!'), 1000);
 * debouncedLog(); // Won't execute immediately
 * debouncedLog(); // Resets the timer
 * debouncedLog(); // After 1 second of no calls, "Hello!" is logged
 */

function debounce(func, delay) {
    // YOUR CODE HERE
}

// Test cases for Challenge 3
function testChallenge3() {
    console.log('=== CHALLENGE 3: Debounce Function ===');
    let counter = 0;
    const increment = () => {
        counter++;
        console.log('Counter:', counter);
    };
    
    const debouncedIncrement = debounce(increment, 500);
    
    console.log('Calling debounced function 5 times rapidly...');
    debouncedIncrement();
    debouncedIncrement();
    debouncedIncrement();
    debouncedIncrement();
    debouncedIncrement();
    
    console.log('Waiting for debounce delay...');
    setTimeout(() => {
        console.log('Final counter value:', counter);
        // Expected: 1 (only executed once after delay)
        console.log('');
    }, 1000);
}

/* SOLUTION 3 (uncomment to reveal):
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}
*/


// ============================================================================
// CHALLENGE 4: Deep Object Comparison
// Difficulty: Medium-Hard
// ============================================================================

/**
 * Problem: Compare two objects for deep equality.
 * 
 * Write a function that compares two objects and returns true if they are
 * deeply equal (same structure and values), false otherwise. Handle nested
 * objects and arrays.
 * 
 * Examples:
 * deepEqual({a: 1, b: 2}, {a: 1, b: 2}) => true
 * deepEqual({a: 1, b: 2}, {b: 2, a: 1}) => true
 * deepEqual({a: 1, b: {c: 3}}, {a: 1, b: {c: 3}}) => true
 * deepEqual({a: 1}, {a: 1, b: 2}) => false
 * deepEqual([1, 2, 3], [1, 2, 3]) => true
 */

function deepEqual(obj1, obj2) {
    // YOUR CODE HERE
}

// Test cases for Challenge 4
function testChallenge4() {
    console.log('=== CHALLENGE 4: Deep Object Comparison ===');
    console.log('Test 1:', deepEqual({a: 1, b: 2}, {a: 1, b: 2}));
    // Expected: true
    
    console.log('Test 2:', deepEqual({a: 1, b: 2}, {b: 2, a: 1}));
    // Expected: true
    
    console.log('Test 3:', deepEqual({a: 1, b: {c: 3}}, {a: 1, b: {c: 3}}));
    // Expected: true
    
    console.log('Test 4:', deepEqual({a: 1}, {a: 1, b: 2}));
    // Expected: false
    
    console.log('Test 5:', deepEqual([1, 2, 3], [1, 2, 3]));
    // Expected: true
    
    console.log('Test 6:', deepEqual([1, 2, 3], [1, 2, 4]));
    // Expected: false
    console.log('');
}

/* SOLUTION 4 (uncomment to reveal):
function deepEqual(obj1, obj2) {
    if (obj1 === obj2) return true;
    
    if (obj1 == null || obj2 == null) return false;
    
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') return false;
    
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    
    if (keys1.length !== keys2.length) return false;
    
    for (let key of keys1) {
        if (!keys2.includes(key)) return false;
        if (!deepEqual(obj1[key], obj2[key])) return false;
    }
    
    return true;
}
*/


// ============================================================================
// CHALLENGE 5: Async Rate Limiter
// Difficulty: Hard
// ============================================================================

/**
 * Problem: Implement a rate limiter for async functions.
 * 
 * Create a function that limits the number of concurrent async operations.
 * It should queue additional requests and execute them as previous ones complete.
 * 
 * The rateLimiter should:
 * - Accept a maximum number of concurrent operations
 * - Return a function that wraps async operations
 * - Ensure no more than 'max' operations run simultaneously
 * - Queue and execute pending operations as slots become available
 * 
 * Example usage:
 * const limiter = rateLimiter(2); // Max 2 concurrent operations
 * const limitedFetch = limiter(fetch);
 * // Multiple calls will be limited to 2 at a time
 */

function rateLimiter(maxConcurrent) {
    // YOUR CODE HERE
}

// Test cases for Challenge 5
async function testChallenge5() {
    console.log('=== CHALLENGE 5: Async Rate Limiter ===');
    
    const limiter = rateLimiter(2);
    
    // Simulate async operations
    const mockAsyncOperation = (id, duration) => {
        return new Promise(resolve => {
            console.log(`Operation ${id} started`);
            setTimeout(() => {
                console.log(`Operation ${id} completed`);
                resolve(id);
            }, duration);
        });
    };
    
    const limitedOperation = limiter(mockAsyncOperation);
    
    console.log('Starting 5 operations with max 2 concurrent...');
    const promises = [
        limitedOperation(1, 1000),
        limitedOperation(2, 500),
        limitedOperation(3, 800),
        limitedOperation(4, 300),
        limitedOperation(5, 600)
    ];
    
    await Promise.all(promises);
    console.log('All operations completed!');
    console.log('');
}

/* SOLUTION 5 (uncomment to reveal):
function rateLimiter(maxConcurrent) {
    let running = 0;
    const queue = [];
    
    const runNext = () => {
        if (queue.length > 0 && running < maxConcurrent) {
            const { fn, args, resolve, reject } = queue.shift();
            running++;
            
            fn(...args)
                .then(resolve)
                .catch(reject)
                .finally(() => {
                    running--;
                    runNext();
                });
        }
    };
    
    return (fn) => {
        return (...args) => {
            return new Promise((resolve, reject) => {
                queue.push({ fn, args, resolve, reject });
                runNext();
            });
        };
    };
}
*/


// ============================================================================
// RUN ALL TESTS
// ============================================================================

async function runAllTests() {
    console.log('\n🚀 JAVASCRIPT CODING CHALLENGES\n');
    console.log('Uncomment your solutions and run this file to test!\n');
    
    testChallenge1();
    testChallenge2();
    testChallenge3();
    testChallenge4();
    testChallenge6();
    testChallenge7();
    testChallenge8();
    
    // Wait for debounce test to complete
    setTimeout(() => {
        // Run async test last
        setTimeout(async () => {
            await testChallenge5();
            console.log('✅ All tests completed!\n');
        }, 100);
    }, 1500);
}

// Uncomment to run all tests:
// runAllTests();


// ============================================================================
// CHALLENGE 6: Find Missing Number
// Difficulty: Easy
// ============================================================================

/**
 * Problem: Find the missing number in an array.
 * 
 * Given an array containing n distinct numbers taken from 0, 1, 2, ..., n,
 * find the one that is missing from the array.
 * 
 * Examples:
 * findMissingNumber([3, 0, 1]) => 2
 * findMissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]) => 8
 * findMissingNumber([0, 1]) => 2
 */

function findMissingNumber(nums) {
    // YOUR CODE HERE
}

// Test cases for Challenge 6
function testChallenge6() {
    console.log('=== CHALLENGE 6: Find Missing Number ===');
    console.log('Test 1:', findMissingNumber([3, 0, 1]));
    // Expected: 2

    console.log('Test 2:', findMissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
    // Expected: 8

    console.log('Test 3:', findMissingNumber([0, 1]));
    // Expected: 2
    console.log('');
}

/* SOLUTION 6 (uncomment to reveal):
function findMissingNumber(nums) {
    const n = nums.length;
    const expectedSum = n * (n + 1) / 2;
    const actualSum = nums.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}
*/


// ============================================================================
// CHALLENGE 7: Flatten Array
// Difficulty: Medium
// ============================================================================

/**
 * Problem: Flatten a nested array.
 * 
 * Given a nested array, return a new array with all elements flattened
 * to a single level.
 * 
 * Examples:
 * flattenArray([1, [2, 3], [4, [5]]]) => [1, 2, 3, 4, 5]
 * flattenArray([1, 2, 3]) => [1, 2, 3]
 * flattenArray([]) => []
 */

function flattenArray(arr) {
    // YOUR CODE HERE
}

// Test cases for Challenge 7
function testChallenge7() {
    console.log('=== CHALLENGE 7: Flatten Array ===');
    console.log('Test 1:', JSON.stringify(flattenArray([1, [2, 3], [4, [5]]])));
    // Expected: [1, 2, 3, 4, 5]

    console.log('Test 2:', JSON.stringify(flattenArray([1, 2, 3])));
    // Expected: [1, 2, 3]

    console.log('Test 3:', JSON.stringify(flattenArray([])));
    // Expected: []
    console.log('');
}

/* SOLUTION 7 (uncomment to reveal):
function flattenArray(arr) {
    const result = [];
    for (const item of arr) {
        if (Array.isArray(item)) {
            result.push(...flattenArray(item));
        } else {
            result.push(item);
        }
    }
    return result;
}
*/


// ============================================================================
// CHALLENGE 8: Curry Function
// Difficulty: Hard
// ============================================================================

/**
 * Problem: Implement a currying function.
 * 
 * Write a `curry` function that takes a function `fn` as an argument and
 * returns a curried version of `fn`. Currying is a technique of converting
 * a function that takes multiple arguments into a sequence of functions that
 * each takes a single argument.
 * 
 * Examples:
 * const add = (a, b, c) => a + b + c;
 * const curriedAdd = curry(add);
 * curriedAdd(1)(2)(3) => 6
 * curriedAdd(1, 2)(3) => 6
 * curriedAdd(1)(2, 3) => 6
 */

function curry(fn) {
    // YOUR CODE HERE
}

// Test cases for Challenge 8
function testChallenge8() {
    console.log('=== CHALLENGE 8: Curry Function ===');

    const add = (a, b, c) => a + b + c;
    const curriedAdd = curry(add);

    console.log('Test 1 (curriedAdd(1)(2)(3)):', curriedAdd(1)(2)(3));
    // Expected: 6

    console.log('Test 2 (curriedAdd(1, 2)(3)):', curriedAdd(1, 2)(3));
    // Expected: 6

    console.log('Test 3 (curriedAdd(1)(2, 3)):', curriedAdd(1)(2, 3));
    // Expected: 6

    const multiply = (a, b) => a * b;
    const curriedMultiply = curry(multiply);
    console.log('Test 4 (curriedMultiply(5)(4)):', curriedMultiply(5)(4));
    // Expected: 20
    
    console.log('');
}

/* SOLUTION 8 (uncomment to reveal):
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        } else {
            return function (...nextArgs) {
                return curried(...args, ...nextArgs);
            }
        }
    };
}
*/


// Export functions for use in other files (if using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        chunk,
        isPalindrome,
        debounce,
        deepEqual,
        rateLimiter,
        findMissingNumber,
        flattenArray,
        curry
    };
}
