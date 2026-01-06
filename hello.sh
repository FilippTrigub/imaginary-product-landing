#!/usr/bin/env bash

set -euo pipefail

usage() {
  cat <<'EOF'
Usage: ./hello.sh [--name NAME] [--count N]

Prints a friendly "hello" plus a few useful details.

Options:
  --name NAME   Name to greet (default: world)
  --count N     Number of times to greet (default: 1)
  -h, --help    Show this help
EOF
}

name="world"
count=1

while (($#)); do
  case "$1" in
    --name)
      name="${2:-}"
      shift 2
      ;;
    --count)
      count="${2:-}"
      shift 2
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      echo "Unknown argument: $1" >&2
      echo >&2
      usage >&2
      exit 2
      ;;
  esac
done

if [[ -z "$name" ]]; then
  echo "--name requires a non-empty value" >&2
  exit 2
fi

if ! [[ "$count" =~ ^[0-9]+$ ]] || ((count < 1)); then
  echo "--count must be a positive integer" >&2
  exit 2
fi

for ((i=1; i<=count; i++)); do
  printf 'Hello, %s! (%d/%d)\n' "$name" "$i" "$count"
done

host="unknown"
if command -v hostname >/dev/null 2>&1; then
  host="$(hostname)"
elif [[ -r /etc/hostname ]]; then
  host="$(cat /etc/hostname)"
fi

cat <<EOF

Details:
- Time:     $(date -Is)
- Host:     $host
- User:     ${USER:-unknown}
- Dir:      $(pwd)
- Shell:    ${SHELL:-unknown}
EOF
