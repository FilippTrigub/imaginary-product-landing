// Hello World with DOM manipulation

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
    
    // Create and append elements
    const createHelloWorld = () => {
        const container = document.createElement('div');
        container.id = 'hello-container';
        container.style.cssText = `
            text-align: center;
            padding: 2rem;
            font-family: Arial, sans-serif;
        `;
        
        const heading = document.createElement('h1');
        heading.textContent = 'Hello, World!';
        heading.style.color = '#667eea';
        
        const paragraph = document.createElement('p');
        paragraph.textContent = 'This was created with JavaScript DOM manipulation';
        
        const button = document.createElement('button');
        button.textContent = 'Click for Alert';
        button.style.cssText = `
            padding: 0.5rem 1rem;
            background: #667eea;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 1rem;
        `;
        
        button.addEventListener('click', () => {
            alert('Hello, World from DOM event!');
        });
        
        container.appendChild(heading);
        container.appendChild(paragraph);
        container.appendChild(button);
        
        document.body.appendChild(container);
    };
    
    // Query selector examples
    const updateExistingElements = () => {
        const body = document.querySelector('body');
        if (body) {
            console.log('Hello, World from querySelector!');
        }
    };
    
    // Event delegation
    document.body.addEventListener('click', (e) => {
        if (e.target.matches('button')) {
            console.log('Hello, World from event delegation!');
        }
    });
    
    // Create the hello world elements
    createHelloWorld();
    updateExistingElements();
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { createHelloWorld: () => console.log('DOM manipulation requires browser environment') };
}
