/**
 * NovaSphere Dummy Script
 * Simulates visitor stats, notifications, testimonials, and a typing effect.
 */
(function () {
    'use strict';

    // ── Fake Visitor Counter ────────────────────────────────────────────
    const visitorCounter = {
        base: 148203,
        generate: function () {
            const today = new Date();
            const dayOffset = today.getDate() * 137 + today.getMonth() * 1021;
            return this.base + dayOffset;
        },
        dailyActive: function () {
            return Math.floor(Math.random() * 800) + 1200;
        }
    };

    // ── Dummy Notification Queue ────────────────────────────────────────
    const notifications = [
        { type: 'info',    message: 'NovaSphere v2.4 firmware update available.' },
        { type: 'success', message: 'Holographic calibration complete.' },
        { type: 'warning', message: 'Neural-link latency above 12 ms — optimizing.' },
        { type: 'info',    message: 'New gesture pack "Cosmos" ready to install.' },
        { type: 'success', message: 'Cloud sync finished — 2.4 GB uploaded.' },
        { type: 'warning', message: 'Ambient light sensor recalibrating.' }
    ];

    function getRandomNotification() {
        return notifications[Math.floor(Math.random() * notifications.length)];
    }

    // ── Random Testimonial Generator ────────────────────────────────────
    const firstNames = ['Alex', 'Jordan', 'Taylor', 'Morgan', 'Casey', 'Riley', 'Quinn', 'Avery'];
    const lastNames  = ['Nakamura', 'Osei', 'Lindgren', 'Petrov', 'Reyes', 'Kim', 'Dubois', 'Sharma'];
    const quotes = [
        'NovaSphere completely changed how I interact with my workspace.',
        'The holographic display is unlike anything I have ever used.',
        'Setup took five minutes and the AI assistant is incredibly intuitive.',
        'I replaced three monitors with a single NovaSphere unit.',
        'Battery life is outstanding — easily lasts a full workday.',
        'Customer support walked me through every feature on day one.'
    ];

    function generateTestimonial() {
        var first = firstNames[Math.floor(Math.random() * firstNames.length)];
        var last  = lastNames[Math.floor(Math.random() * lastNames.length)];
        var quote = quotes[Math.floor(Math.random() * quotes.length)];
        var stars = Math.floor(Math.random() * 2) + 4; // 4 or 5 stars
        return { name: first + ' ' + last, rating: stars, text: quote };
    }

    // ── Console Typing Effect ───────────────────────────────────────────
    const taglines = [
        'The Future of Personal Computing.',
        'Holographic. Intelligent. Yours.',
        'See beyond the screen.'
    ];

    function typeOut(text, delay) {
        var output = '';
        for (var i = 0; i < text.length; i++) {
            (function (char, idx) {
                setTimeout(function () {
                    output += char;
                    process.stdout.write(char);
                    if (idx === text.length - 1) {
                        process.stdout.write('\n');
                    }
                }, idx * delay);
            })(text[i], i);
        }
    }

    // ── Run ─────────────────────────────────────────────────────────────
    console.log('═══════════════════════════════════════');
    console.log('       NovaSphere Dummy Script');
    console.log('═══════════════════════════════════════\n');

    // Stats
    console.log('[Stats]');
    console.log('  Total visitors : ' + visitorCounter.generate().toLocaleString());
    console.log('  Active today   : ' + visitorCounter.dailyActive().toLocaleString());
    console.log('');

    // Notifications
    console.log('[Notifications]');
    for (var n = 0; n < 3; n++) {
        var notif = getRandomNotification();
        console.log('  [' + notif.type.toUpperCase() + '] ' + notif.message);
    }
    console.log('');

    // Testimonials
    console.log('[Testimonials]');
    for (var t = 0; t < 3; t++) {
        var review = generateTestimonial();
        console.log('  ' + '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating) + '  ' + review.name);
        console.log('  "' + review.text + '"\n');
    }

    // Typing effect
    console.log('[Tagline]');
    var chosen = taglines[Math.floor(Math.random() * taglines.length)];
    typeOut('  > ' + chosen, 40);
})();
