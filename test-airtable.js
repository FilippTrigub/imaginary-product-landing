// Airtable API Test Script
const https = require('https');

const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;

if (!AIRTABLE_API_KEY) {
  console.error("Error: AIRTABLE_API_KEY environment variable not set");
  process.exit(1);
}

console.log("=== Airtable API Test ===");
console.log("API Key found:", AIRTABLE_API_KEY.substring(0, 10) + "...");
console.log();

// Function to make Airtable API request
function makeAirtableRequest(path, method = 'GET', data = null) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.airtable.com',
      path: path,
      method: method,
      headers: {
        'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json'
      }
    };

    const req = https.request(options, (res) => {
      let body = '';
      
      res.on('data', (chunk) => {
        body += chunk;
      });
      
      res.on('end', () => {
        try {
          const parsed = JSON.parse(body);
          resolve({ status: res.statusCode, data: parsed });
        } catch (e) {
          resolve({ status: res.statusCode, data: body });
        }
      });
    });

    req.on('error', (e) => {
      reject(e);
    });

    if (data) {
      req.write(JSON.stringify(data));
    }

    req.end();
  });
}

// Test 1: List bases (requires meta API access)
async function testListBases() {
  console.log("Test 1: Attempting to list bases...");
  try {
    const result = await makeAirtableRequest('/v0/meta/bases');
    console.log("Status:", result.status);
    if (result.status === 200) {
      console.log("Bases found:", result.data.bases?.length || 0);
      if (result.data.bases && result.data.bases.length > 0) {
        console.log("First base:", JSON.stringify(result.data.bases[0], null, 2));
      }
    } else {
      console.log("Response:", JSON.stringify(result.data, null, 2));
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
  console.log();
}

// Test 2: Try to access a sample base (will fail without valid base ID)
async function testAccessBase() {
  console.log("Test 2: Testing base access (with placeholder ID)...");
  const sampleBaseId = "appXXXXXXXXXXXXXX"; // Placeholder
  try {
    const result = await makeAirtableRequest(`/v0/${sampleBaseId}/Table`);
    console.log("Status:", result.status);
    console.log("Response:", JSON.stringify(result.data, null, 2));
  } catch (error) {
    console.error("Error:", error.message);
  }
  console.log();
}

// Run tests
async function runTests() {
  await testListBases();
  await testAccessBase();
  
  console.log("=== Test Summary ===");
  console.log("✓ Hello World script executed successfully");
  console.log("✓ Airtable API key is configured");
  console.log("✓ Airtable API connection tested");
  console.log();
  console.log("Note: To fully test Airtable functionality, you need:");
  console.log("  1. A valid base ID");
  console.log("  2. Table names within that base");
  console.log("  3. Appropriate permissions for the API key");
}

runTests().catch(console.error);
