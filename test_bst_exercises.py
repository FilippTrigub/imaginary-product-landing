"""
Test Suite for Binary Search Tree Exercises
============================================

Run this file to test your solutions:
    python test_bst_exercises.py

Or run specific test classes:
    python -m pytest test_bst_exercises.py::TestBasicExercises -v
"""

import unittest
from bst_exercises import TreeNode
import bst_exercises as exercises
import bst_solutions as solutions


class TestBasicExercises(unittest.TestCase):
    """Tests for Level 1 exercises."""

    def test_exercise_1_insert_empty_tree(self):
        """Test inserting into an empty tree."""
        root = solutions.exercise_1_insert(None, 5)
        self.assertIsNotNone(root)
        self.assertEqual(root.value, 5)
        self.assertIsNone(root.left)
        self.assertIsNone(root.right)

    def test_exercise_1_insert_multiple(self):
        """Test inserting multiple values."""
        root = None
        for val in [5, 3, 7, 1, 9]:
            root = solutions.exercise_1_insert(root, val)

        self.assertEqual(root.value, 5)
        self.assertEqual(root.left.value, 3)
        self.assertEqual(root.right.value, 7)
        self.assertEqual(root.left.left.value, 1)
        self.assertEqual(root.right.right.value, 9)

    def test_exercise_2_search_found(self):
        """Test searching for existing values."""
        root = self._build_sample_tree()
        self.assertTrue(solutions.exercise_2_search(root, 5))
        self.assertTrue(solutions.exercise_2_search(root, 3))
        self.assertTrue(solutions.exercise_2_search(root, 7))

    def test_exercise_2_search_not_found(self):
        """Test searching for non-existing values."""
        root = self._build_sample_tree()
        self.assertFalse(solutions.exercise_2_search(root, 10))
        self.assertFalse(solutions.exercise_2_search(root, 0))

    def test_exercise_2_search_empty_tree(self):
        """Test searching in an empty tree."""
        self.assertFalse(solutions.exercise_2_search(None, 5))

    def test_exercise_3_find_min(self):
        """Test finding minimum value."""
        root = self._build_sample_tree()
        self.assertEqual(solutions.exercise_3_find_min(root), 1)

    def test_exercise_3_find_min_empty(self):
        """Test finding min in empty tree."""
        self.assertIsNone(solutions.exercise_3_find_min(None))

    def test_exercise_4_find_max(self):
        """Test finding maximum value."""
        root = self._build_sample_tree()
        self.assertEqual(solutions.exercise_4_find_max(root), 9)

    def test_exercise_4_find_max_empty(self):
        """Test finding max in empty tree."""
        self.assertIsNone(solutions.exercise_4_find_max(None))

    def _build_sample_tree(self):
        """Helper to build a sample BST."""
        root = TreeNode(5)
        root.left = TreeNode(3)
        root.right = TreeNode(7)
        root.left.left = TreeNode(1)
        root.left.right = TreeNode(4)
        root.right.left = TreeNode(6)
        root.right.right = TreeNode(9)
        return root


class TestIntermediateExercises(unittest.TestCase):
    """Tests for Level 2 exercises."""

    def setUp(self):
        """Set up a sample tree for testing."""
        self.root = TreeNode(5)
        self.root.left = TreeNode(3)
        self.root.right = TreeNode(7)
        self.root.left.left = TreeNode(1)
        self.root.left.right = TreeNode(4)
        self.root.right.left = TreeNode(6)
        self.root.right.right = TreeNode(9)

    def test_exercise_5_inorder_traversal(self):
        """Test inorder traversal."""
        result = solutions.exercise_5_inorder_traversal(self.root)
        self.assertEqual(result, [1, 3, 4, 5, 6, 7, 9])

    def test_exercise_5_inorder_empty(self):
        """Test inorder on empty tree."""
        result = solutions.exercise_5_inorder_traversal(None)
        self.assertEqual(result, [])

    def test_exercise_6_preorder_traversal(self):
        """Test preorder traversal."""
        result = solutions.exercise_6_preorder_traversal(self.root)
        self.assertEqual(result, [5, 3, 1, 4, 7, 6, 9])

    def test_exercise_7_postorder_traversal(self):
        """Test postorder traversal."""
        result = solutions.exercise_7_postorder_traversal(self.root)
        self.assertEqual(result, [1, 4, 3, 6, 9, 7, 5])

    def test_exercise_8_tree_height(self):
        """Test tree height calculation."""
        self.assertEqual(solutions.exercise_8_tree_height(self.root), 2)

        single_node = TreeNode(5)
        self.assertEqual(solutions.exercise_8_tree_height(single_node), 0)

        self.assertEqual(solutions.exercise_8_tree_height(None), -1)

    def test_exercise_8_tree_height_unbalanced(self):
        """Test height of unbalanced tree."""
        root = TreeNode(1)
        root.right = TreeNode(2)
        root.right.right = TreeNode(3)
        root.right.right.right = TreeNode(4)
        self.assertEqual(solutions.exercise_8_tree_height(root), 3)

    def test_exercise_9_count_nodes(self):
        """Test node counting."""
        self.assertEqual(solutions.exercise_9_count_nodes(self.root), 7)
        self.assertEqual(solutions.exercise_9_count_nodes(TreeNode(1)), 1)
        self.assertEqual(solutions.exercise_9_count_nodes(None), 0)


