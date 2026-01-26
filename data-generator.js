/**
 * Dummy Data Generator Script
 * Generates random user data, product stats, and analytics
 */

// Generate random user data
function generateRandomUsers(count = 10) {
    const firstNames = ['Alex', 'Jordan', 'Taylor', 'Morgan', 'Casey', 'Riley', 'Avery', 'Quinn', 'Sage', 'Dakota'];
    const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez'];
    const domains = ['gmail.com', 'yahoo.com', 'outlook.com', 'novasphere.com', 'techcorp.io'];
    
    const users = [];
    for (let i = 0; i < count; i++) {
        const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
        const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${domains[Math.floor(Math.random() * domains.length)]}`;
        
        users.push({
            id: i + 1,
            name: `${firstName} ${lastName}`,
            email: email,
            registeredDate: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
            subscriptionTier: ['Free', 'Basic', 'Pro', 'Enterprise'][Math.floor(Math.random() * 4)],
            active: Math.random() > 0.2
        });
    }
    return users;
}

// Generate product statistics
function generateProductStats() {
    return {
        totalUsers: Math.floor(Math.random() * 100000) + 50000,
        activeUsers: Math.floor(Math.random() * 50000) + 30000,
        dailyActiveUsers: Math.floor(Math.random() * 10000) + 5000,
        averageSessionTime: Math.floor(Math.random() * 30) + 10,
        conversionRate: (Math.random() * 5 + 2).toFixed(2),
        revenue: Math.floor(Math.random() * 1000000) + 500000,
        growthRate: (Math.random() * 20 + 5).toFixed(1)
    };
}

// Generate analytics data
function generateAnalytics(days = 30) {
    const analytics = [];
    const today = new Date();
    
    for (let i = days - 1; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        
        analytics.push({
            date: date.toISOString().split('T')[0],
            visitors: Math.floor(Math.random() * 5000) + 1000,
            pageViews: Math.floor(Math.random() * 15000) + 3000,
            signups: Math.floor(Math.random() * 100) + 10,
            revenue: Math.floor(Math.random() * 10000) + 2000
        });
    }
    
    return analytics;
}

// Main execution
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { generateRandomUsers, generateProductStats, generateAnalytics };
} else {
    console.log('=== DUMMY DATA GENERATOR ===\n');
    console.log('Random Users:', JSON.stringify(generateRandomUsers(5), null, 2));
    console.log('\nProduct Stats:', JSON.stringify(generateProductStats(), null, 2));
    console.log('\nAnalytics (Last 7 days):', JSON.stringify(generateAnalytics(7), null, 2));
}
