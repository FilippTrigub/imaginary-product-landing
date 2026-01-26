// Simple Hello World script in JavaScript
function sayHello(name = 'World') {
    return `Hello, ${name}!`;
}

if (require.main === module) {
    const args = process.argv.slice(2);
    const target = args[0] || 'World';
    console.log(sayHello(target));
}

module.exports = { sayHello };
