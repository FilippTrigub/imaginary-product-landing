/**
 * Browser Hello World Script
 * Include this in an HTML file with: <script src="hello-browser.js"></script>
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
        console.log('Hello, World from the browser!');
        
        // Create a hello world element
        const helloDiv = document.createElement('div');
        helloDiv.id = 'hello-world';
        helloDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px 30px;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            font-family: Arial, sans-serif;
            z-index: 9999;
            animation: fadeIn 0.5s ease-in;
        `;
        helloDiv.innerHTML = `
            <h2 style="margin: 0 0 10px 0; font-size: 24px;">Hello, World!</h2>
            <p style="margin: 0; font-size: 14px;">Welcome to NovaSphere</p>
            <button id="close-hello" style="
                margin-top: 10px;
                padding: 5px 15px;
                background: white;
                color: #667eea;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                font-weight: bold;
            ">Close</button>
        `;
        
        // Add fade-in animation
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
        
        // Add close functionality
        document.getElementById('close-hello').addEventListener('click', function() {
            helloDiv.style.animation = 'fadeIn 0.3s ease-out reverse';
            setTimeout(() => helloDiv.remove(), 300);
        });
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (document.getElementById('hello-world')) {
                helloDiv.style.animation = 'fadeIn 0.3s ease-out reverse';
                setTimeout(() => helloDiv.remove(), 300);
            }
        }, 5000);
    }
})();
