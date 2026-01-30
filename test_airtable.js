// Test Airtable Tools Availability
console.log("Testing Airtable tools availability...");

// Check if Airtable is available in the environment
try {
    // Try to require Airtable if it's available as a module
    const Airtable = require('airtable');
    console.log("✓ Airtable module is available");
    console.log("Airtable version:", Airtable.version || "unknown");
    
    // Test basic Airtable functionality
    console.log("\nTesting Airtable base connection...");
    
    // This would normally require API key and base ID
    // For testing purposes, we'll just check if the constructor works
    const base = new Airtable({ apiKey: 'test_api_key' }).base('test_base_id');
    console.log("✓ Airtable base constructor works");
    
    console.log("\nAirtable tools are available and functional!");
    
} catch (error) {
    if (error.code === 'MODULE_NOT_FOUND') {
        console.log("✗ Airtable module not found - this is expected in this environment");
        console.log("The Airtable MCP server is mentioned as available, but the Node.js module may not be installed");
    } else {
        console.log("✗ Error testing Airtable:", error.message);
    }
}

// Check environment variables for Airtable configuration
console.log("\nChecking environment variables...");
const airtableEnvVars = Object.keys(process.env).filter(key => 
    key.toLowerCase().includes('airtable')
);

if (airtableEnvVars.length > 0) {
    console.log("Found Airtable-related environment variables:");
    airtableEnvVars.forEach(varName => {
        console.log(`  - ${varName}`);
    });
} else {
    console.log("No Airtable-related environment variables found");
}

console.log("\nTest completed!");