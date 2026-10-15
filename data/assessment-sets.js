// CompanyQ Data Source: ASSESSMENT_SETS
// Complete mock OA configurations for all 132 software engineering employers

const ASSESSMENT_SETS = [
  {
    "id": "amazon-sde-oa",
    "companyId": "amazon",
    "title": "Amazon SDE-1 / Intern OA Simulation",
    "roleLevel": "SDE-1 / Intern",
    "trackId": "amazon-sde-1",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank Style (2 Coding + Behavioral Alignment)",
    "durationMinutes": 75,
    "totalMarks": 100,
    "benchmarkPassingScore": 75,
    "benchmarkLabel": "Platform Benchmark (Target >= 75%)",
    "description": "Realistic simulation of the Amazon Online Assessment. Tests algorithmic problem solving under high scale logistics constraints, edge-case resilience, and Amazon Leadership Principles trade-offs.",
    "questionIds": [
      "amz-q1-warehouse-routing",
      "amz-q2-cache-invalidation",
      "amz-q3-lp-ownership",
      "amz-q4-lp-customer-bias"
    ],
    "categoryBreakdown": {
      "Algorithmic Coding": 2,
      "Work Style / Leadership Decision": 2
    },
    "instructions": [
      "This simulation mirrors the format of the Amazon HackerRank OA.",
      "Sections include 2 algorithmic coding problems (60 min recommended) followed by 2 Leadership Principle scenario evaluations.",
      "Write optimal code considering both time and space complexity.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once timer expires, your assessment will be submitted automatically."
    ],
    "evidenceType": "Verified format"
  },
  {
    "id": "msft-swe-oa",
    "companyId": "microsoft",
    "title": "Microsoft Entry-Level SWE OA Simulation",
    "roleLevel": "Graduate / SDE-1",
    "trackId": "msft-swe-fresher",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "Codility / Mettl Style (Coding + CS Fundamentals + Debugging)",
    "durationMinutes": 80,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Simulates Microsoft's campus and off-campus screening. Evaluates string/array manipulation, tree traversal, memory debugging, and operating system / concurrency fundamentals.",
    "questionIds": [
      "msft-q1-string-compression",
      "msft-q2-tree-boundary",
      "msft-q3-debug-binary-search",
      "msft-q4-cs-os-virtual-memory",
      "msft-q5-cs-concurrency-deadlock",
      "core-q-complexity-nested-loops"
    ],
    "categoryBreakdown": {
      "Algorithmic Coding": 2,
      "Debugging": 1,
      "CS Fundamentals": 2
    },
    "instructions": [
      "Microsoft assessments place high value on clean, readable code and corner-case handling.",
      "Includes 2 coding tasks, 1 debugging fix, and 2 core CS multiple-choice/select questions.",
      "Check for off-by-one errors and null/empty boundary inputs."
    ],
    "evidenceType": "Verified format"
  },
  {
    "id": "atlassian-se-oa",
    "companyId": "atlassian",
    "title": "Atlassian Software Engineer OA Simulation",
    "roleLevel": "Graduate / Early Career",
    "trackId": "atlassian-grad",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank Style (Data Structure Design + Algorithm + Code Tracing)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 80,
    "benchmarkLabel": "Platform Benchmark (Target >= 80%)",
    "description": "Atlassian's high-bar engineering screen. Focuses on real-world data structure design (sliding window rate limiter), graph optimizations, and complexity analysis.",
    "questionIds": [
      "atlassian-q1-rate-limiter",
      "atlassian-q2-service-dependency-graph",
      "atlassian-q3-complexity-output-trace",
      "atlassian-q4-api-design-msq"
    ],
    "categoryBreakdown": {
      "Algorithmic & System Coding": 2,
      "Output Prediction / Tracing": 1,
      "Software Architecture MSQ": 1
    },
    "instructions": [
      "Simulates the Atlassian OA with high emphasis on modularity, clean naming, and performance guarantees.",
      "Write production-grade code with appropriate data structures."
    ],
    "evidenceType": "Verified format"
  },
  {
    "id": "tcs-digital-oa",
    "companyId": "tcs",
    "title": "TCS Digital / Infosys SP Campus OA Simulation",
    "roleLevel": "Campus Graduate / Digital Specialist",
    "trackId": "tcs-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "TCS iON / Infosys HackWithInfy Style (Coding + Advanced Aptitude + CS)",
    "durationMinutes": 75,
    "totalMarks": 100,
    "benchmarkPassingScore": 65,
    "benchmarkLabel": "Platform Benchmark (Target >= 65%)",
    "description": "Reflects the elite campus hiring tracks (TCS Digital/Prime, Infosys Specialist Programmer). Combines algorithmic coding, advanced quantitative reasoning, and CS output prediction.",
    "questionIds": [
      "tcs-q1-prime-matrix-traversal",
      "tcs-q2-knapsack-variant",
      "tcs-q3-c-pointer-output-trace",
      "tcs-q4-sql-subquery-mcq",
      "tcs-q5-quant-probability-aptitude",
      "tcs-q6-logic-series-aptitude"
    ],
    "categoryBreakdown": {
      "Advanced Coding": 2,
      "Technical Output Tracing": 1,
      "DBMS & SQL MCQ": 1,
      "Quantitative Aptitude": 2
    },
    "instructions": [
      "Simulates top-tier Indian IT campus hiring tests (Digital / SP / DSE).",
      "Balance your time carefully across both the coding section and the aptitude/CS questions."
    ],
    "evidenceType": "Verified format"
  },
  {
    "id": "fintech-startup-oa",
    "companyId": "razorpay",
    "title": "Fintech & High-Growth Startup Coding Screen",
    "roleLevel": "SDE-1 / Backend Engineer",
    "trackId": "razorpay-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerEarth / DoSelect Style (Fintech Logistics + Concurrency)",
    "durationMinutes": 80,
    "totalMarks": 100,
    "benchmarkPassingScore": 75,
    "benchmarkLabel": "Platform Benchmark (Target >= 75%)",
    "description": "Representative of Indian fintech and consumer startups (Razorpay, PhonePe, Swiggy, Zepto). Covers idempotency, double-entry ledger reconciliation, transaction state machines, and concurrency.",
    "questionIds": [
      "fintech-q1-ledger-reconciliation",
      "fintech-q2-sliding-window-fraud-detector",
      "fintech-q3-db-isolation-levels-msq",
      "fintech-q4-debug-concurrency-race"
    ],
    "categoryBreakdown": {
      "Fintech Algorithmic Coding": 2,
      "Database & Concurrency MSQ": 1,
      "Concurrency Debugging": 1
    },
    "instructions": [
      "Focuses on correctness, atomicity, idempotency, and edge cases common in payment pipelines.",
      "Write clean logic and inspect the concurrency race condition carefully."
    ],
    "evidenceType": "Representative simulation"
  },
  {
    "id": "google-swe-oa",
    "companyId": "google",
    "title": "Google SWE Early Career / Campus OA Simulation",
    "roleLevel": "Software Engineer (L3 / Early Career)",
    "trackId": "google-swe-newgrad",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerEarth / GOC Style (Deep Algorithmic & Graph/DP)",
    "durationMinutes": 85,
    "totalMarks": 100,
    "benchmarkPassingScore": 80,
    "benchmarkLabel": "Platform Benchmark (Target >= 80%)",
    "description": "High-difficulty algorithmic problem set mirroring the Google Online Challenge. Features multi-state dynamic programming, shortest-path graph optimization, and complex edge cases.",
    "questionIds": [
      "goog-q1-shortest-path-fuel-constraint",
      "goog-q2-max-independent-tasks-dp",
      "goog-q3-bitwise-combinatorics-trace",
      "core-q-complexity-master-theorem"
    ],
    "categoryBreakdown": {
      "Advanced Algorithmic Coding": 2,
      "Output & Complexity Tracing": 1
    },
    "instructions": [
      "Google problem statements often require identifying mathematical or graph reductions.",
      "Ensure solution runs strictly within O(N log N) or O(V + E) bounds."
    ],
    "evidenceType": "Verified format"
  },
  {
    "id": "meta-oa",
    "companyId": "meta",
    "title": "Meta SDE Recruitment Simulation",
    "roleLevel": "Software Engineer (E3 / Early Career)",
    "trackId": "meta-swe-e3",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 45,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Meta's Software Engineer (E3 / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Representative simulation",
    "questionIds": [
      "msft-q4-cs-os-virtual-memory",
      "atlassian-q1-rate-limiter",
      "atlassian-q3-complexity-output-trace",
      "goog-q1-shortest-path-fuel-constraint"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Meta's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "apple-oa",
    "companyId": "apple",
    "title": "Apple SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer",
    "trackId": "apple-swe",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Apple's Software Development Engineer track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "amz-q5-lru-cache",
      "amz-q1-warehouse-routing",
      "msft-q1-string-compression",
      "msft-q3-debug-binary-search"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Apple's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "netflix-oa",
    "companyId": "netflix",
    "title": "Netflix SDE Recruitment Simulation",
    "roleLevel": "Software Engineer",
    "trackId": "netflix-swe",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 60,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Netflix's Software Engineer track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "msft-q1-string-compression",
      "msft-q3-debug-binary-search",
      "msft-q5-cs-concurrency-deadlock",
      "atlassian-q2-service-dependency-graph"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Netflix's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "nvidia-oa",
    "companyId": "nvidia",
    "title": "NVIDIA SDE Recruitment Simulation",
    "roleLevel": "System Software Engineer / Software Engineer",
    "trackId": "nvidia-swe-campus",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for NVIDIA's System Software Engineer / Software Engineer track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Representative simulation",
    "questionIds": [
      "atlassian-q2-service-dependency-graph",
      "atlassian-q4-api-design-msq",
      "goog-q2-max-independent-tasks-dp",
      "algo-q2-word-break-trie"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror NVIDIA's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "adobe-oa",
    "companyId": "adobe",
    "title": "Adobe SDE Recruitment Simulation",
    "roleLevel": "Member of Technical Staff 1 (MTS-1)",
    "trackId": "adobe-mts-1",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 105,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Adobe's Member of Technical Staff 1 (MTS-1) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Representative simulation",
    "questionIds": [
      "goog-q3-bitwise-combinatorics-trace",
      "algo-q3-longest-increasing-path",
      "amz-q5-lru-cache",
      "amz-q1-warehouse-routing"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Adobe's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "uber-oa",
    "companyId": "uber",
    "title": "Uber SDE Recruitment Simulation",
    "roleLevel": "Software Engineer I",
    "trackId": "uber-sde-1",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 70,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Uber's Software Engineer I track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Representative simulation",
    "questionIds": [
      "goog-q2-max-independent-tasks-dp",
      "algo-q2-word-break-trie",
      "algo-q4-trap-rainwater-histogram",
      "meta-q1-valid-ip-trie"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Uber's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "salesforce-oa",
    "companyId": "salesforce",
    "title": "Salesforce SDE Recruitment Simulation",
    "roleLevel": "Associate Member of Technical Staff (AMTS)",
    "trackId": "salesforce-mts",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Salesforce's Associate Member of Technical Staff (AMTS) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Representative simulation",
    "questionIds": [
      "meta-q1-valid-ip-trie",
      "amz-q2-cache-invalidation",
      "msft-q2-tree-boundary",
      "msft-q4-cs-os-virtual-memory"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Salesforce's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "oracle-oa",
    "companyId": "oracle",
    "title": "Oracle SDE Recruitment Simulation",
    "roleLevel": "Software Developer (Server Technology / OCI)",
    "trackId": "oracle-server-tech",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 105,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Oracle's Software Developer (Server Technology / OCI) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Representative simulation",
    "questionIds": [
      "core-q-sql-window-dense-rank",
      "msft-q2-tree-boundary",
      "msft-q4-cs-os-virtual-memory",
      "atlassian-q1-rate-limiter",
      "atlassian-q3-complexity-output-trace"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Oracle's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "intuit-oa",
    "companyId": "intuit",
    "title": "Intuit SDE Recruitment Simulation",
    "roleLevel": "Software Engineer 1",
    "trackId": "intuit-sde-1",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Intuit's Software Engineer 1 track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Representative simulation",
    "questionIds": [
      "msft-q3-debug-binary-search",
      "msft-q5-cs-concurrency-deadlock",
      "atlassian-q2-service-dependency-graph",
      "atlassian-q4-api-design-msq"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Intuit's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "linkedin-oa",
    "companyId": "linkedin",
    "title": "LinkedIn SDE Recruitment Simulation",
    "roleLevel": "Software Engineer",
    "trackId": "linkedin-swe-1",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for LinkedIn's Software Engineer track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Representative simulation",
    "questionIds": [
      "atlassian-q4-api-design-msq",
      "goog-q2-max-independent-tasks-dp",
      "algo-q2-word-break-trie",
      "algo-q4-trap-rainwater-histogram"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror LinkedIn's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "cisco-oa",
    "companyId": "cisco",
    "title": "Cisco SDE Recruitment Simulation",
    "roleLevel": "Software Engineer (Campus / Early Career)",
    "trackId": "cisco-software-eng",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Cisco's Software Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Representative simulation",
    "questionIds": [
      "algo-q4-trap-rainwater-histogram",
      "meta-q1-valid-ip-trie",
      "amz-q2-cache-invalidation",
      "msft-q2-tree-boundary",
      "core-q-short-tcp-teardown"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Cisco's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "servicenow-oa",
    "companyId": "servicenow",
    "title": "ServiceNow SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "servicenow-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for ServiceNow's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "cloud-q4-k8s-pod-lifecycle-msq",
      "atlassian-q4-api-design-msq",
      "amz-q2-cache-invalidation",
      "msft-q4-cs-os-virtual-memory"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror ServiceNow's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "sap-oa",
    "companyId": "sap",
    "title": "SAP Labs SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "sap-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for SAP Labs's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "atlassian-q1-rate-limiter",
      "sec-q1-csrf-jwt-msq",
      "amz-q5-lru-cache",
      "cloud-q1-distributed-lru"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror SAP Labs's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "workday-oa",
    "companyId": "workday",
    "title": "Workday SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "workday-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Workday's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "msft-q4-cs-os-virtual-memory",
      "cloud-q2-kafka-consumer-lag",
      "cloud-q4-k8s-pod-lifecycle-msq",
      "atlassian-q4-api-design-msq"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Workday's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "snowflake-oa",
    "companyId": "snowflake",
    "title": "Snowflake SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "snowflake-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Snowflake's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "cloud-q1-distributed-lru",
      "cloud-q3-cap-theorem-mcq",
      "atlassian-q1-rate-limiter",
      "sec-q1-csrf-jwt-msq"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Snowflake's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "mongodb-oa",
    "companyId": "mongodb",
    "title": "MongoDB SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "mongodb-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for MongoDB's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "cloud-q3-cap-theorem-mcq",
      "atlassian-q1-rate-limiter",
      "sec-q1-csrf-jwt-msq",
      "amz-q5-lru-cache"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror MongoDB's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "datadog-oa",
    "companyId": "datadog",
    "title": "Datadog SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "datadog-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Datadog's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "atlassian-q1-rate-limiter",
      "sec-q1-csrf-jwt-msq",
      "amz-q5-lru-cache",
      "cloud-q1-distributed-lru"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Datadog's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "github-oa",
    "companyId": "github",
    "title": "GitHub SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "github-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for GitHub's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "cloud-q4-k8s-pod-lifecycle-msq",
      "atlassian-q4-api-design-msq",
      "amz-q2-cache-invalidation",
      "msft-q4-cs-os-virtual-memory"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror GitHub's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "gitlab-oa",
    "companyId": "gitlab",
    "title": "GitLab SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "gitlab-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for GitLab's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "amz-q2-cache-invalidation",
      "msft-q4-cs-os-virtual-memory",
      "cloud-q2-kafka-consumer-lag",
      "cloud-q4-k8s-pod-lifecycle-msq"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror GitLab's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "twilio-oa",
    "companyId": "twilio",
    "title": "Twilio SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "twilio-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Twilio's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "atlassian-q1-rate-limiter",
      "sec-q1-csrf-jwt-msq",
      "amz-q5-lru-cache",
      "cloud-q1-distributed-lru"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Twilio's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "cloudflare-oa",
    "companyId": "cloudflare",
    "title": "Cloudflare SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "cloudflare-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Cloudflare's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "amz-q2-cache-invalidation",
      "msft-q4-cs-os-virtual-memory",
      "cloud-q2-kafka-consumer-lag",
      "cloud-q4-k8s-pod-lifecycle-msq"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Cloudflare's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "hashicorp-oa",
    "companyId": "hashicorp",
    "title": "HashiCorp SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "hashicorp-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for HashiCorp's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "cloud-q2-kafka-consumer-lag",
      "cloud-q4-k8s-pod-lifecycle-msq",
      "atlassian-q4-api-design-msq",
      "amz-q2-cache-invalidation"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror HashiCorp's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "elastic-oa",
    "companyId": "elastic",
    "title": "Elastic SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "elastic-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Elastic's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "cloud-q2-kafka-consumer-lag",
      "cloud-q4-k8s-pod-lifecycle-msq",
      "atlassian-q4-api-design-msq",
      "amz-q2-cache-invalidation"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Elastic's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "box-oa",
    "companyId": "box",
    "title": "Box SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "box-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Box's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "msft-q4-cs-os-virtual-memory",
      "cloud-q2-kafka-consumer-lag",
      "cloud-q4-k8s-pod-lifecycle-msq",
      "atlassian-q4-api-design-msq"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Box's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "dropbox-oa",
    "companyId": "dropbox",
    "title": "Dropbox SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "dropbox-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Dropbox's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "sec-q1-csrf-jwt-msq",
      "amz-q5-lru-cache",
      "cloud-q1-distributed-lru",
      "cloud-q3-cap-theorem-mcq"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Dropbox's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "okta-oa",
    "companyId": "okta",
    "title": "Okta SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "okta-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Okta's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "cloud-q2-kafka-consumer-lag",
      "cloud-q4-k8s-pod-lifecycle-msq",
      "atlassian-q4-api-design-msq",
      "amz-q2-cache-invalidation"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Okta's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "splunk-oa",
    "companyId": "splunk",
    "title": "Splunk SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "splunk-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Splunk's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "msft-q4-cs-os-virtual-memory",
      "cloud-q2-kafka-consumer-lag",
      "cloud-q4-k8s-pod-lifecycle-msq",
      "atlassian-q4-api-design-msq"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Splunk's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "confluent-oa",
    "companyId": "confluent",
    "title": "Confluent SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "confluent-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Confluent's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "atlassian-q1-rate-limiter",
      "sec-q1-csrf-jwt-msq",
      "amz-q5-lru-cache",
      "cloud-q1-distributed-lru"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Confluent's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "newrelic-oa",
    "companyId": "newrelic",
    "title": "New Relic SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "newrelic-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for New Relic's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "amz-q2-cache-invalidation",
      "msft-q4-cs-os-virtual-memory",
      "cloud-q2-kafka-consumer-lag",
      "cloud-q4-k8s-pod-lifecycle-msq"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror New Relic's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "postman-oa",
    "companyId": "postman",
    "title": "Postman SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "postman-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Postman's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "cloud-q1-distributed-lru",
      "cloud-q3-cap-theorem-mcq",
      "atlassian-q1-rate-limiter",
      "sec-q1-csrf-jwt-msq"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Postman's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "browserstack-oa",
    "companyId": "browserstack",
    "title": "BrowserStack SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "browserstack-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for BrowserStack's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "sec-q1-csrf-jwt-msq",
      "amz-q5-lru-cache",
      "cloud-q1-distributed-lru",
      "cloud-q3-cap-theorem-mcq"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror BrowserStack's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "stripe-oa",
    "companyId": "stripe",
    "title": "Stripe SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "stripe-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Stripe's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "sec-q1-csrf-jwt-msq",
      "fintech-q2-sliding-window-fraud-detector",
      "fintech-q4-debug-concurrency-race",
      "gec-q2-trading-moving-average",
      "fin-q-sql-reconciliation"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Stripe's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "paypal-oa",
    "companyId": "paypal",
    "title": "PayPal SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "paypal-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for PayPal's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "sec-q1-csrf-jwt-msq",
      "fintech-q2-sliding-window-fraud-detector",
      "fintech-q4-debug-concurrency-race",
      "gec-q2-trading-moving-average"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror PayPal's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "phonepe-oa",
    "companyId": "phonepe",
    "title": "PhonePe SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "phonepe-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for PhonePe's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "sec-q1-csrf-jwt-msq",
      "fintech-q2-sliding-window-fraud-detector",
      "fintech-q4-debug-concurrency-race",
      "gec-q2-trading-moving-average"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror PhonePe's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "paytm-oa",
    "companyId": "paytm",
    "title": "Paytm (One97 Communications) SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "paytm-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Paytm (One97 Communications)'s Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "fintech-q4-debug-concurrency-race",
      "gec-q2-trading-moving-average",
      "sec-q1-csrf-jwt-msq",
      "fintech-q2-sliding-window-fraud-detector"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Paytm (One97 Communications)'s documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "cred-oa",
    "companyId": "cred",
    "title": "CRED SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "cred-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for CRED's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "cloud-q1-distributed-lru",
      "fintech-q1-ledger-reconciliation",
      "fintech-q3-db-isolation-levels-msq",
      "algo-q1-median-stream"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror CRED's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "groww-oa",
    "companyId": "groww",
    "title": "Groww SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "groww-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Groww's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "cloud-q1-distributed-lru",
      "fintech-q1-ledger-reconciliation",
      "fintech-q3-db-isolation-levels-msq",
      "algo-q1-median-stream"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Groww's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "fiserv-oa",
    "companyId": "fiserv",
    "title": "Fiserv SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "fiserv-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Fiserv's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "sec-q1-csrf-jwt-msq",
      "fintech-q2-sliding-window-fraud-detector",
      "fintech-q4-debug-concurrency-race",
      "gec-q2-trading-moving-average"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Fiserv's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "visa-oa",
    "companyId": "visa",
    "title": "Visa SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "visa-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Visa's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "fintech-q4-debug-concurrency-race",
      "gec-q2-trading-moving-average",
      "sec-q1-csrf-jwt-msq",
      "fintech-q2-sliding-window-fraud-detector"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Visa's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "mastercard-oa",
    "companyId": "mastercard",
    "title": "Mastercard SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "mastercard-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Mastercard's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "cloud-q1-distributed-lru",
      "fintech-q1-ledger-reconciliation",
      "fintech-q3-db-isolation-levels-msq",
      "algo-q1-median-stream"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Mastercard's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "creditkarma-oa",
    "companyId": "creditkarma",
    "title": "Credit Karma (Intuit) SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "creditkarma-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Credit Karma (Intuit)'s Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "sec-q1-csrf-jwt-msq",
      "fintech-q2-sliding-window-fraud-detector",
      "fintech-q4-debug-concurrency-race",
      "gec-q2-trading-moving-average"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Credit Karma (Intuit)'s documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "slice-oa",
    "companyId": "slice",
    "title": "Slice SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "slice-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Slice's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "fintech-q1-ledger-reconciliation",
      "fintech-q3-db-isolation-levels-msq",
      "algo-q1-median-stream",
      "cloud-q1-distributed-lru"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Slice's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "bharatpe-oa",
    "companyId": "bharatpe",
    "title": "BharatPe SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "bharatpe-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for BharatPe's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "sec-q1-csrf-jwt-msq",
      "fintech-q2-sliding-window-fraud-detector",
      "fintech-q4-debug-concurrency-race",
      "gec-q2-trading-moving-average"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror BharatPe's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "zerodha-oa",
    "companyId": "zerodha",
    "title": "Zerodha SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "zerodha-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Zerodha's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "gec-q2-trading-moving-average",
      "sec-q1-csrf-jwt-msq",
      "fintech-q2-sliding-window-fraud-detector",
      "fintech-q4-debug-concurrency-race"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Zerodha's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "pinelabs-oa",
    "companyId": "pinelabs",
    "title": "Pine Labs SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "pinelabs-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Pine Labs's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "cloud-q1-distributed-lru",
      "fintech-q1-ledger-reconciliation",
      "fintech-q3-db-isolation-levels-msq",
      "algo-q1-median-stream"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Pine Labs's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "navi-oa",
    "companyId": "navi",
    "title": "Navi Technologies SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "navi-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Navi Technologies's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "cloud-q1-distributed-lru",
      "fintech-q1-ledger-reconciliation",
      "fintech-q3-db-isolation-levels-msq",
      "algo-q1-median-stream"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Navi Technologies's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "jupiter-oa",
    "companyId": "jupiter",
    "title": "Jupiter Money SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "jupiter-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Jupiter Money's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "fintech-q4-debug-concurrency-race",
      "gec-q2-trading-moving-average",
      "sec-q1-csrf-jwt-msq",
      "fintech-q2-sliding-window-fraud-detector"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Jupiter Money's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "coindcx-oa",
    "companyId": "coindcx",
    "title": "CoinDCX SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "coindcx-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for CoinDCX's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "fintech-q1-ledger-reconciliation",
      "fintech-q3-db-isolation-levels-msq",
      "algo-q1-median-stream",
      "cloud-q1-distributed-lru"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror CoinDCX's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "flipkart-oa",
    "companyId": "flipkart",
    "title": "Flipkart SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "flipkart-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Flipkart's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Representative simulation",
    "questionIds": [
      "fintech-q2-sliding-window-fraud-detector",
      "tcs-q4-sql-subquery-mcq",
      "startup-q2-cart-item-inventory-lock",
      "startup-q4-sql-window-func-mcq"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Flipkart's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "swiggy-oa",
    "companyId": "swiggy",
    "title": "Swiggy SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "swiggy-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Swiggy's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Representative simulation",
    "questionIds": [
      "startup-q3-debug-sliding-window",
      "uber-q1-matrix-rider-dispatch",
      "algo-q4-trap-rainwater-histogram",
      "startup-q1-surge-pricing-interval"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Swiggy's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "zomato-oa",
    "companyId": "zomato",
    "title": "Zomato SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "zomato-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Zomato's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "startup-q3-debug-sliding-window",
      "uber-q1-matrix-rider-dispatch",
      "algo-q4-trap-rainwater-histogram",
      "startup-q1-surge-pricing-interval"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Zomato's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "meesho-oa",
    "companyId": "meesho",
    "title": "Meesho SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "meesho-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Meesho's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "startup-q2-cart-item-inventory-lock",
      "startup-q4-sql-window-func-mcq",
      "fintech-q2-sliding-window-fraud-detector",
      "tcs-q4-sql-subquery-mcq"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Meesho's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "zepto-oa",
    "companyId": "zepto",
    "title": "Zepto SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "zepto-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Zepto's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "startup-q3-debug-sliding-window",
      "uber-q1-matrix-rider-dispatch",
      "algo-q4-trap-rainwater-histogram",
      "startup-q1-surge-pricing-interval"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Zepto's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "dream11-oa",
    "companyId": "dream11",
    "title": "Dream11 (Dream Sports) SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "dream11-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Dream11 (Dream Sports)'s Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "startup-q4-sql-window-func-mcq",
      "fintech-q2-sliding-window-fraud-detector",
      "tcs-q4-sql-subquery-mcq",
      "startup-q2-cart-item-inventory-lock"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Dream11 (Dream Sports)'s documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "blinkit-oa",
    "companyId": "blinkit",
    "title": "Blinkit SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "blinkit-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Blinkit's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "fintech-q2-sliding-window-fraud-detector",
      "tcs-q4-sql-subquery-mcq",
      "startup-q2-cart-item-inventory-lock",
      "startup-q4-sql-window-func-mcq"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Blinkit's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "urbancompany-oa",
    "companyId": "urbancompany",
    "title": "Urban Company SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "urbancompany-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Urban Company's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "tcs-q4-sql-subquery-mcq",
      "startup-q2-cart-item-inventory-lock",
      "startup-q4-sql-window-func-mcq",
      "fintech-q2-sliding-window-fraud-detector"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Urban Company's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "ola-oa",
    "companyId": "ola",
    "title": "Ola Cabs & Ola Electric SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "ola-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Ola Cabs & Ola Electric's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "uber-q1-matrix-rider-dispatch",
      "algo-q4-trap-rainwater-histogram",
      "startup-q1-surge-pricing-interval",
      "startup-q3-debug-sliding-window"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Ola Cabs & Ola Electric's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "nykaa-oa",
    "companyId": "nykaa",
    "title": "Nykaa SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "nykaa-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Nykaa's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "uber-q1-matrix-rider-dispatch",
      "algo-q4-trap-rainwater-histogram",
      "startup-q1-surge-pricing-interval",
      "startup-q3-debug-sliding-window"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Nykaa's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "makemytrip-oa",
    "companyId": "makemytrip",
    "title": "MakeMyTrip SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "makemytrip-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for MakeMyTrip's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "startup-q4-sql-window-func-mcq",
      "fintech-q2-sliding-window-fraud-detector",
      "tcs-q4-sql-subquery-mcq",
      "startup-q2-cart-item-inventory-lock"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror MakeMyTrip's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "delhivery-oa",
    "companyId": "delhivery",
    "title": "Delhivery SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "delhivery-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Delhivery's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "uber-q1-matrix-rider-dispatch",
      "algo-q4-trap-rainwater-histogram",
      "startup-q1-surge-pricing-interval",
      "startup-q3-debug-sliding-window"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Delhivery's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "inmobi-oa",
    "companyId": "inmobi",
    "title": "InMobi SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "inmobi-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for InMobi's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "algo-q4-trap-rainwater-histogram",
      "startup-q1-surge-pricing-interval",
      "startup-q3-debug-sliding-window",
      "uber-q1-matrix-rider-dispatch"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror InMobi's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "sharechat-oa",
    "companyId": "sharechat",
    "title": "ShareChat (Mohalla Tech) SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "sharechat-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for ShareChat (Mohalla Tech)'s Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "startup-q4-sql-window-func-mcq",
      "fintech-q2-sliding-window-fraud-detector",
      "tcs-q4-sql-subquery-mcq",
      "startup-q2-cart-item-inventory-lock"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror ShareChat (Mohalla Tech)'s documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "cars24-oa",
    "companyId": "cars24",
    "title": "Cars24 SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "cars24-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Cars24's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "tcs-q4-sql-subquery-mcq",
      "startup-q2-cart-item-inventory-lock",
      "startup-q4-sql-window-func-mcq",
      "fintech-q2-sliding-window-fraud-detector"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Cars24's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "porter-oa",
    "companyId": "porter",
    "title": "Porter SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "porter-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Porter's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "uber-q1-matrix-rider-dispatch",
      "algo-q4-trap-rainwater-histogram",
      "startup-q1-surge-pricing-interval",
      "startup-q3-debug-sliding-window"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Porter's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "licious-oa",
    "companyId": "licious",
    "title": "Licious SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "licious-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Licious's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "startup-q1-surge-pricing-interval",
      "startup-q3-debug-sliding-window",
      "uber-q1-matrix-rider-dispatch",
      "algo-q4-trap-rainwater-histogram"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Licious's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "curefit-oa",
    "companyId": "curefit",
    "title": "Cult.fit (Curefit) SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "curefit-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Cult.fit (Curefit)'s Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "startup-q3-debug-sliding-window",
      "uber-q1-matrix-rider-dispatch",
      "algo-q4-trap-rainwater-histogram",
      "startup-q1-surge-pricing-interval"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Cult.fit (Curefit)'s documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "infosys-oa",
    "companyId": "infosys",
    "title": "Infosys SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "infosys-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 100,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Infosys's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Representative simulation",
    "questionIds": [
      "debug-q2-linked-list-cycle",
      "tcs-q2-knapsack-variant",
      "tcs-q4-sql-subquery-mcq",
      "tcs-q6-logic-series-aptitude",
      "core-q-short-binary-tree-leaves"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Infosys's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "wipro-oa",
    "companyId": "wipro",
    "title": "Wipro SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "wipro-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 100,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Wipro's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Representative simulation",
    "questionIds": [
      "campus-q4-logical-syllogism-mcq",
      "debug-q2-linked-list-cycle",
      "tcs-q2-knapsack-variant",
      "tcs-q4-sql-subquery-mcq"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Wipro's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "hcltech-oa",
    "companyId": "hcltech",
    "title": "HCLTech SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "hcltech-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 100,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for HCLTech's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "debug-q2-linked-list-cycle",
      "tcs-q2-knapsack-variant",
      "tcs-q4-sql-subquery-mcq",
      "tcs-q6-logic-series-aptitude"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror HCLTech's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "cognizant-oa",
    "companyId": "cognizant",
    "title": "Cognizant SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "cognizant-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 100,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Cognizant's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "tcs-q2-knapsack-variant",
      "tcs-q4-sql-subquery-mcq",
      "tcs-q6-logic-series-aptitude",
      "campus-q2-tcp-udp-msq"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Cognizant's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "accenture-oa",
    "companyId": "accenture",
    "title": "Accenture SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "accenture-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 100,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Accenture's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "campus-q1-pseudocode-loop",
      "campus-q3-speed-train-aptitude",
      "quant-q2-work-rate-aptitude",
      "tcs-q1-prime-matrix-traversal"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Accenture's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "capgemini-oa",
    "companyId": "capgemini",
    "title": "Capgemini SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "capgemini-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 100,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Capgemini's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "tcs-q6-logic-series-aptitude",
      "campus-q2-tcp-udp-msq",
      "campus-q4-logical-syllogism-mcq",
      "debug-q2-linked-list-cycle"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Capgemini's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "persistent-oa",
    "companyId": "persistent",
    "title": "Persistent Systems SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "persistent-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 100,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Persistent Systems's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "tcs-q2-knapsack-variant",
      "tcs-q4-sql-subquery-mcq",
      "tcs-q6-logic-series-aptitude",
      "campus-q2-tcp-udp-msq"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Persistent Systems's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "ltimindtree-oa",
    "companyId": "ltimindtree",
    "title": "LTIMindtree SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "ltimindtree-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 100,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for LTIMindtree's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "campus-q4-logical-syllogism-mcq",
      "debug-q2-linked-list-cycle",
      "tcs-q2-knapsack-variant",
      "tcs-q4-sql-subquery-mcq"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror LTIMindtree's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "techmahindra-oa",
    "companyId": "techmahindra",
    "title": "Tech Mahindra SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "techmahindra-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 100,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Tech Mahindra's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "campus-q3-speed-train-aptitude",
      "quant-q2-work-rate-aptitude",
      "tcs-q1-prime-matrix-traversal",
      "tcs-q3-c-pointer-output-trace"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Tech Mahindra's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "hexaware-oa",
    "companyId": "hexaware",
    "title": "Hexaware Technologies SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "hexaware-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 100,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Hexaware Technologies's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "tcs-q2-knapsack-variant",
      "tcs-q4-sql-subquery-mcq",
      "tcs-q6-logic-series-aptitude",
      "campus-q2-tcp-udp-msq"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Hexaware Technologies's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "mphasis-oa",
    "companyId": "mphasis",
    "title": "Mphasis SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "mphasis-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 100,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Mphasis's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "tcs-q2-knapsack-variant",
      "tcs-q4-sql-subquery-mcq",
      "tcs-q6-logic-series-aptitude",
      "campus-q2-tcp-udp-msq"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Mphasis's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "birlasoft-oa",
    "companyId": "birlasoft",
    "title": "Birlasoft SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "birlasoft-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 100,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Birlasoft's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "campus-q1-pseudocode-loop",
      "campus-q3-speed-train-aptitude",
      "quant-q2-work-rate-aptitude",
      "tcs-q1-prime-matrix-traversal"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Birlasoft's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "coforge-oa",
    "companyId": "coforge",
    "title": "Coforge SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "coforge-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 100,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Coforge's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "campus-q4-logical-syllogism-mcq",
      "debug-q2-linked-list-cycle",
      "tcs-q2-knapsack-variant",
      "tcs-q4-sql-subquery-mcq"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Coforge's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "dxc-oa",
    "companyId": "dxc",
    "title": "DXC Technology SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "dxc-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 100,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for DXC Technology's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "campus-q2-tcp-udp-msq",
      "campus-q4-logical-syllogism-mcq",
      "debug-q2-linked-list-cycle",
      "tcs-q2-knapsack-variant"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror DXC Technology's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "ibm-oa",
    "companyId": "ibm",
    "title": "IBM SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "ibm-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for IBM's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "tcs-q5-quant-probability-aptitude",
      "campus-q4-logical-syllogism-mcq",
      "data-q2-variance-stats-mcq",
      "startup-q4-sql-window-func-mcq"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror IBM's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "deloitte-oa",
    "companyId": "deloitte",
    "title": "Deloitte (USI / India) SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "deloitte-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Deloitte (USI / India)'s Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "tcs-q5-quant-probability-aptitude",
      "campus-q4-logical-syllogism-mcq",
      "data-q2-variance-stats-mcq",
      "startup-q4-sql-window-func-mcq"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Deloitte (USI / India)'s documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "exl-oa",
    "companyId": "exl",
    "title": "EXL Service SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "exl-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for EXL Service's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "data-q1-customer-retention-cohort",
      "tcs-q4-sql-subquery-mcq",
      "tcs-q5-quant-probability-aptitude",
      "campus-q4-logical-syllogism-mcq"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror EXL Service's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "genpact-oa",
    "companyId": "genpact",
    "title": "Genpact SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "genpact-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Genpact's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "startup-q4-sql-window-func-mcq",
      "tcs-q6-logic-series-aptitude",
      "data-q1-customer-retention-cohort",
      "tcs-q4-sql-subquery-mcq"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Genpact's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "pwc-oa",
    "companyId": "pwc",
    "title": "PwC Technology SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "pwc-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for PwC Technology's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "data-q2-variance-stats-mcq",
      "startup-q4-sql-window-func-mcq",
      "tcs-q6-logic-series-aptitude",
      "data-q1-customer-retention-cohort"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror PwC Technology's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "ey-oa",
    "companyId": "ey",
    "title": "EY Technology (GDS) SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "ey-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for EY Technology (GDS)'s Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "tcs-q6-logic-series-aptitude",
      "data-q1-customer-retention-cohort",
      "tcs-q4-sql-subquery-mcq",
      "tcs-q5-quant-probability-aptitude"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror EY Technology (GDS)'s documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "kpmg-oa",
    "companyId": "kpmg",
    "title": "KPMG India & KGS SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "kpmg-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for KPMG India & KGS's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "tcs-q5-quant-probability-aptitude",
      "campus-q4-logical-syllogism-mcq",
      "data-q2-variance-stats-mcq",
      "startup-q4-sql-window-func-mcq"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror KPMG India & KGS's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "musigma-oa",
    "companyId": "musigma",
    "title": "Mu Sigma SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "musigma-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Mu Sigma's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "campus-q4-logical-syllogism-mcq",
      "data-q2-variance-stats-mcq",
      "startup-q4-sql-window-func-mcq",
      "tcs-q6-logic-series-aptitude"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Mu Sigma's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "fractal-oa",
    "companyId": "fractal",
    "title": "Fractal Analytics SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "fractal-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Fractal Analytics's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "tcs-q6-logic-series-aptitude",
      "data-q1-customer-retention-cohort",
      "tcs-q4-sql-subquery-mcq",
      "tcs-q5-quant-probability-aptitude"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Fractal Analytics's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "tigeranalytics-oa",
    "companyId": "tigeranalytics",
    "title": "Tiger Analytics SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "tigeranalytics-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Tiger Analytics's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "tcs-q4-sql-subquery-mcq",
      "tcs-q5-quant-probability-aptitude",
      "campus-q4-logical-syllogism-mcq",
      "data-q2-variance-stats-mcq"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Tiger Analytics's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "latentview-oa",
    "companyId": "latentview",
    "title": "LatentView Analytics SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "latentview-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for LatentView Analytics's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "campus-q4-logical-syllogism-mcq",
      "data-q2-variance-stats-mcq",
      "startup-q4-sql-window-func-mcq",
      "tcs-q6-logic-series-aptitude"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror LatentView Analytics's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "zs-oa",
    "companyId": "zs",
    "title": "ZS Associates SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "zs-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for ZS Associates's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "campus-q4-logical-syllogism-mcq",
      "data-q2-variance-stats-mcq",
      "startup-q4-sql-window-func-mcq",
      "tcs-q6-logic-series-aptitude"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror ZS Associates's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "mckinseytech-oa",
    "companyId": "mckinseytech",
    "title": "McKinsey Digital SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "mckinseytech-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for McKinsey Digital's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "campus-q4-logical-syllogism-mcq",
      "data-q2-variance-stats-mcq",
      "startup-q4-sql-window-func-mcq",
      "tcs-q6-logic-series-aptitude"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror McKinsey Digital's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "qualcomm-oa",
    "companyId": "qualcomm",
    "title": "Qualcomm SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "qualcomm-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Qualcomm's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Representative simulation",
    "questionIds": [
      "dbms-q1-bplus-tree-mcq",
      "sys-q2-c-struct-padding-trace",
      "sys-q4-network-handshake-tcp-msq",
      "msft-q4-cs-os-virtual-memory"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Qualcomm's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "amd-oa",
    "companyId": "amd",
    "title": "AMD SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "amd-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for AMD's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Representative simulation",
    "questionIds": [
      "sys-q1-bit-manipulation-mask",
      "sys-q3-cpu-cache-l1-l2-mcq",
      "apple-q1-endianness-trace",
      "msft-q5-cs-concurrency-deadlock"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror AMD's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "intel-oa",
    "companyId": "intel",
    "title": "Intel SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "intel-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Intel's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Representative simulation",
    "questionIds": [
      "sys-q1-bit-manipulation-mask",
      "sys-q3-cpu-cache-l1-l2-mcq",
      "apple-q1-endianness-trace",
      "msft-q5-cs-concurrency-deadlock"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Intel's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "arm-oa",
    "companyId": "arm",
    "title": "Arm SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "arm-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Arm's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "msft-q4-cs-os-virtual-memory",
      "campus-q2-tcp-udp-msq",
      "sys-q1-bit-manipulation-mask",
      "sys-q3-cpu-cache-l1-l2-mcq"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Arm's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "redhat-oa",
    "companyId": "redhat",
    "title": "Red Hat SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "redhat-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Red Hat's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "sys-q3-cpu-cache-l1-l2-mcq",
      "apple-q1-endianness-trace",
      "msft-q5-cs-concurrency-deadlock",
      "dbms-q1-bplus-tree-mcq"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Red Hat's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "nutanix-oa",
    "companyId": "nutanix",
    "title": "Nutanix SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "nutanix-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Nutanix's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "sys-q2-c-struct-padding-trace",
      "sys-q4-network-handshake-tcp-msq",
      "msft-q4-cs-os-virtual-memory",
      "campus-q2-tcp-udp-msq"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Nutanix's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "paloalto-oa",
    "companyId": "paloalto",
    "title": "Palo Alto Networks SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "paloalto-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Palo Alto Networks's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "msft-q4-cs-os-virtual-memory",
      "campus-q2-tcp-udp-msq",
      "sys-q1-bit-manipulation-mask",
      "sys-q3-cpu-cache-l1-l2-mcq"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Palo Alto Networks's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "fortinet-oa",
    "companyId": "fortinet",
    "title": "Fortinet SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "fortinet-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Fortinet's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "sys-q3-cpu-cache-l1-l2-mcq",
      "apple-q1-endianness-trace",
      "msft-q5-cs-concurrency-deadlock",
      "dbms-q1-bplus-tree-mcq"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Fortinet's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "crowdstrike-oa",
    "companyId": "crowdstrike",
    "title": "CrowdStrike SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "crowdstrike-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for CrowdStrike's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "apple-q1-endianness-trace",
      "msft-q5-cs-concurrency-deadlock",
      "dbms-q1-bplus-tree-mcq",
      "sys-q2-c-struct-padding-trace"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror CrowdStrike's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "zscaler-oa",
    "companyId": "zscaler",
    "title": "Zscaler SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "zscaler-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Zscaler's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "sys-q1-bit-manipulation-mask",
      "sys-q3-cpu-cache-l1-l2-mcq",
      "apple-q1-endianness-trace",
      "msft-q5-cs-concurrency-deadlock"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Zscaler's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "broadcom-oa",
    "companyId": "broadcom",
    "title": "Broadcom SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "broadcom-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Broadcom's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "sys-q3-cpu-cache-l1-l2-mcq",
      "apple-q1-endianness-trace",
      "msft-q5-cs-concurrency-deadlock",
      "dbms-q1-bplus-tree-mcq"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Broadcom's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "ti-oa",
    "companyId": "ti",
    "title": "Texas Instruments (TI) SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "ti-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Texas Instruments (TI)'s Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "msft-q4-cs-os-virtual-memory",
      "campus-q2-tcp-udp-msq",
      "sys-q1-bit-manipulation-mask",
      "sys-q3-cpu-cache-l1-l2-mcq"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Texas Instruments (TI)'s documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "synopsys-oa",
    "companyId": "synopsys",
    "title": "Synopsys SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "synopsys-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Synopsys's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "sys-q3-cpu-cache-l1-l2-mcq",
      "apple-q1-endianness-trace",
      "msft-q5-cs-concurrency-deadlock",
      "dbms-q1-bplus-tree-mcq"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Synopsys's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "cadence-oa",
    "companyId": "cadence",
    "title": "Cadence Design Systems SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "cadence-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Cadence Design Systems's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "msft-q4-cs-os-virtual-memory",
      "campus-q2-tcp-udp-msq",
      "sys-q1-bit-manipulation-mask",
      "sys-q3-cpu-cache-l1-l2-mcq"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Cadence Design Systems's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "westerndigital-oa",
    "companyId": "westerndigital",
    "title": "Western Digital SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "westerndigital-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Western Digital's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "campus-q2-tcp-udp-msq",
      "sys-q1-bit-manipulation-mask",
      "sys-q3-cpu-cache-l1-l2-mcq",
      "apple-q1-endianness-trace"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Western Digital's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "seagate-oa",
    "companyId": "seagate",
    "title": "Seagate Technology SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "seagate-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Seagate Technology's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "sys-q2-c-struct-padding-trace",
      "sys-q4-network-handshake-tcp-msq",
      "msft-q4-cs-os-virtual-memory",
      "campus-q2-tcp-udp-msq"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Seagate Technology's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "vmware-oa",
    "companyId": "vmware",
    "title": "VMware (Broadcom) SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "vmware-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for VMware (Broadcom)'s Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "sys-q2-c-struct-padding-trace",
      "sys-q4-network-handshake-tcp-msq",
      "msft-q4-cs-os-virtual-memory",
      "campus-q2-tcp-udp-msq"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror VMware (Broadcom)'s documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "walmart-oa",
    "companyId": "walmart",
    "title": "Walmart Global Tech SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "walmart-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Walmart Global Tech's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Representative simulation",
    "questionIds": [
      "gec-q1-circuit-breaker-pattern",
      "cloud-q1-distributed-lru",
      "concur-q1-thread-pool-mcq",
      "fintech-q1-ledger-reconciliation"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Walmart Global Tech's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "barclays-oa",
    "companyId": "barclays",
    "title": "Barclays SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "barclays-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Barclays's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "gec-q2-trading-moving-average",
      "algo-q1-median-stream",
      "dbms-q1-bplus-tree-mcq",
      "amz-q1-warehouse-routing"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Barclays's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "ubs-oa",
    "companyId": "ubs",
    "title": "UBS SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "ubs-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for UBS's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "cloud-q1-distributed-lru",
      "concur-q1-thread-pool-mcq",
      "fintech-q1-ledger-reconciliation",
      "gec-q1-circuit-breaker-pattern"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror UBS's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "siemens-oa",
    "companyId": "siemens",
    "title": "Siemens Technology SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "siemens-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Siemens Technology's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "concur-q1-thread-pool-mcq",
      "fintech-q1-ledger-reconciliation",
      "gec-q1-circuit-breaker-pattern",
      "cloud-q1-distributed-lru"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Siemens Technology's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "bosch-oa",
    "companyId": "bosch",
    "title": "Bosch Global Software Technologies (BGSW) SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "bosch-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Bosch Global Software Technologies (BGSW)'s Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "amz-q1-warehouse-routing",
      "gec-q2-trading-moving-average",
      "algo-q1-median-stream",
      "dbms-q1-bplus-tree-mcq"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Bosch Global Software Technologies (BGSW)'s documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "expedia-oa",
    "companyId": "expedia",
    "title": "Expedia Group SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "expedia-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Expedia Group's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "gec-q1-circuit-breaker-pattern",
      "cloud-q1-distributed-lru",
      "concur-q1-thread-pool-mcq",
      "fintech-q1-ledger-reconciliation"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Expedia Group's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "morganstanley-oa",
    "companyId": "morganstanley",
    "title": "Morgan Stanley SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "morganstanley-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Morgan Stanley's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "concur-q1-thread-pool-mcq",
      "fintech-q1-ledger-reconciliation",
      "gec-q1-circuit-breaker-pattern",
      "cloud-q1-distributed-lru"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Morgan Stanley's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "goldmansachs-oa",
    "companyId": "goldmansachs",
    "title": "Goldman Sachs SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "goldmansachs-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Goldman Sachs's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Representative simulation",
    "questionIds": [
      "concur-q1-thread-pool-mcq",
      "fintech-q1-ledger-reconciliation",
      "gec-q1-circuit-breaker-pattern",
      "cloud-q1-distributed-lru"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Goldman Sachs's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "jpmorgan-oa",
    "companyId": "jpmorgan",
    "title": "JPMorgan Chase SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "jpmorgan-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for JPMorgan Chase's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "fintech-q1-ledger-reconciliation",
      "gec-q1-circuit-breaker-pattern",
      "cloud-q1-distributed-lru",
      "concur-q1-thread-pool-mcq"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror JPMorgan Chase's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "amex-oa",
    "companyId": "amex",
    "title": "American Express SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "amex-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for American Express's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "algo-q1-median-stream",
      "dbms-q1-bplus-tree-mcq",
      "amz-q1-warehouse-routing",
      "gec-q2-trading-moving-average"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror American Express's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "wellsfargo-oa",
    "companyId": "wellsfargo",
    "title": "Wells Fargo India SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "wellsfargo-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Wells Fargo India's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "fintech-q1-ledger-reconciliation",
      "gec-q1-circuit-breaker-pattern",
      "cloud-q1-distributed-lru",
      "concur-q1-thread-pool-mcq"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Wells Fargo India's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "target-oa",
    "companyId": "target",
    "title": "Target Technology Services SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "target-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Target Technology Services's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "amz-q1-warehouse-routing",
      "gec-q2-trading-moving-average",
      "algo-q1-median-stream",
      "dbms-q1-bplus-tree-mcq"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Target Technology Services's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "lowes-oa",
    "companyId": "lowes",
    "title": "Lowe's India SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "lowes-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Lowe's India's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "cloud-q1-distributed-lru",
      "concur-q1-thread-pool-mcq",
      "fintech-q1-ledger-reconciliation",
      "gec-q1-circuit-breaker-pattern"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Lowe's India's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "philips-oa",
    "companyId": "philips",
    "title": "Philips HealthTech SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "philips-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Philips HealthTech's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "gec-q2-trading-moving-average",
      "algo-q1-median-stream",
      "dbms-q1-bplus-tree-mcq",
      "amz-q1-warehouse-routing"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Philips HealthTech's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "rakuten-oa",
    "companyId": "rakuten",
    "title": "Rakuten India SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "rakuten-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Rakuten India's Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "cloud-q1-distributed-lru",
      "concur-q1-thread-pool-mcq",
      "fintech-q1-ledger-reconciliation",
      "gec-q1-circuit-breaker-pattern"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Rakuten India's documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  },
  {
    "id": "mercedes-oa",
    "companyId": "mercedes",
    "title": "Mercedes-Benz R&D India (MBRDI) SDE Recruitment Simulation",
    "roleLevel": "Software Development Engineer (Campus / Early Career)",
    "trackId": "mercedes-sde",
    "simulationType": "Timed Recruitment Simulation",
    "platformStyle": "HackerRank / Mettl Style (4 Questions)",
    "durationMinutes": 90,
    "totalMarks": 100,
    "benchmarkPassingScore": 70,
    "benchmarkLabel": "Platform Benchmark (Target >= 70%)",
    "description": "Original recruitment simulation tailored for Mercedes-Benz R&D India (MBRDI)'s Software Development Engineer (Campus / Early Career) track. Evaluates practical problem solving, technical depth, and domain engineering concepts.",
    "evidenceType": "Estimated simulation",
    "questionIds": [
      "gec-q1-circuit-breaker-pattern",
      "cloud-q1-distributed-lru",
      "concur-q1-thread-pool-mcq",
      "fintech-q1-ledger-reconciliation"
    ],
    "categoryBreakdown": {
      "Domain Problem Solving": 3,
      "Technical Fundamentals": 1
    },
    "instructions": [
      "This practice assessment is tailored to mirror Mercedes-Benz R&D India (MBRDI)'s documented screening requirements.",
      "Objective questions are scored deterministically upon submission.",
      "For coding questions, provide self-review evaluation against the provided test cases after completion.",
      "Once the countdown timer reaches 00:00, your answers are submitted automatically."
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ASSESSMENT_SETS };
}
