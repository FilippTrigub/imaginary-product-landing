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
function createHelloWorldElement() {
    const div = document.createElement('div');
    div.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 30px 60px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        font-size: 2em;
        font-weight: bold;
        border-radius: 15px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        z-index: 9999;
    `;
    div.textContent = 'Hello World!';
    return div;
}

// Uncomment to add Hello World to the page when this script is loaded
// document.addEventListener('DOMContentLoaded', () => {
//     document.body.appendChild(createHelloWorldElement());
// });

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

const greeting = new HelloWorld();
greeting.greet();
greeting.greetWithName('NovaSphere User');

// Hello World - Arrow Function Version
const helloWorld = () => 'Hello World!';
console.log(helloWorld());

// Hello World - Async Version
async function asyncHelloWorld() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Hello World! (Async)');
        }, 1000);
    });
}

asyncHelloWorld().then(message => console.log(message));

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        sayHello,
        HelloWorld,
        helloWorld,
        asyncHelloWorld,
        createHelloWorldElement
    };
}
