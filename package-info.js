#!/usr/bin/env node

// Package Information Script
const fs = require('fs');
const path = require('path');

console.log('=================================');
console.log('   Package Information');
console.log('=================================\n');

// Read package.json
const packageJsonPath = path.join(process.cwd(), 'package.json');

try {
  const packageData = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

  console.log('Name:', packageData.name || '(not set)');
  console.log('Version:', packageData.version || '(not set)');
  console.log('Description:', packageData.description || '(not set)');
  console.log('Main Entry:', packageData.main || '(not set)');
  console.log('License:', packageData.license || '(not set)');
  console.log('Package Manager:', packageData.packageManager || '(not set)');

  console.log('\n=================================');
  console.log('   Scripts');
  console.log('=================================\n');

  if (packageData.scripts && Object.keys(packageData.scripts).length > 0) {
    Object.entries(packageData.scripts).forEach(([key, value]) => {
      console.log(`${key}: ${value}`);
    });
  } else {
    console.log('(no scripts defined)');
  }

  console.log('\n=================================');
  console.log('   Dependencies');
  console.log('=================================\n');

  if (packageData.dependencies && Object.keys(packageData.dependencies).length > 0) {
    Object.entries(packageData.dependencies).forEach(([key, value]) => {
      console.log(`${key}: ${value}`);
    });
  } else {
    console.log('(no dependencies)');
  }

  console.log('\n=================================');
  console.log('   Dev Dependencies');
  console.log('=================================\n');

  if (packageData.devDependencies && Object.keys(packageData.devDependencies).length > 0) {
    Object.entries(packageData.devDependencies).forEach(([key, value]) => {
      console.log(`${key}: ${value}`);
    });
  } else {
    console.log('(no dev dependencies)');
  }

  console.log('\n=================================\n');

} catch (error) {
  console.error('Error reading package.json:', error.message);
  process.exit(1);
}
