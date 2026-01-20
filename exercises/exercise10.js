/**
 * Exercise 10: Connected Components
 *
 * Find all connected components in an undirected graph.
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

  connectedComponents() {
    // TODO: Implement connected components detection
    // Return an array of components, where each component is an array of vertices
    //
    // Example return:
    // [[A, B, C], [D, E], [F]]
    //
    // Algorithm:
    // 1. Maintain a visited set
    // 2. For each unvisited vertex:
    //    - Perform DFS/BFS from that vertex
    //    - Collect all visited vertices in current component
    //    - Add component to results
    // 3. Return array of all components
    // 4. Handle isolated vertices (vertices with no edges)
  }
}

// Test cases
const graph1 = new Graph();
graph1.addEdge('A', 'B');
graph1.addEdge('B', 'C');
graph1.addEdge('D', 'E');
graph1.addVertex('F'); // Isolated vertex

console.log('Graph 1 connected components:');
console.log(graph1.connectedComponents());
// Expected: [[A, B, C], [D, E], [F]]

const graph2 = new Graph();
graph2.addEdge('A', 'B');
graph2.addEdge('B', 'C');
graph2.addEdge('C', 'D');

console.log('Graph 2 connected components:');
console.log(graph2.connectedComponents());
// Expected: [[A, B, C, D]]

const graph3 = new Graph();
graph3.addVertex('X');
graph3.addVertex('Y');
graph3.addVertex('Z');

console.log('Graph 3 connected components (all isolated):');
console.log(graph3.connectedComponents());
// Expected: [[X], [Y], [Z]]
