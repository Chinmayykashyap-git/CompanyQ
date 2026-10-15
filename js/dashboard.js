// js/dashboard.js — Production Dashboard View Controller
// Information-dense, restrained engineering workspace inspired by Linear and Vercel.

const DashboardView = {
  render(container) {
    const stats = StorageManager.getStats();
    const activeSession = StorageManager.getActiveSession();
    const recentCompanyIds = StorageManager.getRecentCompanies();
    const incorrectQIds = StorageManager.getIncorrectQuestions();
    const totalCompanies = COMPANIES_DATA.length;
    const totalAssessments = ASSESSMENT_SETS.length;

    // Hydrate recently viewed companies (up to 4)
    const recentCompanies = recentCompanyIds
      .slice(0, 4)
      .map(id => COMPANIES_DATA.find(c => c.id === id))
      .filter(Boolean);

    // Active session resolution
    let activeAssessment = null;
    if (activeSession && activeSession.assessmentSetId) {
      activeAssessment = ASSESSMENT_SETS.find(s => s.id === activeSession.assessmentSetId);
    }

    container.innerHTML = `
      <div class="section-header">
        <h1 class="section-title">Dashboard</h1>
        <p class="section-subtitle">
          Assessment workspace and company-specific preparation intelligence.
        </p>
      </div>

      <!-- Continue Preparation Item -->
      ${activeAssessment ? `
        <div class="banner-box">
          <div class="banner-content">
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <span class="badge badge-blue">Active Attempt</span>
              <span style="font-size: 0.8rem; color: var(--text-muted);">${activeAssessment.roleLevel}</span>
            </div>
            <h2 class="banner-title" style="margin-top: 0.25rem;">${activeAssessment.title}</h2>
            <div class="banner-desc">
              Question ${activeSession.currentQuestionIndex + 1} of ${activeAssessment.questionIds.length} in progress · 
              ${activeSession.assessmentMode === 'timed' ? `${Math.round(activeSession.timeRemainingSeconds / 60)}m remaining` : 'Untimed practice mode'}
            </div>
          </div>
          <a href="#simulator/${activeAssessment.id}" class="btn btn-primary">
            Continue assessment &rarr;
          </a>
        </div>
      ` : (incorrectQIds.length > 0 ? `
        <div class="banner-box" style="border-left-color: var(--status-estimated);">
          <div class="banner-content">
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <span class="badge badge-estimated">Targeted Drill Available</span>
              <span style="font-size: 0.8rem; color: var(--text-muted);">${incorrectQIds.length} missed question${incorrectQIds.length > 1 ? 's' : ''}</span>
            </div>
            <h2 class="banner-title" style="margin-top: 0.25rem;">Review Previously Missed Concepts</h2>
            <div class="banner-desc">
              Reinforce problem areas with an untimed practice session covering questions you answered incorrectly.
            </div>
          </div>
          <a href="#drill" class="btn btn-secondary">
            Start weak-topic drill &rarr;
          </a>
        </div>
      ` : `
        <div class="banner-box" style="border-left-color: var(--border-strong);">
          <div class="banner-content">
            <h2 class="banner-title">No assessment currently in progress</h2>
            <div class="banner-desc">
              Select an employer from the directory to review recruitment stages and begin a timed simulation.
            </div>
          </div>
          <a href="#directory" class="btn btn-secondary">
            Browse companies &rarr;
          </a>
        </div>
      `)}

      <!-- Dense Horizontal Metric Strip -->
      <div class="stats-grid">
        <div class="stat-card">
          <span class="stat-label">Completed Mocks</span>
          <span class="stat-value">${stats.hasData ? stats.totalAttempts : '0'}</span>
          <span class="stat-subtext">${stats.hasData ? `${stats.passedBenchmarkCount} met target threshold` : 'No attempts logged'}</span>
        </div>
        <div class="stat-card">
          <span class="stat-label">Questions Evaluated</span>
          <span class="stat-value">${stats.hasData ? stats.totalQuestionsAnswered : '0'}</span>
          <span class="stat-subtext">${stats.hasData ? `${stats.accuracyPct}% aggregate accuracy` : '0 questions answered'}</span>
        </div>
        <div class="stat-card">
          <span class="stat-label">Average Score</span>
          <span class="stat-value">${stats.hasData ? stats.averageScoreFormatted : '&mdash;'}</span>
          <span class="stat-subtext">${stats.hasData ? `Best: ${stats.bestScoreFormatted} · Recent: ${stats.recentScoreFormatted}` : 'Requires 1 attempt'}</span>
        </div>
        <div class="stat-card">
          <span class="stat-label">Practice Time</span>
          <span class="stat-value">${stats.hasData ? `${stats.totalTimeSpentMinutes}m` : '0m'}</span>
          <span class="stat-subtext">${stats.hasData ? `${stats.sampleConfidence} confidence sample` : 'Local timer tracking'}</span>
        </div>
      </div>

      <!-- Topic Mastery & Weak-Topic Progress (When Data Exists) -->
      ${stats.hasData && Object.keys(stats.topicAnalytics.topics).length > 0 ? `
        <div class="card" style="margin-bottom: 1.5rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
            <div>
              <h2 style="font-size: 0.95rem; font-weight: 600; color: var(--text-primary);">Topic Performance Breakdown</h2>
              <p style="font-size: 0.8rem; color: var(--text-muted);">Empirical accuracy aggregated across your assessment submissions.</p>
            </div>
            ${incorrectQIds.length > 0 ? `
              <a href="#drill" class="btn btn-subtle btn-sm">
                Drill ${incorrectQIds.length} missed question${incorrectQIds.length > 1 ? 's' : ''} &rarr;
              </a>
            ` : ''}
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 0.75rem;">
            ${Object.keys(stats.topicAnalytics.topics).slice(0, 6).map(skill => {
              const item = stats.topicAnalytics.topics[skill];
              const isStrong = item.accuracyPct >= 70;
              return `
                <div style="background-color: var(--bg-subtle); border: 1px solid var(--border-default); border-radius: var(--radius-sm); padding: 0.65rem 0.85rem;">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.35rem;">
                    <span style="font-size: 0.825rem; font-weight: 600;">${skill}</span>
                    <span class="badge ${isStrong ? 'badge-verified' : 'badge-estimated'}">
                      ${item.accuracyPct}% (${item.correct}/${item.total})
                    </span>
                  </div>
                  <div style="background-color: var(--border-default); height: 4px; border-radius: 2px; overflow: hidden; margin-bottom: 0.4rem;">
                    <div style="background-color: ${isStrong ? 'var(--status-verified)' : 'var(--status-estimated)'}; width: ${item.accuracyPct}%; height: 100%;"></div>
                  </div>
                  <div style="text-align: right;">
                    <a href="#drill?topic=${encodeURIComponent(skill)}" style="font-size: 0.72rem; color: var(--accent); font-weight: 500;">
                      Practice &rarr;
                    </a>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Recent Practice Activity Table -->
      <div class="card" style="margin-bottom: 1.5rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.85rem;">
          <h2 style="font-size: 0.95rem; font-weight: 600; color: var(--text-primary);">Recent Assessment Activity</h2>
          ${stats.recentAttempts.length > 0 ? `
            <a href="#progress" style="font-size: 0.8rem; color: var(--text-muted);">View all history &rarr;</a>
          ` : ''}
        </div>

        ${stats.recentAttempts.length > 0 ? `
          <div class="table-container" style="margin-bottom: 0;">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Assessment</th>
                  <th>Company</th>
                  <th>Score</th>
                  <th>Threshold</th>
                  <th>Duration</th>
                  <th style="text-align: right;">Action</th>
                </tr>
              </thead>
              <tbody>
                ${stats.recentAttempts.map(a => {
                  const pct = Math.round((a.score / (a.totalPossibleScore || 100)) * 100);
                  const isPassed = pct >= (a.benchmarkPassingScore || 70);
                  const comp = COMPANIES_DATA.find(c => c.id === a.companyId);
                  return `
                    <tr>
                      <td style="color: var(--text-muted); font-size: 0.8rem;">${new Date(a.completedAt).toLocaleDateString()}</td>
                      <td><strong>${a.title}</strong></td>
                      <td><a href="#company/${a.companyId}" style="color: var(--text-primary); font-weight: 500;">${comp ? comp.name : a.companyId}</a></td>
                      <td><strong>${pct}%</strong> (${a.score}/${a.totalPossibleScore})</td>
                      <td>
                        <span class="badge ${isPassed ? 'badge-verified' : 'badge-diff-hard'}">
                          ${isPassed ? 'Passed' : 'Review needed'}
                        </span>
                      </td>
                      <td style="color: var(--text-muted);">${Math.round((a.timeUsedSeconds || 0) / 60)}m</td>
                      <td style="text-align: right;">
                        <a href="#simulator/${a.assessmentSetId}" class="btn btn-secondary btn-sm">Retake</a>
                      </td>
                    </tr>
                  `;
                }).join('')}
              </tbody>
            </table>
          </div>
        ` : `
          <div class="empty-state">
            <svg class="empty-state-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            <div class="empty-state-title">No completed assessments recorded</div>
            <div class="empty-state-desc">Your practice attempts and score breakdowns will automatically log here as you complete assessments.</div>
          </div>
        `}
      </div>

      <!-- Curated Priority Pathways (Clean Structured List) -->
      <div class="card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.85rem;">
          <div>
            <h2 style="font-size: 0.95rem; font-weight: 600; color: var(--text-primary);">Curated Hiring Pathways</h2>
            <p style="font-size: 0.8rem; color: var(--text-muted);">Standard screening tracks with corroborated format specifications.</p>
          </div>
          <a href="#directory" class="btn btn-secondary btn-sm">View all 132 companies &rarr;</a>
        </div>

        <div class="table-container" style="margin-bottom: 0;">
          <table class="data-table">
            <thead>
              <tr>
                <th>Employer</th>
                <th>Track / Role</th>
                <th>Format Details</th>
                <th>Evidence</th>
                <th>Assessment Spec</th>
                <th style="text-align: right;">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <div class="company-avatar">A</div>
                    <div>
                      <a href="#company/amazon" style="font-weight: 600; color: var(--text-primary);">Amazon</a>
                      <div style="font-size: 0.72rem; color: var(--text-muted);">Big Tech & Product</div>
                    </div>
                  </div>
                </td>
                <td>SDE-1 / Graduate</td>
                <td>2 Algorithmic Coding + LP Survey</td>
                <td><span class="badge badge-verified">Verified</span></td>
                <td style="color: var(--text-muted); font-size: 0.8rem;">90m · 100 pts</td>
                <td style="text-align: right;"><a href="#simulator/amazon-sde-oa" class="btn btn-primary btn-sm">Start OA</a></td>
              </tr>

              <tr>
                <td>
                  <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <div class="company-avatar">G</div>
                    <div>
                      <a href="#company/google" style="font-weight: 600; color: var(--text-primary);">Google</a>
                      <div style="font-size: 0.72rem; color: var(--text-muted);">Big Tech & Product</div>
                    </div>
                  </div>
                </td>
                <td>Early Career SWE (L3)</td>
                <td>2 Advanced DP / Graph Problems</td>
                <td><span class="badge badge-verified">Verified</span></td>
                <td style="color: var(--text-muted); font-size: 0.8rem;">85m · 100 pts</td>
                <td style="text-align: right;"><a href="#simulator/google-swe-oa" class="btn btn-primary btn-sm">Start OA</a></td>
              </tr>

              <tr>
                <td>
                  <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <div class="company-avatar">T</div>
                    <div>
                      <a href="#company/tcs" style="font-weight: 600; color: var(--text-primary);">TCS</a>
                      <div style="font-size: 0.72rem; color: var(--text-muted);">IT Services & Campus</div>
                    </div>
                  </div>
                </td>
                <td>TCS Digital / Prime</td>
                <td>Coding + Advanced Aptitude + CS</td>
                <td><span class="badge badge-verified">Verified</span></td>
                <td style="color: var(--text-muted); font-size: 0.8rem;">75m · 100 pts</td>
                <td style="text-align: right;"><a href="#simulator/tcs-digital-oa" class="btn btn-primary btn-sm">Start OA</a></td>
              </tr>

              <tr>
                <td>
                  <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <div class="company-avatar">R</div>
                    <div>
                      <a href="#company/razorpay" style="font-weight: 600; color: var(--text-primary);">Razorpay</a>
                      <div style="font-size: 0.72rem; color: var(--text-muted);">Fintech & Payments</div>
                    </div>
                  </div>
                </td>
                <td>Software Engineer</td>
                <td>Ledger Reconcile + ACID + Concurrency</td>
                <td><span class="badge badge-community">Representative</span></td>
                <td style="color: var(--text-muted); font-size: 0.8rem;">90m · 100 pts</td>
                <td style="text-align: right;"><a href="#simulator/fintech-payment-oa" class="btn btn-primary btn-sm">Start OA</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Recently Viewed Companies Row if available -->
      ${recentCompanies.length > 0 ? `
        <div style="margin-top: 1.5rem; display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap; font-size: 0.8rem; color: var(--text-muted);">
          <span>Recently viewed:</span>
          ${recentCompanies.map(c => `
            <a href="#company/${c.id}" class="filter-pill" style="font-size: 0.78rem;">
              ${c.name}
            </a>
          `).join('')}
        </div>
      ` : ''}
    `;
  }
};
