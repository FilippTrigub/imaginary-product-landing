/**
 * Browser Hello World Script
 * This script demonstrates DOM manipulation and browser-based hello world
 */

(function() {
    'use strict';
    
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    function init() {
        console.log('Hello World from the browser!');
        
        // Create a hello world element
        const helloDiv = document.createElement('div');
        helloDiv.id = 'hello-world';
        helloDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            font-family: Arial, sans-serif;
            z-index: 9999;
            animation: fadeIn 0.5s ease-in;
        `;
        helloDiv.innerHTML = '<h2>Hello World!</h2><p>Welcome to NovaSphere</p>';
        
        // Add animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(-20px); }
                to { opacity: 1; transform: translateY(0); }
            }
        `;
        document.head.appendChild(style);
        
        // Append to body
        document.body.appendChild(helloDiv);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            helloDiv.style.animation = 'fadeIn 0.5s ease-out reverse';
            setTimeout(() => helloDiv.remove(), 500);
        }, 5000);
    }
})();
