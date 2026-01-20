/**
 * EXERCISE 6: Asynchronous Programming
 * 
 * Master Promises, async/await, and asynchronous patterns.
 */

// ============================================
// CHALLENGE 1: Create Promise
// ============================================
/**
 * Create a function that returns a Promise that resolves
 * after a specified delay with a given value
 * 
 * Example: delay(1000, "Hello").then(val => console.log(val))
 * // Logs "Hello" after 1 second
 */

function delay(ms, value) {
    // YOUR CODE HERE
}


// ============================================
// CHALLENGE 2: Fetch with Timeout
// ============================================
/**
 * Create a function that fetches data but rejects if it takes
 * longer than the specified timeout
 * 
 * Example: fetchWithTimeout(url, 5000)
 */

function fetchWithTimeout(url, timeout) {
    // YOUR CODE HERE
}


// ============================================
// CHALLENGE 3: Retry Function
// ============================================
/**
 * Create a function that retries an async operation
 * a specified number of times before failing
 * 
 * Example: retry(() => fetchData(), 3)
 * // Tries up to 3 times
 */

async function retry(asyncFn, maxRetries) {
    // YOUR CODE HERE
}


// ============================================
// CHALLENGE 4: Parallel Execution
// ============================================
/**
 * Create a function that executes multiple async functions
 * in parallel and returns all results
 * Use Promise.all()
 * 
 * Example: parallel([fn1, fn2, fn3]) => [result1, result2, result3]
 */

async function parallel(asyncFunctions) {
    // YOUR CODE HERE
}


// ============================================
// CHALLENGE 5: Sequential Execution
// ============================================
/**
 * Create a function that executes async functions sequentially
 * (one after another, not in parallel)
 * 
 * Example: sequential([fn1, fn2, fn3]) => [result1, result2, result3]
 */

async function sequential(asyncFunctions) {
    // YOUR CODE HERE
}


// ============================================
// CHALLENGE 6: Race Condition
// ============================================
/**
 * Create a function that returns the result of the first
 * promise to resolve from an array of promises
 * Use Promise.race()
 * 
 * Example: race([promise1, promise2, promise3])
 */

async function race(promises) {
    // YOUR CODE HERE
}


// ============================================
// CHALLENGE 7: Async Map
// ============================================
/**
 * Create a function that maps over an array with an async function
 * and waits for all results
 * 
 * Example: asyncMap([1,2,3], async (n) => n * 2) => [2,4,6]
 */

async function asyncMap(array, asyncFn) {
    // YOUR CODE HERE
}


// ============================================
// CHALLENGE 8: Queue with Concurrency Limit
// ============================================
/**
 * Create a function that processes async tasks with a concurrency limit
 * Only N tasks should run at the same time
 * 
 * Example: processQueue([task1, task2, task3, task4], 2)
 * // Only 2 tasks run concurrently
 */

async function processQueue(tasks, concurrencyLimit) {
    // YOUR CODE HERE
}


// ============================================
// CHALLENGE 9: Async Reduce
// ============================================
/**
 * Create a function that reduces an array with an async reducer function
 * 
 * Example: 
 * asyncReduce([1,2,3], async (acc, n) => acc + n, 0) => 6
 */

async function asyncReduce(array, asyncReducer, initialValue) {
    // YOUR CODE HERE
}


// ============================================
// CHALLENGE 10: Cache with Expiry
// ============================================
/**
 * Create a caching function that caches async results
 * with an expiration time
 * 
 * Example:
 * const cachedFetch = cacheWithExpiry(fetchData, 5000);
 * cachedFetch(url); // Fetches and caches
 * cachedFetch(url); // Returns cached result
 * // After 5 seconds, cache expires
 */

function cacheWithExpiry(asyncFn, expiryMs) {
    // YOUR CODE HERE
}


// ============================================
// TESTS - Don't modify below this line
// ============================================

async function runTests() {
    console.log("Running Tests for Exercise 6...\n");
    
    // Test delay
    console.log("Test delay:");
    const start = Date.now();
    const result = await delay(100, "Hello");
    const elapsed = Date.now() - start;
    console.log(result === "Hello" && elapsed >= 100 ? "✓ PASS" : "✗ FAIL");
    
    // Test parallel
    console.log("\nTest parallel:");
    const parallelResults = await parallel([
        async () => delay(50, 1),
        async () => delay(50, 2),
        async () => delay(50, 3)
    ]);
    console.log(JSON.stringify(parallelResults) === JSON.stringify([1,2,3]) ? "✓ PASS" : "✗ FAIL");
    
    // Test sequential
    console.log("\nTest sequential:");
    const sequentialResults = await sequential([
        async () => delay(50, 1),
        async () => delay(50, 2),
        async () => delay(50, 3)
    ]);
    console.log(JSON.stringify(sequentialResults) === JSON.stringify([1,2,3]) ? "✓ PASS" : "✗ FAIL");
    
    // Test asyncMap
    console.log("\nTest asyncMap:");
    const mapped = await asyncMap([1,2,3], async (n) => n * 2);
    console.log(JSON.stringify(mapped) === JSON.stringify([2,4,6]) ? "✓ PASS" : "✗ FAIL");
    
    // Test retry
    console.log("\nTest retry:");
    let attempts = 0;
    const flakyFn = async () => {
        attempts++;
        if (attempts < 3) throw new Error("Fail");
        return "Success";
    };
    const retryResult = await retry(flakyFn, 3);
    console.log(retryResult === "Success" && attempts === 3 ? "✓ PASS" : "✗ FAIL");
    
    console.log("\n" + "=".repeat(50));
}

// Uncomment to run tests
// runTests();

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
    cacheWithExpiry 
};
