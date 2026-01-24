/*
 * Hello World in Java
 * Demonstrates basic Java syntax and OOP principles
 */

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class HelloWorld {
    
    // Instance variable
    private String message;
    
    // Constructor
    public HelloWorld() {
        this.message = "Hello, World!";
    }
    
    // Constructor with custom message
    public HelloWorld(String customMessage) {
        this.message = customMessage;
    }
    
    // Method to print the message
    public void printMessage() {
        System.out.println(this.message);
    }
    
    // Static method for basic hello world
    public static void sayHello() {
        System.out.println("Hello, World!");
    }
    
    // Method to print personalized greeting
    public static void sayHelloTo(String name) {
        System.out.println("Hello, " + name + "!");
    }
    
    // Method to print with timestamp
    public static void sayHelloWithTime() {
        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        System.out.println("Hello, World! Current time: " + now.format(formatter));
    }
    
    // Main method
    public static void main(String[] args) {
        System.out.println("=== Java Hello World Program ===\n");
        
        // Static method call
        sayHello();
        
        // Instance method call
        HelloWorld hw = new HelloWorld();
        hw.printMessage();
        
        // Personalized greeting
        if (args.length > 0) {
            sayHelloTo(args[0]);
        } else {
            sayHelloTo("Developer");
        }
        
        // Hello with timestamp
        sayHelloWithTime();
        
        // Custom message
        HelloWorld customHw = new HelloWorld("Greetings from Java!");
        customHw.printMessage();
        
        System.out.println("\nJava program executed successfully!");
    }
}
