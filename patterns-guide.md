# JavaScript Patterns & Best Practices Guide

A quick reference guide for common JavaScript patterns used in the coding exercises.

## Table of Contents
1. [Array Methods](#array-methods)
2. [String Manipulation](#string-manipulation)
3. [Functional Programming](#functional-programming)
4. [Async Patterns](#async-patterns)
5. [Design Patterns](#design-patterns)
6. [Performance Optimization](#performance-optimization)

---

## Array Methods

### Map, Filter, Reduce
```javascript
// Map: Transform each element
const doubled = [1, 2, 3].map(x => x * 2); // [2, 4, 6]

// Filter: Select elements that match condition
const evens = [1, 2, 3, 4].filter(x => x % 2 === 0); // [2, 4]

// Reduce: Accumulate values
const sum = [1, 2, 3, 4].reduce((acc, x) => acc + x, 0); // 10
```

### Array Destructuring
```javascript
const [first, second, ...rest] = [1, 2, 3, 4, 5];
// first = 1, second = 2, rest = [3, 4, 5]
```

### Spread Operator
```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// Remove duplicates
const unique = [...new Set([1, 2, 2, 3, 3, 4])]; // [1, 2, 3, 4]
```

---

## String Manipulation

### Template Literals
```javascript
const name = 'John';
const greeting = `Hello, ${name}!`; // "Hello, John!"
```

### String Methods
```javascript
// Split and join
'hello world'.split(' ').join('-'); // "hello-world"

// Trim whitespace
'  hello  '.trim(); // "hello"

// Case conversion
'Hello'.toLowerCase(); // "hello"
'hello'.toUpperCase(); // "HELLO"

// Includes, startsWith, endsWith
'hello world'.includes('world'); // true
'hello'.startsWith('hel'); // true
'hello'.endsWith('lo'); // true
```

### Regular Expressions
```javascript
// Test pattern
/[aeiou]/i.test('hello'); // true

// Match all occurrences
'hello'.match(/l/g); // ['l', 'l']

// Replace
'hello world'.replace(/world/, 'JavaScript'); // "hello JavaScript"
```

---

## Functional Programming

### Pure Functions
```javascript
// Pure: Same input always produces same output, no side effects
const add = (a, b) => a + b;

// Impure: Depends on external state
let total = 0;
const addToTotal = (x) => total += x; // Modifies external state
```

### Higher-Order Functions
```javascript
// Function that returns a function
const multiplier = (factor) => (number) => number * factor;
const double = multiplier(2);
double(5); // 10

// Function that takes a function as argument
const applyOperation = (arr, operation) => arr.map(operation);
applyOperation([1, 2, 3], x => x * 2); // [2, 4, 6]
```

### Composition
```javascript
const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);

const addOne = x => x + 1;
const double = x => x * 2;
const addOneThenDouble = compose(double, addOne);

addOneThenDouble(3); // 8 (3 + 1 = 4, 4 * 2 = 8)
```

### Currying
```javascript
// Manual currying
const add = a => b => c => a + b + c;
add(1)(2)(3); // 6

// Generic curry function
const curry = (fn) => {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        }
        return (...nextArgs) => curried.apply(this, [...args, ...nextArgs]);
    };
};
```

---

## Async Patterns

### Promises
```javascript
// Creating a promise
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data loaded');
        }, 1000);
    });
};

// Chaining promises
fetchData()
    .then(data => console.log(data))
    .catch(error => console.error(error))
    .finally(() => console.log('Done'));
```

### Async/Await
```javascript
// Async function
async function loadData() {
    try {
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

// Parallel execution
async function loadMultiple() {
    const [data1, data2, data3] = await Promise.all([
        fetchData1(),
        fetchData2(),
        fetchData3()
    ]);
}
```

### Promise Patterns
```javascript
// Promise.all - Wait for all to complete
Promise.all([promise1, promise2, promise3])
    .then(results => console.log(results));

// Promise.race - First to complete wins
Promise.race([promise1, promise2])
    .then(result => console.log(result));

// Promise.allSettled - Wait for all, regardless of success/failure
Promise.allSettled([promise1, promise2])
    .then(results => console.log(results));
```

---

## Design Patterns

### Module Pattern
```javascript
const Calculator = (() => {
    // Private variables
    let result = 0;
    
    // Private function
    const log = (msg) => console.log(msg);
    
    // Public API
    return {
        add: (x) => {
            result += x;
            return result;
        },
        subtract: (x) => {
            result -= x;
            return result;
        },
        getResult: () => result
    };
})();
```

### Observer Pattern (Pub/Sub)
```javascript
class EventEmitter {
    constructor() {
        this.events = {};
    }
    
    on(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    }
    
    emit(event, data) {
        if (this.events[event]) {
            this.events[event].forEach(callback => callback(data));
        }
    }
    
    off(event, callback) {
        if (this.events[event]) {
            this.events[event] = this.events[event].filter(cb => cb !== callback);
        }
    }
}
```

### Singleton Pattern
```javascript
class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        Singleton.instance = this;
        this.data = [];
    }
}

const instance1 = new Singleton();
const instance2 = new Singleton();
console.log(instance1 === instance2); // true
```

### Factory Pattern
```javascript
class UserFactory {
    createUser(type) {
        switch(type) {
            case 'admin':
                return new Admin();
            case 'user':
                return new User();
            case 'guest':
                return new Guest();
            default:
                throw new Error('Invalid user type');
        }
    }
}
```

---

## Performance Optimization

### Debounce
```javascript
// Delays execution until after wait time has elapsed
function debounce(func, wait) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), wait);
    };
}

// Usage: Limit search API calls
const searchInput = document.querySelector('#search');
const debouncedSearch = debounce(performSearch, 300);
searchInput.addEventListener('input', debouncedSearch);
```

### Throttle
```javascript
// Ensures function is called at most once per time period
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Usage: Limit scroll event handlers
window.addEventListener('scroll', throttle(handleScroll, 100));
```

### Memoization
```javascript
// Cache expensive function results
function memoize(func) {
    const cache = new Map();
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = func.apply(this, args);
        cache.set(key, result);
        return result;
    };
}

// Usage: Cache Fibonacci calculations
const fibonacci = memoize((n) => {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
});
```

### Lazy Loading
```javascript
// Load resources only when needed
class LazyLoader {
    constructor() {
        this.cache = new Map();
    }
    
    async load(key, loader) {
        if (this.cache.has(key)) {
            return this.cache.get(key);
        }
        const result = await loader();
        this.cache.set(key, result);
        return result;
    }
}

// Usage
const loader = new LazyLoader();
const data = await loader.load('users', () => fetchUsers());
```

---

## Common Algorithms

### Binary Search
```javascript
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1;
}
```

### Quick Sort
```javascript
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    
    const pivot = arr[arr.length - 1];
    const left = arr.filter((x, i) => x <= pivot && i < arr.length - 1);
    const right = arr.filter(x => x > pivot);
    
    return [...quickSort(left), pivot, ...quickSort(right)];
}
```

### Depth-First Search (DFS)
```javascript
function dfs(node, visited = new Set()) {
    if (visited.has(node)) return;
    
    visited.add(node);
    console.log(node.value);
    
    node.children.forEach(child => dfs(child, visited));
}
```

### Breadth-First Search (BFS)
```javascript
function bfs(root) {
    const queue = [root];
    const visited = new Set();
    
    while (queue.length > 0) {
        const node = queue.shift();
        
        if (visited.has(node)) continue;
        
        visited.add(node);
        console.log(node.value);
        
        queue.push(...node.children);
    }
}
```

---

## Best Practices

### 1. Use Const and Let (Not Var)
```javascript
// Good
const PI = 3.14159;
let counter = 0;

// Avoid
var x = 10;
```

### 2. Use Arrow Functions for Callbacks
```javascript
// Good
[1, 2, 3].map(x => x * 2);

// Verbose
[1, 2, 3].map(function(x) { return x * 2; });
```

### 3. Use Destructuring
```javascript
// Good
const { name, age } = user;
const [first, second] = array;

// Verbose
const name = user.name;
const age = user.age;
```

### 4. Use Default Parameters
```javascript
// Good
function greet(name = 'Guest') {
    return `Hello, ${name}!`;
}

// Old way
function greet(name) {
    name = name || 'Guest';
    return `Hello, ${name}!`;
}
```

### 5. Use Optional Chaining
```javascript
// Good
const city = user?.address?.city;

// Old way
const city = user && user.address && user.address.city;
```

### 6. Use Nullish Coalescing
```javascript
// Good
const value = input ?? 'default';

// Old way (doesn't handle 0 or '' correctly)
const value = input || 'default';
```

---

## Time Complexity Reference

| Notation | Name | Example |
|----------|------|---------|
| O(1) | Constant | Array access, hash table lookup |
| O(log n) | Logarithmic | Binary search |
| O(n) | Linear | Array iteration, linear search |
| O(n log n) | Linearithmic | Merge sort, quick sort (average) |
| O(n²) | Quadratic | Nested loops, bubble sort |
| O(2ⁿ) | Exponential | Recursive fibonacci (naive) |
| O(n!) | Factorial | Permutations |

---

## Resources

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript.info](https://javascript.info/)
- [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)
- [Eloquent JavaScript](https://eloquentjavascript.net/)

---

Happy Coding! 🚀
