/**
 * NovaSphere v2 — Dummy Utility Script
 * Simulates analytics, notifications, and generates placeholder data.
 */
(function () {
    'use strict';

    // ── Console Banner ───────────────────────────────────────────────
    console.log(
        '%c ✦ NovaSphere v2 — Dummy Script Loaded ',
        'background: linear-gradient(135deg,#6e8efb,#a777e3);color:#fff;padding:6px 12px;border-radius:4px;font-weight:700;'
    );

    // ── Dummy Data: Fake Testimonials ────────────────────────────────
    const testimonials = [
        { name: 'Alice Nakamura', role: 'UX Designer', text: 'NovaSphere changed the way I prototype interfaces — holographic previews are a game-changer!' },
        { name: 'Raj Mehta', role: 'Software Engineer', text: 'The neural-link keyboard alone is worth the upgrade. Typing feels like thinking.' },
        { name: 'Lena Johansson', role: 'Data Scientist', text: 'Running 3-D data visualisations in mid-air has made my presentations unforgettable.' },
        { name: 'Carlos Gutierrez', role: 'Product Manager', text: 'Our team collaboration improved overnight once we switched to NovaSphere workspaces.' },
        { name: 'Fatima Al-Rashid', role: 'Architect', text: 'Being able to walk through my building designs in real-time holograms is incredible.' }
    ];

    // ── Dummy Analytics Generator ────────────────────────────────────
    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function generateSessionStats() {
        return {
            visitors: randomInt(800, 5000),
            pageViews: randomInt(2000, 15000),
            avgSessionDuration: (Math.random() * 8 + 1).toFixed(1) + ' min',
            bounceRate: (Math.random() * 40 + 20).toFixed(1) + '%',
            topReferrer: ['Google', 'Twitter', 'LinkedIn', 'Direct', 'Hacker News'][randomInt(0, 4)],
            timestamp: new Date().toISOString()
        };
    }

    var stats = generateSessionStats();
    console.table(stats);

    // ── Toast Notification System ────────────────────────────────────
    function createToastContainer() {
        var container = document.getElementById('dummy-toast-container');
        if (container) return container;

        container = document.createElement('div');
        container.id = 'dummy-toast-container';
        container.style.cssText =
            'position:fixed;bottom:20px;right:20px;z-index:9999;display:flex;flex-direction:column;gap:10px;pointer-events:none;';
        document.body.appendChild(container);
        return container;
    }

    function showToast(message, duration) {
        duration = duration || 4000;
        var container = createToastContainer();

        var toast = document.createElement('div');
        toast.textContent = message;
        toast.style.cssText =
            'background:linear-gradient(135deg,#6e8efb,#a777e3);color:#fff;padding:12px 20px;border-radius:8px;' +
            'font-family:Montserrat,sans-serif;font-size:0.9rem;box-shadow:0 4px 15px rgba(110,142,251,0.4);' +
            'opacity:0;transform:translateY(20px);transition:all 0.4s ease;pointer-events:auto;max-width:320px;';

        container.appendChild(toast);

        // Trigger entrance animation
        requestAnimationFrame(function () {
            toast.style.opacity = '1';
            toast.style.transform = 'translateY(0)';
        });

        // Auto-dismiss
        setTimeout(function () {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(20px)';
            setTimeout(function () {
                if (toast.parentNode) toast.parentNode.removeChild(toast);
            }, 400);
        }, duration);
    }

    // ── Simulated Activity ───────────────────────────────────────────
    var activityMessages = [
        '🚀 New user just signed up from Tokyo!',
        '📦 NovaSphere Pro plan purchased moments ago.',
        '🌍 12 users are viewing this page right now.',
        '⭐ NovaSphere rated 4.9/5 by 2,340 users.',
        '🔬 New holographic SDK update available!'
    ];

    // Show a random toast every 8–15 seconds
    function scheduleNextToast() {
        var delay = randomInt(8000, 15000);
        setTimeout(function () {
            var msg = activityMessages[randomInt(0, activityMessages.length - 1)];
            showToast(msg);
            scheduleNextToast();
        }, delay);
    }

    // Kick off after a short initial delay so the page settles first
    if (typeof document !== 'undefined') {
        document.addEventListener('DOMContentLoaded', function () {
            // Show an initial welcome toast
            setTimeout(function () {
                showToast('👋 Welcome to NovaSphere — the future of computing!');
            }, 2000);

            scheduleNextToast();
        });
    }

    // ── Expose helpers for console experimentation ───────────────────
    window.NovaDummy = {
        testimonials: testimonials,
        generateStats: generateSessionStats,
        showToast: showToast
    };

    console.log('ℹ️  Try: NovaDummy.generateStats() or NovaDummy.showToast("Hello!")');
})();
