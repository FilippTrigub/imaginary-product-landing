#!/usr/bin/env node

const os = require('os');

const info = {
  platform: os.platform(),
  arch: os.arch(),
  nodeVersion: process.version,
  uptime: `${Math.floor(os.uptime() / 60)} minutes`,
  totalMemory: `${(os.totalmem() / 1e9).toFixed(2)} GB`,
  freeMemory: `${(os.freemem() / 1e9).toFixed(2)} GB`,
  cpus: os.cpus().length,
  hostname: os.hostname(),
  user: os.userInfo().username,
};

console.log('=== System Info ===');
for (const [key, value] of Object.entries(info)) {
  console.log(`${key}: ${value}`);
}
