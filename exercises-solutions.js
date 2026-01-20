/**
 * JavaScript Coding Exercises - Solutions
 * Complete solutions with explanations and test cases
 */

// ============================================
// BEGINNER EXERCISES
// ============================================

/**
 * Exercise 1: Array Sum
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function sumArray(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array');
    }
    return arr.reduce((sum, num) => sum + num, 0);
}

// Alternative solution using loop
function sumArrayLoop(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

/**
 * Exercise 2: Reverse String
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function reverseString(str) {
    if (typeof str !== 'string') {
        throw new Error('Input must be a string');
    }
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Alternative using array methods
function reverseStringArray(str) {
    return str.split('').reverse().join('');
}

/**
 * Exercise 3: Find Maximum
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function findMax(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        throw new Error('Input must be a non-empty array');
    }
    return Math.max(...arr);
}

// Alternative using reduce
function findMaxReduce(arr) {
    return arr.reduce((max, num) => num > max ? num : max, arr[0]);
}

/**
 * Exercise 4: Count Vowels
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function countVowels(str) {
    if (typeof str !== 'string') {
        throw new Error('Input must be a string');
    }
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// Alternative using regex
function countVowelsRegex(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

/**
 * Exercise 5: Palindrome Checker
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function isPalindrome(str) {
    if (typeof str !== 'string') {
        throw new Error('Input must be a string');
    }
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let left = 0;
    let right = cleaned.length - 1;
    
    while (left < right) {
        if (cleaned[left] !== cleaned[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

// ============================================
// INTERMEDIATE EXERCISES
// ============================================

/**
 * Exercise 6: FizzBuzz
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function fizzBuzz(n) {
    const result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            result.push('FizzBuzz');
        } else if (i % 3 === 0) {
            result.push('Fizz');
        } else if (i % 5 === 0) {
            result.push('Buzz');
        } else {
            result.push(i);
        }
    }
    return result;
}

/**
 * Exercise 7: Flatten Array
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function flattenArray(arr) {
    const result = [];
    
    function flatten(item) {
        if (Array.isArray(item)) {
            item.forEach(flatten);
        } else {
            result.push(item);
        }
    }
    
    flatten(arr);
    return result;
}

// Alternative using flat()
function flattenArrayBuiltIn(arr) {
    return arr.flat(Infinity);
}

/**
 * Exercise 8: Remove Duplicates
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Alternative using filter
function removeDuplicatesFilter(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

/**
 * Exercise 9: Anagram Checker
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 */
function areAnagrams(str1, str2) {
    const normalize = str => str.toLowerCase().replace(/[^a-z0-9]/g, '').split('').sort().join('');
    return normalize(str1) === normalize(str2);
}

// Alternative using character count
function areAnagramsCount(str1, str2) {
    if (str1.length !== str2.length) return false;
    
    const charCount = {};
    
    for (let char of str1.toLowerCase()) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    for (let char of str2.toLowerCase()) {
        if (!charCount[char]) return false;
        charCount[char]--;
    }
    
    return true;
}

/**
 * Exercise 10: Chunk Array
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function chunkArray(arr, size) {
    if (size <= 0) {
        throw new Error('Chunk size must be greater than 0');
    }
    
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }
    return chunks;
}

// ============================================
// ADVANCED EXERCISES
// ============================================

/**
 * Exercise 11: Debounce Function
 * Delays function execution until after wait time has elapsed
 */
function debounce(func, wait) {
    let timeoutId;
    
    return function debounced(...args) {
        const context = this;
        
        clearTimeout(timeoutId);
        
        timeoutId = setTimeout(() => {
            func.apply(context, args);
        }, wait);
    };
}

