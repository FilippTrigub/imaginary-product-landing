#!/usr/bin/awk -f
# Hello World using AWK's exotic features

BEGIN {
    # Using coprocess (if supported)
    cmd = "echo 'Hello, World!'"
    cmd | getline result
    close(cmd)
    print result
    
    # Using ENVIRON
    ENVIRON["HELLO"] = "Hello, World!"
    print ENVIRON["HELLO"]
    
    # Using arrays as hash maps
    hash["greeting"] = "Hello"
    hash["target"] = "World"
    for (key in hash) {
        printf "%s ", hash[key]
    }
    print "!"
    
    # Using field splitting
    $0 = "Hello World"
    print $1 ", " $2 "!"
    
    # Using RS and RT
    RS = ","
    text = "Hello,World!"
    split(text, parts, RS)
    print parts[1] ", " parts[2]
    
    # Using match and substr
    text = "Say Hello, World! loudly"
    if (match(text, /Hello, World!/)) {
        print substr(text, RSTART, RLENGTH)
    }
    
    # Using ternary operator
    x = 1
    print x ? "Hello, World!" : "Goodbye"
    
    # Using getline from string
    "echo Hello, World!" | getline msg
    print msg
    
    # Using system() return value
    system("echo 'Hello, World!'")
    
    # Using OFMT for number formatting
    OFMT = "%.0f"
    codes = "72 101 108 108 111 44 32 87 111 114 108 100 33"
    split(codes, arr, " ")
    for (i in arr) {
        printf "%c", arr[i]
    }
    print ""
    
    # Using strftime (if available)
    # print strftime("Hello, World! - %Y-%m-%d")
    
    # Using ARGC and ARGV simulation
    ARGV[0] = "Hello"
    ARGV[1] = "World"
    print ARGV[0] ", " ARGV[1] "!"
}
