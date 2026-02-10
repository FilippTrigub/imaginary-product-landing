/**
 * NovaSphere v2 — Dummy Utility Script
 * Simulated analytics, notifications, testimonials, and visitor tracking.
 */
(() => {
    'use strict';

    // ── Console Welcome Banner ──────────────────────────────────────────
    const printBanner = () => {
        console.log(
            '%c ✦ NovaSphere v2 — The Future of Personal Computing ✦ ',
            'background: linear-gradient(135deg, #6e8efb, #a777e3); color: #fff; font-size: 14px; padding: 8px 16px; border-radius: 4px;'
        );
        console.log(
            '%cHolographic Interface Engine loaded. All systems nominal.',
            'color: #6e8efb; font-style: italic;'
        );
    };

    // ── Fake Visitor Counter ────────────────────────────────────────────
    const simulateVisitorCount = () => {
        const baseCount = 48_312;
        const jitter = Math.floor(Math.random() * 500);
        const total = baseCount + jitter;
        console.log(`[NovaSphere Analytics] Active visitors: ${total.toLocaleString()}`);
        return total;
    };

    // ── Dummy Notification System ───────────────────────────────────────
    const notifications = [
        { type: 'info',    message: 'Holographic calibration complete.' },
        { type: 'success', message: 'Neural sync established — latency 0.3 ms.' },
        { type: 'warning', message: 'Ambient light too high for optimal projection.' },
        { type: 'info',    message: 'Firmware update v2.4.1 available.' },
        { type: 'success', message: 'Gesture library loaded (142 patterns).' },
        { type: 'info',    message: 'Cloud workspace synced — 12 files updated.' },
        { type: 'warning', message: 'Battery at 18 %. Connect to power source.' },
        { type: 'success', message: 'Voice assistant "Nova" is online.' },
    ];

    const getRandomNotification = () => {
        const index = Math.floor(Math.random() * notifications.length);
        return notifications[index];
    };

    const cycleNotifications = (count = 3) => {
        const picked = [];
        for (let i = 0; i < count; i++) {
            picked.push(getRandomNotification());
        }
        picked.forEach((n, i) => {
            const prefix = n.type === 'success' ? '✔' : n.type === 'warning' ? '⚠' : 'ℹ';
            console.log(`[Notification ${i + 1}] ${prefix}  ${n.message}`);
        });
        return picked;
    };

    // ── Random Testimonial Generator ────────────────────────────────────
    const firstNames = ['Lena', 'Raj', 'Tomoko', 'Carlos', 'Fatima', 'Erik', 'Mei', 'Dmitri'];
    const lastNames  = ['Park', 'Okafor', 'Johansson', 'Gupta', 'Moreau', 'Silva', 'Tanaka', 'Novak'];
    const roles      = ['UX Designer', 'Data Scientist', 'Architect', 'Educator', 'Game Developer', 'Surgeon', 'Filmmaker', 'Engineer'];

    const quotes = [
        'NovaSphere changed the way I interact with data — it feels like magic.',
        'The holographic workspace doubled my productivity overnight.',
        'I can finally design in true 3-D without clunky headsets.',
        'My students are more engaged than ever thanks to immersive lessons.',
        'Surgical planning in holographic space has been a game-changer.',
        'Rendering scenes in mid-air beats any monitor setup I have used.',
        'Collaboration across continents feels like being in the same room.',
        'The gesture controls are so intuitive my five-year-old figured them out.',
    ];

    const generateTestimonial = () => {
        const first = firstNames[Math.floor(Math.random() * firstNames.length)];
        const last  = lastNames[Math.floor(Math.random() * lastNames.length)];
        const role  = roles[Math.floor(Math.random() * roles.length)];
        const quote = quotes[Math.floor(Math.random() * quotes.length)];
        const stars = Math.random() < 0.7 ? 5 : 4;

        return { name: `${first} ${last}`, role, quote, stars };
    };

    const generateTestimonials = (count = 4) => {
        const list = [];
        for (let i = 0; i < count; i++) {
            list.push(generateTestimonial());
        }
        return list;
    };

    // ── Simulated Analytics Logger ──────────────────────────────────────
    const eventTypes = [
        'page_view', 'cta_click', 'feature_hover', 'pricing_toggle',
        'scroll_depth_50', 'scroll_depth_100', 'video_play', 'form_focus',
    ];

    const logAnalyticsEvent = () => {
        const event = eventTypes[Math.floor(Math.random() * eventTypes.length)];
        const timestamp = new Date().toISOString();
        const sessionId = Math.random().toString(36).substring(2, 10);
        const entry = { event, timestamp, sessionId };
        console.log('[Analytics]', JSON.stringify(entry));
        return entry;
    };

    const runAnalyticsBurst = (count = 5) => {
        const events = [];
        for (let i = 0; i < count; i++) {
            events.push(logAnalyticsEvent());
        }
        return events;
    };

    // ── Dummy Product Specs ─────────────────────────────────────────────
    const productSpecs = {
        model: 'NovaSphere X1',
        display: 'Holographic 180° arc, 8K per eye',
        processor: 'QuantumCore Q9 — 256 qubit hybrid',
        memory: '512 GB unified photonic RAM',
        storage: '16 TB crystal lattice SSD',
        connectivity: 'Wi-Fi 8, Bluetooth 6.0, NeuraLink 2.0',
        battery: '72 hours continuous use',
        weight: '320 g',
        os: 'NovaOS 4.2 (Orion)',
    };

    const getProductSpecs = () => {
        console.table(productSpecs);
        return productSpecs;
    };

    // ── Run Everything ──────────────────────────────────────────────────
    printBanner();
    simulateVisitorCount();
    cycleNotifications();

    const testimonials = generateTestimonials();
    console.log('[Testimonials]', testimonials);

    runAnalyticsBurst();
    getProductSpecs();

    console.log('%c✦ Dummy script finished. All simulations complete.', 'color: #a777e3; font-weight: bold;');
})();
