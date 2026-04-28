export const problems = [
  {
    id: 1, title: "Two Sum", difficulty: "Easy", topic: "Arrays", tags: ["Array", "Hash Map"],
    companies: ["Google", "Amazon", "Meta", "Microsoft"],
    acceptance: 92,
    description: "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.",
    examples: [
      { input: "nums = [2,7,11,15], target = 9", output: "[0,1]", explanation: "nums[0] + nums[1] = 2 + 7 = 9" },
      { input: "nums = [3,2,4], target = 6", output: "[1,2]" },
    ],
    constraints: ["2 ≤ nums.length ≤ 10⁴", "-10⁹ ≤ nums[i] ≤ 10⁹", "Only one valid answer exists."],
    starterCode: {
      python: `def twoSum(nums, target):\n    # Write your solution here\n    pass\n\nprint(twoSum([2,7,11,15], 9))`,
      javascript: `function twoSum(nums, target) {\n    // Write your solution here\n}\n\nconsole.log(twoSum([2,7,11,15], 9));`,
      java: `import java.util.*;\npublic class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        // Write your solution here\n        return new int[]{};\n    }\n}`,
      cpp: `#include <vector>\n#include <unordered_map>\nusing namespace std;\nvector<int> twoSum(vector<int>& nums, int target) {\n    // Write your solution here\n    return {};\n}`,
    },
  },
  {
    id: 2, title: "Reverse a String", difficulty: "Easy", topic: "Strings", tags: ["String"],
    acceptance: 96,
    description: "Write a function that reverses a string. The input string is given as an array of characters `s`.\n\nYou must do this by modifying the input array in-place with O(1) extra memory.",
    examples: [
      { input: 's = ["h","e","l","l","o"]', output: '["o","l","l","e","h"]' },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁵"],
    starterCode: {
      python: `def reverseString(s):\n    # Write your solution here\n    pass\n\ns = ['h','e','l','l','o']\nreverseString(s)\nprint(s)`,
      javascript: `function reverseString(s) {\n    // Write your solution here\n}\n\nlet s = ['h','e','l','l','o'];\nreverseString(s);\nconsole.log(s);`,
      java: `public class Solution {\n    public void reverseString(char[] s) {\n        // Write your solution here\n    }\n}`,
      cpp: `#include <vector>\nusing namespace std;\nvoid reverseString(vector<char>& s) {\n    // Write your solution here\n}`,
    },
  },
  {
    id: 3, title: "FizzBuzz", difficulty: "Easy", topic: "Math", tags: ["Math", "String"],
    acceptance: 98,
    description: "Given an integer `n`, return a string array where:\n- `answer[i] == \"FizzBuzz\"` if i is divisible by 3 and 5.\n- `answer[i] == \"Fizz\"` if i is divisible by 3.\n- `answer[i] == \"Buzz\"` if i is divisible by 5.\n- `answer[i] == i` (as a string) otherwise.",
    examples: [
      { input: "n = 15", output: '["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]' },
    ],
    constraints: ["1 ≤ n ≤ 10⁴"],
    starterCode: {
      python: `def fizzBuzz(n):\n    result = []\n    # Write your solution here\n    return result\n\nprint(fizzBuzz(15))`,
      javascript: `function fizzBuzz(n) {\n    let result = [];\n    // Write your solution here\n    return result;\n}\nconsole.log(fizzBuzz(15));`,
      java: `import java.util.*;\npublic class Solution {\n    public List<String> fizzBuzz(int n) {\n        // Write your solution here\n        return new ArrayList<>();\n    }\n}`,
      cpp: `#include <vector>\n#include <string>\nusing namespace std;\nvector<string> fizzBuzz(int n) {\n    // Write your solution here\n    return {};\n}`,
    },
  },
  {
    id: 4, title: "Valid Parentheses", difficulty: "Easy", topic: "Stack", tags: ["Stack", "String"],
    acceptance: 88,
    description: "Given a string `s` containing just the characters `(`, `)`, `{`, `}`, `[` and `]`, determine if the input string is valid.\n\nAn input string is valid if:\n1. Open brackets must be closed by the same type of brackets.\n2. Open brackets must be closed in the correct order.",
    examples: [
      { input: 's = "()"', output: "true" },
      { input: 's = "()[]{}"', output: "true" },
      { input: 's = "(]"', output: "false" },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁴"],
    starterCode: {
      python: `def isValid(s):\n    # Write your solution here\n    pass\n\nprint(isValid("()[]{}"))`,
      javascript: `function isValid(s) {\n    // Write your solution here\n}\nconsole.log(isValid("()[]{}"));`,
      java: `public class Solution {\n    public boolean isValid(String s) {\n        // Write your solution here\n        return false;\n    }\n}`,
      cpp: `#include <string>\n#include <stack>\nusing namespace std;\nbool isValid(string s) {\n    // Write your solution here\n    return false;\n}`,
    },
  },
  {
    id: 5, title: "Maximum Subarray", difficulty: "Medium", topic: "Dynamic Programming", tags: ["Array", "DP"],
    acceptance: 74,
    description: "Given an integer array `nums`, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.\n\nThis is the classic Kadane's Algorithm problem.",
    examples: [
      { input: "nums = [-2,1,-3,4,-1,2,1,-5,4]", output: "6", explanation: "[4,-1,2,1] has the largest sum = 6" },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    starterCode: {
      python: `def maxSubArray(nums):\n    # Write your solution here\n    pass\n\nprint(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))`,
      javascript: `function maxSubArray(nums) {\n    // Write your solution here\n}\nconsole.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));`,
      java: `public class Solution {\n    public int maxSubArray(int[] nums) {\n        // Write your solution here\n        return 0;\n    }\n}`,
      cpp: `#include <vector>\nusing namespace std;\nint maxSubArray(vector<int>& nums) {\n    // Write your solution here\n    return 0;\n}`,
    },
  },
  {
    id: 6, title: "Binary Search", difficulty: "Easy", topic: "Binary Search", tags: ["Array", "Binary Search"],
    acceptance: 90,
    description: "Given an array of integers `nums` sorted in ascending order, and an integer `target`, write a function to search `target` in `nums`. If `target` exists return its index. Otherwise, return `-1`.",
    examples: [
      { input: "nums = [-1,0,3,5,9,12], target = 9", output: "4" },
      { input: "nums = [-1,0,3,5,9,12], target = 2", output: "-1" },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁴", "All integers are unique", "nums is sorted in ascending order"],
    starterCode: {
      python: `def search(nums, target):\n    # Write your solution here\n    pass\n\nprint(search([-1,0,3,5,9,12], 9))`,
      javascript: `function search(nums, target) {\n    // Write your solution here\n}\nconsole.log(search([-1,0,3,5,9,12], 9));`,
      java: `public class Solution {\n    public int search(int[] nums, int target) {\n        // Write your solution here\n        return -1;\n    }\n}`,
      cpp: `#include <vector>\nusing namespace std;\nint search(vector<int>& nums, int target) {\n    // Write your solution here\n    return -1;\n}`,
    },
  },
  {
    id: 7, title: "Linked List Cycle", difficulty: "Easy", topic: "Linked List", tags: ["Linked List", "Two Pointers"],
    acceptance: 82,
    description: "Given `head`, the head of a linked list, determine if the linked list has a cycle in it.\n\nReturn `true` if there is a cycle in the linked list. Otherwise, return `false`.\n\nUse Floyd's Cycle Detection Algorithm (fast & slow pointers).",
    examples: [
      { input: "head = [3,2,0,-4], pos = 1", output: "true" },
      { input: "head = [1,2], pos = 0", output: "true" },
      { input: "head = [1], pos = -1", output: "false" },
    ],
    constraints: ["Number of nodes in list is [0, 10⁴]"],
    starterCode: {
      python: `class ListNode:\n    def __init__(self, x):\n        self.val = x\n        self.next = None\n\ndef hasCycle(head):\n    # Write your solution here\n    pass`,
      javascript: `function hasCycle(head) {\n    // Write your solution here\n    // Use fast and slow pointers\n}`,
      java: `public class Solution {\n    public boolean hasCycle(ListNode head) {\n        // Write your solution here\n        return false;\n    }\n}`,
      cpp: `bool hasCycle(ListNode *head) {\n    // Write your solution here\n    return false;\n}`,
    },
  },
  {
    id: 8, title: "Number of Islands", difficulty: "Medium", topic: "Graphs", tags: ["Graph", "BFS", "DFS"],
    acceptance: 68,
    description: "Given an `m x n` 2D binary grid which represents a map of `'1'`s (land) and `'0'`s (water), return the number of islands.\n\nAn island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.",
    examples: [
      { input: 'grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]', output: "1" },
    ],
    constraints: ["m == grid.length", "n == grid[i].length", "1 ≤ m, n ≤ 300"],
    starterCode: {
      python: `def numIslands(grid):\n    # Write your solution here (use DFS/BFS)\n    pass`,
      javascript: `function numIslands(grid) {\n    // Write your solution here (use DFS/BFS)\n}`,
      java: `public class Solution {\n    public int numIslands(char[][] grid) {\n        // Write your solution here\n        return 0;\n    }\n}`,
      cpp: `int numIslands(vector<vector<char>>& grid) {\n    // Write your solution here\n    return 0;\n}`,
    },
  },
  {
    id: 9, title: "Merge Two Sorted Lists", difficulty: "Easy", topic: "Linked List", tags: ["Linked List", "Recursion"],
    acceptance: 94,
    description: "Merge two sorted linked lists and return it as a sorted list.\n\nThe list should be made by splicing together the nodes of the first two lists.",
    examples: [
      { input: "l1 = [1,2,4], l2 = [1,3,4]", output: "[1,1,2,3,4,4]" },
      { input: "l1 = [], l2 = []", output: "[]" },
    ],
    constraints: ["Number of nodes [0, 50]", "-100 ≤ Node.val ≤ 100"],
    starterCode: {
      python: `def mergeTwoLists(l1, l2):\n    # Write your solution here\n    pass`,
      javascript: `function mergeTwoLists(l1, l2) {\n    // Write your solution here\n}`,
      java: `public ListNode mergeTwoLists(ListNode l1, ListNode l2) {\n    // Write your solution here\n    return null;\n}`,
      cpp: `ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {\n    // Write your solution here\n    return nullptr;\n}`,
    },
  },
  {
    id: 10, title: "Climbing Stairs", difficulty: "Easy", topic: "Dynamic Programming", tags: ["DP", "Math"],
    acceptance: 91,
    description: "You are climbing a staircase. It takes `n` steps to reach the top.\n\nEach time you can either climb `1` or `2` steps. In how many distinct ways can you climb to the top?\n\nThis is essentially the Fibonacci sequence problem.",
    examples: [
      { input: "n = 2", output: "2", explanation: "1+1, 2" },
      { input: "n = 3", output: "3", explanation: "1+1+1, 1+2, 2+1" },
    ],
    constraints: ["1 ≤ n ≤ 45"],
    starterCode: {
      python: `def climbStairs(n):\n    # Write your solution here\n    pass\n\nprint(climbStairs(5))`,
      javascript: `function climbStairs(n) {\n    // Write your solution here\n}\nconsole.log(climbStairs(5));`,
      java: `public int climbStairs(int n) {\n    // Write your solution here\n    return 0;\n}`,
      cpp: `int climbStairs(int n) {\n    // Write your solution here\n    return 0;\n}`,
    },
  },
  {
    id: 11, title: "Find Duplicate in Array", difficulty: "Medium", topic: "Arrays", tags: ["Array", "Hash Map"],
    acceptance: 76,
    description: "Given an integer array `nums` containing `n + 1` integers where each integer is in the range `[1, n]` inclusive. There is only one repeated number in `nums`, return this repeated number.",
    examples: [{ input: "nums = [1,3,4,2,2]", output: "2" }],
    constraints: ["1 ≤ n ≤ 10⁵", "nums[i] is in range [1, n]", "Only one integer appears more than once."],
    starterCode: {
      python: `def findDuplicate(nums):\n    # Write your solution here\n    pass\n\nprint(findDuplicate([1,3,4,2,2]))`,
      javascript: `function findDuplicate(nums) {\n    // Write your solution here\n}\nconsole.log(findDuplicate([1,3,4,2,2]));`,
      java: `public int findDuplicate(int[] nums) {\n    return 0;\n}`,
      cpp: `int findDuplicate(vector<int>& nums) {\n    return 0;\n}`,
    },
  },
  {
    id: 12, title: "Longest Common Prefix", difficulty: "Easy", topic: "Strings", tags: ["String"],
    acceptance: 87,
    description: "Write a function to find the longest common prefix string amongst an array of strings.\n\nIf there is no common prefix, return an empty string `\"\"`.",
    examples: [
      { input: 'strs = ["flower","flow","flight"]', output: '"fl"' },
      { input: 'strs = ["dog","racecar","car"]', output: '""' },
    ],
    constraints: ["1 ≤ strs.length ≤ 200"],
    starterCode: {
      python: `def longestCommonPrefix(strs):\n    # Write your solution here\n    pass\n\nprint(longestCommonPrefix(["flower","flow","flight"]))`,
      javascript: `function longestCommonPrefix(strs) {\n    // Write your solution here\n}\nconsole.log(longestCommonPrefix(["flower","flow","flight"]));`,
      java: `public String longestCommonPrefix(String[] strs) {\n    return "";\n}`,
      cpp: `string longestCommonPrefix(vector<string>& strs) {\n    return "";\n}`,
    },
  },
  {
    id: 13, title: 'Promise Chain', difficulty: 'Medium', topic: 'Node.js', tags: ['Node.js', 'Async', 'Promise'],
    acceptance: 71,
    description: 'Write an async function that fetches user data and returns their name. Use async/await to handle the asynchronous operations cleanly.\n\nSimulate a 1-second network delay using a Promise.',
    examples: [
      { input: 'getUser(1)', output: '"Alice Smith"', explanation: 'Returns the user name after async fetch' },
    ],
    constraints: ['Must use async/await', 'Handle errors with try/catch'],
    starterCode: {
      javascript: `// Simulate async user fetch\nconst fakeDB = { 1: "Alice Smith", 2: "Bob Jones" };\n\nfunction fetchUser(id) {\n    return new Promise((resolve, reject) => {\n        setTimeout(() => {\n            if (fakeDB[id]) resolve(fakeDB[id]);\n            else reject(new Error("User not found"));\n        }, 100);\n    });\n}\n\nasync function getUser(id) {\n    // Use async/await here\n}\n\ngetUser(1).then(console.log).catch(console.error);`,
      nodejs: `const fakeDB = { 1: "Alice Smith", 2: "Bob Jones" };\n\nfunction fetchUser(id) {\n    return new Promise((resolve, reject) => {\n        setTimeout(() => {\n            if (fakeDB[id]) resolve(fakeDB[id]);\n            else reject(new Error("User not found"));\n        }, 100);\n    });\n}\n\nasync function getUser(id) {\n    // Write your async/await solution\n}\n\ngetUser(1).then(name => console.log("User:", name)).catch(console.error);`,
      python: `import asyncio\n\nfake_db = {1: "Alice Smith", 2: "Bob Jones"}\n\nasync def fetch_user(user_id):\n    await asyncio.sleep(0.1)  # simulate delay\n    if user_id in fake_db:\n        return fake_db[user_id]\n    raise ValueError("User not found")\n\nasync def get_user(user_id):\n    # Write your solution here\n    pass\n\nasyncio.run(get_user(1))`,
      java: `// Java CompletableFuture example\nimport java.util.concurrent.CompletableFuture;\nimport java.util.Map;\n\npublic class Solution {\n    static Map<Integer,String> db = Map.of(1,"Alice Smith",2,"Bob Jones");\n\n    public static CompletableFuture<String> getUser(int id) {\n        // Write your solution here\n        return CompletableFuture.completedFuture(db.get(id));\n    }\n}`,
      cpp: `#include <iostream>\n#include <future>\n#include <map>\nusing namespace std;\n\nmap<int,string> db = {{1,"Alice Smith"},{2,"Bob Jones"}};\n\nstring getUser(int id) {\n    // Write your solution\n    return db.count(id) ? db[id] : "Not found";\n}\n\nint main() {\n    cout << getUser(1) << endl;\n    return 0;\n}`,
    },
  },
  {
    id: 14, title: 'SQL: Top 5 Salaries', difficulty: 'Easy', topic: 'SQL', tags: ['SQL', 'Aggregation', 'ORDER BY'],
    acceptance: 89,
    description: 'Write a SQL query to find the top 5 highest-paid employees.\n\nReturn their name and salary, ordered by salary descending.',
    examples: [
      { input: 'Table: employees (id, name, department, salary)', output: 'Alice | 95000\nBob | 87500\nCarol | 82000\nDave | 79000\nEve | 74500' },
    ],
    constraints: ['Return exactly 5 rows', 'Order by salary DESC'],
    starterCode: {
      sql: `-- employees table: id, name, department, salary\n-- Write your query below\n\nSELECT\n    name,\n    salary\nFROM employees\n-- Add ORDER BY and LIMIT here`,
      python: `# Equivalent in Python (using pandas)\nimport pandas as pd\n\n# Sample data\ndata = {\n    "name":   ["Alice","Bob","Carol","Dave","Eve","Frank"],\n    "salary": [95000, 87500, 82000, 79000, 74500, 68000]\n}\ndf = pd.DataFrame(data)\n\n# Get top 5 by salary\nresult = df.nlargest(5, "salary")[["name","salary"]]\nprint(result.to_string(index=False))`,
      javascript: `const employees = [\n  {name:"Alice",salary:95000},{name:"Bob",salary:87500},\n  {name:"Carol",salary:82000},{name:"Dave",salary:79000},\n  {name:"Eve",salary:74500},{name:"Frank",salary:68000}\n];\n\n// Get top 5 by salary\nconst top5 = employees\n    .sort((a,b) => b.salary - a.salary)\n    .slice(0, 5);\n\ntop5.forEach(e => console.log(e.name, e.salary));`,
      csharp: `using System;\nusing System.Collections.Generic;\nusing System.Linq;\n\nvar employees = new List<(string Name, int Salary)> {\n    ("Alice",95000),("Bob",87500),("Carol",82000),\n    ("Dave",79000),("Eve",74500),("Frank",68000)\n};\n\nvar top5 = employees.OrderByDescending(e => e.Salary).Take(5);\nforeach (var e in top5)\n    Console.WriteLine($"{e.Name}: {e.Salary}");`,
    },
  },
  {
    id: 15, title: 'C# LINQ Query', difficulty: 'Easy', topic: 'C# / .NET', tags: ['C#', '.NET', 'LINQ'],
    acceptance: 84,
    description: 'Use LINQ to filter a list of students who scored above 75 and return their names sorted alphabetically.\n\nLINQ (Language Integrated Query) is a powerful C# feature for querying collections.',
    examples: [
      { input: 'students = [{name:"Alice",score:90},{name:"Bob",score:60},{name:"Carol",score:80}]', output: '"Alice", "Carol"' },
    ],
    constraints: ['Use LINQ Where and OrderBy', 'Return List<string> of names'],
    starterCode: {
      csharp: `using System;\nusing System.Collections.Generic;\nusing System.Linq;\n\nclass Student {\n    public string Name { get; set; }\n    public int Score { get; set; }\n}\n\nclass Program {\n    static void Main() {\n        var students = new List<Student> {\n            new Student { Name = "Alice", Score = 90 },\n            new Student { Name = "Bob",   Score = 60 },\n            new Student { Name = "Carol", Score = 80 },\n            new Student { Name = "Dave",  Score = 72 },\n        };\n\n        // Use LINQ to filter score > 75 and sort by name\n        var result = students\n            // .Where(...)\n            // .OrderBy(...)\n            // .Select(...)\n            .ToList();\n\n        result.ForEach(Console.WriteLine);\n    }\n}`,
      python: `students = [\n    {"name": "Alice", "score": 90},\n    {"name": "Bob",   "score": 60},\n    {"name": "Carol", "score": 80},\n    {"name": "Dave",  "score": 72},\n]\n\n# Filter score > 75, sort by name\nresult = sorted(\n    [s["name"] for s in students if s["score"] > 75]\n)\nprint(result)`,
      javascript: `const students = [\n    { name: "Alice", score: 90 },\n    { name: "Bob",   score: 60 },\n    { name: "Carol", score: 80 },\n    { name: "Dave",  score: 72 },\n];\n\nconst result = students\n    .filter(s => s.score > 75)\n    .map(s => s.name)\n    .sort();\n\nconsole.log(result);`,
      java: `import java.util.*;\nimport java.util.stream.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        var students = List.of(\n            Map.of("name","Alice","score",90),\n            Map.of("name","Bob","score",60),\n            Map.of("name","Carol","score",80)\n        );\n        students.stream()\n            .filter(s -> (int)s.get("score") > 75)\n            .map(s -> s.get("name"))\n            .sorted()\n            .forEach(System.out::println);\n    }\n}`,
    },
  },
  {
    id: 16, title: 'C++ Vector Operations', difficulty: 'Easy', topic: 'C++', tags: ['C++', 'STL', 'Vector'],
    acceptance: 86,
    description: 'Use C++ STL to:\n1. Find the maximum element in a vector\n2. Sort the vector in descending order\n3. Remove all duplicates\n\nPractice using `std::sort`, `std::max_element`, and `std::unique`.',
    examples: [
      { input: 'v = {5, 3, 8, 1, 8, 3, 9, 2}', output: 'Max: 9\nSorted desc: 9 8 8 5 3 3 2 1\nUnique: 9 8 5 3 2 1' },
    ],
    constraints: ['Use STL algorithms only', 'No manual loops for sort/find'],
    starterCode: {
      cpp: `#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> v = {5, 3, 8, 1, 8, 3, 9, 2};\n\n    // 1. Find max element\n    // auto maxIt = ...\n\n    // 2. Sort descending\n    // sort(...)\n\n    // Print sorted\n    for (int x : v) cout << x << " ";\n    cout << endl;\n\n    // 3. Remove duplicates (after sorting)\n    // v.erase(unique(v.begin(), v.end()), v.end());\n\n    return 0;\n}`,
      python: `nums = [5, 3, 8, 1, 8, 3, 9, 2]\n\n# 1. Max\nprint("Max:", max(nums))\n\n# 2. Sort descending\nsorted_desc = sorted(nums, reverse=True)\nprint("Sorted desc:", *sorted_desc)\n\n# 3. Remove duplicates (preserve order)\nseen = set()\nunique = [x for x in sorted_desc if not (x in seen or seen.add(x))]\nprint("Unique:", *unique)`,
      csharp: `using System;\nusing System.Collections.Generic;\nusing System.Linq;\n\nvar nums = new List<int> { 5, 3, 8, 1, 8, 3, 9, 2 };\n\nConsole.WriteLine("Max: " + nums.Max());\n\nvar sorted = nums.OrderByDescending(x => x).ToList();\nConsole.WriteLine("Sorted desc: " + string.Join(" ", sorted));\n\nvar unique = sorted.Distinct().ToList();\nConsole.WriteLine("Unique: " + string.Join(" ", unique));`,
    },
  },
  {
    id: 17, title: 'REST API Design', difficulty: 'Medium', topic: 'Node.js', tags: ['Node.js', 'Express', 'REST API'],
    acceptance: 78,
    description: 'Design a simple Express.js REST API for a Todo app.\n\nImplement these endpoints:\n- GET /todos — list all todos\n- POST /todos — create a new todo\n- DELETE /todos/:id — delete by id\n\nData should be stored in an in-memory array.',
    examples: [
      { input: 'POST /todos {title: "Learn Node.js"}', output: '{id:1, title:"Learn Node.js", done:false}' },
      { input: 'GET /todos', output: '[{id:1, title:"Learn Node.js", done:false}]' },
    ],
    constraints: ['Use Express.js', 'In-memory storage only', 'Return JSON responses'],
    starterCode: {
      nodejs: `const express = require('express');\nconst app = express();\napp.use(express.json());\n\nlet todos = [];\nlet nextId = 1;\n\n// GET /todos - return all todos\napp.get('/todos', (req, res) => {\n    // Write your implementation\n});\n\n// POST /todos - create a todo\napp.post('/todos', (req, res) => {\n    // Write your implementation\n});\n\n// DELETE /todos/:id\napp.delete('/todos/:id', (req, res) => {\n    // Write your implementation\n});\n\napp.listen(3000, () => console.log('Server on port 3000'));`,
      javascript: `// Same logic in vanilla JS (no server)\nlet todos = [];\nlet nextId = 1;\n\nfunction createTodo(title) {\n    const todo = { id: nextId++, title, done: false };\n    todos.push(todo);\n    return todo;\n}\n\nfunction getTodos() { return todos; }\n\nfunction deleteTodo(id) {\n    const idx = todos.findIndex(t => t.id === id);\n    if (idx === -1) return null;\n    return todos.splice(idx, 1)[0];\n}\n\nconsole.log(createTodo("Learn Node.js"));\nconsole.log(getTodos());`,
      python: `# Equivalent Flask REST API\nfrom flask import Flask, request, jsonify\napp = Flask(__name__)\n\ntodos = []\nnext_id = 1\n\n@app.route('/todos', methods=['GET'])\ndef get_todos():\n    return jsonify(todos)\n\n@app.route('/todos', methods=['POST'])\ndef create_todo():\n    global next_id\n    data = request.json\n    todo = {"id": next_id, "title": data["title"], "done": False}\n    todos.append(todo)\n    next_id += 1\n    return jsonify(todo), 201\n\nif __name__ == '__main__':\n    app.run(debug=True)`,
      csharp: `// ASP.NET Core Minimal API\nusing Microsoft.AspNetCore.Builder;\nvar app = WebApplication.Create();\n\nrecord Todo(int Id, string Title, bool Done);\nvar todos = new List<Todo>();\nvar nextId = 1;\n\napp.MapGet("/todos", () => todos);\n\napp.MapPost("/todos", (Todo input) => {\n    var todo = new Todo(nextId++, input.Title, false);\n    todos.Add(todo);\n    return Results.Created($"/todos/{todo.Id}", todo);\n});\n\napp.MapDelete("/todos/{id}", (int id) => {\n    var todo = todos.Find(t => t.Id == id);\n    if (todo is null) return Results.NotFound();\n    todos.Remove(todo);\n    return Results.NoContent();\n});\n\napp.Run();`,
    },
  },
  {
    id: 18, title: 'SQL: Department Average Salary', difficulty: 'Medium', topic: 'SQL', tags: ['SQL', 'GROUP BY', 'JOIN'],
    acceptance: 75,
    description: 'Write a SQL query to find the average salary per department, showing only departments where the average salary exceeds $70,000.\n\nJoin the employees and departments tables.',
    examples: [
      { input: 'employees(id, name, dept_id, salary) JOIN departments(id, dept_name)', output: 'Engineering | 88500\nProduct | 77200' },
    ],
    constraints: ['Use GROUP BY + HAVING', 'JOIN both tables', 'Round average to 0 decimal places'],
    starterCode: {
      sql: `-- Tables:\n-- employees (id, name, dept_id, salary)\n-- departments (id, dept_name)\n\nSELECT\n    d.dept_name,\n    ROUND(AVG(e.salary), 0) AS avg_salary\nFROM employees e\n-- Add your JOIN here\n-- Add GROUP BY\n-- Add HAVING clause\nORDER BY avg_salary DESC;`,
      python: `import pandas as pd\n\nemployees = pd.DataFrame({\n    "name":    ["Alice","Bob","Carol","Dave","Eve"],\n    "dept_id": [1,1,2,2,3],\n    "salary":  [95000,82000,77200,77200,45000]\n})\n\ndepts = pd.DataFrame({"id":[1,2,3],"dept_name":["Engineering","Product","HR"]})\n\nresult = (employees\n    .merge(depts, left_on="dept_id", right_on="id")\n    .groupby("dept_name")["salary"]\n    .mean()\n    .round(0)\n    .reset_index()\n    .query("salary > 70000")\n    .sort_values("salary", ascending=False)\n)\nprint(result.to_string(index=False))`,
      javascript: `const employees = [\n  {name:"Alice",deptId:1,salary:95000},{name:"Bob",deptId:1,salary:82000},\n  {name:"Carol",deptId:2,salary:77200},{name:"Dave",deptId:2,salary:77200},\n  {name:"Eve",deptId:3,salary:45000}\n];\nconst depts = {1:"Engineering",2:"Product",3:"HR"};\n\nconst grouped = employees.reduce((acc, e) => {\n  acc[e.deptId] = acc[e.deptId] || [];\n  acc[e.deptId].push(e.salary);\n  return acc;\n}, {});\n\nObject.entries(grouped)\n  .map(([id, salaries]) => ({\n    dept: depts[id],\n    avg: Math.round(salaries.reduce((a,b)=>a+b,0)/salaries.length)\n  }))\n  .filter(d => d.avg > 70000)\n  .sort((a,b)=>b.avg-a.avg)\n  .forEach(d => console.log(d.dept, d.avg));`,
    },
  },
  {
    id: 19, title: 'TypeScript Generics', difficulty: 'Medium', topic: 'Frontend', tags: ['TypeScript', 'Generics'],
    acceptance: 72,
    description: 'Create a generic `Stack<T>` class in TypeScript that supports:\n- `push(item: T)` — add item to top\n- `pop(): T | undefined` — remove and return top item\n- `peek(): T | undefined` — view top without removing\n- `isEmpty(): boolean` — check if empty',
    examples: [
      { input: 'new Stack<number>()', output: 'Stack works with numbers, strings, objects' },
    ],
    constraints: ['Must use TypeScript generics', 'Type-safe for any type T'],
    starterCode: {
      typescript: `class Stack<T> {\n    private items: T[] = [];\n\n    push(item: T): void {\n        // Add to top\n    }\n\n    pop(): T | undefined {\n        // Remove and return top\n        return undefined;\n    }\n\n    peek(): T | undefined {\n        // Return top without removing\n        return undefined;\n    }\n\n    isEmpty(): boolean {\n        return this.items.length === 0;\n    }\n\n    size(): number {\n        return this.items.length;\n    }\n}\n\n// Test\nconst numStack = new Stack<number>();\nnumStack.push(1);\nnumStack.push(2);\nnumStack.push(3);\nconsole.log(numStack.peek()); // 3\nconsole.log(numStack.pop());  // 3\nconsole.log(numStack.size()); // 2`,
      javascript: `class Stack {\n    #items = [];\n\n    push(item) {\n        // Write your solution\n    }\n\n    pop() {\n        // Write your solution\n    }\n\n    peek() {\n        return this.#items[this.#items.length - 1];\n    }\n\n    isEmpty() {\n        return this.#items.length === 0;\n    }\n}\n\nconst s = new Stack();\ns.push(1); s.push(2); s.push(3);\nconsole.log(s.peek());\nconsole.log(s.pop());\nconsole.log(s.isEmpty());`,
      python: `from typing import TypeVar, Generic, Optional\n\nT = TypeVar('T')\n\nclass Stack(Generic[T]):\n    def __init__(self):\n        self._items: list[T] = []\n\n    def push(self, item: T) -> None:\n        self._items.append(item)\n\n    def pop(self) -> Optional[T]:\n        return self._items.pop() if self._items else None\n\n    def peek(self) -> Optional[T]:\n        return self._items[-1] if self._items else None\n\n    def is_empty(self) -> bool:\n        return len(self._items) == 0\n\ns: Stack[int] = Stack()\ns.push(1); s.push(2); s.push(3)\nprint(s.peek())  # 3\nprint(s.pop())   # 3`,
      csharp: `using System;\nusing System.Collections.Generic;\n\npublic class Stack<T> {\n    private List<T> _items = new();\n\n    public void Push(T item) => _items.Add(item);\n\n    public T? Pop() {\n        if (_items.Count == 0) return default;\n        var top = _items[^1];\n        _items.RemoveAt(_items.Count - 1);\n        return top;\n    }\n\n    public T? Peek() => _items.Count > 0 ? _items[^1] : default;\n    public bool IsEmpty() => _items.Count == 0;\n}\n\nvar s = new Stack<int>();\ns.Push(1); s.Push(2); s.Push(3);\nConsole.WriteLine(s.Peek()); // 3\nConsole.WriteLine(s.Pop());  // 3`,
    },
  },
  {
    id: 20, title: 'Python Decorators', difficulty: 'Medium', topic: 'Python', tags: ['Python', 'Decorators', 'Functions'],
    acceptance: 69,
    description: 'Create a Python decorator `@timer` that measures and prints the execution time of any function.\n\nAlso create a `@retry(n)` decorator that retries a function up to `n` times if it raises an exception.',
    examples: [
      { input: '@timer\ndef slow_function(): time.sleep(1)', output: 'slow_function took 1.001s' },
      { input: '@retry(3)\ndef flaky(): raise ValueError("fail")', output: 'Retry 1...\nRetry 2...\nRetry 3...\nFailed after 3 retries' },
    ],
    constraints: ['Must use functools.wraps', 'timer uses time.perf_counter'],
    starterCode: {
      python: `import time\nimport functools\n\n# Decorator 1: @timer\ndef timer(func):\n    @functools.wraps(func)\n    def wrapper(*args, **kwargs):\n        # Measure time here\n        pass\n    return wrapper\n\n# Decorator 2: @retry(n)\ndef retry(n):\n    def decorator(func):\n        @functools.wraps(func)\n        def wrapper(*args, **kwargs):\n            # Retry logic here\n            pass\n        return wrapper\n    return decorator\n\n# Test timer\n@timer\ndef slow():\n    time.sleep(0.1)\n    return "done"\n\nprint(slow())\n\n# Test retry\nattempts = 0\n@retry(3)\ndef flaky():\n    global attempts\n    attempts += 1\n    if attempts < 3:\n        raise ValueError("Not ready yet")\n    return "Success!"\n\nprint(flaky())`,
      javascript: `// JS equivalent: higher-order functions\nfunction timer(fn) {\n    return function(...args) {\n        const start = performance.now();\n        const result = fn(...args);\n        const end = performance.now();\n        console.log(\`\${fn.name} took \${((end-start)/1000).toFixed(3)}s\`);\n        return result;\n    };\n}\n\nfunction retry(n) {\n    return function(fn) {\n        return function(...args) {\n            for (let i = 0; i < n; i++) {\n                try { return fn(...args); }\n                catch(e) { console.log(\`Retry \${i+1}...\`); }\n            }\n            console.log(\`Failed after \${n} retries\`);\n        };\n    };\n}\n\nconst timedFn = timer(function slow() { return "done"; });\ntimedFn();`,
    },
  },
  {
    id: 21, title: 'CSS Flexbox Layout', difficulty: 'Easy', topic: 'Frontend', tags: ['CSS', 'Flexbox', 'Layout'],
    acceptance: 93,
    description: 'Using CSS Flexbox, create a navigation bar that has:\n- Logo on the left\n- Navigation links centered\n- A CTA button on the right\n\nThe layout must be responsive — stack vertically on screens < 600px.',
    examples: [
      { input: '<nav> with logo, links, button', output: 'Horizontal navbar on desktop, vertical on mobile' },
    ],
    constraints: ['Must use display: flex', 'No CSS Grid', 'Mobile responsive'],
    starterCode: {
      javascript: `// Flexbox challenge — write the CSS in your head!\n// Here's the HTML structure:\nconst navHTML = \`\n<nav class="navbar">\n  <div class="logo">CodeCraft</div>\n  <ul class="nav-links">\n    <li>Home</li>\n    <li>Learn</li>\n    <li>Practice</li>\n  </ul>\n  <button class="cta">Start Free</button>\n</nav>\n\`;\n\n// Required CSS (write it out):\nconst css = \`\n.navbar {\n    display: flex;\n    /* align-items, justify-content, gap? */\n}\n\n.nav-links {\n    /* flex, gap, list-style? */\n}\n\n@media (max-width: 600px) {\n    .navbar {\n        /* flex-direction? */\n    }\n}\n\`;\n\nconsole.log("CSS Flexbox solution written!");\nconsole.log("Key properties: display:flex, justify-content:space-between, align-items:center");`,
      python: `# CSS Flexbox concepts in Python pseudo-code\nflexbox_properties = {\n    "display": "flex",\n    "flex-direction": ["row", "column", "row-reverse", "column-reverse"],\n    "justify-content": ["flex-start","flex-end","center","space-between","space-around","space-evenly"],\n    "align-items": ["flex-start","flex-end","center","stretch","baseline"],\n    "flex-wrap": ["nowrap","wrap","wrap-reverse"],\n    "gap": "spacing between items"\n}\n\n# Navbar solution\nnavbar_css = {\n    "display": "flex",\n    "justify-content": "space-between",\n    "align-items": "center",\n    "padding": "16px 24px"\n}\n\nfor prop, val in navbar_css.items():\n    print(f"{prop}: {val};")`,
    },
  },
  // ── FAANG Problems ──────────────────────────────────────────
  {
    id: 22, title: "LRU Cache", difficulty: "Hard", topic: "Arrays",
    tags: ["Design", "Hash Map", "Linked List"], companies: ["Amazon", "Google", "Meta", "Microsoft"],
    acceptance: 41,
    description: "Design a data structure that follows the Least Recently Used (LRU) cache constraints.\n\nImplement the LRUCache class:\n- `LRUCache(int capacity)` — initialize with positive size capacity\n- `int get(int key)` — return value if key exists, else -1\n- `void put(int key, int value)` — update or insert. If capacity exceeded, evict the LRU key.\n\nBoth operations must run in O(1) average time.",
    examples: [
      { input: 'LRUCache(2); put(1,1); put(2,2); get(1); put(3,3); get(2); put(4,4); get(1); get(3); get(4)', output: '[1, -1, -1, 3, 4]', explanation: 'After put(3,3), key 2 is evicted. After put(4,4), key 1 is evicted.' },
    ],
    constraints: ["1 ≤ capacity ≤ 3000", "0 ≤ key ≤ 10⁴", "get and put at most 2×10⁵ calls"],
    starterCode: {
      python: `class LRUCache:\n    def __init__(self, capacity):\n        self.cap = capacity\n        self.cache = {}  # key -> val\n        # TODO: use OrderedDict or doubly-linked list\n\n    def get(self, key):\n        pass\n\n    def put(self, key, value):\n        pass\n\n# Test\ncache = LRUCache(2)\ncache.put(1, 1)\ncache.put(2, 2)\nprint(cache.get(1))   # 1\ncache.put(3, 3)\nprint(cache.get(2))   # -1`,
      javascript: `class LRUCache {\n    constructor(capacity) {\n        this.cap = capacity;\n        this.map = new Map(); // preserves insertion order\n    }\n    get(key) {\n        if (!this.map.has(key)) return -1;\n        const val = this.map.get(key);\n        this.map.delete(key);\n        this.map.set(key, val);\n        return val;\n    }\n    put(key, value) {\n        if (this.map.has(key)) this.map.delete(key);\n        this.map.set(key, value);\n        if (this.map.size > this.cap) this.map.delete(this.map.keys().next().value);\n    }\n}\nconst c = new LRUCache(2);\nc.put(1,1); c.put(2,2);\nconsole.log(c.get(1)); // 1\nc.put(3,3);\nconsole.log(c.get(2)); // -1`,
    },
  },
  {
    id: 23, title: "Trapping Rain Water", difficulty: "Hard", topic: "Arrays",
    tags: ["Two Pointers", "Stack", "Array"], companies: ["Amazon", "Google", "Meta"],
    acceptance: 57,
    description: "Given `n` non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
    examples: [
      { input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]", output: "6", explanation: "6 units of rain water are trapped." },
      { input: "height = [4,2,0,3,2,5]", output: "9" },
    ],
    constraints: ["n == height.length", "1 ≤ n ≤ 2×10⁴", "0 ≤ height[i] ≤ 10⁵"],
    starterCode: {
      python: `def trap(height):\n    left, right = 0, len(height) - 1\n    left_max = right_max = water = 0\n    while left < right:\n        if height[left] < height[right]:\n            if height[left] >= left_max:\n                left_max = height[left]\n            else:\n                water += left_max - height[left]\n            left += 1\n        else:\n            if height[right] >= right_max:\n                right_max = height[right]\n            else:\n                water += right_max - height[right]\n            right -= 1\n    return water\n\nprint(trap([0,1,0,2,1,0,1,3,2,1,2,1]))  # 6`,
      javascript: `function trap(height) {\n    let left = 0, right = height.length - 1;\n    let leftMax = 0, rightMax = 0, water = 0;\n    while (left < right) {\n        if (height[left] < height[right]) {\n            height[left] >= leftMax ? (leftMax = height[left]) : (water += leftMax - height[left]);\n            left++;\n        } else {\n            height[right] >= rightMax ? (rightMax = height[right]) : (water += rightMax - height[right]);\n            right--;\n        }\n    }\n    return water;\n}\nconsole.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // 6`,
    },
  },
  {
    id: 24, title: "Minimum Window Substring", difficulty: "Hard", topic: "Strings",
    tags: ["Sliding Window", "Hash Map", "String"], companies: ["Meta", "Amazon", "Google"],
    acceptance: 39,
    description: "Given strings `s` and `t`, return the minimum window substring of `s` such that every character in `t` (including duplicates) is included in the window. If no such substring exists, return empty string.\n\nAnswer is guaranteed to be unique.",
    examples: [
      { input: 's = "ADOBECODEBANC", t = "ABC"', output: '"BANC"', explanation: 'Minimum window containing A, B, C.' },
      { input: 's = "a", t = "a"', output: '"a"' },
    ],
    constraints: ["1 ≤ s.length, t.length ≤ 10⁵", "s and t consist of uppercase/lowercase English letters"],
    starterCode: {
      python: `def minWindow(s, t):\n    from collections import Counter\n    need = Counter(t)\n    missing = len(t)\n    start = end = 0\n    best = ""\n    j = 0\n    for i, c in enumerate(s):\n        if need[c] > 0:\n            missing -= 1\n        need[c] -= 1\n        if missing == 0:\n            while need[s[j]] < 0:\n                need[s[j]] += 1\n                j += 1\n            if not best or i - j + 1 < len(best):\n                best = s[j:i+1]\n            need[s[j]] += 1\n            missing += 1\n            j += 1\n    return best\n\nprint(minWindow("ADOBECODEBANC", "ABC"))  # BANC`,
      javascript: `function minWindow(s, t) {\n    const need = {};\n    for (const c of t) need[c] = (need[c] || 0) + 1;\n    let missing = t.length, start = 0, best = "";\n    for (let i = 0, j = 0; i < s.length; i++) {\n        if (need[s[i]]-- > 0) missing--;\n        while (missing === 0) {\n            const w = s.slice(j, i + 1);\n            if (!best || w.length < best.length) best = w;\n            if (++need[s[j++]] > 0) missing++;\n        }\n    }\n    return best;\n}\nconsole.log(minWindow("ADOBECODEBANC", "ABC")); // BANC`,
    },
  },
  {
    id: 25, title: "Word Break", difficulty: "Medium", topic: "Dynamic Programming",
    tags: ["DP", "String", "Trie"], companies: ["Amazon", "Google", "Microsoft"],
    acceptance: 45,
    description: "Given a string `s` and a dictionary of strings `wordDict`, return `true` if `s` can be segmented into a space-separated sequence of one or more dictionary words.",
    examples: [
      { input: 's = "leetcode", wordDict = ["leet","code"]', output: "true" },
      { input: 's = "applepenapple", wordDict = ["apple","pen"]', output: "true" },
      { input: 's = "catsandog", wordDict = ["cats","dog","sand","and","cat"]', output: "false" },
    ],
    constraints: ["1 ≤ s.length ≤ 300", "wordDict has no duplicates"],
    starterCode: {
      python: `def wordBreak(s, wordDict):\n    words = set(wordDict)\n    n = len(s)\n    dp = [False] * (n + 1)\n    dp[0] = True\n    for i in range(1, n + 1):\n        for j in range(i):\n            if dp[j] and s[j:i] in words:\n                dp[i] = True\n                break\n    return dp[n]\n\nprint(wordBreak("leetcode", ["leet","code"]))  # True`,
      javascript: `function wordBreak(s, wordDict) {\n    const words = new Set(wordDict);\n    const dp = Array(s.length + 1).fill(false);\n    dp[0] = true;\n    for (let i = 1; i <= s.length; i++)\n        for (let j = 0; j < i; j++)\n            if (dp[j] && words.has(s.slice(j, i))) { dp[i] = true; break; }\n    return dp[s.length];\n}\nconsole.log(wordBreak("leetcode", ["leet","code"])); // true`,
    },
  },
  {
    id: 26, title: "Course Schedule", difficulty: "Medium", topic: "Graphs",
    tags: ["Topological Sort", "BFS", "DFS", "Graph"], companies: ["Meta", "Amazon", "Google"],
    acceptance: 45,
    description: "There are `numCourses` courses labeled 0 to numCourses-1. Given `prerequisites[i] = [a, b]` meaning you must take b before a, return `true` if you can finish all courses.\n\nDetect if a cycle exists in the directed graph.",
    examples: [
      { input: "numCourses=2, prerequisites=[[1,0]]", output: "true", explanation: "Take course 0 then 1." },
      { input: "numCourses=2, prerequisites=[[1,0],[0,1]]", output: "false", explanation: "Cycle: 0↔1" },
    ],
    constraints: ["1 ≤ numCourses ≤ 2000", "0 ≤ prerequisites.length ≤ 5000"],
    starterCode: {
      python: `from collections import deque\ndef canFinish(numCourses, prerequisites):\n    indegree = [0] * numCourses\n    graph = [[] for _ in range(numCourses)]\n    for a, b in prerequisites:\n        graph[b].append(a)\n        indegree[a] += 1\n    q = deque(i for i in range(numCourses) if indegree[i] == 0)\n    done = 0\n    while q:\n        node = q.popleft()\n        done += 1\n        for nei in graph[node]:\n            indegree[nei] -= 1\n            if indegree[nei] == 0:\n                q.append(nei)\n    return done == numCourses\n\nprint(canFinish(2, [[1,0]]))       # True\nprint(canFinish(2, [[1,0],[0,1]])) # False`,
      javascript: `function canFinish(numCourses, prerequisites) {\n    const graph = Array.from({length: numCourses}, () => []);\n    const indegree = Array(numCourses).fill(0);\n    for (const [a, b] of prerequisites) { graph[b].push(a); indegree[a]++; }\n    const q = [];\n    for (let i = 0; i < numCourses; i++) if (indegree[i] === 0) q.push(i);\n    let done = 0;\n    while (q.length) {\n        const node = q.shift(); done++;\n        for (const nei of graph[node]) if (--indegree[nei] === 0) q.push(nei);\n    }\n    return done === numCourses;\n}\nconsole.log(canFinish(2, [[1,0]]));        // true\nconsole.log(canFinish(2, [[1,0],[0,1]]));  // false`,
    },
  },
  {
    id: 27, title: "Product of Array Except Self", difficulty: "Medium", topic: "Arrays",
    tags: ["Array", "Prefix Sum"], companies: ["Amazon", "Meta", "Microsoft", "Apple"],
    acceptance: 64,
    description: "Given integer array `nums`, return array `answer` where `answer[i]` equals the product of all elements of `nums` except `nums[i]`.\n\nMust run in O(n) time without using division.",
    examples: [
      { input: "nums = [1,2,3,4]", output: "[24,12,8,6]" },
      { input: "nums = [-1,1,0,-3,3]", output: "[0,0,9,0,0]" },
    ],
    constraints: ["2 ≤ nums.length ≤ 10⁵", "No division allowed", "O(n) time"],
    starterCode: {
      python: `def productExceptSelf(nums):\n    n = len(nums)\n    ans = [1] * n\n    prefix = 1\n    for i in range(n):\n        ans[i] = prefix\n        prefix *= nums[i]\n    suffix = 1\n    for i in range(n - 1, -1, -1):\n        ans[i] *= suffix\n        suffix *= nums[i]\n    return ans\n\nprint(productExceptSelf([1,2,3,4]))  # [24,12,8,6]`,
      javascript: `function productExceptSelf(nums) {\n    const n = nums.length, ans = Array(n).fill(1);\n    let prefix = 1;\n    for (let i = 0; i < n; i++) { ans[i] = prefix; prefix *= nums[i]; }\n    let suffix = 1;\n    for (let i = n - 1; i >= 0; i--) { ans[i] *= suffix; suffix *= nums[i]; }\n    return ans;\n}\nconsole.log(productExceptSelf([1,2,3,4])); // [24,12,8,6]`,
    },
  },
  {
    id: 28, title: "Jump Game", difficulty: "Medium", topic: "Arrays",
    tags: ["Greedy", "Array"], companies: ["Amazon", "Microsoft", "Google"],
    acceptance: 38,
    description: "You are given integer array `nums`. Each element represents your maximum jump length at that position. Return `true` if you can reach the last index from index 0.",
    examples: [
      { input: "nums = [2,3,1,1,4]", output: "true" },
      { input: "nums = [3,2,1,0,4]", output: "false", explanation: "Always stuck at index 3." },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁴", "0 ≤ nums[i] ≤ 10⁵"],
    starterCode: {
      python: `def canJump(nums):\n    max_reach = 0\n    for i, n in enumerate(nums):\n        if i > max_reach:\n            return False\n        max_reach = max(max_reach, i + n)\n    return True\n\nprint(canJump([2,3,1,1,4]))  # True\nprint(canJump([3,2,1,0,4]))  # False`,
      javascript: `function canJump(nums) {\n    let maxReach = 0;\n    for (let i = 0; i < nums.length; i++) {\n        if (i > maxReach) return false;\n        maxReach = Math.max(maxReach, i + nums[i]);\n    }\n    return true;\n}\nconsole.log(canJump([2,3,1,1,4])); // true\nconsole.log(canJump([3,2,1,0,4])); // false`,
    },
  },
  {
    id: 29, title: "Valid Parentheses", difficulty: "Easy", topic: "Stack",
    tags: ["Stack", "String"], companies: ["Google", "Meta", "Amazon", "Microsoft", "Apple"],
    acceptance: 73,
    description: "Given a string containing only `(`, `)`, `{`, `}`, `[`, `]`, determine if the input string is valid.\n\nAn input string is valid if: open brackets are closed by the same type, and in the correct order.",
    examples: [
      { input: 's = "()"', output: "true" },
      { input: 's = "()[]{}"', output: "true" },
      { input: 's = "(]"', output: "false" },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁴", "s consists of parentheses only"],
    starterCode: {
      python: `def isValid(s):\n    stack = []\n    mapping = {')': '(', '}': '{', ']': '['}\n    for char in s:\n        if char in mapping:\n            top = stack.pop() if stack else '#'\n            if mapping[char] != top:\n                return False\n        else:\n            stack.append(char)\n    return not stack\n\nprint(isValid("()[]{}"))  # True\nprint(isValid("(]"))       # False`,
      javascript: `function isValid(s) {\n    const stack = [], map = {')':'(', '}':'{', ']':'['};\n    for (const c of s) {\n        if (map[c]) { if (stack.pop() !== map[c]) return false; }\n        else stack.push(c);\n    }\n    return stack.length === 0;\n}\nconsole.log(isValid("()[]{}")); // true\nconsole.log(isValid("(]"));     // false`,
    },
  },
  {
    id: 30, title: "Merge K Sorted Lists", difficulty: "Hard", topic: "Linked List",
    tags: ["Heap", "Divide & Conquer", "Linked List"], companies: ["Amazon", "Google", "Meta"],
    acceptance: 48,
    description: "You are given an array of `k` linked-lists, each sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.",
    examples: [
      { input: "lists = [[1,4,5],[1,3,4],[2,6]]", output: "[1,1,2,3,4,4,5,6]" },
      { input: "lists = []", output: "[]" },
    ],
    constraints: ["0 ≤ k ≤ 10⁴", "0 ≤ lists[i].length ≤ 500"],
    starterCode: {
      python: `import heapq\nclass ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val; self.next = next\n    def __lt__(self, other): return self.val < other.val\n\ndef mergeKLists(lists):\n    heap = []\n    for node in lists:\n        if node: heapq.heappush(heap, node)\n    dummy = cur = ListNode(0)\n    while heap:\n        node = heapq.heappop(heap)\n        cur.next = node; cur = cur.next\n        if node.next: heapq.heappush(heap, node.next)\n    return dummy.next\n\n# Simulate with arrays\nprint("Merge K Sorted Lists — use a min-heap for O(N log K) solution")`,
      javascript: `// Divide & Conquer approach\nfunction mergeTwoLists(l1, l2) {\n    if (!l1) return l2; if (!l2) return l1;\n    if (l1.val <= l2.val) { l1.next = mergeTwoLists(l1.next, l2); return l1; }\n    l2.next = mergeTwoLists(l1, l2.next); return l2;\n}\nfunction mergeKLists(lists) {\n    if (!lists.length) return null;\n    while (lists.length > 1) {\n        const merged = [];\n        for (let i = 0; i < lists.length; i += 2)\n            merged.push(mergeTwoLists(lists[i], lists[i+1] || null));\n        lists = merged;\n    }\n    return lists[0];\n}\nconsole.log("Divide & Conquer: O(N log K) time complexity");`,
    },
  },
  {
    id: 31, title: "Find Median from Data Stream", difficulty: "Hard", topic: "Arrays",
    tags: ["Heap", "Design", "Sorting"], companies: ["Google", "Amazon", "Meta", "Microsoft"],
    acceptance: 50,
    description: "Design MedianFinder class:\n- `addNum(int num)` — adds integer from data stream\n- `findMedian()` — returns median of current data stream\n\nIf even count, median is average of two middle values.",
    examples: [
      { input: "addNum(1); addNum(2); findMedian(); addNum(3); findMedian()", output: "1.5, 2.0" },
    ],
    constraints: ["-10⁵ ≤ num ≤ 10⁵", "findMedian called at least once"],
    starterCode: {
      python: `import heapq\nclass MedianFinder:\n    def __init__(self):\n        self.lo = []  # max-heap (negate values)\n        self.hi = []  # min-heap\n\n    def addNum(self, num):\n        heapq.heappush(self.lo, -num)\n        heapq.heappush(self.hi, -heapq.heappop(self.lo))\n        if len(self.lo) < len(self.hi):\n            heapq.heappush(self.lo, -heapq.heappop(self.hi))\n\n    def findMedian(self):\n        if len(self.lo) > len(self.hi):\n            return float(-self.lo[0])\n        return (-self.lo[0] + self.hi[0]) / 2.0\n\nmf = MedianFinder()\nmf.addNum(1); mf.addNum(2)\nprint(mf.findMedian())  # 1.5\nmf.addNum(3)\nprint(mf.findMedian())  # 2.0`,
      javascript: `// Two-heap approach\nclass MedianFinder {\n    constructor() { this.lo = []; this.hi = []; } // lo=maxHeap hi=minHeap\n    addNum(num) {\n        // JS has no built-in heap; simulate with sorted insert\n        this.lo.push(num); this.lo.sort((a,b) => b-a);\n        this.hi.push(this.lo.shift()); this.hi.sort((a,b) => a-b);\n        if (this.lo.length < this.hi.length) this.lo.unshift(this.hi.shift());\n    }\n    findMedian() {\n        return this.lo.length > this.hi.length\n            ? this.lo[0] : (this.lo[0] + this.hi[0]) / 2;\n    }\n}\nconst mf = new MedianFinder();\nmf.addNum(1); mf.addNum(2);\nconsole.log(mf.findMedian()); // 1.5\nmf.addNum(3);\nconsole.log(mf.findMedian()); // 2.0`,
    },
  },
];

export const topics = ['All', 'Arrays', 'Strings', 'Stack', 'Linked List', 'Dynamic Programming', 'Graphs', 'Binary Search', 'Math', 'SQL', 'Python', 'Node.js', 'C# / .NET', 'C++', 'Frontend'];
export const difficulties = ['All', 'Easy', 'Medium', 'Hard'];


