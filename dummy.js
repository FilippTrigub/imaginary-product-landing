/**
 * NovaSphere Dummy Script
 * Simulates visitor stats, notifications, testimonials, and a typing effect.
 */
(function () {
    'use strict';

    // --- Dummy Visitor Counter ---
    const visitorStats = {
        totalVisitors: 184720,
        activeUsers: 1342,
        countriesReached: 87,
        increment: function () {
            this.totalVisitors += Math.floor(Math.random() * 5) + 1;
            this.activeUsers += Math.floor(Math.random() * 3) - 1;
            return {
                totalVisitors: this.totalVisitors,
                activeUsers: Math.max(0, this.activeUsers),
                countriesReached: this.countriesReached
            };
        }
    };

    // --- Dummy Notification System ---
    const notifications = [
        '🚀 NovaSphere v2.1 beta is now available for early access!',
        '🔬 New holographic rendering engine reduces latency by 40%.',
        '🏆 NovaSphere wins "Best Innovation" at TechCrunch Disrupt 2026.',
        '📡 Quantum mesh networking now supports 10,000+ concurrent nodes.',
        '🎨 Custom holographic themes are live — personalize your workspace!',
        '🛡️ Security patch 2.0.4 deployed — all systems nominal.',
        '📊 Over 500,000 developers have joined the NovaSphere ecosystem.'
    ];

    function getRandomNotification() {
        return notifications[Math.floor(Math.random() * notifications.length)];
    }

    // --- Dummy Testimonial Generator ---
    const firstNames = ['Alex', 'Jordan', 'Taylor', 'Morgan', 'Casey', 'Riley', 'Quinn', 'Avery'];
    const lastNames = ['Nakamura', 'Okonkwo', 'Petrov', 'Johansson', 'Reyes', 'Kim', 'Müller', 'Singh'];
    const companies = ['Helix Labs', 'Quantum Dynamics', 'Aether Corp', 'Pinnacle AI', 'Stratos Inc.', 'Nebula Works'];
    const quotes = [
        'NovaSphere completely transformed how our team collaborates remotely.',
        'The holographic interface feels like something out of science fiction — except it actually works.',
        'We cut our prototyping time in half after switching to NovaSphere.',
        'I never thought personal computing could feel this intuitive.',
        'The quantum mesh networking alone is worth the upgrade.',
        'Our designers can finally visualize 3D models without clunky headsets.'
    ];

    function generateTestimonial() {
        return {
            name: firstNames[Math.floor(Math.random() * firstNames.length)] + ' ' +
                  lastNames[Math.floor(Math.random() * lastNames.length)],
            company: companies[Math.floor(Math.random() * companies.length)],
            quote: quotes[Math.floor(Math.random() * quotes.length)],
            rating: (4 + Math.random()).toFixed(1)
        };
    }

    // --- Typing Effect (console) ---
    const taglines = [
        'The Future of Personal Computing.',
        'Holographic Interfaces. Redefined.',
        'Beyond Screens. Beyond Limits.'
    ];

    function typeOut(text, callback) {
        let i = 0;
        const chars = [];
        const interval = setInterval(function () {
            chars.push(text[i]);
            process.stdout.write('\r' + chars.join(''));
            i++;
            if (i >= text.length) {
                clearInterval(interval);
                process.stdout.write('\n');
                if (callback) callback();
            }
        }, 50);
    }

    // --- Run Everything ---
    console.log('═══════════════════════════════════════');
    console.log('       NovaSphere Dummy Script');
    console.log('═══════════════════════════════════════\n');

    // Visitor stats
    console.log('📈 Visitor Stats:');
    for (let i = 0; i < 3; i++) {
        const stats = visitorStats.increment();
        console.log('   Tick ' + (i + 1) + ': ' + stats.totalVisitors.toLocaleString() +
            ' visitors | ' + stats.activeUsers + ' active | ' +
            stats.countriesReached + ' countries');
    }

    // Notifications
    console.log('\n🔔 Latest Notifications:');
    for (let i = 0; i < 3; i++) {
        console.log('   ' + getRandomNotification());
    }

    // Testimonials
    console.log('\n💬 Random Testimonials:');
    for (let i = 0; i < 3; i++) {
        const t = generateTestimonial();
        console.log('   ★ ' + t.rating + ' — "' + t.quote + '"');
        console.log('     — ' + t.name + ', ' + t.company + '\n');
    }

    // Typing effect
    console.log('⌨️  Typing Effect Demo:');
    let idx = 0;
    function nextTagline() {
        if (idx < taglines.length) {
            typeOut('   ' + taglines[idx], function () {
                idx++;
                nextTagline();
            });
        } else {
            console.log('\n═══════════════════════════════════════');
            console.log('  Done. NovaSphere dummy script complete.');
            console.log('═══════════════════════════════════════');
        }
    }
    nextTagline();
})();
