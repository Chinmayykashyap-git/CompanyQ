# CompanyQ — SDE Recruitment Intelligence & Realistic OA Simulator

CompanyQ is a company-first recruitment intelligence database and online assessment simulator for software engineering candidates, specifically engineered for university students, new graduates, and SDE-1 applicants targeting top technology employers.

Unlike generic algorithm problem catalogues, CompanyQ maps the documented recruitment stages, question formats, and timeline variations of **132 tech employers**, backed by verified sources and transparent uncertainty indicators.

Every single company profile has a dedicated, functioning mock online assessment (**132/132 mock OA coverage**) with 100% referential integrity, deterministic objective scoring, and targeted weak-topic practice drills.

---

## ⚡ Quick Start: Running Locally

CompanyQ is built using standard **HTML5, CSS3, and Vanilla JavaScript** with zero external build tools, bundlers, or runtime dependencies. It runs immediately on any modern browser.

### Option 1: Python Static Server (Recommended)
From the project root directory:
```bash
# Python 3
python -m http.server 8000
```
Then open your browser at:
`http://localhost:8000`

### Option 2: Node.js / npx serve
```bash
npx serve -l 8000 .
```

### Option 3: Direct File Opening
Open `index.html` directly in any modern web browser (Chrome, Edge, Firefox, Safari). All assets use relative paths and client-side hash routing (`#`), allowing the application to work cleanly even under the `file://` protocol.

---

## 🌐 Free GitHub Pages Deployment

CompanyQ is engineered specifically for static web hosting with zero server-side build steps:

1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "CompanyQ SDE Simulator 9.5 Release"
   git remote add origin https://github.com/<your-username>/companyq.git
   git push -u origin main
   ```
2. In your GitHub repository:
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, select **Deploy from a branch**.
   - Under **Branch**, select `main` / `(root)` and click **Save**.
3. Within minutes, your free simulator is live at:
   `https://<your-username>.github.io/companyq/`

Because CompanyQ uses purely relative asset paths (`css/styles.css`, `data/...`, `js/...`) and hash-based routing (`#directory`, `#profile/:id`, `#simulator/:id`, `#drill`), it functions flawlessly on subpath deployments like GitHub Pages with no routing rewrite configuration required.

---

## 🚀 Key Features

### 1. 100% Mock OA Coverage (132 Dedicated Assessments)
- Every single company in the 132-employer dataset has a dedicated mock assessment entry point.
- Zero broken links, zero orphaned assessment sets, and zero duplicates.
- Authentic duration (45 to 120 minutes) and 100-mark scoring per assessment.
- Clear evidence badges on every assessment:
  - **Verified format (5 sets):** Amazon, Google, Microsoft, Meta, TCS.
  - **Representative simulation (19 sets):** Uber, Atlassian, Adobe, NVIDIA, Flipkart, Swiggy, Zomato, PhonePe, Razorpay, Infosys, Wipro, Accenture, Cognizant, Capgemini, Goldman Sachs, Morgan Stanley, Qualcomm, ServiceNow, Stripe.
  - **Estimated simulation (108 sets):** Domain-aligned practice tests based on standard requirements for the role track (high-throughput systems, financial precision, distributed state machines, etc.).

### 2. Comprehensive Question Bank (65 Rich Questions Across 7 Question Types)
- Diverse question types reflecting actual industry testing platform formats:
  - **Algorithmic Coding:** Dynamic programming, graphs, sliding windows, heaps, trees.
  - **SQL Queries:** Second highest salary with window functions (`DENSE_RANK`), double-entry ledger balance reconciliation (`HAVING` aggregations).
  - **Complexity Analysis:** Master Theorem asymptotic recurrences, geometric step nested loop analysis.
  - **Short-Answer / Numeric:** Full binary tree leaf calculation invariant, TCP connection teardown segment count.
  - **SaaS & Cloud Systems:** Bitbucket pipeline DAG cycle detection, sliding window rate limiters.
  - **Fintech & Payments:** Double-entry ledger reconciliation, transaction velocity fraud detection.
  - **Startup Logistics:** Delivery assignment cost minimization, warehouse dispatch scheduling.
  - **Campus & IT Services:** C/C++ pointer memory tracing, quantitative aptitude, logical syllogisms.
  - **Core CS Fundamentals:** Multi-select (MSQ) and single-select (MCQ) questions spanning OS virtual memory, DBMS ACID isolation levels, and TCP/IP networking.

