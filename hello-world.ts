#!/usr/bin/env ts-node

/**
 * Hello World in TypeScript
 * Demonstrates TypeScript's type system and modern features
 */

// Type definitions
type Greeting = {
    message: string;
    timestamp: Date;
    recipient?: string;
};

// Interface for Greeter
interface IGreeter {
    name: string;
    greet(): void;
}

// Basic hello world function
function helloWorld(): void {
    console.log("Hello, World!");
}

// Personalized greeting with type annotation
function helloName(name: string): void {
    console.log(`Hello, ${name}!`);
}

// Function returning a greeting object
function createGreeting(recipient?: string): Greeting {
    return {
        message: "Hello, World!",
        timestamp: new Date(),
        recipient: recipient
    };
}

// Class implementing the interface
class Greeter implements IGreeter {
    constructor(public name: string) {}
    
    greet(): void {
        console.log(`Hello, ${this.name}!`);
    }
    
    fancyGreet(): void {
        console.log(`✨ Greetings, ${this.name}! ✨`);
    }
}

// Generic function
function greetMultiple<T extends { name: string }>(people: T[]): void {
    people.forEach(person => {
        console.log(`  👋 Hello, ${person.name}!`);
    });
}

// Async function
async function asyncHello(delay: number = 100): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello from async function!");
        }, delay);
    });
}

// Main execution
async function main(): Promise<void> {
    console.log("=== TypeScript Hello World Program ===\n");
    
    // Basic hello world
    helloWorld();
    
    // Personalized greeting
    const name: string = process.argv[2] || "Developer";
    helloName(name);
    
    // Create greeting object
    const greeting: Greeting = createGreeting("TypeScript User");
    console.log(`${greeting.message} Time: ${greeting.timestamp.toISOString()}`);
    
    // Class-based greeting
    const greeter: Greeter = new Greeter("TypeScript Enthusiast");
    greeter.greet();
    greeter.fancyGreet();
    
    // Generic function with typed array
    console.log("\nGreeting multiple people:");
    const people: { name: string; role: string }[] = [
        { name: "Alice", role: "Developer" },
        { name: "Bob", role: "Designer" },
        { name: "Charlie", role: "Manager" }
    ];
    greetMultiple(people);
    
    // Async greeting
    const asyncMessage: string = await asyncHello();
    console.log(`\n${asyncMessage}`);
    
    console.log("\nTypeScript program executed successfully!");
}

// Run main function if this is the main module
if (require.main === module) {
    main().catch(console.error);
}

// Export for use as a module
export { helloWorld, helloName, createGreeting, Greeter, greetMultiple, asyncHello };
