#!/usr/bin/env node
// Node.js Hello World script with HTTP server

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

// For demo purposes, just print and don't actually start the server
console.log('Hello, World!');
console.log(`(This could start a server at http://${hostname}:${port}/)`);
