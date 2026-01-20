/**
 * Solution 5: Detect Cycle in Directed Graph
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
    // Color coding: white (0) = unvisited, gray (1) = visiting, black (2) = visited
    const colors = new Map();

    // Initialize all vertices as white
    for (const vertex of this.adjacencyList.keys()) {
      colors.set(vertex, 0);
    }

    const hasCycleDFS = (vertex) => {
      colors.set(vertex, 1); // Mark as gray (visiting)

      for (const neighbor of this.adjacencyList.get(vertex)) {
        const color = colors.get(neighbor);

        if (color === 1) {
          // Back edge found: neighbor is currently being visited (gray)
          return true;
        }

        if (color === 0) {
          // White vertex: continue DFS
          if (hasCycleDFS(neighbor)) {
            return true;
          }
        }
        // Black vertices are already processed, skip them
      }

      colors.set(vertex, 2); // Mark as black (visited)
      return false;
    };

    // Check all vertices
    for (const vertex of this.adjacencyList.keys()) {
      if (colors.get(vertex) === 0) {
        if (hasCycleDFS(vertex)) {
          return true;
        }
      }
    }

    return false;
  }
}

// Test cases
const graph1 = new DirectedGraph();
graph1.addEdge('A', 'B');
graph1.addEdge('B', 'C');
graph1.addEdge('C', 'A'); // Cycle: A -> B -> C -> A
console.log('Graph 1 (cyclic) has cycle:', graph1.hasCycle());
// Output: true

const graph2 = new DirectedGraph();
graph2.addEdge('A', 'B');
graph2.addEdge('B', 'C');
graph2.addEdge('A', 'C'); // DAG - no cycle
console.log('Graph 2 (DAG) has cycle:', graph2.hasCycle());
// Output: false

const graph3 = new DirectedGraph();
graph3.addEdge('A', 'B');
graph3.addEdge('B', 'C');
graph3.addEdge('C', 'D');
graph3.addEdge('D', 'B'); // Cycle: B -> C -> D -> B
console.log('Graph 3 (cyclic) has cycle:', graph3.hasCycle());
// Output: true

const graph4 = new DirectedGraph();
graph4.addEdge('1', '2');
graph4.addEdge('2', '3');
graph4.addEdge('3', '4');
graph4.addEdge('2', '4'); // No cycle
console.log('Graph 4 (DAG) has cycle:', graph4.hasCycle());
// Output: false

// Time Complexity: O(V + E)
// Space Complexity: O(V) for the color map and recursion stack
