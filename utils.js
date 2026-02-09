/**
 * NovaSphere Utilities Script
 * A collection of helper functions for the NovaSphere landing page
 */

// Device detection utility
function detectDevice() {
    const width = window.innerWidth;
    if (width < 768) return 'mobile';
    if (width < 1024) return 'tablet';
    return 'desktop';
}

// Random ID generator
function generateId(prefix = 'ns') {
    return `${prefix}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

// Format date for display
function formatDate(date = new Date()) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Debounce function for performance optimization
function debounce(func, delay = 300) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// Throttle function for scroll/resize events
function throttle(func, limit = 100) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Simple email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Local storage wrapper with error handling
const storage = {
    set: (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (e) {
            console.error('Storage error:', e);
            return false;
        }
    },
    get: (key) => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (e) {
            console.error('Storage error:', e);
            return null;
        }
    },
    remove: (key) => {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (e) {
            console.error('Storage error:', e);
            return false;
        }
    }
};

// Analytics event tracker (dummy implementation)
function trackEvent(eventName, eventData = {}) {
    console.log(`[Analytics] Event: ${eventName}`, eventData);
    // In production, this would send to an analytics service
}

// Cookie consent helper
function getCookieConsent() {
    return storage.get('cookieConsent') || false;
}

function setCookieConsent(consent) {
    storage.set('cookieConsent', consent);
    trackEvent('cookie_consent', { consent });
}

// Export for module usage (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        detectDevice,
        generateId,
        formatDate,
        debounce,
        throttle,
        isValidEmail,
        storage,
        trackEvent,
        getCookieConsent,
        setCookieConsent
    };
}
