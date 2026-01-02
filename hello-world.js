// Hello World - Console Output
console.log('Hello World!');
console.log('Welcome to NovaSphere');

// Hello World - DOM Manipulation
function createHelloWorld() {
    const container = document.createElement('div');
    container.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        font-family: 'Montserrat', Arial, sans-serif;
        color: #667eea;
        padding: 40px;
        background: white;
        border-radius: 15px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
    `;
    
    const heading = document.createElement('h1');
    heading.textContent = 'Hello World!';
    heading.style.cssText = 'font-size: 3em; margin: 0;';
    
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Created with JavaScript';
    paragraph.style.cssText = 'font-size: 1.2em; color: #666; margin-top: 10px;';
    
    container.appendChild(heading);
    container.appendChild(paragraph);
    document.body.appendChild(container);
}

// Hello World - Alert
function showHelloWorldAlert() {
    alert('Hello World from NovaSphere!');
}

// Hello World - Function
function helloWorld() {
    return 'Hello World!';
}

// Hello World - Class
class HelloWorld {
    constructor(message = 'Hello World!') {
        this.message = message;
    }
    
    greet() {
        console.log(this.message);
        return this.message;
    }
    
    display() {
        const element = document.createElement('div');
        element.textContent = this.message;
        element.style.cssText = `
            padding: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border-radius: 10px;
            text-align: center;
            font-size: 2em;
            margin: 20px;
        `;
        document.body.appendChild(element);
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { helloWorld, HelloWorld, createHelloWorld, showHelloWorldAlert };
}

// Auto-execute if loaded in browser
if (typeof window !== 'undefined') {
    console.log('Hello World script loaded successfully!');
}
