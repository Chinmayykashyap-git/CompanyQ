// js/landing.js — CompanyQ Large-Format Flagship Landing Page
// Bold visual identity, immersive hero section, realistic interactive product showcase,
// feature presentations, and prominent closing CTA.

const LandingPageView = {
  activeShowcaseTab: 'simulator', // 'simulator' | 'directory' | 'analytics'

  render(container) {
    container.innerHTML = `
      <div class="landing-container">
        
        <!-- Ambient Radial Background Glows -->
        <div class="landing-ambient-glow" aria-hidden="true"></div>

        <!-- 1. Hero Section -->
        <section class="landing-hero">
          
          <!-- Pre-headline Pill Badge -->
          <div class="hero-badge">
            <span class="hero-badge-dot"></span>
            <span class="hero-badge-text">132 Researched Employers · 132 Dedicated Mock OAs · 100% Free</span>
          </div>

          <!-- Hero Dominant Headline -->
          <h1 class="landing-hero-title">
            Your next engineering role starts with <span class="text-gradient">better preparation.</span>
          </h1>

          <!-- Supporting Text -->
          <p class="landing-hero-subtitle">
            Explore company-specific hiring information, practise realistic SDE online assessments, and build genuine confidence for your technical interview rounds.
          </p>

          <!-- Primary Actions -->
          <div class="hero-actions">
            <a href="#directory" class="btn btn-primary btn-hero-primary">
              Explore Companies
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
            <a href="#simulator/amazon-sde-oa" class="btn btn-secondary btn-hero-secondary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              Try a Mock Assessment
            </a>
          </div>

          <!-- Trust & Value Highlights -->
          <div class="hero-trust-bar">
            <div class="trust-item">
              <div class="trust-value">132</div>
              <div class="trust-label">Verified Tech Employers</div>
            </div>
            <div class="trust-divider"></div>
            <div class="trust-item">
              <div class="trust-value">100%</div>
              <div class="trust-label">Dedicated Mock OA Coverage</div>
            </div>
            <div class="trust-divider"></div>
            <div class="trust-item">
              <div class="trust-value">7 Formats</div>
              <div class="trust-label">Coding, SQL, Complexity, MSQs</div>
            </div>
            <div class="trust-divider"></div>
            <div class="trust-item">
              <div class="trust-value">0₹ / $0</div>
              <div class="trust-label">No Login or Subscription</div>
            </div>
          </div>
        </section>

        <!-- 2. Interactive Product Showcase Centerpiece -->
        <section class="landing-showcase-section">
          <div class="showcase-header-text">
            <span class="section-tag">Interactive Product Preview</span>
            <h2 class="landing-section-title">The developer-first assessment workspace</h2>
            <p class="landing-section-subtitle">
              Authentic simulation conditions tailored to documented employer hiring tracks. Toggle the preview below to inspect actual application screens.
            </p>
          </div>

          <!-- Desktop Browser Window Frame -->
          <div class="showcase-window">
            
            <!-- Window Topbar -->
            <div class="showcase-window-bar">
              <div class="showcase-dots">
                <span class="dot dot-red"></span>
                <span class="dot dot-yellow"></span>
                <span class="dot dot-green"></span>
              </div>
              
              <!-- Showcase Tab Switcher -->
              <div class="showcase-tabs" role="tablist">
                <button class="showcase-tab ${this.activeShowcaseTab === 'simulator' ? 'active' : ''}" data-tab="simulator" role="tab" aria-selected="${this.activeShowcaseTab === 'simulator'}">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                  <span>Assessment Simulator</span>
                </button>
                <button class="showcase-tab ${this.activeShowcaseTab === 'directory' ? 'active' : ''}" data-tab="directory" role="tab" aria-selected="${this.activeShowcaseTab === 'directory'}">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                  <span>Company Directory</span>
                </button>
                <button class="showcase-tab ${this.activeShowcaseTab === 'analytics' ? 'active' : ''}" data-tab="analytics" role="tab" aria-selected="${this.activeShowcaseTab === 'analytics'}">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                  <span>Score & Weak-Topic Analytics</span>
                </button>
              </div>

              <!-- Action Link -->
              <a href="#simulator/amazon-sde-oa" class="showcase-launch-link" title="Open full simulator">
                Launch Mock &rarr;
              </a>
            </div>

            <!-- Dynamic Showcase Body -->
            <div class="showcase-content">
              ${this.renderShowcaseContent()}
            </div>
          </div>

          <!-- Bottom Showcase Pill -->
          <div class="showcase-footer-note">
            <span>Powered by client-side JavaScript execution with zero backend dependency. Tested on 132 company hiring formats.</span>
          </div>
        </section>

        <!-- 3. Key Feature Presentations (Large-Format Editorial Sections) -->
        <section class="landing-features-section">
          
          <!-- Feature 1: Researched Company Intelligence -->
          <div class="feature-block feature-block-reverse">
            <div class="feature-content">
              <span class="feature-tag">132 Researched Employers</span>
              <h3 class="feature-title">Real hiring stages. Documented, not guessed.</h3>
              <p class="feature-desc">
                Stop relying on fragmented forums and rumors. Review verified screening rounds, question distributions, platform styles (HackerRank, CodeSignal, Mettl, AMCAT), and typical interview timelines for major tech companies before sitting for your exam.
              </p>
              <ul class="feature-list">
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--status-verified)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span><strong>Three Confidence Tiers:</strong> Verified official documentation, community-reported placement experiences, and clearly flagged estimates.</span>
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--status-verified)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span><strong>8 Hiring Sectors:</strong> Big Tech, Tier-1 FinTech, High-Growth Startups, Enterprise Cloud, Global Financial Services, and IT Services.</span>
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--status-verified)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span><strong>Direct Source Citations:</strong> Links directly to official company career pages and verified campus circulars.</span>
                </li>
              </ul>
              <div style="margin-top: 1.5rem;">
                <a href="#directory" class="btn btn-secondary">
                  Browse 132 Companies &rarr;
                </a>
              </div>
            </div>

            <div class="feature-preview-card">
              <div class="preview-mini-header">
                <span class="preview-mini-title">Company Intelligence Dossier</span>
                <span class="badge badge-verified">Verified format</span>
              </div>
              <div class="company-mini-dossier">
                <div class="dossier-row">
                  <div class="dossier-company">
                    <span class="dossier-avatar">A</span>
                    <div>
                      <div class="dossier-name">Amazon</div>
                      <div class="dossier-track">SDE-1 (Software Development Engineer)</div>
                    </div>
                  </div>
                  <span class="badge badge-blue">HackerRank Format</span>
                </div>
                
                <div class="dossier-timeline">
                  <div class="timeline-step">
                    <span class="step-num">1</span>
                    <div>
                      <div class="step-title">Online Assessment Part 1: Code Debugging</div>
                      <div class="step-meta">7 debugging tasks · 20 mins</div>
                    </div>
                  </div>
                  <div class="timeline-step active">
                    <span class="step-num">2</span>
                    <div>
                      <div class="step-title">Online Assessment Part 2: Coding & Work Styles</div>
                      <div class="step-meta">2 algorithmic problems + LP assessment · 70 mins</div>
                    </div>
                  </div>
                  <div class="timeline-step">
                    <span class="step-num">3</span>
                    <div>
                      <div class="step-title">Virtual Technical Interviews</div>
                      <div class="step-meta">3–4 rounds: Live DSA, LLD & Leadership Principles</div>
                    </div>
                  </div>
                </div>

                <div class="dossier-footer">
                  <span class="dossier-time">Typical timeline: 3–5 weeks</span>
                  <a href="#company/amazon" class="dossier-link">View Full Profile &rarr;</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Feature 2: Realistic Assessment Simulation -->
          <div class="feature-block">
            <div class="feature-content">
              <span class="feature-tag">Authentic OA Engine</span>
              <h3 class="feature-title">Practice under realistic exam pressure.</h3>
              <p class="feature-desc">
                Recruitment OAs evaluate more than pure algorithm implementation. Experience timed countdowns, realistic question distributions, multi-language coding, deterministic SQL query evaluation, and strict multiple-select questions.
              </p>
              <ul class="feature-list">
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--status-verified)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span><strong>7 Question Types:</strong> Algorithmic Coding, SQL Window Functions, Asymptotic Complexity, Short-Answer Invariants, MSQs, Debugging, and Output Prediction.</span>
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--status-verified)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span><strong>Dual Practice Modes:</strong> Timed Recruitment Mode (countdown with 5-minute warning) and Untimed Casual Mode for deep study.</span>
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--status-verified)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span><strong>In-Browser JS Runner:</strong> Safely execute JavaScript test cases directly in your browser with microsecond benchmarking.</span>
                </li>
              </ul>
              <div style="margin-top: 1.5rem;">
                <a href="#simulator/amazon-sde-oa" class="btn btn-secondary">
                  Launch Sample Assessment &rarr;
                </a>
              </div>
            </div>

            <div class="feature-preview-card">
              <div class="preview-mini-header">
                <span class="preview-mini-title">Assessment Test Engine</span>
                <span class="badge badge-diff-med">Medium · 25 Marks</span>
              </div>
              <div class="code-mini-preview">
                <div class="code-mini-tabs">
                  <span class="code-tab active">solution.py</span>
                  <span class="code-tab">solution.js</span>
                  <span class="code-tab">query.sql</span>
                </div>
                <pre class="code-mini-snippet"><code><span class="c-keyword">def</span> <span class="c-fn">minVansRequired</span>(trips: list[int], capacity: int) -> int:
    <span class="c-comment"># Sort demands in descending order for greedy pack</span>
    demands = sorted(trips, reverse=<span class="c-val">True</span>)
    vans = []
    <span class="c-keyword">for</span> pkg <span class="c-keyword">in</span> demands:
        placed = <span class="c-val">False</span>
        <span class="c-keyword">for</span> i <span class="c-keyword">in</span> range(len(vans)):
            <span class="c-keyword">if</span> vans[i] + pkg &lt;= capacity:
                vans[i] += pkg
                placed = <span class="c-val">True</span>; <span class="c-keyword">break</span>
        <span class="c-keyword">if</span> <span class="c-keyword">not</span> placed:
            vans.append(pkg)
    <span class="c-keyword">return</span> len(vans)</code></pre>
                <div class="code-mini-results">
                  <div class="test-result-row pass">
                    <span>✓ Public Test 1: [10, 20, 30], C=30</span>
                    <span class="runtime">Passed (2ms)</span>
                  </div>
                  <div class="test-result-row pass">
                    <span>✓ Public Test 2: [5, 10, 15, 20], C=25</span>
                    <span class="runtime">Passed (3ms)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Feature 3: Weak-Topic Analytics & Targeted Drills -->
          <div class="feature-block feature-block-reverse">
            <div class="feature-content">
              <span class="feature-tag">Targeted Mastery</span>
              <h3 class="feature-title">Turn missed questions into measurable progress.</h3>
              <p class="feature-desc">
                Don't just take tests and forget your mistakes. CompanyQ analyzes your performance across topics (Dynamic Programming, SQL Aggregations, Operating Systems, Master Theorem), identifies areas below benchmark, and lets you drill missed questions with a single click.
              </p>
              <ul class="feature-list">
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--status-verified)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span><strong>One-Click Weak-Topic Drills:</strong> Launch focused practice sessions targeting only the skills you need to strengthen.</span>
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--status-verified)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span><strong>Optimal Approaches & Explanations:</strong> Every problem includes detailed explanations of why the correct answer holds and common anti-patterns to avoid.</span>
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--status-verified)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span><strong>Subsequent Round Prep:</strong> Detailed study guides and scoring rubrics for Live DSA, Low-Level Design (LLD), CS Fundamentals, and Behavioral interviews.</span>
                </li>
              </ul>
              <div style="margin-top: 1.5rem;">
                <a href="#interview" class="btn btn-secondary">
                  Explore Interview Prep &rarr;
                </a>
              </div>
            </div>

            <div class="feature-preview-card">
              <div class="preview-mini-header">
                <span class="preview-mini-title">Skill Mastery Analytics</span>
                <span class="badge badge-community">Personal Record</span>
              </div>
              <div class="analytics-mini-preview">
                <div class="analytics-score-row">
                  <div class="analytics-circle">
                    <span class="circle-val">88%</span>
                    <span class="circle-label">Avg. Score</span>
                  </div>
                  <div class="analytics-stats">
                    <div class="astat"><strong>4</strong> Mocks Completed</div>
                    <div class="astat"><strong>92%</strong> In-Time Submissions</div>
                    <div class="astat"><strong>2</strong> Skills Tagged for Drill</div>
                  </div>
                </div>

                <div class="analytics-bars">
                  <div class="skill-bar-row">
                    <div class="skill-bar-header">
                      <span>Dynamic Programming</span>
                      <span>85%</span>
                    </div>
                    <div class="skill-bar-bg"><div class="skill-bar-fill" style="width: 85%;"></div></div>
                  </div>
                  <div class="skill-bar-row">
                    <div class="skill-bar-header">
                      <span>SQL Window Functions</span>
                      <span>90%</span>
                    </div>
                    <div class="skill-bar-bg"><div class="skill-bar-fill" style="width: 90%;"></div></div>
                  </div>
                  <div class="skill-bar-row">
                    <div class="skill-bar-header">
                      <span>Operating Systems (Memory)</span>
                      <span style="color: var(--status-estimated);">60%</span>
                    </div>
                    <div class="skill-bar-bg"><div class="skill-bar-fill" style="width: 60%; background-color: var(--status-estimated);"></div></div>
                  </div>
                </div>

                <div class="drill-mini-cta">
                  <a href="#drill?topic=Operating%20Systems" class="btn btn-primary btn-sm" style="width: 100%; justify-content: center;">
                    ⚡ Drill Missed OS Questions &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>

        </section>

        <!-- 4. Closing Call to Action (High-Contrast, Spacious) -->
        <section class="landing-closing-cta">
          <div class="cta-inner">
            <span class="cta-pill">Zero Cost · Zero Ads · 100% Client-Side</span>
            <h2 class="cta-headline">Prepare with purpose.<br>Practise with CompanyQ.</h2>
            <p class="cta-subtitle">
              Join thousands of engineering candidates preparing for university placements and SDE-1 recruitment drives with genuine company intelligence and realistic mock assessments.
            </p>
            <div class="cta-buttons">
              <a href="#directory" class="btn btn-primary btn-hero-primary">
                Explore Companies (132)
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
              <a href="#simulator/amazon-sde-oa" class="btn btn-secondary btn-hero-secondary">
                Start Practising Now
              </a>
            </div>
            <div class="cta-guarantee">
              <span>✓ All 132 company profiles accessible immediately without an account.</span>
              <span>✓ Progress saved privately in your browser.</span>
            </div>
          </div>
        </section>

      </div>
    `;

    this.bindShowcaseEvents(container);
  },

  renderShowcaseContent() {
    if (this.activeShowcaseTab === 'simulator') {
      return `
        <div class="showcase-sim-workspace">
          <!-- Top Bar of Simulator Mockup -->
          <div class="sim-mock-topbar">
            <div class="sim-mock-info">
              <span class="badge badge-verified">Verified format</span>
              <span class="sim-mock-title">Amazon SDE-1 Online Assessment Simulation</span>
              <span class="badge badge-gray">HackerRank Style</span>
            </div>
            <div class="sim-mock-actions">
              <div class="sim-mock-timer">
                <span class="timer-tag">TIME REMAINING</span>
                <span class="timer-nums">47:18</span>
              </div>
              <a href="#simulator/amazon-sde-oa" class="btn btn-primary btn-sm">Submit Assessment</a>
            </div>
          </div>

          <!-- Split Workspace Layout -->
          <div class="sim-mock-split">
            <!-- Left Problem Statement Panel -->
            <div class="sim-mock-statement">
              <div class="sim-q-header">
                <div>
                  <div class="sim-q-meta">QUESTION 1 OF 4 · CODING (ALGORITHMS)</div>
                  <h4 class="sim-q-title">Warehouse Package Delivery Routing</h4>
                </div>
                <span class="badge badge-diff-med">Medium · 25 Marks</span>
              </div>
              
              <div class="sim-q-body">
                <p>An automated distribution center is scheduling package deliveries across an urban grid. You are given a list of package weights and a vehicle payload capacity. Calculate the minimum number of delivery vans required such that no van exceeds its rated capacity.</p>
                <div class="sim-example-box">
                  <div><strong>Example 1:</strong></div>
                  <div><code>weights = [10, 20, 30, 20, 10], capacity = 30</code></div>
                  <div><strong>Output:</strong> <code>3</code></div>
                  <div class="sim-example-exp">Van 1: [30], Van 2: [20, 10], Van 3: [20, 10].</div>
                </div>
                <div class="sim-constraints-box">
                  <strong>Constraints:</strong>
                  <ul>
                    <li><code>1 &le; weights.length &le; 10^5</code></li>
                    <li><code>1 &le; weights[i] &le; capacity &le; 10^9</code></li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Right Code Editor Panel -->
            <div class="sim-mock-editor">
              <div class="editor-mock-header">
                <div class="editor-mock-lang">
                  <span>Language:</span>
                  <span class="badge badge-blue">Python 3</span>
                </div>
                <div class="editor-mock-tools">
                  <span class="editor-tool-btn">Reset</span>
                  <span class="editor-tool-btn">Shortcut: Alt+N</span>
                </div>
              </div>

              <div class="editor-mock-code">
                <div class="line-numbers">
                  1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11
                </div>
                <pre class="code-area"><code><span class="c-keyword">def</span> <span class="c-fn">minVansRequired</span>(weights: list[int], capacity: int) -> int:
    <span class="c-comment"># Sort packages descending for optimal bin fit</span>
    sorted_weights = sorted(weights, reverse=<span class="c-val">True</span>)
    vans = []
    <span class="c-keyword">for</span> w <span class="c-keyword">in</span> sorted_weights:
        placed = <span class="c-val">False</span>
        <span class="c-keyword">for</span> i <span class="c-keyword">in</span> range(len(vans)):
            <span class="c-keyword">if</span> vans[i] + w &lt;= capacity:
                vans[i] += w
                placed = <span class="c-val">True</span>; <span class="c-keyword">break</span>
        <span class="c-keyword">if</span> <span class="c-keyword">not</span> placed:
            vans.append(w)
    <span class="c-keyword">return</span> len(vans)</code></pre>
              </div>

              <div class="editor-mock-footer">
                <div class="mock-test-status">
                  <span class="test-pill pass">✓ Case 1 Passed</span>
                  <span class="test-pill pass">✓ Case 2 Passed</span>
                  <span class="test-pill pass">✓ Hidden Cases Verified</span>
                </div>
                <a href="#simulator/amazon-sde-oa" class="btn btn-secondary btn-sm">Test in Live Workspace &rarr;</a>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    if (this.activeShowcaseTab === 'directory') {
      return `
        <div class="showcase-dir-workspace">
          <div class="dir-mock-toolbar">
            <div class="dir-mock-search">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              <span>Search 132 tech employers, hiring categories, platforms...</span>
            </div>
            <div class="dir-mock-pills">
              <span class="filter-pill active">All (132)</span>
              <span class="filter-pill">Big Tech (5)</span>
              <span class="filter-pill">FinTech (24)</span>
              <span class="filter-pill">Enterprise (32)</span>
              <span class="filter-pill">Startups (38)</span>
            </div>
          </div>

          <table class="data-table" style="font-size: 0.85rem;">
            <thead>
              <tr>
                <th>Employer</th>
                <th>Track / Role</th>
                <th>Format & Platform</th>
                <th>Confidence Tier</th>
                <th>OA Duration</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div style="display: flex; align-items: center; gap: 0.6rem;">
                    <span class="company-avatar">A</span>
                    <div><strong>Amazon</strong><div style="font-size: 0.72rem; color: var(--text-muted);">Seattle, WA / Bangalore, IN</div></div>
                  </div>
                </td>
                <td>SDE-1 (Full-Time & Intern)</td>
                <td><span class="badge badge-blue">HackerRank (2 Coding + LP)</span></td>
                <td><span class="badge badge-verified">Verified format</span></td>
                <td>70 mins</td>
                <td><a href="#company/amazon" class="btn btn-secondary btn-sm">View Profile</a></td>
              </tr>
              <tr>
                <td>
                  <div style="display: flex; align-items: center; gap: 0.6rem;">
                    <span class="company-avatar">G</span>
                    <div><strong>Google</strong><div style="font-size: 0.72rem; color: var(--text-muted);">Mountain View, CA / Hyderabad, IN</div></div>
                  </div>
                </td>
                <td>SWE Campus & L3 Entry</td>
                <td><span class="badge badge-blue">Google OA (2 Algorithmic)</span></td>
                <td><span class="badge badge-verified">Verified format</span></td>
                <td>60 mins</td>
                <td><a href="#company/google" class="btn btn-secondary btn-sm">View Profile</a></td>
              </tr>
              <tr>
                <td>
                  <div style="display: flex; align-items: center; gap: 0.6rem;">
                    <span class="company-avatar">M</span>
                    <div><strong>Microsoft</strong><div style="font-size: 0.72rem; color: var(--text-muted);">Redmond, WA / Noida, IN</div></div>
                  </div>
                </td>
                <td>SDE Candidate Track</td>
                <td><span class="badge badge-blue">Codility / Mettl (3 Tasks)</span></td>
                <td><span class="badge badge-verified">Verified format</span></td>
                <td>90 mins</td>
                <td><a href="#company/microsoft" class="btn btn-secondary btn-sm">View Profile</a></td>
              </tr>
              <tr>
                <td>
                  <div style="display: flex; align-items: center; gap: 0.6rem;">
                    <span class="company-avatar">U</span>
                    <div><strong>Uber</strong><div style="font-size: 0.72rem; color: var(--text-muted);">San Francisco, CA / Bangalore, IN</div></div>
                  </div>
                </td>
                <td>Software Engineer 1</td>
                <td><span class="badge badge-blue">CodeSignal GCA (4 Tasks)</span></td>
                <td><span class="badge badge-community">Community reported</span></td>
                <td>70 mins</td>
                <td><a href="#company/uber" class="btn btn-secondary btn-sm">View Profile</a></td>
              </tr>
            </tbody>
          </table>

          <div style="padding: 0.75rem 1rem; display: flex; justify-content: space-between; align-items: center; background-color: var(--bg-subtle); border-top: 1px solid var(--border-default);">
            <span style="font-size: 0.8rem; color: var(--text-muted);">Showing 4 of 132 fully documented employers</span>
            <a href="#directory" class="btn btn-primary btn-sm">Open Full Directory (132) &rarr;</a>
          </div>
        </div>
      `;
    }

    if (this.activeShowcaseTab === 'analytics') {
      return `
        <div class="showcase-results-workspace">
          <div class="results-mock-header">
            <div>
              <span class="badge badge-verified" style="margin-bottom: 0.35rem;">Platform Benchmark Met</span>
              <h3 style="font-size: 1.35rem; font-weight: 750; margin-bottom: 0.2rem;">Assessment Score Report & Skill Diagnostics</h3>
              <p style="font-size: 0.825rem; color: var(--text-muted);">Completed Amazon SDE-1 Assessment in 42 minutes (Timed Mode)</p>
            </div>
            <div class="results-mock-score">
              <span class="score-large">88%</span>
              <span class="score-sub">88 / 100 Marks</span>
            </div>
          </div>

          <div class="results-mock-grid">
            <div class="results-mock-col">
              <h4 style="font-size: 0.9rem; font-weight: 650; margin-bottom: 0.65rem;">Question-by-Question Evaluation</h4>
              <div class="results-q-list">
                <div class="results-q-item correct">
                  <span class="q-icon">✓</span>
                  <div class="q-det">
                    <strong>1. Warehouse Package Delivery Routing</strong>
                    <span>Coding (Dynamic Programming & Greedy) · 25/25 Marks</span>
                  </div>
                </div>
                <div class="results-q-item correct">
                  <span class="q-icon">✓</span>
                  <div class="q-det">
                    <strong>2. Optimal Route Cache Invalidation</strong>
                    <span>Coding (Tree Boundary & DFS) · 25/25 Marks</span>
                  </div>
                </div>
                <div class="results-q-item correct">
                  <span class="q-icon">✓</span>
                  <div class="q-det">
                    <strong>3. Asymptotic Time Complexity Analysis</strong>
                    <span>Complexity (Master Theorem Recurrence) · 25/25 Marks</span>
                  </div>
                </div>
                <div class="results-q-item partial">
                  <span class="q-icon" style="color: var(--status-estimated);">!</span>
                  <div class="q-det">
                    <strong>4. Operating Systems Virtual Memory Page Faults</strong>
                    <span>MSQ (OS Memory Hierarchy) · 13/25 Marks</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="results-mock-col">
              <h4 style="font-size: 0.9rem; font-weight: 650; margin-bottom: 0.65rem;">Weak-Topic Review & Drill Action</h4>
              <div style="background-color: var(--status-warning-bg); border-left: 3px solid var(--status-estimated); padding: 0.85rem; border-radius: var(--radius-sm); margin-bottom: 0.85rem;">
                <div style="font-weight: 650; font-size: 0.85rem; color: var(--status-estimated); margin-bottom: 0.2rem;">Identified Weak Concept:</div>
                <p style="font-size: 0.78rem; color: var(--text-secondary); line-height: 1.45;">
                  Virtual memory page fault frequency and translation lookaside buffer (TLB) miss penalties need reinforcement.
                </p>
                <a href="#drill?topic=Operating%20Systems" class="btn btn-primary btn-sm" style="margin-top: 0.6rem; width: 100%; justify-content: center;">
                  ⚡ Drill Missed OS Concepts
                </a>
              </div>

              <div style="border: 1px solid var(--border-default); border-radius: var(--radius-sm); padding: 0.85rem; background-color: var(--bg-surface);">
                <div style="font-size: 0.8rem; font-weight: 600; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.35rem;">Recommended Next Mock:</div>
                <div style="font-weight: 700; font-size: 0.95rem;">Microsoft SWE Candidate OA</div>
                <p style="font-size: 0.78rem; color: var(--text-secondary); margin: 0.2rem 0 0.6rem 0;">Tests string algorithms, SQL joins, and database indexes.</p>
                <a href="#simulator/microsoft-sde-oa" class="btn btn-secondary btn-sm">Start Next Mock &rarr;</a>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    return '';
  },

  bindShowcaseEvents(container) {
    container.querySelectorAll('.showcase-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-tab');
        if (target && target !== this.activeShowcaseTab) {
          this.activeShowcaseTab = target;
          this.render(container);
        }
      });
    });
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { LandingPageView };
}

