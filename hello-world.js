// Simple Hello World in JavaScript
console.log("Hello World!");

// Hello World with function
function sayHello() {
    return "Hello World!";
}

console.log(sayHello());

// Hello World with arrow function
const greet = () => "Hello World!";
console.log(greet());

// Hello World with class
class Greeter {
    constructor(message = "Hello World!") {
        this.message = message;
    }
    
    greet() {
        return this.message;
    }
}

const greeter = new Greeter();
console.log(greeter.greet());
