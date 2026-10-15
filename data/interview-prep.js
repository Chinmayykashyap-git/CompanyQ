// CompanyQ Data Source: INTERVIEW_PREP_DATA
// Stage-specific interview guides, rubrics, and questions for subsequent rounds

const INTERVIEW_PREP_DATA = [
  {
    "id": "prep-dsa",
    "stageName": "Live Coding & Algorithmic Problem Solving",
    "category": "Data Structures & Algorithms",
    "overview": "Technical interviews assess your ability to clarify ambiguous problems, communicate your thought process out loud, select optimal data structures, and write clean, modular, bug-free code under observation.",
    "keyTopics": [
      "Arrays, Sliding Window & Two Pointers",
      "Binary Trees, BST & Tree Traversal",
      "Graphs: BFS, DFS, Dijkstra & Topological Sort",
      "Dynamic Programming: 1D memoization, 2D grid, Knapsack",
      "Trie & Prefix Trees for Search Autocomplete",
      "Monotonic Stack & Queue for boundary problems"
    ],
    "rubricCriteria": [
      {
        "criterion": "Clarifying Questions & Constraint Verification",
        "weight": "20%",
        "tip": "Always ask about input ranges, memory limits, duplicate values, and negative inputs before writing any code."
      },
      {
        "criterion": "Thought Process & Communication",
        "weight": "30%",
        "tip": "Explain the brute force first, state its complexity, and walk through your optimization before typing."
      },
      {
        "criterion": "Code Quality & Modularity",
        "weight": "30%",
        "tip": "Use meaningful variable names, separate helper functions, and avoid monolithic 80-line functions."
      },
      {
        "criterion": "Dry Run & Corner Case Validation",
        "weight": "20%",
        "tip": "Trace your code step-by-step with an example before declaring you are done."
      }
    ],
    "practiceQuestions": [
      {
        "title": "Subarray Sum Equals K with Negatives",
        "difficulty": "Medium",
        "approach": "Prefix sum hash map storing frequency of accumulated sums: O(N) time and O(N) space."
      },
      {
        "title": "Lowest Common Ancestor in a Binary Tree",
        "difficulty": "Medium",
        "approach": "Post-order recursive traversal returning node if target found in subtrees."
      },
      {
        "title": "Course Schedule II (Topological Sort)",
        "difficulty": "Medium",
        "approach": "Kahn's algorithm using indegree tracking and BFS queue."
      }
    ]
  },
  {
    "id": "prep-lld",
    "stageName": "Low-Level Design (LLD) & Object-Oriented Design",
    "category": "Software Architecture",
    "overview": "Evaluates your ability to model a problem domain using object-oriented principles (SOLID), design patterns, extensible class hierarchies, and thread safety. Very common in Amazon, Uber, Swiggy, and Flipkart SDE-1 interviews.",
    "keyTopics": [
      "SOLID Principles with practical violations & fixes",
      "Creational Patterns: Factory, Builder, Singleton (Thread-Safe)",
      "Structural Patterns: Adapter, Decorator, Facade",
      "Behavioral Patterns: Strategy, Observer, State",
      "Concurrency: ReentrantLock, synchronized, thread pools",
      "Schema design and in-memory repository abstractions"
    ],
    "rubricCriteria": [
      {
        "criterion": "Single Responsibility & Interface Segregation",
        "weight": "30%",
        "tip": "Keep interfaces lean. Don't make an interface with 15 methods that forces classes to implement dummy methods."
      },
      {
        "criterion": "Extensibility & Open-Closed Principle",
        "weight": "30%",
        "tip": "Adding a new payment provider or notification channel should not require editing existing service classes."
      },
      {
        "criterion": "Working Executable Structure",
        "weight": "25%",
        "tip": "Write actual Java/Python/C++ classes, interfaces, enums, and a demo driver function."
      },
      {
        "criterion": "Concurrency & Edge Cases",
        "weight": "15%",
        "tip": "Identify where two threads might modify the same state simultaneously."
      }
    ],
    "practiceQuestions": [
      {
        "title": "Design a Smart Parking Lot System",
        "difficulty": "Medium",
        "approach": "Vehicle inheritance (Car, Bike, Truck), ParkingSpot types, Strategy pattern for ticket pricing, Thread-safe allocation."
      },
      {
        "title": "Design an In-Memory Key-Value Store with Transactions",
        "difficulty": "Hard",
        "approach": "Stack of transaction maps supporting COMMIT, ROLLBACK, GET, and SET."
      },
      {
        "title": "Design a Rate Limiter Library",
        "difficulty": "Medium",
        "approach": "Strategy interface for Token Bucket, Leaky Bucket, and Sliding Window algorithms."
      }
    ]
  },
  {
    "id": "prep-cs-core",
    "stageName": "Core CS Fundamentals (OS, DBMS, Networks)",
    "category": "Computer Science Core",
    "overview": "Fundamental CS rounds test theoretical principles that distinguish software engineers from boot campers. Key focus for Microsoft, Cisco, NVIDIA, Qualcomm, and campus drives.",
    "keyTopics": [
      "Operating Systems: Process vs Thread, PCB/TCB, Scheduling (CFS), Virtual Memory, Page Faults, Semaphores, Mutex, Deadlocks",
      "DBMS: B+ Tree indexing, Clustered vs Non-Clustered Indexes, Normalization (1NF to BCNF), ACID, Isolation Levels, Sharding vs Partitioning",
      "Computer Networks: OSI 7-Layer vs TCP/IP, Three-Way Handshake, TCP vs UDP, DNS resolution sequence, HTTPS/TLS handshake, Subnetting"
    ],
    "rubricCriteria": [
      {
        "criterion": "Conceptual Precision",
        "weight": "40%",
        "tip": "Clearly differentiate Mutex (locking) from Semaphore (signaling/resource count)."
      },
      {
        "criterion": "Real-World Application",
        "weight": "35%",
        "tip": "Explain why databases use B+ Trees instead of Binary Search Trees (disk I/O and cache line alignment)."
      },
      {
        "criterion": "Troubleshooting Scenarios",
        "weight": "25%",
        "tip": "Be ready to answer 'What happens when you type google.com into your browser?' in depth."
      }
    ],
    "practiceQuestions": [
      {
        "title": "Explain how Virtual Memory translates a Virtual Address to a Physical Address",
        "difficulty": "Medium",
        "approach": "VPN/VPO -> TLB lookup -> Page Table hierarchy -> Frame number + Offset."
      },
      {
        "title": "Why is a B+ Tree preferred over a Hash Index for relational databases?",
        "difficulty": "Easy-Medium",
        "approach": "B+ Trees support range scans and sorting; Hash Indexes only support point lookups."
      }
    ]
  },
  {
    "id": "prep-behavioral",
    "stageName": "Behavioral & Leadership Principles (STAR Method)",
    "category": "Leadership & Culture",
    "overview": "Behavioral rounds evaluate cultural alignment, conflict resolution, ownership, and emotional intelligence. Crucial for Amazon, Google (Googliness), Atlassian, and managerial rounds.",
    "keyTopics": [
      "The STAR Framework: Situation, Task, Action, Result",
      "Amazon 16 Leadership Principles",
      "Atlassian Values & Teamwork",
      "Handling technical disagreements and pushback",
      "Ownership and dealing with ambiguous requirements",
      "Overcoming failure and deadline trade-offs"
    ],
    "rubricCriteria": [
      {
        "criterion": "STAR Structure & Specificity",
        "weight": "35%",
        "tip": "Spend 10% on Situation/Task, 70% on YOUR specific Actions ('I decided', 'I built'), 20% on quantifiable Results."
      },
      {
        "criterion": "Quantified Impact",
        "weight": "25%",
        "tip": "Include concrete numbers (e.g., 'reduced API latency by 45%', 'saved 12 hours of manual testing weekly')."
      },
      {
        "criterion": "Self-Awareness & Learnings",
        "weight": "25%",
        "tip": "Highlight what you would do differently in hindsight."
      },
      {
        "criterion": "Team Collaboration",
        "weight": "15%",
        "tip": "Show empathy, constructive candor, and how you elevated team members."
      }
    ],
    "practiceQuestions": [
      {
        "title": "Tell me about a time you had a disagreement with a teammate or senior engineer.",
        "difficulty": "Medium",
        "approach": "Focus on data-driven discussion, disagree and commit, maintaining professional respect."
      },
      {
        "title": "Describe a project where requirements were vague or constantly changing.",
        "difficulty": "Medium",
        "approach": "Demonstrate proactive requirement gathering, iterative prototypes, and frequent stakeholder alignment."
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { INTERVIEW_PREP_DATA };
}
