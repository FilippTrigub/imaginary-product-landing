// Dummy Script - Sample JavaScript functionality

// Dummy data
const users = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'admin' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'user' },
    { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', role: 'user' },
    { id: 4, name: 'Diana Prince', email: 'diana@example.com', role: 'moderator' }
];

const products = [
    { id: 101, name: 'NovaSphere Pro', price: 1299.99, stock: 50 },
    { id: 102, name: 'NovaSphere Lite', price: 799.99, stock: 120 },
    { id: 103, name: 'NovaSphere Ultra', price: 1999.99, stock: 25 }
];

// Dummy functions
function greetUser(name) {
    return `Hello, ${name}! Welcome to NovaSphere.`;
}

function calculateTotal(items) {
    return items.reduce((sum, item) => sum + item.price, 0);
}

function filterByRole(users, role) {
    return users.filter(user => user.role === role);
}

function getProductById(id) {
    return products.find(product => product.id === id);
}

function generateRandomId() {
    return Math.floor(Math.random() * 10000) + 1000;
}

// Dummy execution
console.log('=== Dummy Script Execution ===\n');

console.log('1. Greeting users:');
users.forEach(user => {
    console.log(`   ${greetUser(user.name)}`);
});

console.log('\n2. Total product value:');
const total = calculateTotal(products);
console.log(`   $${total.toFixed(2)}`);

console.log('\n3. Filter users by role (admin):');
const admins = filterByRole(users, 'admin');
console.log(`   Found ${admins.length} admin(s):`, admins.map(u => u.name));

console.log('\n4. Get product by ID (102):');
const product = getProductById(102);
console.log(`   ${product.name} - $${product.price}`);

console.log('\n5. Generate random IDs:');
for (let i = 0; i < 3; i++) {
    console.log(`   Random ID ${i + 1}: ${generateRandomId()}`);
}

console.log('\n=== Script completed successfully ===');