### 3. Realistic Assessment Simulator Engine
- **Pre-Assessment Instructions:** Review employer format, evidence classification, question distribution, and scoring rules before starting.
- **Timed vs Untimed Practice Modes:**
  - *Timed Recruitment Mode:* Authentic countdown timer with 5-minute warning banner and automatic submission.
  - *Untimed Practice Mode:* Practice at your own pace with elapsed timer, pause/resume, and zero time pressure.
- **In-Browser JavaScript Test Runner:** For JavaScript solutions, execute your code safely inside the browser against public and hidden test cases with execution time measurement!
- **Multi-Language Syntax Support:** Python 3, JavaScript, Java, C++ with Tab key indentation, reset template, and post-submission criteria self-review.
- **Question Navigation Palette:** Live state indicators (Current, Answered, Unanswered, Marked for Review).
- **Keyboard Shortcuts:** `Alt + N` for Next Question, `Alt + P` for Previous Question, `Alt + M` to toggle Mark for Review.
- **Submission Confirmation Modal:** Interactive modal displaying count of answered, unanswered, and marked questions with warning before final submit.
- **Answer Autosave:** Active sessions survive accidental tab closes or page refreshes via `localStorage`.
- **Granular Results Report:**
  - Score circle (% and raw marks) with platform benchmark comparison.
  - Skills to Revisit callout with a one-click **"Drill Missed Questions"** button.
  - Question-by-question breakdown with optimal algorithmic approaches.
  - Explanation of why the correct answer is correct and common misconceptions.

### 4. Targeted Weak-Topic Review Drills (`#drill`)
- Turn mistakes into measurable improvement:
  - Launch a targeted drill session composed exclusively of questions you previously answered incorrectly.
  - Filter drills by specific skill (e.g. `#drill?topic=Dynamic%20Programming`, `#drill?topic=SQL`).
  - Practice in untimed mode with immediate solution review.

### 5. Personal Dashboard & Skill Analytics
- Calculated live metrics: Total employers (132), available mock sets (132), completed mocks, and actual average score.
- **Topic Mastery Analysis:** Strengths (>70% accuracy) and Weaknesses with visual progress bars and one-click topic practice links.
- **Sample Confidence Indicator:** Transparently identifies whether statistics are preliminary (1-2 attempts) or confident (5+ attempts).
- Dynamic empty state when no mocks are recorded; zero invented statistics.
- "Continue Practicing" banner pointing to your current active attempt, missed questions drill, or next recommended mock.
- Recently viewed companies row hydrated from local browsing history.

### 6. Local-First Privacy & Backup (Export / Import)
- **100% Free Guest Mode:** No account, registration, or credit card required.
- All candidate data (attempts, bookmarks, session, theme, question history) is stored privately in the user's browser `localStorage`.
- **Export Progress:** One-click backup of all personal history and bookmarks to a timestamped JSON file (`companyq_progress_backup_<timestamp>.json`).
- **Import Progress:** Restore or transfer progress across browsers with strict schema validation and error handling.
- **Clear Progress:** Two-step confirmation modal with clear explanation of browser erasure.

### 7. Accessible Light & Dark Mode
- Top-level navigation toggle accessible via button with Sun/Moon icons and keyboard support.
- Anti-flash inline script in `<head>` applies `data-theme` before initial paint, preventing blinding flashes.
- Preference stored in `localStorage` under `companyq_theme_v1` with automatic fallback to system `prefers-color-scheme`.
- High-contrast, WCAG 2.1 AA compliant styling across both themes.

### 8. Company Directory & Stage Timelines
- 132 deduplicated employers across 8 hiring categories.
- Multi-faceted filtering by category, hiring track (Internship, Campus, Off-Campus), and confidence tier.
- Sorting by Name, Verification Confidence, and Documented Stages.
- Step-by-step recruitment stage timeline with verified duration, question count, and assessed skills.
- Transparent uncertainty notices: campus tier differences, team-specific variations, and off-campus channels.
- Direct external source citations linking to official careers portals and university hiring programs.

