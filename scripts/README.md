This folder contains small "Hello, world!" programs and a runner.

Files:

- `hello.sh` — Bash script
- `hello.py` — Python 3 script
- `hello.js` — Node.js script
- `hello.rb` — Ruby script
- `hello.go` — Go program
- `Hello.java` — Java program
- `hello.c` — C program

Runner:

- `run-all.sh` — Attempts to run each example if the required tool is available on the system.

Usage:

- Run all available examples: `./run-all.sh`
- Run an individual example directly, e.g. `python3 scripts/hello.py` or `node scripts/hello.js`.

Note: Some languages (Go, Java, C) require compilers/runtime to be installed; `run-all.sh` will skip missing tools.
