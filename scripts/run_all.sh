#!/bin/bash

/ vercel/sandbox/scripts/hello.sh
node /vercel/sandbox/scripts/hello.js
python3 /vercel/sandbox/scripts/hello.py

# ruby may not be installed in the environment
if command -v ruby >/dev/null 2>&1; then
  ruby /vercel/sandbox/scripts/hello.rb
else
  echo "Ruby not installed; skipping Ruby script."
fi
