/**
 * NovaSphere - Dummy Utility Script
 * Placeholder functions for development and testing purposes.
 */

// --- Fake User Data Generator ---
const generateDummyUser = () => {
    const firstNames = ['Alex', 'Jordan', 'Taylor', 'Morgan', 'Casey', 'Riley', 'Quinn', 'Avery'];
    const lastNames = ['Smith', 'Johnson', 'Lee', 'Garcia', 'Patel', 'Kim', 'Chen', 'Wilson'];
    const domains = ['example.com', 'test.org', 'novasphere.io', 'demo.net'];

    const first = firstNames[Math.floor(Math.random() * firstNames.length)];
    const last = lastNames[Math.floor(Math.random() * lastNames.length)];
    const domain = domains[Math.floor(Math.random() * domains.length)];

    return {
        id: Math.random().toString(36).substring(2, 10),
        name: `${first} ${last}`,
        email: `${first.toLowerCase()}.${last.toLowerCase()}@${domain}`,
        joinedAt: new Date(Date.now() - Math.floor(Math.random() * 90 * 24 * 60 * 60 * 1000)).toISOString(),
        plan: ['Starter', 'Professional', 'Enterprise'][Math.floor(Math.random() * 3)]
    };
};

// --- Mock Newsletter Signup ---
const mockNewsletterSignup = (email) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`[NovaSphere] Newsletter signup received for: ${email}`);
            resolve({ success: true, message: `Thanks! ${email} has been added to our mailing list.` });
        }, 800);
    });
};

// --- Simulated Analytics Tracker ---
const dummyAnalytics = {
    events: [],

    track(eventName, data = {}) {
        const entry = {
            event: eventName,
            data,
            timestamp: new Date().toISOString()
        };
        this.events.push(entry);
        console.log(`[Analytics] ${eventName}`, data);
    },

    getEventCount() {
        return this.events.length;
    },

    getSummary() {
        const counts = {};
        this.events.forEach(({ event }) => {
            counts[event] = (counts[event] || 0) + 1;
        });
        return counts;
    }
};

// --- Random Testimonial Generator ---
const generateTestimonial = () => {
    const quotes = [
        'NovaSphere completely transformed how I interact with my devices.',
        'The holographic interface is unlike anything I have ever seen.',
        'Incredible performance and a beautiful design — highly recommended!',
        'I switched from a traditional setup and never looked back.',
        'The AI assistant feels like it truly understands my workflow.'
    ];
    const user = generateDummyUser();

    return {
        quote: quotes[Math.floor(Math.random() * quotes.length)],
        author: user.name,
        plan: user.plan
    };
};

// --- Dummy Notification System ---
const notificationQueue = [];

const pushNotification = (title, body) => {
    const notification = {
        id: Date.now(),
        title,
        body,
        read: false,
        createdAt: new Date().toISOString()
    };
    notificationQueue.push(notification);
    console.log(`[Notification] ${title}: ${body}`);
    return notification;
};

const getUnreadCount = () => notificationQueue.filter(n => !n.read).length;

const markAllRead = () => {
    notificationQueue.forEach(n => { n.read = true; });
    console.log('[Notification] All notifications marked as read.');
};

// --- Simulated Visitor Counter ---
const visitorCounter = (() => {
    let count = Math.floor(Math.random() * 5000) + 1000;

    return {
        get() { return count; },
        increment() { count += 1; return count; },
        display() { console.log(`[NovaSphere] Current visitor count: ${count}`); }
    };
})();

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    console.log('[NovaSphere] Dummy script loaded.');

    // Simulate a page-view event
    dummyAnalytics.track('page_view', { page: window.location.pathname });

    // Bump visitor counter
    visitorCounter.increment();
    visitorCounter.display();

    // Generate a sample testimonial for dev console
    const testimonial = generateTestimonial();
    console.log(`[Testimonial] "${testimonial.quote}" — ${testimonial.author} (${testimonial.plan} plan)`);
});
