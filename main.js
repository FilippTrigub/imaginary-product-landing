// Check if NEXT_PUBLIC_FOOBAR environment variable is set
// In a browser environment, we can't directly access Node.js environment variables,
// so we'll use a simple approach: if the variable is set in the server,
// it will be passed to the client-side JavaScript

// For this simple demo, we'll check if the variable exists in the global scope
// or we can use a data attribute set by the server
if (typeof window.NEXT_PUBLIC_FOOBAR !== 'undefined' && window.NEXT_PUBLIC_FOOBAR) {
    const foobarBanner = document.getElementById('foobar-banner');
    if (foobarBanner) {
        foobarBanner.style.display = 'block';
    }
}

// Simple landing page content
const app = document.createElement('div');
app.innerHTML = '<h1>NovaSphere landing page rebuilt in JS</h1>';
document.body.appendChild(app);
