// Dummy Script - Demonstrates various JavaScript features

// 1. Variables and Data Types
const appName = "DummyApp";
let counter = 0;
const items = ["apple", "banana", "cherry"];
const config = {
    debug: true,
    version: "1.0.0",
    maxRetries: 3
};

// 2. Function Declarations
function greet(name) {
    return `Hello, ${name}!`;
}

const add = (a, b) => a + b;

// 3. Class Definition
class DummyService {
    constructor(name) {
        this.name = name;
        this.status = "initialized";
    }
    
    start() {
        this.status = "running";
        console.log(`${this.name} service started`);
    }
    
    stop() {
        this.status = "stopped";
        console.log(`${this.name} service stopped`);
    }
}

// 4. Async Operations
async function fetchData(url) {
    try {
        console.log(`Fetching data from ${url}...`);
        // Simulated async operation
        await new Promise(resolve => setTimeout(resolve, 1000));
        return { success: true, data: "dummy data" };
    } catch (error) {
        console.error("Error fetching data:", error);
        return { success: false, error: error.message };
    }
}

// 5. Array Operations
function processItems(arr) {
    const doubled = arr.map(item => item * 2);
    const filtered = arr.filter(item => item > 5);
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    
    return { doubled, filtered, sum };
}

// 6. Event Simulation
function simulateEvent(eventName, data) {
    console.log(`Event triggered: ${eventName}`, data);
    return {
        timestamp: Date.now(),
        event: eventName,
        payload: data
    };
}

// 7. Main Execution
function main() {
    console.log("=== Dummy Script Execution ===");
    console.log(`App: ${appName}`);
    console.log(`Config:`, config);
    
    // Test greeting
    console.log(greet("User"));
    
    // Test math
    console.log(`5 + 3 = ${add(5, 3)}`);
    
    // Test service
    const service = new DummyService("TestService");
    service.start();
    
    // Test array operations
    const numbers = [1, 5, 10, 15, 20];
    const results = processItems(numbers);
    console.log("Array processing results:", results);
    
    // Test event
    simulateEvent("user.login", { userId: 123, username: "testuser" });
    
    // Test async (if running in async context)
    fetchData("https://api.example.com/data").then(result => {
        console.log("Fetch result:", result);
    });
    
    service.stop();
    console.log("=== Script Complete ===");
}

// Execute if running in Node.js
if (typeof module !== 'undefined' && module.exports) {
    main();
    module.exports = {
        greet,
        add,
        DummyService,
        fetchData,
        processItems,
        simulateEvent
    };
}
