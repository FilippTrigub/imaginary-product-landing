/*
 * Hello World in C
 * A classic C program demonstrating basic I/O
 */

#include <stdio.h>
#include <stdlib.h>
#include <time.h>

// Function to print hello world
void hello_world() {
    printf("Hello, World!\n");
}

// Function to print personalized greeting
void hello_name(const char* name) {
    printf("Hello, %s!\n", name);
}

// Function to print with timestamp
void hello_with_time() {
    time_t now;
    time(&now);
    printf("Hello, World! Current time: %s", ctime(&now));
}

int main(int argc, char *argv[]) {
    printf("=== C Hello World Program ===\n\n");
    
    // Basic hello world
    hello_world();
    
    // Personalized greeting
    if (argc > 1) {
        hello_name(argv[1]);
    } else {
        hello_name("Developer");
    }
    
    // Hello with timestamp
    hello_with_time();
    
    printf("\nProgram compiled successfully!\n");
    
    return 0;
}
