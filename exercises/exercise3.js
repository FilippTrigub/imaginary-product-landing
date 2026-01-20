/**
 * Exercise 3: Depth-First Search (DFS)
 *
 * Implement DFS traversal on a graph. Return the order in which vertices are visited.
 * Implement both recursive and iterative versions.
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
    // TODO: Implement recursive DFS
    // Return an array of vertices in DFS order
  }

  dfsIterative(startVertex) {
    // TODO: Implement iterative DFS using a stack
    // Return an array of vertices in DFS order
  }
}

// Test cases
const graph = new Graph();
graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('A', 'D');
graph.addEdge('D', 'E');

console.log('DFS Recursive from A:', graph.dfsRecursive('A'));
console.log('DFS Iterative from A:', graph.dfsIterative('A'));
console.log('DFS Recursive from C:', graph.dfsRecursive('C'));
console.log('DFS Iterative from C:', graph.dfsIterative('C'));
