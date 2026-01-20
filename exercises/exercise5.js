/**
 * Exercise 5: Detect Cycle in Directed Graph
 *
 * Determine if a directed graph contains a cycle.
 */

class DirectedGraph {
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
  }

  hasCycle() {
    // TODO: Implement cycle detection for directed graphs
    // Use DFS with color marking (white, gray, black)
    // white = unvisited, gray = visiting, black = visited
    // If we encounter a gray node during DFS, there's a cycle
    // Return true if cycle exists, false otherwise
  }
}

// Test cases
const graph1 = new DirectedGraph();
graph1.addEdge('A', 'B');
graph1.addEdge('B', 'C');
graph1.addEdge('C', 'A'); // Cycle: A -> B -> C -> A
console.log('Graph 1 (cyclic) has cycle:', graph1.hasCycle()); // Expected: true

const graph2 = new DirectedGraph();
graph2.addEdge('A', 'B');
graph2.addEdge('B', 'C');
graph2.addEdge('A', 'C'); // DAG - no cycle
console.log('Graph 2 (DAG) has cycle:', graph2.hasCycle()); // Expected: false

const graph3 = new DirectedGraph();
graph3.addEdge('A', 'B');
graph3.addEdge('B', 'C');
graph3.addEdge('C', 'D');
graph3.addEdge('D', 'B'); // Cycle: B -> C -> D -> B
console.log('Graph 3 (cyclic) has cycle:', graph3.hasCycle()); // Expected: true
