#!/usr/bin/env bash
# Simple Hello World in bash
set -euo pipefail

if [ ${#} -gt 0 ]; then
  echo "Hello, $*!"
else
  echo "Hello, world!"
fi
