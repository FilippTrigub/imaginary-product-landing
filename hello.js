#!/usr/bin/env node

/**
 * Hello World Script
 * A simple, clean implementation following JavaScript best practices
 */

function main() {
    console.log('Hello, World!');
}

// Execute main function
if (require.main === module) {
    main();
}

// Export for potential reuse
module.exports = { main };
