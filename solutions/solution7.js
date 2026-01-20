/**
 * Solution 7: Shortest Path - Dijkstra's Algorithm
 */

class WeightedGraph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(vertex1, vertex2, weight) {
    this.addVertex(vertex1);
    this.addVertex(vertex2);
    if (weight < 0) {
      throw new Error('Dijkstra does not support negative weights');
    }
    this.adjacencyList.get(vertex1).push({ vertex: vertex2, weight });
    this.adjacencyList.get(vertex2).push({ vertex: vertex1, weight });
  }

  dijkstra(startVertex) {
    // Initialize distances
    const distances = new Map();
    const paths = new Map();
    const visited = new Set();

    for (const vertex of this.adjacencyList.keys()) {
      distances.set(vertex, Infinity);
      paths.set(vertex, []);
    }

    distances.set(startVertex, 0);

    while (visited.size < this.adjacencyList.size) {
      // Find unvisited vertex with minimum distance
      let minVertex = null;
      let minDistance = Infinity;

      for (const vertex of this.adjacencyList.keys()) {
        if (!visited.has(vertex) && distances.get(vertex) < minDistance) {
          minVertex = vertex;
          minDistance = distances.get(vertex);
        }
      }

      if (minVertex === null) {
        break; // Remaining vertices are unreachable
      }

      visited.add(minVertex);

      // Update distances of neighbors
      for (const { vertex: neighbor, weight } of this.adjacencyList.get(minVertex)) {
        if (!visited.has(neighbor)) {
          const newDistance = distances.get(minVertex) + weight;

          if (newDistance < distances.get(neighbor)) {
            distances.set(neighbor, newDistance);
            // Update path: previous path + current vertex
            paths.set(neighbor, [...paths.get(minVertex), minVertex]);
          }
        }
      }
    }

    // Convert Infinity back to something more readable
    const result = {};
    result.distances = Object.fromEntries(
      Array.from(distances.entries()).map(([v, d]) => [v, d === Infinity ? Infinity : d])
    );
    result.paths = Object.fromEntries(
      Array.from(paths.entries()).map(([v, p]) => [v, distances.get(v) === Infinity ? [] : [...p, v]])
    );

    return result;
  }
}

// Test cases
const graph = new WeightedGraph();
graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'C', 1);
graph.addEdge('B', 'D', 5);
graph.addEdge('C', 'D', 8);
graph.addEdge('C', 'E', 10);
graph.addEdge('D', 'E', 2);

console.log('Dijkstra from A:');
const result = graph.dijkstra('A');
console.log('Distances:', result.distances);
// Output: { A: 0, B: 3, C: 2, D: 8, E: 10 }

console.log('Paths:', result.paths);
// Output: { A: [A], B: [A, C, B], C: [A, C], D: [A, C, B, D], E: [A, C, B, D, E] }

const graph2 = new WeightedGraph();
graph2.addEdge('1', '2', 7);
graph2.addEdge('1', '3', 9);
graph2.addEdge('1', '6', 14);
graph2.addEdge('2', '3', 10);
graph2.addEdge('2', '4', 15);
graph2.addEdge('3', '4', 11);
graph2.addEdge('3', '6', 2);
graph2.addEdge('4', '5', 6);
graph2.addEdge('5', '6', 9);

console.log('\nDijkstra from 1:');
const result2 = graph2.dijkstra('1');
console.log('Distances:', result2.distances);
console.log('Paths:', result2.paths);

// Time Complexity: O(V^2 + E) with simple array implementation
// Can be improved to O((V + E) log V) with a min-heap
// Space Complexity: O(V) for distances, paths, and visited set
