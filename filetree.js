#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const dir = process.argv[2] || '.';
const resolved = path.resolve(dir);

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function tree(dirPath, prefix = '') {
  let entries;
  try {
    entries = fs.readdirSync(dirPath, { withFileTypes: true });
  } catch {
    console.log(`${prefix}[permission denied]`);
    return;
  }

  entries = entries.filter(e => !e.name.startsWith('.'));
  entries.sort((a, b) => {
    if (a.isDirectory() && !b.isDirectory()) return -1;
    if (!a.isDirectory() && b.isDirectory()) return 1;
    return a.name.localeCompare(b.name);
  });

  entries.forEach((entry, i) => {
    const isLast = i === entries.length - 1;
    const connector = isLast ? '└── ' : '├── ';
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      console.log(`${prefix}${connector}${entry.name}/`);
      tree(fullPath, prefix + (isLast ? '    ' : '│   '));
    } else {
      const stats = fs.statSync(fullPath);
      console.log(`${prefix}${connector}${entry.name}  (${formatSize(stats.size)})`);
    }
  });
}

console.log(`\n📁 ${resolved}\n`);
tree(resolved);
console.log();
