# Graph Algorithms - Coding Exercises

A comprehensive set of exercises covering fundamental graph algorithms in JavaScript.

## Topics Covered

1. **Graph Representation** - Adjacency List and Matrix
2. **Graph Traversal** - BFS and DFS
3. **Shortest Path** - Dijkstra's and Bellman-Ford
4. **Minimum Spanning Tree** - Kruskal's and Prim's
5. **Cycle Detection** - Directed and Undirected Graphs
6. **Topological Sorting**

---

## Exercise 1: Implement a Graph using Adjacency List

**Difficulty:** Easy

**Description:**
Create a `Graph` class that represents an undirected graph using an adjacency list. Implement methods to add vertices, add edges, and display the graph.

**Requirements:**
- Constructor that initializes an empty graph
- `addVertex(vertex)` - Add a vertex to the graph
- `addEdge(vertex1, vertex2)` - Add an undirected edge between two vertices
- `getVertices()` - Return all vertices
- `getAdjacent(vertex)` - Return adjacent vertices of a given vertex
- `display()` - Print the adjacency list representation

**Test Cases:**
```
Graph with vertices: [A, B, C, D]
Edges: A-B, B-C, C-D, A-D
Expected adjacency list:
A: [B, D]
B: [A, C]
C: [B, D]
D: [C, A]
```

---

## Exercise 2: Breadth-First Search (BFS)

**Difficulty:** Easy

**Description:**
Implement BFS traversal on a graph. Return the order in which vertices are visited.

**Requirements:**
- `bfs(startVertex)` - Traverse the graph starting from a given vertex
- Return an array of vertices in BFS order
- Handle disconnected graphs

**Test Cases:**
```
Graph: A-B, B-C, A-D, D-E
BFS from A: [A, B, D, C, E]
BFS from C: [C, B, A, D, E]
```

---

## Exercise 3: Depth-First Search (DFS)

**Difficulty:** Easy

**Description:**
Implement DFS traversal on a graph. Return the order in which vertices are visited.

**Requirements:**
- `dfs(startVertex)` - Traverse the graph starting from a given vertex
- Return an array of vertices in DFS order
- Implement both recursive and iterative versions

**Test Cases:**
```
Graph: A-B, B-C, A-D, D-E
DFS from A (recursive): [A, B, C, D, E]
DFS from A (iterative): [A, D, E, B, C]
```

---

## Exercise 4: Detect Cycle in Undirected Graph

**Difficulty:** Medium

**Description:**
Determine if an undirected graph contains a cycle.

**Requirements:**
- `hasCycle()` - Return true if cycle exists, false otherwise
- Use DFS-based approach
- Handle multiple connected components

**Test Cases:**
```
Graph: A-B, B-C, C-A (triangle)
Result: true (contains cycle)

Graph: A-B, B-C, C-D (linear)
Result: false (no cycle)

Graph: A-B, C-D (disconnected)
Result: false (no cycle)
```

---

## Exercise 5: Detect Cycle in Directed Graph

**Difficulty:** Medium

**Description:**
Determine if a directed graph contains a cycle.

**Requirements:**
- Create a `DirectedGraph` class
- `hasCycle()` - Return true if cycle exists
- Use DFS with color marking (white, gray, black)

**Test Cases:**
```
Graph: A→B, B→C, C→A
Result: true (contains cycle)

Graph: A→B, B→C, A→C
Result: false (DAG - no cycle)
```

---

## Exercise 6: Topological Sorting

**Difficulty:** Medium

**Description:**
Find a topological ordering of vertices in a directed acyclic graph (DAG).

**Requirements:**
- `topologicalSort()` - Return vertices in topological order
- Use Kahn's algorithm (BFS-based) or DFS-based approach
- Return null if graph contains a cycle

**Test Cases:**
```
Graph: A→B, A→C, B→D, C→D
Result: [A, B, C, D] or [A, C, B, D] (valid orderings)

Graph: A→B, B→C, C→A
Result: null (contains cycle)
```

---

## Exercise 7: Shortest Path - Dijkstra's Algorithm

**Difficulty:** Hard

**Description:**
Find the shortest path from a source vertex to all other vertices using Dijkstra's algorithm.

**Requirements:**
- `dijkstra(startVertex)` - Return object with shortest distances and paths
- Handle negative edge weights by returning null
- Use a min-heap or simple array approach

**Test Cases:**
```
Graph with weights:
A-B(4), A-C(2), B-C(1), B-D(5), C-D(8), C-E(10), D-E(2)

dijkstra('A'):
Distances: {A: 0, B: 3, C: 2, D: 8, E: 10}
Paths: {A: [], B: [A, C], C: [A], D: [A, C, B], E: [A, C, B, D]}
```

---

## Exercise 8: Shortest Path - BFS for Unweighted Graph

**Difficulty:** Medium

**Description:**
Find the shortest path between two vertices in an unweighted graph using BFS.

**Requirements:**
- `shortestPath(start, end)` - Return the shortest path as array
- Return empty array if no path exists
- Return the distance as well

**Test Cases:**
```
Graph: A-B, B-C, C-D, A-E, E-D
shortestPath('A', 'D'): path=[A, E, D], distance=2
shortestPath('A', 'C'): path=[A, B, C], distance=2
shortestPath('A', 'F'): path=[], distance=-1
```

---

## Exercise 9: Minimum Spanning Tree - Kruskal's Algorithm

**Difficulty:** Hard

**Description:**
Find the minimum spanning tree of a weighted undirected graph using Kruskal's algorithm.

**Requirements:**
- `kruskal()` - Return edges in the MST
- Use Union-Find data structure
- Return total weight of MST

**Test Cases:**
```
Graph edges with weights:
A-B(1), A-C(4), B-C(2), B-D(5), C-D(3)

MST edges: [A-B(1), B-C(2), C-D(3)]
Total weight: 6
```

---

## Exercise 10: Connected Components

**Difficulty:** Medium

**Description:**
Find all connected components in an undirected graph.

**Requirements:**
- `connectedComponents()` - Return array of components
- Each component is an array of vertices
- Handle isolated vertices

**Test Cases:**
```
Graph: A-B, B-C, D-E, F (isolated)
Components: [[A, B, C], [D, E], [F]]

Graph: A-B-C-D (linear)
Components: [[A, B, C, D]]
```

---

## How to Use This Exercise Set

1. **Read the exercise description** and requirements carefully
2. **Implement the solution** without looking at the solutions
3. **Test with provided test cases**
4. **Compare with the solution** in `/solutions` directory
5. **Review alternative approaches** and optimizations

## Expected Learning Outcomes

- Understand graph representation and data structures
- Master fundamental graph traversal algorithms
- Solve path-finding problems
- Implement advanced algorithms like Dijkstra's and MST
- Develop problem-solving intuition for graph problems

---

**Total Exercises:** 10
**Difficulty Range:** Easy to Hard
**Languages:** JavaScript (ES6+)
