#!/usr/bin/env node

// A script to generate sample data in JSON format

const generateUser = (id) => {
    const firstNames = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve', 'Frank', 'Grace', 'Henry'];
    const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis'];
    const domains = ['example.com', 'mail.com', 'test.org', 'demo.net'];
    
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${domains[Math.floor(Math.random() * domains.length)]}`;
    
    return {
        id,
        name: `${firstName} ${lastName}`,
        email,
        age: Math.floor(Math.random() * 50) + 18,
        active: Math.random() > 0.3
    };
};

const generateData = (count = 10) => {
    const users = [];
    for (let i = 1; i <= count; i++) {
        users.push(generateUser(i));
    }
    return users;
};

// Get count from command line argument or default to 10
const count = parseInt(process.argv[2]) || 10;
const users = generateData(count);

// Output as JSON
console.log(JSON.stringify(users, null, 2));
