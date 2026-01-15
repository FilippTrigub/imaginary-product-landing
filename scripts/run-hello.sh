#!/usr/bin/env bash

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo '[bash]'
bash "$SCRIPT_DIR/hello.sh"

echo '[node]'
node "$SCRIPT_DIR/hello.js"

if command -v python3 >/dev/null 2>&1; then
  echo '[python]'
  python3 "$SCRIPT_DIR/hello.py"
else
  echo '[python] python3 not found; skipping'
fi

echo '[html] Open scripts/hello.html in a browser to view.'
