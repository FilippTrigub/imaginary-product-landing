/**
 * Solution 10: Connected Components
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
    const visited = new Set();
    const components = [];

    // DFS helper to find all vertices in a component
    const dfs = (vertex, component) => {
      visited.add(vertex);
      component.push(vertex);

      for (const neighbor of this.adjacencyList.get(vertex)) {
        if (!visited.has(neighbor)) {
          dfs(neighbor, component);
        }
      }
    };

    // Find all components
    for (const vertex of this.adjacencyList.keys()) {
      if (!visited.has(vertex)) {
        const component = [];
        dfs(vertex, component);
        components.push(component);
      }
    }

    return components;
  }
}

// Alternative implementation using BFS
class GraphBFS {
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
    const visited = new Set();
    const components = [];

    const bfs = (startVertex) => {
      const component = [];
      const queue = [startVertex];
      visited.add(startVertex);

      while (queue.length > 0) {
        const vertex = queue.shift();
        component.push(vertex);

        for (const neighbor of this.adjacencyList.get(vertex)) {
          if (!visited.has(neighbor)) {
            visited.add(neighbor);
            queue.push(neighbor);
          }
        }
      }

      return component;
    };

    for (const vertex of this.adjacencyList.keys()) {
      if (!visited.has(vertex)) {
        const component = bfs(vertex);
        components.push(component);
      }
    }

    return components;
  }
}

// Test cases - DFS version
console.log('=== DFS Implementation ===');
const graph1 = new Graph();
graph1.addEdge('A', 'B');
graph1.addEdge('B', 'C');
graph1.addEdge('D', 'E');
graph1.addVertex('F'); // Isolated vertex

console.log('Graph 1 connected components:');
console.log(graph1.connectedComponents());
// Output: [[A, B, C], [D, E], [F]]

const graph2 = new Graph();
graph2.addEdge('A', 'B');
graph2.addEdge('B', 'C');
graph2.addEdge('C', 'D');

console.log('\nGraph 2 connected components:');
console.log(graph2.connectedComponents());
// Output: [[A, B, C, D]]

const graph3 = new Graph();
graph3.addVertex('X');
graph3.addVertex('Y');
graph3.addVertex('Z');

console.log('\nGraph 3 connected components (all isolated):');
console.log(graph3.connectedComponents());
// Output: [[X], [Y], [Z]]

const graph4 = new Graph();
graph4.addEdge('1', '2');
graph4.addEdge('2', '3');
graph4.addEdge('4', '5');
graph4.addEdge('5', '6');
graph4.addEdge('6', '7');
graph4.addVertex('8');

console.log('\nGraph 4 connected components:');
console.log(graph4.connectedComponents());
// Output: [[1, 2, 3], [4, 5, 6, 7], [8]]

// Test cases - BFS version
console.log('\n=== BFS Implementation ===');
const graphBFS = new GraphBFS();
graphBFS.addEdge('A', 'B');
graphBFS.addEdge('B', 'C');
graphBFS.addEdge('D', 'E');
graphBFS.addVertex('F');

console.log('Graph (BFS) connected components:');
console.log(graphBFS.connectedComponents());
// Output: [[A, B, C], [D, E], [F]]

// Time Complexity: O(V + E) for both DFS and BFS
// Space Complexity: O(V) for visited set and recursion/queue space
