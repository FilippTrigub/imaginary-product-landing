#!/usr/bin/env bash

say_hello() {
    local name=${1:-World}
    echo "Hello, ${name}!"
}

if [[ "${BASH_SOURCE[0]}" == "$0" ]]; then
    say_hello "$@"
fi
