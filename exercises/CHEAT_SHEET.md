# JavaScript Cheat Sheet for Exercises

Quick reference guide for common JavaScript patterns used in the exercises.

## 📚 Array Methods

```javascript
// Map - Transform each element
[1, 2, 3].map(x => x * 2)  // [2, 4, 6]

// Filter - Keep elements that match condition
[1, 2, 3, 4].filter(x => x % 2 === 0)  // [2, 4]

// Reduce - Combine elements into single value
[1, 2, 3, 4].reduce((sum, x) => sum + x, 0)  // 10

// Find - Get first matching element
[1, 2, 3, 4].find(x => x > 2)  // 3

// Some - Check if any element matches
[1, 2, 3].some(x => x > 2)  // true

// Every - Check if all elements match
[1, 2, 3].every(x => x > 0)  // true

// ForEach - Execute function for each element
[1, 2, 3].forEach(x => console.log(x))

// Slice - Get portion of array (doesn't modify original)
[1, 2, 3, 4, 5].slice(1, 3)  // [2, 3]

// Splice - Remove/add elements (modifies original)
const arr = [1, 2, 3, 4];
arr.splice(1, 2)  // Removes 2 elements starting at index 1

// Concat - Combine arrays
[1, 2].concat([3, 4])  // [1, 2, 3, 4]

// Flat - Flatten nested arrays
[[1, 2], [3, 4]].flat()  // [1, 2, 3, 4]
```

## 🎯 Object Methods

```javascript
// Object.keys - Get array of keys
Object.keys({a: 1, b: 2})  // ['a', 'b']

// Object.values - Get array of values
Object.values({a: 1, b: 2})  // [1, 2]

// Object.entries - Get array of [key, value] pairs
Object.entries({a: 1, b: 2})  // [['a', 1], ['b', 2]]

// Object.assign - Merge objects
Object.assign({}, {a: 1}, {b: 2})  // {a: 1, b: 2}

// Spread operator - Merge objects
{...{a: 1}, ...{b: 2}}  // {a: 1, b: 2}

// Destructuring - Extract properties
const {name, age} = {name: 'John', age: 25}

// Computed property names
const key = 'name';
const obj = {[key]: 'John'}  // {name: 'John'}
```

## 🔄 String Methods

```javascript
// Split - Convert string to array
'hello world'.split(' ')  // ['hello', 'world']

// Join - Convert array to string
['hello', 'world'].join(' ')  // 'hello world'

// Slice - Get substring
'hello'.slice(1, 4)  // 'ell'

// Replace - Replace text
'hello'.replace('l', 'L')  // 'heLlo'

// ToUpperCase / ToLowerCase
'Hello'.toLowerCase()  // 'hello'
'Hello'.toUpperCase()  // 'HELLO'

// Trim - Remove whitespace
'  hello  '.trim()  // 'hello'

// Includes - Check if contains substring
'hello'.includes('ell')  // true

// StartsWith / EndsWith
'hello'.startsWith('he')  // true
'hello'.endsWith('lo')  // true

// Repeat - Repeat string
'ha'.repeat(3)  // 'hahaha'

// PadStart / PadEnd
'5'.padStart(3, '0')  // '005'
```

## 🔢 Number Methods

```javascript
// parseInt - Convert string to integer
parseInt('42')  // 42

// parseFloat - Convert string to float
parseFloat('3.14')  // 3.14

// Number - Convert to number
Number('42')  // 42

// toFixed - Format decimal places
(3.14159).toFixed(2)  // '3.14'

// Math.max / Math.min
Math.max(1, 2, 3)  // 3
Math.min(1, 2, 3)  // 1

// Math.floor / Math.ceil / Math.round
Math.floor(3.7)  // 3
Math.ceil(3.2)   // 4
Math.round(3.5)  // 4

// Math.random - Random number between 0 and 1
Math.random()  // 0.123456...
```

## ⚡ Async Patterns

```javascript
// Promise
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Done'), 1000);
});

// Async/Await
async function fetchData() {
    const result = await promise;
    return result;
}

// Promise.all - Wait for all promises
await Promise.all([promise1, promise2, promise3]);

// Promise.race - Wait for first promise
await Promise.race([promise1, promise2, promise3]);

// Try/Catch with async
try {
    const result = await fetchData();
} catch (error) {
    console.error(error);
}
```

## 🎨 Common Patterns

### Debounce
```javascript
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
}
```

### Throttle
```javascript
function throttle(func, delay) {
    let lastCall = 0;
    return function(...args) {
        const now = Date.now();
        if (now - lastCall >= delay) {
            lastCall = now;
            func(...args);
        }
    };
}
```

### Memoization
```javascript
function memoize(fn) {
    const cache = new Map();
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) return cache.get(key);
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}
```

### Curry
```javascript
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        }
        return (...nextArgs) => curried(...args, ...nextArgs);
    };
}
```

### Compose
```javascript
const compose = (...fns) => x => 
    fns.reduceRight((acc, fn) => fn(acc), x);
```

### Pipe
```javascript
const pipe = (...fns) => x => 
    fns.reduce((acc, fn) => fn(acc), x);
```

## 🔍 Algorithm Patterns

### Two Pointers
```javascript
function twoSum(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === target) return [left, right];
        if (sum < target) left++;
        else right--;
    }
}
```

### Sliding Window
```javascript
function maxSubarraySum(arr, k) {
    let maxSum = 0, windowSum = 0;
    for (let i = 0; i < k; i++) windowSum += arr[i];
    maxSum = windowSum;
    for (let i = k; i < arr.length; i++) {
        windowSum = windowSum - arr[i - k] + arr[i];
        maxSum = Math.max(maxSum, windowSum);
    }
    return maxSum;
}
```

### Hash Map
```javascript
function findDuplicate(arr) {
    const seen = new Set();
    for (const item of arr) {
        if (seen.has(item)) return item;
        seen.add(item);
    }
}
```

### Binary Search
```javascript
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
```

## 💡 Tips & Tricks

### Remove Duplicates
```javascript
[...new Set([1, 2, 2, 3])]  // [1, 2, 3]
```

### Flatten Array
```javascript
[1, [2, [3]]].flat(2)  // [1, 2, 3]
```

### Swap Variables
```javascript
[a, b] = [b, a]
```

### Clone Array
```javascript
const clone = [...original]
// or
const clone = original.slice()
```

### Clone Object (shallow)
```javascript
const clone = {...original}
// or
const clone = Object.assign({}, original)
```

### Clone Object (deep)
```javascript
const clone = JSON.parse(JSON.stringify(original))
// Note: Doesn't work with functions, dates, etc.
```

### Check if Array
```javascript
Array.isArray([1, 2, 3])  // true
```

### Create Range
```javascript
[...Array(5).keys()]  // [0, 1, 2, 3, 4]
Array.from({length: 5}, (_, i) => i)  // [0, 1, 2, 3, 4]
```

### Sum Array
```javascript
[1, 2, 3, 4].reduce((a, b) => a + b, 0)  // 10
```

### Random Integer
```javascript
Math.floor(Math.random() * (max - min + 1)) + min
```

## 🎯 Testing Patterns

### Basic Test
```javascript
console.log(myFunction(input) === expected ? '✓ PASS' : '✗ FAIL');
```

### Array Comparison
```javascript
JSON.stringify(result) === JSON.stringify(expected)
```

### Object Comparison
```javascript
JSON.stringify(result) === JSON.stringify(expected)
```

---

**Pro Tip:** Keep this cheat sheet open while working on exercises!
