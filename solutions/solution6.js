/**
 * Solution 6: Topological Sorting
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
    // Kahn's Algorithm (BFS-based)
    // 1. Calculate in-degree for each vertex
    const inDegree = new Map();
    for (const vertex of this.adjacencyList.keys()) {
      inDegree.set(vertex, 0);
    }

    // Count in-degrees
    for (const vertex of this.adjacencyList.keys()) {
      for (const neighbor of this.adjacencyList.get(vertex)) {
        inDegree.set(neighbor, inDegree.get(neighbor) + 1);
      }
    }

    // 2. Queue all vertices with in-degree 0
    const queue = [];
    for (const vertex of this.adjacencyList.keys()) {
      if (inDegree.get(vertex) === 0) {
        queue.push(vertex);
      }
    }

    const result = [];

    // 3. Process vertices with in-degree 0
    while (queue.length > 0) {
      const vertex = queue.shift();
      result.push(vertex);

      // Reduce in-degree of neighbors
      for (const neighbor of this.adjacencyList.get(vertex)) {
        inDegree.set(neighbor, inDegree.get(neighbor) - 1);

        // If in-degree becomes 0, add to queue
        if (inDegree.get(neighbor) === 0) {
          queue.push(neighbor);
        }
      }
    }

    // 4. If result doesn't include all vertices, there's a cycle
    if (result.length !== this.adjacencyList.size) {
      return null;
    }

    return result;
  }
}

// Test cases
const graph1 = new DirectedGraph();
graph1.addEdge('A', 'B');
graph1.addEdge('A', 'C');
graph1.addEdge('B', 'D');
graph1.addEdge('C', 'D');
console.log('Graph 1 topological sort:', graph1.topologicalSort());
// Output: [A, B, C, D] or [A, C, B, D] (valid orderings)

const graph2 = new DirectedGraph();
graph2.addEdge('A', 'B');
graph2.addEdge('B', 'C');
graph2.addEdge('C', 'A'); // Cycle
console.log('Graph 2 (cyclic) topological sort:', graph2.topologicalSort());
// Output: null

const graph3 = new DirectedGraph();
graph3.addEdge('5', '2');
graph3.addEdge('5', '0');
graph3.addEdge('4', '0');
graph3.addEdge('4', '1');
graph3.addEdge('2', '3');
graph3.addEdge('3', '1');
console.log('Graph 3 topological sort:', graph3.topologicalSort());
// Output: [5, 4, 2, 0, 3, 1] or similar valid ordering

const graph4 = new DirectedGraph();
graph4.addEdge('A', 'B');
graph4.addEdge('B', 'C');
graph4.addEdge('C', 'D');
graph4.addEdge('D', 'E');
console.log('Graph 4 topological sort:', graph4.topologicalSort());
// Output: [A, B, C, D, E]

// Time Complexity: O(V + E)
// Space Complexity: O(V) for the in-degree map and queue
