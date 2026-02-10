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
        { type: 'success', message: 'Spatial audio environment loaded: Deep Focus.' }
    ];

    const getRandomNotification = () => {
        const n = notifications[Math.floor(Math.random() * notifications.length)];
        return { ...n, timestamp: new Date().toISOString() };
    };

    let notificationInterval = null;

    const startNotifications = (intervalMs = 5000) => {
        if (notificationInterval) return;
        notificationInterval = setInterval(() => {
            const n = getRandomNotification();
            const prefix = n.type === 'success' ? '✓' : n.type === 'warning' ? '⚠' : 'ℹ';
            console.log(`[${prefix}] ${n.message}  (${n.timestamp})`);
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
    const firstNames = ['Alex', 'Jordan', 'Taylor', 'Morgan', 'Casey', 'Riley', 'Quinn', 'Avery'];
    const lastNames  = ['Nakamura', 'Okonkwo', 'Petrov', 'Johansson', 'Reyes', 'Kim', 'Müller', 'Singh'];
    const roles      = ['UX Designer', 'Software Engineer', 'Data Scientist', 'Product Manager', 'Researcher', 'Architect'];

    const testimonialTemplates = [
        'NovaSphere completely transformed how I {verb}. The holographic workspace is {adjective}.',
        'I never thought {verb} could feel so {adjective}. NovaSphere is the real deal.',
        'After switching to NovaSphere, my team\'s productivity when {verb} increased by {percent}%.',
        'The {adjective} interface makes {verb} feel effortless. Highly recommended!',
        'NovaSphere\'s neural sync is {adjective}. I can\'t imagine {verb} without it now.'
    ];

    const verbs      = ['collaborate', 'design prototypes', 'analyze data', 'manage projects', 'write code', 'brainstorm'];
    const adjectives = ['incredible', 'mind-blowing', 'seamless', 'revolutionary', 'intuitive', 'blazing fast'];

    const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

    const generateTestimonial = () => {
        const name = `${pick(firstNames)} ${pick(lastNames)}`;
        const role = pick(roles);
        const text = pick(testimonialTemplates)
            .replace('{verb}', pick(verbs))
            .replace('{adjective}', pick(adjectives))
            .replace('{percent}', String(Math.floor(Math.random() * 60) + 20));

        return { name, role, text, rating: Math.floor(Math.random() * 2) + 4 };
    };

    const generateTestimonials = (count = 5) => {
        return Array.from({ length: count }, generateTestimonial);
    };

    // ── Simulated System Stats ──────────────────────────────────────
    const generateSystemStats = () => {
        const rand = (min, max) => +(Math.random() * (max - min) + min).toFixed(1);
        return {
            holoCore: {
                fps: Math.floor(rand(58, 120)),
                resolution: '7680×4320',
                projectionDepth: `${rand(1.2, 3.8)}m`
            },
            neuralLink: {
                latency: `${rand(0.1, 1.5)}ms`,
                signalStrength: `${rand(92, 99.9)}%`,
                activeChannels: Math.floor(rand(4, 16))
            },
            system: {
                cpuUsage: `${rand(8, 65)}%`,
                memoryUsed: `${rand(3.2, 12.8)} GB`,
                uptime: `${Math.floor(rand(1, 720))}h ${Math.floor(rand(0, 59))}m`,
                temperature: `${rand(32, 58)}°C`
            },
            timestamp: new Date().toISOString()
        };
    };

    // ── Dummy Data Seeder (populates DOM if containers exist) ───────
    const seedTestimonialsToDOM = () => {
        const container = document.querySelector('.testimonials-grid, .testimonial-grid, #testimonials');
        if (!container) return;

        const testimonials = generateTestimonials(4);
        testimonials.forEach(t => {
            const card = document.createElement('div');
            card.className = 'testimonial-card';
            card.style.cssText = 'background:#fff;padding:24px;border-radius:10px;box-shadow:0 5px 15px rgba(0,0,0,0.05);';
            card.innerHTML = `
                <p style="color:#555;margin-bottom:12px;font-style:italic;">"${t.text}"</p>
                <strong style="color:#333;">${t.name}</strong>
                <span style="color:#888;font-size:0.9em;display:block;">${t.role} · ${'★'.repeat(t.rating)}${'☆'.repeat(5 - t.rating)}</span>
            `;
            container.appendChild(card);
        });

        console.log(`[NovaSphere] Seeded ${testimonials.length} dummy testimonials`);
    };

    // ── Initialize ──────────────────────────────────────────────────
    const init = () => {
        printBanner();
        visitorCounter.increment();
        seedTestimonialsToDOM();

        console.log('[NovaSphere] System stats:', generateSystemStats());
        console.log('[NovaSphere] Dummy script loaded. Available via window.NovaDummy');
    };

    // Expose public API for console experimentation
    window.NovaDummy = {
        visitorCounter,
        getRandomNotification,
        startNotifications,
        stopNotifications,
        generateTestimonial,
        generateTestimonials,
        generateSystemStats,
        printBanner
    };

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
