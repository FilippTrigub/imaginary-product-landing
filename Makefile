# Hello World Makefile
# Run with: make hello

.PHONY: all hello clean test help

# Default target
all: hello

# Hello world target
hello:
	@echo "Hello, World!"
	@echo "Hello from Makefile!"

# Multiple greetings
greet:
	@echo "=== Greetings ==="
	@echo "Hello, Alice!"
	@echo "Hello, Bob!"
	@echo "Hello, Charlie!"
	@echo "================="

# With variables
NAME ?= World
greet-name:
	@echo "Hello, $(NAME)!"

# Loop example
greet-loop:
	@for name in Alice Bob Charlie Dave; do \
		echo "Hello, $$name!"; \
	done

# Compile C program
hello-c: hello-world.c
	@echo "Compiling C program..."
	gcc -o hello-world hello-world.c -Wall
	@echo "Running C program..."
	./hello-world

# Run all scripts
test:
	@echo "=== Testing All Hello World Scripts ==="
	@echo ""
	@echo "--- JavaScript ---"
	@node hello-world.js
	@echo ""
	@echo "--- Python ---"
	@python3 hello-world.py | head -10
	@echo ""
	@echo "--- Bash ---"
	@bash hello-world.sh | head -10
	@echo ""
	@echo "--- Perl ---"
	@perl hello-world.pl | head -10
	@echo ""
	@echo "=== All Tests Complete ==="

# Clean compiled files
clean:
	@echo "Cleaning up..."
	@rm -f hello-world
	@echo "Clean complete!"

# Help target
help:
	@echo "Hello World Makefile"
	@echo ""
	@echo "Available targets:"
	@echo "  make hello       - Print Hello, World!"
	@echo "  make greet       - Print multiple greetings"
	@echo "  make greet-name  - Greet a specific name (use NAME=...)"
	@echo "  make greet-loop  - Greet multiple names in a loop"
	@echo "  make hello-c     - Compile and run C program"
	@echo "  make test        - Run all hello world scripts"
	@echo "  make clean       - Remove compiled files"
	@echo "  make help        - Show this help message"
