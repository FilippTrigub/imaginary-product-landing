/**
 * NovaSphere Utility Functions
 * 
 * A collection of reusable utility functions for common web development tasks.
 * Includes date formatting, string manipulation, local storage helpers, and more.
 */

/**
 * Format a date object into a human-readable string
 * @param {Date} date - The date to format
 * @param {string} [format='YYYY-MM-DD'] - Format string (YYYY, MM, DD, HH, mm, ss)
 * @returns {string} Formatted date string
 */
export function formatDate(date, format = 'YYYY-MM-DD') {
    if (!(date instanceof Date)) {
        date = new Date(date);
    }
    
    const pad = (num) => num.toString().padStart(2, '0');
    
    return format.replace(/YYYY|MM|DD|HH|mm|ss/g, (match) => {
        switch (match) {
            case 'YYYY': return date.getFullYear();
            case 'MM': return pad(date.getMonth() + 1);
            case 'DD': return pad(date.getDate());
            case 'HH': return pad(date.getHours());
            case 'mm': return pad(date.getMinutes());
            case 'ss': return pad(date.getSeconds());
            default: return match;
        }
    });
}

/**
 * Capitalize the first letter of a string
 * @param {string} str - The string to capitalize
 * @returns {string} Capitalized string
 */
export function capitalize(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

/**
 * Truncate a string to a specified length with ellipsis
 * @param {string} str - The string to truncate
 * @param {number} maxLength - Maximum length before truncation
 * @param {string} [ellipsis='...'] - Ellipsis string to append
 * @returns {string} Truncated string
 */
export function truncate(str, maxLength, ellipsis = '...') {
    if (!str) return '';
    if (str.length <= maxLength) return str;
    return str.substring(0, maxLength) + ellipsis;
}

/**
 * LocalStorage wrapper with JSON serialization
 */
export const storage = {
    /**
     * Get an item from localStorage
     * @param {string} key - Storage key
     * @param {*} [defaultValue] - Default value if key doesn't exist
     * @returns {*} Parsed value or default
     */
    get(key, defaultValue = null) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (error) {
            console.error(`Error reading localStorage key "${key}":`, error);
            return defaultValue;
        }
    },
    
    /**
     * Set an item in localStorage
     * @param {string} key - Storage key
     * @param {*} value - Value to store (will be JSON serialized)
     */
    set(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error(`Error setting localStorage key "${key}":`, error);
        }
    },
    
    /**
     * Remove an item from localStorage
     * @param {string} key - Storage key to remove
     */
    remove(key) {
        localStorage.removeItem(key);
    },
    
    /**
     * Clear all items from localStorage
     */
    clear() {
        localStorage.clear();
    }
};

/**
 * Generate a unique ID
 * @param {number} [length=16] - Length of the ID
 * @returns {string} Unique ID
 */
export function generateId(length = 16) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

/**
 * Debounce a function
 * @param {Function} func - Function to debounce
 * @param {number} wait - Debounce wait time in milliseconds
 * @returns {Function} Debounced function
 */
export function debounce(func, wait) {
    let timeout;
    return function(...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}

/**
 * Throttle a function
 * @param {Function} func - Function to throttle
 * @param {number} limit - Throttle limit in milliseconds
 * @returns {Function} Throttled function
 */
export function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function(...args) {
        const context = this;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(() => {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}

/**
 * Check if an element is visible in the viewport
 * @param {HTMLElement} element - Element to check
 * @param {number} [threshold=0] - Percentage of element that must be visible (0-1)
 * @returns {boolean} True if element is visible
 */
export function isElementVisible(element, threshold = 0) {
    if (!element) return false;
    
    const rect = element.getBoundingClientRect();
    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    
    // Calculate visible area
    const visibleHeight = Math.min(rect.bottom, viewHeight) - Math.max(rect.top, 0);
    const visibleArea = Math.max(0, visibleHeight);
    
    return visibleArea >= (rect.height * threshold);
}

/**
 * Format a number as currency
 * @param {number} amount - Amount to format
 * @param {string} [currency='USD'] - Currency code
 * @param {string} [locale='en-US'] - Locale for formatting
 * @returns {string} Formatted currency string
 */
export function formatCurrency(amount, currency = 'USD', locale = 'en-US') {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(amount);
}

/**
 * Validate an email address
 * @param {string} email - Email address to validate
 * @returns {boolean} True if email is valid
 */
export function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}

/**
 * Validate a password (minimum 8 characters, at least 1 letter and 1 number)
 * @param {string} password - Password to validate
 * @returns {boolean} True if password is valid
 */
export function validatePassword(password) {
    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return re.test(password);
}

// Export all utilities as default
const utils = {
    formatDate,
    capitalize,
    truncate,
    storage,
    generateId,
    debounce,
    throttle,
    isElementVisible,
    formatCurrency,
    validateEmail,
    validatePassword
};

export default utils;