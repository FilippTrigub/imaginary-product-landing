// Dummy Script
// This is a simple demonstration script with various common JavaScript patterns

console.log('Dummy script starting...');

// Configuration object
const config = {
    name: 'Dummy Script',
    version: '1.0.0',
    environment: 'sandbox',
    enabled: true
};

// Sample data array
const sampleData = [
    { id: 1, name: 'Item One', value: 100 },
    { id: 2, name: 'Item Two', value: 200 },
    { id: 3, name: 'Item Three', value: 300 }
];

// Helper function to process data
function processData(data) {
    console.log('Processing data...');
    return data.map(item => ({
        ...item,
        processed: true,
        timestamp: new Date().toISOString()
    }));
}

// Calculate total value
function calculateTotal(items) {
    return items.reduce((sum, item) => sum + item.value, 0);
}

// Main execution
function main() {
    console.log(`Running ${config.name} v${config.version}`);
    console.log(`Environment: ${config.environment}`);

    if (!config.enabled) {
        console.log('Script is disabled. Exiting...');
        return;
    }

    // Process the sample data
    const processedData = processData(sampleData);
    console.log('Processed items:', processedData.length);

    // Calculate totals
    const total = calculateTotal(sampleData);
    console.log('Total value:', total);

    // Display results
    processedData.forEach(item => {
        console.log(`- ${item.name}: $${item.value} (ID: ${item.id})`);
    });

    console.log('Dummy script completed successfully!');
}

// Execute if running as main module
if (typeof require !== 'undefined' && require.main === module) {
    main();
} else {
    console.log('Dummy script loaded as module');
}

// Export for use as module
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        config,
        processData,
        calculateTotal,
        main
    };
}
