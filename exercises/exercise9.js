/**
 * Exercise 9: Minimum Spanning Tree - Kruskal's Algorithm
 *
 * Find the minimum spanning tree of a weighted undirected graph using Kruskal's algorithm.
 */

class UnionFind {
  // TODO: Implement Union-Find data structure
  // This is needed for Kruskal's algorithm
  // Methods needed:
  // - find(x): Find the root/representative of x
  // - union(x, y): Union two sets containing x and y
  // - connected(x, y): Check if x and y are in the same set
}

class WeightedGraph {
  constructor() {
    this.edges = [];
    this.vertices = new Set();
  }

  addEdge(vertex1, vertex2, weight) {
    this.edges.push({ vertex1, vertex2, weight });
    this.vertices.add(vertex1);
    this.vertices.add(vertex2);
  }

  kruskal() {
    // TODO: Implement Kruskal's algorithm
    // Return an object with:
    // - edges: array of edges in the MST
    // - totalWeight: sum of weights in the MST
    //
    // Example return:
    // {
    //   edges: [
    //     { vertex1: 'A', vertex2: 'B', weight: 1 },
    //     { vertex1: 'B', vertex2: 'C', weight: 2 },
    //     { vertex1: 'C', vertex2: 'D', weight: 3 }
    //   ],
    //   totalWeight: 6
    // }
    //
    // Algorithm Steps:
    // 1. Sort all edges by weight in ascending order
    // 2. Create UnionFind structure for all vertices
    // 3. For each edge (in sorted order):
    //    - If vertices are not already connected:
    //      - Add edge to MST
    //      - Union the two vertices
    // 4. MST is complete when it has (vertices - 1) edges
  }
}

// Test cases
const graph = new WeightedGraph();
graph.addEdge('A', 'B', 1);
graph.addEdge('A', 'C', 4);
graph.addEdge('B', 'C', 2);
graph.addEdge('B', 'D', 5);
graph.addEdge('C', 'D', 3);

console.log('Kruskal\'s MST:');
const mst = graph.kruskal();
console.log('MST Edges:', mst.edges);
console.log('Total Weight:', mst.totalWeight);

// Expected MST edges: [A-B(1), B-C(2), C-D(3)]
// Expected total weight: 6
