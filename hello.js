document.addEventListener('DOMContentLoaded', () => {
    const greeting = document.createElement('div');
    greeting.style.cssText = 'padding: 2rem; text-align: center; font-family: sans-serif;';
    greeting.innerHTML = '<h1>Hello, World!</h1><p>Welcome to NovaSphere.</p>';
    document.body.appendChild(greeting);
});
