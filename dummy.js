// Dummy Script for NovaSphere Landing Page
// This script demonstrates various JavaScript functionalities

console.log('=== NovaSphere Dummy Script Started ===');

// 1. Generate random product features
function generateRandomFeatures() {
    const features = [
        'Holographic Display',
        'AI-Powered Assistant',
        'Quantum Processing',
        'Neural Interface',
        'Cloud Integration',
        'Biometric Security'
    ];
    
    console.log('\nRandom Product Features:');
    const randomCount = Math.floor(Math.random() * 3) + 3;
    for (let i = 0; i < randomCount; i++) {
        const randomIndex = Math.floor(Math.random() * features.length);
        console.log(`  - ${features[randomIndex]}`);
    }
}

// 2. Simulate user interactions
function simulateUserInteractions() {
    console.log('\nSimulating User Interactions:');
    const actions = ['Click', 'Scroll', 'Hover', 'Submit Form'];
    
    actions.forEach((action, index) => {
        setTimeout(() => {
            console.log(`  [${new Date().toLocaleTimeString()}] User action: ${action}`);
        }, index * 500);
    });
}

// 3. Generate dummy analytics data
function generateAnalytics() {
    console.log('\nDummy Analytics Data:');
    const data = {
        pageViews: Math.floor(Math.random() * 10000) + 1000,
        uniqueVisitors: Math.floor(Math.random() * 5000) + 500,
        avgSessionDuration: `${Math.floor(Math.random() * 5) + 1}m ${Math.floor(Math.random() * 60)}s`,
        bounceRate: `${Math.floor(Math.random() * 40) + 20}%`
    };
    
    console.log(`  Page Views: ${data.pageViews}`);
    console.log(`  Unique Visitors: ${data.uniqueVisitors}`);
    console.log(`  Avg Session Duration: ${data.avgSessionDuration}`);
    console.log(`  Bounce Rate: ${data.bounceRate}`);
}

// 4. Create dummy notification system
function createNotifications() {
    console.log('\nDummy Notifications:');
    const notifications = [
        'New product update available!',
        'Welcome to NovaSphere',
        'Check out our latest features',
        'Limited time offer - 20% off!'
    ];
    
    notifications.forEach((notification, index) => {
        setTimeout(() => {
            console.log(`  📢 ${notification}`);
        }, (index + 1) * 1000);
    });
}

// 5. Dummy data processor
function processData() {
    console.log('\nProcessing Dummy Data:');
    const data = Array.from({ length: 10 }, (_, i) => ({
        id: i + 1,
        value: Math.random() * 100,
        timestamp: new Date().toISOString()
    }));
    
    const sum = data.reduce((acc, item) => acc + item.value, 0);
    const avg = sum / data.length;
    
    console.log(`  Total items processed: ${data.length}`);
    console.log(`  Average value: ${avg.toFixed(2)}`);
    console.log(`  Sum: ${sum.toFixed(2)}`);
}

// Execute all dummy functions
generateRandomFeatures();
simulateUserInteractions();
generateAnalytics();
createNotifications();
processData();

console.log('\n=== NovaSphere Dummy Script Completed ===');
