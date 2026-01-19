#!/usr/bin/env bash
set -euo pipefail

here="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

"$here/hello.sh"
"$here/hello.js"
"$here/hello.py"

