// Hello World - JavaScript Console Version
console.log('Hello World!');
console.log('Welcome to NovaSphere');

// Hello World - Function Version
function sayHello(name = 'World') {
    return `Hello ${name}!`;
}

console.log(sayHello());
console.log(sayHello('NovaSphere'));

// Hello World - DOM Manipulation Version
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        const helloDiv = document.createElement('div');
        helloDiv.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 40px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            font-size: 2em;
            border-radius: 15px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            text-align: center;
            font-family: 'Montserrat', Arial, sans-serif;
            z-index: 9999;
        `;
        helloDiv.innerHTML = '<h1>Hello World!</h1><p>From JavaScript</p>';
        document.body.appendChild(helloDiv);
        
        // Auto-remove after 3 seconds
        setTimeout(() => {
            helloDiv.style.transition = 'opacity 0.5s';
            helloDiv.style.opacity = '0';
            setTimeout(() => helloDiv.remove(), 500);
        }, 3000);
    });
}

// Hello World - Class Version
class HelloWorld {
    constructor(message = 'Hello World!') {
        this.message = message;
    }
    
    greet() {
        console.log(this.message);
    }
    
    greetWithName(name) {
        console.log(`${this.message} ${name}!`);
    }
}

const greeter = new HelloWorld();
greeter.greet();
greeter.greetWithName('NovaSphere');

// Hello World - Arrow Function Version
const helloArrow = () => 'Hello World!';
console.log(helloArrow());

// Hello World - Async Version
async function asyncHello() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Hello World from Async!');
        }, 1000);
    });
}

asyncHello().then(message => console.log(message));

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { sayHello, HelloWorld, helloArrow, asyncHello };
}
