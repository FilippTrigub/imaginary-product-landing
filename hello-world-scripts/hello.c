#include <stdio.h>
#include <time.h>

// Hello World in C
int main() {
    printf("Hello, World!\n");

    // With additional formatting
    printf("========================================\n");
    printf("  C Language Hello World\n");
    printf("========================================\n");

    time_t now = time(NULL);
    printf("Executed at: %s", ctime(&now));

    return 0;
}
