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
        const sessionStart = new Date(Date.now() - randomInt(0, 86400000));
        const pageCount = randomInt(1, 8);
        const visitedPages = Array.from({ length: pageCount }, () => randomItem(pages));

        return {
            sessionId: `ns-${randomId()}`,
            userId: `user-${randomId()}`,
            device: randomItem(devices),
            region: randomItem(regions),
            plan: randomItem(plans),
            startTime: sessionStart.toISOString(),
            durationSeconds: randomInt(10, 1200),
            pagesVisited: visitedPages,
            featuresClicked: Array.from({ length: randomInt(0, 4) }, () => randomItem(features)),
            converted: Math.random() < 0.12,
            bounced: pageCount === 1 && Math.random() < 0.45,
        };
    };

    const generateBatch = (count = 20) => {
        return Array.from({ length: count }, () => generateSession());
    };

    const getSummary = (sessions) => {
        const totalSessions = sessions.length;
        const totalPageViews = sessions.reduce((sum, s) => sum + s.pagesVisited.length, 0);
        const avgDuration = Math.round(sessions.reduce((sum, s) => sum + s.durationSeconds, 0) / totalSessions);
        const conversions = sessions.filter(s => s.converted).length;
        const bounces = sessions.filter(s => s.bounced).length;

        const deviceBreakdown = {};
        sessions.forEach(s => {
            deviceBreakdown[s.device] = (deviceBreakdown[s.device] || 0) + 1;
        });

        const regionBreakdown = {};
        sessions.forEach(s => {
            regionBreakdown[s.region] = (regionBreakdown[s.region] || 0) + 1;
        });

        const featureEngagement = {};
        sessions.forEach(s => {
            s.featuresClicked.forEach(f => {
                featureEngagement[f] = (featureEngagement[f] || 0) + 1;
            });
        });

        return {
            totalSessions,
            totalPageViews,
            avgDurationSeconds: avgDuration,
            conversionRate: `${((conversions / totalSessions) * 100).toFixed(1)}%`,
            bounceRate: `${((bounces / totalSessions) * 100).toFixed(1)}%`,
            deviceBreakdown,
            regionBreakdown,
            featureEngagement,
        };
    };

    const simulateTraffic = (count = 10, intervalMs = 500) => {
        console.log('╔══════════════════════════════════════════════════╗');
        console.log('║     NovaSphere Analytics — Live Traffic Feed     ║');
        console.log('╚══════════════════════════════════════════════════╝\n');

        const sessions = [];
        let i = 0;

        const tick = () => {
            if (i >= count) {
                console.log('\n--- Traffic simulation complete ---\n');
                const summary = getSummary(sessions);
                console.log('Summary:');
                console.log(JSON.stringify(summary, null, 2));
                return;
            }

            const session = generateSession();
            sessions.push(session);
            i++;

            const status = session.converted ? '💰 CONVERTED' : session.bounced ? '🔴 BOUNCED' : '🟢 ACTIVE';
            console.log(
                `[${String(i).padStart(3)}] ${session.sessionId}  ${session.device.padEnd(18)} ${session.region.padEnd(16)} ${status}`
            );

            setTimeout(tick, intervalMs);
        };

        tick();
    };

    return { generateSession, generateBatch, getSummary, simulateTraffic };
})();

// Run when executed directly
if (typeof window === 'undefined') {
    const sessions = NovaSphereAnalytics.generateBatch(50);
    const summary = NovaSphereAnalytics.getSummary(sessions);

    console.log('NovaSphere Dummy Analytics — Batch Report');
    console.log('==========================================\n');
    console.log(`Sessions generated: ${summary.totalSessions}`);
    console.log(`Total page views:   ${summary.totalPageViews}`);
    console.log(`Avg duration:       ${summary.avgDurationSeconds}s`);
    console.log(`Conversion rate:    ${summary.conversionRate}`);
    console.log(`Bounce rate:        ${summary.bounceRate}\n`);
    console.log('Device breakdown:', JSON.stringify(summary.deviceBreakdown, null, 2));
    console.log('Region breakdown:', JSON.stringify(summary.regionBreakdown, null, 2));
    console.log('Feature engagement:', JSON.stringify(summary.featureEngagement, null, 2));

    console.log('\n--- Starting live traffic simulation ---\n');
    NovaSphereAnalytics.simulateTraffic(15, 300);
}
