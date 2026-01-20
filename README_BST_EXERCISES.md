# Binary Search Tree (BST) Coding Exercises

A comprehensive set of coding exercises to master Binary Search Trees in Python.

## Overview

This exercise set contains **15 progressively challenging problems** covering all essential BST operations:

- **Level 1 (Basic)**: Insert, Search, Find Min/Max
- **Level 2 (Intermediate)**: Tree Traversals, Height, Node Count
- **Level 3 (Advanced)**: Validation, Deletion, LCA, K-th Smallest, Range Sum, Balancing

## Files

```
bst_exercises.py         # Exercise templates with TODO markers
bst_solutions.py         # Complete solutions with explanations
test_bst_exercises.py    # Comprehensive test suite
README_BST_EXERCISES.md  # This file
```

## Getting Started

### 1. Study the Exercises

Open `bst_exercises.py` and read through the problem descriptions:

```bash
cat bst_exercises.py
```

Each exercise includes:
- Clear problem description
- Function signature
- Expected behavior
- Example usage

### 2. Implement Solutions

Complete each function by replacing the `pass` statement with your implementation:

```python
def exercise_1_insert(root, value):
    """Insert a value into a BST."""
    # TODO: Implement this function
    pass  # <-- Replace this with your code
```

### 3. Test Your Solutions

Run the test suite to verify your implementations:

```bash
python test_bst_exercises.py
```

Or test individual exercise levels:

```bash
# Test only basic exercises
python -m pytest test_bst_exercises.py::TestBasicExercises -v

# Test only intermediate exercises
python -m pytest test_bst_exercises.py::TestIntermediateExercises -v

# Test only advanced exercises
python -m pytest test_bst_exercises.py::TestAdvancedExercises -v
```

### 4. Compare with Solutions

If you get stuck, check `bst_solutions.py` for complete implementations:

```bash
# View all solutions
cat bst_solutions.py

# Run the solution file to see examples
python bst_solutions.py
```

## Exercise List

### Level 1: Basic Operations

1. **Insert** - Add a node to the BST
2. **Search** - Find if a value exists
3. **Find Min** - Locate the minimum value
4. **Find Max** - Locate the maximum value

### Level 2: Intermediate Operations

5. **Inorder Traversal** - Left → Root → Right (returns sorted values)
6. **Preorder Traversal** - Root → Left → Right
7. **Postorder Traversal** - Left → Right → Root
8. **Tree Height** - Calculate the longest path from root to leaf
9. **Count Nodes** - Count total nodes in the tree

### Level 3: Advanced Operations

10. **Validate BST** - Check if a tree satisfies BST properties
11. **Delete Node** - Remove a node while maintaining BST structure
12. **Lowest Common Ancestor** - Find the LCA of two nodes
13. **K-th Smallest** - Find the k-th smallest element
14. **Range Sum** - Sum all values in a given range
15. **Balance BST** - Convert an unbalanced BST to a balanced one

## Learning Path

### Recommended Approach

1. **Start with Level 1** - These are fundamental and required for later exercises
2. **Master Level 2** - Focus on understanding recursion and tree traversals
3. **Challenge yourself with Level 3** - These combine multiple concepts

### Key Concepts to Understand

- **BST Property**: Left subtree < Node < Right subtree
- **Recursion**: Most BST operations are naturally recursive
- **Base Cases**: Always handle `None` nodes
- **Inorder Traversal**: Produces sorted output for BST
- **Tree Balance**: Affects performance (O(log n) vs O(n))

## Tips for Success

1. **Draw it out**: Sketch the tree structure on paper
2. **Start simple**: Test with small trees (2-3 nodes) first
3. **Think recursively**: Break problems into smaller subproblems
4. **Handle edge cases**: Empty tree, single node, duplicates
5. **Use the tests**: They provide concrete examples

## Time Complexity Reference

| Operation | Average | Worst Case |
|-----------|---------|------------|
| Insert | O(log n) | O(n) |
| Search | O(log n) | O(n) |
| Delete | O(log n) | O(n) |
| Traversal | O(n) | O(n) |
| Find Min/Max | O(log n) | O(n) |

*Worst case occurs with unbalanced trees (essentially linked lists)*

## Example Usage

```python
from bst_solutions import *

# Build a BST
root = None
values = [5, 3, 7, 1, 4, 6, 9]
for val in values:
    root = exercise_1_insert(root, val)

# Perform operations
print(exercise_5_inorder_traversal(root))  # [1, 3, 4, 5, 6, 7, 9]
print(exercise_2_search(root, 4))          # True
print(exercise_8_tree_height(root))        # 2
print(exercise_13_kth_smallest(root, 3))   # 4
```

## Testing Your Implementation

The test file includes:

- **Solution Tests**: Verify that the provided solutions work correctly
- **Edge Case Tests**: Empty trees, single nodes, etc.
- **Student Tests**: Compare your implementation with solutions (commented out by default)

To enable student comparison tests, uncomment the test methods in `TestStudentImplementation` class.

## Additional Challenges

Once you complete all exercises, try these extensions:

1. Implement iterative versions of recursive solutions
2. Add support for duplicate values
3. Implement a BST iterator
4. Create a visualization function
5. Implement AVL tree (self-balancing BST)
6. Add parent pointers to nodes
7. Implement Morris traversal (O(1) space)

## Common Pitfalls

- **Forgetting base cases**: Always check if node is `None`
- **Not returning the root**: Insert and delete must return the modified root
- **Incorrect BST validation**: Must check against min/max bounds, not just parent
- **Modifying while traversing**: Be careful with deletion operations

## Resources

- **Visualize BST**: https://visualgo.net/en/bst
- **Practice more**: https://leetcode.com/tag/binary-search-tree/
- **Video tutorials**: Search for "Binary Search Tree" on YouTube

## Need Help?

1. Read the function docstring carefully
2. Look at the examples provided
3. Draw the tree structure on paper
4. Start with a simple test case
5. Check the solutions file if stuck
6. Review the test cases for expected behavior

## License

These exercises are provided for educational purposes. Feel free to use and modify them for learning.

Happy coding!
