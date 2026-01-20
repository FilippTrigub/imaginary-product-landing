/**
 * Solution 4: Detect Cycle in Undirected Graph
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
    const visited = new Set();

    const hasCycleDFS = (vertex, parent) => {
      visited.add(vertex);

      for (const neighbor of this.adjacencyList.get(vertex)) {
        if (!visited.has(neighbor)) {
          // If a cycle is found in the subtree, return true
          if (hasCycleDFS(neighbor, vertex)) {
            return true;
          }
        } else if (neighbor !== parent) {
          // If we visit a vertex that's already visited and it's not the parent,
          // then we've found a cycle
          return true;
        }
      }

      return false;
    };

    // Check each unvisited vertex (handles disconnected graphs)
    for (const vertex of this.adjacencyList.keys()) {
      if (!visited.has(vertex)) {
        if (hasCycleDFS(vertex, null)) {
          return true;
        }
      }
    }

    return false;
  }
}

// Test cases
const graph1 = new Graph();
graph1.addEdge('A', 'B');
graph1.addEdge('B', 'C');
graph1.addEdge('C', 'A'); // Forms a triangle - cycle exists
console.log('Graph 1 (triangle) has cycle:', graph1.hasCycle());
// Output: true

const graph2 = new Graph();
graph2.addEdge('A', 'B');
graph2.addEdge('B', 'C');
graph2.addEdge('C', 'D'); // Linear graph - no cycle
console.log('Graph 2 (linear) has cycle:', graph2.hasCycle());
// Output: false

const graph3 = new Graph();
graph3.addEdge('A', 'B');
graph3.addEdge('C', 'D'); // Disconnected graph - no cycle
console.log('Graph 3 (disconnected) has cycle:', graph3.hasCycle());
// Output: false

const graph4 = new Graph();
graph4.addEdge('A', 'B');
graph4.addEdge('B', 'C');
graph4.addEdge('C', 'D');
graph4.addEdge('D', 'B'); // Cycle in middle: B -> C -> D -> B
console.log('Graph 4 has cycle:', graph4.hasCycle());
// Output: true

// Time Complexity: O(V + E)
// Space Complexity: O(V) for visited set and recursion stack
