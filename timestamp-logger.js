#!/usr/bin/env node

/**
 * Timestamp Logger Script
 * A utility script that logs messages with formatted timestamps
 */

class TimestampLogger {
    constructor() {
        this.startTime = new Date();
    }

    formatTimestamp(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        const milliseconds = String(date.getMilliseconds()).padStart(3, '0');
        
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}`;
    }

    log(message, level = 'INFO') {
        const timestamp = this.formatTimestamp(new Date());
        console.log(`[${timestamp}] [${level}] ${message}`);
    }

    info(message) {
        this.log(message, 'INFO');
    }

    warn(message) {
        this.log(message, 'WARN');
    }

    error(message) {
        this.log(message, 'ERROR');
    }

    success(message) {
        this.log(message, 'SUCCESS');
    }

    getElapsedTime() {
        const elapsed = new Date() - this.startTime;
        const seconds = (elapsed / 1000).toFixed(3);
        return `${seconds}s`;
    }

    logWithElapsed(message, level = 'INFO') {
        const timestamp = this.formatTimestamp(new Date());
        const elapsed = this.getElapsedTime();
        console.log(`[${timestamp}] [${level}] [Elapsed: ${elapsed}] ${message}`);
    }
}

// Demo usage
if (require.main === module) {
    const logger = new TimestampLogger();
    
    logger.info('Timestamp Logger initialized');
    logger.success('Application started successfully');
    
    setTimeout(() => {
        logger.warn('This is a warning message');
    }, 100);
    
    setTimeout(() => {
        logger.error('This is an error message');
    }, 200);
    
    setTimeout(() => {
        logger.logWithElapsed('Process completed');
        logger.info(`Total execution time: ${logger.getElapsedTime()}`);
    }, 300);
}

module.exports = TimestampLogger;
