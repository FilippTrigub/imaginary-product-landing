/**
 * Exercise 6: Topological Sorting
 *
 * Find a topological ordering of vertices in a directed acyclic graph (DAG).
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

  topologicalSort() {
    // TODO: Implement topological sorting
    // Use Kahn's algorithm (BFS-based with in-degree)
    // Alternative: Use DFS-based approach with finish times
    // Return an array of vertices in topological order
    // Return null if the graph contains a cycle
    //
    // Kahn's Algorithm Steps:
    // 1. Calculate in-degree for each vertex
    // 2. Queue all vertices with in-degree 0
    // 3. While queue is not empty:
    //    - Remove vertex from queue and add to result
    //    - For each neighbor: decrease in-degree, queue if in-degree becomes 0
    // 4. If result length != total vertices, there's a cycle (return null)
  }
}

// Test cases
const graph1 = new DirectedGraph();
graph1.addEdge('A', 'B');
graph1.addEdge('A', 'C');
graph1.addEdge('B', 'D');
graph1.addEdge('C', 'D');
console.log('Graph 1 topological sort:', graph1.topologicalSort());
// Expected: [A, B, C, D] or [A, C, B, D] (valid orderings)

const graph2 = new DirectedGraph();
graph2.addEdge('A', 'B');
graph2.addEdge('B', 'C');
graph2.addEdge('C', 'A'); // Cycle
console.log('Graph 2 (cyclic) topological sort:', graph2.topologicalSort());
// Expected: null (contains cycle)

const graph3 = new DirectedGraph();
graph3.addEdge('5', '2');
graph3.addEdge('5', '0');
graph3.addEdge('4', '0');
graph3.addEdge('4', '1');
graph3.addEdge('2', '3');
graph3.addEdge('3', '1');
console.log('Graph 3 topological sort:', graph3.topologicalSort());
// Expected: [5, 4, 2, 0, 3, 1] or similar valid ordering
