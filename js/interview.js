// js/interview.js — Subsequent Interview Stages Preparation Module
// Covers Live DSA, Low-Level Design (LLD), Core CS Fundamentals, and Behavioral Interviews.

const InterviewPrepView = {
  activeStageIndex: 0,

  render(container) {
    const stages = INTERVIEW_PREP_DATA;
    const currentStage = stages[this.activeStageIndex] || stages[0];

    container.innerHTML = `
      <div class="section-header">
        <h1 class="section-title">
          <span>Subsequent Interview Stages Preparation</span>
        </h1>
        <p class="section-subtitle">
          Prepare for technical, system design, core CS, and behavioral rounds that follow the online assessment.
        </p>
      </div>

      <!-- Navigation Tabs -->
      <div class="tabs-nav" style="margin-bottom: 1.5rem;">
        ${stages.map((stg, idx) => `
          <button class="tab-btn ${idx === this.activeStageIndex ? 'active' : ''}" data-stage="${idx}">
            ${stg.stageName}
          </button>
        `).join('')}
      </div>

      <!-- Stage Overview Card -->
      <div class="card" style="margin-bottom: 1.5rem;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem; margin-bottom: 0.85rem;">
          <div>
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.35rem;">
              <span class="badge badge-blue">${currentStage.category}</span>
            </div>
            <h2 style="font-size: 1.25rem; font-weight: 650; letter-spacing: -0.015em; color: var(--text-primary);">${currentStage.stageName}</h2>
          </div>
          <div style="display: flex; gap: 0.5rem;">
            <a href="#directory" class="btn btn-secondary btn-sm">Filter Companies</a>
          </div>
        </div>

        <p style="font-size: 0.875rem; color: var(--text-secondary); line-height: 1.55; max-width: 860px;">
          ${currentStage.overview}
        </p>

        <!-- Key Topics Covered -->
        <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border-default);">
          <span style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.03em; color: var(--text-muted);">Key Evaluated Topics:</span>
          <div style="display: flex; flex-wrap: wrap; gap: 0.35rem; margin-top: 0.4rem;">
            ${currentStage.keyTopics.map(t => `<span class="badge badge-gray">${t}</span>`).join('')}
          </div>
        </div>
      </div>

      <!-- Two-Column Layout: Evaluation Rubric & Interactive Practice -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.25rem; margin-bottom: 2rem;">
        
        <!-- Evaluation Rubric Breakdown -->
        <div class="card">
          <h3 style="font-size: 0.95rem; font-weight: 650; letter-spacing: -0.01em; margin-bottom: 0.85rem; display: flex; align-items: center; gap: 0.45rem; color: var(--text-primary);">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            Interviewer Scoring Rubric
          </h3>

          <div style="display: flex; flex-direction: column; gap: 0.65rem;">
            ${currentStage.rubricCriteria.map(rc => `
              <div style="background-color: var(--bg-subtle); border-radius: var(--radius-sm); padding: 0.75rem 0.85rem; border: 1px solid var(--border-default);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.25rem;">
                  <strong style="font-size: 0.85rem; color: var(--text-primary); font-weight: 600;">${rc.criterion}</strong>
                  <span class="badge badge-blue">${rc.weight}</span>
                </div>
                <div style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.45;">
                  <span style="color: var(--text-muted); font-weight: 500;">Candidate Tip:</span> ${rc.tip}
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Interactive Stage Practice Questions -->
        <div class="card">
          <h3 style="font-size: 0.95rem; font-weight: 650; letter-spacing: -0.01em; margin-bottom: 0.85rem; display: flex; align-items: center; gap: 0.45rem; color: var(--text-primary);">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
            Standard Stage Practice Problems
          </h3>

          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            ${currentStage.practiceQuestions.map((pq, i) => `
              <div style="background-color: var(--bg-subtle); border-radius: var(--radius-sm); padding: 0.75rem 0.85rem; border: 1px solid var(--border-default);">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.3rem;">
                  <h4 style="font-size: 0.875rem; font-weight: 600; color: var(--text-primary);">${i + 1}. ${pq.title}</h4>
                  <span class="badge ${pq.difficulty === 'Hard' ? 'badge-diff-hard' : 'badge-diff-med'}">${pq.difficulty}</span>
                </div>
                <div style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.4rem; line-height: 1.45;">
                  <span style="color: var(--text-muted); font-weight: 500;">Approach:</span> ${pq.approach}
                </div>
                <details style="font-size: 0.78rem; color: var(--accent); cursor: pointer;">
                  <summary style="font-weight: 500;">Interviewer Verification Checklist</summary>
                  <ul style="padding-left: 1.15rem; margin-top: 0.35rem; color: var(--text-secondary); line-height: 1.5;">
                    <li>Clarified inputs and asked for edge cases upfront.</li>
                    <li>Structured modular classes or functions before writing raw algorithms.</li>
                    <li>Stated time complexity and auxiliary space explicitly.</li>
                  </ul>
                </details>
              </div>
            `).join('')}
          </div>
        </div>

      </div>
    `;

    // Bind tabs
    container.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-stage'), 10);
        this.activeStageIndex = idx;
        this.render(container);
      });
    });
  }
};

