/**
 * Dummy Script for NovaSphere Project
 * This is a simple demonstration script showcasing basic JavaScript functionality
 */

// Configuration object
const config = {
    appName: 'NovaSphere',
    version: '1.0.0',
    environment: 'development'
};

// Simple greeting function
function greet(name = 'User') {
    return `Hello, ${name}! Welcome to ${config.appName} v${config.version}`;
}

// Basic data processing function
function processData(items) {
    if (!Array.isArray(items)) {
        console.error('Error: Expected an array');
        return [];
    }

    return items.map((item, index) => ({
        id: index + 1,
        value: item,
        timestamp: new Date().toISOString()
    }));
}

// Simple calculation utility
function calculateStats(numbers) {
    if (!numbers || numbers.length === 0) {
        return { sum: 0, average: 0, count: 0 };
    }

    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;

    return {
        sum,
        average,
        count: numbers.length,
        min: Math.min(...numbers),
        max: Math.max(...numbers)
    };
}

// Main execution function
function main() {
    console.log('=== Dummy Script Execution ===');
    console.log(greet('Developer'));
    console.log('Environment:', config.environment);

    // Example data processing
    const sampleData = ['apple', 'banana', 'cherry'];
    const processed = processData(sampleData);
    console.log('Processed data:', processed);

    // Example statistics calculation
    const numbers = [10, 20, 30, 40, 50];
    const stats = calculateStats(numbers);
    console.log('Statistics:', stats);

    console.log('=== Script Complete ===');
}

// Export for use in other modules (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        greet,
        processData,
        calculateStats,
        config
    };
}

// Run main function if executed directly
if (typeof require !== 'undefined' && require.main === module) {
    main();
}

// For browser environment
if (typeof window !== 'undefined') {
    window.DummyScript = {
        greet,
        processData,
        calculateStats,
        config,
        main
    };
}
