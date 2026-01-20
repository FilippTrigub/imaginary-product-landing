## Python Recursion Practice Exercises

1. **Sum of Digits**  
   Write a recursive function `sum_of_digits(n)` that returns the sum of the digits of a non-negative integer `n`. For example, `sum_of_digits(409)` should return `13`.

2. **Count Uppercase Letters**  
   Implement `count_uppercase(s)` which counts how many uppercase letters appear in the string `s` using recursion. Avoid loops or built-in functions that iterate over the string.

3. **Reverse a List**  
   Create a function `reverse_list(lst)` that returns a new list containing the elements of `lst` in reverse order using recursion.

4. **Power Set Generator**  
   Define `power_set(items)` that returns a list of all subsets of the input list `items`. Use recursion to build the subsets. Order of subsets does not matter.

5. **Nested Dictionary Depth**  
   Write `max_depth(d)` to determine the maximum nesting depth of dictionaries within dictionary `d`. Assume all values are dictionaries or scalars. A flat dictionary has depth 1.

6. **Binary Search Implementation**  
   Implement recursive binary search `binary_search(sorted_list, target)` that returns the index of `target` in `sorted_list` or `-1` if not found.

7. **String Interleaving**  
   Implement `interleave_strings(a, b)` that returns all possible strings formed by interleaving the characters of `a` and `b` while preserving the relative order of characters in each string.

8. **Tower of Hanoi Solver**  
   Write `tower_of_hanoi(n, source, auxiliary, target)` that returns a list of moves to transfer `n` disks from `source` peg to `target` peg using `auxiliary`.

9. **Balanced Parentheses Generator**  
   Implement `generate_parentheses(n)` that returns all valid combinations of `n` pairs of parentheses using recursion.

10. **Serialize Binary Tree**  
    Given a binary tree node structure with `value`, `left`, and `right`, implement `serialize(root)` that returns a list representing pre-order traversal using `None` for missing children.

11. **Deserialize Binary Tree**  
    Using the output of `serialize`, implement `deserialize(values)` that reconstructs the binary tree.

12. **Palindrome Partitioning**  
    Define `palindrome_partitions(s)` that returns all possible partitions of `s` where every substring is a palindrome.
