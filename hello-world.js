/**
 * NovaSphere - Simple Hello World Script
 */

document.addEventListener('DOMContentLoaded', () => {
    const greeting = '🌌 Hello World from NovaSphere!';
    console.log(greeting);

    const badge = document.createElement('div');
    badge.textContent = greeting;
    Object.assign(badge.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '10px 20px',
        borderRadius: '12px',
        background: 'linear-gradient(135deg, #764ba2, #667eea)',
        color: '#fff',
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: '600',
        boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
        zIndex: '10000',
    });

    document.body.appendChild(badge);

    setTimeout(() => {
        badge.style.transition = 'opacity 0.4s ease';
        badge.style.opacity = '0';
        setTimeout(() => badge.remove(), 400);
    }, 3500);
});
