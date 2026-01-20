/**
 * Solution 9: Minimum Spanning Tree - Kruskal's Algorithm
 */

class UnionFind {
  constructor(vertices) {
    this.parent = new Map();
    this.rank = new Map();

    for (const vertex of vertices) {
      this.parent.set(vertex, vertex);
      this.rank.set(vertex, 0);
    }
  }

  find(x) {
    if (this.parent.get(x) !== x) {
      // Path compression: make parent point directly to root
      this.parent.set(x, this.find(this.parent.get(x)));
    }
    return this.parent.get(x);
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX === rootY) {
      return false; // Already in same set
    }

    // Union by rank: attach smaller tree under larger tree
    if (this.rank.get(rootX) < this.rank.get(rootY)) {
      this.parent.set(rootX, rootY);
    } else if (this.rank.get(rootX) > this.rank.get(rootY)) {
      this.parent.set(rootY, rootX);
    } else {
      this.parent.set(rootY, rootX);
      this.rank.set(rootX, this.rank.get(rootX) + 1);
    }

    return true;
  }

  connected(x, y) {
    return this.find(x) === this.find(y);
  }
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
    // Sort edges by weight
    const sortedEdges = [...this.edges].sort((a, b) => a.weight - b.weight);

    // Initialize UnionFind
    const unionFind = new UnionFind(this.vertices);

    const mstEdges = [];
    let totalWeight = 0;

    // Kruskal's Algorithm
    for (const edge of sortedEdges) {
      const { vertex1, vertex2, weight } = edge;

      // If vertices are not already connected, add edge to MST
      if (!unionFind.connected(vertex1, vertex2)) {
        mstEdges.push(edge);
        totalWeight += weight;
        unionFind.union(vertex1, vertex2);

        // MST is complete when it has (vertices - 1) edges
        if (mstEdges.length === this.vertices.size - 1) {
          break;
        }
      }
    }

    return {
      edges: mstEdges,
      totalWeight: totalWeight
    };
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
// Output: [
//   { vertex1: 'A', vertex2: 'B', weight: 1 },
//   { vertex1: 'B', vertex2: 'C', weight: 2 },
//   { vertex1: 'C', vertex2: 'D', weight: 3 }
// ]

console.log('Total Weight:', mst.totalWeight);
// Output: 6

// Test case 2: More complex graph
const graph2 = new WeightedGraph();
graph2.addEdge('1', '2', 1);
graph2.addEdge('1', '3', 7);
graph2.addEdge('2', '3', 3);
graph2.addEdge('2', '4', 6);
graph2.addEdge('3', '4', 5);
graph2.addEdge('3', '5', 1);
graph2.addEdge('4', '5', 9);
graph2.addEdge('4', '6', 2);
graph2.addEdge('5', '6', 8);

console.log('\nKruskal\'s MST (Graph 2):');
const mst2 = graph2.kruskal();
console.log('MST Edges:', mst2.edges);
console.log('Total Weight:', mst2.totalWeight);

// Time Complexity: O(E log E) for sorting + O(E α(V)) for union-find operations
// where α is the inverse Ackermann function (practically constant)
// Overall: O(E log E)
// Space Complexity: O(V + E) for edges and union-find structure
