// Object-oriented hello world
class Greeter {
    constructor(name = 'World') {
        this.name = name;
    }

    greet() {
        return `Hello, ${this.name}!`;
    }

    greetMultiple(names) {
        return names.map(name => `Hello, ${name}!`).join('\n');
    }
}

// Usage
const greeter = new Greeter();
console.log(greeter.greet());

const customGreeter = new Greeter('JavaScript');
console.log(customGreeter.greet());

console.log('\nMultiple greetings:');
console.log(greeter.greetMultiple(['Alice', 'Bob', 'Charlie']));
