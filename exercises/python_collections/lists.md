# Lists – Build, Slice, Sort

## Exercise 1 – Grocery List Builder
- **Why**: Practice appending and inserting items.
- **Starter**:
  ```python
  groceries = ["apples", "bread"]
  # add your code here
  ```
- **Tasks**:
  1. Append two more items you buy weekly.
  2. Insert "spinach" at index 1.
  3. Print the final list with a friendly label.
- **Stretch**: Ask the user for one custom item and append it.

## Exercise 2 – Countdown Fixer
- **Why**: Reinforce `pop` and `remove`.
- **Starter**:
  ```python
  countdown = ["three", "one", "two", "blastoff"]
  ```
- **Tasks**:
  1. Remove the misplaced "one" and append it to the end.
  2. `pop` the first element and insert it at index 1.
  3. Print the corrected sequence.
- **Stretch**: Turn the list into "THREE" style uppercase using a loop or comprehension.

## Exercise 3 – Daily Temperatures
- **Why**: Get comfortable with slicing and averages.
- **Starter**:
  ```python
  temps = [73, 75, 70, 68, 72, 74, 71]
  ```
- **Tasks**:
  1. Slice out the midweek temps (indexes 2–4) and print them.
  2. Compute the average of the full list (sum ÷ len) and round to 1 decimal.
  3. Print a message comparing day 0 to day 6 (warmer/cooler).
- **Stretch**: Convert any temps below 72 into strings like "70°F (chilly)" using a comprehension.

## Exercise 4 – Playlist Shuffler
- **Why**: Practice swapping and slicing assignment.
- **Starter**:
  ```python
  playlist = ["Intro", "Spark", "Glow", "Rush", "Outro"]
  ```
- **Tasks**:
  1. Swap the first two songs with tuple unpacking.
  2. Replace the middle section (`playlist[2:4]`) with `["Remix", "Acoustic"]`.
  3. Print the updated playlist with numbering (use `enumerate`).
- **Stretch**: Reverse the playlist in place and print again.

## Exercise 5 – Even Squares Warm‑Up
- **Why**: Quick intro to list comprehensions.
- **Starter**:
  ```python
  nums = list(range(1, 11))
  ```
- **Tasks**:
  1. Build `even_squares` containing `n**2` for even numbers only.
  2. Print both lists to show the transformation.
  3. Ensure the result uses a single list comprehension line.
- **Stretch**: Turn the comprehension into a generator expression and sum it.

## Exercise 6 – Packing Station
- **Why**: Combine sorting, counting, and mutation.
- **Starter**:
  ```python
  boxes = ["S", "L", "M", "S", "XL", "M", "L"]
  ```
- **Tasks**:
  1. Count how many times each size appears using `boxes.count()`.
  2. Sort the list from smallest to largest (`S < M < L < XL`). Hint: use `key` with a dictionary lookup.
  3. Remove duplicates while keeping the sorted order (build a new list).
- **Stretch**: Ask the user for a missing size and insert it in the correct position automatically.
