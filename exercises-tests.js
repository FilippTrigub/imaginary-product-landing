/**
 * JavaScript Coding Exercises - Test Suite
 * Run these tests to verify your solutions
 */

// Import solutions if running in Node.js
if (typeof require !== 'undefined') {
    const solutions = require('./exercises-solutions.js');
    Object.assign(global, solutions);
}

// Simple test framework
class TestRunner {
    constructor() {
        this.passed = 0;
        this.failed = 0;
        this.tests = [];
    }
    
    test(description, testFunc) {
        this.tests.push({ description, testFunc });
    }
    
    run() {
        console.log('🚀 Running Tests...\n');
        
        this.tests.forEach(({ description, testFunc }) => {
            try {
                testFunc();
                this.passed++;
                console.log(`✅ ${description}`);
            } catch (error) {
                this.failed++;
                console.log(`❌ ${description}`);
                console.log(`   Error: ${error.message}\n`);
            }
        });
        
        console.log('\n' + '='.repeat(50));
        console.log(`Total: ${this.tests.length} | Passed: ${this.passed} | Failed: ${this.failed}`);
        console.log('='.repeat(50));
    }
}

function assert(condition, message = 'Assertion failed') {
    if (!condition) {
        throw new Error(message);
    }
}

function assertEqual(actual, expected, message) {
    if (JSON.stringify(actual) !== JSON.stringify(expected)) {
        throw new Error(message || `Expected ${JSON.stringify(expected)}, but got ${JSON.stringify(actual)}`);
    }
}

// ============================================
// TEST CASES
// ============================================

const runner = new TestRunner();

// Beginner Tests
runner.test('sumArray: should sum array of numbers', () => {
    assertEqual(sumArray([1, 2, 3, 4, 5]), 15);
    assertEqual(sumArray([]), 0);
    assertEqual(sumArray([-1, -2, -3]), -6);
});

runner.test('reverseString: should reverse a string', () => {
    assertEqual(reverseString('hello'), 'olleh');
    assertEqual(reverseString(''), '');
    assertEqual(reverseString('a'), 'a');
    assertEqual(reverseString('racecar'), 'racecar');
});

runner.test('findMax: should find maximum number', () => {
    assertEqual(findMax([3, 7, 2, 9, 1]), 9);
    assertEqual(findMax([1]), 1);
    assertEqual(findMax([-5, -2, -10]), -2);
});

runner.test('countVowels: should count vowels in string', () => {
    assertEqual(countVowels('javascript'), 3);
    assertEqual(countVowels('hello'), 2);
    assertEqual(countVowels('xyz'), 0);
    assertEqual(countVowels('AEIOU'), 5);
});

runner.test('isPalindrome: should check if string is palindrome', () => {
    assertEqual(isPalindrome('racecar'), true);
    assertEqual(isPalindrome('hello'), false);
    assertEqual(isPalindrome('A man a plan a canal Panama'), true);
    assertEqual(isPalindrome(''), true);
});

// Intermediate Tests
runner.test('fizzBuzz: should return correct FizzBuzz sequence', () => {
    const result = fizzBuzz(15);
    assertEqual(result[2], 'Fizz'); // 3
    assertEqual(result[4], 'Buzz'); // 5
    assertEqual(result[14], 'FizzBuzz'); // 15
    assertEqual(result[0], 1);
});

runner.test('flattenArray: should flatten nested arrays', () => {
    assertEqual(flattenArray([1, [2, [3, [4]], 5]]), [1, 2, 3, 4, 5]);
    assertEqual(flattenArray([1, 2, 3]), [1, 2, 3]);
    assertEqual(flattenArray([]), []);
});

runner.test('removeDuplicates: should remove duplicate values', () => {
    assertEqual(removeDuplicates([1, 2, 2, 3, 4, 4, 5]), [1, 2, 3, 4, 5]);
    assertEqual(removeDuplicates([1, 1, 1]), [1]);
    assertEqual(removeDuplicates([]), []);
});

runner.test('areAnagrams: should check if strings are anagrams', () => {
    assertEqual(areAnagrams('listen', 'silent'), true);
    assertEqual(areAnagrams('hello', 'world'), false);
    assertEqual(areAnagrams('The Eyes', 'They See'), true);
});

runner.test('chunkArray: should split array into chunks', () => {
    assertEqual(chunkArray([1, 2, 3, 4, 5, 6, 7], 3), [[1, 2, 3], [4, 5, 6], [7]]);
    assertEqual(chunkArray([1, 2], 5), [[1, 2]]);
    assertEqual(chunkArray([], 2), []);
});

// Advanced Tests
runner.test('debounce: should delay function execution', (done) => {
    let callCount = 0;
    const increment = () => callCount++;
    const debouncedIncrement = debounce(increment, 100);
    
    debouncedIncrement();
    debouncedIncrement();
    debouncedIncrement();
    
    // Should only be called once after delay
    setTimeout(() => {
        assertEqual(callCount, 1);
    }, 150);
});

