// Dummy Script - Sample JavaScript functionality
// This script demonstrates various JavaScript patterns and features

document.addEventListener('DOMContentLoaded', () => {
    console.log('Dummy script loaded successfully!');

    // Sample data structures
    const dummyData = {
        users: [
            { id: 1, name: 'Alice Johnson', role: 'Developer' },
            { id: 2, name: 'Bob Smith', role: 'Designer' },
            { id: 3, name: 'Charlie Brown', role: 'Manager' }
        ],
        settings: {
            theme: 'light',
            notifications: true,
            language: 'en'
        }
    };

    // Sample utility functions
    const utils = {
        formatDate: (date) => {
            return new Date(date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        },

        generateRandomId: () => {
            return Math.random().toString(36).substr(2, 9);
        },

        debounce: (func, delay) => {
            let timeoutId;
            return function(...args) {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => func.apply(this, args), delay);
            };
        }
    };

    // Sample DOM manipulation
    const createDummyElement = () => {
        const container = document.createElement('div');
        container.className = 'dummy-container';
        container.style.padding = '20px';
        container.style.margin = '20px';
        container.style.backgroundColor = '#f8f9fa';
        container.style.borderRadius = '8px';
        container.style.fontFamily = 'Montserrat, sans-serif';

        const title = document.createElement('h2');
        title.textContent = 'Dummy Script Demo';
        title.style.color = '#667eea';

        const list = document.createElement('ul');
        list.style.listStyle = 'none';
        list.style.padding = '0';

        dummyData.users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = `${user.name} - ${user.role}`;
            listItem.style.padding = '10px';
            listItem.style.marginBottom = '5px';
            listItem.style.backgroundColor = 'white';
            listItem.style.borderRadius = '5px';
            listItem.style.cursor = 'pointer';
            listItem.style.transition = 'transform 0.2s ease';

            listItem.addEventListener('mouseenter', function() {
                this.style.transform = 'translateX(5px)';
            });

            listItem.addEventListener('mouseleave', function() {
                this.style.transform = 'translateX(0)';
            });

            list.appendChild(listItem);
        });

        container.appendChild(title);
        container.appendChild(list);

        return container;
    };

    // Sample event handlers
    const handleClick = (event) => {
        console.log('Element clicked:', event.target);
    };

    const handleScroll = utils.debounce(() => {
        const scrollPosition = window.pageYOffset;
        console.log('Scroll position:', scrollPosition);
    }, 200);

    // Sample async function
    const fetchDummyData = async () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    status: 'success',
                    data: dummyData,
                    timestamp: new Date().toISOString()
                });
            }, 1000);
        });
    };

    // Sample class
    class DummyCounter {
        constructor(initialValue = 0) {
            this.count = initialValue;
        }

        increment() {
            this.count++;
            console.log('Counter incremented:', this.count);
        }

        decrement() {
            this.count--;
            console.log('Counter decremented:', this.count);
        }

        reset() {
            this.count = 0;
            console.log('Counter reset');
        }

        getValue() {
            return this.count;
        }
    }

    // Initialize dummy functionality
    const init = () => {
        console.log('Initializing dummy script...');
        
        // Create and append dummy element
        const dummyElement = createDummyElement();
        document.body.appendChild(dummyElement);

        // Add event listeners
        window.addEventListener('scroll', handleScroll);

        // Create counter instance
        const counter = new DummyCounter(10);
        counter.increment();
        counter.increment();
        console.log('Current counter value:', counter.getValue());

        // Fetch dummy data
        fetchDummyData().then(response => {
            console.log('Fetched data:', response);
        });

        console.log('Dummy script initialized!');
    };

    // Run initialization
    init();
});
