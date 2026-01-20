/**
 * EXERCISE 5: DOM Manipulation
 * 
 * Master DOM selection, manipulation, and event handling.
 * Note: These exercises require a browser environment or jsdom for testing.
 */

// ============================================
// CHALLENGE 1: Create Element
// ============================================
/**
 * Create a function that creates a div element with:
 * - A given id
 * - A given class name
 * - Given text content
 * 
 * Example: createElement("myDiv", "container", "Hello") 
 * => <div id="myDiv" class="container">Hello</div>
 */

function createElement(id, className, textContent) {
    // YOUR CODE HERE
}


// ============================================
// CHALLENGE 2: Toggle Class
// ============================================
/**
 * Create a function that toggles a class on an element
 * If the element has the class, remove it. Otherwise, add it.
 * 
 * Example: toggleClass(element, "active")
 */

function toggleClass(element, className) {
    // YOUR CODE HERE
}


// ============================================
// CHALLENGE 3: Get All Text
// ============================================
/**
 * Create a function that gets all text content from an element
 * and its children, trimmed and with extra spaces removed
 * 
 * Example: getAllText(element) => "Hello World"
 */

function getAllText(element) {
    // YOUR CODE HERE
}


// ============================================
// CHALLENGE 4: Create List
// ============================================
/**
 * Create a function that creates a <ul> with <li> items
 * from an array of strings
 * 
 * Example: createList(["Apple", "Banana", "Orange"])
 * => <ul><li>Apple</li><li>Banana</li><li>Orange</li></ul>
 */

function createList(items) {
    // YOUR CODE HERE
}


// ============================================
// CHALLENGE 5: Find Parent by Class
// ============================================
/**
 * Create a function that finds the closest parent element
 * with a specific class name
 * 
 * Example: findParentByClass(element, "container")
 */

function findParentByClass(element, className) {
    // YOUR CODE HERE
}


// ============================================
// CHALLENGE 6: Count Children
// ============================================
/**
 * Create a function that counts all child elements
 * (not just direct children, but all descendants)
 * 
 * Example: countAllChildren(element) => 5
 */

function countAllChildren(element) {
    // YOUR CODE HERE
}


// ============================================
// CHALLENGE 7: Create Table
// ============================================
/**
 * Create a function that creates an HTML table from a 2D array
 * First row should be headers (<th>)
 * 
 * Example: createTable([["Name","Age"],["Alice",25],["Bob",30]])
 * => <table>
 *      <thead><tr><th>Name</th><th>Age</th></tr></thead>
 *      <tbody><tr><td>Alice</td><td>25</td></tr>...</tbody>
 *    </table>
 */

function createTable(data) {
    // YOUR CODE HERE
}


// ============================================
// CHALLENGE 8: Debounce Function
// ============================================
/**
 * Create a debounce function that delays execution
 * until after a specified time has elapsed since the last call
 * 
 * Example: 
 * const debouncedFn = debounce(() => console.log("Called"), 300);
 * debouncedFn(); // Won't execute immediately
 * debouncedFn(); // Resets timer
 * // After 300ms of no calls, function executes
 */

function debounce(func, delay) {
    // YOUR CODE HERE
}


// ============================================
// EXAMPLE USAGE IN BROWSER
// ============================================

/*
// Example 1: Create and append element
const myDiv = createElement("test", "box", "Hello World");
document.body.appendChild(myDiv);

// Example 2: Toggle class on click
const button = document.querySelector("#myButton");
button.addEventListener("click", () => {
    toggleClass(button, "active");
});

// Example 3: Create list
const fruits = ["Apple", "Banana", "Orange"];
const list = createList(fruits);
document.body.appendChild(list);

// Example 4: Debounced search
const searchInput = document.querySelector("#search");
const debouncedSearch = debounce((e) => {
    console.log("Searching for:", e.target.value);
}, 300);
searchInput.addEventListener("input", debouncedSearch);
*/


// ============================================
// TESTS - Don't modify below this line
// ============================================

function runTests() {
    console.log("Running Tests for Exercise 5...\n");
    console.log("Note: These tests require a DOM environment (browser or jsdom)");
    
    // Check if DOM is available
    if (typeof document === 'undefined') {
        console.log("⚠ DOM not available. Run these tests in a browser.");
        return;
    }
    
    // Test createElement
    console.log("Test createElement:");
    const div = createElement("test", "container", "Hello");
    console.log(div.id === "test" && div.className === "container" && div.textContent === "Hello" ? "✓ PASS" : "✗ FAIL");
    
    // Test createList
    console.log("\nTest createList:");
    const list = createList(["A", "B", "C"]);
    console.log(list.tagName === "UL" && list.children.length === 3 ? "✓ PASS" : "✗ FAIL");
    
    // Test debounce
    console.log("\nTest debounce:");
    let callCount = 0;
    const debouncedFn = debounce(() => callCount++, 100);
    debouncedFn();
    debouncedFn();
    debouncedFn();
    setTimeout(() => {
        console.log(callCount === 1 ? "✓ PASS" : "✗ FAIL");
    }, 150);
    
    console.log("\n" + "=".repeat(50));
}

// Uncomment to run tests (in browser)
// runTests();

module.exports = { 
    createElement, 
    toggleClass, 
    getAllText, 
    createList, 
    findParentByClass, 
    countAllChildren, 
    createTable, 
    debounce 
};
