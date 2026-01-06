#!/usr/bin/env python3
"""
NovaSphere Database
In-memory database system with query capabilities
"""

import json
from typing import List, Dict, Any, Optional, Callable
from datetime import datetime
from copy import deepcopy


class Query:
    """Query builder for database operations"""
    
    def __init__(self, data: List[Dict[str, Any]]):
        self.data = data
        self.filters: List[Callable] = []
        self.sort_key: Optional[str] = None
        self.sort_reverse: bool = False
        self.limit_count: Optional[int] = None
        self.offset_count: int = 0
    
    def where(self, field: str, operator: str, value: Any) -> 'Query':
        """Add a filter condition"""
        operators = {
            '==': lambda x, y: x == y,
            '!=': lambda x, y: x != y,
            '>': lambda x, y: x > y,
            '<': lambda x, y: x < y,
            '>=': lambda x, y: x >= y,
            '<=': lambda x, y: x <= y,
            'in': lambda x, y: x in y,
            'contains': lambda x, y: y in x
        }
        
        if operator not in operators:
            raise ValueError(f"Invalid operator: {operator}")
        
        op_func = operators[operator]
        self.filters.append(lambda item: field in item and op_func(item[field], value))
        return self
    
    def order_by(self, field: str, descending: bool = False) -> 'Query':
        """Sort results by field"""
        self.sort_key = field
        self.sort_reverse = descending
        return self
    
    def limit(self, count: int) -> 'Query':
        """Limit number of results"""
        self.limit_count = count
        return self
    
    def offset(self, count: int) -> 'Query':
        """Skip number of results"""
        self.offset_count = count
        return self
    
    def execute(self) -> List[Dict[str, Any]]:
        """Execute the query and return results"""
        results = self.data
        
        # Apply filters
        for filter_func in self.filters:
            results = [item for item in results if filter_func(item)]
        
        # Apply sorting
        if self.sort_key:
            results = sorted(results, key=lambda x: x.get(self.sort_key, ''), reverse=self.sort_reverse)
        
        # Apply offset
        if self.offset_count > 0:
            results = results[self.offset_count:]
        
        # Apply limit
        if self.limit_count is not None:
            results = results[:self.limit_count]
        
        return deepcopy(results)
    
    def count(self) -> int:
        """Count matching results"""
        return len(self.execute())
    
    def first(self) -> Optional[Dict[str, Any]]:
        """Get first result"""
        results = self.execute()
        return results[0] if results else None


