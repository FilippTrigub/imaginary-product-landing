# Coding Exercises – Python Generators & Itertools

Each exercise focuses on mastering Python's lazy iteration tools. Unless noted, target Python 3.11+ and favor the standard library.

## 1. Chunked Stream Processor
- **Goal:** Convert an unbounded stream (e.g., log lines) into fixed-size batches without loading everything into memory.
- **Task:** Implement `chunked(stream, size)` as a generator that yields tuples of up to `size` items. Accept any iterable/iterator. If the final chunk is smaller, still yield it.
- **Constraints:**
  - Do not import `more_itertools` or third-party helpers.
  - Preserve laziness: only consume items when the caller iterates.
- **Example:**
  ```python
  stream = iter(range(7))
  for batch in chunked(stream, 3):
      print(batch)
  # (0, 1, 2)
  # (3, 4, 5)
  # (6,)
  ```

## 2. Round-Robin Merger
- **Goal:** Evenly interleave multiple iterables regardless of their lengths.
- **Task:** Write `round_robin(*iterables)` that yields one value from each iterable in sequence. When an iterable is exhausted, continue cycling through the remaining ones until all are consumed.
- **Constraints:**
  - Use `collections.deque` (or manual indexing) to track active iterators.
  - Avoid materializing all data.
- **Example:**
  ```python
  list(round_robin('ABC', range(2), [10, 20, 30]))
  # ['A', 0, 10, 'B', 1, 20, 'C', 30]
  ```

## 3. Sliding Window Anomaly Detector
- **Goal:** Scan a numeric stream for windows whose mean exceeds a threshold.
- **Task:** Implement `detect_windows(numbers, size, threshold)` returning a generator of `(index, window_values, mean)` for each triggering window.
- **Constraints:**
  - Maintain `size`-length windows using `collections.deque`.
  - Update the running sum in O(1) per step.
  - The `index` corresponds to the starting position (0-based) of the window.
- **Example:**
  ```python
  data = [1, 5, 9, 2, 8, 3]
  for idx, window, mean in detect_windows(data, 3, 6):
      print(idx, window, mean)
  # 1 (5, 9, 2) 5.333333333333333
  # 2 (9, 2, 8) 6.333333333333333
  ```

## 4. Infinite Fibonacci with Cutoff Wrapper
- **Goal:** Compose generators to build reusable pipelines.
- **Task:**
  1. Implement `fibonacci()` yielding the infinite Fibonacci sequence.
  2. Implement `take_until(predicate, iterable)` that yields items until `predicate(item)` returns `True` (item causing `True` is excluded).
  3. Use both to emit Fibonacci terms strictly less than 10_000.
- **Constraints:**
  - Keep `fibonacci` stateful but iterative (no recursion).
  - Demonstrate usage via a `main()` that prints the resulting numbers on one line.

## 5. Data Pipeline Mini-DSL
- **Goal:** Practice higher-order generators and partial application.
- **Task:** Build a tiny DSL that takes a sequence of transformation callables and applies them lazily.
  - Define `pipe(iterable, *steps)` where each step is a function that accepts an iterator and returns another iterator/generator.
  - Provide three ready-to-use steps: `filter_gt(limit)`, `multiply(factor)`, and `pairwise()` (yields consecutive pairs using `itertools.tee`).
  - Demonstrate `pipe(range(1, 10), filter_gt(3), multiply(2), pairwise())` producing `((8, 10), (10, 12), (12, 14))`.
- **Stretch:** Add your own custom step (e.g., running average) and explain when it is beneficial.

## Suggested Validation
- Write unit tests with `pytest` covering edge cases such as empty inputs, size=1 windows, and massive iterables simulated via `itertools.repeat`.
- Profile memory usage on large streams (10M items) to ensure generators stay lazy.
- Use `mypy --strict` to confirm type hints for public functions.
