// Dummy script for NovaSphere project
// This script demonstrates basic JavaScript functionality

console.log('=================================');
console.log('NovaSphere Dummy Script Started');
console.log('=================================');

// Sample data
const products = [
    { name: 'NovaSphere Pro', price: 2999, category: 'Hardware' },
    { name: 'NovaSphere Lite', price: 1499, category: 'Hardware' },
    { name: 'Holographic Display', price: 599, category: 'Accessory' }
];

// Function to display products
function displayProducts(productList) {
    console.log('\nAvailable Products:');
    productList.forEach((product, index) => {
        console.log(`${index + 1}. ${product.name} - $${product.price} (${product.category})`);
    });
}

// Function to calculate total value
function calculateTotalValue(productList) {
    const total = productList.reduce((sum, product) => sum + product.price, 0);
    console.log(`\nTotal Product Value: $${total}`);
    return total;
}

// Function to filter products by category
function filterByCategory(productList, category) {
    const filtered = productList.filter(product => product.category === category);
    console.log(`\nFiltered Products (${category}):`);
    filtered.forEach(product => {
        console.log(`- ${product.name}: $${product.price}`);
    });
    return filtered;
}

// Execute dummy operations
displayProducts(products);
calculateTotalValue(products);
filterByCategory(products, 'Hardware');

// Dummy async function
async function fetchDummyData() {
    console.log('\nFetching dummy data...');
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ status: 'success', message: 'Data loaded successfully' });
        }, 1000);
    });
}

// Run async operation
fetchDummyData().then(result => {
    console.log(`\nAsync Result: ${result.message}`);
    console.log('\n=================================');
    console.log('NovaSphere Dummy Script Finished');
    console.log('=================================');
});
