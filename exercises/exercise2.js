/**
 * Exercise 2: Breadth-First Search (BFS)
 *
 * Implement BFS traversal on a graph. Return the order in which vertices are visited.
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
    // TODO: Implement BFS traversal
    // Return an array of vertices in BFS order
    // Use a queue for BFS (you can use an array with shift() and push())
    // Handle the case where startVertex doesn't exist
  }
}

// Test cases
const graph = new Graph();
graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('A', 'D');
graph.addEdge('D', 'E');

console.log('BFS from A:', graph.bfs('A')); // Expected: [A, B, D, C, E]
console.log('BFS from C:', graph.bfs('C')); // Expected: [C, B, A, D, E]
console.log('BFS from E:', graph.bfs('E')); // Expected: [E, D, A, B, C]