### 9. Subsequent Interview Preparation
- Modules for rounds that follow the online assessment:
  - Live Coding & DSA (communicating thought process, clarifying constraints, time/space trade-offs)
  - Low-Level Design / LLD (SOLID principles, design patterns, modular architecture)
  - Core CS Fundamentals (Operating Systems, DBMS B+ trees, Computer Networks TCP/IP)
  - Behavioral Interviews (STAR method, Amazon Leadership Principles, conflict resolution)
- Interviewer scoring rubrics with weights and practical candidate tips.

---

## 📁 Project Architecture

```
OA/
├── index.html                   # Semantic Single Page Application shell + Anti-flash theme loader
├── css/
│   └── styles.css               # Accessible design system with Light & Dark theme tokens
├── js/
│   ├── app.js                   # Client-side hash router (#dashboard, #directory, #simulator, #drill, #progress)
│   ├── storage.js               # LocalStorage manager v2 (history, topic stats, backup export/import)
│   ├── dashboard.js             # Live personal skill analytics, mastery bars, & continue-practice banner
│   ├── directory.js             # Employer directory, search, filter, sort
│   ├── profile.js               # Company recruitment stages & uncertainty timeline
│   ├── simulator.js             # Timed & untimed engine, JS runner, palette, submission modal, results report
│   ├── interview.js             # Subsequent interview stage prep & rubrics
│   ├── progress.js              # History logs, backup export/import, & progress reset
│   └── sources.js               # Research methodology & sources view
├── data/
│   ├── companies.js             # 132 deduplicated tech employers across 8 categories
│   ├── assessment-sets.js       # 132 complete mock OA simulations (100% coverage)
│   ├── questions.js             # 65 rich original questions across 7 question types
│   └── interview-prep.js        # Rubrics and practice for subsequent stages
├── docs/
│   ├── RESEARCH_MANIFEST.md     # Methodology, confidence tiers, and source register
│   ├── AUTHENTICATION.md        # Optional free Supabase Auth + GitHub OAuth specification
│   └── LIMITATIONS_AND_BACKEND_REQUIREMENTS.md  # Client-side vs production backend spec
├── test/
│   ├── validate_data.js         # Automated data integrity, 100% coverage, & referential check
│   ├── simulator_test.js        # 10 automated simulator, scoring, theme, export/import & logic tests
│   └── verify_html.js           # Asset script & stylesheet path verification
├── CONTRIBUTING.md              # Data schemas, contribution protocol, and future roadmap
├── LICENSE                      # Permissive MIT Open Source License
└── .gitignore                   # Standard exclusions for node, python, environment, and OS files
```

---

## 🧪 Automated Testing

CompanyQ includes a comprehensive, zero-dependency Node.js test suite to guarantee data integrity, accurate scoring, and runtime reliability:

```bash
# Run all automated tests
node test/validate_data.js
node test/simulator_test.js
node test/verify_html.js
```

### Verified Test Assertions:
1. **Initial Empty Stats:** Empty state recognized without fabricated data.
2. **Bookmarking Toggle:** Instant star toggle and persistence.
3. **Deterministic Assessment Scoring:** Full Amazon SDE-1 mock scored at 100/100 marks.
4. **Stats Recalculation:** Live metrics update from recorded attempts.
5. **Theme Preference:** Light/Dark mode toggling and local persistence.
6. **MSQ Deterministic Grading:** Strict completeness and arbitrary choice order handling.
7. **Coherence of All 132 Sets:** Every assessment has valid question mappings and realistic durations (45-120 min).
8. **Multi-Type Grading:** Deterministic evaluation verified for SQL clauses, Big-O complexity, and case-insensitive short-answer questions.
9. **Backup Export/Import:** JSON export serialization and strict schema validation on restore.
10. **Weak-Topic Analytics:** Missed question tracking and weak skill detection for targeted drills.
11. **HTML Asset Integrity:** All 13 JavaScript files and stylesheets verified on disk.
