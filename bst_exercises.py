"""
Binary Search Tree (BST) Coding Exercises
==========================================

A Binary Search Tree is a tree data structure where each node has at most two children,
and for each node:
- All values in the left subtree are less than the node's value
- All values in the right subtree are greater than the node's value

Complete the following exercises to master BST operations!
"""


class TreeNode:
    """A node in a binary search tree."""
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


# ==============================================================================
# BASIC EXERCISES (Level 1)
# ==============================================================================

def exercise_1_insert(root, value):
    """
    Exercise 1: Insert a value into a BST

    Implement a function that inserts a new value into a binary search tree.
    The function should maintain the BST property.

    Args:
        root: TreeNode - The root of the BST (can be None for empty tree)
        value: int - The value to insert

    Returns:
        TreeNode - The root of the modified BST

    Example:
        root = TreeNode(5)
        root = exercise_1_insert(root, 3)
        root = exercise_1_insert(root, 7)
        # Tree structure:
        #     5
        #    / \
        #   3   7
    """
    # TODO: Implement this function
    pass


def exercise_2_search(root, target):
    """
    Exercise 2: Search for a value in a BST

    Implement a function that searches for a target value in a BST.
    Return True if the value exists, False otherwise.

    Args:
        root: TreeNode - The root of the BST
        target: int - The value to search for

    Returns:
        bool - True if target exists in the tree, False otherwise

    Example:
        root = TreeNode(5)
        root.left = TreeNode(3)
        root.right = TreeNode(7)
        exercise_2_search(root, 3)  # Returns: True
        exercise_2_search(root, 10) # Returns: False
    """
    # TODO: Implement this function
    pass


def exercise_3_find_min(root):
    """
    Exercise 3: Find the minimum value in a BST

    Implement a function that finds and returns the minimum value in a BST.
    Remember: In a BST, the minimum value is always in the leftmost node.

    Args:
        root: TreeNode - The root of the BST

    Returns:
        int - The minimum value in the tree, or None if tree is empty

    Example:
        root = TreeNode(5)
        root.left = TreeNode(3)
        root.right = TreeNode(7)
        root.left.left = TreeNode(1)
        exercise_3_find_min(root)  # Returns: 1
    """
    # TODO: Implement this function
    pass


def exercise_4_find_max(root):
    """
    Exercise 4: Find the maximum value in a BST

    Implement a function that finds and returns the maximum value in a BST.
    Remember: In a BST, the maximum value is always in the rightmost node.

    Args:
        root: TreeNode - The root of the BST

    Returns:
        int - The maximum value in the tree, or None if tree is empty

    Example:
        root = TreeNode(5)
        root.left = TreeNode(3)
        root.right = TreeNode(7)
        root.right.right = TreeNode(10)
        exercise_4_find_max(root)  # Returns: 10
    """
    # TODO: Implement this function
    pass


# ==============================================================================
# INTERMEDIATE EXERCISES (Level 2)
# ==============================================================================

def exercise_5_inorder_traversal(root):
    """
    Exercise 5: Inorder Traversal (Left-Root-Right)

    Implement an inorder traversal of a BST. This should return values in sorted order.

    Args:
        root: TreeNode - The root of the BST

    Returns:
        list - List of values in inorder sequence

    Example:
        root = TreeNode(5)
        root.left = TreeNode(3)
        root.right = TreeNode(7)
        root.left.left = TreeNode(1)
        exercise_5_inorder_traversal(root)  # Returns: [1, 3, 5, 7]
    """
    # TODO: Implement this function
    pass


def exercise_6_preorder_traversal(root):
    """
    Exercise 6: Preorder Traversal (Root-Left-Right)

    Implement a preorder traversal of a BST.

    Args:
        root: TreeNode - The root of the BST

    Returns:
        list - List of values in preorder sequence

    Example:
        root = TreeNode(5)
        root.left = TreeNode(3)
        root.right = TreeNode(7)
        exercise_6_preorder_traversal(root)  # Returns: [5, 3, 7]
    """
    # TODO: Implement this function
    pass


def exercise_7_postorder_traversal(root):
    """
    Exercise 7: Postorder Traversal (Left-Right-Root)

    Implement a postorder traversal of a BST.

    Args:
        root: TreeNode - The root of the BST

    Returns:
        list - List of values in postorder sequence

    Example:
        root = TreeNode(5)
        root.left = TreeNode(3)
        root.right = TreeNode(7)
        exercise_7_postorder_traversal(root)  # Returns: [3, 7, 5]
    """
    # TODO: Implement this function
    pass


def exercise_8_tree_height(root):
    """
    Exercise 8: Calculate the height of a BST

    The height of a tree is the number of edges in the longest path from root to leaf.
    An empty tree has height -1, a single node has height 0.

    Args:
        root: TreeNode - The root of the BST

    Returns:
        int - The height of the tree

    Example:
        root = TreeNode(5)
        root.left = TreeNode(3)
        root.right = TreeNode(7)
        root.left.left = TreeNode(1)
        exercise_8_tree_height(root)  # Returns: 2
    """
    # TODO: Implement this function
    pass


