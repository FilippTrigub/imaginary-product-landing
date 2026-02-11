// Hello World Script for NovaSphere Project

console.log('Hello, World!');
console.log('Welcome to NovaSphere - The Future of Personal Computing');

// If running in a browser environment
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        const helloDiv = document.createElement('div');
        helloDiv.style.cssText = 'padding: 20px; text-align: center; font-size: 24px; font-weight: bold;';
        helloDiv.textContent = 'Hello, World!';
        document.body.insertBefore(helloDiv, document.body.firstChild);
    });
}

// Export for Node.js environment
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        greet: () => 'Hello, World!'
    };
}
