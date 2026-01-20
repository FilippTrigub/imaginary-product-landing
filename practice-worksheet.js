/**
 * JavaScript Coding Exercises - Practice Worksheet
 * 
 * Instructions:
 * 1. Implement each function below
 * 2. Run the tests to verify your solutions: node exercises-tests.js
 * 3. Compare your solutions with exercises-solutions.js
 * 
 * Tips:
 * - Start with beginner exercises
 * - Think about edge cases
 * - Consider time and space complexity
 * - Try multiple approaches
 */

// ============================================
// BEGINNER EXERCISES
// ============================================

/**
 * Exercise 1: Array Sum
 * Write a function that takes an array of numbers and returns their sum.
 * 
 * Example:
 * sumArray([1, 2, 3, 4, 5]) // Returns: 15
 * 
 * @param {number[]} arr - Array of numbers
 * @returns {number} Sum of all numbers
 */
function sumArray(arr) {
    // TODO: Implement this function
}

/**
 * Exercise 2: Reverse String
 * Write a function that reverses a string without using the built-in reverse() method.
 * 
 * Example:
 * reverseString("hello") // Returns: "olleh"
 * 
 * @param {string} str - String to reverse
 * @returns {string} Reversed string
 */
function reverseString(str) {
    // TODO: Implement this function
}

/**
 * Exercise 3: Find Maximum
 * Write a function that finds the maximum number in an array.
 * 
 * Example:
 * findMax([3, 7, 2, 9, 1]) // Returns: 9
 * 
 * @param {number[]} arr - Array of numbers
 * @returns {number} Maximum number
 */
function findMax(arr) {
    // TODO: Implement this function
}

/**
 * Exercise 4: Count Vowels
 * Write a function that counts the number of vowels in a string.
 * 
 * Example:
 * countVowels("javascript") // Returns: 3
 * 
 * @param {string} str - String to analyze
 * @returns {number} Number of vowels
 */
function countVowels(str) {
    // TODO: Implement this function
}

/**
 * Exercise 5: Palindrome Checker
 * Write a function that checks if a string is a palindrome.
 * 
 * Example:
 * isPalindrome("racecar") // Returns: true
 * isPalindrome("hello") // Returns: false
 * 
 * @param {string} str - String to check
 * @returns {boolean} True if palindrome, false otherwise
 */
function isPalindrome(str) {
    // TODO: Implement this function
}

// ============================================
// INTERMEDIATE EXERCISES
// ============================================

/**
 * Exercise 6: FizzBuzz
 * Print numbers from 1 to n. For multiples of 3, print "Fizz",
 * for multiples of 5, print "Buzz", and for multiples of both, print "FizzBuzz".
 * 
 * Example:
 * fizzBuzz(15) // Returns: [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
 * 
 * @param {number} n - Upper limit
 * @returns {Array} FizzBuzz sequence
 */
function fizzBuzz(n) {
    // TODO: Implement this function
}

/**
 * Exercise 7: Flatten Array
 * Write a function that flattens a nested array of any depth.
 * 
 * Example:
 * flattenArray([1, [2, [3, [4]], 5]]) // Returns: [1, 2, 3, 4, 5]
 * 
 * @param {Array} arr - Nested array
 * @returns {Array} Flattened array
 */
function flattenArray(arr) {
    // TODO: Implement this function
}

/**
 * Exercise 8: Remove Duplicates
 * Write a function that removes duplicate values from an array.
 * 
 * Example:
 * removeDuplicates([1, 2, 2, 3, 4, 4, 5]) // Returns: [1, 2, 3, 4, 5]
 * 
 * @param {Array} arr - Array with duplicates
 * @returns {Array} Array without duplicates
 */
function removeDuplicates(arr) {
    // TODO: Implement this function
}

/**
 * Exercise 9: Anagram Checker
 * Write a function that checks if two strings are anagrams of each other.
 * 
 * Example:
 * areAnagrams("listen", "silent") // Returns: true
 * areAnagrams("hello", "world") // Returns: false
 * 
 * @param {string} str1 - First string
 * @param {string} str2 - Second string
 * @returns {boolean} True if anagrams, false otherwise
 */
function areAnagrams(str1, str2) {
    // TODO: Implement this function
}

/**
 * Exercise 10: Chunk Array
 * Write a function that splits an array into chunks of a specified size.
 * 
 * Example:
 * chunkArray([1, 2, 3, 4, 5, 6, 7], 3) // Returns: [[1, 2, 3], [4, 5, 6], [7]]
 * 
 * @param {Array} arr - Array to chunk
 * @param {number} size - Chunk size
 * @returns {Array} Array of chunks
 */
