/**
 * NovaSphere v2 — Dummy Utility Script
 * Simulated analytics, notifications, testimonials, and system stats
 * for demonstration and prototyping purposes.
 */
(() => {
    'use strict';

    // ── Console Welcome Banner ──────────────────────────────────────
    const printBanner = () => {
        console.log(
            '%c ★ NovaSphere v2 — Holographic Interface Engine ★ ',
            'background: linear-gradient(135deg, #6e8efb, #a777e3); color: white; font-size: 14px; padding: 8px 16px; border-radius: 4px;'
        );
        console.log(
            '%cSystem initialized  •  Holographic core online  •  Neural link standby',
            'color: #6e8efb; font-style: italic;'
        );
    };

    // ── Fake Visitor Counter ────────────────────────────────────────
    const visitorCounter = {
        _key: 'novasphere_visitors',

        get count() {
            return parseInt(localStorage.getItem(this._key) || '0', 10);
        },

        increment() {
            const next = this.count + Math.floor(Math.random() * 3) + 1;
            localStorage.setItem(this._key, String(next));
            console.log(`[NovaSphere] Visitor count: ${next}`);
            return next;
        },

        reset() {
            localStorage.removeItem(this._key);
            console.log('[NovaSphere] Visitor counter reset');
        }
    };

    // ── Dummy Notification System ───────────────────────────────────
    const notifications = [
        { type: 'info',    message: 'Holographic display calibration complete.' },
        { type: 'success', message: 'Neural interface sync successful — latency 0.3 ms.' },
        { type: 'warning', message: 'Ambient light too high — adjusting projection intensity.' },
        { type: 'info',    message: 'New gesture pack "Quantum Swipe" available for download.' },
        { type: 'success', message: 'Cloud workspace snapshot saved.' },
        { type: 'warning', message: 'Battery optimization mode activated.' },
        { type: 'info',    message: 'Firmware v2.4.1 ready to install.' },
        { type: 'success', message: 'Voice command module loaded — say "Hey Nova" to begin.' }
    ];

    const getRandomNotification = () => {
        const note = notifications[Math.floor(Math.random() * notifications.length)];
        return { ...note, timestamp: new Date().toISOString() };
    };

    let notificationInterval = null;

    const startNotifications = (intervalMs = 5000) => {
        if (notificationInterval) return;
        notificationInterval = setInterval(() => {
            const n = getRandomNotification();
            console.log(`[${n.type.toUpperCase()}] ${n.message}  (${n.timestamp})`);
        }, intervalMs);
        console.log(`[NovaSphere] Notification stream started (every ${intervalMs}ms)`);
    };

    const stopNotifications = () => {
        if (notificationInterval) {
            clearInterval(notificationInterval);
            notificationInterval = null;
            console.log('[NovaSphere] Notification stream stopped');
        }
    };

    // ── Random Testimonial Generator ────────────────────────────────
    const firstNames = ['Lena', 'Raj', 'Tomoko', 'Carlos', 'Anya', 'Kwame', 'Ingrid', 'Dmitri'];
    const lastNames  = ['Park', 'Okafor', 'Müller', 'Santos', 'Johansson', 'Nakamura', 'Ali', 'Chen'];
    const roles      = ['UX Designer', 'Data Scientist', 'Architect', 'Educator', 'Game Developer', 'Surgeon', 'Musician', 'Engineer'];

    const testimonials = [
        'NovaSphere completely changed how I interact with my workspace.',
        'The holographic display is unbelievably crisp — it feels like the future.',
        'I replaced three monitors with a single NovaSphere unit. No regrets.',
        'Gesture controls felt natural within minutes. Incredible onboarding.',
        'My productivity doubled after switching to the holographic workflow.',
        'The neural-link feature is science fiction made real.',
        'Best tech purchase I have made in the last decade, hands down.',
        'Customer support is stellar — they walked me through every feature.'
    ];

    const generateTestimonial = () => {
        const first = firstNames[Math.floor(Math.random() * firstNames.length)];
        const last  = lastNames[Math.floor(Math.random() * lastNames.length)];
        const role  = roles[Math.floor(Math.random() * roles.length)];
        const text  = testimonials[Math.floor(Math.random() * testimonials.length)];
        const stars = Math.floor(Math.random() * 2) + 4; // 4 or 5 stars

        return {
            author: `${first} ${last}`,
            role,
            rating: '★'.repeat(stars) + '☆'.repeat(5 - stars),
            text
        };
    };

    const printTestimonials = (count = 3) => {
        console.group('[NovaSphere] Customer Testimonials');
        for (let i = 0; i < count; i++) {
            const t = generateTestimonial();
            console.log(`${t.rating}  "${t.text}"\n   — ${t.author}, ${t.role}\n`);
        }
        console.groupEnd();
    };

    // ── Simulated System Stats ──────────────────────────────────────
    const randomBetween = (min, max) => (Math.random() * (max - min) + min).toFixed(1);

    const getSystemStats = () => ({
        holoResolution:   '7680 × 4320 (8K UHD)',
        projectionFps:    `${randomBetween(58, 60)} fps`,
        neuralLatency:    `${randomBetween(0.1, 0.9)} ms`,
        gestureAccuracy:  `${randomBetween(97, 99.9)}%`,
        cpuUsage:         `${randomBetween(12, 45)}%`,
        memoryUsed:       `${randomBetween(4.2, 12.8)} GB / 32 GB`,
        batteryRemaining: `${Math.floor(Math.random() * 60) + 40}%`,
        uptime:           `${Math.floor(Math.random() * 72)}h ${Math.floor(Math.random() * 60)}m`
    });

    const printSystemStats = () => {
        const stats = getSystemStats();
        console.group('[NovaSphere] System Diagnostics');
        Object.entries(stats).forEach(([key, value]) => {
            const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase());
            console.log(`${label}: ${value}`);
        });
        console.groupEnd();
    };

    // ── Expose public API on window (for console experimentation) ───
    window.NovaDummy = {
        visitorCounter,
        getRandomNotification,
        startNotifications,
        stopNotifications,
        generateTestimonial,
        printTestimonials,
        getSystemStats,
        printSystemStats
    };

    // ── Auto-run on load ────────────────────────────────────────────
    printBanner();
    visitorCounter.increment();
    printSystemStats();
    printTestimonials(3);
})();
