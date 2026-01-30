// Airtable CRUD Operations Test Script
const https = require('https');

const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID || 'appXXXXXXXXXXXXXX';
const AIRTABLE_TABLE_NAME = process.env.AIRTABLE_TABLE_NAME || 'Tasks';

if (!AIRTABLE_API_KEY) {
  console.error("Error: AIRTABLE_API_KEY environment variable not set");
  process.exit(1);
}

console.log("=== Airtable CRUD Operations Test ===");
console.log("API Key:", AIRTABLE_API_KEY.substring(0, 10) + "...");
console.log("Base ID:", AIRTABLE_BASE_ID);
console.log("Table Name:", AIRTABLE_TABLE_NAME);
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

// Test 1: List records (READ)
async function testListRecords() {
  console.log("Test 1: List Records (READ)");
  console.log("─".repeat(50));
  try {
    const result = await makeAirtableRequest(
      `/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE_NAME)}?maxRecords=5`
    );
    console.log("Status:", result.status);
    
    if (result.status === 200) {
      console.log("✓ Successfully retrieved records");
      console.log("Records count:", result.data.records?.length || 0);
      if (result.data.records && result.data.records.length > 0) {
        console.log("\nFirst record:");
        console.log(JSON.stringify(result.data.records[0], null, 2));
      }
    } else {
      console.log("✗ Failed to retrieve records");
      console.log("Response:", JSON.stringify(result.data, null, 2));
    }
  } catch (error) {
    console.error("✗ Error:", error.message);
  }
  console.log();
}

// Test 2: Create a record (CREATE)
async function testCreateRecord() {
  console.log("Test 2: Create Record (CREATE)");
  console.log("─".repeat(50));
  
  const newRecord = {
    fields: {
      Name: `Test Task ${Date.now()}`,
      Status: 'Todo',
      Priority: 'Medium',
      Notes: 'Created by automated test script'
    }
  };
  
  try {
    const result = await makeAirtableRequest(
      `/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE_NAME)}`,
      'POST',
      newRecord
    );
    console.log("Status:", result.status);
    
    if (result.status === 200 || result.status === 201) {
      console.log("✓ Successfully created record");
      console.log("New record ID:", result.data.id);
      console.log("Fields:", JSON.stringify(result.data.fields, null, 2));
      return result.data.id;
    } else {
      console.log("✗ Failed to create record");
      console.log("Response:", JSON.stringify(result.data, null, 2));
      return null;
    }
  } catch (error) {
    console.error("✗ Error:", error.message);
    return null;
  }
  console.log();
}

// Test 3: Update a record (UPDATE)
async function testUpdateRecord(recordId) {
  console.log("Test 3: Update Record (UPDATE)");
  console.log("─".repeat(50));
  
  if (!recordId) {
    console.log("⊘ Skipping - no record ID provided");
    console.log();
    return;
  }
  
  const updateData = {
    fields: {
      Status: 'In Progress',
      Notes: 'Updated by automated test script'
    }
  };
  
  try {
    const result = await makeAirtableRequest(
      `/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE_NAME)}/${recordId}`,
      'PATCH',
      updateData
    );
    console.log("Status:", result.status);
    
    if (result.status === 200) {
      console.log("✓ Successfully updated record");
      console.log("Updated fields:", JSON.stringify(result.data.fields, null, 2));
    } else {
      console.log("✗ Failed to update record");
      console.log("Response:", JSON.stringify(result.data, null, 2));
    }
  } catch (error) {
    console.error("✗ Error:", error.message);
  }
  console.log();
}

// Test 4: Get a specific record (READ by ID)
async function testGetRecord(recordId) {
  console.log("Test 4: Get Specific Record (READ by ID)");
  console.log("─".repeat(50));
  
  if (!recordId) {
    console.log("⊘ Skipping - no record ID provided");
    console.log();
    return;
  }
  
  try {
    const result = await makeAirtableRequest(
      `/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE_NAME)}/${recordId}`
    );
    console.log("Status:", result.status);
    
    if (result.status === 200) {
      console.log("✓ Successfully retrieved record");
      console.log("Record:", JSON.stringify(result.data, null, 2));
    } else {
      console.log("✗ Failed to retrieve record");
      console.log("Response:", JSON.stringify(result.data, null, 2));
    }
  } catch (error) {
    console.error("✗ Error:", error.message);
  }
  console.log();
}

// Test 5: Delete a record (DELETE)
async function testDeleteRecord(recordId) {
  console.log("Test 5: Delete Record (DELETE)");
  console.log("─".repeat(50));
  
  if (!recordId) {
    console.log("⊘ Skipping - no record ID provided");
    console.log();
    return;
  }
  
  try {
    const result = await makeAirtableRequest(
      `/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE_NAME)}/${recordId}`,
      'DELETE'
    );
    console.log("Status:", result.status);
    
    if (result.status === 200) {
      console.log("✓ Successfully deleted record");
      console.log("Deleted:", result.data.deleted);
      console.log("Record ID:", result.data.id);
    } else {
      console.log("✗ Failed to delete record");
      console.log("Response:", JSON.stringify(result.data, null, 2));
    }
  } catch (error) {
    console.error("✗ Error:", error.message);
  }
  console.log();
}

// Test 6: Filter records
async function testFilterRecords() {
  console.log("Test 6: Filter Records");
  console.log("─".repeat(50));
  
  const filterFormula = encodeURIComponent("{Status} = 'Todo'");
  
  try {
    const result = await makeAirtableRequest(
      `/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE_NAME)}?filterByFormula=${filterFormula}&maxRecords=3`
    );
    console.log("Status:", result.status);
    
    if (result.status === 200) {
      console.log("✓ Successfully filtered records");
      console.log("Matching records:", result.data.records?.length || 0);
      if (result.data.records && result.data.records.length > 0) {
        result.data.records.forEach((record, index) => {
          console.log(`\nRecord ${index + 1}:`, record.fields.Name);
        });
      }
    } else {
      console.log("✗ Failed to filter records");
      console.log("Response:", JSON.stringify(result.data, null, 2));
    }
  } catch (error) {
    console.error("✗ Error:", error.message);
  }
  console.log();
}

// Run all tests
async function runTests() {
  console.log("Starting CRUD operations test suite...\n");
  
  // Read operations
  await testListRecords();
  await testFilterRecords();
  
  // Create, Update, Delete cycle
  const recordId = await testCreateRecord();
  await testGetRecord(recordId);
  await testUpdateRecord(recordId);
  await testDeleteRecord(recordId);
  
  console.log("=".repeat(50));
  console.log("Test Suite Complete");
  console.log("=".repeat(50));
  console.log("\nConfiguration:");
  console.log("  Base ID:", AIRTABLE_BASE_ID);
  console.log("  Table:", AIRTABLE_TABLE_NAME);
  console.log("\nNote: Set AIRTABLE_BASE_ID and AIRTABLE_TABLE_NAME");
  console.log("      environment variables for actual testing.");
}

runTests().catch(console.error);
