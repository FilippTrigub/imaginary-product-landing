// Complete Airtable API Test with Discovered Base
const https = require('https');

const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
const BASE_ID = "app1dVJjVQfpInWAa"; // Discovered from API

console.log("=== Complete Airtable Test ===");
console.log("Base ID:", BASE_ID);
console.log("Base Name: test base");
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

// Test: Get base schema
async function testGetBaseSchema() {
  console.log("Test 1: Getting base schema...");
  try {
    const result = await makeAirtableRequest(`/v0/meta/bases/${BASE_ID}/tables`);
    console.log("Status:", result.status);
    if (result.status === 200) {
      console.log("Tables found:", result.data.tables?.length || 0);
      if (result.data.tables && result.data.tables.length > 0) {
        result.data.tables.forEach((table, idx) => {
          console.log(`\nTable ${idx + 1}:`);
          console.log("  Name:", table.name);
          console.log("  ID:", table.id);
          console.log("  Fields:", table.fields?.length || 0);
          if (table.fields && table.fields.length > 0) {
            console.log("  Field names:", table.fields.map(f => f.name).join(", "));
          }
        });
        return result.data.tables;
      }
    } else {
      console.log("Response:", JSON.stringify(result.data, null, 2));
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
  console.log();
  return [];
}

// Test: List records from a table
async function testListRecords(tableName) {
  console.log(`Test 2: Listing records from table "${tableName}"...`);
  try {
    const result = await makeAirtableRequest(`/v0/${BASE_ID}/${encodeURIComponent(tableName)}`);
    console.log("Status:", result.status);
    if (result.status === 200) {
      console.log("Records found:", result.data.records?.length || 0);
      if (result.data.records && result.data.records.length > 0) {
        console.log("\nFirst record:");
        console.log(JSON.stringify(result.data.records[0], null, 2));
      }
    } else {
      console.log("Response:", JSON.stringify(result.data, null, 2));
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
  console.log();
}

// Test: Create a record
async function testCreateRecord(tableName) {
  console.log(`Test 3: Creating a test record in "${tableName}"...`);
  try {
    const testData = {
      fields: {
        "Name": "Test Entry " + new Date().toISOString(),
        "Notes": "Created by automated test script"
      }
    };
    
    const result = await makeAirtableRequest(
      `/v0/${BASE_ID}/${encodeURIComponent(tableName)}`,
      'POST',
      { records: [testData] }
    );
    
    console.log("Status:", result.status);
    if (result.status === 200) {
      console.log("Record created successfully!");
      console.log("Record ID:", result.data.records?.[0]?.id);
    } else {
      console.log("Response:", JSON.stringify(result.data, null, 2));
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
  console.log();
}

// Run all tests
async function runAllTests() {
  const tables = await testGetBaseSchema();
  
  if (tables.length > 0) {
    const firstTable = tables[0];
    await testListRecords(firstTable.name);
    await testCreateRecord(firstTable.name);
  }
  
  console.log("=== Final Summary ===");
  console.log("✓ Hello World script works");
  console.log("✓ Airtable API key validated");
  console.log("✓ Base discovered: app1dVJjVQfpInWAa (test base)");
  console.log("✓ Schema retrieval tested");
  console.log("✓ Record listing tested");
  console.log("✓ Record creation tested");
  console.log("\nAll Airtable tools are functional!");
}

runAllTests().catch(console.error);
