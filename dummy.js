// Dummy Script for NovaSphere Project
// This script demonstrates various basic JavaScript operations

console.log('=== NovaSphere Dummy Script ===');

// 1. Simple data structure
const dummyData = {
    projectName: 'NovaSphere',
    version: '1.0.0',
    features: ['Holographic Interface', 'Advanced Computing', 'Future Technology'],
    active: true
};

console.log('Project Info:', dummyData);

// 2. Array operations
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log('Original numbers:', numbers);
console.log('Doubled numbers:', doubled);

// 3. Simple function
function greet(name) {
    return `Hello, ${name}! Welcome to ${dummyData.projectName}`;
}

console.log(greet('User'));

// 4. Async operation simulation
async function fetchDummyData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ status: 'success', message: 'Dummy data loaded' });
        }, 1000);
    });
}

// 5. Class example
class DummyComponent {
    constructor(name) {
        this.name = name;
        this.timestamp = new Date().toISOString();
    }

    display() {
        console.log(`Component: ${this.name}, Created: ${this.timestamp}`);
    }
}

// Execute dummy operations
const component = new DummyComponent('TestComponent');
component.display();

// Run async operation
fetchDummyData().then(result => {
    console.log('Async result:', result);
});

console.log('=== Dummy Script Complete ===');
