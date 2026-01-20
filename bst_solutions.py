"""
Binary Search Tree (BST) Exercise Solutions
============================================

This file contains complete solutions to all the BST exercises.
Try to solve the exercises yourself first before looking at these solutions!
"""


class TreeNode:
    """A node in a binary search tree."""
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


# ==============================================================================
# BASIC EXERCISES (Level 1) - SOLUTIONS
# ==============================================================================

def exercise_1_insert(root, value):
    """Insert a value into a BST."""
    if root is None:
        return TreeNode(value)

    if value < root.value:
        root.left = exercise_1_insert(root.left, value)
    elif value > root.value:
        root.right = exercise_1_insert(root.right, value)
    # If value == root.value, we don't insert duplicates

    return root


def exercise_2_search(root, target):
    """Search for a value in a BST."""
    if root is None:
        return False

    if root.value == target:
        return True
    elif target < root.value:
        return exercise_2_search(root.left, target)
    else:
        return exercise_2_search(root.right, target)


def exercise_3_find_min(root):
    """Find the minimum value in a BST."""
    if root is None:
        return None

    # Keep going left until we can't anymore
    current = root
    while current.left is not None:
        current = current.left

    return current.value


def exercise_4_find_max(root):
    """Find the maximum value in a BST."""
    if root is None:
        return None

    # Keep going right until we can't anymore
    current = root
    while current.right is not None:
        current = current.right

    return current.value


# ==============================================================================
# INTERMEDIATE EXERCISES (Level 2) - SOLUTIONS
# ==============================================================================

def exercise_5_inorder_traversal(root):
    """Inorder traversal (Left-Root-Right)."""
    result = []

    def inorder(node):
        if node is None:
            return
        inorder(node.left)
        result.append(node.value)
        inorder(node.right)

    inorder(root)
    return result


def exercise_6_preorder_traversal(root):
    """Preorder traversal (Root-Left-Right)."""
    result = []

    def preorder(node):
        if node is None:
            return
        result.append(node.value)
        preorder(node.left)
        preorder(node.right)

    preorder(root)
    return result


def exercise_7_postorder_traversal(root):
    """Postorder traversal (Left-Right-Root)."""
    result = []

    def postorder(node):
        if node is None:
            return
        postorder(node.left)
        postorder(node.right)
        result.append(node.value)

    postorder(root)
    return result


def exercise_8_tree_height(root):
    """Calculate the height of a BST."""
    if root is None:
        return -1

    left_height = exercise_8_tree_height(root.left)
    right_height = exercise_8_tree_height(root.right)

    return 1 + max(left_height, right_height)


def exercise_9_count_nodes(root):
    """Count the total number of nodes in a BST."""
    if root is None:
        return 0

    return 1 + exercise_9_count_nodes(root.left) + exercise_9_count_nodes(root.right)


# ==============================================================================
# ADVANCED EXERCISES (Level 3) - SOLUTIONS
# ==============================================================================

def exercise_10_validate_bst(root, min_val=float('-inf'), max_val=float('inf')):
    """Validate if a binary tree is a valid BST."""
    if root is None:
        return True

    # Check if current node violates BST property
    if root.value <= min_val or root.value >= max_val:
        return False

    # Recursively validate left and right subtrees
    # Left subtree: all values must be < root.value
    # Right subtree: all values must be > root.value
    return (exercise_10_validate_bst(root.left, min_val, root.value) and
            exercise_10_validate_bst(root.right, root.value, max_val))


def exercise_11_delete_node(root, value):
    """Delete a node from a BST."""
    if root is None:
        return None

    # Find the node to delete
    if value < root.value:
        root.left = exercise_11_delete_node(root.left, value)
    elif value > root.value:
        root.right = exercise_11_delete_node(root.right, value)
    else:
        # Found the node to delete

        # Case 1: Node has no children (leaf node)
        if root.left is None and root.right is None:
            return None

        # Case 2: Node has one child
        if root.left is None:
            return root.right
        if root.right is None:
            return root.left

        # Case 3: Node has two children
        # Find the inorder successor (minimum value in right subtree)
        successor_value = exercise_3_find_min(root.right)
        root.value = successor_value
        # Delete the inorder successor
        root.right = exercise_11_delete_node(root.right, successor_value)

    return root


