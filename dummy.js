/**
 * NovaSphere — Dummy Utility Script
 * Simulates analytics, testimonials, and live activity for demo purposes.
 */

// ── Dummy Analytics ──────────────────────────────────────────────────────────

const DummyAnalytics = {
    visitors: () => Math.floor(Math.random() * 50000) + 10000,
    pageViews: () => Math.floor(Math.random() * 200000) + 50000,
    bounceRate: () => (Math.random() * 30 + 20).toFixed(1) + '%',
    avgSession: () => (Math.random() * 4 + 1).toFixed(2) + ' min',
    conversionRate: () => (Math.random() * 5 + 1).toFixed(2) + '%',

    generateReport() {
        return {
            visitors: this.visitors(),
            pageViews: this.pageViews(),
            bounceRate: this.bounceRate(),
            avgSessionDuration: this.avgSession(),
            conversionRate: this.conversionRate(),
            topReferrers: ['google.com', 'twitter.com', 'producthunt.com', 'hackernews.com'],
            timestamp: new Date().toISOString(),
        };
    },
};

// ── Dummy Testimonials ───────────────────────────────────────────────────────

const DummyTestimonials = [
    { name: 'Elena Vasquez', role: 'UX Designer', text: 'NovaSphere completely changed how I prototype holographic interfaces. Incredible tool.' },
    { name: 'Raj Kapoor', role: 'Software Engineer', text: 'The quantum processing layer is blazing fast. My simulations run 10x quicker now.' },
    { name: 'Mei Lin', role: 'Data Scientist', text: 'I can visualize multi-dimensional datasets in mid-air. It feels like the future.' },
    { name: 'Carlos Mendes', role: 'Startup Founder', text: 'We pitched our product using NovaSphere holographic display. Investors were speechless.' },
    { name: 'Anya Petrov', role: 'Architect', text: 'Walking through my building designs in 3D before they are built? Game changer.' },
];

const getRandomTestimonial = () => {
    const index = Math.floor(Math.random() * DummyTestimonials.length);
    return DummyTestimonials[index];
};

// ── Dummy Live Activity Notifications ────────────────────────────────────────

const cities = ['Tokyo', 'Berlin', 'São Paulo', 'New York', 'Lagos', 'Sydney', 'Mumbai', 'London', 'Seoul', 'Nairobi'];
const actions = [
    'just signed up for the free trial',
    'upgraded to the Pro plan',
    'left a 5-star review',
    'shared NovaSphere on social media',
    'downloaded the holographic SDK',
    'joined the community forum',
];

const generateActivity = () => {
    const city = cities[Math.floor(Math.random() * cities.length)];
    const action = actions[Math.floor(Math.random() * actions.length)];
    return `Someone from ${city} ${action}`;
};

// ── Dummy Product Stats ──────────────────────────────────────────────────────

const DummyProductStats = {
    totalUsers: 142857,
    countriesReached: 78,
    uptimePercent: 99.97,
    apiRequestsToday: 3_420_198,
    hologramsRendered: 8_912_044,
};

// ── Initialization ───────────────────────────────────────────────────────────

const init = () => {
    console.log('╔══════════════════════════════════════════╗');
    console.log('║   NovaSphere Dummy Script Loaded  🚀     ║');
    console.log('╚══════════════════════════════════════════╝');

    console.log('\n📊 Analytics Report:', DummyAnalytics.generateReport());
    console.log('\n💬 Random Testimonial:', getRandomTestimonial());
    console.log('\n🔔 Live Activity:', generateActivity());
    console.log('\n📈 Product Stats:', DummyProductStats);
};

init();
