// Hello World JavaScript File
// NovaSphere Project

console.log('Hello World!');
console.log('Welcome to NovaSphere - The Future of Personal Computing');

// Simple Hello World function
function sayHello(name = 'World') {
    return `Hello, ${name}!`;
}

// Display hello message
function displayHelloMessage() {
    const message = sayHello('NovaSphere User');
    console.log(message);
    
    // If running in browser, create a visual element
    if (typeof document !== 'undefined') {
        const helloDiv = document.createElement('div');
        helloDiv.innerHTML = `
            <div style="
                position: fixed;
                top: 20px;
                right: 20px;
                background: linear-gradient(135deg, #6e8efb, #a777e3);
                color: white;
                padding: 20px 30px;
                border-radius: 10px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                font-family: 'Montserrat', sans-serif;
                font-weight: 600;
                z-index: 9999;
                animation: slideIn 0.5s ease;
            ">
                ${message}
            </div>
            <style>
                @keyframes slideIn {
                    from {
                        transform: translateX(400px);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
            </style>
        `;
        document.body.appendChild(helloDiv);
        
        // Remove after 3 seconds
        setTimeout(() => {
            helloDiv.remove();
        }, 3000);
    }
}

// Export functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        sayHello,
        displayHelloMessage
    };
}

// Auto-run when loaded in browser
if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', displayHelloMessage);
}
