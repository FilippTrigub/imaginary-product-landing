#!/usr/bin/env node

// Utility script to display environment and project information
const fs = require('fs');
const path = require('path');

console.log('=== Project Utility Script ===\n');

// Check environment variables
const foobar = process.env.FOOBAR;
const nextPublicFoobar = process.env.NEXT_PUBLIC_FOOBAR;

console.log('Environment Variables:');
console.log(`  FOOBAR: ${foobar ? foobar : 'not set'}`);
console.log(`  NEXT_PUBLIC_FOOBAR: ${nextPublicFoobar ? nextPublicFoobar : 'not set'}\n`);

// Get project files
console.log('Project Files:');
const files = fs.readdirSync(path.join(__dirname));
const jsFiles = files.filter(f => f.endsWith('.js') || f.endsWith('.html') || f.endsWith('.css'));
jsFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  const stats = fs.statSync(filePath);
  console.log(`  ${file} (${stats.size} bytes)`);
});

console.log('\nUtility script completed successfully!');
