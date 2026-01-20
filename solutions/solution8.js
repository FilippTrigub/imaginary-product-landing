/**
 * Solution 8: Shortest Path - BFS for Unweighted Graph
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

  shortestPath(start, end) {
    if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) {
      return { path: [], distance: -1 };
    }

    if (start === end) {
      return { path: [start], distance: 0 };
    }

    const visited = new Set();
    const queue = [start];
    const parent = new Map();

    visited.add(start);
    parent.set(start, null);

    while (queue.length > 0) {
      const vertex = queue.shift();

      // Found the target
      if (vertex === end) {
        // Backtrack to reconstruct path
        const path = [];
        let current = end;

        while (current !== null) {
          path.unshift(current);
          current = parent.get(current);
        }

        return {
          path: path,
          distance: path.length - 1
        };
      }

      // Explore neighbors
      for (const neighbor of this.adjacencyList.get(vertex)) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          parent.set(neighbor, vertex);
          queue.push(neighbor);
        }
      }
    }

    // End vertex not reachable from start
    return { path: [], distance: -1 };
  }
}

// Test cases
const graph = new Graph();
graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('C', 'D');
graph.addEdge('A', 'E');
graph.addEdge('E', 'D');

console.log('Shortest path A to D:', graph.shortestPath('A', 'D'));
// Output: { path: [A, E, D], distance: 2 }

console.log('Shortest path A to C:', graph.shortestPath('A', 'C'));
// Output: { path: [A, B, C], distance: 2 }

console.log('Shortest path A to F:', graph.shortestPath('A', 'F'));
// Output: { path: [], distance: -1 }

console.log('Shortest path B to E:', graph.shortestPath('B', 'E'));
// Output: { path: [B, A, E], distance: 2 }

console.log('Shortest path A to A:', graph.shortestPath('A', 'A'));
// Output: { path: [A], distance: 0 }

// Additional test case with disconnected vertices
const graph2 = new Graph();
graph2.addEdge('X', 'Y');
graph2.addEdge('Y', 'Z');
graph2.addVertex('W'); // Isolated vertex

console.log('\nDisconnected graph - X to W:', graph2.shortestPath('X', 'W'));
// Output: { path: [], distance: -1 }

console.log('Disconnected graph - X to Z:', graph2.shortestPath('X', 'Z'));
// Output: { path: [X, Y, Z], distance: 2 }

// Time Complexity: O(V + E) for BFS
// Space Complexity: O(V) for visited, queue, and parent map
