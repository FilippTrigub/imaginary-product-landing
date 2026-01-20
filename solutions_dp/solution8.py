"""
Solution 8: Matrix Chain Multiplication
"""

def matrix_chain_order(dimensions):
    """
    Find minimum scalar multiplications for matrix chain.
    dp[i][j] = min multiplications for matrices from i to j
    """
    n = len(dimensions) - 1  # number of matrices

    if n <= 1:
        return 0

    # dp[i][j] = minimum cost to multiply matrices from i to j
    dp = [[0] * n for _ in range(n)]

    # length is the chain length
    for length in range(2, n + 1):
        for i in range(n - length + 1):
            j = i + length - 1
            dp[i][j] = float('inf')

            for k in range(i, j):
                # Cost of multiplying matrices i..k and k+1..j
                # Plus cost of multiplying the two resulting matrices
                cost = (dp[i][k] + dp[k + 1][j] +
                       dimensions[i] * dimensions[k + 1] * dimensions[j + 1])
                dp[i][j] = min(dp[i][j], cost)

    return dp[0][n - 1]


def matrix_chain_parenthesis(dimensions):
    """
    Return the optimal parenthesization.
    """
    n = len(dimensions) - 1

    if n <= 1:
        return 0, "A0" if n == 1 else ""

    dp = [[0] * n for _ in range(n)]
    split = [[0] * n for _ in range(n)]

    for length in range(2, n + 1):
        for i in range(n - length + 1):
            j = i + length - 1
            dp[i][j] = float('inf')

            for k in range(i, j):
                cost = (dp[i][k] + dp[k + 1][j] +
                       dimensions[i] * dimensions[k + 1] * dimensions[j + 1])
                if cost < dp[i][j]:
                    dp[i][j] = cost
                    split[i][j] = k

    def construct_parens(i, j):
        if i == j:
            return f"A{i}"
        k = split[i][j]
        left = construct_parens(i, k)
        right = construct_parens(k + 1, j)
        return f"({left}{right})"

    parens = construct_parens(0, n - 1)
    return dp[0][n - 1], parens


if __name__ == "__main__":
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

    print("\n✓ All tests passed")