class TestAdvancedExercises(unittest.TestCase):
    """Tests for Level 3 exercises."""

    def test_exercise_10_validate_bst_valid(self):
        """Test validation of valid BST."""
        root = TreeNode(5)
        root.left = TreeNode(3)
        root.right = TreeNode(7)
        root.left.left = TreeNode(1)
        root.left.right = TreeNode(4)
        self.assertTrue(solutions.exercise_10_validate_bst(root))

    def test_exercise_10_validate_bst_invalid(self):
        """Test validation of invalid BST."""
        root = TreeNode(5)
        root.left = TreeNode(3)
        root.right = TreeNode(7)
        root.left.right = TreeNode(6)  # Invalid: 6 > 5
        self.assertFalse(solutions.exercise_10_validate_bst(root))

    def test_exercise_10_validate_bst_empty(self):
        """Test validation of empty tree."""
        self.assertTrue(solutions.exercise_10_validate_bst(None))

    def test_exercise_11_delete_leaf(self):
        """Test deleting a leaf node."""
        root = TreeNode(5)
        root.left = TreeNode(3)
        root.right = TreeNode(7)

        root = solutions.exercise_11_delete_node(root, 3)
        self.assertIsNone(root.left)
        self.assertEqual(root.value, 5)
        self.assertEqual(root.right.value, 7)

    def test_exercise_11_delete_one_child(self):
        """Test deleting node with one child."""
        root = TreeNode(5)
        root.left = TreeNode(3)
        root.left.left = TreeNode(1)

        root = solutions.exercise_11_delete_node(root, 3)
        self.assertEqual(root.left.value, 1)

    def test_exercise_11_delete_two_children(self):
        """Test deleting node with two children."""
        root = TreeNode(5)
        root.left = TreeNode(3)
        root.right = TreeNode(7)
        root.left.left = TreeNode(1)
        root.left.right = TreeNode(4)

        root = solutions.exercise_11_delete_node(root, 3)
        self.assertEqual(root.left.value, 4)
        self.assertEqual(root.left.left.value, 1)
        self.assertIsNone(root.left.right)

    def test_exercise_12_lca(self):
        """Test lowest common ancestor."""
        root = TreeNode(6)
        root.left = TreeNode(2)
        root.right = TreeNode(8)
        root.left.left = TreeNode(0)
        root.left.right = TreeNode(4)
        root.right.left = TreeNode(7)
        root.right.right = TreeNode(9)

        self.assertEqual(solutions.exercise_12_lowest_common_ancestor(root, 2, 8), 6)
        self.assertEqual(solutions.exercise_12_lowest_common_ancestor(root, 2, 4), 2)
        self.assertEqual(solutions.exercise_12_lowest_common_ancestor(root, 7, 9), 8)

    def test_exercise_13_kth_smallest(self):
        """Test finding k-th smallest element."""
        root = TreeNode(5)
        root.left = TreeNode(3)
        root.right = TreeNode(7)
        root.left.left = TreeNode(1)
        root.left.right = TreeNode(4)

        self.assertEqual(solutions.exercise_13_kth_smallest(root, 1), 1)
        self.assertEqual(solutions.exercise_13_kth_smallest(root, 2), 3)
        self.assertEqual(solutions.exercise_13_kth_smallest(root, 3), 4)
        self.assertEqual(solutions.exercise_13_kth_smallest(root, 5), 7)

    def test_exercise_13_kth_smallest_out_of_range(self):
        """Test k-th smallest with invalid k."""
        root = TreeNode(5)
        self.assertIsNone(solutions.exercise_13_kth_smallest(root, 10))

    def test_exercise_14_range_sum(self):
        """Test range sum calculation."""
        root = TreeNode(10)
        root.left = TreeNode(5)
        root.right = TreeNode(15)
        root.left.left = TreeNode(3)
        root.left.right = TreeNode(7)
        root.right.right = TreeNode(18)

        self.assertEqual(solutions.exercise_14_range_sum(root, 7, 15), 32)
        self.assertEqual(solutions.exercise_14_range_sum(root, 3, 7), 15)
        self.assertEqual(solutions.exercise_14_range_sum(root, 1, 100), 58)

    def test_exercise_14_range_sum_empty(self):
        """Test range sum on empty tree."""
        self.assertEqual(solutions.exercise_14_range_sum(None, 1, 10), 0)

    def test_exercise_15_balance_bst(self):
        """Test BST balancing."""
        # Create an unbalanced tree
        root = TreeNode(1)
        root.right = TreeNode(2)
        root.right.right = TreeNode(3)
        root.right.right.right = TreeNode(4)

        balanced = solutions.exercise_15_balance_bst(root)

        # Check that it's balanced (height difference <= 1)
        self.assertTrue(solutions.exercise_10_validate_bst(balanced))
        self.assertLessEqual(solutions.exercise_8_tree_height(balanced), 2)

        # Check that all values are preserved
        original_values = solutions.exercise_5_inorder_traversal(root)
        balanced_values = solutions.exercise_5_inorder_traversal(balanced)
        self.assertEqual(original_values, balanced_values)

    def test_exercise_15_balance_already_balanced(self):
        """Test balancing an already balanced tree."""
        root = TreeNode(5)
        root.left = TreeNode(3)
        root.right = TreeNode(7)

        balanced = solutions.exercise_15_balance_bst(root)
        self.assertTrue(solutions.exercise_10_validate_bst(balanced))


