/**
 * EXERCISE 7: Closures and Scope
 * 
 * Master JavaScript closures, scope, and functional programming patterns.
 */

// ============================================
// CHALLENGE 1: Counter with Closure
// ============================================
/**
 * Create a function that returns an object with methods:
 * - increment(): increases counter by 1
 * - decrement(): decreases counter by 1
 * - getValue(): returns current value
 * The counter value should be private (not directly accessible)
 * 
 * Example:
 * const counter = createCounter();
 * counter.increment(); // 1
 * counter.increment(); // 2
 * counter.getValue(); // 2
 */

function createCounter() {
    // YOUR CODE HERE
}


// ============================================
// CHALLENGE 2: Function Memoization
// ============================================
/**
 * Create a function that memoizes (caches) the results
 * of expensive function calls
 * 
 * Example:
 * const memoizedFn = memoize((n) => n * 2);
 * memoizedFn(5); // Calculates and caches
 * memoizedFn(5); // Returns cached result
 */

function memoize(fn) {
    // YOUR CODE HERE
}


// ============================================
// CHALLENGE 3: Partial Application
// ============================================
/**
 * Create a function that partially applies arguments to a function
 * 
 * Example:
 * const add = (a, b, c) => a + b + c;
 * const add5 = partial(add, 5);
 * add5(10, 15); // 30 (5 + 10 + 15)
 */

function partial(fn, ...fixedArgs) {
    // YOUR CODE HERE
}


// ============================================
// CHALLENGE 4: Curry Function
// ============================================
/**
 * Create a function that curries another function
 * 
 * Example:
 * const add = (a, b, c) => a + b + c;
 * const curriedAdd = curry(add);
 * curriedAdd(1)(2)(3); // 6
 * curriedAdd(1, 2)(3); // 6
 */

function curry(fn) {
    // YOUR CODE HERE
}


// ============================================
// CHALLENGE 5: Once Function
// ============================================
/**
 * Create a function that ensures another function
 * can only be called once
 * 
 * Example:
 * const initialize = once(() => console.log("Init"));
 * initialize(); // Logs "Init"
 * initialize(); // Does nothing
 */

function once(fn) {
    // YOUR CODE HERE
}


// ============================================
// CHALLENGE 6: Private Variables
// ============================================
/**
 * Create a function that creates a bank account with:
 * - Private balance variable
 * - deposit(amount): adds to balance
 * - withdraw(amount): subtracts from balance (if sufficient funds)
 * - getBalance(): returns current balance
 * 
 * Example:
 * const account = createBankAccount(100);
 * account.deposit(50); // balance: 150
 * account.withdraw(30); // balance: 120
 * account.getBalance(); // 120
 */

function createBankAccount(initialBalance) {
    // YOUR CODE HERE
}


// ============================================
// CHALLENGE 7: Function Composition
// ============================================
/**
 * Create a function that composes multiple functions
 * from right to left
 * 
 * Example:
 * const add1 = x => x + 1;
 * const double = x => x * 2;
 * const composed = compose(add1, double);
 * composed(5); // 11 (double(5) = 10, then add1(10) = 11)
 */

function compose(...fns) {
    // YOUR CODE HERE
}


// ============================================
// CHALLENGE 8: Pipe Function
// ============================================
/**
 * Create a function that pipes multiple functions
 * from left to right (opposite of compose)
 * 
 * Example:
 * const add1 = x => x + 1;
 * const double = x => x * 2;
 * const piped = pipe(add1, double);
 * piped(5); // 12 (add1(5) = 6, then double(6) = 12)
 */

function pipe(...fns) {
    // YOUR CODE HERE
}


// ============================================
// CHALLENGE 9: Throttle Function
// ============================================
/**
 * Create a throttle function that limits how often
 * a function can be called
 * 
 * Example:
 * const throttled = throttle(() => console.log("Called"), 1000);
 * throttled(); // Executes immediately
 * throttled(); // Ignored (within 1 second)
 * // After 1 second, can be called again
 */

function throttle(fn, delay) {
    // YOUR CODE HERE
}


// ============================================
// CHALLENGE 10: Module Pattern
// ============================================
/**
 * Create a module using the module pattern with:
 * - Private variables and functions
 * - Public API
 * 
 * Example:
 * const calculator = createCalculator();
 * calculator.add(5);
 * calculator.multiply(2);
 * calculator.getResult(); // 10
 */

function createCalculator() {
    // YOUR CODE HERE
    // Should have private state and return public methods
}


// ============================================
// TESTS - Don't modify below this line
// ============================================

function runTests() {
    console.log("Running Tests for Exercise 7...\n");
    
    // Test createCounter
    console.log("Test createCounter:");
    const counter = createCounter();
    counter.increment();
    counter.increment();
    console.log(counter.getValue() === 2 ? "✓ PASS" : "✗ FAIL");
    counter.decrement();
    console.log(counter.getValue() === 1 ? "✓ PASS" : "✗ FAIL");
    
    // Test memoize
    console.log("\nTest memoize:");
    let callCount = 0;
    const expensiveFn = (n) => {
        callCount++;
        return n * 2;
    };
    const memoized = memoize(expensiveFn);
    memoized(5);
    memoized(5);
    console.log(callCount === 1 ? "✓ PASS" : "✗ FAIL");
    
    // Test partial
    console.log("\nTest partial:");
    const add = (a, b, c) => a + b + c;
    const add5 = partial(add, 5);
    console.log(add5(10, 15) === 30 ? "✓ PASS" : "✗ FAIL");
    
    // Test curry
    console.log("\nTest curry:");
    const curriedAdd = curry(add);
    console.log(curriedAdd(1)(2)(3) === 6 ? "✓ PASS" : "✗ FAIL");
    
    // Test once
    console.log("\nTest once:");
    let onceCount = 0;
    const increment = once(() => onceCount++);
    increment();
    increment();
    console.log(onceCount === 1 ? "✓ PASS" : "✗ FAIL");
    
    // Test createBankAccount
    console.log("\nTest createBankAccount:");
    const account = createBankAccount(100);
    account.deposit(50);
    console.log(account.getBalance() === 150 ? "✓ PASS" : "✗ FAIL");
    account.withdraw(30);
    console.log(account.getBalance() === 120 ? "✓ PASS" : "✗ FAIL");
    
    // Test compose
    console.log("\nTest compose:");
    const add1 = x => x + 1;
    const double = x => x * 2;
    const composed = compose(add1, double);
    console.log(composed(5) === 11 ? "✓ PASS" : "✗ FAIL");
    
    // Test pipe
    console.log("\nTest pipe:");
    const piped = pipe(add1, double);
    console.log(piped(5) === 12 ? "✓ PASS" : "✗ FAIL");
    
    console.log("\n" + "=".repeat(50));
}

// Uncomment to run tests
// runTests();

module.exports = { 
    createCounter, 
    memoize, 
    partial, 
    curry, 
    once, 
    createBankAccount, 
    compose, 
    pipe, 
    throttle, 
    createCalculator 
};
