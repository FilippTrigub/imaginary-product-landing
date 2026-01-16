// ANSI color codes
const colors = {
  reset: "\x1b[0m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m"
};

console.log(`${colors.red}Hello${colors.reset} ${colors.green}World${colors.reset}!`);
console.log(`${colors.blue}Hello${colors.reset} ${colors.yellow}World${colors.reset}!`);
console.log(`${colors.magenta}Hello${colors.reset} ${colors.cyan}World${colors.reset}!`);
console.log(`${colors.white}Hello World!${colors.reset}`);