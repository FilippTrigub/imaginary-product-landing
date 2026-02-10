/**
 * Dummy Script - Test utility for NovaSphere project
 * This script demonstrates basic JavaScript functionality
 */

// Generate random data
function generateRandomData() {
    const data = {
        id: Math.floor(Math.random() * 10000),
        timestamp: new Date().toISOString(),
        value: Math.random() * 100,
        status: ['active', 'pending', 'completed'][Math.floor(Math.random() * 3)]
    };
    return data;
}

// Log dummy data
function logDummyData() {
    console.log('=== Dummy Script Started ===');
    console.log('Generated Data:', generateRandomData());
    console.log('Environment:', {
        platform: typeof process !== 'undefined' ? process.platform : 'browser',
        timestamp: Date.now()
    });
    console.log('=== Dummy Script Completed ===');
}

// Execute if running in Node.js
if (typeof module !== 'undefined' && module.exports) {
    logDummyData();
    module.exports = { generateRandomData, logDummyData };
}

// Execute if running in browser
if (typeof window !== 'undefined') {
    window.DummyScript = { generateRandomData, logDummyData };
}
