/**
 * Performance Monitor Script
 * Monitors and logs performance metrics
 */

class PerformanceMonitor {
    constructor() {
        this.metrics = {
            pageLoad: 0,
            domReady: 0,
            firstPaint: 0,
            firstContentfulPaint: 0,
            largestContentfulPaint: 0,
            timeToInteractive: 0
        };
        this.resourceTimings = [];
        this.customMarks = {};
    }

    // Get page load time
    getPageLoadTime() {
        if (typeof performance !== 'undefined' && performance.timing) {
            const timing = performance.timing;
            return timing.loadEventEnd - timing.navigationStart;
        }
        return Math.floor(Math.random() * 3000) + 500; // Dummy value
    }

    // Get DOM ready time
    getDOMReadyTime() {
        if (typeof performance !== 'undefined' && performance.timing) {
            const timing = performance.timing;
            return timing.domContentLoadedEventEnd - timing.navigationStart;
        }
        return Math.floor(Math.random() * 2000) + 300; // Dummy value
    }

    // Generate dummy paint metrics
    getPaintMetrics() {
        return {
            firstPaint: Math.floor(Math.random() * 1000) + 200,
            firstContentfulPaint: Math.floor(Math.random() * 1500) + 300,
            largestContentfulPaint: Math.floor(Math.random() * 2500) + 500
        };
    }

    // Generate dummy resource timings
    getResourceTimings() {
        const resources = [
            { name: 'styles.css', type: 'css', size: 45678, duration: 123 },
            { name: 'script.js', type: 'script', size: 89012, duration: 234 },
            { name: 'main.js', type: 'script', size: 12345, duration: 156 },
            { name: 'logo.svg', type: 'img', size: 5678, duration: 45 },
            { name: 'product.svg', type: 'img', size: 7890, duration: 67 }
        ];
        
        return resources.map(resource => ({
            ...resource,
            startTime: Math.random() * 1000,
            endTime: Math.random() * 1000 + 1000
        }));
    }

    // Mark custom timing
    mark(name) {
        const timestamp = Date.now();
        this.customMarks[name] = timestamp;
        console.log(`[Performance] Mark: ${name} at ${timestamp}ms`);
    }

    // Measure between marks
    measure(name, startMark, endMark) {
        if (this.customMarks[startMark] && this.customMarks[endMark]) {
            const duration = this.customMarks[endMark] - this.customMarks[startMark];
            console.log(`[Performance] Measure: ${name} = ${duration}ms`);
            return duration;
        }
        return null;
    }

    // Calculate performance score
    calculateScore() {
        const loadTime = this.metrics.pageLoad;
        let score = 100;
        
        if (loadTime > 3000) score -= 30;
        else if (loadTime > 2000) score -= 20;
        else if (loadTime > 1000) score -= 10;
        
        if (this.metrics.firstContentfulPaint > 1800) score -= 20;
        else if (this.metrics.firstContentfulPaint > 1000) score -= 10;
        
        if (this.metrics.largestContentfulPaint > 2500) score -= 20;
        else if (this.metrics.largestContentfulPaint > 1500) score -= 10;
        
        return Math.max(0, score);
    }

    // Collect all metrics
    collectMetrics() {
        this.metrics.pageLoad = this.getPageLoadTime();
        this.metrics.domReady = this.getDOMReadyTime();
        
        const paintMetrics = this.getPaintMetrics();
        this.metrics.firstPaint = paintMetrics.firstPaint;
        this.metrics.firstContentfulPaint = paintMetrics.firstContentfulPaint;
        this.metrics.largestContentfulPaint = paintMetrics.largestContentfulPaint;
        
        this.resourceTimings = this.getResourceTimings();
        
        return this.metrics;
    }

    // Generate report
    generateReport() {
        this.collectMetrics();
        const score = this.calculateScore();
        
        const report = {
            score: score,
            grade: score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C' : score >= 60 ? 'D' : 'F',
            metrics: this.metrics,
            resources: this.resourceTimings,
            recommendations: this.getRecommendations()
        };
        
        return report;
    }

    // Get performance recommendations
    getRecommendations() {
        const recommendations = [];
        
        if (this.metrics.pageLoad > 3000) {
            recommendations.push('Page load time is slow. Consider optimizing images and scripts.');
        }
        
        if (this.metrics.firstContentfulPaint > 1800) {
            recommendations.push('First Contentful Paint is delayed. Optimize critical rendering path.');
        }
        
        if (this.metrics.largestContentfulPaint > 2500) {
            recommendations.push('Largest Contentful Paint is slow. Optimize largest elements.');
        }
        
        if (this.resourceTimings.length > 10) {
            recommendations.push('Many resources loaded. Consider bundling and minification.');
        }
        
        if (recommendations.length === 0) {
            recommendations.push('Performance looks good! Keep up the optimization.');
        }
        
        return recommendations;
    }

    // Display report
    displayReport() {
        const report = this.generateReport();
        
        console.log('\n=== PERFORMANCE REPORT ===');
        console.log(`Score: ${report.score}/100 (Grade: ${report.grade})`);
        console.log('\nMetrics:');
        console.log(`  Page Load: ${report.metrics.pageLoad}ms`);
        console.log(`  DOM Ready: ${report.metrics.domReady}ms`);
        console.log(`  First Paint: ${report.metrics.firstPaint}ms`);
        console.log(`  First Contentful Paint: ${report.metrics.firstContentfulPaint}ms`);
        console.log(`  Largest Contentful Paint: ${report.metrics.largestContentfulPaint}ms`);
        console.log('\nResources:');
        report.resources.forEach(resource => {
            console.log(`  ${resource.name} (${resource.type}): ${resource.duration}ms, ${resource.size} bytes`);
        });
        console.log('\nRecommendations:');
        report.recommendations.forEach((rec, i) => {
            console.log(`  ${i + 1}. ${rec}`);
        });
        console.log('========================\n');
        
        return report;
    }
}

// Run performance monitoring
const monitor = new PerformanceMonitor();
monitor.displayReport();

if (typeof module !== 'undefined' && module.exports) {
    module.exports = PerformanceMonitor;
}
