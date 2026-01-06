#!/bin/sed -f
# Hello World in sed

# This sed script transforms input or generates output
# Run with: echo "" | sed -f hello-world.sed

1 {
    i\
Hello, World!\
Hello from sed!\
\
=== sed Hello World ===\
\
Greetings:\
- Hello, Alice!\
- Hello, Bob!\
- Hello, Charlie!\
\
=== sed Hello World Complete ===
}
