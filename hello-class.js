// Object-oriented hello world
class Greeter {
    constructor(name = 'World') {
        this.name = name;
        this.greetings = ['Hello', 'Hi', 'Hey', 'Greetings'];
    }

    greet() {
        const randomGreeting = this.greetings[Math.floor(Math.random() * this.greetings.length)];
        return `${randomGreeting}, ${this.name}!`;
    }

    formalGreet() {
        return `Good day, ${this.name}. How do you do?`;
    }

    casualGreet() {
        return `Hey ${this.name}, what's up?`;
    }
}

// Usage
const greeter = new Greeter();
console.log(greeter.greet());
console.log(greeter.formalGreet());
console.log(greeter.casualGreet());

const personalGreeter = new Greeter('Developer');
console.log(personalGreeter.greet());
