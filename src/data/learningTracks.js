export const learningTracks = [
  {
    id: 'beginner-python',
    title: 'Python for Absolute Beginners',
    icon: '🐍',
    color: '#3b82f6',
    level: 'Beginner',
    totalLessons: 8,
    description: 'Start from zero. Learn Python step by step — no prior experience needed.',
    chapters: [
      {
        id: 'py-1', title: 'Introduction to Python',
        content: 'Python is a high-level, easy-to-read programming language. It is widely used in web development, data science, AI, and automation.\n\nWhy Python?\n• Simple English-like syntax\n• Huge community & libraries\n• Used at Google, Netflix, NASA',
        code: `# Your first Python program\nprint("Hello, World!")\n\n# Variables\nname = "CodeCraft"\nage = 5\nprint(f"Name: {name}, Age: {age}")`,
        language: 'python',
      },
      {
        id: 'py-2', title: 'Variables & Data Types',
        content: 'Variables store data. Python has several built-in data types:\n\n• int — whole numbers (1, 100, -5)\n• float — decimal numbers (3.14, 2.5)\n• str — text ("Hello")\n• bool — True or False\n• list — ordered collection [1,2,3]\n• dict — key-value pairs {"key": "value"}',
        code: `# Data Types in Python\nx = 10          # int\ny = 3.14        # float\nz = "Hello"     # str\nis_ready = True # bool\n\nfruits = ["apple", "banana", "mango"]  # list\nstudent = {"name": "Alice", "age": 20} # dict\n\nprint(type(x))  # <class 'int'>\nprint(fruits[0]) # apple\nprint(student["name"]) # Alice`,
        language: 'python',
      },
      {
        id: 'py-3', title: 'Conditionals & Loops',
        content: 'Conditionals let your program make decisions. Loops repeat actions.\n\nif/elif/else — checks conditions\nfor loop — iterate over sequences\nwhile loop — repeat while condition is True',
        code: `# Conditionals\nscore = 85\nif score >= 90:\n    print("Grade: A")\nelif score >= 75:\n    print("Grade: B")\nelse:\n    print("Grade: C")\n\n# For loop\nfor i in range(1, 6):\n    print(f"Count: {i}")\n\n# While loop\ncount = 0\nwhile count < 3:\n    print(f"While: {count}")\n    count += 1`,
        language: 'python',
      },
      {
        id: 'py-4', title: 'Functions',
        content: 'Functions are reusable blocks of code. They take inputs (parameters) and return outputs.\n\nKey concepts:\n• def keyword to define\n• Parameters and arguments\n• return statement\n• Default parameters',
        code: `# Defining a function\ndef greet(name, greeting="Hello"):\n    return f"{greeting}, {name}!"\n\nprint(greet("Alice"))          # Hello, Alice!\nprint(greet("Bob", "Hi"))      # Hi, Bob!\n\n# Function with multiple returns\ndef divide(a, b):\n    if b == 0:\n        return None, "Error: Division by zero"\n    return a / b, "Success"\n\nresult, msg = divide(10, 2)\nprint(result, msg)  # 5.0 Success`,
        language: 'python',
      },
      {
        id: 'py-5', title: 'Lists & Dictionaries',
        content: 'Lists and dictionaries are the most used data structures in Python.\n\nList operations: append, remove, sort, slice\nDict operations: get, update, keys, values, items',
        code: `# Lists\nnums = [3, 1, 4, 1, 5, 9, 2]\nnums.append(6)        # Add to end\nnums.sort()           # Sort in-place\nprint(nums[:3])       # Slice: [1, 1, 2]\n\n# List comprehension\nsquares = [x**2 for x in range(1, 6)]\nprint(squares)  # [1, 4, 9, 16, 25]\n\n# Dictionaries\nstudent = {"name": "Alice", "score": 95}\nstudent["grade"] = "A"  # Add key\nfor key, val in student.items():\n    print(f"{key}: {val}")`,
        language: 'python',
      },
    ],
  },
  {
    id: 'javascript-basics',
    title: 'JavaScript Fundamentals',
    icon: '⚡',
    color: '#f59e0b',
    level: 'Beginner',
    totalLessons: 7,
    description: 'Learn the language of the web. Build interactive websites from day one.',
    chapters: [
      {
        id: 'js-1', title: 'JavaScript Basics',
        content: 'JavaScript runs in your browser and makes websites interactive. It is the only language that runs natively in browsers.\n\nKey facts:\n• Created by Brendan Eich in 10 days (1995)\n• Used by 98% of websites\n• Also runs server-side via Node.js',
        code: `// Variables - 3 ways\nvar old = "old way";\nlet name = "CodeCraft"; // block-scoped\nconst PI = 3.14;        // constant\n\n// Data types\nlet num = 42;\nlet text = "Hello";\nlet flag = true;\nlet arr = [1, 2, 3];\nlet obj = { key: "value" };\nlet nothing = null;\n\nconsole.log(typeof num);   // number\nconsole.log(typeof text);  // string`,
        language: 'javascript',
      },
      {
        id: 'js-2', title: 'Functions & Arrow Functions',
        content: 'JavaScript has two main ways to write functions:\n\n1. Regular functions (function keyword)\n2. Arrow functions (=>) — modern, shorter syntax\n\nArrow functions are widely used in modern JS.',
        code: `// Regular function\nfunction add(a, b) {\n    return a + b;\n}\n\n// Arrow function\nconst multiply = (a, b) => a * b;\n\n// Arrow with body\nconst greet = (name) => {\n    const msg = \`Hello, \${name}!\`;\n    return msg;\n};\n\nconsole.log(add(3, 4));       // 7\nconsole.log(multiply(3, 4)); // 12\nconsole.log(greet("Alice")); // Hello, Alice!`,
        language: 'javascript',
      },
      {
        id: 'js-3', title: 'Arrays & Array Methods',
        content: 'JavaScript arrays have powerful built-in methods:\n\n• map() — transform each element\n• filter() — keep elements matching condition\n• reduce() — accumulate to single value\n• find() — get first matching element\n• forEach() — loop through elements',
        code: `const nums = [1, 2, 3, 4, 5, 6];\n\n// map - square each number\nconst squares = nums.map(n => n * n);\nconsole.log(squares); // [1,4,9,16,25,36]\n\n// filter - only evens\nconst evens = nums.filter(n => n % 2 === 0);\nconsole.log(evens); // [2,4,6]\n\n// reduce - sum all\nconst sum = nums.reduce((acc, n) => acc + n, 0);\nconsole.log(sum); // 21\n\n// find\nconst found = nums.find(n => n > 3);\nconsole.log(found); // 4`,
        language: 'javascript',
      },
    ],
  },
  {
    id: 'dsa-track',
    title: 'Data Structures & Algorithms',
    icon: '🧠',
    color: '#7c3aed',
    level: 'Intermediate',
    totalLessons: 10,
    description: 'Master DSA — the backbone of every coding interview at top tech companies.',
    chapters: [
      {
        id: 'dsa-1', title: 'Big O Notation',
        content: 'Big O notation describes how an algorithm\'s runtime grows with input size.\n\nCommon complexities:\n• O(1) — Constant: Array index access\n• O(log n) — Logarithmic: Binary search\n• O(n) — Linear: Single loop\n• O(n log n) — Merge sort\n• O(n²) — Quadratic: Nested loops\n• O(2ⁿ) — Exponential: Brute-force recursion',
        code: `# O(1) - Constant\ndef get_first(arr):\n    return arr[0]  # Always 1 step\n\n# O(n) - Linear\ndef find_max(arr):\n    max_val = arr[0]\n    for x in arr:  # n steps\n        if x > max_val:\n            max_val = x\n    return max_val\n\n# O(n^2) - Quadratic\ndef bubble_sort(arr):\n    n = len(arr)\n    for i in range(n):       # n steps\n        for j in range(n-i-1):  # n steps\n            if arr[j] > arr[j+1]:\n                arr[j], arr[j+1] = arr[j+1], arr[j]`,
        language: 'python',
      },
      {
        id: 'dsa-2', title: 'Arrays & Two Pointers',
        content: 'Two Pointer technique is one of the most common interview patterns.\n\nUse cases:\n• Finding pairs in sorted arrays\n• Reversing arrays in-place\n• Container with most water\n• Palindrome checking',
        code: `# Two Sum (sorted array) - Two Pointers\ndef two_sum_sorted(nums, target):\n    left, right = 0, len(nums) - 1\n    while left < right:\n        s = nums[left] + nums[right]\n        if s == target:\n            return [left, right]\n        elif s < target:\n            left += 1\n        else:\n            right -= 1\n    return []\n\nnums = [1, 2, 3, 4, 6]\nprint(two_sum_sorted(nums, 6))  # [1, 3]`,
        language: 'python',
      },
      {
        id: 'dsa-3', title: 'Stacks & Queues',
        content: 'Stack: LIFO (Last In, First Out) — like a stack of plates\nQueue: FIFO (First In, First Out) — like a queue at a store\n\nStack use cases: Undo operations, browser back/forward, function call stack\nQueue use cases: BFS, task scheduling, print queues',
        code: `# Stack using Python list\nstack = []\nstack.append(1)   # push\nstack.append(2)\nstack.append(3)\nprint(stack.pop()) # 3 (LIFO)\n\n# Queue using deque\nfrom collections import deque\nqueue = deque()\nqueue.append(1)    # enqueue\nqueue.append(2)\nqueue.append(3)\nprint(queue.popleft()) # 1 (FIFO)`,
        language: 'python',
      },
    ],
  },
  {
    id: 'sql-track',
    title: 'SQL for Data & Backend',
    icon: '🗃️',
    color: '#06b6d4',
    level: 'Beginner',
    totalLessons: 6,
    description: 'Master SQL queries, joins, and aggregations used in every IT job.',
    chapters: [
      {
        id: 'sql-1', title: 'Basic SELECT Queries',
        content: 'SQL (Structured Query Language) is used to communicate with databases.\n\nBasic SELECT syntax:\nSELECT columns FROM table WHERE condition ORDER BY column LIMIT n',
        code: `-- Select all employees\nSELECT * FROM employees;\n\n-- Select specific columns\nSELECT name, salary FROM employees;\n\n-- Filter with WHERE\nSELECT name, salary \nFROM employees \nWHERE salary > 50000;\n\n-- Order results\nSELECT name, salary \nFROM employees \nORDER BY salary DESC \nLIMIT 5;`,
        language: 'python',
      },
      {
        id: 'sql-2', title: 'JOINs',
        content: 'JOINs combine rows from two or more tables based on a related column.\n\n• INNER JOIN — rows with match in both tables\n• LEFT JOIN — all rows from left + matching from right\n• RIGHT JOIN — all rows from right + matching from left\n• FULL OUTER JOIN — all rows from both tables',
        code: `-- INNER JOIN: employees + departments\nSELECT e.name, d.dept_name\nFROM employees e\nINNER JOIN departments d \n  ON e.dept_id = d.id;\n\n-- LEFT JOIN: all employees, even without dept\nSELECT e.name, d.dept_name\nFROM employees e\nLEFT JOIN departments d \n  ON e.dept_id = d.id;\n\n-- GROUP BY with COUNT\nSELECT dept_name, COUNT(*) as headcount\nFROM employees e\nJOIN departments d ON e.dept_id = d.id\nGROUP BY dept_name\nHAVING COUNT(*) > 5;`,
        language: 'python',
      },
    ],
  },
  {
    id: 'system-design',
    title: 'System Design for IT Pros',
    icon: '🏗️',
    color: '#10b981',
    level: 'Advanced',
    totalLessons: 8,
    description: 'Learn to design scalable, reliable systems. Essential for senior IT roles.',
    chapters: [
      {
        id: 'sd-1', title: 'Introduction to System Design',
        content: 'System Design is the process of defining architecture, components, modules, interfaces, and data for a system.\n\nKey concepts you must know:\n• Scalability — handle more users\n• Reliability — works even when parts fail\n• Availability — uptime percentage (99.9% = 8.7 hrs/year downtime)\n• Latency vs Throughput\n• CAP Theorem (Consistency, Availability, Partition Tolerance)',
        code: `# Key System Design Numbers to Remember\n\nlatency = {\n    "L1 cache": "1 ns",\n    "L2 cache": "10 ns",\n    "RAM": "100 ns",\n    "SSD read": "100 us",\n    "Network": "1-10 ms",\n    "HDD": "10 ms",\n}\n\nstorage = {\n    "KB": 10**3,\n    "MB": 10**6,\n    "GB": 10**9,\n    "TB": 10**12,\n}\n\nfor item, val in latency.items():\n    print(f"{item}: {val}")`,
        language: 'python',
      },
    ],
  },
  {
    id: 'frontend-track',
    title: 'Frontend Development',
    icon: '🌐',
    color: '#f97316',
    level: 'Beginner',
    totalLessons: 6,
    description: 'Build beautiful websites with HTML, CSS, and JavaScript. Learn the full frontend stack.',
    chapters: [
      {
        id: 'fe-1', title: 'HTML Structure',
        content: 'HTML (HyperText Markup Language) is the skeleton of every webpage. It defines the structure and content.\n\nKey HTML concepts:\n• Elements and tags — <h1>, <p>, <div>, <span>\n• Semantic HTML — <header>, <main>, <section>, <footer>\n• Attributes — id, class, href, src, alt\n• Forms — <form>, <input>, <button>, <select>',
        code: `<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>My First Page</title>\n</head>\n<body>\n    <header>\n        <h1>Welcome to CodeCraft</h1>\n    </header>\n    <main>\n        <section id="about">\n            <h2>About Us</h2>\n            <p>We help you <strong>learn coding</strong> step by step.</p>\n        </section>\n        <section id="features">\n            <ul>\n                <li>Online Compiler</li>\n                <li>Practice Problems</li>\n                <li>Interview Prep</li>\n            </ul>\n        </section>\n    </main>\n    <footer>\n        <p>&copy; 2025 CodeCraft Pro</p>\n    </footer>\n</body>\n</html>`,
        language: 'javascript',
      },
      {
        id: 'fe-2', title: 'CSS Styling',
        content: 'CSS (Cascading Style Sheets) makes your HTML beautiful. It controls colors, fonts, layouts, and animations.\n\nCSS Selectors:\n• Element — p { color: red; }\n• Class — .btn { background: blue; }\n• ID — #header { font-size: 2rem; }\n• Pseudo — a:hover { text-decoration: none; }\n\nBox Model: margin → border → padding → content',
        code: `/* CSS Box Model & Flexbox */\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    font-family: 'Inter', sans-serif;\n    background: #0d1117;\n    color: #e6edf3;\n}\n\n.navbar {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 16px 24px;\n    background: rgba(13,17,23,0.9);\n    border-bottom: 1px solid rgba(255,255,255,0.1);\n}\n\n.btn {\n    padding: 10px 20px;\n    background: #7c3aed;\n    color: white;\n    border: none;\n    border-radius: 8px;\n    cursor: pointer;\n    transition: transform 0.2s;\n}\n\n.btn:hover { transform: translateY(-2px); }`,
        language: 'javascript',
      },
      {
        id: 'fe-3', title: 'DOM Manipulation',
        content: 'The DOM (Document Object Model) is a tree representation of your HTML. JavaScript can manipulate it to make pages interactive.\n\nCommon operations:\n• querySelector / querySelectorAll — select elements\n• addEventListener — react to user actions\n• innerHTML / textContent — change content\n• classList.add/remove/toggle — change classes',
        code: `// DOM Manipulation examples\n\n// Select elements\nconst btn = document.querySelector('#submit-btn');\nconst counter = document.querySelector('#counter');\nconst list = document.querySelector('#todo-list');\n\nlet count = 0;\n\n// Add event listener\nbtn.addEventListener('click', () => {\n    count++;\n    counter.textContent = \`Count: \${count}\`;\n\n    // Create new element\n    const li = document.createElement('li');\n    li.textContent = \`Task \${count}\`;\n    li.classList.add('todo-item');\n    list.appendChild(li);\n});\n\n// Toggle dark mode\ndocument.querySelector('#theme-toggle').addEventListener('click', () => {\n    document.body.classList.toggle('dark');\n});`,
        language: 'javascript',
      },
    ],
  },
  {
    id: 'nodejs-track',
    title: 'Node.js & Express Backend',
    icon: '🟢',
    color: '#22c55e',
    level: 'Intermediate',
    totalLessons: 6,
    description: 'Build REST APIs and server-side applications with Node.js and Express.',
    chapters: [
      {
        id: 'node-1', title: 'Node.js Fundamentals',
        content: 'Node.js is a JavaScript runtime built on Chrome\'s V8 engine. It lets you run JavaScript on the server.\n\nWhy Node.js?\n• Non-blocking, event-driven I/O\n• Same language as frontend (JS)\n• Huge npm ecosystem (2M+ packages)\n• Used by Netflix, LinkedIn, Uber\n\nNode.js is single-threaded but handles concurrency via the Event Loop.',
        code: `// Node.js built-in modules\nconst fs = require('fs');\nconst path = require('path');\nconst os = require('os');\n\n// OS info\nconsole.log('Platform:', os.platform());\nconsole.log('CPUs:', os.cpus().length);\nconsole.log('Free Memory:', Math.round(os.freemem() / 1e9) + ' GB');\n\n// File system\nfs.writeFileSync('hello.txt', 'Hello from Node.js!');\nconst content = fs.readFileSync('hello.txt', 'utf8');\nconsole.log('File:', content);\n\n// Path utilities\nconsole.log(path.join('/home', 'user', 'docs')); // /home/user/docs\nconsole.log(path.extname('app.js'));             // .js`,
        language: 'nodejs',
      },
      {
        id: 'node-2', title: 'Express REST API',
        content: 'Express.js is the most popular Node.js web framework. It makes building APIs simple.\n\nHTTP Methods:\n• GET — retrieve data\n• POST — create resource\n• PUT/PATCH — update resource\n• DELETE — remove resource\n\nMiddleware runs between the request and response and can modify req, res.',
        code: `const express = require('express');\nconst app = express();\napp.use(express.json()); // Parse JSON bodies\n\n// In-memory "database"\nlet products = [\n    { id: 1, name: 'Laptop', price: 999 },\n    { id: 2, name: 'Mouse',  price: 29  },\n];\n\n// GET all products\napp.get('/products', (req, res) => {\n    res.json(products);\n});\n\n// GET product by id\napp.get('/products/:id', (req, res) => {\n    const product = products.find(p => p.id === +req.params.id);\n    if (!product) return res.status(404).json({ error: 'Not found' });\n    res.json(product);\n});\n\n// POST create product\napp.post('/products', (req, res) => {\n    const { name, price } = req.body;\n    const product = { id: Date.now(), name, price };\n    products.push(product);\n    res.status(201).json(product);\n});\n\napp.listen(3000, () => console.log('API running on http://localhost:3000'));`,
        language: 'nodejs',
      },
      {
        id: 'node-3', title: 'Async/Await & Promises',
        content: 'Node.js is asynchronous by nature. Promises and async/await are the modern way to handle async operations.\n\nCallback Hell → Promises → async/await\n\nAlways handle errors with try/catch when using async/await.',
        code: `// Async patterns in Node.js\n\n// 1. Callback (old way)\nconst fs = require('fs');\nfs.readFile('file.txt', 'utf8', (err, data) => {\n    if (err) console.error(err);\n    else console.log(data);\n});\n\n// 2. Promise\nconst { readFile } = require('fs/promises');\nreadFile('file.txt', 'utf8')\n    .then(data => console.log(data))\n    .catch(err => console.error(err));\n\n// 3. async/await (best)\nasync function readData(filename) {\n    try {\n        const data = await readFile(filename, 'utf8');\n        return data;\n    } catch (err) {\n        console.error('Error reading file:', err.message);\n        return null;\n    }\n}\n\n// Promise.all — parallel execution\nasync function fetchMultiple() {\n    const [users, products] = await Promise.all([\n        fetch('/api/users').then(r => r.json()),\n        fetch('/api/products').then(r => r.json()),\n    ]);\n    console.log(users, products);\n}`,
        language: 'nodejs',
      },
    ],
  },
  {
    id: 'csharp-track',
    title: 'C# & .NET Development',
    icon: '💜',
    color: '#a855f7',
    level: 'Intermediate',
    totalLessons: 6,
    description: 'Learn C# and the .NET ecosystem — used extensively in enterprise and Microsoft environments.',
    chapters: [
      {
        id: 'cs-1', title: 'C# Basics',
        content: 'C# is a modern, strongly-typed language by Microsoft. It runs on the .NET runtime.\n\nKey features:\n• Statically typed — types checked at compile time\n• Object-oriented — classes, interfaces, inheritance\n• LINQ — powerful query syntax for collections\n• async/await — built-in async support\n• Used for: Windows apps, web APIs (ASP.NET), games (Unity), enterprise systems',
        code: 'using System;\n' +
          'using System.Collections.Generic;\n\n' +
          '// C# class\n' +
          'class Employee {\n' +
          '    public string Name { get; set; }\n' +
          '    public string Department { get; set; }\n' +
          '    public decimal Salary { get; set; }\n\n' +
          '    public Employee(string name, string dept, decimal salary) {\n' +
          '        Name = name; Department = dept; Salary = salary;\n' +
          '    }\n\n' +
          '    public string GetSummary() =>\n' +
          '        $"{Name} | {Department} | ${Salary:N0}";\n\n' +
          '    public override string ToString() => GetSummary();\n' +
          '}\n\n' +
          'class Program {\n' +
          '    static void Main() {\n' +
          '        var emp = new Employee("Alice", "Engineering", 95000);\n' +
          '        Console.WriteLine(emp);\n\n' +
          '        var number = 42;\n' +
          '        var message = $"The answer is {number}";\n' +
          '        Console.WriteLine(message);\n' +
          '    }\n' +
          '}',
        language: 'csharp',
      },
      {
        id: 'cs-2', title: 'LINQ — Language Integrated Query',
        content: 'LINQ lets you query any collection (arrays, lists, databases) using a SQL-like syntax.\n\nTwo styles:\n• Method syntax: .Where().Select().OrderBy()\n• Query syntax: from x in list where x > 5 select x\n\nLINQ works with: Lists, Arrays, XML, Entity Framework (databases), and more.',
        code: 'using System;\n' +
          'using System.Collections.Generic;\n' +
          'using System.Linq;\n\n' +
          'var employees = new List<Employee> {\n' +
          '    new("Alice","Engineering",95000), new("Bob","Marketing",65000),\n' +
          '    new("Carol","Engineering",82000), new("Dave","HR",55000),\n' +
          '    new("Eve","Engineering",78000),\n' +
          '};\n\n' +
          '// Filter + Sort + Select\n' +
          'var engineeringTeam = employees\n' +
          '    .Where(e => e.Department == "Engineering")\n' +
          '    .OrderByDescending(e => e.Salary)\n' +
          '    .Select(e => new { e.Name, e.Salary });\n\n' +
          'foreach (var e in engineeringTeam)\n' +
          '    Console.WriteLine($"{e.Name}: ${e.Salary:N0}");\n\n' +
          '// Aggregations\n' +
          'var avgSalary = employees.Average(e => e.Salary);\n' +
          'var topEarner = employees.MaxBy(e => e.Salary);\n\n' +
          'Console.WriteLine($"Avg Salary: ${avgSalary:N0}");\n' +
          'Console.WriteLine($"Top Earner: {topEarner?.Name}");',
        language: 'csharp',
      },
      {
        id: 'cs-3', title: 'ASP.NET Core Web API',
        content: 'ASP.NET Core is a high-performance, cross-platform web framework for building REST APIs.\n\nMinimal API (modern approach):\n• Define routes with app.MapGet/Post/Put/Delete\n• Dependency Injection built-in\n• Swagger UI auto-generated\n\nController-based (traditional):\n• [ApiController] attribute\n• Route attributes on methods',
        code: '// ASP.NET Core Minimal API\n' +
          'using Microsoft.AspNetCore.Builder;\n\n' +
          'var builder = WebApplication.CreateBuilder(args);\n' +
          'var app = builder.Build();\n\n' +
          'var todos = new List<Todo>();\n' +
          'int nextId = 1;\n\n' +
          'record Todo(int Id, string Title, bool Done = false);\n\n' +
          'app.MapGet("/todos", () => todos);\n\n' +
          'app.MapPost("/todos", (TodoInput input) => {\n' +
          '    var todo = new Todo(nextId++, input.Title);\n' +
          '    todos.Add(todo);\n' +
          '    return Results.Created($"/todos/{todo.Id}", todo);\n' +
          '});\n\n' +
          'app.MapDelete("/todos/{id}", (int id) => {\n' +
          '    var todo = todos.Find(t => t.Id == id);\n' +
          '    if (todo is null) return Results.NotFound();\n' +
          '    todos.Remove(todo);\n' +
          '    return Results.NoContent();\n' +
          '});\n\n' +
          'app.Run();\n' +
          'record TodoInput(string Title);',
        language: 'csharp',
      },
    ],
  },
  {
    id: 'cpp-track',
    title: 'C++ from Scratch',
    icon: '⚙️',
    color: '#ef4444',
    level: 'Intermediate',
    totalLessons: 6,
    description: 'Master C++ — the language of systems, games, and performance-critical applications.',
    chapters: [
      {
        id: 'cpp-1', title: 'C++ Fundamentals',
        content: 'C++ is a powerful, low-level language with high performance. It gives direct memory control.\n\nWhy C++?\n• Blazing fast — used in game engines, browsers, OS kernels\n• Systems programming — OS, drivers, embedded\n• Competitive programming — fastest runtime\n• Game development (Unreal Engine)\n\nC++ is compiled, statically typed, and supports both OOP and procedural programming.',
        code: `#include <iostream>\n#include <string>\nusing namespace std;\n\n// Function declaration\nint factorial(int n);\n\nint main() {\n    // Variables\n    int age = 25;\n    double pi = 3.14159;\n    string name = "CodeCraft";\n    bool isReady = true;\n\n    // Output\n    cout << "Name: " << name << endl;\n    cout << "PI: " << pi << endl;\n\n    // Conditional\n    if (isReady) {\n        cout << "Let's code!" << endl;\n    }\n\n    // Loop\n    for (int i = 1; i <= 5; i++) {\n        cout << i << " ";\n    }\n    cout << endl;\n\n    // Function call\n    cout << "5! = " << factorial(5) << endl;\n\n    return 0;\n}\n\nint factorial(int n) {\n    if (n <= 1) return 1;\n    return n * factorial(n - 1);\n}`,
        language: 'cpp',
      },
      {
        id: 'cpp-2', title: 'STL: Standard Template Library',
        content: 'The STL is C++\'s powerful standard library with containers, algorithms, and iterators.\n\nContainers:\n• vector — dynamic array\n• map — key-value (sorted, O(log n))\n• unordered_map — hash map (O(1) avg)\n• set — unique sorted elements\n• queue, stack, priority_queue\n\nAlgorithms: sort, find, count, min_element, max_element, binary_search',
        code: `#include <iostream>\n#include <vector>\n#include <map>\n#include <algorithm>\n#include <unordered_map>\nusing namespace std;\n\nint main() {\n    // vector\n    vector<int> nums = {5, 3, 8, 1, 9, 2, 7};\n    sort(nums.begin(), nums.end());  // sort ascending\n    cout << "Min: " << nums.front() << endl;\n    cout << "Max: " << nums.back()  << endl;\n\n    // unordered_map (hash map)\n    unordered_map<string, int> freq;\n    vector<string> words = {"apple","banana","apple","cherry","banana","apple"};\n    for (const auto& w : words) freq[w]++;\n\n    for (const auto& [word, count] : freq)\n        cout << word << ": " << count << endl;\n\n    // vector of pairs + custom sort\n    vector<pair<string,int>> v(freq.begin(), freq.end());\n    sort(v.begin(), v.end(), [](auto& a, auto& b) {\n        return a.second > b.second; // sort by frequency desc\n    });\n\n    return 0;\n}`,
        language: 'cpp',
      },
    ],
  },
];
