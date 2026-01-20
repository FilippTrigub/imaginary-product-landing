"""
Exercise 8: Matrix Chain Multiplication
Difficulty: Hard

Find minimum scalar multiplications needed to multiply a chain of matrices.
Time complexity: O(n³)
Space complexity: O(n²)
"""

def matrix_chain_order(dimensions):
    """
    Find minimum number of multiplications for matrix chain.

    Args:
        dimensions: List where dimensions[i-1] x dimensions[i] is the ith matrix
                   E.g., [10, 20, 30] means two matrices: 10×20 and 20×30

    Returns:
        Minimum number of scalar multiplications needed

    Example:
        matrix_chain_order([10, 20, 30, 40, 30]) -> 30000
        # Matrices: 10×20, 20×30, 30×40, 40×30
    """
    # TODO: Implement your solution here
    pass


def matrix_chain_parenthesis(dimensions):
    """
    Return the optimal parenthesization of the matrix chain.

    Args:
        dimensions: List of matrix dimensions

    Returns:
        Tuple of (min_multiplications, parenthesization_string)

    Example:
        matrix_chain_parenthesis([10, 20, 30, 40, 30])
        -> (30000, "((A0(A1A2))A3)")
    """
    # TODO: Implement to return the parenthesization
    pass


if __name__ == "__main__":
    # Test cases
    test_cases = [
        [10, 20, 30, 40, 30],
        [40, 20, 30, 10, 30],
        [10, 20, 30],
        [5, 10, 3, 12, 5, 50, 6],
        [30, 35, 15, 5, 10, 20, 25]
    ]

    print("Testing Matrix Chain Multiplication:")
    for dims in test_cases:
        result = matrix_chain_order(dims)
        n_matrices = len(dims) - 1
        print(f"matrix_chain_order({dims})")
        print(f"  {n_matrices} matrices, min multiplications = {result}")

    print("\nTesting with Parenthesization:")
    for dims in test_cases[:3]:
        min_mult, parens = matrix_chain_parenthesis(dims)
        print(f"matrix_chain_parenthesis({dims})")
        print(f"  Min: {min_mult}, Parenthesization: {parens}")
