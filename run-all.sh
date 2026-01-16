#!/usr/bin/env bash
set -euo pipefail

echo "Running hello-world scripts..."
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SCRIPTS_DIR="$DIR/scripts"

# bash
if command -v bash >/dev/null 2>&1; then
  echo "--- bash ---"
  bash "$SCRIPTS_DIR/hello.sh"
fi

# python3
if command -v python3 >/dev/null 2>&1; then
  echo "--- python3 ---"
  python3 "$SCRIPTS_DIR/hello.py"
fi

# node
if command -v node >/dev/null 2>&1; then
  echo "--- node ---"
  node "$SCRIPTS_DIR/hello.js"
fi

# ruby
if command -v ruby >/dev/null 2>&1; then
  echo "--- ruby ---"
  ruby "$SCRIPTS_DIR/hello.rb"
fi

# go
if command -v go >/dev/null 2>&1; then
  echo "--- go ---"
  (cd "$SCRIPTS_DIR" && go run hello.go)
fi

# java
if command -v javac >/dev/null 2>&1 && command -v java >/dev/null 2>&1; then
  echo "--- java ---"
  (cd "$SCRIPTS_DIR" && javac Hello.java && java Hello)
fi

# c
if command -v gcc >/dev/null 2>&1; then
  echo "--- c ---"
  (cd "$SCRIPTS_DIR" && gcc hello.c -o hello_c && ./hello_c)
fi

echo "Done."
