#!/usr/bin/env node

/**
 * Dummy Script
 * A simple demonstration script for testing purposes
 */

function greet(name = 'World') {
    console.log(`Hello, ${name}!`);
}

function generateRandomNumber(min = 1, max = 100) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function displayInfo() {
    console.log('==========================================');
    console.log('          DUMMY SCRIPT v1.0              ');
    console.log('==========================================');
    console.log('');
    console.log(`Current Time: ${new Date().toISOString()}`);
    console.log(`Platform: ${process.platform}`);
    console.log(`Node Version: ${process.version}`);
    console.log(`Random Number: ${generateRandomNumber()}`);
    console.log('');
}

function main() {
    displayInfo();
    greet('NovaSphere User');

    console.log('\nScript execution completed successfully!');
}

// Run the script if executed directly
if (require.main === module) {
    main();
}

module.exports = { greet, generateRandomNumber, displayInfo };
