/**
 * Hello World - Browser Script
 * A simple script that displays "Hello, World!" in the browser
 */

(function() {
    'use strict';
    
    // Console output
    console.log('Hello, World!');
    console.log('This script is running in the browser!');
    
    // Create a greeting element
    function createGreeting() {
        const greeting = document.createElement('div');
        greeting.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 2rem 3rem;
            border-radius: 10px;
            font-family: Arial, sans-serif;
            font-size: 2rem;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            z-index: 10000;
            text-align: center;
        `;
        greeting.innerHTML = `
            <h1 style="margin: 0 0 1rem 0;">Hello, World!</h1>
            <p style="margin: 0; font-size: 1rem;">Welcome to NovaSphere</p>
            <button onclick="this.parentElement.remove()" style="
                margin-top: 1rem;
                padding: 0.5rem 1rem;
                background: white;
                color: #667eea;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                font-weight: bold;
            ">Close</button>
        `;
        document.body.appendChild(greeting);
    }
    
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createGreeting);
    } else {
        createGreeting();
    }
})();
