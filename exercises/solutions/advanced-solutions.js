/**
 * SOLUTIONS: Advanced Exercises
 * 
 * Complete solutions for advanced-level exercises.
 */

// ============================================
// ASYNC PROGRAMMING SOLUTIONS
// ============================================

function delay(ms, value) {
    return new Promise(resolve => {
        setTimeout(() => resolve(value), ms);
    });
}

function fetchWithTimeout(url, timeout) {
    return Promise.race([
        fetch(url),
        new Promise((_, reject) => 
            setTimeout(() => reject(new Error('Timeout')), timeout)
        )
    ]);
}

async function retry(asyncFn, maxRetries) {
    let lastError;
    for (let i = 0; i < maxRetries; i++) {
        try {
            return await asyncFn();
        } catch (error) {
            lastError = error;
        }
    }
    throw lastError;
}

async function parallel(asyncFunctions) {
    return Promise.all(asyncFunctions.map(fn => fn()));
}

async function sequential(asyncFunctions) {
    const results = [];
    for (const fn of asyncFunctions) {
        results.push(await fn());
    }
    return results;
}

async function race(promises) {
    return Promise.race(promises);
}

async function asyncMap(array, asyncFn) {
    return Promise.all(array.map(item => asyncFn(item)));
}

async function processQueue(tasks, concurrencyLimit) {
    const results = [];
    const executing = [];
    
    for (const task of tasks) {
        const promise = task().then(result => {
            executing.splice(executing.indexOf(promise), 1);
            return result;
        });
        
        results.push(promise);
        executing.push(promise);
        
        if (executing.length >= concurrencyLimit) {
            await Promise.race(executing);
        }
    }
    
    return Promise.all(results);
}

async function asyncReduce(array, asyncReducer, initialValue) {
    let accumulator = initialValue;
    for (const item of array) {
        accumulator = await asyncReducer(accumulator, item);
    }
    return accumulator;
}

function cacheWithExpiry(asyncFn, expiryMs) {
    const cache = new Map();
    
    return async function(...args) {
        const key = JSON.stringify(args);
        const cached = cache.get(key);
        
        if (cached && Date.now() - cached.timestamp < expiryMs) {
            return cached.value;
        }
        
        const value = await asyncFn(...args);
        cache.set(key, { value, timestamp: Date.now() });
        
        return value;
    };
}

// ============================================
// CLOSURES AND SCOPE SOLUTIONS
// ============================================

function createCounter() {
    let count = 0;
    
    return {
        increment() {
            count++;
            return count;
        },
        decrement() {
            count--;
            return count;
        },
        getValue() {
            return count;
        }
    };
}

function memoize(fn) {
    const cache = new Map();
    
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}

function partial(fn, ...fixedArgs) {
    return function(...remainingArgs) {
        return fn(...fixedArgs, ...remainingArgs);
    };
}

function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        }
        return function(...nextArgs) {
            return curried(...args, ...nextArgs);
        };
    };
}

function once(fn) {
    let called = false;
    let result;
    
    return function(...args) {
        if (!called) {
            called = true;
            result = fn(...args);
        }
        return result;
    };
}

function createBankAccount(initialBalance) {
    let balance = initialBalance;
    
    return {
        deposit(amount) {
            balance += amount;
            return balance;
        },
        withdraw(amount) {
            if (amount <= balance) {
                balance -= amount;
                return balance;
            }
            throw new Error('Insufficient funds');
        },
        getBalance() {
            return balance;
        }
    };
}

function compose(...fns) {
    return function(value) {
        return fns.reduceRight((acc, fn) => fn(acc), value);
    };
}

function pipe(...fns) {
    return function(value) {
        return fns.reduce((acc, fn) => fn(acc), value);
    };
}

function throttle(fn, delay) {
    let lastCall = 0;
    
    return function(...args) {
        const now = Date.now();
        if (now - lastCall >= delay) {
            lastCall = now;
            return fn(...args);
        }
    };
}

function createCalculator() {
    let result = 0;
    
    return {
        add(n) {
            result += n;
            return this;
        },
        subtract(n) {
            result -= n;
            return this;
        },
        multiply(n) {
            result *= n;
            return this;
        },
        divide(n) {
            if (n !== 0) {
                result /= n;
            }
            return this;
        },
        getResult() {
            return result;
        },
        reset() {
            result = 0;
            return this;
        }
    };
}

// ============================================
// ALGORITHM SOLUTIONS
// ============================================

function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
}

function isAnagram(str1, str2) {
    const normalize = str => str.toLowerCase().split('').sort().join('');
    return normalize(str1) === normalize(str2);
}

function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}

function binarySearch(sortedArray, target) {
    let left = 0;
    let right = sortedArray.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (sortedArray[mid] === target) {
            return mid;
        }
        if (sortedArray[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

function reverseWords(str) {
    return str.split(' ').reverse().join(' ');
}

function longestCommonPrefix(strs) {
    if (strs.length === 0) return '';
    
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);
            if (prefix === '') return '';
        }
    }
    return prefix;
}

function isValidParentheses(str) {
    const stack = [];
    const pairs = { '(': ')', '[': ']', '{': '}' };
    
    for (let char of str) {
        if (char in pairs) {
            stack.push(char);
        } else {
            const last = stack.pop();
            if (pairs[last] !== char) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

function mergeSorted(arr1, arr2) {
    const result = [];
    let i = 0, j = 0;
    
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i++]);
        } else {
            result.push(arr2[j++]);
        }
    }
    
    return result.concat(arr1.slice(i)).concat(arr2.slice(j));
}

function findMissing(nums) {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = nums.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}

function rotateArray(arr, k) {
    k = k % arr.length;
    return [...arr.slice(-k), ...arr.slice(0, -k)];
}

function longestUniqueSubstring(str) {
    let maxLength = 0;
    let start = 0;
    const seen = new Map();
    
    for (let end = 0; end < str.length; end++) {
        const char = str[end];
        if (seen.has(char) && seen.get(char) >= start) {
            start = seen.get(char) + 1;
        }
        seen.set(char, end);
        maxLength = Math.max(maxLength, end - start + 1);
    }
    
    return maxLength;
}

function findPrimes(n) {
    if (n < 2) return [];
    
    const isPrime = new Array(n + 1).fill(true);
    isPrime[0] = isPrime[1] = false;
    
    for (let i = 2; i * i <= n; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }
    
    return isPrime.reduce((primes, prime, index) => {
        if (prime) primes.push(index);
        return primes;
    }, []);
}

function transpose(matrix) {
    return matrix[0].map((_, colIndex) => 
        matrix.map(row => row[colIndex])
    );
}

function maxSubarraySum(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;
}

module.exports = {
    delay,
    fetchWithTimeout,
    retry,
    parallel,
    sequential,
    race,
    asyncMap,
    processQueue,
    asyncReduce,
    cacheWithExpiry,
    createCounter,
    memoize,
    partial,
    curry,
    once,
    createBankAccount,
    compose,
    pipe,
    throttle,
    createCalculator,
    twoSum,
    isPalindrome,
    isAnagram,
    fibonacci,
    binarySearch,
    reverseWords,
    longestCommonPrefix,
    isValidParentheses,
    mergeSorted,
    findMissing,
    rotateArray,
    longestUniqueSubstring,
    findPrimes,
    transpose,
    maxSubarraySum
};
