/**
 * Simple Test Runner - Basic testing framework
 */

class TestRunner {
    constructor(name = 'Test Suite') {
        this.name = name;
        this.tests = [];
        this.results = {
            passed: 0,
            failed: 0,
            total: 0
        };
    }

    // Add a test
    test(description, testFn) {
        this.tests.push({ description, testFn });
    }

    // Assertion helpers
    assert = {
        equal: (actual, expected, message = '') => {
            if (actual !== expected) {
                throw new Error(message || `Expected ${expected} but got ${actual}`);
            }
        },
        
        notEqual: (actual, expected, message = '') => {
            if (actual === expected) {
                throw new Error(message || `Expected ${actual} to not equal ${expected}`);
            }
        },
        
        truthy: (value, message = '') => {
            if (!value) {
                throw new Error(message || `Expected ${value} to be truthy`);
            }
        },
        
        falsy: (value, message = '') => {
            if (value) {
                throw new Error(message || `Expected ${value} to be falsy`);
            }
        },
        
        deepEqual: (actual, expected, message = '') => {
            if (JSON.stringify(actual) !== JSON.stringify(expected)) {
                throw new Error(message || `Expected ${JSON.stringify(expected)} but got ${JSON.stringify(actual)}`);
            }
        },
        
        throws: (fn, message = '') => {
            let threw = false;
            try {
                fn();
            } catch (e) {
                threw = true;
            }
            if (!threw) {
                throw new Error(message || 'Expected function to throw an error');
            }
        },
        
        isType: (value, type, message = '') => {
            if (typeof value !== type) {
                throw new Error(message || `Expected type ${type} but got ${typeof value}`);
            }
        },
        
        contains: (array, item, message = '') => {
            if (!array.includes(item)) {
                throw new Error(message || `Expected array to contain ${item}`);
            }
        }
    };

    // Run all tests
    async run() {
        console.log(`\n${'='.repeat(50)}`);
        console.log(`Running: ${this.name}`);
        console.log('='.repeat(50));
        
        this.results = { passed: 0, failed: 0, total: 0 };
        
        for (const test of this.tests) {
            this.results.total++;
            try {
                await test.testFn(this.assert);
                this.results.passed++;
                console.log(`✓ ${test.description}`);
            } catch (error) {
                this.results.failed++;
                console.log(`✗ ${test.description}`);
                console.log(`  Error: ${error.message}`);
            }
        }
        
        this.printSummary();
        return this.results;
    }

    // Print test summary
    printSummary() {
        console.log('\n' + '='.repeat(50));
        console.log('Test Summary:');
        console.log(`Total: ${this.results.total}`);
        console.log(`Passed: ${this.results.passed} ✓`);
        console.log(`Failed: ${this.results.failed} ✗`);
        
        const percentage = ((this.results.passed / this.results.total) * 100).toFixed(2);
        console.log(`Success Rate: ${percentage}%`);
        console.log('='.repeat(50) + '\n');
    }
}

// Export for Node.js or browser
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TestRunner;
} else {
    window.TestRunner = TestRunner;
}

// Demo usage
if (require.main === module) {
    const runner = new TestRunner('Demo Tests');
    
    runner.test('Addition works correctly', (assert) => {
        assert.equal(2 + 2, 4);
    });
    
    runner.test('String concatenation', (assert) => {
        assert.equal('Hello' + ' ' + 'World', 'Hello World');
    });
    
    runner.test('Array contains item', (assert) => {
        assert.contains([1, 2, 3, 4], 3);
    });
    
    runner.test('Type checking', (assert) => {
        assert.isType('hello', 'string');
        assert.isType(42, 'number');
    });
    
    runner.test('Deep equality', (assert) => {
        assert.deepEqual({ a: 1, b: 2 }, { a: 1, b: 2 });
    });
    
    runner.test('This test will fail', (assert) => {
        assert.equal(1, 2, 'One does not equal two');
    });
    
    runner.run();
}
