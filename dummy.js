/**
 * NovaSphere Dummy Analytics Script
 * Simulates user sessions, page views, and feature engagement
 * for the NovaSphere holographic computing platform.
 */

const NovaSphereAnalytics = (() => {
    const devices = ['HoloLens Pro', 'NovaPad', 'QuantumBook', 'NeuroLink Band', 'Desktop Browser', 'Mobile'];
    const pages = ['/', '/features', '/pricing', '/about', '/team', '/contact', '/docs', '/blog'];
    const features = ['Holographic Display', 'Neural Sync', 'Quantum Processing', 'Gesture Control', 'Voice AI', 'Cloud Mesh'];
    const regions = ['North America', 'Europe', 'Asia Pacific', 'South America', 'Africa', 'Middle East'];
    const plans = ['Explorer', 'Professional', 'Enterprise'];

    const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
    const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const randomId = () => Math.random().toString(36).substring(2, 10);

    const generateSession = () => {
        const pageCount = randomInt(1, 8);
        const visitedPages = Array.from({ length: pageCount }, () => randomItem(pages));
        const sessionDuration = randomInt(5, 600);

        return {
            sessionId: `ns-${randomId()}`,
            userId: `user-${randomId()}`,
            device: randomItem(devices),
            region: randomItem(regions),
            plan: randomItem(plans),
            visitedPages,
            featuresUsed: Array.from({ length: randomInt(0, 4) }, () => randomItem(features)),
            sessionDuration,
            timestamp: new Date().toISOString(),
            converted: Math.random() > 0.7,
        };
    };

    const generateBatch = (count = 10) => {
        return Array.from({ length: count }, () => generateSession());
    };

    const getSummary = (sessions) => {
        const totalSessions = sessions.length;
        const totalPageViews = sessions.reduce((sum, s) => sum + s.visitedPages.length, 0);
        const avgDuration = Math.round(sessions.reduce((sum, s) => sum + s.sessionDuration, 0) / totalSessions);
        const conversionRate = ((sessions.filter(s => s.converted).length / totalSessions) * 100).toFixed(1);

        const deviceBreakdown = {};
        sessions.forEach(s => {
            deviceBreakdown[s.device] = (deviceBreakdown[s.device] || 0) + 1;
        });

        const regionBreakdown = {};
        sessions.forEach(s => {
            regionBreakdown[s.region] = (regionBreakdown[s.region] || 0) + 1;
        });

        const topFeatures = {};
        sessions.forEach(s => {
            s.featuresUsed.forEach(f => {
                topFeatures[f] = (topFeatures[f] || 0) + 1;
            });
        });

        return {
            totalSessions,
            totalPageViews,
            avgDuration: `${avgDuration}s`,
            conversionRate: `${conversionRate}%`,
            deviceBreakdown,
            regionBreakdown,
            topFeatures,
        };
    };

    const simulateTraffic = (ticks = 5, batchSize = 20) => {
        console.log('=== NovaSphere Analytics Simulator ===\n');

        const allSessions = [];

        for (let i = 1; i <= ticks; i++) {
            const batch = generateBatch(batchSize);
            allSessions.push(...batch);

            console.log(`[Tick ${i}/${ticks}] Generated ${batch.length} sessions (total: ${allSessions.length})`);
            console.log(`  Sample: ${batch[0].sessionId} | ${batch[0].device} | ${batch[0].region} | ${batch[0].visitedPages.length} pages\n`);
        }

        const summary = getSummary(allSessions);
        console.log('--- Traffic Summary ---');
        console.log(`  Sessions:        ${summary.totalSessions}`);
        console.log(`  Page Views:      ${summary.totalPageViews}`);
        console.log(`  Avg Duration:    ${summary.avgDuration}`);
        console.log(`  Conversion Rate: ${summary.conversionRate}`);
        console.log(`\n  Devices:`, summary.deviceBreakdown);
        console.log(`  Regions:`, summary.regionBreakdown);
        console.log(`  Top Features:`, summary.topFeatures);
        console.log('\n=== Simulation Complete ===');

        return { sessions: allSessions, summary };
    };

    return { generateSession, generateBatch, getSummary, simulateTraffic };
})();

// Run simulation when executed directly
NovaSphereAnalytics.simulateTraffic();
