#!/usr/bin/env python3
"""
NovaSphere File Manager
File operations and management utilities
"""

import os
import json
from typing import List, Dict, Optional, Any
from datetime import datetime
from pathlib import Path


class FileManager:
    """Manage file operations for NovaSphere applications"""
    
    def __init__(self, base_path: str = "."):
        self.base_path = Path(base_path)
        self.operation_log = []
    
    def log_operation(self, operation: str, details: str) -> None:
        """Log a file operation"""
        self.operation_log.append({
            "timestamp": datetime.now().isoformat(),
            "operation": operation,
            "details": details
        })
    
    def create_directory(self, dir_path: str) -> bool:
        """Create a directory if it doesn't exist"""
        try:
            full_path = self.base_path / dir_path
            full_path.mkdir(parents=True, exist_ok=True)
            self.log_operation("CREATE_DIR", str(full_path))
            return True
        except Exception as e:
            self.log_operation("ERROR", f"Failed to create directory: {e}")
            return False
    
    def write_json(self, file_path: str, data: Any) -> bool:
        """Write data to a JSON file"""
        try:
            full_path = self.base_path / file_path
            full_path.parent.mkdir(parents=True, exist_ok=True)
            with open(full_path, 'w') as f:
                json.dump(data, f, indent=2)
            self.log_operation("WRITE_JSON", str(full_path))
            return True
        except Exception as e:
            self.log_operation("ERROR", f"Failed to write JSON: {e}")
            return False
    
    def read_json(self, file_path: str) -> Optional[Any]:
        """Read data from a JSON file"""
        try:
            full_path = self.base_path / file_path
            with open(full_path, 'r') as f:
                data = json.load(f)
            self.log_operation("READ_JSON", str(full_path))
            return data
        except Exception as e:
            self.log_operation("ERROR", f"Failed to read JSON: {e}")
            return None
    
    def write_text(self, file_path: str, content: str) -> bool:
        """Write text content to a file"""
        try:
            full_path = self.base_path / file_path
            full_path.parent.mkdir(parents=True, exist_ok=True)
            with open(full_path, 'w') as f:
                f.write(content)
            self.log_operation("WRITE_TEXT", str(full_path))
            return True
        except Exception as e:
            self.log_operation("ERROR", f"Failed to write text: {e}")
            return False
    
    def read_text(self, file_path: str) -> Optional[str]:
        """Read text content from a file"""
        try:
            full_path = self.base_path / file_path
            with open(full_path, 'r') as f:
                content = f.read()
            self.log_operation("READ_TEXT", str(full_path))
            return content
        except Exception as e:
            self.log_operation("ERROR", f"Failed to read text: {e}")
            return None
    
    def list_files(self, dir_path: str = ".", pattern: str = "*") -> List[str]:
        """List files in a directory matching pattern"""
        try:
            full_path = self.base_path / dir_path
            files = [str(f.relative_to(self.base_path)) for f in full_path.glob(pattern) if f.is_file()]
            self.log_operation("LIST_FILES", f"{full_path} (pattern: {pattern})")
            return sorted(files)
        except Exception as e:
            self.log_operation("ERROR", f"Failed to list files: {e}")
            return []
    
    def get_file_info(self, file_path: str) -> Optional[Dict[str, Any]]:
        """Get information about a file"""
        try:
            full_path = self.base_path / file_path
            if not full_path.exists():
                return None
            
            stat = full_path.stat()
            info = {
                "name": full_path.name,
                "path": str(full_path),
                "size": stat.st_size,
                "created": datetime.fromtimestamp(stat.st_ctime).isoformat(),
                "modified": datetime.fromtimestamp(stat.st_mtime).isoformat(),
                "is_file": full_path.is_file(),
                "is_dir": full_path.is_dir()
            }
            self.log_operation("GET_INFO", str(full_path))
            return info
        except Exception as e:
            self.log_operation("ERROR", f"Failed to get file info: {e}")
            return None
    
    def delete_file(self, file_path: str) -> bool:
        """Delete a file"""
        try:
            full_path = self.base_path / file_path
            if full_path.exists() and full_path.is_file():
                full_path.unlink()
                self.log_operation("DELETE_FILE", str(full_path))
                return True
            return False
        except Exception as e:
            self.log_operation("ERROR", f"Failed to delete file: {e}")
            return False
    
    def get_operation_log(self) -> List[Dict[str, str]]:
        """Get the operation log"""
        return self.operation_log.copy()
    
    def clear_log(self) -> None:
        """Clear the operation log"""
        self.operation_log.clear()