runner.test('deepClone: should create deep copy of object', () => {
    const original = { a: 1, b: { c: 2, d: [3, 4] } };
    const cloned = deepClone(original);
    
    cloned.b.c = 999;
    cloned.b.d.push(5);
    
    assertEqual(original.b.c, 2);
    assertEqual(original.b.d.length, 2);
});

runner.test('curry: should curry a function', () => {
    const add = (a, b, c) => a + b + c;
    const curriedAdd = curry(add);
    
    assertEqual(curriedAdd(1)(2)(3), 6);
    assertEqual(curriedAdd(1, 2)(3), 6);
    assertEqual(curriedAdd(1)(2, 3), 6);
});

runner.test('memoize: should cache function results', () => {
    let callCount = 0;
    const expensive = (n) => {
        callCount++;
        return n * 2;
    };
    
    const memoized = memoize(expensive);
    
    memoized(5);
    memoized(5);
    memoized(5);
    
    assertEqual(callCount, 1); // Should only call once
    assertEqual(memoized(5), 10);
});

runner.test('EventEmitter: should handle events', () => {
    const emitter = new EventEmitter();
    let result = 0;
    
    emitter.on('test', (value) => {
        result = value;
    });
    
    emitter.emit('test', 42);
    assertEqual(result, 42);
    
    emitter.off('test');
    emitter.emit('test', 100);
    assertEqual(result, 42); // Should not change
});

runner.test('EventEmitter: should handle once events', () => {
    const emitter = new EventEmitter();
    let callCount = 0;
    
    emitter.once('test', () => {
        callCount++;
    });
    
    emitter.emit('test');
    emitter.emit('test');
    emitter.emit('test');
    
    assertEqual(callCount, 1);
});

// Async Tests
runner.test('promiseAll: should resolve all promises', async () => {
    const promises = [
        Promise.resolve(1),
        Promise.resolve(2),
        Promise.resolve(3)
    ];
    
    const result = await promiseAll(promises);
    assertEqual(result, [1, 2, 3]);
});

runner.test('promiseAll: should reject if any promise fails', async () => {
    const promises = [
        Promise.resolve(1),
        Promise.reject(new Error('Failed')),
        Promise.resolve(3)
    ];
    
    try {
        await promiseAll(promises);
        throw new Error('Should have rejected');
    } catch (error) {
        assert(error.message === 'Failed');
    }
});

runner.test('retryAsync: should retry on failure', async () => {
    let attempts = 0;
    const failTwice = async () => {
        attempts++;
        if (attempts < 3) {
            throw new Error('Failed');
        }
        return 'Success';
    };
    
    const result = await retryAsync(failTwice, 3, 10);
    assertEqual(result, 'Success');
    assertEqual(attempts, 3);
});

runner.test('rateLimiter: should limit function calls', () => {
    let callCount = 0;
    const increment = () => callCount++;
    const limited = rateLimiter(increment, 2, 1000);
    
    limited();
    limited();
    
    try {
        limited(); // Should throw
        throw new Error('Should have thrown rate limit error');
    } catch (error) {
        assert(error.message.includes('Rate limit'));
    }
    
    assertEqual(callCount, 2);
});

runner.test('AsyncQueue: should process tasks sequentially', async () => {
    const queue = new AsyncQueue(1);
    const results = [];
    
    const task1 = async () => {
        await new Promise(resolve => setTimeout(resolve, 50));
        results.push(1);
        return 1;
    };
    
    const task2 = async () => {
        results.push(2);
        return 2;
    };
    
    queue.add(task1);
    queue.add(task2);
    
    await new Promise(resolve => setTimeout(resolve, 100));
    assertEqual(results, [1, 2]);
});

// Additional Edge Case Tests
runner.test('sumArray: should handle edge cases', () => {
    assertEqual(sumArray([0, 0, 0]), 0);
    assertEqual(sumArray([1.5, 2.5, 3.5]), 7.5);
});

runner.test('reverseString: should handle special characters', () => {
    assertEqual(reverseString('Hello, World!'), '!dlroW ,olleH');
    assertEqual(reverseString('12345'), '54321');
});

runner.test('chunkArray: should handle exact divisions', () => {
    assertEqual(chunkArray([1, 2, 3, 4], 2), [[1, 2], [3, 4]]);
});

runner.test('deepClone: should handle arrays', () => {
    const original = [1, [2, 3], { a: 4 }];
    const cloned = deepClone(original);
    
    cloned[1][0] = 999;
    cloned[2].a = 999;
    
    assertEqual(original[1][0], 2);
    assertEqual(original[2].a, 4);
});

runner.test('deepClone: should handle Date objects', () => {
    const original = { date: new Date('2025-01-01') };
    const cloned = deepClone(original);
    
    cloned.date.setFullYear(2026);
    
    assertEqual(original.date.getFullYear(), 2025);
});

// Run all tests
runner.run();

// Export for use in other environments
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { TestRunner, assert, assertEqual };
}