class Table:
    """Represents a database table"""
    
    def __init__(self, name: str):
        self.name = name
        self.data: List[Dict[str, Any]] = []
        self.auto_increment_id = 1
        self.indexes: Dict[str, Dict[Any, List[int]]] = {}
    
    def insert(self, record: Dict[str, Any]) -> Dict[str, Any]:
        """Insert a record into the table"""
        record = deepcopy(record)
        
        # Add auto-increment ID if not present
        if 'id' not in record:
            record['id'] = self.auto_increment_id
            self.auto_increment_id += 1
        
        # Add timestamps
        record['created_at'] = datetime.now().isoformat()
        record['updated_at'] = datetime.now().isoformat()
        
        self.data.append(record)
        return record
    
    def insert_many(self, records: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
        """Insert multiple records"""
        return [self.insert(record) for record in records]
    
    def find(self, record_id: int) -> Optional[Dict[str, Any]]:
        """Find a record by ID"""
        for record in self.data:
            if record.get('id') == record_id:
                return deepcopy(record)
        return None
    
    def query(self) -> Query:
        """Create a new query"""
        return Query(self.data)
    
    def update(self, record_id: int, updates: Dict[str, Any]) -> bool:
        """Update a record by ID"""
        for record in self.data:
            if record.get('id') == record_id:
                record.update(updates)
                record['updated_at'] = datetime.now().isoformat()
                return True
        return False
    
    def delete(self, record_id: int) -> bool:
        """Delete a record by ID"""
        for i, record in enumerate(self.data):
            if record.get('id') == record_id:
                self.data.pop(i)
                return True
        return False
    
    def count(self) -> int:
        """Count total records"""
        return len(self.data)
    
    def all(self) -> List[Dict[str, Any]]:
        """Get all records"""
        return deepcopy(self.data)
    
    def truncate(self) -> None:
        """Delete all records"""
        self.data.clear()
        self.auto_increment_id = 1


class Database:
    """In-memory database with multiple tables"""
    
    def __init__(self, name: str = "novasphere_db"):
        self.name = name
        self.tables: Dict[str, Table] = {}
        self.created_at = datetime.now()
    
    def create_table(self, name: str) -> Table:
        """Create a new table"""
        if name in self.tables:
            raise ValueError(f"Table '{name}' already exists")
        
        table = Table(name)
        self.tables[name] = table
        return table
    
    def get_table(self, name: str) -> Optional[Table]:
        """Get a table by name"""
        return self.tables.get(name)
    
    def drop_table(self, name: str) -> bool:
        """Drop a table"""
        if name in self.tables:
            del self.tables[name]
            return True
        return False
    
    def list_tables(self) -> List[str]:
        """List all table names"""
        return list(self.tables.keys())
    
    def export_json(self) -> str:
        """Export database to JSON"""
        export_data = {
            "database": self.name,
            "created_at": self.created_at.isoformat(),
            "tables": {
                name: table.all()
                for name, table in self.tables.items()
            }
        }
        return json.dumps(export_data, indent=2)
    
    def import_json(self, json_data: str) -> None:
        """Import database from JSON"""
        data = json.loads(json_data)
        
        for table_name, records in data.get('tables', {}).items():
            if table_name not in self.tables:
                self.create_table(table_name)
            
            table = self.get_table(table_name)
            table.truncate()
            table.insert_many(records)
    
    def get_statistics(self) -> Dict[str, Any]:
        """Get database statistics"""
        return {
            "name": self.name,
            "tables": len(self.tables),
            "total_records": sum(table.count() for table in self.tables.values()),
            "table_stats": {
                name: table.count()
                for name, table in self.tables.items()
            }
        }


def demo_database():
    """Demonstrate database capabilities"""
    print("\n" + "=" * 60)
    print("  NovaSphere Database Demo")
    print("=" * 60)
    
    # Create database
    db = Database("novasphere_db")
    
    # Create tables
    print("\n--- Create Tables ---")
    users_table = db.create_table("users")
    devices_table = db.create_table("devices")
    print(f"Created tables: {', '.join(db.list_tables())}")
    
    # Insert users
    print("\n--- Insert Users ---")
    users = [
        {"username": "alice", "email": "alice@novasphere.com", "role": "admin", "score": 95},
        {"username": "bob", "email": "bob@novasphere.com", "role": "user", "score": 87},
        {"username": "charlie", "email": "charlie@novasphere.com", "role": "admin", "score": 92},
        {"username": "diana", "email": "diana@novasphere.com", "role": "user", "score": 88}
    ]
    inserted_users = users_table.insert_many(users)
    print(f"Inserted {len(inserted_users)} users")
    
    # Insert devices
    print("\n--- Insert Devices ---")
    devices = [
        {"name": "NovaSphere Pro", "status": "online", "battery": 87, "user_id": 1},
        {"name": "NovaSphere Mini", "status": "online", "battery": 92, "user_id": 2},
        {"name": "NovaSphere Max", "status": "offline", "battery": 15, "user_id": 1},
        {"name": "NovaSphere Ultra", "status": "online", "battery": 100, "user_id": 3}
    ]
    inserted_devices = devices_table.insert_many(devices)
    print(f"Inserted {len(inserted_devices)} devices")
    
    # Query: Find all admins
    print("\n--- Query: Find All Admins ---")
    admins = users_table.query().where("role", "==", "admin").execute()
    print(f"Found {len(admins)} admins:")
    for admin in admins:
        print(f"  • {admin['username']} (score: {admin['score']})")
    
    # Query: Find users with score > 90
    print("\n--- Query: High Score Users ---")
    high_scorers = users_table.query().where("score", ">", 90).order_by("score", descending=True).execute()
    print(f"Users with score > 90:")
    for user in high_scorers:
        print(f"  • {user['username']}: {user['score']}")
    
    # Query: Find online devices
    print("\n--- Query: Online Devices ---")
    online_devices = devices_table.query().where("status", "==", "online").execute()
    print(f"Online devices: {len(online_devices)}")
    for device in online_devices:
        print(f"  • {device['name']} (battery: {device['battery']}%)")
    
    # Query: Low battery devices
    print("\n--- Query: Low Battery Devices ---")
    low_battery = devices_table.query().where("battery", "<", 50).execute()
    print(f"Low battery devices: {len(low_battery)}")
    for device in low_battery:
        print(f"  • {device['name']}: {device['battery']}%")
    
    # Update record
    print("\n--- Update Record ---")
    users_table.update(1, {"score": 98})
    updated_user = users_table.find(1)
    print(f"Updated user: {updated_user['username']} - new score: {updated_user['score']}")
    
    # Pagination
    print("\n--- Pagination ---")
    page1 = users_table.query().order_by("username").limit(2).execute()
    page2 = users_table.query().order_by("username").offset(2).limit(2).execute()
    print(f"Page 1: {[u['username'] for u in page1]}")
    print(f"Page 2: {[u['username'] for u in page2]}")
    
    # Count queries
    print("\n--- Count Queries ---")
    total_users = users_table.count()
    admin_count = users_table.query().where("role", "==", "admin").count()
    print(f"Total users: {total_users}")
    print(f"Admin users: {admin_count}")
    
    # Database statistics
    print("\n--- Database Statistics ---")
    stats = db.get_statistics()
    print(f"Database: {stats['name']}")
    print(f"Tables: {stats['tables']}")
    print(f"Total Records: {stats['total_records']}")
    print("Records per table:")
    for table_name, count in stats['table_stats'].items():
        print(f"  • {table_name}: {count}")
    
    # Export to JSON
    print("\n--- Export Database ---")
    json_export = db.export_json()
    print(f"Exported database to JSON ({len(json_export)} bytes)")
    
    print("\n" + "=" * 60)


if __name__ == "__main__":
    demo_database()
