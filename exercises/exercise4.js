/**
 * Exercise 4: Detect Cycle in Undirected Graph
 *
 * Determine if an undirected graph contains a cycle.
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

  hasCycle() {
    // TODO: Implement cycle detection for undirected graphs
    // Use DFS approach with parent tracking
    // Return true if cycle exists, false otherwise
    // Handle multiple connected components
  }
}

// Test cases
const graph1 = new Graph();
graph1.addEdge('A', 'B');
graph1.addEdge('B', 'C');
graph1.addEdge('C', 'A'); // Forms a triangle - cycle exists
console.log('Graph 1 (triangle) has cycle:', graph1.hasCycle()); // Expected: true

const graph2 = new Graph();
graph2.addEdge('A', 'B');
graph2.addEdge('B', 'C');
graph2.addEdge('C', 'D'); // Linear graph - no cycle
console.log('Graph 2 (linear) has cycle:', graph2.hasCycle()); // Expected: false

const graph3 = new Graph();
graph3.addEdge('A', 'B');
graph3.addEdge('C', 'D'); // Disconnected graph - no cycle
console.log('Graph 3 (disconnected) has cycle:', graph3.hasCycle()); // Expected: false
