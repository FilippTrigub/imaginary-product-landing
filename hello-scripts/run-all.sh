#!/usr/bin/env bash
set -euo pipefail

here="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

run() {
  local label="$1"
  shift
  printf -- '--- %s ---\n' "$label"
  "$@"
}

run "bash" bash "$here/hello.sh"
run "python" python3 "$here/hello.py"
run "node" node "$here/hello.js"

if command -v ruby >/dev/null 2>&1; then
  run "ruby" ruby "$here/hello.rb"
else
  printf -- '--- ruby ---\n(ruby not installed)\n'
fi

run "awk" awk -f "$here/hello.awk"
run "perl" perl "$here/hello.pl"
