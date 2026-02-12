/**
 * Hello World Script for NovaSphere
 * A simple, clean implementation following best practices
 */

// Main Hello World function
const helloWorld = () => {
    const message = 'Hello, World!';
    console.log(message);
    return message;
};

// DOM-based Hello World implementation
const createHelloWorldElement = () => {
    const container = document.createElement('div');
    container.className = 'hello-world-container';
    container.style.cssText = `
        text-align: center;
        padding: 60px 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border-radius: 10px;
        margin: 20px auto;
        max-width: 600px;
        box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
    `;
    
    const heading = document.createElement('h1');
    heading.textContent = 'Hello, World!';
    heading.style.cssText = `
        font-size: 3rem;
        font-weight: 700;
        margin-bottom: 20px;
        font-family: 'Montserrat', sans-serif;
    `;
    
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Welcome to NovaSphere - The Future of Personal Computing';
    paragraph.style.cssText = `
        font-size: 1.2rem;
        font-family: 'Montserrat', sans-serif;
        opacity: 0.9;
    `;
    
    container.appendChild(heading);
    container.appendChild(paragraph);
    
    return container;
};

// Initialize when DOM is ready (browser environment)
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        // Log to console
        helloWorld();
        
        // Optionally append to body if needed
        // Uncomment the following lines to display on page:
        // const helloElement = createHelloWorldElement();
        // document.body.appendChild(helloElement);
    });
} else {
    // Node.js environment - run immediately
    helloWorld();
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { helloWorld, createHelloWorldElement };
}
