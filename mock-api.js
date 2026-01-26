/**
 * Mock API - Simulates API responses for testing
 */

class MockAPI {
    constructor(delay = 500) {
        this.delay = delay;
        this.database = {
            users: [],
            products: [],
            orders: []
        };
        this.initializeData();
    }

    initializeData() {
        // Initialize with some dummy data
        this.database.users = [
            { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin' },
            { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'user' },
            { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'user' }
        ];

        this.database.products = [
            { id: 1, name: 'NovaSphere Pro', price: 2999, stock: 50 },
            { id: 2, name: 'NovaSphere Elite', price: 4999, stock: 30 },
            { id: 3, name: 'NovaSphere Ultimate', price: 7999, stock: 15 }
        ];

        this.database.orders = [
            { id: 1, userId: 1, productId: 1, quantity: 2, status: 'shipped' },
            { id: 2, userId: 2, productId: 2, quantity: 1, status: 'pending' }
        ];
    }

    // Simulate network delay
    async simulateDelay() {
        return new Promise(resolve => setTimeout(resolve, this.delay));
    }

    // GET request simulation
    async get(endpoint, id = null) {
        await this.simulateDelay();

        const resource = endpoint.replace(/^\//, '');
        
        if (!this.database[resource]) {
            return { error: 'Resource not found', status: 404 };
        }

        if (id) {
            const item = this.database[resource].find(item => item.id === parseInt(id));
            return item ? { data: item, status: 200 } : { error: 'Item not found', status: 404 };
        }

        return { data: this.database[resource], status: 200 };
    }

    // POST request simulation
    async post(endpoint, data) {
        await this.simulateDelay();

        const resource = endpoint.replace(/^\//, '');
        
        if (!this.database[resource]) {
            return { error: 'Resource not found', status: 404 };
        }

        const newId = this.database[resource].length > 0 
            ? Math.max(...this.database[resource].map(item => item.id)) + 1 
            : 1;

        const newItem = { id: newId, ...data };
        this.database[resource].push(newItem);

        return { data: newItem, status: 201 };
    }

    // PUT request simulation
    async put(endpoint, id, data) {
        await this.simulateDelay();

        const resource = endpoint.replace(/^\//, '');
        
        if (!this.database[resource]) {
            return { error: 'Resource not found', status: 404 };
        }

        const index = this.database[resource].findIndex(item => item.id === parseInt(id));
        
        if (index === -1) {
            return { error: 'Item not found', status: 404 };
        }

        this.database[resource][index] = { id: parseInt(id), ...data };
        return { data: this.database[resource][index], status: 200 };
    }

    // DELETE request simulation
    async delete(endpoint, id) {
        await this.simulateDelay();

        const resource = endpoint.replace(/^\//, '');
        
        if (!this.database[resource]) {
            return { error: 'Resource not found', status: 404 };
        }

        const index = this.database[resource].findIndex(item => item.id === parseInt(id));
        
        if (index === -1) {
            return { error: 'Item not found', status: 404 };
        }

        this.database[resource].splice(index, 1);
        return { message: 'Deleted successfully', status: 200 };
    }

    // Simulate random errors
    async getWithRandomError(endpoint, errorRate = 0.2) {
        if (Math.random() < errorRate) {
            await this.simulateDelay();
            return { error: 'Random server error', status: 500 };
        }
        return this.get(endpoint);
    }
}

// Export for Node.js or browser
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MockAPI;
} else {
    window.MockAPI = MockAPI;
}

// Demo usage
if (require.main === module) {
    (async () => {
        const api = new MockAPI(100);
        
        console.log('=== GET all users ===');
        console.log(await api.get('/users'));
        
        console.log('\n=== GET user by ID ===');
        console.log(await api.get('/users', 1));
        
        console.log('\n=== POST new user ===');
        console.log(await api.post('/users', { name: 'Alice Wonder', email: 'alice@example.com', role: 'user' }));
        
        console.log('\n=== PUT update user ===');
        console.log(await api.put('/users', 1, { name: 'John Updated', email: 'john.new@example.com', role: 'admin' }));
        
        console.log('\n=== DELETE user ===');
        console.log(await api.delete('/users', 3));
        
        console.log('\n=== GET all users after changes ===');
        console.log(await api.get('/users'));
    })();
}
