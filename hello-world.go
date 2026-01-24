// Hello World in Go
// Demonstrates Go's syntax and concurrency features

package main

import (
	"fmt"
	"os"
	"time"
)

// Basic hello world function
func helloWorld() {
	fmt.Println("Hello, World!")
}

// Personalized greeting
func helloName(name string) {
	fmt.Printf("Hello, %s!\n", name)
}

// Hello with timestamp
func helloWithTime() {
	now := time.Now()
	fmt.Printf("Hello, World! Current time: %s\n", now.Format("2006-01-02 15:04:05"))
}

// Struct-based greeter
type Greeter struct {
	Name string
}

// Method on Greeter struct
func (g Greeter) Greet() {
	fmt.Printf("Hello, %s!\n", g.Name)
}

// Concurrent hello world
func concurrentHello(id int, ch chan string) {
	message := fmt.Sprintf("Hello from goroutine %d!", id)
	ch <- message
}

func main() {
	fmt.Println("=== Go Hello World Program ===\n")
	
	// Basic hello world
	helloWorld()
	
	// Personalized greeting
	name := "Developer"
	if len(os.Args) > 1 {
		name = os.Args[1]
	}
	helloName(name)
	
	// Hello with timestamp
	helloWithTime()
	
	// Struct-based greeting
	greeter := Greeter{Name: "Go Programmer"}
	greeter.Greet()
	
	// Concurrent greetings
	fmt.Println("\nConcurrent greetings:")
	ch := make(chan string)
	for i := 1; i <= 3; i++ {
		go concurrentHello(i, ch)
	}
	for i := 1; i <= 3; i++ {
		fmt.Printf("  %s\n", <-ch)
	}
	
	fmt.Println("\nGo program executed successfully!")
}
