#!/usr/bin/env python3
"""
NovaSphere API Client
Simulated API client for NovaSphere services
"""

import json
from typing import Dict, List, Optional, Any
from datetime import datetime
from enum import Enum


class RequestMethod(Enum):
    """HTTP request methods"""
    GET = "GET"
    POST = "POST"
    PUT = "PUT"
    DELETE = "DELETE"
    PATCH = "PATCH"


class APIResponse:
    """Represents an API response"""
    
    def __init__(self, status_code: int, data: Any, headers: Optional[Dict] = None):
        self.status_code = status_code
        self.data = data
        self.headers = headers or {}
        self.timestamp = datetime.now()
    
    @property
    def is_success(self) -> bool:
        """Check if response is successful"""
        return 200 <= self.status_code < 300
    
    def json(self) -> Any:
        """Get response data as JSON"""
        return self.data
    
    def __repr__(self) -> str:
        return f"APIResponse(status={self.status_code}, success={self.is_success})"


class NovaSphereAPI:
    """Simulated API client for NovaSphere services"""
    
    def __init__(self, base_url: str = "https://api.novasphere.com", api_key: Optional[str] = None):
        self.base_url = base_url.rstrip('/')
        self.api_key = api_key
        self.session_id = None
        self.request_count = 0
        
        # Simulated data store
        self.devices = [
            {"id": "dev001", "name": "NovaSphere Pro", "status": "online", "battery": 87},
            {"id": "dev002", "name": "NovaSphere Mini", "status": "online", "battery": 92},
            {"id": "dev003", "name": "NovaSphere Max", "status": "offline", "battery": 15}
        ]
        
        self.users = [
            {"id": "usr001", "username": "alice", "email": "alice@novasphere.com", "role": "admin"},
            {"id": "usr002", "username": "bob", "email": "bob@novasphere.com", "role": "user"}
        ]
    
    def _make_request(self, method: RequestMethod, endpoint: str, data: Optional[Dict] = None) -> APIResponse:
        """Simulate making an API request"""
        self.request_count += 1
        
        # Simulate authentication check
        if not self.api_key and endpoint != "/auth/login":
            return APIResponse(401, {"error": "Unauthorized", "message": "API key required"})
        
        # Route to appropriate handler
        if endpoint.startswith("/devices"):
            return self._handle_devices(method, endpoint, data)
        elif endpoint.startswith("/users"):
            return self._handle_users(method, endpoint, data)
        elif endpoint.startswith("/auth"):
            return self._handle_auth(method, endpoint, data)
        else:
            return APIResponse(404, {"error": "Not Found", "message": f"Endpoint {endpoint} not found"})
    
    def _handle_devices(self, method: RequestMethod, endpoint: str, data: Optional[Dict]) -> APIResponse:
        """Handle device-related requests"""
        if method == RequestMethod.GET:
            if endpoint == "/devices":
                return APIResponse(200, {"devices": self.devices, "count": len(self.devices)})
            else:
                device_id = endpoint.split('/')[-1]
                device = next((d for d in self.devices if d["id"] == device_id), None)
                if device:
                    return APIResponse(200, device)
                return APIResponse(404, {"error": "Device not found"})
        
        elif method == RequestMethod.POST and endpoint == "/devices":
            new_device = data or {}
            new_device["id"] = f"dev{len(self.devices) + 1:03d}"
            self.devices.append(new_device)
            return APIResponse(201, new_device)
        
        return APIResponse(405, {"error": "Method not allowed"})
    
    def _handle_users(self, method: RequestMethod, endpoint: str, data: Optional[Dict]) -> APIResponse:
        """Handle user-related requests"""
        if method == RequestMethod.GET:
            if endpoint == "/users":
                return APIResponse(200, {"users": self.users, "count": len(self.users)})
            else:
                user_id = endpoint.split('/')[-1]
                user = next((u for u in self.users if u["id"] == user_id), None)
                if user:
                    return APIResponse(200, user)
                return APIResponse(404, {"error": "User not found"})
        
        return APIResponse(405, {"error": "Method not allowed"})
    
    def _handle_auth(self, method: RequestMethod, endpoint: str, data: Optional[Dict]) -> APIResponse:
        """Handle authentication requests"""
        if method == RequestMethod.POST and endpoint == "/auth/login":
            username = data.get("username") if data else None
            if username:
                self.session_id = f"sess_{username}_{datetime.now().timestamp()}"
                return APIResponse(200, {
                    "session_id": self.session_id,
                    "message": "Login successful",
                    "expires_in": 3600
                })
            return APIResponse(400, {"error": "Username required"})
        
        return APIResponse(405, {"error": "Method not allowed"})
    
    def get(self, endpoint: str) -> APIResponse:
        """Make a GET request"""
        return self._make_request(RequestMethod.GET, endpoint)
    
    def post(self, endpoint: str, data: Optional[Dict] = None) -> APIResponse:
        """Make a POST request"""
        return self._make_request(RequestMethod.POST, endpoint, data)
    
    def get_devices(self) -> APIResponse:
        """Get all devices"""
        return self.get("/devices")
    
    def get_device(self, device_id: str) -> APIResponse:
        """Get specific device"""
        return self.get(f"/devices/{device_id}")
    
    def create_device(self, device_data: Dict) -> APIResponse:
        """Create a new device"""
        return self.post("/devices", device_data)
    
    def get_users(self) -> APIResponse:
        """Get all users"""
        return self.get("/users")
    
    def login(self, username: str) -> APIResponse:
        """Login to the API"""
        return self.post("/auth/login", {"username": username})


