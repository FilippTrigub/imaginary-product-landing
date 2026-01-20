/**
 * Solution 1: Implement a Graph using Adjacency List
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

    // Add edges in both directions for undirected graph
    this.adjacencyList.get(vertex1).push(vertex2);
    this.adjacencyList.get(vertex2).push(vertex1);
  }

  getVertices() {
    return Array.from(this.adjacencyList.keys());
  }

  getAdjacent(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      return [];
    }
    return this.adjacencyList.get(vertex);
  }

  display() {
    for (const [vertex, adjacent] of this.adjacencyList) {
      console.log(`${vertex}: [${adjacent.join(', ')}]`);
    }
  }
}

// Test cases
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');

graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('C', 'D');
graph.addEdge('A', 'D');

console.log('Vertices:', graph.getVertices());
// Output: ['A', 'B', 'C', 'D']

console.log('Adjacent to A:', graph.getAdjacent('A'));
// Output: ['B', 'D']

console.log('Adjacent to B:', graph.getAdjacent('B'));
// Output: ['A', 'C']

console.log('\nGraph Display:');
graph.display();
// Output:
// A: [B, D]
// B: [A, C]
// C: [B, D]
// D: [C, A]
