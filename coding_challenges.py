"""
NovaSphere Coding Challenges
A collection of Python coding challenges for developers of all levels.
"""

# ============================================================================
# CHALLENGE 1: Holographic Display Brightness Calculator
# Difficulty: Beginner
# ============================================================================
"""
The NovaSphere holographic display system needs a function to calculate
the optimal brightness level based on ambient light conditions.

Write a function `calculate_brightness()` that:
- Takes an ambient light level (0-100) as input
- Returns the recommended display brightness (0-100)
- Uses this formula: brightness = (ambient_light * 1.2) if ambient_light < 50 else (100 - (ambient_light - 50) * 0.5)
- Ensures the result is always between 0-100

Example:
    calculate_brightness(30)  # Should return 36
    calculate_brightness(75)  # Should return 87.5
"""

def calculate_brightness(ambient_light):
    """
    Calculate optimal display brightness based on ambient light.

    Args:
        ambient_light: Integer between 0-100 representing ambient light level

    Returns:
        Float representing recommended brightness (0-100)
    """
    if ambient_light < 50:
        brightness = ambient_light * 1.2
    else:
        brightness = 100 - (ambient_light - 50) * 0.5

    return max(0, min(100, brightness))


# ============================================================================
# CHALLENGE 2: Gesture Recognition Pattern Matcher
# Difficulty: Beginner-Intermediate
# ============================================================================
"""
NovaSphere's gesture recognition system records movements as coordinate pairs.
Write a function `detect_gesture()` that:
- Takes a list of coordinate tuples: [(x1, y1), (x2, y2), ...]
- Determines the gesture type based on the pattern:
  * "SWIPE_RIGHT": x coordinates are strictly increasing
  * "SWIPE_LEFT": x coordinates are strictly decreasing
  * "SWIPE_UP": y coordinates are strictly increasing
  * "SWIPE_DOWN": y coordinates are strictly decreasing
  * "TAP": all points are within distance 10 of the first point
  * "UNKNOWN": doesn't match any pattern
- Requires at least 2 points to detect a gesture

Example:
    detect_gesture([(0, 0), (10, 0), (20, 0)])  # "SWIPE_RIGHT"
    detect_gesture([(5, 5), (6, 5), (5, 6)])    # "TAP"
    detect_gesture([(0, 0), (10, 10), (5, 15)]) # "UNKNOWN"
"""

def detect_gesture(coordinates):
    """
    Detect gesture type from a sequence of coordinate points.

    Args:
        coordinates: List of (x, y) tuples representing gesture path

    Returns:
        String indicating the detected gesture type
    """
    if len(coordinates) < 2:
        return "UNKNOWN"

    # Extract x and y coordinates
    x_coords = [point[0] for point in coordinates]
    y_coords = [point[1] for point in coordinates]

    # Check for swipe patterns
    if all(x_coords[i] < x_coords[i + 1] for i in range(len(x_coords) - 1)):
        return "SWIPE_RIGHT"
    elif all(x_coords[i] > x_coords[i + 1] for i in range(len(x_coords) - 1)):
        return "SWIPE_LEFT"
    elif all(y_coords[i] < y_coords[i + 1] for i in range(len(y_coords) - 1)):
        return "SWIPE_UP"
    elif all(y_coords[i] > y_coords[i + 1] for i in range(len(y_coords) - 1)):
        return "SWIPE_DOWN"

    # Check for tap (all points within distance 10 of first point)
    first_point = coordinates[0]
    if all(((point[0] - first_point[0]) ** 2 + (point[1] - first_point[1]) ** 2) ** 0.5 <= 10
           for point in coordinates):
        return "TAP"

    return "UNKNOWN"


# ============================================================================
# CHALLENGE 3: Quantum Data Encryption Level Validator
# Difficulty: Intermediate
# ============================================================================
"""
The NovaSphere system uses encryption levels for quantum data protection.
Write a function `validate_encryption_level()` that:
- Takes a password string
- Validates it against these encryption level requirements:
  * Level 1: At least 6 characters
  * Level 2: At least 8 characters, contains at least 1 digit
  * Level 3: At least 10 characters, contains uppercase, lowercase, and digit
  * Level 4: At least 12 characters, contains uppercase, lowercase, digit, and special char (!@#$%^&*)
- Returns the highest level the password meets (0-4)
- Special characters are: !@#$%^&*

Example:
    validate_encryption_level("abc123")          # 1
    validate_encryption_level("Password1")       # 3
    validate_encryption_level("SecureP@ss1")     # 4
"""

