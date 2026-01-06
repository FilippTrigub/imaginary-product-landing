#!/usr/bin/awk -f
# Hello World in AWK

BEGIN {
    # Basic print
    print "Hello, World!"
    
    # Using variables
    name = "World"
    print "Hello, " name "!"
    
    # Using printf
    printf "Hello, %s!\n", "AWK"
    
    # Array
    names[1] = "Alice"
    names[2] = "Bob"
    names[3] = "Charlie"
    
    for (i = 1; i <= 3; i++) {
        print "Hello, " names[i] "!"
    }
    
    # Associative array
    greetings["english"] = "Hello"
    greetings["spanish"] = "Hola"
    greetings["french"] = "Bonjour"
    
    for (lang in greetings) {
        print greetings[lang] ", World! (" lang ")"
    }
    
    # Function call
    greet("AWK")
    
    # Conditional
    hour = 14
    if (hour < 12) {
        print "Good morning, World!"
    } else if (hour < 18) {
        print "Good afternoon, World!"
    } else {
        print "Good evening, World!"
    }
    
    # Loop
    for (i = 1; i <= 3; i++) {
        print "Hello, World! (iteration " i ")"
    }
    
    print "\n=== AWK Hello World Complete ==="
}

# Function definition
function greet(name) {
    if (name == "") {
        name = "World"
    }
    print "Hello, " name " (from function)!"
}
