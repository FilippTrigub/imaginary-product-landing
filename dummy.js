// Dummy Script - Placeholder functionality for testing

// Dummy data structures
const dummyUsers = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "admin" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", role: "user" },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com", role: "user" }
];

const dummyProducts = [
    { id: 101, name: "NovaSphere Pro", price: 999.99, stock: 50 },
    { id: 102, name: "NovaSphere Lite", price: 499.99, stock: 120 },
    { id: 103, name: "NovaSphere Enterprise", price: 2499.99, stock: 25 }
];

// Dummy functions
function fetchDummyData(type) {
    console.log(`Fetching dummy ${type} data...`);
    
    if (type === "users") {
        return dummyUsers;
    } else if (type === "products") {
        return dummyProducts;
    }
    
    return [];
}

function processDummyOrder(userId, productId, quantity) {
    console.log(`Processing order: User ${userId}, Product ${productId}, Quantity ${quantity}`);
    
    const user = dummyUsers.find(u => u.id === userId);
    const product = dummyProducts.find(p => p.id === productId);
    
    if (!user || !product) {
        console.log("Error: Invalid user or product");
        return false;
    }
    
    if (product.stock < quantity) {
        console.log("Error: Insufficient stock");
        return false;
    }
    
    const total = product.price * quantity;
    console.log(`Order successful! Total: $${total.toFixed(2)}`);
    return true;
}

function generateDummyReport() {
    console.log("\n=== Dummy Report ===");
    console.log(`Total Users: ${dummyUsers.length}`);
    console.log(`Total Products: ${dummyProducts.length}`);
    
    const totalInventoryValue = dummyProducts.reduce((sum, p) => sum + (p.price * p.stock), 0);
    console.log(`Total Inventory Value: $${totalInventoryValue.toFixed(2)}`);
    
    console.log("\nUser Roles:");
    const roleCounts = dummyUsers.reduce((acc, user) => {
        acc[user.role] = (acc[user.role] || 0) + 1;
        return acc;
    }, {});
    console.log(roleCounts);
}

// Execute dummy operations
console.log("=== Dummy Script Started ===\n");

const users = fetchDummyData("users");
console.log("Users:", users);

const products = fetchDummyData("products");
console.log("\nProducts:", products);

console.log("\n--- Testing Order Processing ---");
processDummyOrder(1, 101, 2);
processDummyOrder(2, 102, 5);
processDummyOrder(3, 103, 100); // Should fail - insufficient stock

generateDummyReport();

console.log("\n=== Dummy Script Completed ===");
