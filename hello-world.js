// NovaSphere - Hello World Script
// A simple demonstration script for the NovaSphere project

console.log('Hello, World!');
console.log('Welcome to NovaSphere - The Future of Personal Computing');

// Display a styled message in the console
console.log('%c🚀 NovaSphere v2.0 Initialized', 'color: #6e8efb; font-size: 16px; font-weight: bold;');

// If running in a browser environment, create a visual hello world
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        const helloDiv = document.createElement('div');
        helloDiv.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #6e8efb, #a777e3);
            color: white;
            padding: 40px 60px;
            border-radius: 20px;
            box-shadow: 0 10px 40px rgba(110, 142, 251, 0.4);
            font-family: 'Montserrat', sans-serif;
            text-align: center;
            z-index: 9999;
            animation: fadeIn 0.5s ease-in;
        `;
        
        helloDiv.innerHTML = `
            <h1 style="font-size: 2.5rem; margin-bottom: 10px;">Hello, World! 👋</h1>
            <p style="font-size: 1.2rem; opacity: 0.9;">Welcome to NovaSphere</p>
        `;
        
        // Add fade-in animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; transform: translate(-50%, -50%) scale(0.9); }
                to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            }
        `;
        document.head.appendChild(style);
        
        document.body.appendChild(helloDiv);
        
        // Remove after 3 seconds
        setTimeout(() => {
            helloDiv.style.animation = 'fadeIn 0.5s ease-out reverse';
            setTimeout(() => helloDiv.remove(), 500);
        }, 3000);
    });
}
