Hello World scripts

Run the scripts directly if you have the runtime installed. Examples:

  bash scripts/hello.sh
  python3 scripts/hello.py
  node scripts/hello.js
  perl scripts/hello.pl
  ruby scripts/hello.rb

Some scripts are executable; to make all scripts executable run:

  chmod +x scripts/*

TypeScript source `hello.ts` is a plain file — use `ts-node` to run it, or compile with `tsc`.

Each script will print "Hello, world!" or "Hello, <args>!" if you pass arguments.
