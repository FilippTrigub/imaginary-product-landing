/*
 * Hello World in C - Multiple approaches
 */

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Function prototypes
void greet(const char *name);
void greet_multiple(char *names[], int count);
char* create_greeting(const char *name);

// Basic hello world function
void greet(const char *name) {
    if (name == NULL) {
        name = "World";
    }
    printf("Hello, %s!\n", name);
}

// Greet multiple names
void greet_multiple(char *names[], int count) {
    for (int i = 0; i < count; i++) {
        printf("Hello, %s!\n", names[i]);
    }
}

// Create greeting string (caller must free)
char* create_greeting(const char *name) {
    if (name == NULL) {
        name = "World";
    }
    
    size_t len = strlen("Hello, ") + strlen(name) + strlen("!") + 1;
    char *greeting = (char*)malloc(len);
    
    if (greeting != NULL) {
        snprintf(greeting, len, "Hello, %s!", name);
    }
    
    return greeting;
}

// Struct-based approach
typedef struct {
    char greeting[50];
} Greeter;

void greeter_init(Greeter *g, const char *greeting) {
    if (greeting == NULL) {
        greeting = "Hello";
    }
    strncpy(g->greeting, greeting, sizeof(g->greeting) - 1);
    g->greeting[sizeof(g->greeting) - 1] = '\0';
}

void greeter_greet(const Greeter *g, const char *name) {
    if (name == NULL) {
        name = "World";
    }
    printf("%s, %s!\n", g->greeting, name);
}

int main(int argc, char *argv[]) {
    // Basic print
    printf("Hello, World!\n");
    
    // Using puts
    puts("Hello, World!");
    
    // Formatted output
    char name[] = "World";
    printf("Hello, %s!\n", name);
    
    // Function calls
    greet(NULL);
    greet("C Programming");
    
    // Array of names
    char *names[] = {"Alice", "Bob", "Charlie"};
    int name_count = sizeof(names) / sizeof(names[0]);
    greet_multiple(names, name_count);
    
    // Dynamic greeting
    char *greeting = create_greeting("Developer");
    if (greeting != NULL) {
        printf("%s\n", greeting);
        free(greeting);
    }
    
    // Struct-based greeter
    Greeter greeter;
    greeter_init(&greeter, "Hello");
    greeter_greet(&greeter, "Struct");
    
    // Command line arguments
    if (argc > 1) {
        printf("Hello, %s (from command line)!\n", argv[1]);
    }
    
    // Loop
    for (int i = 1; i <= 3; i++) {
        printf("Hello, World! (iteration %d)\n", i);
    }
    
    // Conditional
    int hour = 14;
    if (hour < 12) {
        printf("Good morning, World!\n");
    } else if (hour < 18) {
        printf("Good afternoon, World!\n");
    } else {
        printf("Good evening, World!\n");
    }
    
    // Multi-line output
    printf("\n=========================\n");
    printf("Multi-line Hello World\n");
    printf("Hello, World!\n");
    printf("From C Program\n");
    printf("=========================\n");
    
    printf("\n=== C Hello World Complete ===\n");
    
    return 0;
}
