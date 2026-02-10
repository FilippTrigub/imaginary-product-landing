/**
 * NovaSphere - Hello World Script
 * A simple demonstration script for the NovaSphere project
 */

(function() {
    'use strict';

    const message = 'Hello, World! Welcome to NovaSphere.';
    const emoji = '🌐';

    // Console output
    console.log(`${emoji} ${message}`);
    console.log('─'.repeat(50));
    console.log('NovaSphere - The Future of Personal Computing');
    console.log('Version: 2.0');
    console.log('Status: Ready');
    console.log('─'.repeat(50));

    // Browser environment - DOM manipulation
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        document.addEventListener('DOMContentLoaded', () => {
            const helloDiv = document.createElement('div');
            helloDiv.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: linear-gradient(135deg, #6e8efb, #a777e3);
                color: white;
                padding: 15px 25px;
                border-radius: 10px;
                box-shadow: 0 4px 15px rgba(110, 142, 251, 0.4);
                font-family: 'Montserrat', sans-serif;
                font-weight: 600;
                z-index: 9999;
                animation: slideIn 0.5s ease-out;
            `;
            helloDiv.textContent = `${emoji} ${message}`;

            // Add animation keyframes
            const style = document.createElement('style');
            style.textContent = `
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
            `;
            document.head.appendChild(style);
            document.body.appendChild(helloDiv);

            // Auto-remove after 5 seconds
            setTimeout(() => {
                helloDiv.style.transition = 'opacity 0.5s ease-out';
                helloDiv.style.opacity = '0';
                setTimeout(() => helloDiv.remove(), 500);
            }, 5000);
        });
    }

    // Export for Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = {
            message,
            greet: () => console.log(`${emoji} ${message}`)
        };
    }
})();
