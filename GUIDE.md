# Graph Algorithms - Complete Guide

A comprehensive learning guide for the 10 graph algorithm exercises.

## Table of Contents

1. [Introduction](#introduction)
2. [Graph Basics](#graph-basics)
3. [Exercise Walkthrough](#exercise-walkthrough)
4. [Advanced Topics](#advanced-topics)
5. [Common Patterns](#common-patterns)
6. [Interview Tips](#interview-tips)

---

## Introduction

Graph algorithms are fundamental in computer science. They appear in:
- **Social Networks**: Finding friend connections, degrees of separation
- **Navigation**: GPS, route planning
- **Networks**: Routing protocols, network connectivity
- **Databases**: Query optimization
- **Machine Learning**: Neural networks, knowledge graphs

This guide will help you master 10 essential graph algorithms.

---

## Graph Basics

### What is a Graph?

A graph is a data structure consisting of:
- **Vertices (Nodes)**: Points in the graph
- **Edges (Connections)**: Links between vertices
- **Weight (Optional)**: Value associated with an edge

### Types of Graphs

```
Undirected Graph:
    A --- B
    |     |
    C --- D

Directed Graph:
    A --→ B
    ↓     ↓
    C --→ D

Weighted Graph:
    A --2-- B
    |3      |1
    C --4-- D
```

### Graph Representation

#### Adjacency List (Preferred)
```javascript
const graph = new Map();
graph.set('A', ['B', 'D']);
graph.set('B', ['A', 'C']);
graph.set('C', ['B', 'D']);
graph.set('D', ['A', 'C']);
```

**Pros:**
- Space efficient for sparse graphs: O(V + E)
- Fast edge lookup with proper indexing
- Easy to iterate neighbors

**Cons:**
- Slightly slower edge existence check without indexing

#### Adjacency Matrix
```javascript
const graph = [
  [0, 1, 0, 1],  // A: connected to B, D
  [1, 0, 1, 0],  // B: connected to A, C
  [0, 1, 0, 1],  // C: connected to B, D
  [1, 0, 1, 0]   // D: connected to A, C
];
```

**Pros:**
- O(1) edge existence check
- Good for dense graphs

**Cons:**
- Space: O(V²) even for sparse graphs
- Slower for sparse graphs

---

## Exercise Walkthrough

### Exercise 1: Graph Representation

**Key Concepts:**
- Building the foundation for all other algorithms
- Understanding data structure choice

**Implementation Tips:**
```javascript
class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(v1, v2) {
    this.addVertex(v1);
    this.addVertex(v2);
    this.adjacencyList.get(v1).push(v2);
    this.adjacencyList.get(v2).push(v1); // For undirected
  }
}
```

---

### Exercises 2-3: Graph Traversal (BFS vs DFS)

#### BFS (Breadth-First Search)

**Use When:**
- Finding shortest path in unweighted graph
- Level-by-level exploration needed
- Finding all vertices at distance k

**Pattern:**
```javascript
bfs(start) {
  const visited = new Set();
  const queue = [start];
  const result = [];

  visited.add(start);

  while (queue.length > 0) {
    const vertex = queue.shift();
    result.push(vertex);

    for (const neighbor of this.adjacencyList.get(vertex)) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  return result;
}
```

#### DFS (Depth-First Search)

**Use When:**
- Detecting cycles
- Topological sorting
- Finding strongly connected components
- Deep exploration needed

**Recursive Pattern:**
```javascript
dfsRecursive(start) {
  const visited = new Set();
  const result = [];

  const helper = (v) => {
    visited.add(v);
    result.push(v);
    for (const neighbor of this.adjacencyList.get(v)) {
      if (!visited.has(neighbor)) {
        helper(neighbor);
      }
    }
  };

  helper(start);
  return result;
}
```

**Iterative Pattern (using Stack):**
```javascript
dfsIterative(start) {
  const visited = new Set();
  const stack = [start];
  const result = [];

  visited.add(start);

  while (stack.length > 0) {
    const vertex = stack.pop();
    result.push(vertex);

    for (const neighbor of this.adjacencyList.get(vertex)) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        stack.push(neighbor);
      }
    }
  }

  return result;
}
```

**Time Complexity:** O(V + E) for both
**Space Complexity:** O(V)

---

### Exercises 4-5: Cycle Detection

#### Undirected Graph Cycle Detection

**Key Insight:** During DFS, if we revisit a vertex that's not the parent, there's a cycle.

```javascript
hasCycle() {
  const visited = new Set();

  const hasCycleDFS = (v, parent) => {
    visited.add(v);

    for (const neighbor of this.adjacencyList.get(v)) {
      if (!visited.has(neighbor)) {
        if (hasCycleDFS(neighbor, v)) return true;
      } else if (neighbor !== parent) {
        return true; // Back edge found
      }
    }
    return false;
  };

  for (const v of this.adjacencyList.keys()) {
    if (!visited.has(v)) {
      if (hasCycleDFS(v, null)) return true;
    }
  }
  return false;
}
```

#### Directed Graph Cycle Detection

**Key Insight:** Use three colors:
- **White (0):** Unvisited
- **Gray (1):** Currently visiting
- **Black (2):** Completely visited

A back edge (gray → gray) indicates a cycle.

```javascript
hasCycle() {
  const colors = new Map();
  for (const v of this.adjacencyList.keys()) {
    colors.set(v, 0); // white
  }

  const hasCycleDFS = (v) => {
    colors.set(v, 1); // gray

    for (const neighbor of this.adjacencyList.get(v)) {
      if (colors.get(neighbor) === 1) {
        return true; // Back edge found
      }
      if (colors.get(neighbor) === 0) {
        if (hasCycleDFS(neighbor)) return true;
      }
    }

    colors.set(v, 2); // black
    return false;
  };

  for (const v of this.adjacencyList.keys()) {
    if (colors.get(v) === 0) {
      if (hasCycleDFS(v)) return true;
    }
  }
  return false;
}
```

---

### Exercise 6: Topological Sorting

**When to Use:**
- Dependency resolution (package managers, build systems)
- Course prerequisite ordering
- Job scheduling with dependencies

**Kahn's Algorithm (BFS-based):**

```javascript
topologicalSort() {
  // Step 1: Calculate in-degrees
  const inDegree = new Map();
  for (const v of this.adjacencyList.keys()) {
    inDegree.set(v, 0);
  }

  for (const v of this.adjacencyList.keys()) {
    for (const neighbor of this.adjacencyList.get(v)) {
      inDegree.set(neighbor, inDegree.get(neighbor) + 1);
    }
  }

  // Step 2: Queue vertices with in-degree 0
  const queue = [];
  for (const v of this.adjacencyList.keys()) {
    if (inDegree.get(v) === 0) {
      queue.push(v);
    }
  }

  const result = [];

  // Step 3: Process queue
  while (queue.length > 0) {
    const v = queue.shift();
    result.push(v);

    for (const neighbor of this.adjacencyList.get(v)) {
      inDegree.set(neighbor, inDegree.get(neighbor) - 1);
      if (inDegree.get(neighbor) === 0) {
        queue.push(neighbor);
      }
    }
  }

  // Step 4: Check for cycles
  return result.length === this.adjacencyList.size ? result : null;
}
```

---

### Exercises 7-8: Shortest Path Algorithms

#### Dijkstra's Algorithm (Weighted Graphs)

**When to Use:**
- GPS navigation
- Network routing
- Game pathfinding
- Only works with non-negative weights

**Key Idea:** Always process the nearest unvisited vertex.

```javascript
dijkstra(start) {
  const distances = new Map();
  const visited = new Set();

  for (const v of this.adjacencyList.keys()) {
    distances.set(v, Infinity);
  }
  distances.set(start, 0);

  while (visited.size < this.adjacencyList.size) {
    // Find nearest unvisited vertex
    let minV = null;
    let minDist = Infinity;

    for (const v of this.adjacencyList.keys()) {
      if (!visited.has(v) && distances.get(v) < minDist) {
        minV = v;
        minDist = distances.get(v);
      }
    }

    if (minV === null) break;
    visited.add(minV);

    // Update distances
    for (const { vertex: neighbor, weight } of this.adjacencyList.get(minV)) {
      if (!visited.has(neighbor)) {
        const newDist = distances.get(minV) + weight;
        if (newDist < distances.get(neighbor)) {
          distances.set(neighbor, newDist);
        }
      }
    }
  }

  return distances;
}
```

**Time Complexity:**
- O(V²) with simple array
- O((V + E) log V) with min-heap (better for sparse graphs)

#### BFS for Shortest Path (Unweighted Graphs)

Much simpler and efficient for unweighted graphs:

```javascript
shortestPath(start, end) {
  const visited = new Set();
  const queue = [start];
  const parent = new Map();

  visited.add(start);
  parent.set(start, null);

  while (queue.length > 0) {
    const v = queue.shift();

    if (v === end) {
      // Reconstruct path
      const path = [];
      let current = end;
      while (current !== null) {
        path.unshift(current);
        current = parent.get(current);
      }
      return { path, distance: path.length - 1 };
    }

    for (const neighbor of this.adjacencyList.get(v)) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        parent.set(neighbor, v);
        queue.push(neighbor);
      }
    }
  }

  return { path: [], distance: -1 };
}
```

---

### Exercise 9: Kruskal's Algorithm (MST)

**When to Use:**
- Network design (minimum cost to connect cities)
- Circuit board design
- Any minimum cost spanning tree problem

**Key Data Structure: Union-Find**

```javascript
class UnionFind {
  constructor(vertices) {
    this.parent = new Map();
    this.rank = new Map();

    for (const v of vertices) {
      this.parent.set(v, v);
      this.rank.set(v, 0);
    }
  }

  find(x) {
    if (this.parent.get(x) !== x) {
      this.parent.set(x, this.find(this.parent.get(x))); // Path compression
    }
    return this.parent.get(x);
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX === rootY) return false;

    // Union by rank
    if (this.rank.get(rootX) < this.rank.get(rootY)) {
      this.parent.set(rootX, rootY);
    } else if (this.rank.get(rootX) > this.rank.get(rootY)) {
      this.parent.set(rootY, rootX);
    } else {
      this.parent.set(rootY, rootX);
      this.rank.set(rootX, this.rank.get(rootX) + 1);
    }
    return true;
  }
}
```

**Kruskal's Algorithm:**

```javascript
kruskal() {
  // Sort edges by weight
  const sortedEdges = [...this.edges].sort((a, b) => a.weight - b.weight);

  const uf = new UnionFind(this.vertices);
  const mstEdges = [];

  for (const edge of sortedEdges) {
    if (uf.union(edge.v1, edge.v2)) {
      mstEdges.push(edge);
      if (mstEdges.length === this.vertices.size - 1) break;
    }
  }

  return mstEdges;
}
```

**Time Complexity:** O(E log E) due to sorting

---

### Exercise 10: Connected Components

**Use Cases:**
- Finding isolated groups in networks
- Determining if graph is connected
- Network resilience analysis

```javascript
connectedComponents() {
  const visited = new Set();
  const components = [];

  const dfs = (v, component) => {
    visited.add(v);
    component.push(v);

    for (const neighbor of this.adjacencyList.get(v)) {
      if (!visited.has(neighbor)) {
        dfs(neighbor, component);
      }
    }
  };

  for (const v of this.adjacencyList.keys()) {
    if (!visited.has(v)) {
      const component = [];
      dfs(v, component);
      components.push(component);
    }
  }

  return components;
}
```

---

## Advanced Topics

### 1. Union-Find (Disjoint Set Union)

**Operations:**
- `find(x)`: Find representative of set containing x
- `union(x, y)`: Merge two sets

**Optimizations:**
- Path compression in `find`
- Union by rank

**Time Complexity (with both optimizations):** Nearly O(1) amortized

### 2. Strongly Connected Components (SCC)

Find all maximal subsets where every vertex is reachable from every other.

**Kosaraju's Algorithm:** Two DFS passes on original and transpose graphs.

### 3. Minimum Spanning Tree Variants

- **Prim's Algorithm:** Add minimum edge from visited to unvisited
- **Kruskal's Algorithm:** Add minimum edge overall if no cycle

### 4. All-Pairs Shortest Path

- **Floyd-Warshall:** O(V³), handles negative weights
- **Johnson's Algorithm:** O(V·E log V) with reweighting

---

## Common Patterns

### Pattern 1: Detecting Something with DFS

```javascript
const visited = new Set();

const checkCondition = (vertex, context) => {
  visited.add(vertex);

  for (const neighbor of this.adjacencyList.get(vertex)) {
    if (!visited.has(neighbor)) {
      if (checkCondition(neighbor, context)) {
        return true; // Condition found
      }
    }
  }

  return false;
};

for (const v of this.adjacencyList.keys()) {
  if (!visited.has(v)) {
    if (checkCondition(v, context)) return true;
  }
}
```

### Pattern 2: Collecting Results with BFS

```javascript
const visited = new Set();
const queue = [start];
const result = [];

visited.add(start);

while (queue.length > 0) {
  const vertex = queue.shift();
  result.push(vertex);

  for (const neighbor of this.adjacencyList.get(vertex)) {
    if (!visited.has(neighbor)) {
      visited.add(neighbor);
      queue.push(neighbor);
    }
  }
}
```

### Pattern 3: Path Reconstruction

```javascript
const parent = new Map();
// ... during traversal ...
parent.set(neighbor, current);

// Reconstruct path
const path = [];
let current = end;
while (current !== null) {
  path.unshift(current);
  current = parent.get(current);
}
```

---

## Interview Tips

### Before Coding

1. **Clarify the problem:**
   - Directed or undirected?
   - Weighted or unweighted?
   - Connected or disconnected?
   - Single source or all pairs?

2. **Choose representation:**
   - Adjacency list (default)
   - Adjacency matrix (dense graphs)

3. **Plan algorithm:**
   - Draw small example
   - Trace through algorithm
   - Identify edge cases

### While Coding

1. **Handle edge cases:**
   - Empty graph
   - Single vertex
   - Disconnected vertices
   - Self-loops

2. **Write clean code:**
   - Clear variable names
   - Proper indentation
   - Comments for complex logic

3. **Test as you go:**
   - Use console.log strategically
   - Test with examples

### Common Mistakes

❌ **Forgetting to mark vertices as visited** - Causes infinite loops

❌ **Not handling disconnected graphs** - Use loop over all vertices

❌ **Wrong traversal direction** - BFS for unweighted shortest path, not DFS

❌ **Not reconstructing paths** - Calculate distances but forget about actual path

❌ **Negative weights in Dijkstra** - Use Bellman-Ford instead

✅ **Always initialize visited sets/maps**

✅ **Handle empty input gracefully**

✅ **Test with disconnected components**

✅ **Verify time/space complexity**

---

**Keep practicing, and you'll master graph algorithms! 🚀**
