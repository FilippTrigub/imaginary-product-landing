#!/usr/bin/awk -f
# AWK Hello World Script
# Demonstrating various AWK programming techniques

BEGIN {
    # Simple print
    print "Hello, World!"
    
    # Using printf
    printf "Hello, World!\n"
    
    # Using variables
    greeting = "Hello"
    target = "World"
    print greeting ", " target "!"
    
    # Using functions
    greet("World")
    greet("AWK")
    
    # Using arrays
    names[1] = "World"
    names[2] = "AWK"
    names[3] = "Universe"
    
    for (i = 1; i <= 3; i++) {
        print "Hello, " names[i] "!"
    }
    
    # Using string functions
    message = "hello, world!"
    print toupper(message)
    
    # Using conditional
    for (i = 1; i <= 3; i++) {
        if (i == 1)
            print "Hello, World! (first)"
        else if (i == 2)
            print "Hello, World! (second)"
        else
            print "Hello, World! (third)"
    }
    
    # Using sprintf
    formatted = sprintf("Hello, %s!", "World")
    print formatted
    
    # Pattern matching
    text = "Hello, World!"
    if (text ~ /World/)
        print "Found: " text
    
    # Using gsub for substitution
    text = "Hello, World!"
    gsub(/World/, "AWK", text)
    print text
}

# Function definition
function greet(name) {
    print "Hello, " name "!"
}