def exercise_9_count_nodes(root):
    """
    Exercise 9: Count the total number of nodes in a BST

    Args:
        root: TreeNode - The root of the BST

    Returns:
        int - The total number of nodes in the tree

    Example:
        root = TreeNode(5)
        root.left = TreeNode(3)
        root.right = TreeNode(7)
        exercise_9_count_nodes(root)  # Returns: 3
    """
    # TODO: Implement this function
    pass


# ==============================================================================
# ADVANCED EXERCISES (Level 3)
# ==============================================================================

def exercise_10_validate_bst(root, min_val=float('-inf'), max_val=float('inf')):
    """
    Exercise 10: Validate if a binary tree is a valid BST

    Check if a given binary tree satisfies the BST property.
    Each node must be greater than all nodes in its left subtree
    and less than all nodes in its right subtree.

    Args:
        root: TreeNode - The root of the tree
        min_val: The minimum allowed value for this subtree
        max_val: The maximum allowed value for this subtree

    Returns:
        bool - True if the tree is a valid BST, False otherwise

    Example:
        root = TreeNode(5)
        root.left = TreeNode(3)
        root.right = TreeNode(7)
        exercise_10_validate_bst(root)  # Returns: True

        bad_root = TreeNode(5)
        bad_root.left = TreeNode(6)  # Invalid: 6 > 5
        exercise_10_validate_bst(bad_root)  # Returns: False
    """
    # TODO: Implement this function
    pass


def exercise_11_delete_node(root, value):
    """
    Exercise 11: Delete a node from a BST

    Remove a node with the given value from the BST while maintaining BST properties.
    Handle three cases:
    1. Node has no children: simply remove it
    2. Node has one child: replace node with its child
    3. Node has two children: replace with inorder successor (min value in right subtree)

    Args:
        root: TreeNode - The root of the BST
        value: int - The value to delete

    Returns:
        TreeNode - The root of the modified BST

    Example:
        root = TreeNode(5)
        root.left = TreeNode(3)
        root.right = TreeNode(7)
        root = exercise_11_delete_node(root, 3)
        # Tree now only has nodes 5 and 7
    """
    # TODO: Implement this function
    pass


def exercise_12_lowest_common_ancestor(root, p, q):
    """
    Exercise 12: Find the Lowest Common Ancestor (LCA) of two nodes

    The LCA is the lowest node in the tree that has both p and q as descendants.
    A node can be a descendant of itself.

    Args:
        root: TreeNode - The root of the BST
        p: int - First value
        q: int - Second value

    Returns:
        int - The value of the LCA node, or None if not found

    Example:
        root = TreeNode(6)
        root.left = TreeNode(2)
        root.right = TreeNode(8)
        root.left.left = TreeNode(0)
        root.left.right = TreeNode(4)
        exercise_12_lowest_common_ancestor(root, 2, 8)  # Returns: 6
        exercise_12_lowest_common_ancestor(root, 2, 4)  # Returns: 2
    """
    # TODO: Implement this function
    pass


def exercise_13_kth_smallest(root, k):
    """
    Exercise 13: Find the k-th smallest element in a BST

    Return the k-th smallest value in the BST (1-indexed).

    Args:
        root: TreeNode - The root of the BST
        k: int - The rank of the element to find (1-indexed)

    Returns:
        int - The k-th smallest value, or None if k is out of range

    Example:
        root = TreeNode(5)
        root.left = TreeNode(3)
        root.right = TreeNode(7)
        root.left.left = TreeNode(1)
        root.left.right = TreeNode(4)
        exercise_13_kth_smallest(root, 2)  # Returns: 3 (sorted: [1, 3, 4, 5, 7])
    """
    # TODO: Implement this function
    pass


def exercise_14_range_sum(root, low, high):
    """
    Exercise 14: Range Sum of BST

    Calculate the sum of all node values in the BST that fall within the range [low, high].

    Args:
        root: TreeNode - The root of the BST
        low: int - Lower bound of the range (inclusive)
        high: int - Upper bound of the range (inclusive)

    Returns:
        int - Sum of all values in the range [low, high]

    Example:
        root = TreeNode(10)
        root.left = TreeNode(5)
        root.right = TreeNode(15)
        root.left.left = TreeNode(3)
        root.left.right = TreeNode(7)
        exercise_14_range_sum(root, 7, 15)  # Returns: 32 (7 + 10 + 15)
    """
    # TODO: Implement this function
    pass


def exercise_15_balance_bst(root):
    """
    Exercise 15: Balance a BST

    Given a BST that might be unbalanced, convert it into a balanced BST.
    A balanced BST has the property that the heights of the two subtrees
    of every node differ by at most one.

    Args:
        root: TreeNode - The root of the BST

    Returns:
        TreeNode - The root of the balanced BST

    Example:
        root = TreeNode(1)
        root.right = TreeNode(2)
        root.right.right = TreeNode(3)
        root.right.right.right = TreeNode(4)
        balanced = exercise_15_balance_bst(root)
        # Balanced tree structure:
        #       2
        #      / \
        #     1   3
        #          \
        #           4
    """
    # TODO: Implement this function
    pass


if __name__ == "__main__":
    print("Binary Search Tree Exercises")
    print("=" * 60)
    print("Complete the exercises above and run the tests with:")
    print("python test_bst_exercises.py")
    print("\nFor solutions, check: bst_solutions.py")
