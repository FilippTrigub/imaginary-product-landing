#!/usr/bin/awk -f
# Hello World in AWK

BEGIN {
    # Simple print
    print "Hello, World!"
    
    # Using printf
    printf "Hello, %s!\n", "World"
    
    # Using variables
    greeting = "Hello"
    target = "World"
    print greeting ", " target "!"
    
    # Using string concatenation
    message = "Hello" ", " "World" "!"
    print message
    
    # Using split and join
    split("Hello,World!", parts, ",")
    print parts[1] ", " parts[2] "!"
    
    # Using substr
    full = "Hello, World!"
    print substr(full, 1, length(full))
    
    # Using gsub
    text = "Goodbye, Universe!"
    gsub(/Goodbye/, "Hello", text)
    gsub(/Universe/, "World", text)
    print text
    
    # Using array
    words[1] = "Hello"
    words[2] = "World"
    print words[1] ", " words[2] "!"
}
