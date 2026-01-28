#!/usr/bin/env node

/**
 * Dummy Script - A simple demonstration script
 * Purpose: Generate random data and perform basic operations
 */

// Generate random user data
function generateRandomUser() {
    const firstNames = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve', 'Frank'];
    const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia'];
    const domains = ['example.com', 'test.com', 'demo.com'];

    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${domains[Math.floor(Math.random() * domains.length)]}`;

    return {
        id: Math.floor(Math.random() * 10000),
        firstName,
        lastName,
        email,
        timestamp: new Date().toISOString()
    };
}

// Process and display user data
function processUsers(count = 5) {
    console.log('='.repeat(60));
    console.log('Dummy Script - Generating Random User Data');
    console.log('='.repeat(60));
    console.log();

    const users = [];

    for (let i = 0; i < count; i++) {
        const user = generateRandomUser();
        users.push(user);
        console.log(`User ${i + 1}:`);
        console.log(`  ID: ${user.id}`);
        console.log(`  Name: ${user.firstName} ${user.lastName}`);
        console.log(`  Email: ${user.email}`);
        console.log(`  Created: ${user.timestamp}`);
        console.log();
    }

    console.log('='.repeat(60));
    console.log(`Total users generated: ${users.length}`);
    console.log('='.repeat(60));

    return users;
}

// Main execution
if (require.main === module) {
    const userCount = process.argv[2] ? parseInt(process.argv[2]) : 5;
    processUsers(userCount);
}

module.exports = { generateRandomUser, processUsers };
