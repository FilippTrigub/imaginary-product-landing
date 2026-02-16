#!/usr/bin/env node

const name = process.argv[2] || "there";
const time = new Date().getHours();

let greeting;
if (time < 12) {
  greeting = "Good morning";
} else if (time < 18) {
  greeting = "Good afternoon";
} else {
  greeting = "Good evening";
}

console.log(`${greeting}, ${name}!`);
console.log(`Current time: ${new Date().toLocaleTimeString()}`);
