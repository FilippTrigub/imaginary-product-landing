/**
 * EXERCISE 3: Array Methods and Manipulation
 * 
 * Master JavaScript array methods like map, filter, reduce, and more.
 */

// ============================================
// CHALLENGE 1: Filter Even Numbers
// ============================================
/**
 * Create a function that filters out all even numbers from an array
 * Use the filter() method
 * 
 * Example: filterEvens([1,2,3,4,5,6]) => [2,4,6]
 */

function filterEvens(numbers) {
    // YOUR CODE HERE
}


// ============================================
// CHALLENGE 2: Double All Numbers
// ============================================
/**
 * Create a function that doubles all numbers in an array
 * Use the map() method
 * 
 * Example: doubleNumbers([1,2,3]) => [2,4,6]
 */

function doubleNumbers(numbers) {
    // YOUR CODE HERE
}


// ============================================
// CHALLENGE 3: Sum Array
// ============================================
/**
 * Create a function that sums all numbers in an array
 * Use the reduce() method
 * 
 * Example: sumArray([1,2,3,4]) => 10
 */

function sumArray(numbers) {
    // YOUR CODE HERE
}


// ============================================
// CHALLENGE 4: Find Maximum
// ============================================
/**
 * Create a function that finds the maximum number in an array
 * Don't use Math.max()
 * 
 * Example: findMax([3,7,2,9,1]) => 9
 */

function findMax(numbers) {
    // YOUR CODE HERE
}


// ============================================
// CHALLENGE 5: Remove Duplicates
// ============================================
/**
 * Create a function that removes duplicate values from an array
 * Hint: Use Set or filter with indexOf
 * 
 * Example: removeDuplicates([1,2,2,3,3,3,4]) => [1,2,3,4]
 */

function removeDuplicates(arr) {
    // YOUR CODE HERE
}


// ============================================
// CHALLENGE 6: Flatten Array
// ============================================
/**
 * Create a function that flattens a nested array one level deep
 * 
 * Example: flattenArray([[1,2],[3,4],[5]]) => [1,2,3,4,5]
 */

function flattenArray(arr) {
    // YOUR CODE HERE
}


// ============================================
// CHALLENGE 7: Group By Property
// ============================================
/**
 * Create a function that groups an array of objects by a property
 * 
 * Example: 
 * groupBy([{name:"Alice",age:25},{name:"Bob",age:25}], "age")
 * => { 25: [{name:"Alice",age:25},{name:"Bob",age:25}] }
 */

function groupBy(arr, property) {
    // YOUR CODE HERE
}


// ============================================
// CHALLENGE 8: Chunk Array
// ============================================
/**
 * Create a function that splits an array into chunks of specified size
 * 
 * Example: chunkArray([1,2,3,4,5], 2) => [[1,2],[3,4],[5]]
 */

function chunkArray(arr, size) {
    // YOUR CODE HERE
}


// ============================================
// TESTS - Don't modify below this line
// ============================================

function runTests() {
    console.log("Running Tests for Exercise 3...\n");
    
    // Test filterEvens
    console.log("Test filterEvens:");
    console.log(JSON.stringify(filterEvens([1,2,3,4,5,6])) === JSON.stringify([2,4,6]) ? "✓ PASS" : "✗ FAIL");
    
    // Test doubleNumbers
    console.log("\nTest doubleNumbers:");
    console.log(JSON.stringify(doubleNumbers([1,2,3])) === JSON.stringify([2,4,6]) ? "✓ PASS" : "✗ FAIL");
    
    // Test sumArray
    console.log("\nTest sumArray:");
    console.log(sumArray([1,2,3,4]) === 10 ? "✓ PASS" : "✗ FAIL");
    
    // Test findMax
    console.log("\nTest findMax:");
    console.log(findMax([3,7,2,9,1]) === 9 ? "✓ PASS" : "✗ FAIL");
    
    // Test removeDuplicates
    console.log("\nTest removeDuplicates:");
    console.log(JSON.stringify(removeDuplicates([1,2,2,3,3,3,4])) === JSON.stringify([1,2,3,4]) ? "✓ PASS" : "✗ FAIL");
    
    // Test flattenArray
    console.log("\nTest flattenArray:");
    console.log(JSON.stringify(flattenArray([[1,2],[3,4],[5]])) === JSON.stringify([1,2,3,4,5]) ? "✓ PASS" : "✗ FAIL");
    
    // Test groupBy
    console.log("\nTest groupBy:");
    const grouped = groupBy([{name:"Alice",age:25},{name:"Bob",age:25},{name:"Charlie",age:30}], "age");
    console.log(grouped[25] && grouped[25].length === 2 ? "✓ PASS" : "✗ FAIL");
    
    // Test chunkArray
    console.log("\nTest chunkArray:");
    console.log(JSON.stringify(chunkArray([1,2,3,4,5], 2)) === JSON.stringify([[1,2],[3,4],[5]]) ? "✓ PASS" : "✗ FAIL");
    
    console.log("\n" + "=".repeat(50));
}

// Uncomment to run tests
// runTests();

module.exports = { 
    filterEvens, 
    doubleNumbers, 
    sumArray, 
    findMax, 
    removeDuplicates, 
    flattenArray, 
    groupBy, 
    chunkArray 
};
