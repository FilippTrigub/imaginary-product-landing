# Tuples & Unpacking – Keep It Organized

## Exercise 1 – Coordinate Tracker
- **Why**: Represent immutable x/y points.
- **Starter**:
  ```python
  origin = (0, 0)
  checkpoint = (12, -4)
  ```
- **Tasks**:
  1. Unpack `checkpoint` into `x, y` variables and print them.
  2. Create a new tuple `delta = (checkpoint[0] - origin[0], checkpoint[1] - origin[1])`.
  3. Print a formatted string: `Moved +12 on x, -4 on y`.
- **Stretch**: Write a helper `format_point(point)` that returns `"(x, y)"` strings.

## Exercise 2 – Swapping Seats
- **Why**: Classic tuple swap pattern.
- **Starter**:
  ```python
  row = ["Alice", "empty", "Bob"]
  ```
- **Tasks**:
  1. Use tuple unpacking to swap "Alice" and "Bob" without a temp variable.
  2. Replace the center seat with "Reserved".
  3. Print the updated row.
- **Stretch**: Convert the row to a tuple after seating is final.

## Exercise 3 – Returning Multiple Values
- **Why**: Practice functions that return tuples.
- **Starter**:
  ```python
  def min_max_avg(scores):
      # your code
      return (
  ```
- **Tasks**:
  1. Complete the function so it returns `(min_score, max_score, average)`.
  2. Call it with `[88, 92, 79, 95, 85]` and unpack the result.
  3. Print a message referencing each value.
- **Stretch**: Make average accept keyword-only `precision=1` and round accordingly.

## Exercise 4 – Tuple Catalog
- **Why**: Store mixed data per item.
- **Starter**:
  ```python
  products = [
      ("Aurora Lamp", 79.99, "lighting"),
      ("Nebula Speaker", 129.5, "audio"),
      ("Lumen Tablet", 449.0, "computing"),
  ]
  ```
- **Tasks**:
  1. Loop through `products` and unpack `(name, price, category)` inside the loop.
  2. Print a formatted catalog line like `Aurora Lamp — $79.99 (lighting)`.
  3. Build a list of just the categories using a comprehension.
- **Stretch**: Sort products by price descending without editing the original list.

## Exercise 5 – Zipping Schedules
- **Why**: Combine related sequences.
- **Starter**:
  ```python
  days = ("Mon", "Tue", "Wed")
  tasks = ["Plan", "Build", "Review"]
  owners = ("Sam", "Kai", "Jules")
  ```
- **Tasks**:
  1. Use `zip` to pair each day with (task, owner) tuples.
  2. Build a list of strings like `Mon: Plan (Sam)`.
  3. Print the plan line-by-line.
- **Stretch**: Detect when sequences differ in length and warn the user.

## Exercise 6 – Nested Unpacking
- **Why**: Practice destructuring deeper structures.
- **Starter**:
  ```python
  metrics = ("traffic", (1200, 1350, 1500))
  ```
- **Tasks**:
  1. Unpack into `name, (week1, week2, week3)`.
  2. Compute weekly change percentages relative to `week1`.
  3. Print `traffic grew +12.5% week over week` style lines.
- **Stretch**: Generalize into a function that accepts any `(label, (a, b, c))` tuple.
