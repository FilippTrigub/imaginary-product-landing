// Mock environment variables detection for browser context
// We'll check for the specific variables mentioned: FOOBAR and NEXT_PUBLIC_FOOBAR

// For the purpose of this demo, we'll set variables if they exist
// In real-world scenarios, NEXT_PUBLIC_* vars would be exposed to client-side code during build time

// Check if the env vars were passed as global variables (injected by build system)
let hasEnvVars = false;

// The instruction mentions that NEXT_PUBLIC_FOOBAR is already set as an environment variable
// In an actual deployment with a proper build system, those variables would be available either in window object
// Or as meta tags in the HTML during the build process

// As specified in the instructions, NEXT_PUBLIC_FOOBAR is already an environment variable
const nextPublicFoobar = typeof window.NEXT_PUBLIC_FOOBAR !== 'undefined' ? window.NEXT_PUBLIC_FOOBAR : null;
const foobar = typeof window.FOOBAR !== 'undefined' ? window.FOOBAR : null;

// Also try to check for environment values that might have been hardcoded during initial render
if (nextPublicFoobar || foobar) {
    hasEnvVars = true;
} else {
    // Try to check for a script tag containing the environment variable info (commonly used during build)
    // In many systems, the env vars are set via meta tags during the build process
    const envMeta = document.querySelector('meta[name="next-public-foobar-env"], meta[name="foobar-env"]');
    if (envMeta?.content === 'set') {
        hasEnvVars = true;
    } else {
        // Check if values exist in localStorage (useful for development/testing)
        if (localStorage.getItem('NEXT_PUBLIC_FOOBAR') || localStorage.getItem('FOOBAR')) {
            hasEnvVars = true;
        }
    }
}

// If environment variables are detected, add attributes to HTML for CSS selectors to pick up
if (hasEnvVars) {
    if (document && document.documentElement) {
        document.documentElement.setAttribute('data-env-foobar-present', 'true');
    }
    
    // Also set a global variable for JS to reference later
    if (typeof window !== 'undefined') {
        window.ENV_VARS_PRESENT = true;
    }
}