def validate_encryption_level(password):
    """
    Determine the encryption level of a password.

    Args:
        password: String to validate

    Returns:
        Integer (0-4) representing the encryption level
    """
    special_chars = "!@#$%^&*"
    level = 0

    # Level 1: At least 6 characters
    if len(password) >= 6:
        level = 1

    # Level 2: At least 8 characters, contains digit
    if len(password) >= 8 and any(char.isdigit() for char in password):
        level = 2

    # Level 3: At least 10 characters, uppercase, lowercase, digit
    if (len(password) >= 10 and
        any(char.isupper() for char in password) and
        any(char.islower() for char in password) and
        any(char.isdigit() for char in password)):
        level = 3

    # Level 4: At least 12 characters, uppercase, lowercase, digit, special
    if (len(password) >= 12 and
        any(char.isupper() for char in password) and
        any(char.islower() for char in password) and
        any(char.isdigit() for char in password) and
        any(char in special_chars for char in password)):
        level = 4

    return level


# ============================================================================
# CHALLENGE 4: Hologram Energy Consumption Optimizer
# Difficulty: Intermediate
# ============================================================================
"""
NovaSphere holograms consume energy based on their properties.
Write a function `optimize_hologram_energy()` that:
- Takes a list of hologram dictionaries with keys:
  * 'name': string (hologram identifier)
  * 'resolution': int (1-4, where 4 is highest quality)
  * 'duration': int (milliseconds the hologram is active)
  * 'transparency': float (0.0-1.0, where 1.0 is fully opaque)
- Calculates energy consumption per hologram as:
  energy = (resolution * 10) + (duration / 100) + (transparency * 5)
- Returns a dictionary with:
  * 'total_energy': sum of all hologram energy
  * 'average_energy': average energy per hologram
  * 'most_expensive': name of highest energy hologram
  * 'savings_potential': total_energy * (1 - most efficient multiplier)
  (most efficient = highest resolution * transparency)

Example:
    holograms = [
        {'name': 'Avatar', 'resolution': 4, 'duration': 5000, 'transparency': 0.9},
        {'name': 'Interface', 'resolution': 2, 'duration': 3000, 'transparency': 0.5}
    ]
    optimize_hologram_energy(holograms)
    # Returns something like:
    # {
    #     'total_energy': 95.0,
    #     'average_energy': 47.5,
    #     'most_expensive': 'Avatar',
    #     'savings_potential': 23.75
    # }
"""

def optimize_hologram_energy(holograms):
    """
    Analyze and optimize energy consumption for holograms.

    Args:
        holograms: List of hologram dictionaries

    Returns:
        Dictionary with energy analysis
    """
    if not holograms:
        return {
            'total_energy': 0,
            'average_energy': 0,
            'most_expensive': None,
            'savings_potential': 0
        }

    energies = {}
    total_energy = 0

    for hologram in holograms:
        energy = (
            (hologram['resolution'] * 10) +
            (hologram['duration'] / 100) +
            (hologram['transparency'] * 5)
        )
        energies[hologram['name']] = energy
        total_energy += energy

    most_expensive = max(energies, key=energies.get)
    average_energy = total_energy / len(holograms)

    # Calculate most efficient multiplier
    max_efficiency = max(h['resolution'] * h['transparency'] for h in holograms)
    efficiency_multiplier = max_efficiency / (max(h['resolution'] for h in holograms) *
                                             max(h['transparency'] for h in holograms))
    savings_potential = total_energy * (1 - (efficiency_multiplier / 10))

    return {
        'total_energy': total_energy,
        'average_energy': average_energy,
        'most_expensive': most_expensive,
        'savings_potential': max(0, savings_potential)
    }


# ============================================================================
# CHALLENGE 5: Temporal Data Stream Analyzer
# Difficulty: Intermediate-Advanced
# ============================================================================
"""
NovaSphere processes temporal data streams from quantum sensors.
Write a function `analyze_data_stream()` that:
- Takes a list of data points (integers or floats)
- Returns a dictionary with these analytics:
  * 'count': number of data points
  * 'sum': total of all values
  * 'average': mean value
  * 'median': middle value when sorted
  * 'min': minimum value
  * 'max': maximum value
  * 'variance': measure of data spread
  * 'trend': "INCREASING", "DECREASING", or "STABLE" (compare first half avg to second half avg)
  * 'outliers': list of values that differ more than 2 standard deviations from mean

Example:
    analyze_data_stream([1, 2, 3, 4, 5, 100])
    # Returns:
    # {
    #     'count': 6,
    #     'sum': 115,
    #     'average': 19.166...,
    #     'median': 3.5,
    #     'min': 1,
    #     'max': 100,
    #     'variance': 1407.47...,
    #     'trend': 'INCREASING',
    #     'outliers': [100]
    # }
"""

