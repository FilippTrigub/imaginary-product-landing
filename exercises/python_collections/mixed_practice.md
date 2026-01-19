# Mixed Practice – Mini Projects

## Exercise 1 – Study Planner
- **Scenario**: You want to spread topics across days without repeating too soon.
- **Starter**:
  ```python
  topics = ["loops", "functions", "lists", "dicts", "sets"]
  days = ("Mon", "Tue", "Wed", "Thu", "Fri")
  ```
- **Tasks**:
  1. Pair each day with a topic using `zip` and print the plan.
  2. If topics run out, start again from the beginning (hint: modulo indexing).
  3. Create a dict `plan_by_day` for quick lookups.
- **Stretch**: Let the user input an extra weekend day and generate a plan automatically.

## Exercise 2 – Bug Tracker Digest
- **Scenario**: Merge duplicate bug reports and sort by severity.
- **Starter**:
  ```python
  bug_reports = [
      ("UI glitch", "low"),
      ("Crash on load", "critical"),
      ("UI glitch", "medium"),
      ("Latency spike", "high"),
  ]
  ```
- **Tasks**:
  1. Aggregate severities per title using a dictionary of sets.
  2. Convert the result into a list of tuples `(title, sorted_severities)`.
  3. Sort the digest so `critical` bugs appear first (create a custom priority dict).
- **Stretch**: Format the digest like release notes for copy/paste.

## Exercise 3 – Onboarding Checklist
- **Scenario**: Track which tasks each new hire completed.
- **Starter**:
  ```python
  all_tasks = {"email", "badge", "laptop", "orientation"}
  employees = {
      "Riya": {"email", "badge"},
      "Noel": {"email", "badge", "laptop"},
      "Amir": {"email"},
  }
  ```
- **Tasks**:
  1. Build a report dict mapping each name to missing tasks (set difference).
  2. Print lines like `Noel is missing: orientation` (or `all set!`).
  3. Count how many people finished everything.
- **Stretch**: Flag any task that *nobody* has completed yet.

## Exercise 4 – Snack Bar Inventory
- **Scenario**: Track stock with list + dict combo.
- **Starter**:
  ```python
  menu = [
      ("espresso", 3.5),
      ("tea", 2.5),
      ("muffin", 4.0),
  ]
  stock = {"espresso": 8, "tea": 12, "muffin": 5}
  ```
- **Tasks**:
  1. Build a list of strings `"espresso — $3.50 (8 left)"` using data from both collections.
  2. Let the user pick an item and quantity; update `stock` if enough inventory exists.
  3. Print the updated stock sorted alphabetically.
- **Stretch**: Keep a running cart list of tuples `(item, qty, total_price)`.

## Exercise 5 – Mini Leaderboard
- **Scenario**: Combine points from multiple rounds.
- **Starter**:
  ```python
  rounds = [
      {"Jules": 10, "Kai": 8},
      {"Jules": 7, "Mira": 9},
      {"Kai": 12, "Mira": 6},
  ]
  ```
- **Tasks**:
  1. Initialize an empty dict `totals`.
  2. Loop through each round dict and add scores per player.
  3. Produce a sorted list of `(player, total_points)` descending.
- **Stretch**: Detect ties and label them when printing (e.g., `Kai — 20 pts (tie)`).

## Exercise 6 – Shipment Manifest
- **Scenario**: Combine tuple manifests and deduplicate destinations.
- **Starter**:
  ```python
  manifests = [
      ("A1", ["NYC", "LA"]),
      ("B2", ["Denver", "NYC"]),
      ("C3", ["Miami"]),
  ]
  ```
- **Tasks**:
  1. Build a set of all unique destinations across manifests.
  2. Create a dict mapping each destination to the list of shipment IDs that visit it.
  3. Print a summary ordered by destination name.
- **Stretch**: Convert the dict into a list sorted by number of shipments descending.
