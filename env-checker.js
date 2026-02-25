// This file defines environment variables that would typically be set during build time
// In a real pnpm/Next.js setup, this would be handled by next.config.js with webpack DefinePlugin

(function() {
    // Initialize environment variables from meta tags if present (this mimics how next.js handles public env vars)
    const metas = document.querySelectorAll('meta[data-env]');
    const envVars = {};
    
    metas.forEach(meta => {
        const name = meta.getAttribute('data-env');
        const content = meta.getAttribute('content');
        if (name) {
            envVars[name] = content;
            window[name] = content;
        }
    });
    
    // Set our specific env vars
    if (!window.NEXT_PUBLIC_FOOBAR && !window.FOOBAR) {
        // In the browser, we can't access actual env vars, so these would be set at build time
        // The actual env vars will be set by the build system
        // For this example, we'll also check URL for demonstration
        const urlParams = new URLSearchParams(window.location.search);
        const urlHash = window.location.hash;
        
        const hasFoobar = urlParams.get('FOOBAR') === 'true' || 
                         urlParams.get('NEXT_PUBLIC_FOOBAR') === 'true' ||
                         urlHash.includes('FOOBAR=true') ||
                         urlHash.includes('NEXT_PUBLIC_FOOBAR=true');
        
        if (hasFoobar) {
            window.NEXT_PUBLIC_FOOBAR = 'true';
            window.FOOBAR = 'true';
        }
    }
})();