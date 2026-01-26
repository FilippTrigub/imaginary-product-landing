#!/usr/bin/env node

/**
 * Simple Build Script - Minifies and bundles files
 */

const fs = require('fs');
const path = require('path');

class Builder {
    constructor(config = {}) {
        this.config = {
            srcDir: config.srcDir || '.',
            distDir: config.distDir || 'dist',
            minify: config.minify !== false,
            verbose: config.verbose || false
        };
        this.stats = {
            filesProcessed: 0,
            totalSize: 0,
            minifiedSize: 0
        };
    }

    log(message) {
        if (this.config.verbose) {
            console.log(`[BUILD] ${message}`);
        }
    }

    // Simple minification (removes comments and extra whitespace)
    minifyJS(code) {
        return code
            .replace(/\/\*[\s\S]*?\*\//g, '') // Remove multi-line comments
            .replace(/\/\/.*/g, '') // Remove single-line comments
            .replace(/\s+/g, ' ') // Replace multiple spaces with single space
            .replace(/\s*([{}();,:])\s*/g, '$1') // Remove spaces around operators
            .trim();
    }

    minifyCSS(code) {
        return code
            .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
            .replace(/\s+/g, ' ') // Replace multiple spaces
            .replace(/\s*([{}:;,])\s*/g, '$1') // Remove spaces around operators
            .replace(/;}/g, '}') // Remove last semicolon in block
            .trim();
    }

    minifyHTML(code) {
        return code
            .replace(/<!--[\s\S]*?-->/g, '') // Remove comments
            .replace(/\s+/g, ' ') // Replace multiple spaces
            .replace(/>\s+</g, '><') // Remove spaces between tags
            .trim();
    }

    // Process a single file
    processFile(filePath) {
        const ext = path.extname(filePath);
        const fileName = path.basename(filePath);
        
        this.log(`Processing ${fileName}...`);
        
        try {
            let content = fs.readFileSync(filePath, 'utf8');
            const originalSize = Buffer.byteLength(content, 'utf8');
            
            if (this.config.minify) {
                if (ext === '.js') {
                    content = this.minifyJS(content);
                } else if (ext === '.css') {
                    content = this.minifyCSS(content);
                } else if (ext === '.html') {
                    content = this.minifyHTML(content);
                }
            }
            
            const minifiedSize = Buffer.byteLength(content, 'utf8');
            const savings = ((1 - minifiedSize / originalSize) * 100).toFixed(2);
            
            this.stats.filesProcessed++;
            this.stats.totalSize += originalSize;
            this.stats.minifiedSize += minifiedSize;
            
            this.log(`  Original: ${originalSize} bytes`);
            this.log(`  Minified: ${minifiedSize} bytes`);
            this.log(`  Savings: ${savings}%`);
            
            return content;
        } catch (error) {
            console.error(`Error processing ${fileName}:`, error.message);
            return null;
        }
    }

    // Create dist directory
    ensureDistDir() {
        if (!fs.existsSync(this.config.distDir)) {
            fs.mkdirSync(this.config.distDir, { recursive: true });
            this.log(`Created directory: ${this.config.distDir}`);
        }
    }

    // Build all files
    build() {
        console.log('\n' + '='.repeat(50));
        console.log('Starting Build Process');
        console.log('='.repeat(50) + '\n');
        
        this.ensureDistDir();
        
        const files = [
            { src: 'script.js', dest: 'script.min.js' },
            { src: 'main.js', dest: 'main.min.js' },
            { src: 'styles.css', dest: 'styles.min.css' },
            { src: 'header.html', dest: 'header.min.html' }
        ];
        
        files.forEach(file => {
            const srcPath = path.join(this.config.srcDir, file.src);
            
            if (fs.existsSync(srcPath)) {
                const content = this.processFile(srcPath);
                
                if (content !== null) {
                    const destPath = path.join(this.config.distDir, file.dest);
                    fs.writeFileSync(destPath, content, 'utf8');
                    this.log(`Written to ${destPath}\n`);
                }
            } else {
                this.log(`File not found: ${srcPath}\n`);
            }
        });
        
        this.printSummary();
    }

    // Print build summary
    printSummary() {
        console.log('\n' + '='.repeat(50));
        console.log('Build Summary');
        console.log('='.repeat(50));
        console.log(`Files Processed: ${this.stats.filesProcessed}`);
        console.log(`Total Original Size: ${this.stats.totalSize} bytes`);
        console.log(`Total Minified Size: ${this.stats.minifiedSize} bytes`);
        
        const totalSavings = ((1 - this.stats.minifiedSize / this.stats.totalSize) * 100).toFixed(2);
        console.log(`Total Savings: ${totalSavings}%`);
        console.log('='.repeat(50) + '\n');
    }
}

// Run if called directly
if (require.main === module) {
    const builder = new Builder({
        srcDir: '.',
        distDir: 'dist',
        minify: true,
        verbose: true
    });
    
    builder.build();
}

module.exports = Builder;
