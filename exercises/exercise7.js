/**
 * Exercise 7: Shortest Path - Dijkstra's Algorithm
 *
 * Find the shortest path from a source vertex to all other vertices using Dijkstra's algorithm.
 */

class WeightedGraph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(vertex1, vertex2, weight) {
    this.addVertex(vertex1);
    this.addVertex(vertex2);
    if (weight < 0) {
      throw new Error('Dijkstra does not support negative weights');
    }
    this.adjacencyList.get(vertex1).push({ vertex: vertex2, weight });
    this.adjacencyList.get(vertex2).push({ vertex: vertex1, weight });
  }

  dijkstra(startVertex) {
    // TODO: Implement Dijkstra's algorithm
    // Return an object with:
    // - distances: object mapping vertices to shortest distances
    // - paths: object mapping vertices to shortest paths
    //
    // Example return:
    // {
    //   distances: { A: 0, B: 3, C: 2, D: 8, E: 10 },
    //   paths: { A: [], B: [A, C], C: [A], D: [A, C, B], E: [A, C, B, D] }
    // }
    //
    // Algorithm Steps:
    // 1. Initialize distances to all vertices as Infinity, except start as 0
    // 2. Initialize paths
    // 3. Use a priority queue (or find minimum each time)
    // 4. For each unvisited vertex with minimum distance:
    //    - Mark as visited
    //    - Update distances and paths of neighbors
    // 5. Continue until all vertices visited
  }
}

// Test cases
const graph = new WeightedGraph();
graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'C', 1);
graph.addEdge('B', 'D', 5);
graph.addEdge('C', 'D', 8);
graph.addEdge('C', 'E', 10);
graph.addEdge('D', 'E', 2);

console.log('Dijkstra from A:');
const result = graph.dijkstra('A');
console.log('Distances:', result.distances);
console.log('Paths:', result.paths);

// Expected distances: { A: 0, B: 3, C: 2, D: 8, E: 10 }
// Expected paths: { A: [], B: [A, C], C: [A], D: [A, C, B], E: [A, C, B, D] }
