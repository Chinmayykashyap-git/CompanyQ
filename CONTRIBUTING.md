# Contributing to CompanyQ

Thank you for your interest in improving CompanyQ! CompanyQ is a free, company-first recruitment intelligence platform and online assessment simulator for software engineering candidates, particularly focused on Indian campus recruitment, internships, and entry-level SDE-1 roles.

---

## 1. Principles & Non-Negotiable Constraints

1. **Zero Mandatory Cost:** The platform must remain 100% free to build, host, and use. No paid APIs, mandatory login walls, credit-card requirements, or closed database dependencies.
2. **Never Fabricate Data:**
   - Never invent proprietary cutoffs (e.g. claiming "Google requires 85% on its OA").
   - Never label original practice questions as "official leaks" or "actual leaked tests".
   - If a round duration, question count, or format varies across teams, state the uncertainty explicitly.
3. **Strict Evidence Labels:**
   - `Verified format`: Directly documented by primary company sources (careers guides, university recruitment packets).
   - `Representative simulation`: Reconstructed from verified multi-party candidate reports matching question style and platform conventions.
   - `Estimated simulation`: Original practice test designed for typical requirements of the role track when company screening varies by division.
4. **Local-First Privacy:** All user progress, bookmarks, and attempts are stored in the user's browser `localStorage` or exported as JSON.

---

## 2. Data Schemas

### A. Company Profile (`data/companies.js`)
```javascript
{
  id: "company-slug",              // String, lowercase kebab-case, unique
  name: "Company Name",            // String
  category: "Category Name",       // One of the 8 canonical categories
  aliases: ["Alt Name"],           // Array of Strings
  countryOrRegion: "HQ Location",  // String
  headquarters: "City, Country",   // String
  indiaOffices: ["Bengaluru"],     // Array of Strings
  overview: "Description...",      // String
  sourceUrls: ["https://..."],     // Array of valid URLs
  lastVerified: "YYYY-MM",         // String
  dataConfidence: "verified",      // "verified" | "community-reported"
  notes: "Key notes...",           // String
  roleTracks: [                    // Array of Tracks
    {
      trackId: "track-slug",
      title: "SDE-1 / Graduate",
      level: "Entry Level",
      stages: [
        {
          stageNumber: 1,
          name: "Online Assessment",
          roundType: "OA",
          durationMinutes: 90,     // Number or null
          questionCount: 2,        // Number or null
          skills: ["DSA", "Trees"] // Array of Strings
        }
      ]
    }
  ]
}
```

### B. Assessment Set (`data/assessment-sets.js`)
```javascript
{
  id: "company-slug-oa",           // String, unique (e.g., "amazon-sde-oa")
  companyId: "company-slug",       // Must exist in data/companies.js
  title: "Simulation Title",       // String
  roleLevel: "SDE-1 / Intern",     // String
  trackId: "track-slug",           // Must match roleTracks[].trackId
  simulationType: "Timed Recruitment Simulation",
  platformStyle: "HackerRank Style", // String
  durationMinutes: 90,             // Number (45 to 120)
  totalMarks: 100,                 // Number (standard 100 marks)
  benchmarkPassingScore: 70,       // Number (platform benchmark, target >= 70%)
  benchmarkLabel: "Platform Benchmark (Target >= 70%)",
  description: "Description...",   // String
  evidenceType: "Verified format", // "Verified format" | "Representative simulation" | "Estimated simulation"
  questionIds: [                   // Array of question IDs, min 2 questions
    "question-id-1",
    "question-id-2"
  ]
}
```

### C. Question Definition (`data/questions.js`)
```javascript
{
  id: "unique-question-id",        // String, unique kebab-case
  companyId: "company-slug",       // Primary company associated
  assessmentSetId: "company-oa",   // Primary assessment set
  roleLevel: "SDE-1 / Intern",     // String
  questionType: "coding",          // "coding" | "mcq" | "msq" | "debugging" | "output-prediction" | "sql" | "complexity" | "short-answer"
  title: "Question Title",         // String
  difficulty: "Medium",            // "Easy" | "Medium" | "Hard"
  estimatedTimeMinutes: 25,        // Number
  marks: 30,                       // Number (sum equals assessment total)
  prompt: "Markdown problem text", // String
  constraints: ["1 <= n <= 10^5"], // Array of Strings
  examples: [                      // Array of Example objects
    { input: "n = 5", output: "2", explanation: "..." }
  ],
  // If coding:
  starterCode: {
    python: "def solution():\n    pass\n",
    javascript: "function solution() {\n}\n",
    java: "class Solution {\n}\n",
    cpp: "class Solution {\n};\n"
  },
  testCases: [
    { id: "tc-1", input: "...", expectedOutput: "...", isHidden: false }
  ],
  // If objective (mcq / msq / complexity / debugging):
  objectiveOptions: ["Option A", "Option B", "Option C", "Option D"],
  correctAnswer: 0,                // Number index for single-choice; Array of indices for MSQ; String for short-answer
  // If sql:
  starterQuery: "SELECT ...",
  validationKeywords: ["SELECT", "FROM", "GROUP BY"],
  // Explanations:
  explanation: "Why this answer is optimal...",
  expectedApproach: "Greedy single-pass...",
  skillsAssessed: ["Dynamic Programming", "Arrays"],
  sourceOrInspiration: "Original Simulation",
  isOriginal: true,
  evidenceConfidence: "verified"
}
```

---

## 3. Contribution Workflow

1. Fork and clone the repository.
2. Create a branch: `git checkout -b feature/new-company-assessment`.
3. Add or update data in `data/companies.js`, `data/assessment-sets.js`, or `data/questions.js`.
4. Run the automated test suites:
   ```bash
   node test/validate_data.js
   node test/simulator_test.js
   node test/verify_html.js
   ```
5. Ensure 100% pass rate:
   - Zero duplicate IDs.
   - All 132 companies have active assessment mappings.
   - All question references resolve cleanly.
6. Commit with clear semantic commit messages and submit a Pull Request.

---

## 4. Planned Roadmap & Meaningful Improvements

- [ ] **Rich SQL WASM Sandbox**: Evaluate SQLite queries client-side in WebAssembly for deterministic database test suite execution.
- [ ] **Python Pyodide / Skulpt Runner**: Enable in-browser client-side Python execution without a remote server.
- [ ] **Company Interview Experiences Timeline**: Crowdsourced placement season interview journals verified by university placement cells.
- [ ] **Printable Assessment Summary PDF**: One-click export of assessment results report with rubric notes for resume/interview review.