/**
 * Exercise 12: Deep Clone Object
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function deepClone(obj) {
    // Handle null and non-objects
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    
    // Handle Date
    if (obj instanceof Date) {
        return new Date(obj.getTime());
    }
    
    // Handle Array
    if (Array.isArray(obj)) {
        return obj.map(item => deepClone(item));
    }
    
    // Handle Object
    const cloned = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloned[key] = deepClone(obj[key]);
        }
    }
    
    return cloned;
}

/**
 * Exercise 13: Curry Function
 * Transforms multi-argument function into sequence of single-argument functions
 */
function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function(...nextArgs) {
                return curried.apply(this, args.concat(nextArgs));
            };
        }
    };
}

/**
 * Exercise 14: Memoization
 * Caches function results for performance optimization
 */
function memoize(func) {
    const cache = new Map();
    
    return function memoized(...args) {
        const key = JSON.stringify(args);
        
        if (cache.has(key)) {
            return cache.get(key);
        }
        
        const result = func.apply(this, args);
        cache.set(key, result);
        return result;
    };
}

/**
 * Exercise 15: Event Emitter
 * Simple pub/sub pattern implementation
 */
class EventEmitter {
    constructor() {
        this.events = {};
    }
    
    on(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);
        return this;
    }
    
    emit(eventName, ...args) {
        if (!this.events[eventName]) {
            return false;
        }
        
        this.events[eventName].forEach(callback => {
            callback.apply(this, args);
        });
        return true;
    }
    
    off(eventName, callback) {
        if (!this.events[eventName]) {
            return this;
        }
        
        if (!callback) {
            delete this.events[eventName];
        } else {
            this.events[eventName] = this.events[eventName].filter(cb => cb !== callback);
        }
        
        return this;
    }
    
    once(eventName, callback) {
        const onceWrapper = (...args) => {
            callback.apply(this, args);
            this.off(eventName, onceWrapper);
        };
        
        this.on(eventName, onceWrapper);
        return this;
    }
}

// ============================================
// DOM MANIPULATION EXERCISES
// ============================================

/**
 * Exercise 16: Dynamic List
 * Creates and appends an unordered list to a container
 */
function createList(items, selector) {
    const container = document.querySelector(selector);
    if (!container) {
        throw new Error(`Element ${selector} not found`);
    }
    
    const ul = document.createElement('ul');
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    });
    
    container.appendChild(ul);
    return ul;
}

/**
 * Exercise 17: Toggle Class
 * Toggles a CSS class on click
 */
function toggleClassOnClick(selector, className) {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach(element => {
        element.addEventListener('click', function() {
            this.classList.toggle(className);
        });
    });
}

/**
 * Exercise 18: Form Validator
 * Validates form fields
 */
function validateForm(formSelector) {
    const form = document.querySelector(formSelector);
    if (!form) {
        throw new Error(`Form ${formSelector} not found`);
    }
    
    const errors = [];
    const requiredFields = form.querySelectorAll('[required]');
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            errors.push(`${field.name || field.id} is required`);
        }
    });
    
    // Email validation
    const emailFields = form.querySelectorAll('input[type="email"]');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    emailFields.forEach(field => {
        if (field.value && !emailRegex.test(field.value)) {
            errors.push(`${field.name || field.id} must be a valid email`);
        }
    });
    
    return {
        valid: errors.length === 0,
        errors: errors
    };
}

/**
 * Exercise 19: Infinite Scroll
 * Loads more content when scrolling near bottom
 */
function infiniteScroll(loadMoreCallback, threshold = 200) {
    let loading = false;
    
    window.addEventListener('scroll', () => {
        if (loading) return;
        
        const scrollPosition = window.innerHeight + window.scrollY;
        const documentHeight = document.documentElement.scrollHeight;
        
        if (scrollPosition >= documentHeight - threshold) {
            loading = true;
            loadMoreCallback().then(() => {
                loading = false;
            });
        }
    });
}

/**
 * Exercise 20: Drag and Drop
 * Simple drag and drop implementation
 */
