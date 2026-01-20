# NovaSphere Coding Challenges

A collection of 5 Python coding challenges designed for the NovaSphere project. These challenges range from beginner to intermediate-advanced difficulty levels and feature real-world scenarios within the NovaSphere ecosystem.

## Overview

All challenges are implemented in `coding_challenges.py` with complete function signatures, detailed docstrings, example usage, and test cases.

---

## Challenge 1: Holographic Display Brightness Calculator ⭐ Beginner

**File:** `coding_challenges.py` - Lines 22-38

### Problem
The NovaSphere holographic display system needs intelligent brightness control based on ambient light conditions.

### Your Task
Implement `calculate_brightness(ambient_light)` that:
- Takes ambient light level (0-100) as input
- Returns recommended display brightness (0-100)
- Uses formula: `brightness = (ambient_light * 1.2)` if ambient_light < 50, else `(100 - (ambient_light - 50) * 0.5)`
- Clamps result between 0-100

### Test Cases
```python
calculate_brightness(30)   # Expected: 36.0
calculate_brightness(75)   # Expected: 87.5
calculate_brightness(0)    # Expected: 0
calculate_brightness(100)  # Expected: 75.0
```

### Skills Tested
- Basic arithmetic
- Conditional logic
- Function implementation
- Input validation

---

## Challenge 2: Gesture Recognition Pattern Matcher ⭐⭐ Beginner-Intermediate

**File:** `coding_challenges.py` - Lines 52-90

### Problem
NovaSphere's gesture recognition system needs to interpret user hand movements from coordinate sequences.

### Your Task
Implement `detect_gesture(coordinates)` that:
- Takes list of (x, y) coordinate tuples
- Detects gesture type and returns:
  - `"SWIPE_RIGHT"`: x coordinates strictly increasing
  - `"SWIPE_LEFT"`: x coordinates strictly decreasing
  - `"SWIPE_UP"`: y coordinates strictly increasing
  - `"SWIPE_DOWN"`: y coordinates strictly decreasing
  - `"TAP"`: all points within distance 10 of first point
  - `"UNKNOWN"`: no pattern match
- Requires at least 2 points

### Test Cases
```python
detect_gesture([(0, 0), (10, 0), (20, 0)])    # Expected: "SWIPE_RIGHT"
detect_gesture([(20, 0), (10, 0), (0, 0)])    # Expected: "SWIPE_LEFT"
detect_gesture([(0, 0), (0, 10), (0, 20)])    # Expected: "SWIPE_UP"
detect_gesture([(5, 5), (6, 5), (5, 6)])      # Expected: "TAP"
detect_gesture([(0, 0), (10, 10), (5, 15)])   # Expected: "UNKNOWN"
```

### Skills Tested
- List comprehension
- Coordinate geometry (distance formula)
- Pattern recognition
- Conditional logic with multiple branches

---

## Challenge 3: Quantum Data Encryption Level Validator ⭐⭐ Intermediate

**File:** `coding_challenges.py` - Lines 104-133

### Problem
NovaSphere uses multi-level encryption for quantum data protection. Validate password strength.

### Your Task
Implement `validate_encryption_level(password)` that returns the highest encryption level met:

| Level | Requirements |
|-------|--------------|
| 1 | At least 6 characters |
| 2 | At least 8 chars + at least 1 digit |
| 3 | At least 10 chars + uppercase + lowercase + digit |
| 4 | At least 12 chars + uppercase + lowercase + digit + special char (!@#$%^&*) |

### Test Cases
```python
validate_encryption_level("abc123")        # Expected: 1
validate_encryption_level("Password1")     # Expected: 2
validate_encryption_level("SecureP@ss1")   # Expected: 3
validate_encryption_level("short")         # Expected: 0
```

### Skills Tested
- String methods (isdigit, isupper, islower)
- Character classification
- Multi-level validation logic
- Cumulative requirement checking

---

## Challenge 4: Hologram Energy Consumption Optimizer ⭐⭐ Intermediate

**File:** `coding_challenges.py` - Lines 147-210

### Problem
NovaSphere holograms consume energy based on their properties. Analyze and optimize energy consumption.

### Your Task
Implement `optimize_hologram_energy(holograms)` that:
- Takes list of hologram dictionaries with: `name`, `resolution` (1-4), `duration` (ms), `transparency` (0.0-1.0)
- Calculates energy per hologram: `(resolution * 10) + (duration / 100) + (transparency * 5)`
- Returns dictionary with:
  - `total_energy`: sum of all hologram energy
  - `average_energy`: energy per hologram average
  - `most_expensive`: name of highest energy hologram
  - `savings_potential`: optimization potential value

### Test Cases
```python
holograms = [
    {'name': 'Avatar', 'resolution': 4, 'duration': 5000, 'transparency': 0.9},
    {'name': 'Interface', 'resolution': 2, 'duration': 3000, 'transparency': 0.5}
]
result = optimize_hologram_energy(holograms)
# Expected: total_energy=147.0, average_energy=73.5, most_expensive='Avatar'
```

### Skills Tested
- Dictionary manipulation
- List iteration and aggregation
- Complex calculations
- Data analysis
- max() with key parameter

---

## Challenge 5: Temporal Data Stream Analyzer ⭐⭐⭐ Intermediate-Advanced

**File:** `coding_challenges.py` - Lines 224-289

### Problem
NovaSphere quantum sensors produce temporal data streams requiring statistical analysis.

### Your Task
Implement `analyze_data_stream(data)` that returns dictionary with:
- `count`: number of data points
- `sum`: total of all values
- `average`: mean value
- `median`: middle value (handles both odd and even length lists)
- `min`/`max`: minimum and maximum values
- `variance`: measure of data spread
- `trend`: "INCREASING", "DECREASING", or "STABLE" (compare first half avg to second half avg)
- `outliers`: values > 2 standard deviations from mean

### Test Cases
```python
analyze_data_stream([1, 2, 3, 4, 5, 100])
# Expected: count=6, average≈19.17, median=3.5, trend="INCREASING", outliers=[100]

analyze_data_stream([10, 10, 10, 10])
# Expected: count=4, average=10, variance=0, trend="STABLE", outliers=[]
```

### Skills Tested
- Statistical calculations
- Standard deviation and variance
- Median calculation (even/odd cases)
- Trend analysis
- Outlier detection
- Edge case handling (empty data)

---

## How to Run

### Run all challenges with tests
```bash
python3 coding_challenges.py
```

### Use individual functions
```python
from coding_challenges import calculate_brightness, detect_gesture

brightness = calculate_brightness(50)
gesture = detect_gesture([(0, 0), (10, 0), (20, 0)])
```

---

## Difficulty Progression

| # | Name | Difficulty | Focus |
|---|------|-----------|-------|
| 1 | Brightness Calculator | ⭐ Beginner | Basic math & conditionals |
| 2 | Gesture Recognition | ⭐⭐ Beginner-Int | Lists & geometry |
| 3 | Encryption Validator | ⭐⭐ Intermediate | String methods & validation |
| 4 | Energy Optimizer | ⭐⭐ Intermediate | Dictionaries & aggregation |
| 5 | Data Stream Analyzer | ⭐⭐⭐ Advanced | Statistics & analysis |

---

## Implementation Complete ✓

All 5 coding challenges are fully implemented with:
- ✓ Detailed problem statements
- ✓ Complete function implementations
- ✓ Comprehensive docstrings
- ✓ Working test cases
- ✓ Example usage
- ✓ Edge case handling
- ✓ Integration with NovaSphere theme

Run `python3 coding_challenges.py` to see all challenges in action!
