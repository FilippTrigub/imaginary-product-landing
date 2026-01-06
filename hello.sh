#!/bin/bash

###############################################################################
# Hello World Shell Script
# NovaSphere Project
###############################################################################

# Simple Hello World
echo "Hello World!"

# Styled Hello World with colors
echo -e "\n\033[1;36m╔════════════════════════════════════╗\033[0m"
echo -e "\033[1;36m║                                    ║\033[0m"
echo -e "\033[1;36m║        \033[1;35mHello World!\033[1;36m               ║\033[0m"
echo -e "\033[1;36m║                                    ║\033[0m"
echo -e "\033[1;36m║   Welcome to NovaSphere Project    ║\033[0m"
echo -e "\033[1;36m║                                    ║\033[0m"
echo -e "\033[1;36m╚════════════════════════════════════╝\033[0m"

# Hello World with timestamp
echo -e "\n[$(date '+%Y-%m-%d %H:%M:%S')] Hello World from Bash!"

# Hello World in different languages
echo -e "\n🌍 Hello World in Multiple Languages:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "English        : Hello World!"
echo "Spanish        : ¡Hola Mundo!"
echo "French         : Bonjour le monde!"
echo "German         : Hallo Welt!"
echo "Italian        : Ciao Mondo!"
echo "Japanese       : こんにちは世界！"
echo "Chinese        : 你好世界！"
echo "Russian        : Привет мир!"

# System information
echo -e "\n💻 System Information:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Hostname       : $(hostname)"
echo "OS             : $(uname -s)"
echo "Kernel         : $(uname -r)"
echo "Architecture   : $(uname -m)"
echo "Current User   : $(whoami)"
echo "Current Dir    : $(pwd)"
echo "Shell          : $SHELL"

# ASCII Art Hello World
echo -e "\n🎨 ASCII Art:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
cat << "EOF"
 _   _      _ _        __        __         _     _ _ 
| | | | ___| | | ___   \ \      / /__  _ __| | __| | |
| |_| |/ _ \ | |/ _ \   \ \ /\ / / _ \| '__| |/ _` | |
|  _  |  __/ | | (_) |   \ V  V / (_) | |  | | (_| |_|
|_| |_|\___|_|_|\___/     \_/\_/ \___/|_|  |_|\__,_(_)
EOF

echo -e "\n✨ Script completed successfully!\n"
