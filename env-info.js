#!/usr/bin/env node

// Environment Information Script
console.log('=================================');
console.log('   Environment Information');
console.log('=================================\n');

// Display Node.js information
console.log('Node.js Version:', process.version);
console.log('Platform:', process.platform);
console.log('Architecture:', process.arch);
console.log('Current Directory:', process.cwd());
console.log('\n=================================');
console.log('   Environment Variables');
console.log('=================================\n');

// Display project-specific environment variables
const foobar = process.env.FOOBAR;
const nextPublicFoobar = process.env.NEXT_PUBLIC_FOOBAR;

if (foobar) {
  console.log('FOOBAR:', foobar);
} else {
  console.log('FOOBAR: (not set)');
}

if (nextPublicFoobar) {
  console.log('NEXT_PUBLIC_FOOBAR:', nextPublicFoobar);
} else {
  console.log('NEXT_PUBLIC_FOOBAR: (not set)');
}

console.log('\n=================================');
console.log('   Memory Usage');
console.log('=================================\n');

const memUsage = process.memoryUsage();
console.log('RSS:', (memUsage.rss / 1024 / 1024).toFixed(2), 'MB');
console.log('Heap Total:', (memUsage.heapTotal / 1024 / 1024).toFixed(2), 'MB');
console.log('Heap Used:', (memUsage.heapUsed / 1024 / 1024).toFixed(2), 'MB');
console.log('External:', (memUsage.external / 1024 / 1024).toFixed(2), 'MB');

console.log('\n=================================\n');