function setupDragAndDrop(draggableSelector, dropZoneSelector) {
    const draggables = document.querySelectorAll(draggableSelector);
    const dropZones = document.querySelectorAll(dropZoneSelector);
    
    draggables.forEach(draggable => {
        draggable.setAttribute('draggable', 'true');
        
        draggable.addEventListener('dragstart', (e) => {
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/html', draggable.innerHTML);
            draggable.classList.add('dragging');
        });
        
        draggable.addEventListener('dragend', () => {
            draggable.classList.remove('dragging');
        });
    });
    
    dropZones.forEach(zone => {
        zone.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            zone.classList.add('drag-over');
        });
        
        zone.addEventListener('dragleave', () => {
            zone.classList.remove('drag-over');
        });
        
        zone.addEventListener('drop', (e) => {
            e.preventDefault();
            zone.classList.remove('drag-over');
            const data = e.dataTransfer.getData('text/html');
            const dragging = document.querySelector('.dragging');
            if (dragging) {
                zone.appendChild(dragging);
            }
        });
    });
}

// ============================================
// ASYNC/PROMISES EXERCISES
// ============================================

/**
 * Exercise 21: Promise Chain
 * Example of proper promise chaining with error handling
 */
function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId) {
                resolve({ id: userId, name: 'John Doe' });
            } else {
                reject(new Error('User ID is required'));
            }
        }, 1000);
    });
}

function fetchUserPosts(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, title: 'Post 1', userId },
                { id: 2, title: 'Post 2', userId }
            ]);
        }, 1000);
    });
}

/**
 * Exercise 22: Promise.all Implementation
 * Custom implementation of Promise.all
 */
function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(promises)) {
            return reject(new TypeError('Argument must be an array'));
        }
        
        const results = [];
        let completedCount = 0;
        
        if (promises.length === 0) {
            return resolve(results);
        }
        
        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then(value => {
                    results[index] = value;
                    completedCount++;
                    
                    if (completedCount === promises.length) {
                        resolve(results);
                    }
                })
                .catch(reject);
        });
    });
}

/**
 * Exercise 23: Retry Logic
 * Retries a failed async operation
 */
async function retryAsync(asyncFunc, maxRetries = 3, delay = 1000) {
    let lastError;
    
    for (let i = 0; i <= maxRetries; i++) {
        try {
            return await asyncFunc();
        } catch (error) {
            lastError = error;
            if (i < maxRetries) {
                await new Promise(resolve => setTimeout(resolve, delay));
            }
        }
    }
    
    throw new Error(`Failed after ${maxRetries} retries: ${lastError.message}`);
}

/**
 * Exercise 24: Rate Limiter
 * Limits function calls to N times per second
 */
function rateLimiter(func, maxCalls, timeWindow) {
    const calls = [];
    
    return function rateLimited(...args) {
        const now = Date.now();
        
        // Remove calls outside the time window
        while (calls.length > 0 && calls[0] <= now - timeWindow) {
            calls.shift();
        }
        
        if (calls.length < maxCalls) {
            calls.push(now);
            return func.apply(this, args);
        } else {
            throw new Error('Rate limit exceeded');
        }
    };
}

/**
 * Exercise 25: Async Queue
 * Processes tasks sequentially with concurrency limit
 */
class AsyncQueue {
    constructor(concurrency = 1) {
        this.concurrency = concurrency;
        this.running = 0;
        this.queue = [];
    }
    
    async add(task) {
        return new Promise((resolve, reject) => {
            this.queue.push({ task, resolve, reject });
            this.process();
        });
    }
    
    async process() {
        if (this.running >= this.concurrency || this.queue.length === 0) {
            return;
        }
        
        this.running++;
        const { task, resolve, reject } = this.queue.shift();
        
        try {
            const result = await task();
            resolve(result);
        } catch (error) {
            reject(error);
        } finally {
            this.running--;
            this.process();
        }
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
        // Async
        promiseAll,
        retryAsync,
        rateLimiter,
        AsyncQueue
    };
}
