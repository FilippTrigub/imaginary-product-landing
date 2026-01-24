// Hello World in Rust
// Demonstrates Rust's safety and modern features

use std::env;
use std::time::SystemTime;

// Basic hello world function
fn hello_world() {
    println!("Hello, World!");
}

// Personalized greeting
fn hello_name(name: &str) {
    println!("Hello, {}!", name);
}

// Hello with timestamp
fn hello_with_time() {
    match SystemTime::now().duration_since(SystemTime::UNIX_EPOCH) {
        Ok(duration) => {
            println!("Hello, World! Unix timestamp: {}", duration.as_secs());
        }
        Err(_) => {
            println!("Hello, World! (Could not get system time)");
        }
    }
}

// Struct-based greeter
struct Greeter {
    name: String,
}

impl Greeter {
    // Constructor
    fn new(name: &str) -> Greeter {
        Greeter {
            name: name.to_string(),
        }
    }
    
    // Method to greet
    fn greet(&self) {
        println!("Hello, {}!", self.name);
    }
    
    // Method with ownership
    fn fancy_greet(&self) {
        println!("🦀 Greetings, {}! Welcome to Rust! 🦀", self.name);
    }
}

// Function demonstrating Option type
fn get_greeting(name: Option<&str>) -> String {
    match name {
        Some(n) => format!("Hello, {}!", n),
        None => String::from("Hello, World!"),
    }
}

fn main() {
    println!("=== Rust Hello World Program ===\n");
    
    // Basic hello world
    hello_world();
    
    // Personalized greeting from command line args
    let args: Vec<String> = env::args().collect();
    let name = if args.len() > 1 {
        &args[1]
    } else {
        "Developer"
    };
    hello_name(name);
    
    // Hello with timestamp
    hello_with_time();
    
    // Struct-based greeting
    let greeter = Greeter::new("Rustacean");
    greeter.greet();
    greeter.fancy_greet();
    
    // Using Option type
    println!("{}", get_greeting(Some("Rust Enthusiast")));
    println!("{}", get_greeting(None));
    
    // Vector iteration
    println!("\nGreeting multiple people:");
    let people = vec!["Alice", "Bob", "Charlie"];
    for person in people.iter() {
        println!("  👋 Hello, {}!", person);
    }
    
    println!("\nRust program executed successfully!");
}
