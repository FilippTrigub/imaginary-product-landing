#!/usr/bin/env python3
"""Simple Hello World in Python"""
import sys

if len(sys.argv) > 1:
    print("Hello, {}!".format(' '.join(sys.argv[1:])))
else:
    print("Hello, world!")