class TestStudentImplementation(unittest.TestCase):
    """
    Tests that compare student implementation with solutions.
    Uncomment the tests below once you've implemented the exercises!
    """

    def _build_test_tree(self):
        """Build a standard test tree."""
        root = TreeNode(5)
        root.left = TreeNode(3)
        root.right = TreeNode(7)
        root.left.left = TreeNode(1)
        root.left.right = TreeNode(4)
        root.right.left = TreeNode(6)
        root.right.right = TreeNode(9)
        return root

    # Uncomment these tests as you complete each exercise:

    # def test_student_exercise_1(self):
    #     """Compare student insert with solution."""
    #     root1 = None
    #     root2 = None
    #     values = [5, 3, 7, 1, 4, 6, 9]
    #     for val in values:
    #         root1 = exercises.exercise_1_insert(root1, val)
    #         root2 = solutions.exercise_1_insert(root2, val)
    #
    #     self.assertEqual(
    #         solutions.exercise_5_inorder_traversal(root1),
    #         solutions.exercise_5_inorder_traversal(root2)
    #     )

    # def test_student_exercise_2(self):
    #     """Compare student search with solution."""
    #     root = self._build_test_tree()
    #     for val in [1, 3, 5, 7, 9, 0, 10]:
    #         self.assertEqual(
    #             exercises.exercise_2_search(root, val),
    #             solutions.exercise_2_search(root, val)
    #         )

    # def test_student_exercise_5(self):
    #     """Compare student inorder traversal with solution."""
    #     root = self._build_test_tree()
    #     self.assertEqual(
    #         exercises.exercise_5_inorder_traversal(root),
    #         solutions.exercise_5_inorder_traversal(root)
    #     )

    # Add more test comparisons as needed...


def run_tests():
    """Run all tests with verbose output."""
    loader = unittest.TestLoader()
    suite = unittest.TestSuite()

    suite.addTests(loader.loadTestsFromTestCase(TestBasicExercises))
    suite.addTests(loader.loadTestsFromTestCase(TestIntermediateExercises))
    suite.addTests(loader.loadTestsFromTestCase(TestAdvancedExercises))
    suite.addTests(loader.loadTestsFromTestCase(TestStudentImplementation))

    runner = unittest.TextTestRunner(verbosity=2)
    result = runner.run(suite)

    return result.wasSuccessful()


if __name__ == "__main__":
    print("=" * 70)
    print("Binary Search Tree Exercise Test Suite")
    print("=" * 70)
    print()

    success = run_tests()

    print()
    print("=" * 70)
    if success:
        print("All tests passed!")
    else:
        print("Some tests failed. Check the output above for details.")
    print("=" * 70)
