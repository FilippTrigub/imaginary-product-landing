function helloWorld() {
  console.log('Hello, World! from Node.js');
}

if (require.main === module) {
  helloWorld();
}

module.exports = helloWorld;
