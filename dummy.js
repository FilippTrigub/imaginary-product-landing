/**
 * NovaSphere Analytics — Dummy Data Simulator
 *
 * Generates fake telemetry and session metrics for the NovaSphere
 * holographic computing platform.  Run standalone with Node.js or
 * include in the browser via a <script> tag.
 */

(() => {
    'use strict';

    // ── Seed helpers ────────────────────────────────────────────────
    const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const pick = (arr) => arr[randomInt(0, arr.length - 1)];

    // ── Reference data ──────────────────────────────────────────────
    const DEVICES = ['HoloLens Pro', 'NovaSphere Cube', 'QuantumPad Mini', 'NeuroLink Visor', 'ArcDisplay 360'];
    const PAGES = ['/', '/features', '/pricing', '/about', '/team', '/contact', '/docs', '/blog'];
    const REGIONS = ['North America', 'Europe', 'Asia-Pacific', 'South America', 'Africa'];
    const BROWSERS = ['NovaNav 4.2', 'HoloBrowse 1.8', 'QuantumFox 12', 'ArcSurf 3.0', 'Chrome 130'];
    const FEATURES_CLICKED = [
        'Holographic Workspace',
        'Neural Interface',
        'Quantum Processing',
        'Gesture Control',
        'Voice Commands',
        'Spatial Audio',
        'AI Assistant',
        'Cloud Sync'
    ];
    const STATUS_CODES = [200, 200, 200, 200, 200, 301, 304, 404, 500];

    // ── Generators ──────────────────────────────────────────────────

    /** Generate a single fake user session. */
    const generateSession = (id) => ({
        sessionId: `NS-${Date.now()}-${String(id).padStart(4, '0')}`,
        userId: `user_${randomInt(1000, 9999)}`,
        device: pick(DEVICES),
        browser: pick(BROWSERS),
        region: pick(REGIONS),
        pagesVisited: Array.from({ length: randomInt(1, 6) }, () => pick(PAGES)),
        featuresClicked: Array.from({ length: randomInt(0, 4) }, () => pick(FEATURES_CLICKED)),
        durationSeconds: randomInt(5, 1200),
        timestamp: new Date(Date.now() - randomInt(0, 86400000)).toISOString()
    });

    /** Generate a batch of sessions. */
    const generateSessions = (count = 10) =>
        Array.from({ length: count }, (_, i) => generateSession(i + 1));

    /** Aggregate high-level metrics from a session batch. */
    const aggregateMetrics = (sessions) => {
        const totalPageViews = sessions.reduce((sum, s) => sum + s.pagesVisited.length, 0);
        const avgDuration = Math.round(sessions.reduce((sum, s) => sum + s.durationSeconds, 0) / sessions.length);

        const deviceCounts = {};
        sessions.forEach((s) => {
            deviceCounts[s.device] = (deviceCounts[s.device] || 0) + 1;
        });

        const regionCounts = {};
        sessions.forEach((s) => {
            regionCounts[s.region] = (regionCounts[s.region] || 0) + 1;
        });

        const featurePopularity = {};
        sessions.forEach((s) => {
            s.featuresClicked.forEach((f) => {
                featurePopularity[f] = (featurePopularity[f] || 0) + 1;
            });
        });

        return {
            totalSessions: sessions.length,
            totalPageViews,
            avgSessionDuration: `${avgDuration}s`,
            deviceBreakdown: deviceCounts,
            regionBreakdown: regionCounts,
            featurePopularity
        };
    };

    /** Simulate a stream of server request logs. */
    const generateRequestLogs = (count = 8) =>
        Array.from({ length: count }, () => ({
            method: pick(['GET', 'GET', 'GET', 'POST', 'PUT']),
            path: pick(PAGES),
            status: pick(STATUS_CODES),
            responseTime: `${randomInt(12, 480)}ms`,
            timestamp: new Date(Date.now() - randomInt(0, 3600000)).toISOString()
        }));

    // ── Output ──────────────────────────────────────────────────────
    const LINE = '═'.repeat(58);

    const printBanner = () => {
        console.log(`\n╔${LINE}╗`);
        console.log(`║   NovaSphere Analytics — Dummy Data Simulator            ║`);
        console.log(`╚${LINE}╝\n`);
    };

    const run = () => {
        printBanner();

        // 1. Sessions
        const sessions = generateSessions(12);
        console.log(`▸ Generated ${sessions.length} dummy sessions`);
        console.log('  Sample session:', JSON.stringify(sessions[0], null, 2));

        // 2. Aggregated metrics
        const metrics = aggregateMetrics(sessions);
        console.log('\n▸ Aggregated Metrics');
        console.log(JSON.stringify(metrics, null, 2));

        // 3. Request logs
        const logs = generateRequestLogs(6);
        console.log('\n▸ Simulated Request Logs');
        logs.forEach((l) => {
            console.log(`  [${l.timestamp}] ${l.method} ${l.path} → ${l.status} (${l.responseTime})`);
        });

        console.log(`\n✔ Dummy script finished — ${new Date().toISOString()}\n`);
    };

    // Run immediately in Node; wait for DOM in the browser.
    if (typeof window !== 'undefined') {
        document.addEventListener('DOMContentLoaded', run);
    } else {
        run();
    }
})();
