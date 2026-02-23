// Check if NEXT_PUBLIC_FOOBAR environment variable is set
// In a browser environment, we can't directly access environment variables,
// but we can check if the server has injected this information
const foobarBanner = document.getElementById('foobar-banner');

// For this simple demo, we'll show the banner if the element exists
// In a real app, this would be controlled by server-side rendering
if (foobarBanner) {
    // Check if the environment variable is set via window object
    // This would be injected by the server in a real application
    if (typeof window !== 'undefined' && window.NEXT_PUBLIC_FOOBAR) {
        foobarBanner.style.display = 'block';
    }
    
    // For testing purposes, we'll also check if the env var was passed via data attribute
    if (foobarBanner.dataset.foobarSet === 'true') {
        foobarBanner.style.display = 'block';
    }
}