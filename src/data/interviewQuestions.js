const baseSections = [
  {
    topic: 'Amazon Leadership',
    icon: '🟠',
    color: '#FF9900',
    questions: [
      { q: 'Tell me about a time you had to deal with a difficult customer (Customer Obsession).', a: 'STAR format: Situation — describe a frustrated customer or client. Task — your responsibility to resolve it. Action — listened actively, took ownership, found a creative solution beyond their expectation. Result — customer satisfaction improved, potentially a long-term relationship saved. Amazon values leaders who start with the customer and work backwards.' },
      { q: 'Describe a time you delivered a project with a tight deadline (Bias for Action).', a: 'STAR: Situation — a critical feature needed in half the normal time. Task — deliver without sacrificing quality. Action — cut scope to MVP, parallelized work across team, daily standups to unblock. Result — shipped on time, collected feedback, iterated quickly. Key: show you take calculated risks and move fast despite ambiguity.' },
      { q: 'Give an example of a time you disagreed with your manager (Have Backbone; Disagree and Commit).', a: 'STAR: Situation — manager chose a technical approach you believed was flawed. Task — voice your concern professionally. Action — prepared data-driven counter-proposal, presented in 1:1, respected final decision and committed fully once made. Result — your concern was noted and influenced a later design. Amazon values constructive dissent followed by full commitment.' },
      { q: 'Tell me about a time you had to learn something quickly (Learn and Be Curious).', a: 'STAR: Situation — assigned to a project in an unfamiliar domain (e.g., ML, a new cloud service). Task — get productive within a week. Action — immersed in documentation, built a prototype, found an internal expert as mentor. Result — became team lead for that area within a month. Show curiosity and systematic self-learning.' },
      { q: 'Describe a time you improved a process or system (Invent and Simplify).', a: 'STAR: Situation — manual deployment taking 2 hours. Task — reduce time and errors. Action — automated with CI/CD pipeline, added health checks and rollback. Result — reduced to 8 minutes, zero failed deployments in 6 months. Amazon rewards simplification that creates lasting impact.' },
    ],
  },
  {
    topic: 'Google Engineering',
    icon: '🔵',
    color: '#4285F4',
    questions: [
      { q: 'How does Google Search rank web pages (PageRank)?', a: 'PageRank is a link-analysis algorithm. Core idea: a page is important if many important pages link to it. Formula: PR(A) = (1-d) + d × Σ(PR(T)/C(T)) where d=0.85 (damping), T=pages linking to A, C(T)=outbound links from T. Modern Google uses 200+ signals: semantic search (BERT), freshness, user signals, page experience. MapReduce was originally used for distributed PageRank computation at scale.' },
      { q: 'Explain how you would design Google Maps routing.', a: 'Core: Dijkstra / A* for shortest path on a road graph. At scale: Hierarchical routing — precompute "highway nodes" between regions. Contraction Hierarchies: preprocess graph by contracting low-importance nodes. Bidirectional A* — search from both ends, meet in middle. Real-time: traffic data as edge weight updates. Turn restrictions: model as directed graph with state. Alternatives: K-shortest paths (Yen\'s algorithm).' },
      { q: 'What is MapReduce and when would you use it?', a: 'MapReduce is a programming model for processing large datasets in parallel across a cluster. Map phase: input data split into key-value pairs, workers apply map function. Shuffle: group same keys together. Reduce phase: aggregate values per key. Use when: batch processing logs, building inverted indexes, word count at petabyte scale. Modern alternative: Apache Spark (in-memory, faster), Dataflow/Beam (streaming). Google uses Flume/FlumeJava internally.' },
      { q: 'How would you design a web crawler?', a: 'Components: 1. Seed URLs → URL Frontier (priority queue). 2. DNS resolver. 3. HTTP fetcher. 4. Content parser & deduplication (simhash). 5. Link extractor → back to frontier. 6. Storage (GCS/S3). Challenges: politeness (respect robots.txt, rate limits), duplicate detection (hash content), trap detection (infinite URL spaces), freshness (recrawl schedule based on change frequency). Scale: distributed across thousands of machines, Bloom filter for visited URLs.' },
      { q: 'Explain consistent hashing and why it matters.', a: 'Consistent hashing maps both nodes and data to a ring (0 to 2^32). Data key hashed → find nearest node clockwise. Adding/removing a node only remaps O(K/N) keys (vs O(K) in modular hashing). Used in: distributed caches (Memcached, Redis Cluster), load balancers, distributed storage (Cassandra, DynamoDB). Virtual nodes: each physical node has multiple ring positions for even distribution.' },
    ],
  },
  {
    topic: 'Meta / Apple',
    icon: '🔷',
    color: '#0866FF',
    questions: [
      { q: 'How does React\'s Virtual DOM work?', a: 'React maintains an in-memory representation of the DOM (vDOM). On state change: 1. Re-render component tree to new vDOM. 2. Diff old vs new vDOM (reconciliation, using Fiber algorithm). 3. Calculate minimum DOM updates needed. 4. Batch-apply real DOM changes. Key optimizations: keys for list reconciliation, shouldComponentUpdate / React.memo to skip unnecessary re-renders, concurrent mode for prioritized rendering. This avoids expensive direct DOM manipulation.' },
      { q: 'What is Meta\'s approach to large-scale data processing?', a: 'Meta uses: Hive (SQL on Hadoop) for batch analytics. Presto (distributed SQL) for interactive queries. Spark for ML pipelines. Scuba — in-memory time-series database for real-time diagnostics. TAO — distributed graph store for social graph (optimized for read-heavy friend-of-friend queries). Laser — key-value store for model serving. XStream — real-time stream processing. Philosophy: purpose-built systems for specific access patterns rather than one-size-fits-all.' },
      { q: 'How would you design Instagram\'s feed ranking?', a: 'Signals: Affinity (how close you are to author), Post score (likes, comments, shares, saves per hour), Recency (decay function). ML Model: GBM or neural net trained on engagement. Architecture: Candidate generation (retrieve ~500 posts from follows) → Ranking model → Filtering (remove seen, low quality) → Final feed. Cold-start: new users see popular content. A/B test every ranking change. Meta uses GBDT + deep learning hybrid models for production feeds.' },
      { q: 'Describe Apple\'s approach to privacy in system design.', a: 'Apple\'s privacy principles: Data Minimization — collect only what is needed. On-device processing — Siri, Face ID, Photos ML run locally, not in cloud. Differential privacy — add mathematical noise before aggregating user data (keyboard, emoji usage). App Tracking Transparency — require explicit permission for cross-app tracking. Private Relay — two-hop proxy so no single party sees both identity and browsing. Design principle: privacy is a fundamental human right, not an afterthought.' },
      { q: 'How would you design the Facebook News Feed at scale?', a: 'Write path: Post created → fan-out to follower feeds (push model for regular users, pull for celebrities with millions of followers). Read path: merge user\'s feed cache with celebrity posts at read time. Storage: feed cache in Redis (per user, ~500 posts), posts in MySQL sharded by post_id, media on CDN. Ranking: ML model scores each candidate post. Scale: billions of feed reads/day — use distributed cache, async fan-out via message queues (Kafka), CDN for media delivery.' },
    ],
  },
  {
    topic: 'DSA',
    icon: '🧠',
    color: '#7c3aed',
    questions: [
      { q: 'What is the difference between an array and a linked list?', a: 'Array: fixed size, contiguous memory, O(1) access by index. Linked List: dynamic size, non-contiguous memory, O(n) access, O(1) insertion/deletion at head. Arrays are better for random access; linked lists are better for frequent insertions/deletions.' },
      { q: 'Explain Big O notation with examples.', a: 'Big O describes the worst-case time/space complexity of an algorithm. O(1) = constant (array access), O(n) = linear (linear search), O(n²) = quadratic (bubble sort), O(log n) = logarithmic (binary search), O(n log n) = merge sort.' },
      { q: 'What is a Hash Map and when would you use it?', a: 'A Hash Map stores key-value pairs with O(1) average time for insert, delete, and search. Use it for: frequency counting, caching (memoization), finding duplicates, two-sum problems, and any scenario where you need fast lookups.' },
      { q: 'Difference between BFS and DFS?', a: 'BFS (Breadth-First Search): uses Queue, explores level by level, finds shortest path in unweighted graphs. DFS (Depth-First Search): uses Stack/recursion, explores as deep as possible first, used for topological sort, cycle detection, connected components.' },
      { q: 'What is dynamic programming?', a: 'DP solves problems by breaking them into overlapping subproblems and storing results to avoid recomputation. Two approaches: Memoization (top-down, recursive) and Tabulation (bottom-up, iterative). Classic problems: Fibonacci, Knapsack, Longest Common Subsequence.' },
    ],
  },
  {
    topic: 'OOP Concepts',
    icon: '📦',
    color: '#3b82f6',
    questions: [
      { q: 'Explain the 4 pillars of OOP.', a: '1. Encapsulation: bundling data and methods, hiding internal state. 2. Abstraction: showing only necessary details. 3. Inheritance: child class inherits properties from parent. 4. Polymorphism: same method name, different behavior in different classes.' },
      { q: 'What is the difference between Abstract Class and Interface?', a: 'Abstract Class: can have concrete methods, constructor, state (fields). A class can inherit ONE abstract class. Interface: all methods abstract (in Java/C#), no state. A class can IMPLEMENT multiple interfaces. Use abstract class for "is-a" relationships; interface for capabilities.' },
      { q: 'What is method overloading vs overriding?', a: 'Overloading: same method name, different parameters in the SAME class (compile-time polymorphism). Overriding: child class redefines parent class method with same signature (runtime polymorphism). Overriding requires inheritance; overloading does not.' },
      { q: 'What is the SOLID principle?', a: 'S: Single Responsibility — class should have one reason to change. O: Open/Closed — open for extension, closed for modification. L: Liskov Substitution — subclass should be substitutable for parent. I: Interface Segregation — small, specific interfaces. D: Dependency Inversion — depend on abstractions, not concretions.' },
    ],
  },
  {
    topic: 'Databases & SQL',
    icon: '🗃️',
    color: '#06b6d4',
    questions: [
      { q: 'What is normalization? Explain 1NF, 2NF, 3NF.', a: 'Normalization organizes tables to reduce redundancy. 1NF: atomic values, no repeating groups. 2NF: 1NF + no partial dependency (non-key attributes depend on full PK). 3NF: 2NF + no transitive dependency. BCNF is stricter than 3NF.' },
      { q: 'Difference between INNER JOIN, LEFT JOIN, RIGHT JOIN?', a: 'INNER JOIN: only rows with matches in BOTH tables. LEFT JOIN: all rows from left table + matching from right (NULLs if no match). RIGHT JOIN: all rows from right + matching from left. FULL OUTER JOIN: all rows from both, NULLs for non-matches.' },
      { q: 'What is an index in a database?', a: 'An index is a data structure (usually B-Tree) that speeds up data retrieval at the cost of extra storage and slower writes. Primary index: on PK (auto). Secondary index: on other columns. Use indexes on frequently queried/joined columns. Avoid over-indexing write-heavy tables.' },
      { q: 'ACID properties in databases?', a: 'A: Atomicity — all or nothing (transaction either fully completes or fully rolls back). C: Consistency — database remains in valid state. I: Isolation — concurrent transactions do not interfere. D: Durability — committed data persists even after crash.' },
      { q: 'SQL vs NoSQL — when to use which?', a: 'SQL (MySQL, PostgreSQL): structured data, ACID compliance, complex queries, relationships. NoSQL (MongoDB, Redis): unstructured/semi-structured data, horizontal scaling, flexible schema, high write throughput. Rule: SQL for financial/transactional data; NoSQL for catalogs, user sessions, real-time analytics.' },
    ],
  },
  {
    topic: 'Operating Systems',
    icon: '💻',
    color: '#f59e0b',
    questions: [
      { q: 'What is the difference between a process and a thread?', a: 'Process: independent program in execution with its own memory space. Thread: smallest unit of execution within a process, sharing memory. Multiple threads in a process = multithreading. Process switching is expensive; thread switching is cheap. Threads share heap; have their own stack.' },
      { q: 'What is deadlock? How to prevent it?', a: "Deadlock: two or more processes waiting for each other indefinitely. Four conditions (Coffman): Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait. Prevention: break any one condition. Detection & Recovery: allow deadlock then kill/rollback process. Avoidance: Banker's Algorithm." },
      { q: 'What is virtual memory?', a: 'Virtual memory is a technique that gives each process the illusion of a large, private address space. The OS uses paging/segmentation to map virtual addresses to physical RAM. Allows running programs larger than physical RAM. Page fault occurs when referenced page is not in RAM, causing disk I/O.' },
    ],
  },
  {
    topic: 'Networking',
    icon: '🌐',
    color: '#10b981',
    questions: [
      { q: 'What happens when you type a URL in a browser?', a: '1. DNS lookup (URL → IP address). 2. TCP connection (3-way handshake: SYN, SYN-ACK, ACK). 3. TLS handshake (for HTTPS). 4. HTTP request sent. 5. Server processes and returns response. 6. Browser renders HTML/CSS/JS. 7. Connection closed (FIN-ACK).' },
      { q: 'TCP vs UDP — differences?', a: 'TCP: connection-oriented, reliable, ordered delivery, flow control, slower. Used for: HTTP/S, FTP, email. UDP: connectionless, no guarantee, faster, low overhead. Used for: video streaming, gaming, DNS, VoIP. Think: TCP = phone call (reliable); UDP = radio broadcast (fire and forget).' },
      { q: 'What is REST API?', a: 'REST (Representational State Transfer) is an architectural style for APIs. Key principles: stateless, client-server, uniform interface, cacheable. HTTP methods: GET (read), POST (create), PUT (update), DELETE (remove), PATCH (partial update). Responses typically in JSON format.' },
      { q: 'What is HTTPS and SSL/TLS?', a: 'HTTPS is HTTP over TLS (Transport Layer Security). TLS provides: Encryption (confidentiality), Authentication (server identity via certificates), Integrity (data not tampered). SSL is the older, now deprecated version. TLS 1.3 is the current standard. Certificates are issued by Certificate Authorities (CA).' },
    ],
  },
  {
    topic: 'System Design',
    icon: '🏗️',
    color: '#ef4444',
    questions: [
      { q: 'How would you design a URL shortener like bit.ly?', a: 'Components: 1. Hash generation (MD5/Base62 encode to 6-7 chars). 2. Database (URL mapping, MySQL or Cassandra). 3. Cache (Redis for hot URLs, 80/20 rule). 4. Load balancer. 5. CDN for static assets. Handle: collision in hash, expiry of URLs, analytics tracking, 301 vs 302 redirect.' },
      { q: 'What is load balancing?', a: 'Load balancing distributes incoming traffic across multiple servers to avoid overload. Algorithms: Round Robin, Least Connections, IP Hash, Weighted. L4 (transport layer) vs L7 (application layer). Tools: AWS ELB, Nginx, HAProxy. Enables horizontal scaling and high availability.' },
      { q: 'What is caching and what strategies exist?', a: 'Caching stores frequently accessed data in fast storage (Redis, Memcached). Strategies: Cache-aside (app checks cache first), Write-through (write to cache + DB simultaneously), Write-back (write to cache, async to DB). Eviction policies: LRU (Least Recently Used), LFU, FIFO. Cache invalidation is the hardest problem.' },
    ],
  },
  {
    topic: 'Frontend Development',
    icon: '🖥️',
    color: '#f97316',
    questions: [
      { q: 'What is the difference between == and === in JavaScript?', a: '== (loose equality): compares values with type coercion. "5" == 5 is true. === (strict equality): compares value AND type. "5" === 5 is false. Always prefer === to avoid unexpected type conversions. typeof null === "object" is a known JS quirk.' },
      { q: 'Explain event bubbling and event capturing in the DOM.', a: 'Event Bubbling: event starts at the target element and bubbles UP to the root. Event Capturing: event goes from root DOWN to target. addEventListener 3rd arg: false = bubbling (default), true = capturing. stopPropagation() prevents further propagation. Most common use: event delegation — attach one listener to parent to handle all children.' },
      { q: 'What is the difference between var, let, and const?', a: 'var: function-scoped, hoisted, can be redeclared. let: block-scoped, not hoisted (TDZ), cannot be redeclared. const: block-scoped, must be initialized, cannot be reassigned (but object properties can change). Rule: prefer const → let → avoid var.' },
      { q: 'What is CSS specificity and how is it calculated?', a: 'Specificity determines which CSS rule wins. Points: inline styles (1000) > ID (#id = 100) > class/pseudo-class (.class = 10) > element (div = 1). Example: #id .class p = 100+10+1 = 111. !important overrides all. Equal specificity: last rule wins.' },
      { q: 'What is the difference between flexbox and CSS Grid?', a: 'Flexbox: 1D layout (either row OR column). Great for navbars, centering, simple layouts. CSS Grid: 2D layout (rows AND columns simultaneously). Great for page layouts, cards, complex grids. Use Flexbox for components; Grid for page-level layout. They work great together.' },
      { q: 'What is a closure in JavaScript?', a: 'A closure is a function that "remembers" variables from its outer scope even after that scope has finished executing. Created every time a function is defined inside another. Common uses: data privacy (module pattern), factory functions, event handlers with state, memoization.' },
    ],
  },
  {
    topic: 'Node.js & Backend',
    icon: '🟢',
    color: '#22c55e',
    questions: [
      { q: 'What is the Node.js Event Loop?', a: 'The Event Loop is what allows Node.js to perform non-blocking I/O despite being single-threaded. It processes: timers (setTimeout/setInterval) → pending I/O → idle/prepare → poll (wait for I/O) → check (setImmediate) → close callbacks. Long synchronous code blocks the loop — always use async operations for I/O.' },
      { q: 'What is middleware in Express.js?', a: 'Middleware are functions that execute during the request-response cycle. They have access to req, res, and next(). Types: Application-level (app.use), Router-level, Error-handling (4 args: err,req,res,next), Built-in (express.json(), express.static()), Third-party (morgan, helmet, cors). They run in order of definition.' },
      { q: 'How does Node.js handle concurrency if it is single-threaded?', a: 'Node.js uses the Event Loop + libuv to offload I/O to the OS. While waiting for I/O (file read, DB query, HTTP call), Node processes other requests. CPU-heavy tasks block the loop — use Worker Threads or child_process for those. This makes Node excellent for I/O-bound (API servers) but not CPU-bound (image processing) workloads.' },
      { q: 'What is JWT (JSON Web Token) and how does authentication work?', a: 'JWT is a compact, self-contained token for transmitting claims (user data) securely. Structure: Header.Payload.Signature (Base64 encoded). Flow: 1. User logs in → server creates JWT signed with secret. 2. Client stores JWT (localStorage/cookie). 3. Client sends JWT in Authorization header. 4. Server verifies signature. Stateless — no server-side session needed.' },
      { q: 'Explain the MVC pattern.', a: 'MVC (Model-View-Controller) separates concerns: Model: data and business logic (database queries, validation). View: presentation layer (HTML/templates). Controller: handles requests, calls Model, returns View/JSON. In Express: routes = controllers, Mongoose models = models. Promotes separation of concerns and testability.' },
    ],
  },
  {
    topic: 'C# & .NET',
    icon: '💜',
    color: '#a855f7',
    questions: [
      { q: 'What is the difference between value types and reference types in C#?', a: 'Value types (int, double, struct, enum): stored on the stack, copied on assignment. Reference types (class, string, array): stored on heap, variable holds a reference. Structs are value types — good for small, immutable data. Classes are reference types — good for complex objects. string is a special immutable reference type.' },
      { q: 'What is LINQ and what are its advantages?', a: 'LINQ (Language Integrated Query) provides a consistent way to query any data source (collections, XML, databases, REST APIs). Advantages: type-safe at compile time, IntelliSense support, readable syntax, lazy evaluation (deferred execution), works with IEnumerable<T> and IQueryable<T>. Method syntax (.Where().Select()) or Query syntax (from x in y).' },
      { q: 'What is Dependency Injection in .NET?', a: 'DI is a design pattern where dependencies are provided to a class rather than created internally. .NET has a built-in DI container. Register: builder.Services.AddScoped<IService, ServiceImpl>(). Inject via constructor. Lifetimes: Transient (new each time), Scoped (once per request), Singleton (one for app lifetime). Enables testability and loose coupling.' },
      { q: "What is async/await in C# and how does it work?", a: "async/await is C#'s built-in support for asynchronous programming. async marks a method as asynchronous. await pauses execution of the method until the task completes, without blocking the thread. Returns Task or Task<T>. The compiler transforms async methods into state machines. Use for: I/O operations, HTTP calls, database queries." },
      { q: 'What is Entity Framework Core?', a: 'EF Core is an ORM (Object-Relational Mapper) for .NET. It maps C# classes to database tables. Code First: define C# models, generate migrations, EF creates the DB. Database First: generate models from existing DB. Key concepts: DbContext, DbSet<T>, LINQ queries translated to SQL, migrations for schema changes. Supports SQL Server, PostgreSQL, SQLite, MySQL.' },
    ],
  },
  {
    topic: 'C++ & Systems',
    icon: '⚙️',
    color: '#ef4444',
    questions: [
      { q: 'What is the difference between stack and heap memory in C++?', a: 'Stack: automatically managed, fast, limited size (usually 1-8MB), stores local variables and function frames. Heap: manually managed (new/delete or smart pointers), slower, large size, stores dynamically allocated objects. Stack overflow occurs when recursion is too deep. Memory leaks occur when heap memory is not freed.' },
      { q: 'What are smart pointers in C++?', a: 'Smart pointers automatically manage memory (RAII). unique_ptr: sole ownership, cannot be copied, moved only. shared_ptr: shared ownership with reference counting, freed when count reaches 0. weak_ptr: non-owning reference to shared_ptr, prevents circular references. Use smart pointers instead of raw new/delete to prevent memory leaks.' },
      { q: 'What is the difference between references and pointers in C++?', a: 'References (&): must be initialized, cannot be null, cannot be reassigned to another variable, no dereferencing needed. Pointers (*): can be null, can be reassigned, need dereferencing (*ptr), support pointer arithmetic. Use references when the variable always refers to something; pointers when it can be null or needs to change.' },
      { q: 'What is RAII in C++?', a: 'RAII (Resource Acquisition Is Initialization): resources are tied to object lifetime. Acquire resources in constructor, release in destructor. When object goes out of scope, destructor automatically runs. Examples: smart pointers, file handles (fstream), mutex locks (lock_guard). Guarantees exception safety and prevents resource leaks.' },
    ],
  },
];

export const interviewQuestions = baseSections;

export const companies = ['All', 'Amazon', 'Google', 'Microsoft', 'TCS', 'Infosys', 'Wipro', 'Accenture', 'Cognizant'];
export const topics = ['All', 'Amazon Leadership', 'Google Engineering', 'Meta / Apple', 'DSA', 'OOP Concepts', 'Databases & SQL', 'Operating Systems', 'Networking', 'System Design', 'Frontend Development', 'Node.js & Backend', 'C# & .NET', 'C++ & Systems'];
