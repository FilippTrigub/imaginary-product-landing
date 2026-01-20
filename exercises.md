# JavaScript Coding Exercises

A collection of coding exercises to practice JavaScript fundamentals, DOM manipulation, algorithms, and modern ES6+ features.

## Table of Contents
1. [Beginner Exercises](#beginner-exercises)
2. [Intermediate Exercises](#intermediate-exercises)
3. [Advanced Exercises](#advanced-exercises)
4. [DOM Manipulation Exercises](#dom-manipulation-exercises)
5. [Async/Promises Exercises](#asyncpromises-exercises)

---

## Beginner Exercises

### Exercise 1: Array Sum
Write a function that takes an array of numbers and returns their sum.

**Example:**
```javascript
sumArray([1, 2, 3, 4, 5]); // Returns: 15
```

### Exercise 2: Reverse String
Write a function that reverses a string without using the built-in `reverse()` method.

**Example:**
```javascript
reverseString("hello"); // Returns: "olleh"
```

### Exercise 3: Find Maximum
Write a function that finds the maximum number in an array.

**Example:**
```javascript
findMax([3, 7, 2, 9, 1]); // Returns: 9
```

### Exercise 4: Count Vowels
Write a function that counts the number of vowels in a string.

**Example:**
```javascript
countVowels("javascript"); // Returns: 3
```

### Exercise 5: Palindrome Checker
Write a function that checks if a string is a palindrome (reads the same forwards and backwards).

**Example:**
```javascript
isPalindrome("racecar"); // Returns: true
isPalindrome("hello"); // Returns: false
```

---

## Intermediate Exercises

### Exercise 6: FizzBuzz
Write a function that prints numbers from 1 to n. For multiples of 3, print "Fizz", for multiples of 5, print "Buzz", and for multiples of both, print "FizzBuzz".

**Example:**
```javascript
fizzBuzz(15);
// Output: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz
```

### Exercise 7: Flatten Array
Write a function that flattens a nested array of any depth.

**Example:**
```javascript
flattenArray([1, [2, [3, [4]], 5]]); // Returns: [1, 2, 3, 4, 5]
```

### Exercise 8: Remove Duplicates
Write a function that removes duplicate values from an array.

**Example:**
```javascript
removeDuplicates([1, 2, 2, 3, 4, 4, 5]); // Returns: [1, 2, 3, 4, 5]
```

### Exercise 9: Anagram Checker
Write a function that checks if two strings are anagrams of each other.

**Example:**
```javascript
areAnagrams("listen", "silent"); // Returns: true
areAnagrams("hello", "world"); // Returns: false
```

### Exercise 10: Chunk Array
Write a function that splits an array into chunks of a specified size.

**Example:**
```javascript
chunkArray([1, 2, 3, 4, 5, 6, 7], 3); // Returns: [[1, 2, 3], [4, 5, 6], [7]]
```

---

## Advanced Exercises

### Exercise 11: Debounce Function
Implement a debounce function that delays the execution of a function until after a specified wait time has elapsed since the last time it was invoked.

**Example:**
```javascript
const debouncedFunc = debounce(() => console.log("Called!"), 1000);
debouncedFunc(); // Will only execute after 1 second of no more calls
```

### Exercise 12: Deep Clone Object
Write a function that creates a deep clone of an object (including nested objects and arrays).

**Example:**
```javascript
const original = { a: 1, b: { c: 2 } };
const cloned = deepClone(original);
cloned.b.c = 3;
console.log(original.b.c); // Should still be 2
```

### Exercise 13: Curry Function
Implement a curry function that transforms a function with multiple arguments into a sequence of functions each taking a single argument.

**Example:**
```javascript
const add = (a, b, c) => a + b + c;
const curriedAdd = curry(add);
curriedAdd(1)(2)(3); // Returns: 6
```

### Exercise 14: Memoization
Implement a memoization function that caches the results of expensive function calls.

**Example:**
```javascript
const fibonacci = memoize((n) => {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
});
```

### Exercise 15: Event Emitter
Create an EventEmitter class that allows subscribing to events, emitting events, and unsubscribing.

**Example:**
```javascript
const emitter = new EventEmitter();
emitter.on('event', (data) => console.log(data));
emitter.emit('event', 'Hello!');
emitter.off('event');
```

---

## DOM Manipulation Exercises

### Exercise 16: Dynamic List
Create a function that generates an unordered list from an array of items and appends it to a specified element.

**Example:**
```javascript
createList(['Apple', 'Banana', 'Orange'], '#container');
```

### Exercise 17: Toggle Class
Write a function that toggles a CSS class on an element when clicked.

**Example:**
```javascript
toggleClassOnClick('.button', 'active');
```

### Exercise 18: Form Validator
Create a form validation function that checks if required fields are filled and email format is valid.

**Example:**
```javascript
validateForm('#myForm'); // Returns: { valid: true/false, errors: [] }
```

### Exercise 19: Infinite Scroll
Implement an infinite scroll feature that loads more content when the user scrolls near the bottom of the page.

### Exercise 20: Drag and Drop
Create a simple drag-and-drop interface where items can be dragged from one container to another.

---

## Async/Promises Exercises

### Exercise 21: Promise Chain
Write a function that chains multiple promises and handles errors appropriately.

**Example:**
```javascript
fetchUserData(userId)
  .then(user => fetchUserPosts(user.id))
  .then(posts => displayPosts(posts))
  .catch(error => handleError(error));
```

### Exercise 22: Promise.all Implementation
Implement your own version of `Promise.all` that takes an array of promises and returns a single promise.

### Exercise 23: Retry Logic
Create a function that retries a failed async operation a specified number of times before giving up.

**Example:**
```javascript
retryAsync(fetchData, 3, 1000); // Retry 3 times with 1 second delay
```

### Exercise 24: Rate Limiter
Implement a rate limiter that ensures a function is not called more than N times per second.

### Exercise 25: Async Queue
Create an async queue that processes tasks sequentially with a maximum concurrency limit.

---

## Bonus Challenges

### Challenge 1: Build a Calculator
Create a calculator that can handle basic operations (+, -, *, /) and follows order of operations.

### Challenge 2: Todo List App
Build a complete todo list application with add, delete, edit, and filter functionality.

### Challenge 3: API Data Fetcher
Create a utility that fetches data from multiple APIs concurrently and combines the results.

### Challenge 4: Custom Router
Implement a simple client-side router that handles navigation without page reloads.

### Challenge 5: State Management
Create a simple state management system similar to Redux with actions, reducers, and subscribers.

---

## Testing Your Solutions

Run your solutions in the browser console or create test files. Each exercise should include:
- Input validation
- Edge case handling
- Clear return values
- Proper error handling

Good luck and happy coding! 🚀