def exercise_12_lowest_common_ancestor(root, p, q):
    """Find the Lowest Common Ancestor of two nodes."""
    if root is None:
        return None

    # If both p and q are smaller than root, LCA is in left subtree
    if p < root.value and q < root.value:
        return exercise_12_lowest_common_ancestor(root.left, p, q)

    # If both p and q are greater than root, LCA is in right subtree
    if p > root.value and q > root.value:
        return exercise_12_lowest_common_ancestor(root.right, p, q)

    # If one value is on the left and one on the right (or one equals root),
    # then root is the LCA
    return root.value


def exercise_13_kth_smallest(root, k):
    """Find the k-th smallest element in a BST."""
    # Use inorder traversal to get sorted values
    result = []

    def inorder(node):
        if node is None or len(result) >= k:
            return
        inorder(node.left)
        if len(result) < k:
            result.append(node.value)
        inorder(node.right)

    inorder(root)

    if len(result) >= k:
        return result[k - 1]
    return None


def exercise_14_range_sum(root, low, high):
    """Calculate the sum of all node values in the range [low, high]."""
    if root is None:
        return 0

    total = 0

    # If current node is in range, add its value
    if low <= root.value <= high:
        total += root.value

    # If root.value > low, there might be valid nodes in left subtree
    if root.value > low:
        total += exercise_14_range_sum(root.left, low, high)

    # If root.value < high, there might be valid nodes in right subtree
    if root.value < high:
        total += exercise_14_range_sum(root.right, low, high)

    return total


def exercise_15_balance_bst(root):
    """Balance a BST."""
    # Step 1: Get all values in sorted order using inorder traversal
    values = []

    def inorder(node):
        if node is None:
            return
        inorder(node.left)
        values.append(node.value)
        inorder(node.right)

    inorder(root)

    # Step 2: Build a balanced BST from sorted array
    def build_balanced_bst(arr):
        if not arr:
            return None

        mid = len(arr) // 2
        node = TreeNode(arr[mid])

        node.left = build_balanced_bst(arr[:mid])
        node.right = build_balanced_bst(arr[mid + 1:])

        return node

    return build_balanced_bst(values)


# ==============================================================================
# HELPER FUNCTIONS FOR TESTING
# ==============================================================================

def print_tree(root, level=0, prefix="Root: "):
    """Pretty print a binary tree."""
    if root is not None:
        print(" " * (level * 4) + prefix + str(root.value))
        if root.left is not None or root.right is not None:
            if root.left:
                print_tree(root.left, level + 1, "L--- ")
            else:
                print(" " * ((level + 1) * 4) + "L--- None")
            if root.right:
                print_tree(root.right, level + 1, "R--- ")
            else:
                print(" " * ((level + 1) * 4) + "R--- None")


if __name__ == "__main__":
    print("Binary Search Tree Solutions")
    print("=" * 60)
    print("\nExample: Building and traversing a BST")
    print("-" * 60)

    # Build a sample BST
    root = None
    values = [5, 3, 7, 1, 4, 6, 9]
    for val in values:
        root = exercise_1_insert(root, val)

    print(f"Inserted values: {values}")
    print("\nTree structure:")
    print_tree(root)

    print("\nTraversals:")
    print(f"Inorder (sorted):   {exercise_5_inorder_traversal(root)}")
    print(f"Preorder:           {exercise_6_preorder_traversal(root)}")
    print(f"Postorder:          {exercise_7_postorder_traversal(root)}")

    print("\nTree properties:")
    print(f"Height: {exercise_8_tree_height(root)}")
    print(f"Node count: {exercise_9_count_nodes(root)}")
    print(f"Min value: {exercise_3_find_min(root)}")
    print(f"Max value: {exercise_4_find_max(root)}")
    print(f"Is valid BST: {exercise_10_validate_bst(root)}")

    print("\nSearch operations:")
    print(f"Search for 4: {exercise_2_search(root, 4)}")
    print(f"Search for 10: {exercise_2_search(root, 10)}")
    print(f"3rd smallest: {exercise_13_kth_smallest(root, 3)}")
    print(f"Range sum [3, 7]: {exercise_14_range_sum(root, 3, 7)}")
    print(f"LCA of 1 and 4: {exercise_12_lowest_common_ancestor(root, 1, 4)}")
