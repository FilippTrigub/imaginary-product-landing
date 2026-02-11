/**
 * NovaSphere v2 — Dummy Utility Script
 * Simulates analytics data, testimonials, newsletter signups,
 * and product serial number generation for development/testing.
 */

// ── Dummy Analytics ──────────────────────────────────────────────────────────

function generateDummyAnalytics() {
    const pages = ['/', '/features', '/pricing', '/about', '/team', '/contact'];
    const referrers = ['google.com', 'twitter.com', 'linkedin.com', 'direct', 'producthunt.com'];

    const visitors = Math.floor(Math.random() * 5000) + 1000;
    const bounceRate = (Math.random() * 40 + 20).toFixed(1);
    const avgSessionSec = Math.floor(Math.random() * 300) + 30;

    const pageViews = pages.map(page => ({
        page,
        views: Math.floor(Math.random() * 2000) + 100,
        uniqueVisitors: Math.floor(Math.random() * 1500) + 50,
    }));

    const topReferrers = referrers.map(source => ({
        source,
        visits: Math.floor(Math.random() * 800) + 10,
    })).sort((a, b) => b.visits - a.visits);

    return {
        date: new Date().toISOString().split('T')[0],
        visitors,
        bounceRate: bounceRate + '%',
        avgSessionDuration: avgSessionSec + 's',
        pageViews,
        topReferrers,
    };
}

// ── Dummy Testimonials ───────────────────────────────────────────────────────

const dummyTestimonials = [
    { name: 'Alex Turner', role: 'Software Engineer', text: 'NovaSphere completely changed how I interact with my workspace. The holographic display is unreal!' },
    { name: 'Priya Sharma', role: 'UX Designer', text: 'The gesture controls feel so natural — it\'s like the interface reads my mind.' },
    { name: 'Carlos Mendes', role: 'Data Scientist', text: 'Running 3D data visualisations in mid-air has made my presentations unforgettable.' },
    { name: 'Emily Zhao', role: 'Product Manager', text: 'Our team productivity jumped 40% after switching to NovaSphere. Worth every penny.' },
    { name: 'David Okonkwo', role: 'Architect', text: 'Being able to walk around my building models in holographic space is a game-changer.' },
    { name: 'Lena Fischer', role: 'Educator', text: 'My students are more engaged than ever. NovaSphere makes learning truly immersive.' },
];

function getRandomTestimonial() {
    return dummyTestimonials[Math.floor(Math.random() * dummyTestimonials.length)];
}

// ── Dummy Newsletter Signup Queue ────────────────────────────────────────────

function generateDummySignups(count) {
    const domains = ['gmail.com', 'outlook.com', 'yahoo.com', 'proton.me', 'icloud.com'];
    const firstNames = ['jordan', 'taylor', 'morgan', 'casey', 'riley', 'quinn', 'avery', 'blake'];
    const signups = [];

    for (let i = 0; i < count; i++) {
        const name = firstNames[Math.floor(Math.random() * firstNames.length)];
        const domain = domains[Math.floor(Math.random() * domains.length)];
        const id = Math.floor(Math.random() * 9000) + 1000;
        signups.push({
            email: `${name}${id}@${domain}`,
            subscribedAt: new Date(Date.now() - Math.floor(Math.random() * 30) * 86400000).toISOString(),
        });
    }

    return signups;
}

// ── Dummy Serial Number Generator ────────────────────────────────────────────

function generateSerialNumber() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    const segments = [4, 4, 4];
    return segments
        .map(len => Array.from({ length: len }, () => chars[Math.floor(Math.random() * chars.length)]).join(''))
        .join('-');
}

// ── Run ──────────────────────────────────────────────────────────────────────

(function init() {
    const analytics = generateDummyAnalytics();
    const testimonial = getRandomTestimonial();
    const signups = generateDummySignups(5);
    const serial = generateSerialNumber();

    console.log('=== NovaSphere Dummy Data ===');
    console.log('Analytics:', JSON.stringify(analytics, null, 2));
    console.log('Random Testimonial:', testimonial);
    console.log('Newsletter Signups:', signups);
    console.log('Product Serial:', serial);
})();
