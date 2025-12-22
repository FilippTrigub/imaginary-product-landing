#!/usr/bin/env bash
set -euo pipefail

# Interactive, animated Hello World

cleanup() {
  # restore cursor
  tput cnorm 2>/dev/null || true
  printf '\n'
}
trap cleanup EXIT INT TERM

typing_print() {
  local text="$1"
  local delay=${2:-0.04}
  local i
  for ((i=0; i<${#text}; i++)); do
    printf '%s' "${text:i:1}"
    sleep "$delay"
  done
  printf '\n'
}

spinner() {
  # spinner while background PID is running
  local pid=$1
  local delay=${2:-0.08}
  local spin=("|" "/" "-" "\\")
  tput civis 2>/dev/null || true
  while kill -0 "$pid" 2>/dev/null; do
    for c in "${spin[@]}"; do
      printf '\r%s' "$c"
      sleep "$delay"
    done
  done
  printf '\r' # clear spinner
  tput cnorm 2>/dev/null || true
}

bold() { tput bold 2>/dev/null || true; }
reset_style() { tput sgr0 2>/dev/null || true; }
color() { tput setaf "$1" 2>/dev/null || true; }

printf "\n"
color 6; bold
typing_print "Welcome to the interactive Hello!" 0.03
reset_style

read -rp $'What\'s your name? ' name
name=${name:-Friend}

echo
printf "Choose animation speed:\n"
printf "  1) Slow\n  2) Normal\n  3) Fast\n"
read -rp "Enter 1, 2 or 3 (default 2): " speed_choice
case "$speed_choice" in
  1) char_delay=0.08; spin_delay=0.12;;
  3) char_delay=0.01; spin_delay=0.03;;
  *) char_delay=0.04; spin_delay=0.06;;
esac

printf "\nPreparing your greeting "
# spin while sleeping in background to simulate work
( sleep 1.6 ) &
bg=$!
spinner "$bg" "$spin_delay"

printf "\n\n"
color 2; bold
typing_print "Hello, $name!" "$char_delay"
reset_style

# Decorative animated message
color 3; bold
typing_print "Here's a little wave for you: " 0.02
reset_style
for i in {1..3}; do
  printf "~"
  sleep 0.25
done
printf "\n\n"
reset_style

typing_print "Have a great day!" 0.03

