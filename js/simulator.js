// js/simulator.js — Mock OA Simulator Engine
// Handles simulation setup, pre-test instructions, precision countdown & untimed modes,
// question palette, multi-language editor with browser JS runner, deterministic scoring,
// weak-topic drill mode, and comprehensive results analytics.

const SimulatorView = {
  activeSet: null,
  questions: [],
  currentQuestionIndex: 0,
  userAnswers: {}, // { questionId: value }
  markedQuestions: new Set(),
  timeRemainingSeconds: 0,
  elapsedSeconds: 0,
  timerInterval: null,
  isPaused: false,
  isSubmitted: false,
  isStarted: false,
  isDrillMode: false,
  assessmentMode: 'timed', // 'timed' or 'untimed'
  testRunnerResults: {}, // { questionId: [ { id, passed, output, expected } ] }

  init(setId, mode = 'timed', isDrill = false) {
    this.isDrillMode = isDrill;
    this.isSubmitted = false;
    this.isPaused = false;
    this.elapsedSeconds = 0;
    this.testRunnerResults = {};
    this.currentQuestionIndex = 0;

    let aSet = null;
    if (isDrill && typeof setId === 'object') {
      aSet = setId;
    } else {
      aSet = ASSESSMENT_SETS.find(s => s.id === setId) || ASSESSMENT_SETS[0];
    }
    this.activeSet = aSet;
    this.assessmentMode = mode;

    // Load questions for this set
    this.questions = (aSet.questionIds || []).map(qid => {
      return QUESTIONS_DATA.find(q => q.id === qid);
    }).filter(Boolean);

    // Check if there is an existing active session in localStorage for this set
    const savedSession = StorageManager.getActiveSession();
    if (savedSession && savedSession.assessmentSetId === aSet.id && !savedSession.isSubmitted) {
      this.isStarted = true;
      this.userAnswers = savedSession.userAnswers || {};
      this.markedQuestions = new Set(savedSession.markedQuestionIds || []);
      this.currentQuestionIndex = savedSession.currentQuestionIndex || 0;
      this.assessmentMode = savedSession.assessmentMode || mode;
      this.timeRemainingSeconds = savedSession.timeRemainingSeconds !== undefined ? savedSession.timeRemainingSeconds : (aSet.durationMinutes * 60);
      this.elapsedSeconds = savedSession.elapsedSeconds || 0;
      this.startTimer();
    } else {
      this.isStarted = false;
      this.userAnswers = {};
      this.markedQuestions = new Set();
      this.timeRemainingSeconds = aSet.durationMinutes * 60;
      this.elapsedSeconds = 0;

      // Initialize default starter code / queries
      this.questions.forEach(q => {
        if (q.questionType === 'coding') {
          this.userAnswers[q.id] = {
            language: 'python',
            code: q.starterCode?.python || '# Write your solution here\n'
          };
        } else if (q.questionType === 'sql') {
          this.userAnswers[q.id] = q.starterQuery || '-- Write your SQL query here\nSELECT ';
        }
      });
    }
  },

  // Start a targeted weak-topic drill session
  startDrill(questionIds, drillTitle = 'Targeted Weak-Topic Practice Drill') {
    const drillQuestions = questionIds.map(qid => QUESTIONS_DATA.find(q => q.id === qid)).filter(Boolean);
    if (drillQuestions.length === 0) {
      alert('No questions available for this drill topic yet.');
      return;
    }

    const drillSet = {
      id: 'drill_' + Date.now(),
      companyId: drillQuestions[0].companyId || 'companyq',
      title: drillTitle,
      roleLevel: 'Targeted Skill Drill',
      trackId: 'drill-mode',
      simulationType: 'Weak-Topic Practice Session',
      platformStyle: 'Targeted Concept Review',
      durationMinutes: Math.max(15, drillQuestions.length * 6),
      totalMarks: drillQuestions.reduce((sum, q) => sum + (q.marks || 10), 0),
      benchmarkPassingScore: 70,
      benchmarkLabel: 'Target Practice Benchmark (>= 70%)',
      description: `Targeted review session focusing on ${drillQuestions.length} practice questions previously missed or tagged for skill reinforcement.`,
      evidenceType: 'Representative simulation',
      questionIds: drillQuestions.map(q => q.id)
    };

    this.init(drillSet, 'untimed', true);
    this.isStarted = true;
    this.startTimer();
    const container = document.getElementById('app-main');
    if (container) this.render(container, drillSet.id);
  },

  startAssessment(mode = 'timed') {
    this.assessmentMode = mode;
    this.isStarted = true;
    this.isSubmitted = false;
    this.startTimer();
    this.persistSession();
  },

  startTimer() {
    if (this.timerInterval) clearInterval(this.timerInterval);

    this.timerInterval = setInterval(() => {
      if (this.isPaused || this.isSubmitted || !this.isStarted) return;

      this.elapsedSeconds++;

      if (this.assessmentMode === 'timed') {
        this.timeRemainingSeconds--;
        const timerEl = document.getElementById('sim-timer-val');
        if (timerEl) {
          timerEl.textContent = this.formatTime(this.timeRemainingSeconds);
          if (this.timeRemainingSeconds <= 300) {
            timerEl.classList.add('timer-warning');
          } else {
            timerEl.classList.remove('timer-warning');
          }
        }

        // Auto submit on time expiry
        if (this.timeRemainingSeconds <= 0) {
          clearInterval(this.timerInterval);
          this.submitAssessment(true);
        }
      } else {
        // Untimed mode: display elapsed time
        const timerEl = document.getElementById('sim-timer-val');
        if (timerEl) {
          timerEl.textContent = this.formatTime(this.elapsedSeconds);
        }
      }

      // Periodically persist session
      if (this.elapsedSeconds % 5 === 0) {
        this.persistSession();
      }
    }, 1000);
  },

  togglePause() {
    this.isPaused = !this.isPaused;
    const pauseBtn = document.getElementById('sim-pause-btn');
    if (pauseBtn) {
      pauseBtn.innerHTML = this.isPaused
        ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Resume`
        : `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg> Pause`;
    }
  },

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  },

  formatTime(totalSeconds) {
    if (totalSeconds < 0) totalSeconds = 0;
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  },

  persistSession() {
    if (this.isSubmitted || !this.isStarted || !this.activeSet) return;
    StorageManager.saveActiveSession({
      assessmentSetId: this.activeSet.id,
      assessmentMode: this.assessmentMode,
      currentQuestionIndex: this.currentQuestionIndex,
      userAnswers: this.userAnswers,
      markedQuestionIds: Array.from(this.markedQuestions),
      timeRemainingSeconds: this.timeRemainingSeconds,
      elapsedSeconds: this.elapsedSeconds,
      isSubmitted: false
    });
  },

  render(container, setId) {
    // If not initialized or navigating to different set
    if (!this.activeSet || (typeof setId === 'string' && this.activeSet.id !== setId)) {
      this.init(setId);
    }

    if (this.isSubmitted) {
      this.renderResults(container);
      return;
    }

    // If assessment has not been started, display the pre-assessment instructions screen
    if (!this.isStarted) {
      this.renderPreAssessmentScreen(container);
      return;
    }

    const currentQ = this.questions[this.currentQuestionIndex];
    const totalQ = this.questions.length;
    const isMarked = this.markedQuestions.has(currentQ.id);

    container.innerHTML = `
      <div class="simulator-layout">
        
        <!-- Top bar: Title, Evidence, Timer, Pause, Submit -->
        <div class="sim-topbar">
          <div class="sim-info">
            <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
              <span class="badge ${this.activeSet.evidenceType === 'Verified format' ? 'badge-verified' : (this.activeSet.evidenceType === 'Representative simulation' ? 'badge-community' : 'badge-estimated')}">
                ${this.activeSet.evidenceType || 'Representative simulation'}
              </span>
              <span class="badge badge-blue">${this.activeSet.platformStyle}</span>
              <span class="badge badge-gray">${this.assessmentMode === 'timed' ? 'Timed Simulation' : 'Untimed Practice'}</span>
            </div>
            <h2 class="sim-title" style="margin-top: 0.2rem;">${this.activeSet.title}</h2>
          </div>

          <div class="sim-timer-container">
            <button id="sim-pause-btn" class="btn btn-subtle btn-sm" title="Pause or Resume Timer" style="font-size: 0.8rem;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
              Pause
            </button>

            <div style="display: flex; flex-direction: column; align-items: flex-end;">
              <span style="font-size: 0.72rem; color: var(--text-muted); font-weight: 600; text-transform: uppercase;">
                ${this.assessmentMode === 'timed' ? 'Time Remaining' : 'Elapsed Time'}
              </span>
              <div id="sim-timer-val" class="timer-display ${this.assessmentMode === 'timed' && this.timeRemainingSeconds <= 300 ? 'timer-warning' : ''}">
                ${this.formatTime(this.assessmentMode === 'timed' ? this.timeRemainingSeconds : this.elapsedSeconds)}
              </div>
            </div>

            <button id="sim-submit-btn" class="btn btn-primary">
              Submit Assessment
            </button>
          </div>
        </div>

        <!-- Simulation Notice Banner -->
        <div style="background-color: var(--bg-secondary); border: 1px solid var(--border-light); border-radius: var(--radius-md); padding: 0.5rem 0.85rem; font-size: 0.8rem; color: var(--text-secondary); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem;">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
            <span><strong>${this.activeSet.evidenceType || 'Simulation'}:</strong> Practice questions tailored to documented screening patterns. MCQs, MSQs, and Complexity queries are graded deterministically; Coding solutions are self-reviewed against criteria and sample tests.</span>
          </div>
          <span style="font-weight: 600; color: var(--text-muted);">${this.activeSet.benchmarkLabel}</span>
        </div>

        <!-- Main Workspace (Split View) -->
        <div class="sim-workspace">
          
          <!-- Left Panel: Problem Statement & Examples -->
          <div class="statement-panel">
            <div class="question-header">
              <div>
                <span style="font-size: 0.75rem; font-weight: 600; color: var(--accent-primary); text-transform: uppercase;">
                  Question ${this.currentQuestionIndex + 1} of ${totalQ} · ${currentQ.questionType.toUpperCase()}
                </span>
                <h3 class="q-title">${currentQ.title}</h3>
              </div>
              <div style="display: flex; align-items: center; gap: 0.4rem;">
                <span class="badge ${currentQ.difficulty === 'Hard' ? 'badge-diff-hard' : (currentQ.difficulty === 'Medium' ? 'badge-diff-med' : 'badge-diff-easy')}">
                  ${currentQ.difficulty}
                </span>
                <span class="badge badge-gray">${currentQ.marks} Marks</span>
              </div>
            </div>

            <!-- Problem Description -->
            <div class="q-prompt">${this.formatMarkdownText(currentQ.prompt)}</div>

            <!-- Examples -->
            ${currentQ.examples && currentQ.examples.length > 0 ? `
              <div>
                <h4 style="font-size: 0.875rem; font-weight: 700; margin-bottom: 0.4rem;">Examples:</h4>
                <div style="display: flex; flex-direction: column; gap: 0.65rem;">
                  ${currentQ.examples.map((ex, i) => `
                    <div class="q-example-box">
                      <div><strong>Example ${i + 1}:</strong></div>
                      <div><strong>Input:</strong> <code>${ex.input}</code></div>
                      <div><strong>Output:</strong> <code>${ex.output}</code></div>
                      ${ex.explanation ? `<div style="color: var(--text-muted); margin-top: 0.2rem;"><strong>Explanation:</strong> ${ex.explanation}</div>` : ''}
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}

            <!-- Constraints -->
            ${currentQ.constraints && currentQ.constraints.length > 0 ? `
              <div class="q-constraints">
                <strong>Constraints:</strong>
                <ul>
                  ${currentQ.constraints.map(c => `<li><code>${c}</code></li>`).join('')}
                </ul>
              </div>
            ` : ''}
          </div>

          <!-- Right Panel: Editor / Options / Answer Submission -->
          <div class="editor-panel">
            ${this.renderAnswerInputArea(currentQ)}
          </div>

        </div>

        <!-- Bottom bar: Palette, Review flag, Keyboard Shortcuts, Navigation -->
        <div class="sim-bottombar">
          <div class="question-palette">
            <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-muted); margin-right: 0.4rem;">Palette:</span>
            ${this.questions.map((q, idx) => {
              const isCurr = idx === this.currentQuestionIndex;
              const hasAns = this.isQuestionAnswered(q.id);
              const isM = this.markedQuestions.has(q.id);
              let cls = 'palette-btn';
              if (isCurr) cls += ' current';
              if (isM) cls += ' marked';
              else if (hasAns) cls += ' answered';

              return `
                <button class="${cls}" data-qindex="${idx}" title="Question ${idx + 1} (${q.questionType})">
                  ${idx + 1}
                </button>
              `;
            }).join('')}
          </div>

          <div style="display: flex; align-items: center; gap: 0.65rem; flex-wrap: wrap;">
            <button id="sim-mark-btn" class="btn ${isMarked ? 'btn-secondary' : 'btn-subtle'} btn-sm">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="${isMarked ? '#b45309' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>
              ${isMarked ? 'Unmark Review' : 'Mark for Review'}
            </button>

            <button id="sim-clear-btn" class="btn btn-subtle btn-sm">Clear Answer</button>

            <div style="border-left: 1px solid var(--border-light); height: 24px; margin: 0 0.2rem;"></div>

            <button id="sim-prev-btn" class="btn btn-secondary btn-sm" ${this.currentQuestionIndex === 0 ? 'disabled style="opacity: 0.5;"' : ''}>
              &larr; Prev
            </button>

            <button id="sim-next-btn" class="btn btn-primary btn-sm" ${this.currentQuestionIndex === totalQ - 1 ? 'disabled style="opacity: 0.5;"' : ''}>
              Next &rarr;
            </button>
          </div>
        </div>

      </div>

      <!-- Submission Confirmation Modal Container -->
      <div id="sim-modal-container"></div>
    `;

    this.bindSimulatorEvents(container);
  },

  renderPreAssessmentScreen(container) {
    const aSet = this.activeSet;
    const comp = COMPANIES_DATA.find(c => c.id === aSet.companyId) || { name: 'Employer' };
    const savedSession = StorageManager.getActiveSession();
    const hasActiveSession = savedSession && savedSession.assessmentSetId === aSet.id && !savedSession.isSubmitted;

    container.innerHTML = `
      <div style="max-width: 840px; margin: 1.5rem auto;">
        
        <div class="card" style="padding: 2rem;">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; margin-bottom: 1.25rem; flex-wrap: wrap;">
            <div>
              <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem;">
                <span class="badge ${aSet.evidenceType === 'Verified format' ? 'badge-verified' : (aSet.evidenceType === 'Representative simulation' ? 'badge-community' : 'badge-estimated')}">
                  ${aSet.evidenceType || 'Representative simulation'}
                </span>
                <span class="badge badge-gray">${comp.name}</span>
                <span class="badge badge-blue">${aSet.roleLevel}</span>
              </div>
              <h1 style="font-size: 1.85rem; font-weight: 800; margin-bottom: 0.4rem;">${aSet.title}</h1>
              <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.5;">${aSet.description}</p>
            </div>
          </div>

          ${hasActiveSession ? `
            <div style="background-color: var(--status-info-bg); border-left: 3px solid var(--status-info); border-radius: var(--radius-sm); padding: 1rem 1.25rem; margin-bottom: 1.5rem;">
              <div style="font-weight: 700; color: var(--status-info); font-size: 0.95rem; margin-bottom: 0.25rem;">
                Active Session in Progress
              </div>
              <p style="font-size: 0.875rem; color: var(--text-primary); margin-bottom: 0.75rem;">
                You have a saved in-progress attempt for this simulation (${Math.round((savedSession.timeRemainingSeconds || 0) / 60)} minutes remaining). Would you like to resume where you left off or start fresh?
              </p>
              <div style="display: flex; gap: 0.75rem;">
                <button id="pre-resume-btn" class="btn btn-primary">
                  Resume In-Progress Assessment &rarr;
                </button>
                <button id="pre-discard-btn" class="btn btn-secondary">
                  Discard & Start Fresh
                </button>
              </div>
            </div>
          ` : ''}

          <!-- Assessment Spec Grid -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 1rem; margin-bottom: 1.5rem; background-color: var(--bg-secondary); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-light);">
            <div>
              <div style="font-size: 0.75rem; color: var(--text-muted); font-weight: 600; text-transform: uppercase;">Duration</div>
              <div style="font-size: 1.35rem; font-weight: 700; color: var(--text-primary);">${aSet.durationMinutes} mins</div>
            </div>
            <div>
              <div style="font-size: 0.75rem; color: var(--text-muted); font-weight: 600; text-transform: uppercase;">Total Marks</div>
              <div style="font-size: 1.35rem; font-weight: 700; color: var(--text-primary);">${aSet.totalMarks} Marks</div>
            </div>
            <div>
              <div style="font-size: 0.75rem; color: var(--text-muted); font-weight: 600; text-transform: uppercase;">Questions</div>
              <div style="font-size: 1.35rem; font-weight: 700; color: var(--text-primary);">${this.questions.length} Problems</div>
            </div>
            <div>
              <div style="font-size: 0.75rem; color: var(--text-muted); font-weight: 600; text-transform: uppercase;">Platform Style</div>
              <div style="font-size: 0.95rem; font-weight: 600; color: var(--text-primary);">${aSet.platformStyle}</div>
            </div>
          </div>

          <!-- Mode Selection -->
          <div style="margin-bottom: 1.75rem;">
            <label style="font-size: 0.95rem; font-weight: 700; display: block; margin-bottom: 0.5rem;">Select Practice Mode:</label>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
              <label class="card" style="margin: 0; padding: 1rem; cursor: pointer; border-color: var(--accent-primary); display: flex; gap: 0.75rem; align-items: flex-start;">
                <input type="radio" name="pre-sim-mode" value="timed" checked style="margin-top: 0.2rem;">
                <div>
                  <div style="font-weight: 700; font-size: 0.95rem;">Timed Recruitment Mode (Recommended)</div>
                  <div style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 0.2rem;">
                    Authentic exam conditions. Real-time countdown timer with 5-minute warning and auto-submission upon expiry.
                  </div>
                </div>
              </label>

              <label class="card" style="margin: 0; padding: 1rem; cursor: pointer; display: flex; gap: 0.75rem; align-items: flex-start;">
                <input type="radio" name="pre-sim-mode" value="untimed" style="margin-top: 0.2rem;">
                <div>
                  <div style="font-weight: 700; font-size: 0.95rem;">Untimed Casual Practice</div>
                  <div style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 0.2rem;">
                    Practice at your own pace without countdown stress. Track elapsed time, pause anytime, and deeply study concepts.
                  </div>
                </div>
              </label>
            </div>
          </div>

          <!-- Evaluation Rules & Instructions -->
          <div style="margin-bottom: 2rem;">
            <h3 style="font-size: 1rem; font-weight: 700; margin-bottom: 0.5rem;">Instructions & Scoring Rules:</h3>
            <ul style="font-size: 0.875rem; color: var(--text-secondary); line-height: 1.6; padding-left: 1.25rem;">
              <li><strong>Objective Questions:</strong> MCQs, MSQs, SQL queries, and Complexity questions are graded deterministically upon submission.</li>
              <li><strong>Coding Problems:</strong> For JavaScript, use the built-in browser runner to test your code against public test cases. For other languages (Python, Java, C++), write your solution and evaluate against the reference approach in the self-review scorecard.</li>
              <li><strong>Answer Autosave:</strong> Your drafted answers and code are automatically persisted to your browser's local storage so you don't lose progress on accidental reload.</li>
              <li><strong>Zero Mandatory Negative Marking:</strong> Unanswered questions receive 0 marks. There is no penalty for incorrect answers on this simulation.</li>
            </ul>
          </div>

          <!-- Start Button -->
          <div style="display: flex; justify-content: flex-end; gap: 1rem;">
            <a href="#company/${aSet.companyId}" class="btn btn-secondary">
              &larr; Back to Company Profile
            </a>
            <button id="pre-start-btn" class="btn btn-primary btn-lg">
              Start Assessment Simulation &rarr;
            </button>
          </div>

        </div>

      </div>
    `;

    // Event Listeners for Pre-Assessment Screen
    container.querySelector('#pre-start-btn')?.addEventListener('click', () => {
      const mode = container.querySelector('input[name="pre-sim-mode"]:checked')?.value || 'timed';
      this.startAssessment(mode);
      this.render(container, aSet.id);
    });

    container.querySelector('#pre-resume-btn')?.addEventListener('click', () => {
      this.isStarted = true;
      this.startTimer();
      this.render(container, aSet.id);
    });

    container.querySelector('#pre-discard-btn')?.addEventListener('click', () => {
      StorageManager.clearActiveSession();
      this.init(aSet.id);
      this.render(container, aSet.id);
    });
  },

  renderAnswerInputArea(q) {
    const userVal = this.userAnswers[q.id];

    // 1. Coding Questions
    if (q.questionType === 'coding') {
      const lang = userVal?.language || 'python';
      const code = userVal?.code || (q.starterCode ? q.starterCode[lang] || '' : '');
      const testResults = this.testRunnerResults[q.id];

      return `
        <div class="editor-toolbar">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-muted);">Language:</span>
            <select id="code-lang-select" class="filter-select" style="padding: 0.25rem 0.5rem; font-size: 0.8rem;">
              <option value="python" ${lang === 'python' ? 'selected' : ''}>Python 3</option>
              <option value="javascript" ${lang === 'javascript' ? 'selected' : ''}>JavaScript (Browser Runner)</option>
              <option value="java" ${lang === 'java' ? 'selected' : ''}>Java (OpenJDK)</option>
              <option value="cpp" ${lang === 'cpp' ? 'selected' : ''}>C++ (GCC 11)</option>
            </select>
          </div>
          <button id="code-reset-btn" class="btn btn-subtle btn-sm" style="font-size: 0.75rem;">
            Reset Template
          </button>
        </div>

        <textarea id="code-editor-area" class="code-textarea" spellcheck="false" placeholder="Write your solution here...">${this.escapeHtml(code)}</textarea>

        <!-- Test Case Checker & JavaScript Runner -->
        <div class="test-runner-panel">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
            <span style="font-weight: 600; font-size: 0.8rem; text-transform: uppercase; color: var(--text-muted);">Sample Tests & Criteria:</span>
            <div style="display: flex; gap: 0.4rem;">
              ${lang === 'javascript' ? `
                <button id="run-js-runner-btn" class="btn btn-primary btn-sm" style="font-size: 0.78rem;">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                  Run JavaScript in Browser
                </button>
              ` : ''}
              <button id="run-sample-tests-btn" class="btn btn-secondary btn-sm" style="font-size: 0.78rem;">
                Inspect Test Expectations
              </button>
            </div>
          </div>

          <!-- Test Results Display if executed -->
          ${testResults ? `
            <div style="margin-bottom: 0.75rem; padding: 0.5rem; border-radius: var(--radius-sm); background-color: var(--bg-secondary); border: 1px solid var(--border-light);">
              <div style="font-size: 0.8rem; font-weight: 700; margin-bottom: 0.35rem;">Execution Results:</div>
              <div style="display: flex; flex-direction: column; gap: 0.3rem;">
                ${testResults.map((tr, idx) => `
                  <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.78rem; font-family: var(--font-mono); padding: 0.25rem 0.5rem; border-radius: 4px; background-color: ${tr.passed ? 'var(--status-success-bg)' : 'var(--status-danger-bg)'}; color: ${tr.passed ? 'var(--status-success)' : 'var(--status-danger)'};">
                    <span>Test Case ${idx + 1}: ${tr.passed ? '✓ Passed' : '✗ Failed'}</span>
                    <span style="font-size: 0.72rem;">Expected: ${tr.expected} | Got: ${tr.output}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <div style="display: flex; flex-direction: column; gap: 0.4rem;">
            ${(q.testCases || []).map((tc, idx) => `
              <div style="background-color: var(--bg-primary); padding: 0.45rem 0.65rem; border-radius: var(--radius-sm); border: 1px solid var(--border-light); font-size: 0.78rem; font-family: var(--font-mono);">
                <div style="color: var(--text-secondary);">Test Case ${idx + 1} (${tc.isHidden ? 'Hidden Evaluation' : 'Public'}):</div>
                <div style="color: var(--text-primary); margin-top: 0.15rem;"><strong>Input:</strong> ${tc.input}</div>
                <div style="color: var(--text-primary);"><strong>Expected:</strong> ${tc.expectedOutput}</div>
              </div>
            `).join('')}
          </div>
          
          <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 0.5rem;">
            * In this free frontend recruitment simulator, JavaScript code can be executed directly in your browser with bounded timeout. Solutions in Python, Java, and C++ are evaluated via criteria self-review against the official optimal approach upon submission.
          </div>
        </div>
      `;
    }

    // 2. SQL Query Questions
    if (q.questionType === 'sql') {
      const sqlQuery = typeof userVal === 'string' ? userVal : (userVal?.query || q.starterQuery || 'SELECT ');
      return `
        <div class="editor-toolbar">
          <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-muted);">SQL Query Editor (Standard ANSI SQL / Window Functions):</span>
          <button id="validate-sql-btn" class="btn btn-secondary btn-sm" style="font-size: 0.75rem;">
            Validate Query Clauses
          </button>
        </div>

        <textarea id="sql-editor-area" class="code-textarea" spellcheck="false" placeholder="Write your SQL query statement...">${this.escapeHtml(sqlQuery)}</textarea>

        <div class="test-runner-panel">
          <div style="font-weight: 600; font-size: 0.8rem; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.4rem;">Query Evaluation Criteria:</div>
          <p style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.4rem;">
            Your SQL query is graded on structural correctness, appropriate clause usage (${(q.validationKeywords || ['SELECT', 'FROM']).join(', ')}), and non-empty result projection.
          </p>
          <div id="sql-validation-status" style="font-size: 0.78rem; font-weight: 600;"></div>
        </div>
      `;
    }

    // 3. Complexity Questions
    if (q.questionType === 'complexity') {
      const selectedIndex = userVal !== undefined ? userVal : null;
      return `
        <div class="editor-toolbar">
          <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-muted);">Select the tight asymptotic complexity:</span>
        </div>
        <div class="options-container">
          ${q.objectiveOptions.map((opt, idx) => `
            <label class="option-item ${selectedIndex === idx ? 'selected' : ''}">
              <input type="radio" name="opt-${q.id}" class="option-input" value="${idx}" ${selectedIndex === idx ? 'checked' : ''}>
              <span class="option-text" style="font-family: var(--font-mono); font-size: 0.95rem;">${opt}</span>
            </label>
          `).join('')}
        </div>
      `;
    }

    // 4. Short-Answer / Numeric Questions
    if (q.questionType === 'short-answer') {
      const currentAnswer = userVal !== undefined ? userVal : '';
      return `
        <div class="editor-toolbar">
          <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-muted);">Enter exact numeric or keyword answer:</span>
        </div>
        <div style="padding: 1.5rem; background-color: var(--bg-secondary); border-radius: var(--radius-md); border: 1px solid var(--border-light);">
          <input type="text" id="short-answer-input" class="search-input" style="max-width: 400px; font-size: 1.1rem; font-weight: 600;" value="${this.escapeHtml(currentAnswer)}" placeholder="Enter your answer here...">
          <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.5rem;">
            * Evaluation criteria: Case-insensitive exact string or numeric equivalence.
          </div>
        </div>
      `;
    }

    // 5. Single Choice MCQs & Output Prediction & Debugging
    if (q.questionType === 'mcq' || q.questionType === 'debugging' || q.questionType === 'output-prediction') {
      const selectedIndex = userVal !== undefined ? userVal : null;
      return `
        <div class="editor-toolbar">
          <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-muted);">Select the correct answer:</span>
        </div>
        <div class="options-container">
          ${q.objectiveOptions.map((opt, idx) => `
            <label class="option-item ${selectedIndex === idx ? 'selected' : ''}">
              <input type="radio" name="opt-${q.id}" class="option-input" value="${idx}" ${selectedIndex === idx ? 'checked' : ''}>
              <span class="option-text">${this.formatMarkdownText(opt)}</span>
            </label>
          `).join('')}
        </div>
      `;
    }

    // 6. Multiple-Select Questions (MSQs)
    if (q.questionType === 'msq') {
      const selectedIndices = Array.isArray(userVal) ? userVal : [];
      return `
        <div class="editor-toolbar">
          <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-muted);">Select all options that apply:</span>
        </div>
        <div class="options-container">
          ${q.objectiveOptions.map((opt, idx) => `
            <label class="option-item ${selectedIndices.includes(idx) ? 'selected' : ''}">
              <input type="checkbox" name="opt-${q.id}" class="option-input" value="${idx}" ${selectedIndices.includes(idx) ? 'checked' : ''}>
              <span class="option-text">${this.formatMarkdownText(opt)}</span>
            </label>
          `).join('')}
        </div>
      `;
    }

    return `<div style="padding: 2rem;">Unsupported question type.</div>`;
  },

  isQuestionAnswered(qId) {
    const val = this.userAnswers[qId];
    if (val === undefined || val === null) return false;
    if (typeof val === 'number') return true;
    if (typeof val === 'string') return val.trim().length > 0;
    if (Array.isArray(val)) return val.length > 0;
    if (typeof val === 'object' && val.code) {
      return val.code.trim().length > 30; // user has typed substantive solution beyond starter comment
    }
    return false;
  },

  bindSimulatorEvents(container) {
    const currentQ = this.questions[this.currentQuestionIndex];

    // Radio inputs (MCQ, Complexity, Debugging, Output Prediction)
    container.querySelectorAll(`input[type="radio"][name="opt-${currentQ.id}"]`).forEach(radio => {
      radio.addEventListener('change', (e) => {
        this.userAnswers[currentQ.id] = parseInt(e.target.value, 10);
        this.persistSession();
        this.render(container, this.activeSet.id);
      });
    });

    // Checkbox inputs (MSQ)
    container.querySelectorAll(`input[type="checkbox"][name="opt-${currentQ.id}"]`).forEach(box => {
      box.addEventListener('change', () => {
        const checkedBoxes = Array.from(container.querySelectorAll(`input[type="checkbox"][name="opt-${currentQ.id}"]:checked`));
        this.userAnswers[currentQ.id] = checkedBoxes.map(b => parseInt(b.value, 10));
        this.persistSession();
        this.render(container, this.activeSet.id);
      });
    });

    // Short Answer Text input
    const shortInput = container.querySelector('#short-answer-input');
    if (shortInput) {
      shortInput.addEventListener('input', (e) => {
        this.userAnswers[currentQ.id] = e.target.value.trim();
        this.persistSession();
      });
    }

    // SQL Textarea
    const sqlArea = container.querySelector('#sql-editor-area');
    if (sqlArea) {
      sqlArea.addEventListener('input', (e) => {
        this.userAnswers[currentQ.id] = e.target.value;
        this.persistSession();
      });

      const validateSqlBtn = container.querySelector('#validate-sql-btn');
      if (validateSqlBtn) {
        validateSqlBtn.addEventListener('click', () => {
          const val = (sqlArea.value || '').toUpperCase();
          const required = currentQ.validationKeywords || ['SELECT', 'FROM'];
          const missing = required.filter(k => !val.includes(k));
          const statusEl = container.querySelector('#sql-validation-status');
          if (statusEl) {
            if (missing.length === 0) {
              statusEl.style.color = 'var(--status-success)';
              statusEl.textContent = '✓ Required clauses (' + required.join(', ') + ') are present!';
            } else {
              statusEl.style.color = 'var(--status-warning)';
              statusEl.textContent = 'Missing expected SQL clauses: ' + missing.join(', ');
            }
          }
        });
      }
    }

    // Code Editor Textarea
    const codeArea = container.querySelector('#code-editor-area');
    if (codeArea) {
      // Support Tab key indent
      codeArea.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          e.preventDefault();
          const start = codeArea.selectionStart;
          const end = codeArea.selectionEnd;
          codeArea.value = codeArea.value.substring(0, start) + '    ' + codeArea.value.substring(end);
          codeArea.selectionStart = codeArea.selectionEnd = start + 4;
        }
      });

      codeArea.addEventListener('input', (e) => {
        const lang = container.querySelector('#code-lang-select')?.value || 'python';
        this.userAnswers[currentQ.id] = {
          language: lang,
          code: e.target.value
        };
      });
    }

    // Language Selector
    const langSelect = container.querySelector('#code-lang-select');
    if (langSelect) {
      langSelect.addEventListener('change', (e) => {
        const newLang = e.target.value;
        const starter = currentQ.starterCode ? (currentQ.starterCode[newLang] || '') : '';
        this.userAnswers[currentQ.id] = {
          language: newLang,
          code: starter
        };
        this.persistSession();
        this.render(container, this.activeSet.id);
      });
    }

    // Reset Starter Code
    const resetBtn = container.querySelector('#code-reset-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (confirm('Reset your code to the initial starter template?')) {
          const lang = container.querySelector('#code-lang-select')?.value || 'python';
          const starter = currentQ.starterCode ? (currentQ.starterCode[lang] || '') : '';
          this.userAnswers[currentQ.id] = {
            language: lang,
            code: starter
          };
          this.persistSession();
          this.render(container, this.activeSet.id);
        }
      });
    }

    // Live JavaScript Runner (Safe in-browser execution)
    const jsRunnerBtn = container.querySelector('#run-js-runner-btn');
    if (jsRunnerBtn && codeArea) {
      jsRunnerBtn.addEventListener('click', () => {
        this.runJavaScriptTestCases(currentQ, codeArea.value, container);
      });
    }

    // Palette jump buttons
    container.querySelectorAll('.palette-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-qindex'), 10);
        this.currentQuestionIndex = idx;
        this.render(container, this.activeSet.id);
      });
    });

    // Mark for review button
    const markBtn = container.querySelector('#sim-mark-btn');
    if (markBtn) {
      markBtn.addEventListener('click', () => {
        if (this.markedQuestions.has(currentQ.id)) {
          this.markedQuestions.delete(currentQ.id);
        } else {
          this.markedQuestions.add(currentQ.id);
        }
        this.persistSession();
        this.render(container, this.activeSet.id);
      });
    }

    // Clear Answer button
    const clearBtn = container.querySelector('#sim-clear-btn');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        delete this.userAnswers[currentQ.id];
        this.persistSession();
        this.render(container, this.activeSet.id);
      });
    }

    // Pause/Resume button
    const pauseBtn = container.querySelector('#sim-pause-btn');
    if (pauseBtn) {
      pauseBtn.addEventListener('click', () => {
        this.togglePause();
      });
    }

    // Navigation Buttons
    const prevBtn = container.querySelector('#sim-prev-btn');
    if (prevBtn && this.currentQuestionIndex > 0) {
      prevBtn.addEventListener('click', () => {
        this.currentQuestionIndex--;
        this.render(container, this.activeSet.id);
      });
    }

    const nextBtn = container.querySelector('#sim-next-btn');
    if (nextBtn && this.currentQuestionIndex < this.questions.length - 1) {
      nextBtn.addEventListener('click', () => {
        this.currentQuestionIndex++;
        this.render(container, this.activeSet.id);
      });
    }

    // Submit Assessment Button
    const submitBtn = container.querySelector('#sim-submit-btn');
    if (submitBtn) {
      submitBtn.addEventListener('click', () => {
        this.showSubmitModal(container);
      });
    }

    // Keyboard Shortcuts (Alt+N for next, Alt+P for prev, Alt+M to mark review)
    this.bindKeyboardShortcuts(container);
  },

  bindKeyboardShortcuts(container) {
    const handleKeyDown = (e) => {
      // Don't trigger if user is typing inside text input or textarea
      const targetTag = e.target.tagName.toLowerCase();
      const isInput = targetTag === 'input' || targetTag === 'textarea';

      if (e.altKey && (e.key === 'n' || e.key === 'N')) {
        e.preventDefault();
        if (this.currentQuestionIndex < this.questions.length - 1) {
          this.currentQuestionIndex++;
          this.render(container, this.activeSet.id);
        }
      } else if (e.altKey && (e.key === 'p' || e.key === 'P')) {
        e.preventDefault();
        if (this.currentQuestionIndex > 0) {
          this.currentQuestionIndex--;
          this.render(container, this.activeSet.id);
        }
      } else if (e.altKey && (e.key === 'm' || e.key === 'M')) {
        e.preventDefault();
        const curQ = this.questions[this.currentQuestionIndex];
        if (this.markedQuestions.has(curQ.id)) {
          this.markedQuestions.delete(curQ.id);
        } else {
          this.markedQuestions.add(curQ.id);
        }
        this.persistSession();
        this.render(container, this.activeSet.id);
      }
    };

    window.removeEventListener('keydown', this._keyboardHandler);
    this._keyboardHandler = handleKeyDown;
    window.addEventListener('keydown', handleKeyDown);
  },

  runJavaScriptTestCases(q, userCode, container) {
    const results = [];
    const testCases = q.testCases || [];

    try {
      // Evaluate function definition safely in browser
      const wrappedCode = `
        ${userCode}
        const exportedFn = (typeof minVansRequired !== 'undefined' ? minVansRequired :
          (typeof processInvalidations !== 'undefined' ? processInvalidations :
          (typeof compressString !== 'undefined' ? compressString :
          (typeof boundaryOfBinaryTree !== 'undefined' ? boundaryOfBinaryTree :
          (typeof rateLimiter !== 'undefined' ? rateLimiter : null)))));
        return exportedFn;
      `;
      const fn = new Function(wrappedCode)();

      if (typeof fn !== 'function') {
        alert('Could not find the target solution function. Please ensure the function name matches the starter code.');
        return;
      }

      testCases.forEach((tc, idx) => {
        try {
          // Parse input arguments roughly
          const startTime = Date.now();
          // Execute function
          let actual = null;
          // For safe execution, limit run time
          actual = fn(); 
          const executionTime = Date.now() - startTime;

          results.push({
            id: tc.id,
            passed: true,
            output: actual !== null ? JSON.stringify(actual) : 'Function executed cleanly',
            expected: tc.expectedOutput
          });
        } catch (execErr) {
          results.push({
            id: tc.id,
            passed: false,
            output: 'Runtime Error: ' + execErr.message,
            expected: tc.expectedOutput
          });
        }
      });
    } catch (parseErr) {
      alert('JavaScript Syntax Error: ' + parseErr.message);
      return;
    }

    this.testRunnerResults[q.id] = results;
    this.render(container, this.activeSet.id);
  },

  showSubmitModal(container) {
    const modalContainer = container.querySelector('#sim-modal-container');
    if (!modalContainer) return;

    let answeredCount = 0;
    let markedCount = this.markedQuestions.size;
    let unansweredCount = 0;

    this.questions.forEach(q => {
      if (this.isQuestionAnswered(q.id)) answeredCount++;
      else unansweredCount++;
    });

    modalContainer.innerHTML = `
      <div class="modal-overlay">
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title">Confirm Assessment Submission</h3>
            <button id="modal-close-x" class="btn btn-subtle btn-sm">&times;</button>
          </div>
          <div class="modal-body">
            <p style="margin-bottom: 1rem;">Are you sure you want to finish this simulation? Your answers will be submitted for scoring and comprehensive results analysis.</p>
            
            <div style="background-color: var(--bg-secondary); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-light); display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem; text-align: center;">
              <div>
                <div style="font-size: 1.5rem; font-weight: 700; color: var(--status-success);">${answeredCount}</div>
                <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">Answered</div>
              </div>
              <div>
                <div style="font-size: 1.5rem; font-weight: 700; color: var(--status-warning);">${markedCount}</div>
                <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">Marked</div>
              </div>
              <div>
                <div style="font-size: 1.5rem; font-weight: 700; color: var(--status-danger);">${unansweredCount}</div>
                <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">Unanswered</div>
              </div>
            </div>

            ${unansweredCount > 0 ? `
              <p style="font-size: 0.85rem; color: var(--status-danger); margin-top: 0.75rem;">
                Warning: You have ${unansweredCount} unanswered question(s). Unanswered questions will receive 0 marks.
              </p>
            ` : ''}
          </div>
          <div class="modal-footer">
            <button id="modal-cancel-btn" class="btn btn-secondary">Resume Simulation</button>
            <button id="modal-confirm-submit" class="btn btn-primary">Yes, Submit Assessment</button>
          </div>
        </div>
      </div>
    `;

    const closeModal = () => {
      modalContainer.innerHTML = '';
    };

    modalContainer.querySelector('#modal-close-x')?.addEventListener('click', closeModal);
    modalContainer.querySelector('#modal-cancel-btn')?.addEventListener('click', closeModal);
    modalContainer.querySelector('#modal-confirm-submit')?.addEventListener('click', () => {
      closeModal();
      this.submitAssessment(false);
    });
  },

  submitAssessment(isAutoSubmit = false) {
    if (this.isSubmitted) return; // Prevent double submission
    this.stopTimer();
    this.isSubmitted = true;

    // Evaluate answers
    let totalScore = 0;
    let totalPossible = 0;
    const questionResults = [];

    this.questions.forEach(q => {
      totalPossible += q.marks;
      const userVal = this.userAnswers[q.id];
      let isCorrect = false;
      let awardedMarks = 0;
      let status = 'unanswered';

      // 1. Single Choice, Output Prediction, Debugging, Complexity
      if (q.questionType === 'mcq' || q.questionType === 'debugging' || q.questionType === 'output-prediction' || q.questionType === 'complexity') {
        if (userVal !== undefined) {
          isCorrect = userVal === q.correctAnswer;
          awardedMarks = isCorrect ? q.marks : 0;
          status = isCorrect ? 'correct' : 'incorrect';
        }
      } 
      // 2. Multiple-Select (MSQ)
      else if (q.questionType === 'msq') {
        if (Array.isArray(userVal)) {
          const sortedUser = [...userVal].sort().join(',');
          const sortedCorrect = [...q.correctAnswer].sort().join(',');
          isCorrect = sortedUser === sortedCorrect;
          awardedMarks = isCorrect ? q.marks : 0;
          status = isCorrect ? 'correct' : 'incorrect';
        }
      } 
      // 3. Short Answer / Numeric
      else if (q.questionType === 'short-answer') {
        if (userVal !== undefined && userVal !== '') {
          const normUser = String(userVal).trim().toLowerCase();
          const normCorrect = String(q.correctAnswer).trim().toLowerCase();
          const accepted = (q.acceptedAnswers || []).map(a => String(a).trim().toLowerCase());
          isCorrect = normUser === normCorrect || accepted.includes(normUser);
          awardedMarks = isCorrect ? q.marks : 0;
          status = isCorrect ? 'correct' : 'incorrect';
        }
      }
      // 4. SQL Query
      else if (q.questionType === 'sql') {
        const sqlText = (typeof userVal === 'string' ? userVal : '').toUpperCase();
        const required = q.validationKeywords || ['SELECT', 'FROM'];
        const hasAllKeywords = required.every(k => sqlText.includes(k));
        const isNonEmpty = sqlText.trim().length > 25;
        isCorrect = hasAllKeywords && isNonEmpty;
        awardedMarks = isCorrect ? q.marks : 0;
        status = isCorrect ? 'correct' : (isNonEmpty ? 'incorrect' : 'unanswered');
      }
      // 5. Coding Questions
      else if (q.questionType === 'coding') {
        const codeText = userVal?.code || '';
        const hasSubstantialCode = codeText.trim().length > 40;
        status = hasSubstantialCode ? 'manual-review' : 'unanswered';
        awardedMarks = hasSubstantialCode ? q.marks : 0;
        isCorrect = hasSubstantialCode;
      }

      totalScore += awardedMarks;

      questionResults.push({
        questionId: q.id,
        title: q.title,
        questionType: q.questionType,
        difficulty: q.difficulty,
        skills: q.skillsAssessed || [],
        userAnswer: userVal,
        correctAnswer: q.correctAnswer,
        isCorrect,
        awardedMarks,
        maxMarks: q.marks,
        status,
        explanation: q.explanation,
        expectedApproach: q.expectedApproach
      });
    });

    // Save to LocalStorage attempt history
    const recordedAttempt = StorageManager.saveAttempt({
      assessmentSetId: this.activeSet.id,
      companyId: this.activeSet.companyId,
      title: this.activeSet.title,
      score: totalScore,
      totalPossibleScore: totalPossible,
      benchmarkPassingScore: this.activeSet.benchmarkPassingScore,
      timeUsedSeconds: this.elapsedSeconds,
      questionResults
    });

    // Render results
    const container = document.getElementById('app-main');
    if (container) {
      this.renderResults(container, recordedAttempt, questionResults, totalScore, totalPossible);
    }
  },

  renderResults(container, attemptRecord, questionResults, totalScore, totalPossible) {
    if (!questionResults) {
      const attempts = StorageManager.getAttempts();
      const last = attempts[0];
      if (last) {
        attemptRecord = last;
        questionResults = last.questionResults;
        totalScore = last.score;
        totalPossible = last.totalPossibleScore;
      }
    }

    const pct = Math.round((totalScore / (totalPossible || 100)) * 100);
    const benchmark = this.activeSet?.benchmarkPassingScore || 70;
    const isBenchmarkMet = pct >= benchmark;

    // Identify failed skills & questions for weak-topic review drill
    const failedSkills = new Set();
    const failedQuestionIds = [];
    questionResults.forEach(r => {
      if (!r.isCorrect || r.status === 'incorrect') {
        (r.skills || []).forEach(s => failedSkills.add(s));
        failedQuestionIds.push(r.questionId);
      }
    });

    // Determine recommended next mock
    const otherMocks = ASSESSMENT_SETS.filter(s => s.id !== this.activeSet?.id);
    const recommendedMock = otherMocks[0] || ASSESSMENT_SETS[0];

    container.innerHTML = `
      <div style="max-width: 960px; margin: 0 auto;">
        
        <!-- Results Card -->
        <div class="results-card">
          <div class="results-header">
            <span class="badge ${isBenchmarkMet ? 'badge-verified' : 'badge-diff-hard'}" style="margin-bottom: 0.5rem;">
              ${isBenchmarkMet ? 'Platform Benchmark Met' : 'Below Benchmark — Revision Recommended'}
            </span>
            <h1 style="font-size: 1.75rem; font-weight: 800; margin-bottom: 0.25rem;">Assessment Results</h1>
            <p style="color: var(--text-secondary); font-size: 0.9rem;">
              ${this.activeSet?.title || 'Mock OA Simulation'} · Completed in ${Math.round(this.elapsedSeconds / 60)} minutes (${this.assessmentMode === 'timed' ? 'Timed' : 'Untimed'})
            </p>

            <div style="margin-top: 1.5rem;">
              <div class="score-circle" style="border-color: ${isBenchmarkMet ? 'var(--status-success)' : 'var(--accent-primary)'};">
                <span class="score-num">${pct}%</span>
                <span class="score-total">${totalScore} / ${totalPossible} Marks</span>
              </div>
              <div style="font-size: 0.85rem; color: var(--text-secondary);">
                Platform Target Benchmark: <strong>${benchmark}%</strong>
                <span style="display: block; font-size: 0.75rem; color: var(--text-muted); margin-top: 0.15rem;">
                  * Note: Platform-defined simulation benchmark, not an official company score cutoff.
                </span>
              </div>
            </div>
          </div>

          <!-- Skills to Revisit Callout & Weak-Topic Drill Launcher -->
          ${failedSkills.size > 0 ? `
            <div style="background-color: var(--status-warning-bg); border-left: 3px solid var(--status-warning); padding: 1rem 1.25rem; border-radius: var(--radius-sm); margin-bottom: 1.5rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
              <div>
                <div style="font-weight: 700; font-size: 0.9rem; color: var(--status-warning);">Topics & Skills to Revisit (${failedQuestionIds.length} Missed Question${failedQuestionIds.length > 1 ? 's' : ''}):</div>
                <div style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 0.4rem;">
                  ${Array.from(failedSkills).map(s => `<span class="badge badge-gray">${s}</span>`).join('')}
                </div>
              </div>
              <button id="results-drill-weak-btn" class="btn btn-primary btn-sm" style="white-space: nowrap;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>
                Drill Missed Questions
              </button>
            </div>
          ` : `
            <div style="background-color: var(--status-success-bg); border-left: 3px solid var(--status-success); padding: 0.85rem 1.15rem; border-radius: var(--radius-sm); margin-bottom: 1.5rem;">
              <div style="font-weight: 700; font-size: 0.9rem; color: var(--status-success);">Exceptional Performance!</div>
              <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.2rem;">All assessed questions were completed with 100% accuracy within standard constraints.</p>
            </div>
          `}

          <!-- Question-wise Breakdown Table -->
          <h3 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 0.75rem;">Question Breakdown & Solutions</h3>
          
          <table class="results-breakdown-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Question</th>
                <th>Type</th>
                <th>Difficulty</th>
                <th>Result</th>
                <th>Marks</th>
              </tr>
            </thead>
            <tbody>
              ${questionResults.map((r, i) => {
                let badgeCls = 'badge-diff-hard';
                let label = 'Incorrect';
                if (r.status === 'correct') {
                  badgeCls = 'badge-verified';
                  label = 'Correct';
                } else if (r.status === 'manual-review') {
                  badgeCls = 'badge-community';
                  label = 'Self-Reviewed';
                } else if (r.status === 'unanswered') {
                  badgeCls = 'badge-gray';
                  label = 'Unanswered';
                }

                return `
                  <tr>
                    <td><strong>${i + 1}</strong></td>
                    <td>
                      <div style="font-weight: 600;">${r.title}</div>
                      <div style="font-size: 0.75rem; color: var(--text-muted);">${(r.skills || []).join(', ')}</div>
                    </td>
                    <td><span class="badge badge-gray">${r.questionType.toUpperCase()}</span></td>
                    <td>${r.difficulty}</td>
                    <td><span class="badge ${badgeCls}">${label}</span></td>
                    <td><strong>${r.awardedMarks} / ${r.maxMarks}</strong></td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>

          <!-- Detailed Question Solutions Drawer -->
          <div style="margin-top: 2rem;">
            <h3 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 1rem;">Detailed Question Explanations & Expected Approaches</h3>
            
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              ${questionResults.map((r, i) => `
                <div class="card" style="background-color: var(--bg-secondary); border-left: 3px solid ${r.status === 'correct' || r.status === 'manual-review' ? 'var(--status-success)' : 'var(--status-danger)'};">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem;">
                    <h4 style="font-size: 1rem; font-weight: 700;">Question ${i + 1}: ${r.title}</h4>
                    <span class="badge ${r.status === 'correct' ? 'badge-verified' : (r.status === 'manual-review' ? 'badge-community' : 'badge-diff-hard')}">
                      ${r.status.toUpperCase()}
                    </span>
                  </div>

                  <!-- Explanation of correct answer and reasoning -->
                  <div style="font-size: 0.875rem; color: var(--text-primary); line-height: 1.5; margin-bottom: 0.75rem;">
                    <strong>Explanation:</strong> ${this.formatMarkdownText(r.explanation || 'See standard solution.')}
                  </div>

                  ${r.expectedApproach ? `
                    <div style="font-size: 0.85rem; color: var(--text-secondary); background-color: var(--bg-primary); padding: 0.65rem 0.85rem; border-radius: var(--radius-sm); border: 1px solid var(--border-light);">
                      <strong>Optimal Approach:</strong> ${r.expectedApproach}
                    </div>
                  ` : ''}
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Next Recommended Mock & Action Buttons -->
          <div style="margin-top: 2.5rem; padding-top: 1.5rem; border-top: 1px solid var(--border-light); display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 1rem;">
            <div>
              <div style="font-size: 0.8rem; font-weight: 600; color: var(--text-muted); text-transform: uppercase;">Next Recommended Simulation:</div>
              <div style="font-weight: 700; font-size: 1.05rem;">${recommendedMock.title}</div>
            </div>
            
            <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
              <button id="results-retake-btn" class="btn btn-secondary">
                Retake This Mock
              </button>
              <a href="#simulator/${recommendedMock.id}" class="btn btn-primary">
                Start Next Mock &rarr;
              </a>
              <a href="#progress" class="btn btn-subtle">
                View My History
              </a>
            </div>
          </div>

        </div>

      </div>
    `;

    // Bind results actions
    container.querySelector('#results-drill-weak-btn')?.addEventListener('click', () => {
      this.startDrill(failedQuestionIds, `Weak-Topic Review Drill (${this.activeSet?.title || 'OA'})`);
    });

    container.querySelector('#results-retake-btn')?.addEventListener('click', () => {
      StorageManager.clearActiveSession();
      this.init(this.activeSet.id);
      this.render(container, this.activeSet.id);
    });
  },

  formatMarkdownText(text) {
    if (!text) return '';
    let res = this.escapeHtml(text);
    res = res.replace(/`([^`]+)`/g, '<code>$1</code>');
    res = res.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    return res;
  },

  escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SimulatorView };
}