function chunkArray(arr, size) {
    // TODO: Implement this function
}

// ============================================
// ADVANCED EXERCISES
// ============================================

/**
 * Exercise 11: Debounce Function
 * Implement a debounce function that delays the execution of a function
 * until after a specified wait time has elapsed since the last time it was invoked.
 * 
 * Example:
 * const debouncedFunc = debounce(() => console.log("Called!"), 1000);
 * debouncedFunc(); // Will only execute after 1 second of no more calls
 * 
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
function debounce(func, wait) {
    // TODO: Implement this function
}

/**
 * Exercise 12: Deep Clone Object
 * Write a function that creates a deep clone of an object
 * (including nested objects and arrays).
 * 
 * Example:
 * const original = { a: 1, b: { c: 2 } };
 * const cloned = deepClone(original);
 * cloned.b.c = 3;
 * console.log(original.b.c); // Should still be 2
 * 
 * @param {*} obj - Object to clone
 * @returns {*} Deep cloned object
 */
function deepClone(obj) {
    // TODO: Implement this function
}

/**
 * Exercise 13: Curry Function
 * Implement a curry function that transforms a function with multiple arguments
 * into a sequence of functions each taking a single argument.
 * 
 * Example:
 * const add = (a, b, c) => a + b + c;
 * const curriedAdd = curry(add);
 * curriedAdd(1)(2)(3); // Returns: 6
 * 
 * @param {Function} func - Function to curry
 * @returns {Function} Curried function
 */
function curry(func) {
    // TODO: Implement this function
}

/**
 * Exercise 14: Memoization
 * Implement a memoization function that caches the results of expensive function calls.
 * 
 * Example:
 * const fibonacci = memoize((n) => {
 *   if (n <= 1) return n;
 *   return fibonacci(n - 1) + fibonacci(n - 2);
 * });
 * 
 * @param {Function} func - Function to memoize
 * @returns {Function} Memoized function
 */
function memoize(func) {
    // TODO: Implement this function
}

/**
 * Exercise 15: Event Emitter
 * Create an EventEmitter class that allows subscribing to events,
 * emitting events, and unsubscribing.
 * 
 * Example:
 * const emitter = new EventEmitter();
 * emitter.on('event', (data) => console.log(data));
 * emitter.emit('event', 'Hello!');
 * emitter.off('event');
 */
class EventEmitter {
    constructor() {
        // TODO: Initialize the event emitter
    }
    
    on(eventName, callback) {
        // TODO: Subscribe to an event
    }
    
    emit(eventName, ...args) {
        // TODO: Emit an event
    }
    
    off(eventName, callback) {
        // TODO: Unsubscribe from an event
    }
    
    once(eventName, callback) {
        // TODO: Subscribe to an event that fires only once
    }
}

// ============================================
// DOM MANIPULATION EXERCISES
// ============================================

/**
 * Exercise 16: Dynamic List
 * Create a function that generates an unordered list from an array of items
 * and appends it to a specified element.
 * 
 * Example:
 * createList(['Apple', 'Banana', 'Orange'], '#container');
 * 
 * @param {Array} items - Array of items
 * @param {string} selector - CSS selector for container
 * @returns {HTMLElement} Created list element
 */
function createList(items, selector) {
    // TODO: Implement this function
}

/**
 * Exercise 17: Toggle Class
 * Write a function that toggles a CSS class on an element when clicked.
 * 
 * Example:
 * toggleClassOnClick('.button', 'active');
 * 
 * @param {string} selector - CSS selector for elements
 * @param {string} className - Class name to toggle
 */
function toggleClassOnClick(selector, className) {
    // TODO: Implement this function
}

/**
 * Exercise 18: Form Validator
 * Create a form validation function that checks if required fields are filled
 * and email format is valid.
 * 
 * Example:
 * validateForm('#myForm'); // Returns: { valid: true/false, errors: [] }
 * 
 * @param {string} formSelector - CSS selector for form
 * @returns {Object} Validation result
 */
function validateForm(formSelector) {
    // TODO: Implement this function
}

/**
 * Exercise 19: Infinite Scroll
 * Implement an infinite scroll feature that loads more content when the user
 * scrolls near the bottom of the page.
 * 
 * @param {Function} loadMoreCallback - Function to call when loading more
 * @param {number} threshold - Distance from bottom to trigger load
 */
function infiniteScroll(loadMoreCallback, threshold = 200) {
    // TODO: Implement this function
}

/**
 * Exercise 20: Drag and Drop
 * Create a simple drag-and-drop interface where items can be dragged
 * from one container to another.
 * 
 * @param {string} draggableSelector - CSS selector for draggable items
 * @param {string} dropZoneSelector - CSS selector for drop zones
 */
