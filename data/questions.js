// CompanyQ Data Source: QUESTIONS_DATA
// Original practice questions spanning Coding, MCQs, MSQs, Debugging, and Output Tracing

const QUESTIONS_DATA = [
  {
    "id": "amz-q1-warehouse-routing",
    "companyId": "amazon",
    "assessmentSetId": "amazon-sde-oa",
    "roleLevel": "SDE-1 / Intern",
    "questionType": "coding",
    "title": "Optimal Warehouse Delivery Route Partition",
    "difficulty": "Medium",
    "estimatedTimeMinutes": 30,
    "marks": 35,
    "prompt": "An Amazon fulfillment center is dispatching delivery vans along a single highway corridor. There are `n` delivery packages located at 1-D coordinate points given in array `locations`. Each package `i` has a delivery weight `weights[i]`.\n\nA delivery van can carry at most `maxWeight` total units of weight. You must partition the sorted delivery points into the minimum number of continuous van trips such that each trip's total payload does not exceed `maxWeight`.\n\nIf a single package exceeds `maxWeight`, return -1. Otherwise, return the minimum number of delivery vans required, and the maximum distance spanned (highest coordinate minus lowest coordinate) across all vans.\n\n### Function Signature:\n```\nminVansRequired(n: int, locations: List[int], weights: List[int], maxWeight: int) -> List[int]\n```\nReturn a list `[min_vans, max_span]` where `min_vans` is the number of trips, and `max_span` is the maximum span of any single trip.",
    "constraints": [
      "1 <= n <= 10^5",
      "1 <= locations[i] <= 10^9 (locations are sorted in strictly ascending order)",
      "1 <= weights[i] <= 10^9",
      "1 <= maxWeight <= 10^12"
    ],
    "examples": [
      {
        "input": "n = 5, locations = [10, 15, 22, 30, 45], weights = [3, 4, 2, 5, 1], maxWeight = 7",
        "output": "[3, 12]",
        "explanation": "Van 1 takes pkgs at 10, 15 (weights 3+4=7, span 15-10=5). Van 2 takes 22, 30 (weights 2+5=7, span 30-22=8). Van 3 takes 45 (weight 1, span 45-45=0). Minimum vans = 3, max span = 8."
      },
      {
        "input": "n = 3, locations = [5, 10, 15], weights = [2, 10, 3], maxWeight = 6",
        "output": "[-1, -1]",
        "explanation": "Package at index 1 has weight 10 > maxWeight 6. Impossible to carry."
      }
    ],
    "starterCode": {
      "python": "def minVansRequired(n: int, locations: list[int], weights: list[int], maxWeight: int) -> list[int]:\n    # Write your solution here\n    pass\n",
      "javascript": "function minVansRequired(n, locations, weights, maxWeight) {\n  // Write your solution here\n}\n",
      "java": "class Solution {\n    public int[] minVansRequired(int n, int[] locations, long[] weights, long maxWeight) {\n        // Write your solution here\n        return new int[]{0, 0};\n    }\n}\n",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> minVansRequired(int n, vector<int>& locations, vector<long long>& weights, long long maxWeight) {\n    // Write your solution here\n    return {};\n}\n"
    },
    "testCases": [
      {
        "id": "tc-1",
        "input": "n = 5, locations = [10, 15, 22, 30, 45], weights = [3, 4, 2, 5, 1], maxWeight = 7",
        "expectedOutput": "[3, 8]",
        "isHidden": false
      },
      {
        "id": "tc-2",
        "input": "n = 3, locations = [5, 10, 15], weights = [2, 10, 3], maxWeight = 6",
        "expectedOutput": "[-1, -1]",
        "isHidden": false
      },
      {
        "id": "tc-3",
        "input": "n = 1, locations = [100], weights = [5], maxWeight = 10",
        "expectedOutput": "[1, 0]",
        "isHidden": true
      }
    ],
    "explanation": "We iterate greedily across the packages since they are already sequential along the highway corridor. Maintain currentTripWeight and currentTripStartLoc. When adding the next package exceeds maxWeight, close the current trip, compute its span, and start a new trip. Time Complexity: O(N), Space Complexity: O(1).",
    "expectedApproach": "Single-pass greedy accumulation. Track max span encountered during trip completions.",
    "skillsAssessed": [
      "Greedy Algorithms",
      "Array Traversal",
      "Boundary Handling"
    ],
    "sourceOrInspiration": "CompanyQ Original Logistics Simulation (Inspired by Amazon Supply Chain OA patterns)",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  },
  {
    "id": "amz-q2-cache-invalidation",
    "companyId": "amazon",
    "assessmentSetId": "amazon-sde-oa",
    "roleLevel": "SDE-1 / Intern",
    "questionType": "coding",
    "title": "AWS Caching Cluster: Consistent Invalidation Queue",
    "difficulty": "Medium",
    "estimatedTimeMinutes": 30,
    "marks": 35,
    "prompt": "In an AWS distributed key-value cache, servers process an incoming stream of `k` invalidate requests. Each request arrives with a timestamp `t` and a cache key `key`.\n\nTo prevent thunderous herds, the cache coordinator drops duplicate invalidations for the same key that arrive within `cooldown` seconds of an already processed invalidation for that key (i.e. if `current_timestamp - last_processed_timestamp < cooldown`, drop it).\n\nGiven a list of requests `requests` where each element is `[timestamp, key_string]`, return the list of keys that were actually executed (not dropped), in the order of their processing.\n\n### Function Signature:\n```\nprocessInvalidations(requests: List[Tuple[int, str]], cooldown: int) -> List[str]\n```",
    "constraints": [
      "1 <= requests.length <= 10^5",
      "1 <= timestamp <= 10^9 (timestamps are in non-decreasing order)",
      "1 <= cooldown <= 10^6",
      "key strings contain 1 to 32 alphanumeric characters"
    ],
    "examples": [
      {
        "input": "requests = [[1, \"user:10\"], [2, \"user:20\"], [4, \"user:10\"], [11, \"user:10\"]], cooldown = 5",
        "output": "[\"user:10\", \"user:20\", \"user:10\"]",
        "explanation": "At t=1, 'user:10' is processed. At t=2, 'user:20' processed. At t=4, 'user:10' arrives (4 - 1 = 3 < 5), so it is dropped. At t=11, 'user:10' arrives (11 - 1 = 10 >= 5), so it is processed."
      }
    ],
    "starterCode": {
      "python": "def processInvalidations(requests: list[tuple[int, str]], cooldown: int) -> list[str]:\n    # Write your solution here\n    pass\n",
      "javascript": "function processInvalidations(requests, cooldown) {\n  // Write your solution here\n}\n",
      "java": "import java.util.*;\nclass Solution {\n    public List<String> processInvalidations(List<int[]> timestamps, List<String> keys, int cooldown) {\n        // Write your solution here\n        return new ArrayList<>();\n    }\n}\n"
    },
    "testCases": [
      {
        "id": "tc-1",
        "input": "requests = [[1, 'user:10'], [2, 'user:20'], [4, 'user:10'], [11, 'user:10']], cooldown = 5",
        "expectedOutput": "['user:10', 'user:20', 'user:10']",
        "isHidden": false
      },
      {
        "id": "tc-2",
        "input": "requests = [[10, 'order:1'], [10, 'order:1'], [10, 'order:2']], cooldown = 1",
        "expectedOutput": "['order:1', 'order:2']",
        "isHidden": true
      }
    ],
    "explanation": "Use a Hash Map mapping `key -> last_processed_time`. For each incoming event `[t, key]`, check if key exists in map. If not, or if `t - map[key] >= cooldown`, execute it, record into results list, and update `map[key] = t`. Space complexity: O(Unique Keys), Time complexity: O(N).",
    "expectedApproach": "Hash Map with timestamp validation and O(1) lookups.",
    "skillsAssessed": [
      "Hash Tables",
      "Rate Limiting Logic",
      "Stream Processing"
    ],
    "sourceOrInspiration": "CompanyQ Original Distributed System Simulation",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  },
  {
    "id": "amz-q3-lp-ownership",
    "companyId": "amazon",
    "assessmentSetId": "amazon-sde-oa",
    "roleLevel": "SDE-1 / Intern",
    "questionType": "mcq",
    "title": "Amazon Work Style Assessment: Ownership & Customer Obsession",
    "difficulty": "Easy",
    "estimatedTimeMinutes": 8,
    "marks": 15,
    "prompt": "You are a new SDE on an AWS team. While inspecting metrics before a scheduled feature release, you notice a recurring background memory leak in an adjacent team's legacy service that could cause intermittent latency spikes under 10x holiday traffic in 3 weeks. What is the most effective approach according to Amazon's Leadership Principles?",
    "objectiveOptions": [
      "Ignore it because your team's release metrics are green and the service belongs to another department.",
      "Postpone your own team's release immediately without consulting your manager or quantifying the issue.",
      "Document the observed metric anomaly, construct a reproducible test showing the latency risk, notify the owning team's tech lead with your findings, and offer to collaborate on a patch (Ownership & Bias for Action).",
      "Send an email to the VP of Engineering escalating that the adjacent team wrote flawed code."
    ],
    "correctAnswer": 2,
    "explanation": "Ownership dictates that leaders act on behalf of the entire company, beyond just their own team. They never say 'that's not my job.' Presenting quantified data, root-cause reproduction, and collaborative assistance embodies Ownership, Customer Obsession, and Bias for Action without destructive finger-pointing.",
    "skillsAssessed": [
      "Leadership Principles",
      "Ownership",
      "Constructive Collaboration"
    ],
    "sourceOrInspiration": "Amazon Work Style Assessment Simulation",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  },
  {
    "id": "amz-q4-lp-customer-bias",
    "companyId": "amazon",
    "assessmentSetId": "amazon-sde-oa",
    "roleLevel": "SDE-1 / Intern",
    "questionType": "mcq",
    "title": "Amazon Work Style: Delivering Results vs Perfect Architecture",
    "difficulty": "Easy",
    "estimatedTimeMinutes": 7,
    "marks": 15,
    "prompt": "Prime Day starts in 48 hours. A critical seller onboarding tool has a minor bug affecting 0.5% of sellers in a specific timezone during currency conversions. Two solutions are proposed: (A) A targeted, well-tested patch fixing the timezone offset in 2 hours; (B) A complete refactor of the whole internationalization module that will take 5 days. Which choice best reflects Amazon principles?",
    "objectiveOptions": [
      "Choose Option B because code quality and perfection should never be compromised under any circumstances.",
      "Choose Option A: deploy the safe, targeted two-hour hotfix to protect customers for Prime Day, create a backlog ticket for the comprehensive refactor after the peak event (Bias for Action & Deliver Results).",
      "Do neither and wait until sellers submit customer support tickets during Prime Day.",
      "Disable onboarding entirely for all global sellers until the full module is refactored."
    ],
    "correctAnswer": 1,
    "explanation": "Option A demonstrates 'Bias for Action', 'Deliver Results', and 'Customer Obsession'. Calculated risk-taking with low two-way door risks during high-stakes events protects sellers immediately while planning root-cause improvements post-peak.",
    "skillsAssessed": [
      "Bias for Action",
      "Deliver Results",
      "Operational Judgment"
    ],
    "sourceOrInspiration": "Amazon Leadership Principle Decision Matrix",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  },
  {
    "id": "msft-q1-string-compression",
    "companyId": "microsoft",
    "assessmentSetId": "msft-swe-oa",
    "roleLevel": "Graduate / SDE-1",
    "questionType": "coding",
    "title": "Clean String Token Compression with Escapes",
    "difficulty": "Medium",
    "estimatedTimeMinutes": 30,
    "marks": 30,
    "prompt": "Microsoft Office documents use a lightweight run-length compression format for serialized text spans.\n\nYou are given a string `s` containing lowercase English letters and an escape character `'#'`.\nCompress consecutive repeating characters into `char` followed by the run-length count only if the run length is **3 or greater**. If a character repeats only 1 or 2 times, keep it uncompressed.\nIf a literal `'#'` appears in the input, it is represented as `'##'`.\n\nReturn the compressed string.\n\n### Function Signature:\n```\ncompressDocumentSpan(s: str) -> str\n```",
    "constraints": [
      "1 <= s.length <= 10^5",
      "s contains only characters 'a'-'z' and '#'"
    ],
    "examples": [
      {
        "input": "s = \"aaabbbccccdde#\"",
        "output": "\"a3b3c4dde##\"",
        "explanation": "'a' repeats 3 times -> 'a3'. 'b' repeats 3 times -> 'b3'. 'c' repeats 4 times -> 'c4'. 'd' repeats 2 times (<3) -> 'dd'. 'e' repeats 1 time -> 'e'. '#' is escaped as '##'."
      }
    ],
    "starterCode": {
      "python": "def compressDocumentSpan(s: str) -> str:\n    # Write your solution here\n    pass\n",
      "javascript": "function compressDocumentSpan(s) {\n  // Write your solution here\n}\n",
      "cpp": "#include <string>\nusing namespace std;\nstring compressDocumentSpan(string s) {\n    // Write your solution here\n    return \"\";\n}\n"
    },
    "testCases": [
      {
        "id": "tc-1",
        "input": "s = 'aaabbbccccdde#'",
        "expectedOutput": "'a3b3c4dde##'",
        "isHidden": false
      },
      {
        "id": "tc-2",
        "input": "s = 'aaaaa'",
        "expectedOutput": "'a5'",
        "isHidden": false
      },
      {
        "id": "tc-3",
        "input": "s = '###'",
        "expectedOutput": "'######'",
        "isHidden": true
      }
    ],
    "explanation": "Iterate using a two-pointer / while loop grouping consecutive identical characters. Special case for '#' where each '#' produces '##' without run length encoding. For letters with count >= 3, append char + str(count); otherwise append char * count.",
    "expectedApproach": "Linear scan with count tracking. O(N) time and O(N) output string building.",
    "skillsAssessed": [
      "String Manipulation",
      "Boundary Handling",
      "Escape Processing"
    ],
    "sourceOrInspiration": "Microsoft Codility / Mettl String Manipulation Patterns",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  },
  {
    "id": "msft-q2-tree-boundary",
    "companyId": "microsoft",
    "assessmentSetId": "msft-swe-oa",
    "roleLevel": "Graduate / SDE-1",
    "questionType": "coding",
    "title": "Binary Tree Left-View Visibility Index",
    "difficulty": "Medium",
    "estimatedTimeMinutes": 25,
    "marks": 30,
    "prompt": "In Azure resource dependency mapping, trees represent microservice hierarchy. Given the level-order array representation of a binary tree `tree` (where `-1` denotes a null node), return the values of the nodes visible from the left side, ordered from top (root) to bottom.\n\n### Function Signature:\n```\nleftViewHierarchy(tree: List[int]) -> List[int]\n```",
    "constraints": [
      "0 <= tree.length <= 10^4",
      "-1 <= tree[i] <= 10^5"
    ],
    "examples": [
      {
        "input": "tree = [1, 2, 3, -1, 5, -1, 4]",
        "output": "[1, 2, 5]",
        "explanation": "Level 0: [1] -> visible 1. Level 1: [2, 3] -> visible 2. Level 2: [5, 4] (left child of 2 is null) -> visible 5."
      }
    ],
    "starterCode": {
      "python": "def leftViewHierarchy(tree: list[int]) -> list[int]:\n    # Write your solution here\n    pass\n",
      "javascript": "function leftViewHierarchy(tree) {\n  // Write your solution here\n}\n"
    },
    "testCases": [
      {
        "id": "tc-1",
        "input": "tree = [1, 2, 3, -1, 5, -1, 4]",
        "expectedOutput": "[1, 2, 5]",
        "isHidden": false
      },
      {
        "id": "tc-2",
        "input": "tree = []",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "explanation": "Convert array to binary tree or perform BFS level-order tracking. The first non-null node encountered at each depth level is added to the left-view list.",
    "expectedApproach": "Breadth-First Search (Queue) recording the first node of each depth level.",
    "skillsAssessed": [
      "Trees",
      "BFS Level-Order",
      "Queue"
    ],
    "sourceOrInspiration": "Microsoft Campus Recruitment Tree Questions",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  },
  {
    "id": "msft-q3-debug-binary-search",
    "companyId": "microsoft",
    "assessmentSetId": "msft-swe-oa",
    "roleLevel": "Graduate / SDE-1",
    "questionType": "debugging",
    "title": "Bug Fix: First Occurrence in Sorted Array with Duplicates",
    "difficulty": "Easy-Medium",
    "estimatedTimeMinutes": 10,
    "marks": 15,
    "prompt": "Review the following buggy implementation intended to find the **first (leftmost) occurrence** index of `target` in a non-decreasing sorted array `nums`. If not found, it must return `-1`.\n\n```python\ndef findFirstIndex(nums, target):\n    low = 0\n    high = len(nums) - 1\n    result = -1\n    while low <= high:\n        mid = (low + high) // 2\n        if nums[mid] == target:\n            result = mid\n            low = mid + 1      # <-- LINE X\n        elif nums[mid] < target:\n            low = mid + 1\n        else:\n            high = mid - 1\n    return result\n```\n\nIdentify the bug and the exact replacement needed for `LINE X`.",
    "objectiveOptions": [
      "Change line to: `return mid` to exit early.",
      "Change line to: `high = mid - 1` to continue searching in the left subarray.",
      "Change line to: `low = mid` to prevent out of bounds.",
      "Change line to: `high = mid` to preserve the current index."
    ],
    "correctAnswer": 1,
    "explanation": "When `nums[mid] == target`, setting `low = mid + 1` searches to the right, which mistakenly finds the LAST occurrence. To find the FIRST (leftmost) occurrence, we must store `result = mid` and move leftwards by setting `high = mid - 1`.",
    "skillsAssessed": [
      "Binary Search",
      "Off-by-One Debugging",
      "Algorithm Tracing"
    ],
    "sourceOrInspiration": "CompanyQ Debugging Suite",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  },
  {
    "id": "msft-q4-cs-os-virtual-memory",
    "companyId": "microsoft",
    "assessmentSetId": "msft-swe-oa",
    "roleLevel": "Graduate / SDE-1",
    "questionType": "mcq",
    "title": "Operating Systems: Virtual Memory & Page Faults",
    "difficulty": "Easy-Medium",
    "estimatedTimeMinutes": 7,
    "marks": 12,
    "prompt": "In an operating system using demand paging, what happens immediately when a CPU instruction references a virtual address whose valid/invalid bit in the page table is set to 'invalid' (0)?",
    "objectiveOptions": [
      "The program crashes immediately with a Segmentation Fault without OS intervention.",
      "A hardware trap (Page Fault Interrupt) is generated, causing context switch to the OS kernel page fault handler to fetch the frame from swap/disk into RAM.",
      "The CPU clears the TLB and restarts the machine.",
      "The operating system allocates virtual memory without accessing secondary storage."
    ],
    "correctAnswer": 1,
    "explanation": "An invalid bit triggers a hardware interrupt (Page Fault). The OS takes control via its page fault handler, finds an empty physical frame (or evicts via LRU/FIFO), loads the page from secondary storage/swap into RAM, updates the page table bit to valid, and restarts the trapped instruction.",
    "skillsAssessed": [
      "Virtual Memory",
      "Page Faults",
      "OS Internals"
    ],
    "sourceOrInspiration": "Microsoft Technical Interview Core CS Question Bank",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  },
  {
    "id": "msft-q5-cs-concurrency-deadlock",
    "companyId": "microsoft",
    "assessmentSetId": "msft-swe-oa",
    "roleLevel": "Graduate / SDE-1",
    "questionType": "msq",
    "title": "System Concurrency: Coffman Deadlock Conditions",
    "difficulty": "Medium",
    "estimatedTimeMinutes": 8,
    "marks": 13,
    "prompt": "Which of the following conditions are necessary for a system deadlock to occur? (Select all that apply according to the Coffman conditions)",
    "objectiveOptions": [
      "Mutual Exclusion: At least one resource must be held in a non-shareable mode.",
      "Hold and Wait: A process must be holding at least one resource and requesting additional resources held by others.",
      "No Preemption: Resources cannot be forcibly confiscated from a process holding them; they must be released voluntarily.",
      "Circular Wait: A closed chain of processes exists such that each process holds at least one resource that is needed by the next process in the chain.",
      "Starvation: At least one process has higher thread priority than all others."
    ],
    "correctAnswer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "The four Coffman conditions necessary and sufficient for deadlocks are: 1. Mutual Exclusion, 2. Hold and Wait, 3. No Preemption, 4. Circular Wait. Starvation is a related concurrency issue but NOT one of the 4 Coffman deadlock conditions.",
    "skillsAssessed": [
      "Operating Systems",
      "Concurrency",
      "Deadlock Theory"
    ],
    "sourceOrInspiration": "Standard Computer Science Fundamentals",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  },
  {
    "id": "atlassian-q1-rate-limiter",
    "companyId": "atlassian",
    "assessmentSetId": "atlassian-se-oa",
    "roleLevel": "Graduate / Early Career",
    "questionType": "coding",
    "title": "Jira API Sliding Window Rate Limiter",
    "difficulty": "Medium-Hard",
    "estimatedTimeMinutes": 35,
    "marks": 40,
    "prompt": "Atlassian's Cloud gateway protects Jira REST endpoints from abusive automation scripts. Design a sliding-window rate limiter for client requests.\n\nYou are given a configuration limit: a client may execute at most `maxRequests` within any moving window of `windowSeconds` duration.\n\nGiven an input array `events` where each element is `[timestamp_in_seconds, client_id]`, determine whether each request is `\"ALLOWED\"` or `\"BLOCKED\"`.\nReturn a list of strings corresponding to each event's verdict in input order.\n\n### Function Signature:\n```\nevaluateRateLimits(maxRequests: int, windowSeconds: int, events: List[Tuple[int, str]]) -> List[str]\n```",
    "constraints": [
      "1 <= maxRequests <= 1000",
      "1 <= windowSeconds <= 3600",
      "1 <= events.length <= 10^5",
      "Timestamps are in non-decreasing order (t1 <= t2 <= ...)"
    ],
    "examples": [
      {
        "input": "maxRequests = 2, windowSeconds = 5, events = [[1, \"dev_A\"], [2, \"dev_A\"], [3, \"dev_A\"], [7, \"dev_A\"]]",
        "output": "[\"ALLOWED\", \"ALLOWED\", \"BLOCKED\", \"ALLOWED\"]",
        "explanation": "At t=1: 1st req in [1-5+1..1] -> ALLOWED. At t=2: 2nd req -> ALLOWED. At t=3: 3rd req in window [ -1..3 ] -> BLOCKED. At t=7: window is [3..7], previous allowed was at t=1 (expired) and t=2 (expired), so count in window is 0 -> ALLOWED."
      }
    ],
    "starterCode": {
      "python": "from collections import deque, defaultdict\n\ndef evaluateRateLimits(maxRequests: int, windowSeconds: int, events: list[tuple[int, str]]) -> list[str]:\n    # Write your solution here\n    pass\n",
      "javascript": "function evaluateRateLimits(maxRequests, windowSeconds, events) {\n  // Write your solution here\n}\n"
    },
    "testCases": [
      {
        "id": "tc-1",
        "input": "maxRequests = 2, windowSeconds = 5, events = [[1, 'dev_A'], [2, 'dev_A'], [3, 'dev_A'], [7, 'dev_A']]",
        "expectedOutput": "['ALLOWED', 'ALLOWED', 'BLOCKED', 'ALLOWED']",
        "isHidden": false
      }
    ],
    "explanation": "Maintain a hash map of deques: `client_id -> deque of timestamps of ALLOWED requests`. For each event `[t, client]`, evict timestamps older than `t - windowSeconds + 1` from the front of that client's deque. If `len(deque) < maxRequests`, append `t` and mark ALLOWED; otherwise mark BLOCKED.",
    "expectedApproach": "HashMap of Deques (sliding window log). Amortized O(1) per request, O(N) total time.",
    "skillsAssessed": [
      "Data Structure Design",
      "Sliding Window",
      "Queue",
      "Amortized Analysis"
    ],
    "sourceOrInspiration": "Atlassian API Gateway Architecture Simulation",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  },
  {
    "id": "atlassian-q2-service-dependency-graph",
    "companyId": "atlassian",
    "assessmentSetId": "atlassian-se-oa",
    "roleLevel": "Graduate / Early Career",
    "questionType": "coding",
    "title": "Bitbucket CI/CD Pipeline Build Order & Cycle Detection",
    "difficulty": "Medium",
    "estimatedTimeMinutes": 30,
    "marks": 35,
    "prompt": "In Bitbucket Pipelines, a build graph has `numTasks` tasks labeled `0` to `numTasks - 1`. You are given a list of directed dependencies `dependencies` where `[u, v]` means task `v` must complete before task `u` can run (`v -> u`).\n\nDetermine if all tasks can be completed without a circular deadlock. If yes, return any valid topological task execution order as a list of integers. If a cycle exists, return an empty list `[]`.\n\n### Function Signature:\n```\nfindBuildOrder(numTasks: int, dependencies: List[List[int]]) -> List[int]\n```",
    "constraints": [
      "1 <= numTasks <= 2000",
      "0 <= dependencies.length <= 5000",
      "dependencies[i] has length 2 and consists of valid task indices"
    ],
    "examples": [
      {
        "input": "numTasks = 4, dependencies = [[1, 0], [2, 0], [3, 1], [3, 2]]",
        "output": "[0, 1, 2, 3]",
        "explanation": "Task 0 has no prerequisites. Tasks 1 and 2 depend on 0. Task 3 depends on both 1 and 2. [0, 2, 1, 3] is also valid."
      },
      {
        "input": "numTasks = 2, dependencies = [[1, 0], [0, 1]]",
        "output": "[]",
        "explanation": "Cyclic deadlock between task 0 and 1."
      }
    ],
    "starterCode": {
      "python": "def findBuildOrder(numTasks: int, dependencies: list[list[int]]) -> list[int]:\n    # Write your solution here\n    pass\n",
      "javascript": "function findBuildOrder(numTasks, dependencies) {\n  // Write your solution here\n}\n"
    },
    "testCases": [
      {
        "id": "tc-1",
        "input": "numTasks = 4, dependencies = [[1, 0], [2, 0], [3, 1], [3, 2]]",
        "expectedOutput": "[0, 1, 2, 3]",
        "isHidden": false
      },
      {
        "id": "tc-2",
        "input": "numTasks = 2, dependencies = [[1, 0], [0, 1]]",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "explanation": "Standard topological sort via Kahn's Algorithm (BFS with indegree array) or DFS with 3-color cycle detection. If the resulting topological order contains fewer than numTasks, a cycle was detected.",
    "expectedApproach": "Kahn's Algorithm using indegrees and BFS queue. Time Complexity: O(V + E).",
    "skillsAssessed": [
      "Graph Theory",
      "Topological Sort",
      "Cycle Detection"
    ],
    "sourceOrInspiration": "CompanyQ CI/CD Build Graph Suite",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  },
  {
    "id": "atlassian-q3-complexity-output-trace",
    "companyId": "atlassian",
    "assessmentSetId": "atlassian-se-oa",
    "roleLevel": "Graduate / Early Career",
    "questionType": "output-prediction",
    "title": "Code Tracing: Async Event Loop Execution Order",
    "difficulty": "Medium",
    "estimatedTimeMinutes": 8,
    "marks": 15,
    "prompt": "Consider the following JavaScript snippet executing in Node.js / Browser runtime:\n\n```javascript\nconsole.log('1');\n\nsetTimeout(() => {\n  console.log('2');\n  Promise.resolve().then(() => console.log('3'));\n}, 0);\n\nnew Promise((resolve) => {\n  console.log('4');\n  resolve();\n}).then(() => {\n  console.log('5');\n});\n\nconsole.log('6');\n```\n\nWhat is the exact sequence of numbers logged to the console?",
    "objectiveOptions": [
      "1, 4, 6, 5, 2, 3",
      "1, 6, 4, 5, 2, 3",
      "1, 4, 6, 2, 3, 5",
      "1, 2, 3, 4, 5, 6"
    ],
    "correctAnswer": 0,
    "explanation": "1. Synchronous code runs first: '1', inside new Promise constructor: '4', then '6'. 2. Microtask queue runs before macrotasks: the resolved promise logs '5'. 3. Macrotask queue runs setTimeout: logs '2', then immediately enqueues microtask '3' which runs before the next macrotask.",
    "skillsAssessed": [
      "Event Loop",
      "Microtasks vs Macrotasks",
      "Async JavaScript"
    ],
    "sourceOrInspiration": "Atlassian Web Platform Fundamentals",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  },
  {
    "id": "atlassian-q4-api-design-msq",
    "companyId": "atlassian",
    "assessmentSetId": "atlassian-se-oa",
    "roleLevel": "Graduate / Early Career",
    "questionType": "msq",
    "title": "REST API Idempotency & HTTP Semantics",
    "difficulty": "Easy-Medium",
    "estimatedTimeMinutes": 7,
    "marks": 10,
    "prompt": "Which of the following HTTP methods are defined as **idempotent** by the IETF RFC 9110 specification? (Select all that apply)",
    "objectiveOptions": [
      "GET",
      "PUT",
      "DELETE",
      "POST",
      "HEAD"
    ],
    "correctAnswer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "An HTTP method is idempotent if the intended effect on the server of multiple identical requests with that method is the same as for a single request. GET, HEAD, PUT, and DELETE are idempotent. POST is NOT idempotent because repeated requests create multiple resources.",
    "skillsAssessed": [
      "HTTP Protocol",
      "REST Architecture",
      "Idempotency"
    ],
    "sourceOrInspiration": "RFC 9110 HTTP Semantics",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  },
  {
    "id": "tcs-q1-prime-matrix-traversal",
    "companyId": "tcs",
    "assessmentSetId": "tcs-digital-oa",
    "roleLevel": "Campus Graduate / Digital Specialist",
    "questionType": "coding",
    "title": "Prime Coordinate Spiral Matrix Collection",
    "difficulty": "Medium",
    "estimatedTimeMinutes": 25,
    "marks": 30,
    "prompt": "In TCS Digital hiring, multi-step math and grid simulation is frequent.\n\nGiven an `R x C` matrix of positive integers, traverse the matrix in clock-wise spiral order starting from `(0, 0)`.\nCompute the sum of all elements along this traversal whose 1-based index in the spiral sequence is a prime number (i.e. elements at sequence position 2, 3, 5, 7, 11, ...).\n\n### Function Signature:\n```\nprimeSpiralSum(R: int, C: int, matrix: List[List[int]]) -> int\n```",
    "constraints": [
      "1 <= R, C <= 100",
      "1 <= matrix[i][j] <= 1000"
    ],
    "examples": [
      {
        "input": "R = 3, C = 3, matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]",
        "output": "24",
        "explanation": "Spiral traversal sequence: [1, 2, 3, 6, 9, 8, 7, 4, 5]. Total 9 items. Positions are 1-indexed: pos 2 is 2; pos 3 is 3; pos 5 is 9; pos 7 is 7. Sum = 2 + 3 + 9 + 7 = 21 (adjusting for exact prime positions)."
      }
    ],
    "starterCode": {
      "python": "def primeSpiralSum(R: int, C: int, matrix: list[list[int]]) -> int:\n    # Write your solution here\n    pass\n",
      "javascript": "function primeSpiralSum(R, C, matrix) {\n  // Write your solution here\n}\n"
    },
    "testCases": [
      {
        "id": "tc-1",
        "input": "R = 3, C = 3, matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]",
        "expectedOutput": "21",
        "isHidden": false
      }
    ],
    "explanation": "Perform spiral matrix traversal using top, bottom, left, right bounds. Maintain a 1-based position counter `pos`. Use a Sieve of Eratosthenes or helper function `isPrime(pos)`. If prime, add `val` to running total.",
    "expectedApproach": "Standard spiral matrix traversal with prime checking. O(R * C) time.",
    "skillsAssessed": [
      "Matrix Simulation",
      "Mathematics",
      "Boundary Conditions"
    ],
    "sourceOrInspiration": "TCS Digital / Infosys SP Simulation",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  },
  {
    "id": "tcs-q2-knapsack-variant",
    "companyId": "tcs",
    "assessmentSetId": "tcs-digital-oa",
    "roleLevel": "Campus Graduate / Digital Specialist",
    "questionType": "coding",
    "title": "Optimal Server Bandwidth Allocation (Bounded Knapsack)",
    "difficulty": "Medium",
    "estimatedTimeMinutes": 25,
    "marks": 30,
    "prompt": "An enterprise cloud infrastructure has a total bandwidth capacity of `W` Gbps. There are `n` client applications. Each application `i` consumes `weights[i]` Gbps and generates `profits[i]` value. You can select each application at most once.\n\nDetermine the maximum profit obtainable without exceeding total capacity `W`.\n\n### Function Signature:\n```\nmaxBandwidthProfit(n: int, W: int, weights: List[int], profits: List[int]) -> int\n```",
    "constraints": [
      "1 <= n <= 1000",
      "1 <= W <= 2000",
      "1 <= weights[i] <= W",
      "1 <= profits[i] <= 10^5"
    ],
    "examples": [
      {
        "input": "n = 3, W = 50, weights = [10, 20, 30], profits = [60, 100, 120]",
        "output": "220",
        "explanation": "Pick items 1 and 2 (weights 20 + 30 = 50, profits 100 + 120 = 220)."
      }
    ],
    "starterCode": {
      "python": "def maxBandwidthProfit(n: int, W: int, weights: list[int], profits: list[int]) -> int:\n    # Write your solution here\n    pass\n",
      "javascript": "function maxBandwidthProfit(n, W, weights, profits) {\n  // Write your solution here\n}\n"
    },
    "testCases": [
      {
        "id": "tc-1",
        "input": "n = 3, W = 50, weights = [10, 20, 30], profits = [60, 100, 120]",
        "expectedOutput": "220",
        "isHidden": false
      }
    ],
    "explanation": "Classic 0/1 Knapsack with 1D DP array optimization running backwards from W down to weights[i]. Time Complexity: O(n * W), Space: O(W).",
    "expectedApproach": "Bottom-up 1D Dynamic Programming.",
    "skillsAssessed": [
      "Dynamic Programming",
      "Knapsack",
      "Optimization"
    ],
    "sourceOrInspiration": "Infosys Specialist Programmer DP Bank",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  },
  {
    "id": "tcs-q3-c-pointer-output-trace",
    "companyId": "tcs",
    "assessmentSetId": "tcs-digital-oa",
    "roleLevel": "Campus Graduate / Digital Specialist",
    "questionType": "output-prediction",
    "title": "C Pointer Arithmetic & Precedence",
    "difficulty": "Easy-Medium",
    "estimatedTimeMinutes": 6,
    "marks": 10,
    "prompt": "What is the output of the following C code segment?\n\n```c\n#include <stdio.h>\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int *ptr = arr;\n    printf(\"%d, \", *ptr++);\n    printf(\"%d, \", *++ptr);\n    printf(\"%d\", ++*ptr);\n    return 0;\n}\n```",
    "objectiveOptions": [
      "10, 30, 31",
      "10, 20, 21",
      "20, 30, 30",
      "10, 30, 40"
    ],
    "correctAnswer": 0,
    "explanation": "1. `*ptr++`: Post-increment increments pointer after dereferencing. Prints `10`, pointer now points to `arr[1]` (20). 2. `*++ptr`: Pre-increment moves pointer to `arr[2]` (30) before dereferencing. Prints `30`. 3. `++*ptr`: Pre-increments the value at `ptr` (`arr[2] = 30 + 1 = 31`). Prints `31`.",
    "skillsAssessed": [
      "C Language",
      "Pointers",
      "Operator Precedence"
    ],
    "sourceOrInspiration": "Campus Recruitment C Output Suite",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  },
  {
    "id": "tcs-q4-sql-subquery-mcq",
    "companyId": "tcs",
    "assessmentSetId": "tcs-digital-oa",
    "roleLevel": "Campus Graduate / Digital Specialist",
    "questionType": "mcq",
    "title": "Database Management: Second Highest Salary Query",
    "difficulty": "Easy",
    "estimatedTimeMinutes": 6,
    "marks": 10,
    "prompt": "Which of the following SQL statements correctly and portably retrieves the 2nd highest distinct salary from the `Employee` table without risking an empty set error if duplicates exist?",
    "objectiveOptions": [
      "SELECT DISTINCT Salary FROM Employee ORDER BY Salary DESC LIMIT 1 OFFSET 1;",
      "SELECT MAX(Salary) FROM Employee WHERE Salary NOT IN (SELECT MAX(Salary) FROM Employee);",
      "SELECT Salary FROM Employee WHERE RowNum = 2;",
      "Both (A) and (B) correctly find the 2nd distinct highest salary."
    ],
    "correctAnswer": 3,
    "explanation": "Both approaches are valid: LIMIT 1 OFFSET 1 with DISTINCT is standard in MySQL/PostgreSQL/SQLite, while `MAX(Salary) < (SELECT MAX(Salary))` is ANSI SQL compliant across Oracle and SQL Server.",
    "skillsAssessed": [
      "SQL",
      "Relational Databases",
      "Aggregation"
    ],
    "sourceOrInspiration": "Campus Technical Interview Essentials",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  },
  {
    "id": "tcs-q5-quant-probability-aptitude",
    "companyId": "tcs",
    "assessmentSetId": "tcs-digital-oa",
    "roleLevel": "Campus Graduate / Digital Specialist",
    "questionType": "mcq",
    "title": "Quantitative Aptitude: Conditional Probability",
    "difficulty": "Medium",
    "estimatedTimeMinutes": 7,
    "marks": 10,
    "prompt": "A software company has two server clusters: Cluster A handles 60% of all user requests with an error rate of 1%, while Cluster B handles 40% with an error rate of 3%. If an incoming error log is sampled at random, what is the probability that it originated from Cluster B?",
    "objectiveOptions": [
      "0.400 (40.0%)",
      "0.667 (66.7%)",
      "0.500 (50.0%)",
      "0.333 (33.3%)"
    ],
    "correctAnswer": 1,
    "explanation": "Use Bayes' Theorem: P(Error) = P(A)*P(Err|A) + P(B)*P(Err|B) = (0.60 * 0.01) + (0.40 * 0.03) = 0.006 + 0.012 = 0.018. Then P(B|Error) = (0.40 * 0.03) / 0.018 = 0.012 / 0.018 = 2/3 = 66.7%.",
    "skillsAssessed": [
      "Probability",
      "Bayes Theorem",
      "Quantitative Aptitude"
    ],
    "sourceOrInspiration": "Standard Campus Recruitment Quantitative Aptitude",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  },
  {
    "id": "tcs-q6-logic-series-aptitude",
    "companyId": "tcs",
    "assessmentSetId": "tcs-digital-oa",
    "roleLevel": "Campus Graduate / Digital Specialist",
    "questionType": "mcq",
    "title": "Logical Reasoning: Number & Alphanumeric Series",
    "difficulty": "Easy",
    "estimatedTimeMinutes": 5,
    "marks": 10,
    "prompt": "Find the missing number in the sequence: `3, 10, 29, 66, 127, ?`",
    "objectiveOptions": [
      "218",
      "216",
      "222",
      "245"
    ],
    "correctAnswer": 0,
    "explanation": "Notice pattern: 1^3 + 2 = 3; 2^3 + 2 = 10; 3^3 + 2 = 29; 4^3 + 2 = 66; 5^3 + 2 = 127; 6^3 + 2 = 216 + 2 = 218.",
    "skillsAssessed": [
      "Logical Reasoning",
      "Number Series",
      "Pattern Recognition"
    ],
    "sourceOrInspiration": "Campus Recruitment Aptitude Bank",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  },
  {
    "id": "fintech-q1-ledger-reconciliation",
    "companyId": "razorpay",
    "assessmentSetId": "fintech-startup-oa",
    "roleLevel": "SDE-1 / Backend Engineer",
    "questionType": "coding",
    "title": "Double-Entry Transaction Ledger Balance Reconciliation",
    "difficulty": "Medium",
    "estimatedTimeMinutes": 30,
    "marks": 40,
    "prompt": "In a fintech payment gateway like Razorpay or PhonePe, every monetary transaction must obey double-entry bookkeeping: the sum of credits must strictly equal the sum of debits.\n\nYou are given a list of journal entries `entries` where each entry is `[journal_id, account_id, entry_type, amount_in_cents]`.\n`entry_type` is either `\"DEBIT\"` or `\"CREDIT\"`.\n\nA journal is considered **valid** if:\n1. It has at least 2 entries.\n2. The total sum of DEBIT amounts equals the total sum of CREDIT amounts.\n\nReturn a sorted list of unique `journal_id`s that are **invalid (unbalanced or incomplete)**.\n\n### Function Signature:\n```\nfindInvalidJournals(entries: List[List[str]]) -> List[str]\n```",
    "constraints": [
      "1 <= entries.length <= 10^5",
      "amount_in_cents is a positive integer as string (e.g. \"5000\")"
    ],
    "examples": [
      {
        "input": "entries = [[\"J1\", \"acc_1\", \"DEBIT\", \"100\"], [\"J1\", \"acc_2\", \"CREDIT\", \"100\"], [\"J2\", \"acc_1\", \"DEBIT\", \"250\"]]",
        "output": "[\"J2\"]",
        "explanation": "J1 has 100 debit and 100 credit (balanced). J2 has only 1 entry with 250 debit (unbalanced)."
      }
    ],
    "starterCode": {
      "python": "def findInvalidJournals(entries: list[list[str]]) -> list[str]:\n    # Write your solution here\n    pass\n",
      "javascript": "function findInvalidJournals(entries) {\n  // Write your solution here\n}\n"
    },
    "testCases": [
      {
        "id": "tc-1",
        "input": "entries = [['J1', 'acc_1', 'DEBIT', '100'], ['J1', 'acc_2', 'CREDIT', '100'], ['J2', 'acc_1', 'DEBIT', '250']]",
        "expectedOutput": "['J2']",
        "isHidden": false
      }
    ],
    "explanation": "Group entries by journal_id. For each journal, track count of entries, debitSum, and creditSum. If count < 2 or debitSum != creditSum, flag the journal as invalid. Sort and return invalid IDs.",
    "expectedApproach": "Hash Map aggregation followed by verification loop. O(N log N) for final sorting.",
    "skillsAssessed": [
      "Fintech Logic",
      "Double-Entry Accounting",
      "Hash Map Aggregation"
    ],
    "sourceOrInspiration": "Razorpay / Stripe Engineering Screen Simulation",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  },
  {
    "id": "fintech-q2-sliding-window-fraud-detector",
    "companyId": "razorpay",
    "assessmentSetId": "fintech-startup-oa",
    "roleLevel": "SDE-1 / Backend Engineer",
    "questionType": "coding",
    "title": "Real-Time Rapid Transaction Velocity Anomaly Detector",
    "difficulty": "Medium",
    "estimatedTimeMinutes": 25,
    "marks": 30,
    "prompt": "A payment gateway flags an account for suspicious velocity if an account initiates **3 or more transactions within any 60-second window**.\n\nGiven an array of transactions `transactions` where each element is `[account_id, timestamp_seconds]`, return a sorted list of unique `account_id`s that triggered the anomaly flag.\n\n### Function Signature:\n```\nflagVelocityAnomalies(transactions: List[List[str]]) -> List[str]\n```",
    "constraints": [
      "1 <= transactions.length <= 10^5",
      "timestamp_seconds is a positive integer as string"
    ],
    "examples": [
      {
        "input": "transactions = [[\"user_A\", \"10\"], [\"user_B\", \"20\"], [\"user_A\", \"30\"], [\"user_A\", \"50\"]]",
        "output": "[\"user_A\"]",
        "explanation": "user_A made transactions at t=10, t=30, t=50. The difference between 3rd and 1st is 50 - 10 = 40 <= 60 seconds (3 transactions in 40s). Triggered!"
      }
    ],
    "starterCode": {
      "python": "def flagVelocityAnomalies(transactions: list[list[str]]) -> list[str]:\n    # Write your solution here\n    pass\n",
      "javascript": "function flagVelocityAnomalies(transactions) {\n  // Write your solution here\n}\n"
    },
    "testCases": [
      {
        "id": "tc-1",
        "input": "transactions = [['user_A', '10'], ['user_B', '20'], ['user_A', '30'], ['user_A', '50']]",
        "expectedOutput": "['user_A']",
        "isHidden": false
      }
    ],
    "explanation": "Group timestamps by account_id and sort them. For each account with >= 3 timestamps, check if `timestamps[i] - timestamps[i - 2] <= 60`. If true, record account_id in a set.",
    "expectedApproach": "HashMap grouping + sorting per account + sliding window comparison.",
    "skillsAssessed": [
      "Fraud Detection",
      "Sliding Window",
      "Data Processing"
    ],
    "sourceOrInspiration": "CompanyQ Fintech Risk Engine Suite",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  },
  {
    "id": "fintech-q3-db-isolation-levels-msq",
    "companyId": "razorpay",
    "assessmentSetId": "fintech-startup-oa",
    "roleLevel": "SDE-1 / Backend Engineer",
    "questionType": "msq",
    "title": "Database Transactions: ACID Anomalies & Isolation Levels",
    "difficulty": "Medium",
    "estimatedTimeMinutes": 10,
    "marks": 15,
    "prompt": "Under the SQL standard, which anomalies are prevented by the **REPEATABLE READ** transaction isolation level? (Select all that apply)",
    "objectiveOptions": [
      "Dirty Read (reading uncommitted changes from another concurrent transaction)",
      "Non-Repeatable Read (rereading the same row produces different data due to committed update)",
      "Lost Update (two concurrent transactions overwrite each other's updates without locking)",
      "Phantom Read in strict ANSI SQL-92 specification"
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "According to the ANSI SQL-92 standard, REPEATABLE READ prevents Dirty Read and Non-Repeatable Read (and Lost Updates). Phantom Reads are only strictly prohibited at the SERIALIZABLE isolation level (though InnoDB in MySQL uses Next-Key locks to prevent phantom reads in practice).",
    "skillsAssessed": [
      "DBMS",
      "Transaction Isolation Levels",
      "ACID"
    ],
    "sourceOrInspiration": "PostgreSQL & MySQL Transaction Docs",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  },
  {
    "id": "fintech-q4-debug-concurrency-race",
    "companyId": "razorpay",
    "assessmentSetId": "fintech-startup-oa",
    "roleLevel": "SDE-1 / Backend Engineer",
    "questionType": "debugging",
    "title": "Concurrency Bug Fix: Double Spending Race Condition",
    "difficulty": "Medium",
    "estimatedTimeMinutes": 10,
    "marks": 15,
    "prompt": "Consider this simplified payment withdrawal service vulnerable to double-spending under concurrent requests:\n\n```python\ndef withdraw_funds(account_id, amount):\n    # Step 1: Read current balance\n    balance = db.query(\"SELECT balance FROM accounts WHERE id = %s\", account_id)\n    \n    if balance >= amount:\n        new_balance = balance - amount\n        # Step 2: Write back updated balance\n        db.execute(\"UPDATE accounts SET balance = %s WHERE id = %s\", (new_balance, account_id))\n        return True\n    return False\n```\n\nHow should this query be restructured to eliminate the check-then-act race condition safely within a relational database?",
    "objectiveOptions": [
      "Add a sleep(0.1) call between Step 1 and Step 2.",
      "Use pessimistic row locking in Step 1 (`SELECT balance FROM accounts WHERE id = %s FOR UPDATE`) or atomic conditional update (`UPDATE accounts SET balance = balance - %s WHERE id = %s AND balance >= %s`).",
      "Store balance in an in-memory Python variable instead of the database.",
      "Convert the database column from integer to floating point."
    ],
    "correctAnswer": 1,
    "explanation": "Check-then-act race conditions must be resolved either via pessimistic locking (`SELECT ... FOR UPDATE` locks the row inside an active transaction) or atomic compare-and-swap SQL updates (`UPDATE ... SET balance = balance - amount WHERE id = ... AND balance >= amount`).",
    "skillsAssessed": [
      "Concurrency",
      "Race Conditions",
      "Database Locking"
    ],
    "sourceOrInspiration": "Fintech Backend Concurrency Patterns",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  },
  {
    "id": "goog-q1-shortest-path-fuel-constraint",
    "companyId": "google",
    "assessmentSetId": "google-swe-oa",
    "roleLevel": "Software Engineer (L3 / Early Career)",
    "questionType": "coding",
    "title": "Autonomous Vehicle Shortest Path with Recharge Constraints",
    "difficulty": "Hard",
    "estimatedTimeMinutes": 45,
    "marks": 50,
    "prompt": "A Google autonomous test vehicle operates in a city network of `n` intersections labeled `0` to `n - 1`. The vehicle has a maximum battery capacity of `maxCapacity` units.\n\nYou are given a weighted graph of roads where `roads[i] = [u, v, travel_time, battery_cost]`.\nCertain intersections have fast chargers where the battery instantly refills to `maxCapacity` for a fixed delay of `chargeDelay` minutes (given in array `chargers`).\n\nStarting from node `0` with a full battery (`maxCapacity`), find the minimum travel time to reach destination node `n - 1`. If destination cannot be reached without depleting battery to negative, return -1.\n\n### Function Signature:\n```\nminTravelTime(n: int, maxCapacity: int, roads: List[List[int]], chargers: List[int], chargeDelay: int) -> int\n```",
    "constraints": [
      "2 <= n <= 1000",
      "1 <= maxCapacity <= 100",
      "1 <= roads.length <= 5000",
      "travel_time >= 1, battery_cost >= 1"
    ],
    "examples": [
      {
        "input": "n = 3, maxCapacity = 10, roads = [[0, 1, 5, 8], [1, 2, 5, 8]], chargers = [1], chargeDelay = 4",
        "output": "14",
        "explanation": "From 0 to 1 takes 5 mins, uses 8 battery (2 remaining). 2 < 8 battery needed for next leg, so car charges at node 1 (takes 4 mins delay, battery restored to 10). Next leg takes 5 mins. Total time = 5 + 4 + 5 = 14 mins."
      }
    ],
    "starterCode": {
      "python": "import heapq\n\ndef minTravelTime(n: int, maxCapacity: int, roads: list[list[int]], chargers: list[int], chargeDelay: int) -> int:\n    # Write your solution here\n    pass\n",
      "javascript": "function minTravelTime(n, maxCapacity, roads, chargers, chargeDelay) {\n  // Write your solution here\n}\n"
    },
    "testCases": [
      {
        "id": "tc-1",
        "input": "n = 3, maxCapacity = 10, roads = [[0, 1, 5, 8], [1, 2, 5, 8]], chargers = [1], chargeDelay = 4",
        "expectedOutput": "14",
        "isHidden": false
      }
    ],
    "explanation": "State-expanded Dijkstra: Represent each state as `(current_time, node, current_battery)`. Use a 2D distance table `dist[node][battery]`. If node is a charging station, branch to state `(time + chargeDelay, node, maxCapacity)`. Extract shortest distance to `(n-1, any_battery)`.",
    "expectedApproach": "Dijkstra's Algorithm on an augmented state space `(node, battery)`. O((V * C + E * C) log(V * C)).",
    "skillsAssessed": [
      "State-Space Dijkstra",
      "Shortest Path",
      "Priority Queue",
      "Graph Theory"
    ],
    "sourceOrInspiration": "Google Online Challenge (GOC) Graph Problems",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  },
  {
    "id": "goog-q2-max-independent-tasks-dp",
    "companyId": "google",
    "assessmentSetId": "google-swe-oa",
    "roleLevel": "Software Engineer (L3 / Early Career)",
    "questionType": "coding",
    "title": "Borg Cluster Weighted Non-Overlapping Job Scheduling",
    "difficulty": "Medium-Hard",
    "estimatedTimeMinutes": 35,
    "marks": 35,
    "prompt": "Google's Borg cluster scheduler receives `n` computational jobs. Each job `i` has a start time `startTime[i]`, an end time `endTime[i]`, and a computational reward `reward[i]`.\n\nTwo jobs cannot run concurrently if their time intervals overlap (a job ending at time `t` can be followed immediately by a job starting at `t`).\n\nFind the maximum total reward that can be achieved by scheduling a non-conflicting subset of jobs.\n\n### Function Signature:\n```\njobScheduling(startTime: List[int], endTime: List[int], reward: List[int]) -> int\n```",
    "constraints": [
      "1 <= n <= 5 * 10^4",
      "1 <= startTime[i] < endTime[i] <= 10^9",
      "1 <= reward[i] <= 10^4"
    ],
    "examples": [
      {
        "input": "startTime = [1, 2, 3, 3], endTime = [3, 4, 5, 6], reward = [50, 10, 40, 70]",
        "output": "120",
        "explanation": "Schedule job 0 [1, 3] (reward 50) and job 3 [3, 6] (reward 70). Total reward = 50 + 70 = 120."
      }
    ],
    "starterCode": {
      "python": "import bisect\n\ndef jobScheduling(startTime: list[int], endTime: list[int], reward: list[int]) -> int:\n    # Write your solution here\n    pass\n",
      "javascript": "function jobScheduling(startTime, endTime, reward) {\n  // Write your solution here\n}\n"
    },
    "testCases": [
      {
        "id": "tc-1",
        "input": "startTime = [1, 2, 3, 3], endTime = [3, 4, 5, 6], reward = [50, 10, 40, 70]",
        "expectedOutput": "120",
        "isHidden": false
      }
    ],
    "explanation": "Sort jobs by end time. Define `dp[i]` as max reward considering the first `i` jobs. For each job, binary search the latest job `k` whose `endTime[k] <= startTime[i]`. `dp[i] = max(dp[i - 1], reward[i] + dp[k])`. Time Complexity: O(N log N).",
    "expectedApproach": "Dynamic Programming with Binary Search (bisect_right).",
    "skillsAssessed": [
      "Dynamic Programming",
      "Binary Search",
      "Interval Scheduling"
    ],
    "sourceOrInspiration": "Classic Google Borg Scheduling Problem",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  },
  {
    "id": "goog-q3-bitwise-combinatorics-trace",
    "companyId": "google",
    "assessmentSetId": "google-swe-oa",
    "roleLevel": "Software Engineer (L3 / Early Career)",
    "questionType": "output-prediction",
    "title": "Bitwise Kernighan Algorithm Output Analysis",
    "difficulty": "Easy-Medium",
    "estimatedTimeMinutes": 5,
    "marks": 15,
    "prompt": "Consider the following function implementing Brian Kernighan's bit manipulation pattern:\n\n```python\ndef mystery(n):\n    count = 0\n    while n > 0:\n        n = n & (n - 1)\n        count += 1\n    return count\n\nprint(mystery(43))\n```\n\nWhat value is printed?",
    "objectiveOptions": [
      "4",
      "5",
      "6",
      "3"
    ],
    "correctAnswer": 0,
    "explanation": "The operation `n & (n - 1)` clears the lowest set bit in `n`. The loop runs exactly as many times as there are set bits (1s) in the binary representation. 43 in binary is `101011` (32 + 8 + 2 + 1), which has four 1-bits. The answer is 4.",
    "skillsAssessed": [
      "Bit Manipulation",
      "Kernighan Algorithm",
      "Binary Representation"
    ],
    "sourceOrInspiration": "Google Technical Screen Bitwise Questions",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  },
  {
    "id": "amz-q5-lru-cache",
    "companyId": "amazon",
    "assessmentSetId": "amazon-sde-oa",
    "roleLevel": "SDE-1 / Intern",
    "questionType": "coding",
    "title": "Design In-Memory Key-Value Cache with TTL Expiry",
    "difficulty": "Medium-Hard",
    "estimatedTimeMinutes": 30,
    "marks": 35,
    "prompt": "Design a local in-memory cache that stores key-value pairs with individual Time-To-Live (TTL) timestamps in seconds.\nImplement two operations:\n1. `set(key: str, value: int, ttl: int, current_time: int) -> None`: Inserts or updates `key` with `value` expiring at `current_time + ttl`.\n2. `get(key: str, current_time: int) -> int`: Returns the value of `key` if it exists and has not expired (`current_time < expiration_time`). If expired or absent, returns `-1`.\n\n### Function Signature:\nImplement class `TTLCache` with `__init__`, `set`, and `get` methods.",
    "constraints": [
      "1 <= total operations <= 5 * 10^4",
      "1 <= ttl <= 10^6",
      "current_time strictly increases across sequential calls"
    ],
    "examples": [
      {
        "input": "cache.set('item1', 100, ttl=5, t=1); cache.get('item1', t=4); cache.get('item1', t=7)",
        "output": "[100, -1]",
        "explanation": "At t=4, expires at 1+5=6 > 4 -> returns 100. At t=7, 6 <= 7 (expired) -> returns -1."
      }
    ],
    "starterCode": {
      "python": "class TTLCache:\n    def __init__(self):\n        self.store = {}\n\n    def set(self, key: str, value: int, ttl: int, current_time: int) -> None:\n        # Write code here\n        pass\n\n    def get(self, key: str, current_time: int) -> int:\n        # Write code here\n        return -1\n",
      "javascript": "class TTLCache {\n  constructor() {\n    this.store = new Map();\n  }\n  set(key, value, ttl, currentTime) {}\n  get(key, currentTime) { return -1; }\n}\n"
    },
    "testCases": [
      {
        "id": "tc-1",
        "input": "set('k', 10, 5, 0), get('k', 2), get('k', 6)",
        "expectedOutput": "[10, -1]",
        "isHidden": false
      }
    ],
    "explanation": "Store `store[key] = (value, current_time + ttl)`. On `get(key, current_time)`, lookup key in map; if exists and `current_time < expire_time`, return value, otherwise delete key (lazy eviction) and return -1. O(1) operations.",
    "expectedApproach": "HashMap with lazy expiration on access.",
    "skillsAssessed": [
      "Cache Architecture",
      "Hash Tables",
      "TTL Invalidation"
    ],
    "sourceOrInspiration": "AWS ElastiCache Architecture Simulation",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  },
  {
    "id": "meta-q1-valid-ip-trie",
    "companyId": "meta",
    "assessmentSetId": "google-swe-oa",
    "roleLevel": "Early Career",
    "questionType": "coding",
    "title": "CIDR Subnet IP Matcher via Binary Trie",
    "difficulty": "Hard",
    "estimatedTimeMinutes": 35,
    "marks": 35,
    "prompt": "Given a list of firewall CIDR block rules (e.g. `\"192.168.1.0/24\"`), determine whether a target IPv4 address matches any of the rules.\nAn IPv4 address contains four 8-bit octets separated by dots. In CIDR notation `/k`, the first `k` bits represent the network prefix.\n\nReturn `True` if `target_ip` is covered by at least one rule, otherwise `False`.\n\n### Function Signature:\n```\nmatchesFirewall(rules: List[str], target_ip: str) -> bool\n```",
    "constraints": [
      "1 <= rules.length <= 10^4",
      "Valid IPv4 and CIDR strings"
    ],
    "examples": [
      {
        "input": "rules = [\"10.0.0.0/8\", \"192.168.0.0/16\"], target_ip = \"192.168.4.15\"",
        "output": "True",
        "explanation": "192.168.4.15 shares the first 16 bits with 192.168.0.0."
      }
    ],
    "starterCode": {
      "python": "def matchesFirewall(rules: list[str], target_ip: str) -> bool:\n    # Write your solution here\n    pass\n",
      "javascript": "function matchesFirewall(rules, target_ip) {\n  // Write your solution here\n}\n"
    },
    "testCases": [
      {
        "id": "tc-1",
        "input": "rules = ['10.0.0.0/8', '192.168.0.0/16'], target_ip = '192.168.4.15'",
        "expectedOutput": "True",
        "isHidden": false
      }
    ],
    "explanation": "Convert each 4-octet IP to a 32-bit integer. For rule `ip/k`, take the top `k` bits as prefix. Insert prefixes into a binary Trie (where each node has 0 or 1 branches). Walk the trie with the target IP's 32-bit binary representation. O(32) = O(1) query time.",
    "expectedApproach": "Binary Trie of 32-bit integers or Bitmask matching.",
    "skillsAssessed": [
      "Bit Manipulation",
      "Trie",
      "Networking Protocols"
    ],
    "sourceOrInspiration": "Meta / Cloudflare Infrastructure Screen",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  },
  {
    "id": "apple-q1-endianness-trace",
    "companyId": "apple",
    "assessmentSetId": "msft-swe-oa",
    "roleLevel": "Graduate / SDE-1",
    "questionType": "output-prediction",
    "title": "Low-Level C: Memory Layout & Little-Endian Byte Order",
    "difficulty": "Medium",
    "estimatedTimeMinutes": 7,
    "marks": 12,
    "prompt": "Consider the following C program running on a standard 64-bit Little-Endian x86-64 machine:\n\n```c\n#include <stdio.h>\nint main() {\n    unsigned int x = 0x12345678;\n    unsigned char *ptr = (unsigned char *)&x;\n    printf(\"0x%02x\", *ptr);\n    return 0;\n}\n```\n\nWhat is printed to the standard output?",
    "objectiveOptions": [
      "0x78",
      "0x12",
      "0x34",
      "0x56"
    ],
    "correctAnswer": 0,
    "explanation": "In a Little-Endian architecture, the least significant byte (LSB) is stored at the lowest memory address. In `0x12345678`, the LSB is `0x78`. When casting `&x` to `unsigned char *`, `*ptr` accesses the byte at the lowest address, which holds `0x78`.",
    "skillsAssessed": [
      "Computer Architecture",
      "Endianness",
      "Memory Addressing",
      "C Pointers"
    ],
    "sourceOrInspiration": "Apple / Qualcomm Embedded Systems Screening",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  },
  {
    "id": "uber-q1-matrix-rider-dispatch",
    "companyId": "uber",
    "assessmentSetId": "fintech-startup-oa",
    "roleLevel": "SDE-1",
    "questionType": "coding",
    "title": "Manhattan Grid Driver-Rider Nearest Matching",
    "difficulty": "Medium",
    "estimatedTimeMinutes": 25,
    "marks": 30,
    "prompt": "In a city grid, driver locations are given as `drivers` (`[[x1, y1], [x2, y2], ...]`) and a rider request is at `rider = [rx, ry]`.\nThe travel distance between points `(x1, y1)` and `(x2, y2)` is the Manhattan distance: `|x1 - x2| + |y1 - y2|`.\n\nFind the index of the closest driver to the rider. If there is a tie, return the driver with the smallest index.\n\n### Function Signature:\n```\nfindNearestDriver(drivers: List[List[int]], rider: List[int]) -> int\n```",
    "constraints": [
      "1 <= drivers.length <= 10^5",
      "-10^6 <= x, y <= 10^6"
    ],
    "examples": [
      {
        "input": "drivers = [[1, 2], [3, 8], [2, 3]], rider = [2, 2]",
        "output": "0",
        "explanation": "Driver 0 dist: |1-2| + |2-2| = 1. Driver 1 dist: |3-2| + |8-2| = 7. Driver 2 dist: |2-2| + |3-2| = 1. Tie between 0 and 2; return smallest index 0."
      }
    ],
    "starterCode": {
      "python": "def findNearestDriver(drivers: list[list[int]], rider: list[int]) -> int:\n    # Write your solution here\n    pass\n",
      "javascript": "function findNearestDriver(drivers, rider) {\n  // Write your solution here\n}\n"
    },
    "testCases": [
      {
        "id": "tc-1",
        "input": "drivers = [[1, 2], [3, 8], [2, 3]], rider = [2, 2]",
        "expectedOutput": "0",
        "isHidden": false
      }
    ],
    "explanation": "Iterate through the array computing Manhattan distance `abs(d[0] - rider[0]) + abs(d[1] - rider[1])`. Keep track of `min_dist` and `best_idx`. O(N) time and O(1) space.",
    "expectedApproach": "Single pass minimum tracking.",
    "skillsAssessed": [
      "Simulation",
      "Geometry",
      "Array Processing"
    ],
    "sourceOrInspiration": "Uber Mobility Matching Simulation",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  },
  {
    "id": "campus-q1-pseudocode-loop",
    "companyId": "cognizant",
    "assessmentSetId": "tcs-digital-oa",
    "roleLevel": "Campus Graduate",
    "questionType": "output-prediction",
    "title": "Pseudocode Analysis: Nested Loop Iteration Count",
    "difficulty": "Easy-Medium",
    "estimatedTimeMinutes": 6,
    "marks": 10,
    "prompt": "Examine the following pseudocode algorithm:\n\n```text\nInteger a, b, c, count\nSet count = 0\nFor a = 1 to 4\n    For b = 1 to a\n        For c = b to 3\n            count = count + 1\n        End For\n    End For\nEnd For\nPrint count\n```\n\nWhat is the final value of `count` printed?",
    "objectiveOptions": [
      "18",
      "20",
      "14",
      "16"
    ],
    "correctAnswer": 1,
    "explanation": "Evaluate per value of `a`:\n- a=1: b=1 -> c runs 1..3 (3 times). Total = 3.\n- a=2: b=1 (c: 1..3 -> 3 times), b=2 (c: 2..3 -> 2 times). Total = 3 + 2 = 5.\n- a=3: b=1 (3), b=2 (2), b=3 (c: 3..3 -> 1 time). Total = 3 + 2 + 1 = 6.\n- a=4: b=1 (3), b=2 (2), b=3 (1), b=4 (c: 4 to 3 -> 0 times). Total = 3 + 2 + 1 + 0 = 6.\nGrand Total = 3 + 5 + 6 + 6 = 20.",
    "skillsAssessed": [
      "Pseudocode",
      "Loop Tracing",
      "Campus Aptitude"
    ],
    "sourceOrInspiration": "Cognizant / Accenture Pseudocode Assessment",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  },
  {
    "id": "campus-q2-tcp-udp-msq",
    "companyId": "cisco",
    "assessmentSetId": "msft-swe-oa",
    "roleLevel": "Graduate / SDE-1",
    "questionType": "msq",
    "title": "Computer Networks: TCP vs UDP Transport Layer Features",
    "difficulty": "Easy-Medium",
    "estimatedTimeMinutes": 7,
    "marks": 10,
    "prompt": "Which of the following attributes apply to the **Transmission Control Protocol (TCP)** but NOT to the User Datagram Protocol (UDP)? (Select all that apply)",
    "objectiveOptions": [
      "Guaranteed in-order byte stream delivery via sequence numbers and acknowledgments",
      "Built-in Congestion Control algorithms (e.g. Slow Start, Congestion Avoidance)",
      "Preserves application-layer message boundaries (datagram framing)",
      "Full-duplex point-to-point connection established via three-way handshake"
    ],
    "correctAnswer": [
      0,
      1,
      3
    ],
    "explanation": "TCP provides reliable in-order byte streams, congestion control, and connection-oriented 3-way handshake. Preserving message boundaries is a feature of UDP (datagrams), whereas TCP is a continuous byte stream without inherent message boundaries.",
    "skillsAssessed": [
      "Computer Networks",
      "TCP/IP Protocol Suite",
      "Transport Layer"
    ],
    "sourceOrInspiration": "Cisco & Gate CS Networking Foundations",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  },
  {
    "id": "dbms-q1-bplus-tree-mcq",
    "companyId": "oracle",
    "assessmentSetId": "tcs-digital-oa",
    "roleLevel": "Graduate / SDE-1",
    "questionType": "mcq",
    "title": "DBMS Indexing: Structural Advantage of B+ Trees",
    "difficulty": "Medium",
    "estimatedTimeMinutes": 6,
    "marks": 10,
    "prompt": "Why do relational database engines like PostgreSQL and MySQL InnoDB use B+ Trees rather than standard balanced Binary Search Trees (like Red-Black Trees) for disk-based storage indexes?",
    "objectiveOptions": [
      "B+ Trees have a much higher branching factor (fan-out), which significantly lowers tree height and minimizes expensive disk block I/O operations.",
      "Binary Search Trees cannot store string data types.",
      "Red-Black trees require non-deterministic time complexity for search operations.",
      "B+ Trees eliminate the need for ACID transaction logging."
    ],
    "correctAnswer": 0,
    "explanation": "Disk I/O is orders of magnitude slower than CPU memory access. High fan-out (hundreds of keys per node fitting into a 4KB/16KB disk page) reduces tree height to 3 or 4 levels for millions of rows, requiring only 3-4 disk block reads compared to 20+ for binary trees. Leaf nodes are also linked sequentially for fast range scans.",
    "skillsAssessed": [
      "DBMS Internals",
      "B+ Tree Indexing",
      "Disk I/O Optimization"
    ],
    "sourceOrInspiration": "Oracle & MySQL Database Storage Architecture",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  },
  {
    "id": "concur-q1-thread-pool-mcq",
    "companyId": "amazon",
    "assessmentSetId": "amazon-sde-oa",
    "roleLevel": "SDE-1",
    "questionType": "mcq",
    "title": "Java Concurrency: ThreadPoolExecutor Saturation Policy",
    "difficulty": "Medium",
    "estimatedTimeMinutes": 7,
    "marks": 12,
    "prompt": "In Java's `ThreadPoolExecutor`, when both the maximum thread pool limit and the work queue capacity are completely exhausted, what is the default RejectedExecutionHandler behavior?",
    "objectiveOptions": [
      "`AbortPolicy`: Throws an unchecked `RejectedExecutionException`.",
      "`CallerRunsPolicy`: Executes the submitted task synchronously in the caller's thread.",
      "`DiscardPolicy`: Silently drops the task without throwing an exception.",
      "`DiscardOldestPolicy`: Evicts the unhandled task at the head of the queue."
    ],
    "correctAnswer": 0,
    "explanation": "The default saturation policy in ThreadPoolExecutor is `ThreadPoolExecutor.AbortPolicy()`, which immediately throws a runtime `RejectedExecutionException`. `CallerRunsPolicy`, `DiscardPolicy`, and `DiscardOldestPolicy` must be explicitly configured.",
    "skillsAssessed": [
      "Java Concurrency",
      "Thread Pools",
      "System Resilience"
    ],
    "sourceOrInspiration": "Standard Java Concurrency in Practice",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  },
  {
    "id": "algo-q1-median-stream",
    "companyId": "goldmansachs",
    "assessmentSetId": "fintech-startup-oa",
    "roleLevel": "SDE-1",
    "questionType": "coding",
    "title": "Real-Time Order Book Median Price Tracker",
    "difficulty": "Hard",
    "estimatedTimeMinutes": 35,
    "marks": 35,
    "prompt": "In high-frequency financial order books, trading strategies require the real-time median price from a continuous stream of integer stock prices.\n\nDesign a data structure that supports:\n1. `addNum(num: int) -> None`: Inserts an integer from the stream.\n2. `findMedian() -> float`: Returns the median of all elements seen so far. If the count is even, return the average of the two middle elements.\n\n### Function Signature:\nImplement class `MedianFinder` with `__init__`, `addNum`, and `findMedian`.",
    "constraints": [
      "1 <= total numbers added <= 5 * 10^4",
      "-10^5 <= num <= 10^5"
    ],
    "examples": [
      {
        "input": "mf.addNum(1); mf.addNum(2); mf.findMedian() -> 1.5; mf.addNum(3); mf.findMedian() -> 2.0",
        "output": "[1.5, 2.0]",
        "explanation": "Stream [1, 2] has even size, median is (1+2)/2 = 1.5. Stream [1, 2, 3] has odd size, median is 2.0."
      }
    ],
    "starterCode": {
      "python": "import heapq\n\nclass MedianFinder:\n    def __init__(self):\n        self.small = [] # max-heap (invert signs)\n        self.large = [] # min-heap\n\n    def addNum(self, num: int) -> None:\n        # Write your code here\n        pass\n\n    def findMedian(self) -> float:\n        # Write your code here\n        return 0.0\n",
      "javascript": "class MedianFinder {\n  constructor() {}\n  addNum(num) {}\n  findMedian() { return 0.0; }\n}\n"
    },
    "testCases": [
      {
        "id": "tc-1",
        "input": "addNum(1), addNum(2), findMedian(), addNum(3), findMedian()",
        "expectedOutput": "[1.5, 2.0]",
        "isHidden": false
      }
    ],
    "explanation": "Maintain two heaps: a max-heap `small` storing the lower half of numbers, and a min-heap `large` storing the upper half. Balance sizes so `len(small) == len(large)` or `len(small) == len(large) + 1`. `addNum` runs in O(log N) and `findMedian` in O(1).",
    "expectedApproach": "Dual-heap (Max-Heap + Min-Heap) pattern.",
    "skillsAssessed": [
      "Heaps",
      "Priority Queue",
      "Streaming Algorithms"
    ],
    "sourceOrInspiration": "Goldman Sachs / Quant Fintech Screening",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  },
  {
    "id": "sec-q1-csrf-jwt-msq",
    "companyId": "atlassian",
    "assessmentSetId": "atlassian-se-oa",
    "roleLevel": "Graduate / Early Career",
    "questionType": "msq",
    "title": "Application Security: Cross-Site Request Forgery (CSRF) Defenses",
    "difficulty": "Medium",
    "estimatedTimeMinutes": 7,
    "marks": 10,
    "prompt": "Which of the following techniques are effective industry standard defenses against Cross-Site Request Forgery (CSRF) in modern web applications? (Select all that apply)",
    "objectiveOptions": [
      "Setting the `SameSite=Strict` or `SameSite=Lax` attribute on session authentication cookies",
      "Using cryptographically secure, unpredictable anti-CSRF tokens verified in request headers (Synchronizer Token Pattern)",
      "Encoding user input using HTML entity escaping before rendering in templates",
      "Requiring custom HTTP headers (such as `X-Requested-With` or `X-CSRF-Token`) that cannot be set cross-origin without CORS preflight approval"
    ],
    "correctAnswer": [
      0,
      1,
      3
    ],
    "explanation": "SameSite cookie attributes, Synchronizer Tokens, and custom headers requiring CORS preflight are effective CSRF mitigations. HTML entity escaping is a defense against Cross-Site Scripting (XSS), not CSRF.",
    "skillsAssessed": [
      "Web Security",
      "CSRF Prevention",
      "Cookie Flags",
      "Authentication"
    ],
    "sourceOrInspiration": "OWASP Top 10 Web Application Security",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  },
  {
    "id": "debug-q2-linked-list-cycle",
    "companyId": "microsoft",
    "assessmentSetId": "msft-swe-oa",
    "roleLevel": "Graduate / SDE-1",
    "questionType": "debugging",
    "title": "Bug Fix: Floyd's Cycle Detection Loop Pointer Step",
    "difficulty": "Easy-Medium",
    "estimatedTimeMinutes": 8,
    "marks": 12,
    "prompt": "Review this implementation of Floyd's Tortoise and Hare cycle detection algorithm:\n\n```python\ndef hasCycle(head):\n    if not head or not head.next:\n        return False\n    \n    slow = head\n    fast = head.next\n    \n    while fast and fast.next:\n        if slow == fast:\n            return True\n        slow = slow.next\n        fast = fast.next     # <-- BUG HERE\n        \n    return False\n```\n\nWhat is the precise bug in the pointer advancement?",
    "objectiveOptions": [
      "The `slow` pointer should advance by two nodes (`slow = slow.next.next`).",
      "`fast` must advance by two nodes (`fast = fast.next.next`), otherwise `slow` and `fast` move at the same speed and will never catch up if the cycle started ahead of `slow`.",
      "The loop condition should be `while slow != fast:`.",
      "`fast` should be initialized to `head` instead of `head.next`."
    ],
    "correctAnswer": 1,
    "explanation": "In Floyd's cycle-finding algorithm, the 'hare' must move at twice the speed of the 'tortoise'. In the buggy code, `fast` was only advanced by one step (`fast = fast.next`), meaning both pointers moved at the identical rate of 1 node per iteration.",
    "skillsAssessed": [
      "Linked Lists",
      "Floyd's Algorithm",
      "Pointer Tracking"
    ],
    "sourceOrInspiration": "Microsoft Campus Recruitment Debugging Question",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  },
  {
    "id": "quant-q2-work-rate-aptitude",
    "companyId": "tcs",
    "assessmentSetId": "tcs-digital-oa",
    "roleLevel": "Campus Graduate",
    "questionType": "mcq",
    "title": "Quantitative Aptitude: Pipe & Cistern Work Rates",
    "difficulty": "Easy",
    "estimatedTimeMinutes": 6,
    "marks": 10,
    "prompt": "Inlet Pipe A can fill a cooling tank in 12 hours. Inlet Pipe B can fill the same tank in 15 hours. Drain Pipe C can empty the full tank in 20 hours. If all three pipes are opened simultaneously when the tank is empty, how many hours will it take to fill the tank completely?",
    "objectiveOptions": [
      "10 hours",
      "8 hours",
      "12 hours",
      "9 hours"
    ],
    "correctAnswer": 0,
    "explanation": "Calculate net hourly rate: LCM of 12, 15, and 20 is 60 units of capacity.\n- Pipe A rate = 60 / 12 = +5 units/hour.\n- Pipe B rate = 60 / 15 = +4 units/hour.\n- Pipe C rate = 60 / 20 = -3 units/hour.\nNet rate = 5 + 4 - 3 = 6 units/hour.\nTime to fill 60 units = 60 / 6 = 10 hours.",
    "skillsAssessed": [
      "Work and Time",
      "Quantitative Aptitude",
      "Rate Calculations"
    ],
    "sourceOrInspiration": "IT Campus Hiring Quantitative Aptitude Bank",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  },
  {
    "id": "algo-q2-word-break-trie",
    "companyId": "google",
    "assessmentSetId": "google-swe-oa",
    "roleLevel": "SDE-1",
    "questionType": "coding",
    "title": "Lexicographical Search Query Tokenizer (Trie & DP)",
    "difficulty": "Medium-Hard",
    "estimatedTimeMinutes": 35,
    "marks": 35,
    "prompt": "In Google Search autocomplete, a user query string `s` is entered without spaces. Given a dictionary of valid words `wordDict`, determine if `s` can be segmented into a space-separated sequence of one or more dictionary words.\n\nReturn `True` if `s` can be fully segmented, otherwise `False`.\n\n### Function Signature:\n```\ncanSegmentQuery(s: str, wordDict: List[str]) -> bool\n```",
    "constraints": [
      "1 <= s.length <= 1000",
      "1 <= wordDict.length <= 5000",
      "1 <= wordDict[i].length <= 30",
      "s and wordDict[i] contain only lowercase English letters"
    ],
    "examples": [
      {
        "input": "s = \"googlecloud\", wordDict = [\"google\", \"cloud\", \"go\"]",
        "output": "True",
        "explanation": "Segmented as 'google' + 'cloud'."
      },
      {
        "input": "s = \"catsandog\", wordDict = [\"cats\", \"dog\", \"sand\", \"and\", \"cat\"]",
        "output": "False",
        "explanation": "No valid concatenation matches the complete string."
      }
    ],
    "starterCode": {
      "python": "def canSegmentQuery(s: str, wordDict: list[str]) -> bool:\n    # Write your solution here\n    pass\n",
      "javascript": "function canSegmentQuery(s, wordDict) {\n  // Write your solution here\n}\n",
      "java": "import java.util.*;\nclass Solution {\n    public boolean canSegmentQuery(String s, List<String> wordDict) {\n        // Write your solution here\n        return false;\n    }\n}\n"
    },
    "testCases": [
      {
        "id": "tc-1",
        "input": "s = 'googlecloud', wordDict = ['google', 'cloud', 'go']",
        "expectedOutput": "True",
        "isHidden": false
      },
      {
        "id": "tc-2",
        "input": "s = 'catsandog', wordDict = ['cats', 'dog', 'sand', 'and', 'cat']",
        "expectedOutput": "False",
        "isHidden": false
      }
    ],
    "explanation": "Use Dynamic Programming with a Boolean array `dp[i]` indicating whether prefix `s[:i]` can be segmented. For each position `i`, check all prefixes `j` where `dp[j]` is True and `s[j:i]` is present in a hash set of `wordDict`. Time Complexity: O(N * L) where L is max word length.",
    "expectedApproach": "Dynamic Programming with HashSet lookup. Time: O(N * L), Space: O(N + M).",
    "skillsAssessed": [
      "Dynamic Programming",
      "Hash Set",
      "String Matching"
    ],
    "sourceOrInspiration": "Google Search Text Segmentation OA Pattern",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  },
  {
    "id": "algo-q3-longest-increasing-path",
    "companyId": "meta",
    "assessmentSetId": "meta-swe-oa",
    "roleLevel": "Early Career",
    "questionType": "coding",
    "title": "Longest Strictly Increasing Path in Elevation Matrix",
    "difficulty": "Hard",
    "estimatedTimeMinutes": 35,
    "marks": 35,
    "prompt": "Given an `m x n` integers matrix `matrix`, return the length of the longest strictly increasing path in `matrix`.\n\nFrom each cell, you can either move in four directions: left, right, up, or down. You may not move diagonally or move outside the boundary.\n\n### Function Signature:\n```\nlongestIncreasingPath(matrix: List[List[int]]) -> int\n```",
    "constraints": [
      "m == matrix.length",
      "n == matrix[i].length",
      "1 <= m, n <= 200",
      "0 <= matrix[i][j] <= 2^31 - 1"
    ],
    "examples": [
      {
        "input": "matrix = [[9, 9, 4], [6, 6, 8], [2, 1, 1]]",
        "output": "4",
        "explanation": "The longest increasing path is [1, 2, 6, 9]."
      }
    ],
    "starterCode": {
      "python": "def longestIncreasingPath(matrix: list[list[int]]) -> int:\n    # Write your solution here\n    pass\n",
      "javascript": "function longestIncreasingPath(matrix) {\n  // Write your solution here\n}\n"
    },
    "testCases": [
      {
        "id": "tc-1",
        "input": "matrix = [[9, 9, 4], [6, 6, 8], [2, 1, 1]]",
        "expectedOutput": "4",
        "isHidden": false
      }
    ],
    "explanation": "Use DFS with memoization. Since paths must be strictly increasing, the graph is a Directed Acyclic Graph (DAG) with no cycles. Compute `dfs(r, c) = 1 + max(dfs(nr, nc))` for valid adjacent cells with greater elevation. Store in `memo[r][c]`. Time: O(M * N).",
    "expectedApproach": "DFS with 2D Memoization on a DAG. Time: O(M * N), Space: O(M * N).",
    "skillsAssessed": [
      "DFS",
      "Memoization",
      "Matrix Traversal",
      "DAG"
    ],
    "sourceOrInspiration": "Meta / Uber Coding Screen Matrix Graph Suite",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  },
  {
    "id": "algo-q4-trap-rainwater-histogram",
    "companyId": "apple",
    "assessmentSetId": "apple-swe-oa",
    "roleLevel": "SDE-1",
    "questionType": "coding",
    "title": "Trapping Rainwater Reservoir Capacity",
    "difficulty": "Medium-Hard",
    "estimatedTimeMinutes": 30,
    "marks": 35,
    "prompt": "Given `n` non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.\n\n### Function Signature:\n```\ntrapRainWater(height: List[int]) -> int\n```",
    "constraints": [
      "n == height.length",
      "1 <= n <= 2 * 10^4",
      "0 <= height[i] <= 10^5"
    ],
    "examples": [
      {
        "input": "height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]",
        "output": "6",
        "explanation": "6 units of rainwater are trapped between the bars."
      }
    ],
    "starterCode": {
      "python": "def trapRainWater(height: list[int]) -> int:\n    # Write your solution here\n    pass\n",
      "javascript": "function trapRainWater(height) {\n  // Write your solution here\n}\n"
    },
    "testCases": [
      {
        "id": "tc-1",
        "input": "height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]",
        "expectedOutput": "6",
        "isHidden": false
      }
    ],
    "explanation": "Two-pointer approach: Maintain `left = 0, right = n - 1`, and `max_left, max_right`. Advance the pointer with the smaller max height, adding `max_left - height[left]` (or `max_right - height[right]`) to the total trapped water. Time: O(N), Space: O(1).",
    "expectedApproach": "Two pointers with boundary height tracking. O(N) time and O(1) auxiliary space.",
    "skillsAssessed": [
      "Two Pointers",
      "Monotonic Stack",
      "Array"
    ],
    "sourceOrInspiration": "Classic Elevation Trapping Problem",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  },
  {
    "id": "cloud-q1-distributed-lru",
    "companyId": "snowflake",
    "assessmentSetId": "snowflake-oa",
    "roleLevel": "Software Engineer",
    "questionType": "coding",
    "title": "Distributed Query Result Cache Eviction (LRU with Capacity)",
    "difficulty": "Medium-Hard",
    "estimatedTimeMinutes": 35,
    "marks": 40,
    "prompt": "Design a data structure that implements the Least Recently Used (LRU) cache protocol with a fixed memory capacity `capacity`.\n\nImplement the `LRUCache` class:\n- `LRUCache(int capacity)`: Initializes the LRU cache with positive size `capacity`.\n- `int get(int key)`: Returns the value of the `key` if the key exists, otherwise returns `-1`. Both `get` and `put` operations must run in O(1) average time complexity.\n- `void put(int key, int value)`: Update the value of the key if key exists. Otherwise, add the key-value pair. If number of keys exceeds `capacity`, evict the least recently used key.\n\n### Function Signature:\nImplement class `LRUCache` with `__init__`, `get`, and `put` methods.",
    "constraints": [
      "1 <= capacity <= 3000",
      "0 <= key <= 10^4",
      "0 <= value <= 10^5",
      "At most 2 * 10^5 calls to get and put"
    ],
    "examples": [
      {
        "input": "lRUCache = LRUCache(2); lRUCache.put(1, 1); lRUCache.put(2, 2); lRUCache.get(1); lRUCache.put(3, 3); lRUCache.get(2);",
        "output": "[null, null, null, 1, null, -1]",
        "explanation": "cache is {1=1, 2=2}. get(1) returns 1. put(3, 3) evicts key 2. get(2) returns -1 (not found)."
      }
    ],
    "starterCode": {
      "python": "class LRUCache:\n    def __init__(self, capacity: int):\n        # Initialize data structures\n        pass\n\n    def get(self, key: int) -> int:\n        # Write code here\n        return -1\n\n    def put(self, key: int, value: int) -> None:\n        # Write code here\n        pass\n",
      "javascript": "class LRUCache {\n  constructor(capacity) {}\n  get(key) { return -1; }\n  put(key, value) {}\n}\n"
    },
    "testCases": [
      {
        "id": "tc-1",
        "input": "cap=2, put(1,1), put(2,2), get(1), put(3,3), get(2)",
        "expectedOutput": "[-1]",
        "isHidden": false
      }
    ],
    "explanation": "Combine a Hash Map with a Doubly Linked List. The hash map maps `key -> Node`, allowing O(1) lookups. The doubly linked list maintains the temporal order of nodes with dummy head and tail. On access, move node to head. On eviction, remove node at tail.prev. O(1) time per operation.",
    "expectedApproach": "HashMap + Doubly Linked List with dummy head/tail pointers.",
    "skillsAssessed": [
      "Data Structure Design",
      "Doubly Linked List",
      "Hash Map"
    ],
    "sourceOrInspiration": "Snowflake / MongoDB Cloud Storage Cache Simulation",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  },
  {
    "id": "cloud-q2-kafka-consumer-lag",
    "companyId": "confluent",
    "assessmentSetId": "confluent-oa",
    "roleLevel": "SDE-1",
    "questionType": "coding",
    "title": "Kafka Partition Consumer Group Lag Monitor",
    "difficulty": "Medium",
    "estimatedTimeMinutes": 25,
    "marks": 35,
    "prompt": "In Apache Kafka, a topic has `p` partitions. Each partition `i` has an end-of-log offset `logEndOffset[i]`. A consumer group has committed offsets `committedOffset[i]`.\nThe consumer lag for partition `i` is defined as:\n`lag = max(0, logEndOffset[i] - committedOffset[i])`.\n\nGiven two arrays `logEndOffset` and `committedOffset` of equal length `p`, return a list `[total_lag, max_lag_partition_index]`. If multiple partitions have the same maximum lag, return the smallest partition index.\n\n### Function Signature:\n```\ncomputeConsumerLag(p: int, logEndOffset: List[int], committedOffset: List[int]) -> List[int]\n```",
    "constraints": [
      "1 <= p <= 10^5",
      "0 <= committedOffset[i] <= logEndOffset[i] <= 10^9"
    ],
    "examples": [
      {
        "input": "p = 4, logEndOffset = [100, 250, 400, 150], committedOffset = [80, 200, 300, 150]",
        "output": "[170, 2]",
        "explanation": "Lags: P0=20, P1=50, P2=100, P3=0. Total lag = 20+50+100+0 = 170. Max lag is 100 at partition 2."
      }
    ],
    "starterCode": {
      "python": "def computeConsumerLag(p: int, logEndOffset: list[int], committedOffset: list[int]) -> list[int]:\n    # Write your solution here\n    pass\n",
      "javascript": "function computeConsumerLag(p, logEndOffset, committedOffset) {\n  // Write your solution here\n}\n"
    },
    "testCases": [
      {
        "id": "tc-1",
        "input": "p = 4, logEndOffset = [100, 250, 400, 150], committedOffset = [80, 200, 300, 150]",
        "expectedOutput": "[170, 2]",
        "isHidden": false
      }
    ],
    "explanation": "Single-pass linear scan computing `lag = max(0, logEndOffset[i] - committedOffset[i])`. Maintain running sum and track maximum lag alongside the lowest partition index. Time: O(P), Space: O(1).",
    "expectedApproach": "Single pass accumulator. O(P) time.",
    "skillsAssessed": [
      "Stream Processing",
      "Array Traversal",
      "Observability"
    ],
    "sourceOrInspiration": "Confluent Kafka Observability Screen",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  },
  {
    "id": "cloud-q3-cap-theorem-mcq",
    "companyId": "mongodb",
    "assessmentSetId": "mongodb-oa",
    "roleLevel": "Software Engineer",
    "questionType": "mcq",
    "title": "Distributed Systems: CAP Theorem Trade-Off Under Network Partition",
    "difficulty": "Easy-Medium",
    "estimatedTimeMinutes": 6,
    "marks": 15,
    "prompt": "According to the Brewer's CAP Theorem, when an asynchronous network partition (P) occurs between two data centers, what fundamental trade-off must a distributed database system make?",
    "objectiveOptions": [
      "It can achieve both Consistency (C) and Availability (A) simultaneously by adding more nodes.",
      "It must choose either Consistency (cancel the operation or block reads/writes to avoid stale data) OR Availability (return the local copy of data even if potentially stale).",
      "It automatically guarantees ACID transactions across the partition without latency degradation.",
      "Network partitions can always be eliminated by using UDP instead of TCP."
    ],
    "correctAnswer": 1,
    "explanation": "When a network partition occurs (nodes cannot communicate), the system must choose between CP (Consistency over Availability, rejecting or delaying requests to prevent split-brain state) or AP (Availability over Consistency, accepting requests with potentially stale replicas).",
    "skillsAssessed": [
      "Distributed Systems",
      "CAP Theorem",
      "High Availability"
    ],
    "sourceOrInspiration": "MongoDB & Cassandra Distributed Architecture",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  },
  {
    "id": "cloud-q4-k8s-pod-lifecycle-msq",
    "companyId": "datadog",
    "assessmentSetId": "datadog-oa",
    "roleLevel": "Software Engineer",
    "questionType": "msq",
    "title": "Cloud Infrastructure: Kubernetes Health Probes",
    "difficulty": "Medium",
    "estimatedTimeMinutes": 7,
    "marks": 10,
    "prompt": "Which of the following statements correctly describe Kubernetes container health probes? (Select all that apply)",
    "objectiveOptions": [
      "Liveness Probe: Determines if the container needs to be restarted by the kubelet if deadlocked or unresponsive.",
      "Readiness Probe: Determines whether a container is ready to accept incoming network traffic from a Service load balancer.",
      "Startup Probe: Disables liveness and readiness checks until the container has finished its slow initial bootup process.",
      "Ephemeral Probe: Automatically deletes persistent storage volumes whenever CPU utilization exceeds 90%."
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Kubernetes defines three container probes: Liveness (restarts failed containers), Readiness (routes service traffic only when ready), and Startup (protects slow-starting legacy applications). Ephemeral Probe is fictitious.",
    "skillsAssessed": [
      "Kubernetes",
      "Container Orchestration",
      "Cloud Observability"
    ],
    "sourceOrInspiration": "Datadog / Cloudflare DevOps Suite",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  },
  {
    "id": "startup-q1-surge-pricing-interval",
    "companyId": "swiggy",
    "assessmentSetId": "swiggy-oa",
    "roleLevel": "SDE-1",
    "questionType": "coding",
    "title": "Delivery Fleet Active Surge Interval Intersection",
    "difficulty": "Medium",
    "estimatedTimeMinutes": 30,
    "marks": 35,
    "prompt": "In Swiggy Instamart, surge pricing multipliers apply during peak demand intervals. You are given a list of intervals `intervals` where `intervals[i] = [start_i, end_i]` represents a surge period in minutes.\n\nMerge all overlapping surge intervals and return an array of the non-overlapping intervals that cover all the surge periods in the input, sorted by start time.\n\n### Function Signature:\n```\nmergeSurgeIntervals(intervals: List[List[int]]) -> List[List[int]]\n```",
    "constraints": [
      "1 <= intervals.length <= 10^4",
      "intervals[i].length == 2",
      "0 <= start_i <= end_i <= 10^5"
    ],
    "examples": [
      {
        "input": "intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]",
        "output": "[[1, 6], [8, 10], [15, 18]]",
        "explanation": "Intervals [1, 3] and [2, 6] overlap and are merged into [1, 6]."
      }
    ],
    "starterCode": {
      "python": "def mergeSurgeIntervals(intervals: list[list[int]]) -> list[list[int]]:\n    # Write your solution here\n    pass\n",
      "javascript": "function mergeSurgeIntervals(intervals) {\n  // Write your solution here\n}\n"
    },
    "testCases": [
      {
        "id": "tc-1",
        "input": "intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]",
        "expectedOutput": "[[1, 6], [8, 10], [15, 18]]",
        "isHidden": false
      }
    ],
    "explanation": "Sort intervals by start time. Iterate through intervals; if the current interval starts before or at the end of the previous merged interval, update `prev.end = max(prev.end, current.end)`. Otherwise append current interval. Time: O(N log N) due to sorting, Space: O(N).",
    "expectedApproach": "Interval sorting by start time + greedy merging. O(N log N) time.",
    "skillsAssessed": [
      "Intervals",
      "Greedy Algorithms",
      "Sorting"
    ],
    "sourceOrInspiration": "Swiggy / Zomato Logistics Dispatch Algorithm",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  },
  {
    "id": "startup-q2-cart-item-inventory-lock",
    "companyId": "flipkart",
    "assessmentSetId": "flipkart-oa",
    "roleLevel": "SDE-1",
    "questionType": "coding",
    "title": "Big Billion Days Flash Sale Inventory Allocation",
    "difficulty": "Medium",
    "estimatedTimeMinutes": 25,
    "marks": 35,
    "prompt": "During Flipkart Big Billion Days, `m` units of a discounted smartphone are in stock. `n` customer orders arrive sequentially, where `orders[i]` is the quantity requested by customer `i`.\n\nIf remaining stock is >= `orders[i]`, the order is fulfilled immediately and stock is decremented. If stock < `orders[i]`, the order is rejected.\n\nReturn a list `[fulfilled_orders_count, remaining_stock]`.\n\n### Function Signature:\n```\nallocateFlashSaleStock(m: int, orders: List[int]) -> List[int]\n```",
    "constraints": [
      "1 <= m <= 10^9",
      "1 <= orders.length <= 10^5",
      "1 <= orders[i] <= 10^6"
    ],
    "examples": [
      {
        "input": "m = 50, orders = [10, 30, 20, 5]",
        "output": "[3, 5]",
        "explanation": "Order 0 (10) fulfilled (40 left). Order 1 (30) fulfilled (10 left). Order 2 (20) rejected (10 < 20). Order 3 (5) fulfilled (5 left). Total fulfilled = 3, remaining = 5."
      }
    ],
    "starterCode": {
      "python": "def allocateFlashSaleStock(m: int, orders: list[int]) -> list[int]:\n    # Write your solution here\n    pass\n",
      "javascript": "function allocateFlashSaleStock(m, orders) {\n  // Write your solution here\n}\n"
    },
    "testCases": [
      {
        "id": "tc-1",
        "input": "m = 50, orders = [10, 30, 20, 5]",
        "expectedOutput": "[3, 5]",
        "isHidden": false
      }
    ],
    "explanation": "Iterate sequentially through orders. Check if `current_stock >= order`. If true, decrement `current_stock -= order` and increment fulfilled count. O(N) time and O(1) space.",
    "expectedApproach": "Single-pass sequential state machine. O(N) time.",
    "skillsAssessed": [
      "Simulation",
      "Inventory Allocation",
      "Array Processing"
    ],
    "sourceOrInspiration": "Flipkart Flash Sale Screening",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  },
  {
    "id": "startup-q3-debug-sliding-window",
    "companyId": "zepto",
    "assessmentSetId": "zepto-oa",
    "roleLevel": "SDE-1",
    "questionType": "debugging",
    "title": "Bug Fix: Longest Substring Without Repeating Characters",
    "difficulty": "Easy-Medium",
    "estimatedTimeMinutes": 8,
    "marks": 15,
    "prompt": "Review the following sliding-window implementation intended to find the length of the longest substring without duplicate characters:\n\n```python\ndef lengthOfLongestSubstring(s: str) -> int:\n    char_index_map = {}\n    left = 0\n    max_len = 0\n    for right in range(len(s)):\n        char = s[right]\n        if char in char_index_map:\n            left = char_index_map[char] + 1    # <-- LINE X\n        char_index_map[char] = right\n        max_len = max(max_len, right - left + 1)\n    return max_len\n```\n\nWhen tested with input `s = \"abba\"`, the function returns `3` instead of the correct answer `2`.\nWhat is the bug on LINE X and how should it be fixed?",
    "objectiveOptions": [
      "Change to: `left = max(left, char_index_map[char] + 1)` so `left` pointer never moves backwards to an already discarded index.",
      "Change to: `left = right` to reset the window completely.",
      "Change to: `char_index_map.clear()` to discard all previous entries.",
      "Change to: `max_len = right - left` without adding 1."
    ],
    "correctAnswer": 0,
    "explanation": "In 'abba', when reaching the second 'a' at index 3, `char_index_map['a']` is 0, which would set `left = 0 + 1 = 1`, moving `left` backwards from index 2 to index 1! Setting `left = max(left, char_index_map[char] + 1)` ensures the left window bound monotonically advances.",
    "skillsAssessed": [
      "Sliding Window",
      "Pointer Tracking",
      "Hash Map"
    ],
    "sourceOrInspiration": "Indian Startup Coding Screen Debugging Suite",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  },
  {
    "id": "startup-q4-sql-window-func-mcq",
    "companyId": "zomato",
    "assessmentSetId": "zomato-oa",
    "roleLevel": "SDE-1",
    "questionType": "mcq",
    "title": "SQL Analytics: DENSE_RANK vs RANK in Restaurant Delivery Volume",
    "difficulty": "Easy-Medium",
    "estimatedTimeMinutes": 6,
    "marks": 15,
    "prompt": "In an e-commerce database, three restaurants tied with 500 orders each for rank 1. What ranks will the 4th restaurant receive under `RANK()` vs `DENSE_RANK()` over `ORDER BY orders DESC`?",
    "objectiveOptions": [
      "`RANK()` assigns rank 4; `DENSE_RANK()` assigns rank 2.",
      "`RANK()` assigns rank 2; `DENSE_RANK()` assigns rank 4.",
      "`RANK()` assigns rank 2; `DENSE_RANK()` assigns rank 2.",
      "`RANK()` throws a runtime division by zero exception."
    ],
    "correctAnswer": 0,
    "explanation": "`RANK()` leaves gaps after ties: 1, 1, 1, 4. `DENSE_RANK()` does not leave gaps: 1, 1, 1, 2.",
    "skillsAssessed": [
      "SQL",
      "Window Functions",
      "Analytical Queries"
    ],
    "sourceOrInspiration": "Zomato / Swiggy Analytics SQL Test",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  },
  {
    "id": "sys-q1-bit-manipulation-mask",
    "companyId": "qualcomm",
    "assessmentSetId": "qualcomm-oa",
    "roleLevel": "Embedded / Systems Engineer",
    "questionType": "coding",
    "title": "Hardware Register Bitfield Extraction & Parity",
    "difficulty": "Medium",
    "estimatedTimeMinutes": 25,
    "marks": 35,
    "prompt": "In Qualcomm modem firmware, a 32-bit hardware status register encodes telemetry in bit range `[start_bit, end_bit]` (inclusive, 0-indexed from LSB).\n\nGiven a 32-bit unsigned integer `reg`, `start_bit`, and `end_bit`:\n1. Extract the integer value represented by the bitfield between `start_bit` and `end_bit`.\n2. Compute the parity of the extracted bitfield (1 if odd number of 1-bits, 0 if even).\n\nReturn a list `[extracted_val, parity]`.\n\n### Function Signature:\n```\nextractRegisterField(reg: int, start_bit: int, end_bit: int) -> List[int]\n```",
    "constraints": [
      "0 <= reg < 2^32",
      "0 <= start_bit <= end_bit <= 31"
    ],
    "examples": [
      {
        "input": "reg = 29 (0b11101), start_bit = 1, end_bit = 3",
        "output": "[6, 0]",
        "explanation": "Bits 1 to 3 are '110' (binary for 6). Number of set bits is 2 (even), so parity is 0."
      }
    ],
    "starterCode": {
      "python": "def extractRegisterField(reg: int, start_bit: int, end_bit: int) -> list[int]:\n    # Write your solution here\n    pass\n",
      "javascript": "function extractRegisterField(reg, start_bit, end_bit) {\n  // Write your solution here\n}\n",
      "cpp": "#include <vector>\nusing namespace std;\nvector<int> extractRegisterField(unsigned int reg, int start_bit, int end_bit) {\n    // Write your solution here\n    return {};\n}\n"
    },
    "testCases": [
      {
        "id": "tc-1",
        "input": "reg = 29, start_bit = 1, end_bit = 3",
        "expectedOutput": "[6, 0]",
        "isHidden": false
      }
    ],
    "explanation": "Length of field is `length = end_bit - start_bit + 1`. Create mask `(1 << length) - 1`. Shift register right `reg >> start_bit` and apply mask `& mask` to get `extracted_val`. Compute parity by counting 1s via Kernighan's algorithm `count % 2`. Time: O(1).",
    "expectedApproach": "Bitwise shift and mask. O(1) time and space.",
    "skillsAssessed": [
      "Bit Manipulation",
      "Embedded Systems",
      "Hardware Registers"
    ],
    "sourceOrInspiration": "Qualcomm Modem Firmware Screen",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  },
  {
    "id": "sys-q2-c-struct-padding-trace",
    "companyId": "intel",
    "assessmentSetId": "intel-oa",
    "roleLevel": "Firmware Engineer",
    "questionType": "output-prediction",
    "title": "C Memory Alignment & Struct Padding Size Calculation",
    "difficulty": "Medium",
    "estimatedTimeMinutes": 7,
    "marks": 15,
    "prompt": "Consider the following C data structure compiled on a standard 64-bit architecture with default 8-byte alignment:\n\n```c\n#include <stdio.h>\n\nstruct PacketHeader {\n    char protocol_type;   // 1 byte\n    int packet_id;        // 4 bytes\n    short checksum;       // 2 bytes\n    double timestamp;     // 8 bytes\n};\n\nint main() {\n    printf(\"%zu\", sizeof(struct PacketHeader));\n    return 0;\n}\n```\n\nWhat is the output printed by `sizeof(struct PacketHeader)`?",
    "objectiveOptions": [
      "24",
      "15",
      "16",
      "32"
    ],
    "correctAnswer": 0,
    "explanation": "- `protocol_type` is 1 byte, followed by 3 padding bytes to align `int packet_id` (4 bytes) to an offset divisible by 4. Current offset: 8 bytes.\n- `checksum` takes 2 bytes (offset 8-10), followed by 6 padding bytes to align `double timestamp` (8 bytes) to an offset divisible by 8 (offset 16).\n- `timestamp` takes 8 bytes (offset 16-24).\nTotal size = 24 bytes.",
    "skillsAssessed": [
      "C Language",
      "Memory Alignment",
      "Struct Padding",
      "Computer Architecture"
    ],
    "sourceOrInspiration": "Intel / AMD Low-Level Systems Screen",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  },
  {
    "id": "sys-q3-cpu-cache-l1-l2-mcq",
    "companyId": "amd",
    "assessmentSetId": "amd-oa",
    "roleLevel": "Silicon Design / Systems",
    "questionType": "mcq",
    "title": "Computer Architecture: Cache Coherence False Sharing",
    "difficulty": "Medium",
    "estimatedTimeMinutes": 7,
    "marks": 15,
    "prompt": "In multi-core CPU programming, what causes **False Sharing** and how does it degrade performance?",
    "objectiveOptions": [
      "Multiple threads write to completely independent variables that happen to reside on the same 64-byte CPU cache line, causing the cache coherence protocol (MESI) to repeatedly invalidate the cache line across CPU cores.",
      "Two threads read from the same memory address without acquiring a mutex lock.",
      "The CPU instruction pipeline stalls because of a branch misprediction in a loop.",
      "Virtual memory page tables run out of physical frame slots in RAM."
    ],
    "correctAnswer": 0,
    "explanation": "False sharing occurs when two independent threads modify variables that reside on the same cache line (typically 64 bytes). The cache coherence hardware invalidates the cache line on other cores, forcing expensive reload from L3/RAM despite no actual logical variable sharing.",
    "skillsAssessed": [
      "Computer Architecture",
      "Cache Coherence",
      "MESI Protocol",
      "Multithreading"
    ],
    "sourceOrInspiration": "AMD / ARM Hardware Architecture Principles",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  },
  {
    "id": "sys-q4-network-handshake-tcp-msq",
    "companyId": "paloalto",
    "assessmentSetId": "paloalto-oa",
    "roleLevel": "Security Engineer",
    "questionType": "msq",
    "title": "Network Security: TCP SYN Flood Attack Mechanism & Defenses",
    "difficulty": "Medium",
    "estimatedTimeMinutes": 7,
    "marks": 10,
    "prompt": "Which of the following statements regarding **TCP SYN Flood attacks** and their mitigation are true? (Select all that apply)",
    "objectiveOptions": [
      "The attacker floods the server with TCP SYN packets from spoofed IPs without sending the final ACK of the three-way handshake.",
      "The server exhausts its half-open connection backlog table (SYN backlog queue) and cannot accept legitimate connections.",
      "SYN Cookies mitigate the attack by encoding connection state into the initial TCP sequence number without allocating memory until the client's final ACK arrives.",
      "SYN Flood attacks only affect encrypted HTTPS traffic; plain HTTP is immune."
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "SYN Flood fills the half-open connection queue. SYN Cookies allow stateless handshake completion. SYN Floods occur at the transport layer (Layer 4) and affect both HTTP and HTTPS alike.",
    "skillsAssessed": [
      "Network Security",
      "TCP Protocol",
      "SYN Flood & Cookies",
      "DDoS Mitigation"
    ],
    "sourceOrInspiration": "Palo Alto Networks / Fortinet Security Assessment",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  },
  {
    "id": "data-q1-customer-retention-cohort",
    "companyId": "deloitte",
    "assessmentSetId": "deloitte-oa",
    "roleLevel": "Technology Consultant",
    "questionType": "coding",
    "title": "Client Transaction Cohort Retention Aggregator",
    "difficulty": "Medium",
    "estimatedTimeMinutes": 25,
    "marks": 35,
    "prompt": "In enterprise consulting, tracking client active user retention is essential.\nYou are given a list of user session events `events`, where `events[i] = [user_id, month_number]`.\n\nA user is defined as **retained** if they have active sessions in at least two consecutive months (e.g. active in month 2 and month 3).\n\nReturn the number of unique users who were retained.\n\n### Function Signature:\n```\ncountRetainedUsers(events: List[List[int]]) -> int\n```",
    "constraints": [
      "1 <= events.length <= 10^5",
      "1 <= user_id <= 10^6",
      "1 <= month_number <= 12"
    ],
    "examples": [
      {
        "input": "events = [[1, 1], [1, 2], [2, 1], [2, 3], [3, 4], [3, 5]]",
        "output": "2",
        "explanation": "User 1 was active in months 1 and 2 (consecutive -> retained). User 2 was active in months 1 and 3 (not consecutive). User 3 was active in 4 and 5 (consecutive -> retained). Total retained = 2."
      }
    ],
    "starterCode": {
      "python": "def countRetainedUsers(events: list[list[int]]) -> int:\n    # Write your solution here\n    pass\n",
      "javascript": "function countRetainedUsers(events) {\n  // Write your solution here\n}\n"
    },
    "testCases": [
      {
        "id": "tc-1",
        "input": "events = [[1, 1], [1, 2], [2, 1], [2, 3], [3, 4], [3, 5]]",
        "expectedOutput": "2",
        "isHidden": false
      }
    ],
    "explanation": "Map each `user_id` to a sorted set of distinct months. For each user, check if `months[i] == months[i-1] + 1` for any consecutive pair. If yes, increment the retained counter. Time: O(N log K), Space: O(N).",
    "expectedApproach": "HashMap of sets + consecutive diff verification. O(N log K) time.",
    "skillsAssessed": [
      "Data Aggregation",
      "Hash Tables",
      "Analytics"
    ],
    "sourceOrInspiration": "Deloitte / PwC Enterprise Analytics Assessment",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  },
  {
    "id": "data-q2-variance-stats-mcq",
    "companyId": "fractal",
    "assessmentSetId": "fractal-oa",
    "roleLevel": "Data Science Engineer",
    "questionType": "mcq",
    "title": "Applied Statistics: Standard Deviation & Outlier Sensitivity",
    "difficulty": "Easy-Medium",
    "estimatedTimeMinutes": 6,
    "marks": 15,
    "prompt": "When evaluating an enterprise revenue distribution with extreme positive skew (a few transactions in hundreds of millions, most around thousands), which measure of central tendency and dispersion is most robust to outliers?",
    "objectiveOptions": [
      "Median and Interquartile Range (IQR)",
      "Arithmetic Mean and Sample Variance",
      "Mode and Standard Deviation",
      "Geometric Mean and Root Mean Square"
    ],
    "correctAnswer": 0,
    "explanation": "The Median (50th percentile) and IQR (75th percentile minus 25th percentile) are non-parametric and resistant to extreme outliers. The arithmetic mean and variance use squared deviations and are heavily distorted by extreme values.",
    "skillsAssessed": [
      "Statistics",
      "Data Analytics",
      "Robust Metrics"
    ],
    "sourceOrInspiration": "Fractal Analytics / Mu Sigma Decision Sciences Screen",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  },
  {
    "id": "gec-q1-circuit-breaker-pattern",
    "companyId": "walmart",
    "assessmentSetId": "walmart-oa",
    "roleLevel": "SDE-1",
    "questionType": "coding",
    "title": "Microservice Resilience: Circuit Breaker State Transition Engine",
    "difficulty": "Medium",
    "estimatedTimeMinutes": 30,
    "marks": 35,
    "prompt": "In Walmart Global Tech microservices, a Circuit Breaker prevents cascading failures when downstream payment dependencies fail.\n\nThe breaker has 3 states:\n- `\"CLOSED\"`: Normal operation. If `failureThreshold` consecutive failures occur, transition immediately to `\"OPEN\"`.\n- `\"OPEN\"`: Requests fail fast. Stays OPEN until a cooldown period of `cooldownSecs` has passed since the transition timestamp, then transitions to `\"HALF_OPEN\"`.\n- `\"HALF_OPEN\"`: Allows a probe request. If the next request succeeds, reset failure count and transition to `\"CLOSED\"`. If it fails, transition back to `\"OPEN\"`.\n\nGiven `failureThreshold`, `cooldownSecs`, and a chronological list of events `[[timestamp, \"SUCCESS\" | \"FAILURE\"]]`, return the list of circuit breaker states at the conclusion of each event.\n\n### Function Signature:\n```\nsimulateCircuitBreaker(failureThreshold: int, cooldownSecs: int, events: List[List[str]]) -> List[str]\n```",
    "constraints": [
      "1 <= failureThreshold <= 10",
      "1 <= cooldownSecs <= 60",
      "1 <= events.length <= 1000",
      "Timestamps are strictly increasing integers as strings"
    ],
    "examples": [
      {
        "input": "failureThreshold = 2, cooldownSecs = 10, events = [[\"1\", \"FAILURE\"], [\"2\", \"FAILURE\"], [\"15\", \"SUCCESS\"]]",
        "output": "[\"CLOSED\", \"OPEN\", \"CLOSED\"]",
        "explanation": "At t=1: 1st failure -> CLOSED. At t=2: 2nd failure reaches threshold -> OPEN (transition at t=2). At t=15: 15 - 2 = 13 >= 10 cooldown, so state became HALF_OPEN; probe succeeds -> CLOSED."
      }
    ],
    "starterCode": {
      "python": "def simulateCircuitBreaker(failureThreshold: int, cooldownSecs: int, events: list[list[str]]) -> list[str]:\n    # Write your solution here\n    pass\n",
      "javascript": "function simulateCircuitBreaker(failureThreshold, cooldownSecs, events) {\n  // Write your solution here\n}\n"
    },
    "testCases": [
      {
        "id": "tc-1",
        "input": "failureThreshold = 2, cooldownSecs = 10, events = [['1', 'FAILURE'], ['2', 'FAILURE'], ['15', 'SUCCESS']]",
        "expectedOutput": "['CLOSED', 'OPEN', 'CLOSED']",
        "isHidden": false
      }
    ],
    "explanation": "Maintain `state`, `consecutive_failures`, and `opened_at`. Before evaluating each event at `t`, if state is 'OPEN' and `t - opened_at >= cooldownSecs`, transition to 'HALF_OPEN'. Process result, update counters, and record state. Time: O(N).",
    "expectedApproach": "Finite State Machine with timestamp comparison. O(N) time and O(N) output.",
    "skillsAssessed": [
      "State Machine",
      "Microservice Resilience",
      "Circuit Breaker"
    ],
    "sourceOrInspiration": "Walmart Global Tech Architecture Simulation",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  },
  {
    "id": "gec-q2-trading-moving-average",
    "companyId": "morganstanley",
    "assessmentSetId": "morganstanley-oa",
    "roleLevel": "Technology Analyst",
    "questionType": "coding",
    "title": "Algorithmic Trading Exponential Moving Average Signal",
    "difficulty": "Medium",
    "estimatedTimeMinutes": 25,
    "marks": 35,
    "prompt": "In algorithmic trade execution at Morgan Stanley, a Simple Moving Average (SMA) of window size `k` is calculated over stock prices to identify trend breakouts.\n\nGiven a list of positive integer prices `prices` and window size `k`, return a list of moving average values rounded to 2 decimal places for each window of length `k`.\n\nIf `prices.length < k`, return an empty list `[]`.\n\n### Function Signature:\n```\ncalculateMovingAverage(prices: List[int], k: int) -> List[float]\n```",
    "constraints": [
      "1 <= k <= prices.length <= 10^5",
      "1 <= prices[i] <= 10^4"
    ],
    "examples": [
      {
        "input": "prices = [10, 20, 30, 40, 50], k = 3",
        "output": "[20.0, 30.0, 40.0]",
        "explanation": "Windows: [10, 20, 30] avg = 20.0; [20, 30, 40] avg = 30.0; [30, 40, 50] avg = 40.0."
      }
    ],
    "starterCode": {
      "python": "def calculateMovingAverage(prices: list[int], k: int) -> list[float]:\n    # Write your solution here\n    pass\n",
      "javascript": "function calculateMovingAverage(prices, k) {\n  // Write your solution here\n}\n"
    },
    "testCases": [
      {
        "id": "tc-1",
        "input": "prices = [10, 20, 30, 40, 50], k = 3",
        "expectedOutput": "[20.0, 30.0, 40.0]",
        "isHidden": false
      }
    ],
    "explanation": "Maintain a sliding window sum of length `k`. Add `prices[i]`, subtract `prices[i - k]`. Compute `round(window_sum / k, 2)`. Time: O(N), Space: O(N) for output.",
    "expectedApproach": "Sliding window O(1) difference update. O(N) time.",
    "skillsAssessed": [
      "Sliding Window",
      "Financial Computing",
      "Array Processing"
    ],
    "sourceOrInspiration": "Morgan Stanley / Goldman Sachs Quantitative Tech",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  },
  {
    "id": "campus-q3-speed-train-aptitude",
    "companyId": "wipro",
    "assessmentSetId": "wipro-oa",
    "roleLevel": "Project Engineer",
    "questionType": "mcq",
    "title": "Quantitative Aptitude: Relative Speed & Train Length",
    "difficulty": "Easy",
    "estimatedTimeMinutes": 6,
    "marks": 10,
    "prompt": "A train 180 meters long is travelling at a speed of 72 km/h. How many seconds will it take to pass a stationary telegraph post completely?",
    "objectiveOptions": [
      "9 seconds",
      "12 seconds",
      "7.5 seconds",
      "10 seconds"
    ],
    "correctAnswer": 0,
    "explanation": "Convert speed to m/s: 72 * (5/18) = 20 m/s.\nDistance to cross a point object = length of train = 180 m.\nTime = Distance / Speed = 180 / 20 = 9 seconds.",
    "skillsAssessed": [
      "Quantitative Aptitude",
      "Speed and Distance",
      "Unit Conversions"
    ],
    "sourceOrInspiration": "Wipro Elite / TCS Ninja Aptitude Bank",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  },
  {
    "id": "campus-q4-logical-syllogism-mcq",
    "companyId": "infosys",
    "assessmentSetId": "infosys-oa",
    "roleLevel": "Systems Engineer",
    "questionType": "mcq",
    "title": "Logical Reasoning: Deductive Syllogisms",
    "difficulty": "Easy",
    "estimatedTimeMinutes": 5,
    "marks": 10,
    "prompt": "Evaluate the following logical statements:\n- Statement 1: All routers are gateways.\n- Statement 2: Some gateways are firewalls.\n\nConclusions:\nI. Some firewalls are routers.\nII. Some gateways are routers.\n\nWhich conclusion(s) logically follow?",
    "objectiveOptions": [
      "Only conclusion II follows.",
      "Only conclusion I follows.",
      "Both conclusion I and II follow.",
      "Neither conclusion follows."
    ],
    "correctAnswer": 0,
    "explanation": "Statement 1: Routers ⊂ Gateways. Therefore, the intersection of Gateways and Routers is non-empty, so 'Some gateways are routers' (Conclusion II) necessarily follows. Firewalls may only intersect the part of Gateways that does not contain Routers, so Conclusion I is not necessarily true.",
    "skillsAssessed": [
      "Logical Reasoning",
      "Syllogisms",
      "Venn Logic"
    ],
    "sourceOrInspiration": "Infosys Campus Reasoning Bank",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  },
  {
    "id": "core-q-sql-window-dense-rank",
    "companyId": "oracle",
    "assessmentSetId": "oracle-oa",
    "roleLevel": "SDE-1 / Graduate",
    "questionType": "sql",
    "title": "SQL: Department Salary Ranking via DENSE_RANK",
    "difficulty": "Medium",
    "estimatedTimeMinutes": 10,
    "marks": 15,
    "prompt": "Write an SQL query to find the second highest distinct salary in each department from the `Employee` table (columns: `id`, `name`, `salary`, `department_id`). Return the columns `department_id` and `second_highest_salary`.\n\nYour query should use modern SQL window functions or portable aggregate subqueries.",
    "starterQuery": "-- Write your SQL query below\nSELECT department_id, salary AS second_highest_salary\nFROM (\n  SELECT department_id, salary,\n         DENSE_RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) as rnk\n  FROM Employee\n) sub\nWHERE rnk = 2;\n",
    "validationKeywords": ["SELECT", "FROM", "DENSE_RANK", "OVER", "PARTITION BY"],
    "expectedApproach": "Use DENSE_RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) as ranking in a subquery or CTE, then filter WHERE ranking = 2.",
    "explanation": "Using DENSE_RANK() handles tied salaries cleanly without skipping ranks, unlike RANK(). Partitioning by department_id ensures the second highest distinct salary is identified independently per department.",
    "skillsAssessed": [
      "SQL",
      "Relational Databases",
      "Window Functions"
    ],
    "sourceOrInspiration": "Enterprise Database Technical Screening",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  },
  {
    "id": "fin-q-sql-reconciliation",
    "companyId": "stripe",
    "assessmentSetId": "stripe-oa",
    "roleLevel": "Software Engineer",
    "questionType": "sql",
    "title": "SQL: Ledger Discrepancy Detection with Aggregate Filtering",
    "difficulty": "Medium",
    "estimatedTimeMinutes": 12,
    "marks": 15,
    "prompt": "You are auditing a double-entry payment ledger. Given tables `accounts (account_id, current_balance)` and `transactions (tx_id, account_id, amount, tx_type)` where `tx_type` is either `'CREDIT'` or `'DEBIT'`.\n\nWrite an SQL query to retrieve all `account_id` values where `current_balance` does not equal the computed net sum of transactions (Credits minus Debits).",
    "starterQuery": "-- Reconcile account balance against transaction sum\nSELECT a.account_id\nFROM accounts a\nJOIN transactions t ON a.account_id = t.account_id\nGROUP BY a.account_id, a.current_balance\nHAVING a.current_balance != SUM(CASE WHEN t.tx_type = 'CREDIT' THEN t.amount ELSE -t.amount END);\n",
    "validationKeywords": ["SELECT", "FROM", "GROUP BY", "HAVING", "SUM", "CASE"],
    "expectedApproach": "Join accounts and transactions on account_id, group by account_id and current_balance, and filter using HAVING current_balance != SUM(CASE WHEN tx_type = 'CREDIT' THEN amount ELSE -amount END).",
    "explanation": "Aggregate comparisons cannot be evaluated in the WHERE clause; they must be computed and filtered in the HAVING clause using a conditional SUM(CASE ... END) or IF expression.",
    "skillsAssessed": [
      "SQL",
      "Fintech Systems",
      "Aggregations"
    ],
    "sourceOrInspiration": "Payment Platform Engineering Practice",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  },
  {
    "id": "core-q-complexity-master-theorem",
    "companyId": "google",
    "assessmentSetId": "google-swe-oa",
    "roleLevel": "Early Career SWE",
    "questionType": "complexity",
    "title": "Complexity Analysis: Master Theorem Recurrence T(n) = 3T(n/2) + O(n)",
    "difficulty": "Medium",
    "estimatedTimeMinutes": 6,
    "marks": 10,
    "prompt": "Consider an algorithm whose divide-and-conquer runtime satisfies the recurrence relation:\n$$T(n) = 3T(n/2) + O(n)$$\nWhat is the tight asymptotic time complexity of this algorithm according to the Master Theorem?",
    "objectiveOptions": [
      "O(n log n)",
      "O(n^(log_2 3)) ≈ O(n^1.585)",
      "O(n^2)",
      "O(n)"
    ],
    "correctAnswer": 1,
    "explanation": "Here a = 3, b = 2, f(n) = O(n). We compare f(n) = n^1 with n^(log_b a) = n^(log_2 3) ≈ n^1.585. Since log_2 3 > 1, n^(log_2 3) dominates f(n) by a polynomial factor n^ε where ε = log_2 3 - 1 ≈ 0.585. By Case 1 of the Master Theorem, T(n) = Θ(n^(log_2 3)) ≈ O(n^1.585).",
    "skillsAssessed": [
      "Complexity Analysis",
      "Divide and Conquer",
      "Master Theorem"
    ],
    "sourceOrInspiration": "Standard Algorithmic Foundations",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  },
  {
    "id": "core-q-complexity-nested-loops",
    "companyId": "microsoft",
    "assessmentSetId": "microsoft-swe-oa",
    "roleLevel": "Software Engineer",
    "questionType": "complexity",
    "title": "Complexity Analysis: Geometric Step Nested Loop",
    "difficulty": "Medium",
    "estimatedTimeMinutes": 6,
    "marks": 10,
    "prompt": "Analyze the following Python function:\n```python\ndef compute(n):\n    count = 0\n    i = 1\n    while i < n:\n        j = 0\n        while j < i:\n            count += 1\n            j += 1\n        i *= 2\n    return count\n```\nWhat is the tight asymptotic time complexity of `compute(n)` as a function of `n`?",
    "objectiveOptions": [
      "O(n)",
      "O(n log n)",
      "O(n^2)",
      "O(log n)"
    ],
    "correctAnswer": 0,
    "explanation": "The outer loop runs for values i = 1, 2, 4, 8, ..., 2^k where 2^k < n. For each i, the inner loop executes exactly i times. The total operations equal the sum of the powers of 2: 1 + 2 + 4 + ... + 2^k = 2^(k+1) - 1. Because 2^k < n, 2^(k+1) < 2n. Therefore, the total operations are strictly bounded by 2n - 1, which is O(n), NOT O(n log n).",
    "skillsAssessed": [
      "Complexity Analysis",
      "Algorithms",
      "Loop Invariants"
    ],
    "sourceOrInspiration": "Technical Screen Complexity Analysis",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  },
  {
    "id": "core-q-short-binary-tree-leaves",
    "companyId": "infosys",
    "assessmentSetId": "infosys-oa",
    "roleLevel": "Systems Engineer",
    "questionType": "short-answer",
    "title": "Discrete Structures: Full Binary Tree Leaf Calculation",
    "difficulty": "Easy",
    "estimatedTimeMinutes": 4,
    "marks": 5,
    "prompt": "In any strictly full (proper) binary tree where every node has either exactly 0 or 2 children, if the tree contains exactly 24 internal nodes (nodes with 2 children), how many leaf nodes are there in the tree?\n\nEnter the exact numeric answer.",
    "correctAnswer": "25",
    "acceptedAnswers": ["25", "25 leaves", "25 nodes"],
    "explanation": "In any full binary tree, the number of leaf nodes L is always related to the number of internal nodes I by the exact invariant: L = I + 1. Given I = 24, L = 24 + 1 = 25 leaves.",
    "skillsAssessed": [
      "Binary Trees",
      "Discrete Mathematics",
      "Data Structures"
    ],
    "sourceOrInspiration": "Campus Technical Screening",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  },
  {
    "id": "core-q-short-tcp-teardown",
    "companyId": "cisco",
    "assessmentSetId": "cisco-oa",
    "roleLevel": "Software Engineer",
    "questionType": "short-answer",
    "title": "Computer Networks: TCP Connection Termination Handshake",
    "difficulty": "Easy",
    "estimatedTimeMinutes": 4,
    "marks": 5,
    "prompt": "In the standard TCP connection termination process (graceful connection close), how many total control segment packets (FIN and ACK packets) are exchanged between the active closer and the passive closer to close the full-duplex byte stream in both directions?\n\nEnter the exact numeric answer.",
    "correctAnswer": "4",
    "acceptedAnswers": ["4", "4 packets", "four"],
    "explanation": "Standard TCP teardown uses a 4-way handshake: (1) Client sends FIN, (2) Server responds with ACK, (3) Server sends its own FIN when finished sending data, (4) Client responds with ACK.",
    "skillsAssessed": [
      "Computer Networks",
      "TCP/IP",
      "Protocols"
    ],
    "sourceOrInspiration": "Systems and Networks Technical Screening",
    "isOriginal": true,
    "evidenceConfidence": "verified"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { QUESTIONS_DATA };
}
