# Dictionaries & Sets – Count, Look Up, Deduplicate

## Exercise 1 – Favorite Flavors Poll
- **Why**: Build a frequency dictionary.
- **Starter**:
  ```python
  votes = ["vanilla", "chocolate", "mint", "vanilla", "strawberry", "mint"]
  ```
- **Tasks**:
  1. Create an empty dict `tally = {}`.
  2. Loop through `votes` and increment counts using `dict.get`.
  3. Print the tally sorted by most popular flavor.
- **Stretch**: Convert the result into a list of `(flavor, percent)` tuples.

## Exercise 2 – Contact Lookup
- **Why**: Practice dictionary access and updates.
- **Starter**:
  ```python
  contacts = {
      "Avery": "avery@nova.io",
      "Blake": "blake@nova.io",
  }
  ```
- **Tasks**:
  1. Add a new entry for "Cara".
  2. Update Avery's email to use the domain `@novasphere.com`.
  3. Safely look up "Devon" using `.get` with a fallback message.
- **Stretch**: Prompt the user for a name, casefold it, and look it up regardless of capitalization.

## Exercise 3 – Word Deduper
- **Why**: Sets remove duplicates instantly.
- **Starter**:
  ```python
  sentence = "holograms feel real when real people share holograms"
  ```
- **Tasks**:
  1. Split the sentence and convert to a set.
  2. Print the unique words sorted alphabetically.
  3. Report how many duplicates were removed overall.
- **Stretch**: Preserve original order using a loop and membership checks instead of `set`.

## Exercise 4 – Inventory Merge
- **Why**: Combine dicts and handle missing keys.
- **Starter**:
  ```python
  primary = {"Aurora": 12, "Nebula": 5}
  incoming = {"Nebula": 7, "Lumen": 4}
  ```
- **Tasks**:
  1. Copy `primary` into `inventory` so the original stays intact.
  2. Loop through `incoming.items()` and add quantities (sum if the key exists).
  3. Print `Aurora: 12 units` style lines sorted by product name.
- **Stretch**: Track which items were new versus updated in two separate lists.

## Exercise 5 – Tag Suggestions
- **Why**: Set intersections show overlaps.
- **Starter**:
  ```python
  base_tags = {"ai", "vr", "ui", "future"}
  article_tags = {"ai", "ethics", "research"}
  ```
- **Tasks**:
  1. Find the intersection and print matching tags.
  2. Find tags the article is missing from the base set.
  3. Recommend three total tags by combining intersection + missing.
- **Stretch**: Convert the set operations into reusable functions.

## Exercise 6 – Nested Dictionaries
- **Why**: Practice complex lookups.
- **Starter**:
  ```python
  dashboard = {
      "traffic": {"today": 1200, "yesterday": 1100},
      "sales": {"today": 45, "yesterday": 38},
  }
  ```
- **Tasks**:
  1. Print the metrics with formatted strings like `traffic: +9.1% vs yesterday`.
  2. Handle division-by-zero if yesterday's value is 0.
  3. Add a new metric `support` with fake data and include it in the loop.
- **Stretch**: Extract the logic into a function that returns a summary list for any similar dict.
