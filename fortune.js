#!/usr/bin/env node

const fortunes = [
  "A pleasant surprise is waiting for you.",
  "Adventure can be real happiness.",
  "All your hard work will soon pay off.",
  "Good things come to those who wait.",
  "The best is yet to come.",
  "You will find unexpected treasures.",
  "Success is in your future.",
  "A new perspective will come with the new year.",
  "Your creativity will flourish.",
  "An exciting opportunity lies ahead."
];

const emojis = ["🌟", "🎯", "🎨", "🚀", "💡", "✨", "🎪", "🌈", "🔮", "🎭"];

const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

console.log("\n" + "=".repeat(50));
console.log(`${randomEmoji}  Your Fortune for Today  ${randomEmoji}`);
console.log("=".repeat(50));
console.log(`\n${randomFortune}\n`);
console.log("=".repeat(50) + "\n");
