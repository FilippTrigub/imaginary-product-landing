// Dummy Script for NovaSphere Project
// This script demonstrates basic functionality for testing purposes

(function() {
    'use strict';
    
    console.log('🚀 Dummy Script Initialized');
    
    // Dummy data generator
    function generateDummyData(count) {
        const data = [];
        for (let i = 1; i <= count; i++) {
            data.push({
                id: i,
                name: `User ${i}`,
                timestamp: new Date().toISOString(),
                status: i % 2 === 0 ? 'active' : 'inactive'
            });
        }
        return data;
    }
    
    // Dummy calculation function
    function calculateDummyMetrics(data) {
        const active = data.filter(item => item.status === 'active').length;
        const inactive = data.filter(item => item.status === 'inactive').length;
        
        return {
            total: data.length,
            active: active,
            inactive: inactive,
            activePercentage: ((active / data.length) * 100).toFixed(2) + '%'
        };
    }
    
    // Main execution
    function init() {
        console.log('📊 Generating dummy data...');
        const dummyData = generateDummyData(10);
        
        console.log('✅ Data generated:', dummyData.length, 'items');
        console.log('📈 Calculating metrics...');
        
        const metrics = calculateDummyMetrics(dummyData);
        console.log('📊 Metrics:', metrics);
        
        console.log('✨ Dummy script execution completed successfully!');
        
        return {
            data: dummyData,
            metrics: metrics
        };
    }
    
    // Execute if running in Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = { generateDummyData, calculateDummyMetrics, init };
    }
    
    // Execute if running in browser
    if (typeof window !== 'undefined') {
        window.DummyScript = { generateDummyData, calculateDummyMetrics, init };
        // Auto-run on load
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
        } else {
            init();
        }
    }
    
})();
