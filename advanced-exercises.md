# Advanced JavaScript Coding Exercises

A comprehensive collection of advanced coding challenges covering algorithms, data structures, design patterns, and real-world scenarios.

## Table of Contents
1. [Algorithm Challenges](#algorithm-challenges)
2. [Data Structure Implementations](#data-structure-implementations)
3. [Functional Programming](#functional-programming)
4. [Design Patterns](#design-patterns)
5. [Real-World Scenarios](#real-world-scenarios)
6. [Performance Optimization](#performance-optimization)

---

## Algorithm Challenges

### Exercise 26: Binary Search
Implement binary search algorithm that finds the index of a target value in a sorted array.

**Example:**
```javascript
binarySearch([1, 3, 5, 7, 9, 11], 7); // Returns: 3
binarySearch([1, 3, 5, 7, 9, 11], 4); // Returns: -1
```

**Time Complexity:** O(log n)

### Exercise 27: Merge Sort
Implement the merge sort algorithm to sort an array of numbers.

**Example:**
```javascript
mergeSort([64, 34, 25, 12, 22, 11, 90]); // Returns: [11, 12, 22, 25, 34, 64, 90]
```

**Time Complexity:** O(n log n)

### Exercise 28: Quick Sort
Implement the quick sort algorithm with proper pivot selection.

**Example:**
```javascript
quickSort([10, 7, 8, 9, 1, 5]); // Returns: [1, 5, 7, 8, 9, 10]
```

**Time Complexity:** O(n log n) average, O(n²) worst case

### Exercise 29: Longest Common Subsequence
Find the longest common subsequence between two strings.

**Example:**
```javascript
longestCommonSubsequence("ABCDGH", "AEDFHR"); // Returns: "ADH"
longestCommonSubsequence("AGGTAB", "GXTXAYB"); // Returns: "GTAB"
```

**Time Complexity:** O(m * n)

### Exercise 30: Knapsack Problem
Solve the 0/1 knapsack problem using dynamic programming.

**Example:**
```javascript
knapsack([60, 100, 120], [10, 20, 30], 50); // Returns: 220
// values, weights, capacity
```

### Exercise 31: Graph Traversal (BFS)
Implement breadth-first search for graph traversal.

**Example:**
```javascript
const graph = {
  A: ['B', 'C'],
  B: ['A', 'D', 'E'],
  C: ['A', 'F'],
  D: ['B'],
  E: ['B', 'F'],
  F: ['C', 'E']
};
bfs(graph, 'A'); // Returns: ['A', 'B', 'C', 'D', 'E', 'F']
```

### Exercise 32: Graph Traversal (DFS)
Implement depth-first search for graph traversal.

**Example:**
```javascript
dfs(graph, 'A'); // Returns: ['A', 'B', 'D', 'E', 'F', 'C']
```

### Exercise 33: Dijkstra's Algorithm
Find the shortest path between nodes in a weighted graph.

**Example:**
```javascript
const weightedGraph = {
  A: { B: 4, C: 2 },
  B: { A: 4, C: 1, D: 5 },
  C: { A: 2, B: 1, D: 8 },
  D: { B: 5, C: 8 }
};
dijkstra(weightedGraph, 'A', 'D'); // Returns: { path: ['A', 'C', 'B', 'D'], distance: 8 }
```

### Exercise 34: Sliding Window Maximum
Find the maximum value in each sliding window of size k.

**Example:**
```javascript
slidingWindowMax([1, 3, -1, -3, 5, 3, 6, 7], 3); 
// Returns: [3, 3, 5, 5, 6, 7]
```

### Exercise 35: Two Sum Problem
Find two numbers in an array that add up to a target sum.

**Example:**
```javascript
twoSum([2, 7, 11, 15], 9); // Returns: [0, 1]
twoSum([3, 2, 4], 6); // Returns: [1, 2]
```

---

## Data Structure Implementations

### Exercise 36: Linked List
Implement a singly linked list with insert, delete, and search operations.

**Example:**
```javascript
const list = new LinkedList();
list.append(1);
list.append(2);
list.prepend(0);
list.delete(1);
list.toArray(); // Returns: [0, 2]
```

### Exercise 37: Doubly Linked List
Implement a doubly linked list with forward and backward traversal.

**Example:**
```javascript
const dList = new DoublyLinkedList();
dList.append(1);
dList.append(2);
dList.insertAt(1, 1.5);
dList.reverse();
```

### Exercise 38: Stack
Implement a stack data structure with push, pop, peek, and isEmpty operations.

**Example:**
```javascript
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.peek(); // Returns: 2
stack.pop(); // Returns: 2
stack.isEmpty(); // Returns: false
```

### Exercise 39: Queue
Implement a queue data structure with enqueue, dequeue, and peek operations.

**Example:**
```javascript
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.dequeue(); // Returns: 1
queue.peek(); // Returns: 2
```

### Exercise 40: Priority Queue
Implement a priority queue using a binary heap.

**Example:**
```javascript
const pq = new PriorityQueue();
pq.enqueue('task1', 3);
pq.enqueue('task2', 1);
pq.enqueue('task3', 2);
pq.dequeue(); // Returns: 'task2' (highest priority)
```

### Exercise 41: Binary Search Tree
Implement a binary search tree with insert, search, and delete operations.

**Example:**
```javascript
const bst = new BinarySearchTree();
bst.insert(5);
bst.insert(3);
bst.insert(7);
bst.search(3); // Returns: true
bst.inOrderTraversal(); // Returns: [3, 5, 7]
```

### Exercise 42: Hash Table
Implement a hash table with collision handling using chaining.

**Example:**
```javascript
const hashTable = new HashTable(10);
hashTable.set('name', 'John');
hashTable.set('age', 30);
hashTable.get('name'); // Returns: 'John'
hashTable.delete('age');
```

### Exercise 43: Trie (Prefix Tree)
Implement a trie for efficient string searching and autocomplete.

**Example:**
```javascript
const trie = new Trie();
trie.insert('apple');
trie.insert('app');
trie.search('app'); // Returns: true
trie.startsWith('ap'); // Returns: true
trie.autocomplete('ap'); // Returns: ['app', 'apple']
```

### Exercise 44: LRU Cache
Implement a Least Recently Used (LRU) cache with O(1) operations.

**Example:**
```javascript
const cache = new LRUCache(2);
cache.put(1, 'one');
cache.put(2, 'two');
cache.get(1); // Returns: 'one'
cache.put(3, 'three'); // Evicts key 2
cache.get(2); // Returns: null
```

### Exercise 45: Circular Buffer
Implement a circular buffer (ring buffer) with fixed size.

**Example:**
```javascript
const buffer = new CircularBuffer(3);
buffer.write(1);
buffer.write(2);
buffer.write(3);
buffer.write(4); // Overwrites 1
buffer.read(); // Returns: 2
```

---

## Functional Programming

### Exercise 46: Compose Function
Create a compose function that combines multiple functions from right to left.

**Example:**
```javascript
const add5 = x => x + 5;
const multiply3 = x => x * 3;
const composed = compose(add5, multiply3);
composed(10); // Returns: 35 (10 * 3 + 5)
```

### Exercise 47: Pipe Function
Create a pipe function that combines multiple functions from left to right.

**Example:**
```javascript
const piped = pipe(multiply3, add5);
piped(10); // Returns: 35 (10 * 3 + 5)
```

### Exercise 48: Partial Application
Implement a partial function that allows partial application of arguments.

**Example:**
```javascript
const greet = (greeting, name) => `${greeting}, ${name}!`;
const sayHello = partial(greet, 'Hello');
sayHello('John'); // Returns: "Hello, John!"
```

### Exercise 49: Function Memoization with TTL
Implement memoization with time-to-live (TTL) for cache expiration.

**Example:**
```javascript
const expensiveFunc = (n) => n * 2;
const memoized = memoizeWithTTL(expensiveFunc, 5000); // 5 second TTL
memoized(5); // Computed
memoized(5); // Cached (within 5 seconds)
```

### Exercise 50: Lazy Evaluation
Implement lazy evaluation for sequences to avoid unnecessary computations.

**Example:**
```javascript
const lazyRange = lazy(1, 1000000);
lazyRange.map(x => x * 2).filter(x => x > 100).take(5).toArray();
// Only computes first 5 values that meet criteria
```

### Exercise 51: Transducer
Implement transducers for efficient data transformation pipelines.

**Example:**
```javascript
const xform = compose(
  map(x => x * 2),
  filter(x => x > 10),
  take(5)
);
transduce(xform, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
```

### Exercise 52: Monad Implementation
Implement a Maybe monad for handling null/undefined values safely.

**Example:**
```javascript
const value = Maybe.of(5)
  .map(x => x * 2)
  .map(x => x + 3)
  .getOrElse(0); // Returns: 13

const nullValue = Maybe.of(null)
  .map(x => x * 2)
  .getOrElse(0); // Returns: 0
```

### Exercise 53: Functor Implementation
Create a functor that can be mapped over.

**Example:**
```javascript
const box = Box(5);
box.map(x => x * 2).map(x => x + 1).fold(x => x); // Returns: 11
```

---

## Design Patterns

### Exercise 54: Singleton Pattern
Implement the singleton pattern ensuring only one instance exists.

**Example:**
```javascript
const db1 = Database.getInstance();
const db2 = Database.getInstance();
console.log(db1 === db2); // true
```

### Exercise 55: Factory Pattern
Create a factory pattern for creating objects without specifying exact classes.

**Example:**
```javascript
const factory = new VehicleFactory();
const car = factory.createVehicle('car');
const bike = factory.createVehicle('bike');
```

### Exercise 56: Observer Pattern
Implement the observer pattern for event-driven programming.

**Example:**
```javascript
const subject = new Subject();
const observer1 = new Observer('Observer 1');
subject.attach(observer1);
subject.notify('Event occurred!');
```

### Exercise 57: Strategy Pattern
Implement the strategy pattern for interchangeable algorithms.

**Example:**
```javascript
const context = new PaymentContext();
context.setStrategy(new CreditCardStrategy());
context.pay(100);
context.setStrategy(new PayPalStrategy());
context.pay(200);
```

### Exercise 58: Decorator Pattern
Create a decorator pattern to add functionality to objects dynamically.

**Example:**
```javascript
let coffee = new SimpleCoffee();
coffee = new MilkDecorator(coffee);
coffee = new SugarDecorator(coffee);
console.log(coffee.cost()); // Returns: base + milk + sugar
```

### Exercise 59: Command Pattern
Implement the command pattern for encapsulating requests as objects.

**Example:**
```javascript
const light = new Light();
const turnOn = new TurnOnCommand(light);
const remote = new RemoteControl();
remote.setCommand(turnOn);
remote.pressButton();
```

### Exercise 60: Proxy Pattern
Create a proxy pattern for controlling access to objects.

**Example:**
```javascript
const realImage = new RealImage('photo.jpg');
const proxyImage = new ProxyImage(realImage);
proxyImage.display(); // Loads and displays
proxyImage.display(); // Just displays (cached)
```

---

## Real-World Scenarios

### Exercise 61: URL Shortener
Build a URL shortener service with collision handling.

**Example:**
```javascript
const shortener = new URLShortener();
const short = shortener.shorten('https://example.com/very/long/url');
const original = shortener.expand(short);
```

### Exercise 62: Auto-Complete System
Implement an autocomplete system with ranking and suggestions.

**Example:**
```javascript
const autocomplete = new AutoComplete();
autocomplete.addWord('apple', 100);
autocomplete.addWord('application', 50);
autocomplete.getSuggestions('app', 5); // Returns top 5 matches
```

### Exercise 63: Rate Limiting Middleware
Create middleware for API rate limiting with different strategies.

**Example:**
```javascript
const limiter = new RateLimiter({
  windowMs: 60000,
  maxRequests: 100,
  strategy: 'sliding-window'
});
app.use(limiter.middleware());
```

### Exercise 64: Caching Layer
Implement a multi-level caching system (memory, Redis, database).

**Example:**
```javascript
const cache = new CacheLayer({
  l1: new MemoryCache(),
  l2: new RedisCache(),
  l3: new DatabaseCache()
});
await cache.get('key');
```

### Exercise 65: Job Queue System
Build a job queue with priority, retry logic, and concurrency control.

**Example:**
```javascript
const queue = new JobQueue({ concurrency: 5 });
queue.add({ type: 'email', data: {...}, priority: 1 });
queue.process('email', async (job) => {
  await sendEmail(job.data);
});
```

### Exercise 66: Pagination System
Create a flexible pagination system supporting cursor and offset-based pagination.

**Example:**
```javascript
const paginator = new Paginator(data, { pageSize: 10 });
const page1 = paginator.getPage(1);
const nextCursor = paginator.getNextCursor();
```

### Exercise 67: Search Engine
Implement a simple search engine with indexing and ranking.

**Example:**
```javascript
const search = new SearchEngine();
search.indexDocument('doc1', 'JavaScript is awesome');
search.indexDocument('doc2', 'Python is great');
search.search('JavaScript'); // Returns ranked results
```

### Exercise 68: Undo/Redo System
Build an undo/redo system for text editor or drawing application.

**Example:**
```javascript
const history = new History();
history.execute(new AddTextCommand('Hello'));
history.execute(new AddTextCommand(' World'));
history.undo(); // Removes ' World'
history.redo(); // Adds ' World' back
```

### Exercise 69: Dependency Injection Container
Create a dependency injection container for managing object dependencies.

**Example:**
```javascript
const container = new DIContainer();
container.register('database', Database);
container.register('userService', UserService, ['database']);
const service = container.resolve('userService');
```

### Exercise 70: Virtual DOM Implementation
Implement a simple virtual DOM with diffing and patching.

**Example:**
```javascript
const vdom1 = h('div', { class: 'container' }, [
  h('h1', {}, 'Hello')
]);
const vdom2 = h('div', { class: 'container' }, [
  h('h1', {}, 'Hello World')
]);
const patches = diff(vdom1, vdom2);
patch(rootElement, patches);
```

---

## Performance Optimization

### Exercise 71: Throttle Function
Implement a throttle function that limits execution frequency.

**Example:**
```javascript
const throttled = throttle(() => console.log('Scrolling'), 1000);
window.addEventListener('scroll', throttled);
```

### Exercise 72: Request Batching
Create a system that batches multiple requests into single API calls.

**Example:**
```javascript
const batcher = new RequestBatcher({ maxBatchSize: 10, delay: 100 });
batcher.add(getUserById, 1);
batcher.add(getUserById, 2);
// Batches into single request: getUsersByIds([1, 2])
```

### Exercise 73: Lazy Loading Images
Implement lazy loading for images with intersection observer.

**Example:**
```javascript
const lazyLoader = new LazyImageLoader({
  rootMargin: '50px',
  threshold: 0.01
});
lazyLoader.observe('.lazy-image');
```

### Exercise 74: Web Worker Pool
Create a web worker pool for parallel processing.

**Example:**
```javascript
const pool = new WorkerPool(4); // 4 workers
const results = await pool.map(data, (item) => {
  return expensiveComputation(item);
});
```

### Exercise 75: Memory Leak Detector
Build a utility to detect and report memory leaks.

**Example:**
```javascript
const detector = new MemoryLeakDetector();
detector.start();
// ... run application
const leaks = detector.getReport();
```

---

## Bonus Expert Challenges

### Challenge 6: Build a Mini React
Create a simplified version of React with components, state, and reconciliation.

### Challenge 7: Implement Redux
Build a state management library similar to Redux with middleware support.

### Challenge 8: Create a Promise Scheduler
Implement a promise scheduler that controls concurrent promise execution.

### Challenge 9: Build a Query Builder
Create a SQL query builder with method chaining and type safety.

### Challenge 10: Implement a Compiler
Build a simple compiler that parses and executes a custom language.

---

## Testing Guidelines

For each exercise:
- Write comprehensive unit tests
- Test edge cases and error conditions
- Measure time and space complexity
- Benchmark performance for optimization exercises
- Document assumptions and trade-offs

**Happy Coding! 🚀**
