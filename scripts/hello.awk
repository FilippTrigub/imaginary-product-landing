#!/usr/bin/env awk -f

BEGIN {
  if (ARGC > 1) {
    msg = ""
    for (i = 1; i < ARGC; i++) {
      if (i > 1) {
        msg = msg " "
      }
      msg = msg ARGV[i]
    }
    print "Hello, " msg "!"
  } else {
    print "Hello, world!"
  }
  exit
}
