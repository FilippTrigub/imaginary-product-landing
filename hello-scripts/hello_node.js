function sayHello(name = "World") {
    return `Hello, ${name}!`;
}

if (require.main === module) {
    console.log(sayHello());
}

module.exports = { sayHello };
