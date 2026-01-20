/**
 * Exercise 8: Shortest Path - BFS for Unweighted Graph
 *
 * Find the shortest path between two vertices in an unweighted graph using BFS.
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
    // TODO: Implement shortest path using BFS
    // Return an object with:
    // - path: array of vertices from start to end
    // - distance: number of edges in the shortest path
    //
    // Example return:
    // { path: [A, E, D], distance: 2 }
    //
    // Return { path: [], distance: -1 } if no path exists
    //
    // Algorithm:
    // 1. Use BFS starting from the start vertex
    // 2. Track parent of each visited vertex
    // 3. When end vertex is found, backtrack through parents to get path
    // 4. Return path and distance
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
// Expected: { path: [A, E, D], distance: 2 } or { path: [A, B, C, D], distance: 3 }

console.log('Shortest path A to C:', graph.shortestPath('A', 'C'));
// Expected: { path: [A, B, C], distance: 2 }

console.log('Shortest path A to F:', graph.shortestPath('A', 'F'));
// Expected: { path: [], distance: -1 }

console.log('Shortest path B to E:', graph.shortestPath('B', 'E'));
// Expected: { path: [B, A, E], distance: 2 }
