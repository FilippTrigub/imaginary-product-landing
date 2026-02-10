/**
 * NovaSphere "Hello World" Script
 * Prints greeting to console and injects a subtle DOM badge when possible.
 */
(() => {
    'use strict';

    const message = 'Hello, NovaSphere!';

    const greet = () => {
        console.log(`%c${message}`, 'color:#6e8efb;font-weight:bold;');
        injectBadge();
    };

    const injectBadge = () => {
        if (typeof document === 'undefined') return;
        if (document.querySelector('[data-novasphere-hello]')) return;

        const badge = document.createElement('div');
        badge.dataset.novasphereHello = 'true';
        badge.textContent = message;
        badge.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: linear-gradient(135deg, #6e8efb, #a777e3);
            color: #fff;
            padding: 10px 18px;
            border-radius: 999px;
            font-family: 'Montserrat', sans-serif;
            font-size: 0.95rem;
            box-shadow: 0 10px 25px rgba(110, 142, 251, 0.35);
            z-index: 9999;
        `;
        document.body.appendChild(badge);
    };

    window.NovaHello = { greet, message };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', greet);
    } else {
        greet();
    }
})();
