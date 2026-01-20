# NovaSphere - The Future of Personal Computing

This repository contains the landing page for NovaSphere, an imaginary product that features holographic interfaces and advanced computing technologies.

## Python Coding Challenges

1. **Hologram Scheduler** – Given a list of holographic projections with start/end timestamps, write a function that returns the minimum number of projectors needed so no sessions overlap. Use an efficient sweep-line or heap-based approach.
2. **Quantum Gesture Decoder** – Implement a decoder that maps hand-gesture sequences (e.g., `['pinch', 'swipe-left', 'tap']`) to commands by traversing a prefix tree. Handle invalid sequences by raising a custom exception.
3. **3D Interface Pathfinding** – Model the NovaSphere UI as a weighted graph where nodes are panels and edges are transition costs. Build a function that finds the cheapest route between any two panels using Dijkstra’s algorithm and returns both the path and cost.
4. **Adaptive Battery Optimizer** – Simulate battery drain events over time and design a class that predicts when to enter power-save mode. The class should expose methods to ingest telemetry samples, compute a rolling average drain rate, and emit alerts when thresholds are crossed.
5. **Haptic Feedback Composer** – Create a DSL parser that takes strings such as `"pulse(5,200)|wave(3,150)|rest(50)"` and produces a sequence of timed haptic instructions. Validate arguments and support extensible effect registrations.