class ConfigManager:
    """Manage configuration files"""
    
    def __init__(self, config_file: str = "config.json"):
        self.config_file = config_file
        self.config = self.load()
    
    def load(self) -> Dict[str, Any]:
        """Load configuration from file"""
        try:
            if os.path.exists(self.config_file):
                with open(self.config_file, 'r') as f:
                    return json.load(f)
        except Exception:
            pass
        return {}
    
    def save(self) -> bool:
        """Save configuration to file"""
        try:
            with open(self.config_file, 'w') as f:
                json.dump(self.config, f, indent=2)
            return True
        except Exception:
            return False
    
    def get(self, key: str, default: Any = None) -> Any:
        """Get a configuration value"""
        return self.config.get(key, default)
    
    def set(self, key: str, value: Any) -> None:
        """Set a configuration value"""
        self.config[key] = value
    
    def delete(self, key: str) -> bool:
        """Delete a configuration key"""
        if key in self.config:
            del self.config[key]
            return True
        return False
    
    def get_all(self) -> Dict[str, Any]:
        """Get all configuration"""
        return self.config.copy()


def demo_file_manager():
    """Demonstrate FileManager capabilities"""
    print("\n" + "=" * 60)
    print("  NovaSphere File Manager Demo")
    print("=" * 60)
    
    # Initialize file manager with temp directory
    fm = FileManager("/tmp/novasphere_demo")
    
    # Create directory
    print("\n--- Create Directory ---")
    success = fm.create_directory("data")
    print(f"Created 'data' directory: {success}")
    
    # Write JSON file
    print("\n--- Write JSON File ---")
    device_data = {
        "devices": [
            {"id": "dev001", "name": "NovaSphere Pro", "status": "online"},
            {"id": "dev002", "name": "NovaSphere Mini", "status": "offline"}
        ],
        "timestamp": datetime.now().isoformat()
    }
    success = fm.write_json("data/devices.json", device_data)
    print(f"Written devices.json: {success}")
    
    # Read JSON file
    print("\n--- Read JSON File ---")
    loaded_data = fm.read_json("data/devices.json")
    if loaded_data:
        print(f"Loaded {len(loaded_data['devices'])} devices")
        for device in loaded_data['devices']:
            print(f"  • {device['name']} ({device['id']}): {device['status']}")
    
    # Write text file
    print("\n--- Write Text File ---")
    log_content = """NovaSphere System Log
======================
[2026-01-06 13:00:00] System initialized
[2026-01-06 13:00:05] Device dev001 connected
[2026-01-06 13:00:10] Device dev002 connected
[2026-01-06 13:00:15] All systems operational
"""
    success = fm.write_text("data/system.log", log_content)
    print(f"Written system.log: {success}")
    
    # Read text file
    print("\n--- Read Text File ---")
    log_text = fm.read_text("data/system.log")
    if log_text:
        lines = log_text.strip().split('\n')
        print(f"Log file has {len(lines)} lines")
        print(f"First line: {lines[0]}")
    
    # List files
    print("\n--- List Files ---")
    files = fm.list_files("data")
    print(f"Files in 'data' directory: {len(files)}")
    for file in files:
        print(f"  • {file}")
    
    # Get file info
    print("\n--- File Information ---")
    info = fm.get_file_info("data/devices.json")
    if info:
        print(f"File: {info['name']}")
        print(f"  Size: {info['size']} bytes")
        print(f"  Modified: {info['modified']}")
    
    # Operation log
    print("\n--- Operation Log ---")
    log = fm.get_operation_log()
    print(f"Total operations: {len(log)}")
    for entry in log[-3:]:
        print(f"  [{entry['timestamp']}] {entry['operation']}: {entry['details']}")
    
    # Config Manager Demo
    print("\n--- Configuration Manager ---")
    config = ConfigManager("/tmp/novasphere_demo/app_config.json")
    config.set("app_name", "NovaSphere")
    config.set("version", "1.0.0")
    config.set("debug_mode", True)
    config.set("max_devices", 10)
    config.save()
    
    print(f"Configuration saved")
    print(f"App Name: {config.get('app_name')}")
    print(f"Version: {config.get('version')}")
    print(f"Debug Mode: {config.get('debug_mode')}")
    print(f"Max Devices: {config.get('max_devices')}")
    
    print("\n" + "=" * 60)


if __name__ == "__main__":
    demo_file_manager()