def demo_api_client():
    """Demonstrate API client capabilities"""
    print("\n" + "=" * 60)
    print("  NovaSphere API Client Demo")
    print("=" * 60)
    
    # Initialize client
    api = NovaSphereAPI(api_key="demo_key_12345")
    
    # Login
    print("\n--- Authentication ---")
    login_response = api.login("alice")
    print(f"Login: {login_response}")
    print(f"Session ID: {login_response.json()['session_id']}")
    
    # Get all devices
    print("\n--- Get All Devices ---")
    devices_response = api.get_devices()
    print(f"Response: {devices_response}")
    devices_data = devices_response.json()
    print(f"Total Devices: {devices_data['count']}")
    for device in devices_data['devices']:
        print(f"  • {device['name']} ({device['id']}): {device['status']} - Battery: {device['battery']}%")
    
    # Get specific device
    print("\n--- Get Specific Device ---")
    device_response = api.get_device("dev001")
    if device_response.is_success:
        device = device_response.json()
        print(f"Device: {device['name']}")
        print(f"  ID: {device['id']}")
        print(f"  Status: {device['status']}")
        print(f"  Battery: {device['battery']}%")
    
    # Create new device
    print("\n--- Create New Device ---")
    new_device = {
        "name": "NovaSphere Ultra",
        "status": "online",
        "battery": 100
    }
    create_response = api.create_device(new_device)
    print(f"Response: {create_response}")
    if create_response.is_success:
        created = create_response.json()
        print(f"Created Device: {created['name']} (ID: {created['id']})")
    
    # Get all users
    print("\n--- Get All Users ---")
    users_response = api.get_users()
    users_data = users_response.json()
    print(f"Total Users: {users_data['count']}")
    for user in users_data['users']:
        print(f"  • {user['username']} ({user['email']}) - Role: {user['role']}")
    
    # Test unauthorized access
    print("\n--- Test Unauthorized Access ---")
    unauthorized_api = NovaSphereAPI()
    unauth_response = unauthorized_api.get_devices()
    print(f"Response: {unauth_response}")
    print(f"Error: {unauth_response.json()['message']}")
    
    # Statistics
    print("\n--- API Statistics ---")
    print(f"Total Requests Made: {api.request_count}")
    print(f"Active Session: {api.session_id is not None}")
    
    print("\n" + "=" * 60)


if __name__ == "__main__":
    demo_api_client()
