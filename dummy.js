/**
 * NovaSphere Dummy Script
 * Simulates site analytics, generates placeholder content,
 * and provides utility helpers for development/testing.
 */
(function () {
    'use strict';

    // ── Helpers ──────────────────────────────────────────────────────────

    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function pick(arr) {
        return arr[randomInt(0, arr.length - 1)];
    }

    function formatNumber(n) {
        return n.toLocaleString('en-US');
    }

    // ── Dummy Analytics ─────────────────────────────────────────────────

    function generateSessionId() {
        return 'ns-' + Date.now().toString(36) + '-' + randomInt(1000, 9999);
    }

    function generateAnalytics() {
        var pages = ['/', '/features', '/pricing', '/about', '/team', '/contact'];
        var referrers = ['google.com', 'twitter.com', 'linkedin.com', 'direct', 'producthunt.com'];
        var devices = ['Desktop', 'Mobile', 'Tablet'];

        return {
            sessionId: generateSessionId(),
            visitors: randomInt(800, 5000),
            pageViews: randomInt(3000, 15000),
            bounceRate: (Math.random() * 40 + 20).toFixed(1) + '%',
            avgSessionDuration: randomInt(45, 300) + 's',
            topPage: pick(pages),
            topReferrer: pick(referrers),
            deviceBreakdown: {
                desktop: randomInt(50, 70) + '%',
                mobile: randomInt(20, 40) + '%',
                tablet: randomInt(3, 10) + '%'
            },
            currentDevice: pick(devices),
            timestamp: new Date().toISOString()
        };
    }

    // ── Dummy Testimonials ──────────────────────────────────────────────

    var testimonials = [
        { name: 'Alex Rivera', role: 'Software Engineer', text: 'NovaSphere completely changed how I interact with my workspace. The holographic display is unreal.' },
        { name: 'Priya Sharma', role: 'UX Designer', text: 'The gesture controls feel so natural — it\'s like the interface reads my mind.' },
        { name: 'Jordan Lee', role: 'Data Scientist', text: 'Processing complex datasets in 3D space has boosted my productivity tenfold.' },
        { name: 'Maria Gonzalez', role: 'Architect', text: 'Being able to walk around my 3D models in real-time is a game changer for client presentations.' },
        { name: 'Tomás Eriksson', role: 'Student', text: 'Studying with NovaSphere feels like stepping into the future. I can\'t go back to flat screens.' },
        { name: 'Chloe Nakamura', role: 'Product Manager', text: 'Our team collaboration improved overnight once we started using NovaSphere\'s shared holographic workspace.' }
    ];

    function getRandomTestimonial() {
        return pick(testimonials);
    }

    function getAllTestimonials() {
        return testimonials.slice();
    }

    // ── Dummy Notification Feed ─────────────────────────────────────────

    var notificationTemplates = [
        '{name} just signed up for the {plan} plan!',
        '{name} from {city} started a free trial.',
        '{name} upgraded to {plan} — welcome aboard!',
        '{name} left a 5-star review.',
        'New feature request from {name}: holographic dark mode.'
    ];

    var dummyNames = ['Liam', 'Olivia', 'Noah', 'Emma', 'Ethan', 'Ava', 'Lucas', 'Mia'];
    var dummyCities = ['San Francisco', 'Tokyo', 'Berlin', 'London', 'Sydney', 'Toronto'];
    var plans = ['Starter', 'Professional', 'Enterprise'];

    function generateNotification() {
        var template = pick(notificationTemplates);
        return template
            .replace('{name}', pick(dummyNames))
            .replace('{city}', pick(dummyCities))
            .replace('{plan}', pick(plans));
    }

    // ── Typing Effect Utility ───────────────────────────────────────────

    function typeText(element, text, speed, callback) {
        var i = 0;
        speed = speed || 60;

        function step() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(step, speed);
            } else if (typeof callback === 'function') {
                callback();
            }
        }

        element.textContent = '';
        step();
    }

    // ── Console Dashboard ───────────────────────────────────────────────

    function printDashboard() {
        var stats = generateAnalytics();

        console.log('%c╔══════════════════════════════════════════╗', 'color:#6e8efb');
        console.log('%c║      NovaSphere Dummy Analytics          ║', 'color:#6e8efb;font-weight:bold');
        console.log('%c╚══════════════════════════════════════════╝', 'color:#6e8efb');
        console.log('  Session ID       : ' + stats.sessionId);
        console.log('  Visitors (today) : ' + formatNumber(stats.visitors));
        console.log('  Page Views       : ' + formatNumber(stats.pageViews));
        console.log('  Bounce Rate      : ' + stats.bounceRate);
        console.log('  Avg Duration     : ' + stats.avgSessionDuration);
        console.log('  Top Page         : ' + stats.topPage);
        console.log('  Top Referrer     : ' + stats.topReferrer);
        console.log('  Device           : ' + stats.currentDevice);
        console.log('  Timestamp        : ' + stats.timestamp);
        console.log('');

        var t = getRandomTestimonial();
        console.log('%c  💬 "' + t.text + '"', 'color:#a777e3;font-style:italic');
        console.log('     — ' + t.name + ', ' + t.role);
        console.log('');
        console.log('  🔔 ' + generateNotification());
    }

    printDashboard();

    // ── Public API ──────────────────────────────────────────────────────

    var api = {
        generateAnalytics: generateAnalytics,
        getRandomTestimonial: getRandomTestimonial,
        getAllTestimonials: getAllTestimonials,
        generateNotification: generateNotification,
        typeText: typeText,
        printDashboard: printDashboard
    };

    if (typeof window !== 'undefined') {
        window.NovaSphere = window.NovaSphere || {};
        window.NovaSphere.Dummy = api;
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = api;
    }
})();
