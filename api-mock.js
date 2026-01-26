/**
 * API Mock Script
 * Simulates API responses for testing
 */

class APIMock {
    constructor() {
        this.delay = 500; // Simulate network delay
        this.endpoints = {
            '/api/users': this.getUsers.bind(this),
            '/api/products': this.getProducts.bind(this),
            '/api/stats': this.getStats.bind(this),
            '/api/login': this.login.bind(this),
            '/api/register': this.register.bind(this)
        };
    }

    // Simulate network delay
    async simulateDelay() {
        return new Promise(resolve => setTimeout(resolve, this.delay));
    }

    // Mock response wrapper
    async mockResponse(data, success = true) {
        await this.simulateDelay();
        return {
            success,
            data,
            timestamp: new Date().toISOString(),
            requestId: Math.random().toString(36).substr(2, 9)
        };
    }

    // Get users endpoint
    async getUsers() {
        const users = [
            { id: 1, name: 'Alice Johnson', role: 'Admin', active: true },
            { id: 2, name: 'Bob Smith', role: 'User', active: true },
            { id: 3, name: 'Charlie Brown', role: 'User', active: false },
            { id: 4, name: 'Diana Prince', role: 'Moderator', active: true },
            { id: 5, name: 'Ethan Hunt', role: 'User', active: true }
        ];
        return this.mockResponse(users);
    }

    // Get products endpoint
    async getProducts() {
        const products = [
            { id: 1, name: 'NovaSphere Basic', price: 99, stock: 150 },
            { id: 2, name: 'NovaSphere Pro', price: 299, stock: 75 },
            { id: 3, name: 'NovaSphere Enterprise', price: 999, stock: 25 },
            { id: 4, name: 'NovaSphere Accessories', price: 49, stock: 500 }
        ];
        return this.mockResponse(products);
    }

    // Get stats endpoint
    async getStats() {
        const stats = {
            totalUsers: 15234,
            activeUsers: 12456,
            revenue: 1234567,
            growth: 23.5,
            conversionRate: 4.2
        };
        return this.mockResponse(stats);
    }

    // Login endpoint
    async login(credentials) {
        await this.simulateDelay();
        
        if (credentials.email === 'admin@novasphere.com' && credentials.password === 'admin123') {
            return this.mockResponse({
                token: 'mock-jwt-token-' + Math.random().toString(36).substr(2, 20),
                user: {
                    id: 1,
                    name: 'Admin User',
                    email: credentials.email,
                    role: 'admin'
                }
            });
        }
        
        return this.mockResponse({ message: 'Invalid credentials' }, false);
    }

    // Register endpoint
    async register(userData) {
        await this.simulateDelay();
        
        if (!userData.email || !userData.password || !userData.name) {
            return this.mockResponse({ message: 'Missing required fields' }, false);
        }
        
        return this.mockResponse({
            id: Math.floor(Math.random() * 10000),
            name: userData.name,
            email: userData.email,
            createdAt: new Date().toISOString()
        });
    }

    // Make request
    async request(endpoint, method = 'GET', body = null) {
        console.log(`[API Mock] ${method} ${endpoint}`);
        
        if (!this.endpoints[endpoint]) {
            return this.mockResponse({ message: 'Endpoint not found' }, false);
        }
        
        try {
            const result = await this.endpoints[endpoint](body);
            console.log(`[API Mock] Response:`, result);
            return result;
        } catch (error) {
            return this.mockResponse({ message: error.message }, false);
        }
    }
}

// Test the API mock
async function testAPIMock() {
    console.log('=== API MOCK TEST ===\n');
    const api = new APIMock();
    
    console.log('1. Fetching users...');
    await api.request('/api/users');
    
    console.log('\n2. Fetching products...');
    await api.request('/api/products');
    
    console.log('\n3. Fetching stats...');
    await api.request('/api/stats');
    
    console.log('\n4. Testing login (valid)...');
    await api.request('/api/login', 'POST', {
        email: 'admin@novasphere.com',
        password: 'admin123'
    });
    
    console.log('\n5. Testing login (invalid)...');
    await api.request('/api/login', 'POST', {
        email: 'wrong@email.com',
        password: 'wrongpass'
    });
    
    console.log('\n6. Testing registration...');
    await api.request('/api/register', 'POST', {
        name: 'New User',
        email: 'newuser@example.com',
        password: 'SecurePass123'
    });
}

// Run tests
testAPIMock();

if (typeof module !== 'undefined' && module.exports) {
    module.exports = APIMock;
}
