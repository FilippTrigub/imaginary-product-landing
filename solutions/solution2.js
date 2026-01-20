/**
 * Solution 2: Breadth-First Search (BFS)
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

  bfs(startVertex) {
    if (!this.adjacencyList.has(startVertex)) {
      return [];
    }

    const visited = new Set();
    const queue = [startVertex];
    const result = [];

    visited.add(startVertex);

    while (queue.length > 0) {
      const vertex = queue.shift();
      result.push(vertex);

      // Add all unvisited neighbors to queue
      for (const neighbor of this.adjacencyList.get(vertex)) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
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

console.log('BFS from A:', graph.bfs('A'));
// Output: [A, B, D, C, E]

console.log('BFS from C:', graph.bfs('C'));
// Output: [C, B, A, D, E]

console.log('BFS from E:', graph.bfs('E'));
// Output: [E, D, A, B, C]

console.log('BFS from non-existent vertex:', graph.bfs('X'));
// Output: []

// Time Complexity: O(V + E) where V is vertices and E is edges
// Space Complexity: O(V) for the queue and visited set
