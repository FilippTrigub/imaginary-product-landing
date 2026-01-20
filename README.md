# NovaSphere - The Future of Personal Computing

This repository contains the landing page for NovaSphere, an imaginary product that features holographic interfaces and advanced computing technologies.

## Python Coding Challenges

1. **Quantum Path Optimizer** – Given a weighted directed graph representing energy pathways inside a NovaSphere core, write a function `optimize_path(graph, start, end)` that returns the minimum-energy route while respecting a maximum hop count `k`. If no route stays within `k` hops, raise a custom `NoRouteError`.
2. **Hologram Render Budgeting** – Implement `allocate_frames(effects, budget)` where `effects` is a list of `(name, cost, impact)` tuples. Return the subset of effects that maximizes total impact without exceeding the render budget. Break ties by favoring the lexicographically smallest set of effect names.
3. **Temporal Input Debouncer** – Create an async decorator `@debounce(delay_ms)` that ensures a coroutine handling gesture events ignores rapid repeats within `delay_ms`. Demonstrate usage on an `async def handle_swipe(event)` function and ensure concurrent swipes are correctly awaited.
4. **Adaptive Ambient Controller** – Build a class `AmbientController` that ingests live sensor readings (`lux`, `temperature`, `occupancy`) and outputs target hologram brightness and hue. Include methods to calibrate baselines, apply exponential smoothing, and serialize the current state to JSON.
5. **Predictive Cache Simulator** – Simulate a predictive cache with `prefetch(cache_size, requests)` that uses a Markov chain (order 1) trained on request history to decide the next item to cache. Report cache hits, misses, and the evolving transition model after processing the sequence.
