/**
 * Exercise 1: Implement a Graph using Adjacency List
 *
 * Create a Graph class that represents an undirected graph using an adjacency list.
 * Implement methods to add vertices, add edges, and display the graph.
 */

class Graph {
  constructor() {
    // TODO: Initialize the graph data structure
  }

  addVertex(vertex) {
    // TODO: Add a vertex to the graph
  }

  addEdge(vertex1, vertex2) {
    // TODO: Add an undirected edge between two vertices
  }

  getVertices() {
    // TODO: Return all vertices
  }

  getAdjacent(vertex) {
    // TODO: Return adjacent vertices of a given vertex
  }

  display() {
    // TODO: Print the adjacency list representation
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
console.log('Adjacent to A:', graph.getAdjacent('A'));
console.log('Adjacent to B:', graph.getAdjacent('B'));
console.log('\nGraph Display:');
graph.display();
