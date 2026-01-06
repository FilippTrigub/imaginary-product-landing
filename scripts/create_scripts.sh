#!/usr/bin/env bash
set -euo pipefail

# Create a Bash script
cat > hello_world.sh <<'BASH_EOF'
#!/usr/bin/env bash
# Simple Hello World in bash
echo "Hello from bash: $(whoami)"
BASH_EOF

# Create a Python script
cat > hello_world.py <<'PY_EOF'
#!/usr/bin/env python3
# Simple Hello World in Python
import getpass
print(f"Hello from python: {getpass.getuser()}")
PY_EOF

# Create a Node script
cat > hello_world.js <<'NODE_EOF'
#!/usr/bin/env node
// Simple Hello World in Node
console.log(`Hello from node: ${process.env.USER || 'unknown'}`)
NODE_EOF

# Create a verification script
cat > verify_scripts.sh <<'VERIFY_EOF'
#!/usr/bin/env bash
set -euo pipefail

echo "Running hello_world.sh"
./hello_world.sh

echo "Running hello_world.py"
python3 hello_world.py

echo "Running hello_world.js"
node hello_world.js

VERIFY_EOF

# Make scripts executable
chmod +x hello_world.sh hello_world.py hello_world.js verify_scripts.sh

echo "Scripts created: hello_world.(sh|py|js) and verify_scripts.sh"