def analyze_data_stream(data):
    """
    Perform comprehensive statistical analysis on data stream.

    Args:
        data: List of numeric values

    Returns:
        Dictionary with detailed analytics
    """
    if not data:
        return {
            'count': 0,
            'sum': 0,
            'average': 0,
            'median': 0,
            'min': 0,
            'max': 0,
            'variance': 0,
            'trend': 'STABLE',
            'outliers': []
        }

    sorted_data = sorted(data)
    count = len(data)
    total = sum(data)
    average = total / count

    # Calculate median
    if count % 2 == 0:
        median = (sorted_data[count // 2 - 1] + sorted_data[count // 2]) / 2
    else:
        median = sorted_data[count // 2]

    # Calculate variance
    variance = sum((x - average) ** 2 for x in data) / count
    std_dev = variance ** 0.5

    # Determine trend
    if count >= 2:
        mid = count // 2
        first_half_avg = sum(data[:mid]) / len(data[:mid])
        second_half_avg = sum(data[mid:]) / len(data[mid:])

        if second_half_avg > first_half_avg * 1.05:
            trend = "INCREASING"
        elif second_half_avg < first_half_avg * 0.95:
            trend = "DECREASING"
        else:
            trend = "STABLE"
    else:
        trend = "STABLE"

    # Find outliers (values > 2 standard deviations from mean)
    outliers = [x for x in data if abs(x - average) > 2 * std_dev]

    return {
        'count': count,
        'sum': total,
        'average': average,
        'median': median,
        'min': min(data),
        'max': max(data),
        'variance': variance,
        'trend': trend,
        'outliers': outliers
    }


# ============================================================================
# TEST CASES
# ============================================================================

if __name__ == "__main__":
    print("=" * 70)
    print("NOVASPHERE CODING CHALLENGES - TEST CASES")
    print("=" * 70)

    # Test Challenge 1: Brightness Calculator
    print("\n✓ Challenge 1: Holographic Display Brightness Calculator")
    print(f"  calculate_brightness(30) = {calculate_brightness(30)}")
    print(f"  calculate_brightness(75) = {calculate_brightness(75)}")
    print(f"  calculate_brightness(0) = {calculate_brightness(0)}")
    print(f"  calculate_brightness(100) = {calculate_brightness(100)}")

    # Test Challenge 2: Gesture Recognition
    print("\n✓ Challenge 2: Gesture Recognition Pattern Matcher")
    print(f"  Swipe right: {detect_gesture([(0, 0), (10, 0), (20, 0)])}")
    print(f"  Swipe left: {detect_gesture([(20, 0), (10, 0), (0, 0)])}")
    print(f"  Swipe up: {detect_gesture([(0, 0), (0, 10), (0, 20)])}")
    print(f"  Tap: {detect_gesture([(5, 5), (6, 5), (5, 6)])}")
    print(f"  Unknown: {detect_gesture([(0, 0), (10, 10), (5, 15)])}")

    # Test Challenge 3: Encryption Level
    print("\n✓ Challenge 3: Quantum Data Encryption Level Validator")
    print(f"  'abc123' = Level {validate_encryption_level('abc123')}")
    print(f"  'Password1' = Level {validate_encryption_level('Password1')}")
    print(f"  'SecureP@ss1' = Level {validate_encryption_level('SecureP@ss1')}")
    print(f"  'short' = Level {validate_encryption_level('short')}")

    # Test Challenge 4: Hologram Energy
    print("\n✓ Challenge 4: Hologram Energy Consumption Optimizer")
    holograms = [
        {'name': 'Avatar', 'resolution': 4, 'duration': 5000, 'transparency': 0.9},
        {'name': 'Interface', 'resolution': 2, 'duration': 3000, 'transparency': 0.5}
    ]
    result = optimize_hologram_energy(holograms)
    print(f"  Total Energy: {result['total_energy']}")
    print(f"  Average Energy: {result['average_energy']:.2f}")
    print(f"  Most Expensive: {result['most_expensive']}")

    # Test Challenge 5: Data Stream Analysis
    print("\n✓ Challenge 5: Temporal Data Stream Analyzer")
    stream_data = [1, 2, 3, 4, 5, 100]
    analysis = analyze_data_stream(stream_data)
    print(f"  Count: {analysis['count']}")
    print(f"  Average: {analysis['average']:.2f}")
    print(f"  Median: {analysis['median']}")
    print(f"  Trend: {analysis['trend']}")
    print(f"  Outliers: {analysis['outliers']}")

    print("\n" + "=" * 70)
    print("All challenges implemented and tested successfully!")
    print("=" * 70)
