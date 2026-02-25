// main.js - Entry point for the NovaSphere website

// The environment variable check for the banner
function initializeBanner() {
    // Use Vite's native way to access environment variables
    let envValue = null;
    
    // In a built/packaged app with Vite:
    // This will only evaluate if import.meta.env is available (when processed by Vite)
    try {
        // This approach works when Vite processes this module 
        if(typeof import.meta !== 'undefined' && import.meta.env) {
            // Check for both forms of environment variables
            if (import.meta.env.NEXT_PUBLIC_FOOBAR) {
                envValue = import.meta.env.NEXT_PUBLIC_FOOBAR;
            } else if (import.meta.env.VITE_PUBLIC_FOOBAR) {
                envValue = import.meta.env.VITE_PUBLIC_FOOBAR;
            }
        }
    } catch(e) {
        // Silently ignore if import.meta isn't supported in this environment
        console.debug("import.meta not available, environment variable check bypassed");
    }
  
    // In a development context or if run directly in browser:
    // We'll use the window.APP_ENV_VARS as a backup mechanism
    if (!envValue && typeof window !== 'undefined' && window.APP_ENV_VARS) {
        envValue = window.APP_ENV_VARS.NEXT_PUBLIC_FOOBAR || window.APP_ENV_VARS.FOOBAR || window.APP_ENV_VARS.VITE_PUBLIC_FOOBAR;
    }
    
    // Finally, also check in the HTML meta tags
    if (!envValue) {
        const metaTag = document.querySelector('meta[name="next-public-foobar"]');
        if (metaTag) {
            envValue = metaTag.getAttribute('content') || null;
            // Only consider it valid if not empty
            if (!envValue || envValue === '') {
                envValue = null;
            }
        }
    }

    if (envValue) {
        showEnvironmentBanner(envValue);
    }
}

function showEnvironmentBanner(envVarValue) {
    const banner = document.getElementById('env-banner');
    const bannerMessage = document.getElementById('banner-message');
    
    if (banner && bannerMessage) {
        bannerMessage.textContent = `"${envVarValue}"`;
        banner.style.display = 'block';  // Make the banner visible
        banner.setAttribute('data-banner-active', 'true'); // Indicate active state
    }
}

// Initialize only when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeBanner);
} else {
    // DOM is already ready
    initializeBanner();
}