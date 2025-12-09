# MongoDB Collection Structure Documentation

## Database: testdb

### Collection: testcollection

#### Overview
- **Total Documents**: 100
- **Database Size**: ~1.87 GB
- **Collection Type**: Standard MongoDB collection

#### Schema Structure

The `testcollection` collection contains documents with the following fields:

| Field Name | Data Type | Description | Example Values |
|------------|-----------|-------------|----------------|
| `_id` | ObjectId | MongoDB's unique identifier for each document | `692f1257bd5c05cff6653049` |
| `title` | String | Document title/identifier | "Document 1", "Document 2" |
| `bool_field` | Boolean | Boolean flag field | `true`, `false` |
| `random_value` | Number | Numeric field with random values | 72.27, 92.37, 82.12 |
| `normal_value` | Number | Numeric field with normally distributed values | 56.79, 47.27, 32.72 |

#### Sample Documents

```json
{
  "_id": {"$oid": "692f1257bd5c05cff6653049"},
  "title": "Document 1",
  "bool_field": true,
  "random_value": 72.2725379712206,
  "normal_value": 56.792592813820164
}

{
  "_id": {"$oid": "692f1257bd5c05cff665304b"},
  "title": "Document 3",
  "bool_field": false,
  "random_value": 82.11550594424185,
  "normal_value": 32.71908845785053
}
```

#### Indexes

| Index Name | Fields | Type |
|------------|--------|------|
| `_id_` | `_id: 1` | Default unique index (ascending) |

#### Field Analysis

**_id Field**
- Automatically generated MongoDB ObjectId
- Ensures uniqueness across all documents
- Used as the primary key

**title Field**
- Sequential naming convention: "Document 1", "Document 2", etc.
- String type
- Human-readable identifier

**bool_field Field**
- Boolean flag
- Mixed distribution of `true` and `false` values
- Could be used for filtering or categorization

**random_value Field**
- Floating-point numbers
- Range appears to be between 0-100
- Random distribution

**normal_value Field**
- Floating-point numbers
- Values appear to follow a normal distribution
- Range varies, typically between 20-60

#### Usage Notes

This collection appears to be a test dataset with:
- 100 sample documents
- Numeric data suitable for statistical analysis
- Boolean field for filtering operations
- Sequential title identifiers for easy reference

#### MongoDB Connection Details

- **Connection Status**: ✅ Connected
- **Read-Only Mode**: Yes
- **MCP Server**: Active and functional

#### Query Examples

**Find documents where bool_field is true:**
```javascript
db.testcollection.find({ bool_field: true })
```

**Find documents with random_value greater than 80:**
```javascript
db.testcollection.find({ random_value: { $gt: 80 } })
```

**Sort by normal_value in descending order:**
```javascript
db.testcollection.find().sort({ normal_value: -1 })
```

**Count documents by bool_field:**
```javascript
db.testcollection.aggregate([
  { $group: { _id: "$bool_field", count: { $sum: 1 } } }
])
```

---

*Generated on: 2025-12-09*
*Database: testdb*
*Collection: testcollection*