function setupDragAndDrop(draggableSelector, dropZoneSelector) {
    // TODO: Implement this function
}

// ============================================
// ASYNC/PROMISES EXERCISES
// ============================================

/**
 * Exercise 21: Promise Chain
 * Example of proper promise chaining with error handling.
 * Implement the helper functions.
 */
function fetchUserData(userId) {
    // TODO: Return a promise that resolves with user data
}

function fetchUserPosts(userId) {
    // TODO: Return a promise that resolves with user posts
}

/**
 * Exercise 22: Promise.all Implementation
 * Implement your own version of Promise.all that takes an array of promises
 * and returns a single promise.
 * 
 * Example:
 * promiseAll([p1, p2, p3]).then(results => console.log(results));
 * 
 * @param {Array} promises - Array of promises
 * @returns {Promise} Promise that resolves with array of results
 */
function promiseAll(promises) {
    // TODO: Implement this function
}

/**
 * Exercise 23: Retry Logic
 * Create a function that retries a failed async operation a specified number
 * of times before giving up.
 * 
 * Example:
 * retryAsync(fetchData, 3, 1000); // Retry 3 times with 1 second delay
 * 
 * @param {Function} asyncFunc - Async function to retry
 * @param {number} maxRetries - Maximum number of retries
 * @param {number} delay - Delay between retries in milliseconds
 * @returns {Promise} Promise that resolves with result or rejects after max retries
 */
async function retryAsync(asyncFunc, maxRetries = 3, delay = 1000) {
    // TODO: Implement this function
}

/**
 * Exercise 24: Rate Limiter
 * Implement a rate limiter that ensures a function is not called more than
 * N times per time window.
 * 
 * Example:
 * const limited = rateLimiter(myFunc, 5, 1000); // Max 5 calls per second
 * 
 * @param {Function} func - Function to rate limit
 * @param {number} maxCalls - Maximum number of calls
 * @param {number} timeWindow - Time window in milliseconds
 * @returns {Function} Rate limited function
 */
function rateLimiter(func, maxCalls, timeWindow) {
    // TODO: Implement this function
}

/**
 * Exercise 25: Async Queue
 * Create an async queue that processes tasks sequentially with a maximum
 * concurrency limit.
 * 
 * Example:
 * const queue = new AsyncQueue(2); // Process 2 tasks at a time
 * queue.add(task1);
 * queue.add(task2);
 */
class AsyncQueue {
    constructor(concurrency = 1) {
        // TODO: Initialize the queue
    }
    
    async add(task) {
        // TODO: Add a task to the queue
    }
    
    async process() {
        // TODO: Process tasks from the queue
    }
}

// ============================================
// EXPORT FOR TESTING
// ============================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        // Beginner
        sumArray,
        reverseString,
        findMax,
        countVowels,
        isPalindrome,
        // Intermediate
        fizzBuzz,
        flattenArray,
        removeDuplicates,
        areAnagrams,
        chunkArray,
        // Advanced
        debounce,
        deepClone,
        curry,
        memoize,
        EventEmitter,
        // DOM (will be undefined in Node.js)
        createList,
        toggleClassOnClick,
        validateForm,
        infiniteScroll,
        setupDragAndDrop,
        // Async
        fetchUserData,
        fetchUserPosts,
        promiseAll,
        retryAsync,
        rateLimiter,
        AsyncQueue
    };
}

// ============================================
// HINTS AND TIPS
// ============================================

/*
BEGINNER HINTS:
- sumArray: Use reduce() or a simple loop
- reverseString: Loop backwards or use split/reverse/join
- findMax: Use Math.max() with spread operator
- countVowels: Use a loop or regex
- isPalindrome: Compare string with its reverse

INTERMEDIATE HINTS:
- fizzBuzz: Use modulo operator (%) to check divisibility
- flattenArray: Use recursion or Array.flat()
- removeDuplicates: Use Set or filter with indexOf
- areAnagrams: Sort both strings and compare
- chunkArray: Use slice() in a loop

ADVANCED HINTS:
- debounce: Use setTimeout and clearTimeout
- deepClone: Use recursion to handle nested objects
- curry: Return a function that collects arguments
- memoize: Use Map or object to cache results
- EventEmitter: Use an object to store event listeners

ASYNC HINTS:
- promiseAll: Create a new Promise and track completion
- retryAsync: Use a loop with try-catch and setTimeout
- rateLimiter: Track call timestamps in an array
- AsyncQueue: Use a queue array and track running tasks
*/
