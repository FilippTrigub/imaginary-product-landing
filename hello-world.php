#!/usr/bin/env php
<?php
/**
 * Hello World in PHP
 * Demonstrates PHP syntax for both CLI and web environments
 */

// Basic hello world function
function helloWorld() {
    echo "Hello, World!\n";
}

// Personalized greeting
function helloName($name) {
    echo "Hello, $name!\n";
}

// Hello with timestamp
function helloWithTime() {
    $time = date('Y-m-d H:i:s');
    echo "Hello, World! Current time: $time\n";
}

// Class-based greeter
class Greeter {
    private $name;
    
    public function __construct($name = "World") {
        $this->name = $name;
    }
    
    public function greet() {
        echo "Hello, {$this->name}!\n";
    }
    
    public function fancyGreet() {
        echo "✨ Greetings, {$this->name}! ✨\n";
    }
}

// Main execution
if (php_sapi_name() === 'cli') {
    echo "=== PHP Hello World Program ===\n\n";
    
    // Basic hello world
    helloWorld();
    
    // Personalized greeting
    $name = $argv[1] ?? "Developer";
    helloName($name);
    
    // Hello with timestamp
    helloWithTime();
    
    // Class-based greeting
    $greeter = new Greeter("PHP Developer");
    $greeter->greet();
    $greeter->fancyGreet();
    
    // Array iteration
    echo "\nGreeting multiple people:\n";
    $people = ["Alice", "Bob", "Charlie"];
    foreach ($people as $person) {
        echo "  👋 Hello, $person!\n";
    }
    
    echo "\nPHP program executed successfully!\n";
} else {
    // Web environment
    echo "<!DOCTYPE html>\n";
    echo "<html><head><title>PHP Hello World</title></head><body>\n";
    echo "<h1>Hello, World!</h1>\n";
    echo "<p>This is PHP running in a web environment.</p>\n";
    echo "<p>Current time: " . date('Y-m-d H:i:s') . "</p>\n";
    echo "</body></html>\n";
}
?>
