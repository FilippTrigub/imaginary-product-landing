/**
 * Solution 3: Depth-First Search (DFS)
 */

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(vertex1, vertex2) {
    this.addVertex(vertex1);
    this.addVertex(vertex2);
    this.adjacencyList.get(vertex1).push(vertex2);
    this.adjacencyList.get(vertex2).push(vertex1);
  }

  dfsRecursive(startVertex) {
    const visited = new Set();
    const result = [];

    const dfsHelper = (vertex) => {
      visited.add(vertex);
      result.push(vertex);

      for (const neighbor of this.adjacencyList.get(vertex)) {
        if (!visited.has(neighbor)) {
          dfsHelper(neighbor);
        }
      }
    };

    if (this.adjacencyList.has(startVertex)) {
      dfsHelper(startVertex);
    }

    return result;
  }

  dfsIterative(startVertex) {
    if (!this.adjacencyList.has(startVertex)) {
      return [];
    }

    const visited = new Set();
    const stack = [startVertex];
    const result = [];

    visited.add(startVertex);

    while (stack.length > 0) {
      const vertex = stack.pop();
      result.push(vertex);

      // Add unvisited neighbors to stack (in reverse order for consistency)
      const neighbors = this.adjacencyList.get(vertex);
      for (let i = neighbors.length - 1; i >= 0; i--) {
        const neighbor = neighbors[i];
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          stack.push(neighbor);
        }
      }
    }

    return result;
  }
}

// Test cases
const graph = new Graph();
graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('A', 'D');
graph.addEdge('D', 'E');

console.log('DFS Recursive from A:', graph.dfsRecursive('A'));
// Output: [A, B, C, D, E]

console.log('DFS Iterative from A:', graph.dfsIterative('A'));
// Output: [A, D, E, B, C]

console.log('DFS Recursive from C:', graph.dfsRecursive('C'));
// Output: [C, B, A, D, E]

console.log('DFS Iterative from C:', graph.dfsIterative('C'));
// Output: [C, B, A, D, E]

// Time Complexity: O(V + E) for both versions
// Space Complexity: O(V) for the visited set and recursion/stack space
