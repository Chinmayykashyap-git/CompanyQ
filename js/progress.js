// js/progress.js — Candidate Progress, Analytics & Data Management
// Manages completed assessment logs, personal export/import, bookmarks, and data erasure.

const ProgressView = {
  render(container) {
    const stats = StorageManager.getStats();
    const attempts = StorageManager.getAttempts();
    const bookmarkIds = StorageManager.getBookmarks();
    const incorrectQIds = StorageManager.getIncorrectQuestions();
    const bookmarkedCompanies = bookmarkIds
      .map(id => COMPANIES_DATA.find(c => c.id === id))
      .filter(Boolean);

    container.innerHTML = `
      <div class="section-header">
        <h1 class="section-title">Progress</h1>
        <p class="section-subtitle">
          Candidate attempt history, local performance benchmarks, and data backup controls.
        </p>
      </div>

      <!-- Performance Metrics Summary Strip -->
      <div class="stats-grid">
        <div class="stat-card">
          <span class="stat-label">Completed Mocks</span>
          <span class="stat-value">${stats.totalAttempts}</span>
          <span class="stat-subtext">${stats.totalAttempts > 0 ? `${stats.passedBenchmarkCount} met threshold` : 'No attempts logged'}</span>
        </div>
        <div class="stat-card">
          <span class="stat-label">Average Score</span>
          <span class="stat-value">${stats.hasData ? stats.averageScoreFormatted : '&mdash;'}</span>
          <span class="stat-subtext">${stats.hasData ? `Best: ${stats.bestScoreFormatted}` : 'Requires 1 attempt'}</span>
        </div>
        <div class="stat-card">
          <span class="stat-label">Questions Evaluated</span>
          <span class="stat-value">${stats.totalQuestionsAnswered}</span>
          <span class="stat-subtext">${stats.hasData ? `${stats.accuracyPct}% accuracy` : '0 answered'}</span>
        </div>
        <div class="stat-card">
          <span class="stat-label">Missed for Review</span>
          <span class="stat-value">${incorrectQIds.length}</span>
          <span class="stat-subtext">${incorrectQIds.length > 0 ? '<a href="#drill" style="color: var(--accent); font-weight: 500;">Start drill &rarr;</a>' : 'All clear'}</span>
        </div>
      </div>

      <!-- Attempt History Table -->
      <div class="card" style="margin-bottom: 1.5rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.85rem; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <h2 style="font-size: 0.95rem; font-weight: 650; color: var(--text-primary);">Completed Assessment Logs</h2>
            <p style="font-size: 0.8rem; color: var(--text-muted);">Chronological record of mock assessment simulations and scores.</p>
          </div>
        </div>

        ${attempts.length > 0 ? `
          <div class="table-container" style="margin-bottom: 0;">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Completed Date</th>
                  <th>Simulation Title</th>
                  <th>Company</th>
                  <th>Score</th>
                  <th>Threshold Status</th>
                  <th>Time Taken</th>
                  <th style="text-align: right;">Action</th>
                </tr>
              </thead>
              <tbody>
                ${attempts.map(a => {
                  const pct = Math.round((a.score / (a.totalPossibleScore || 100)) * 100);
                  const isPassed = pct >= (a.benchmarkPassingScore || 70);
                  const comp = COMPANIES_DATA.find(c => c.id === a.companyId);

                  return `
                    <tr>
                      <td style="font-size: 0.78rem; color: var(--text-muted);">${new Date(a.completedAt).toLocaleString()}</td>
                      <td>
                        <strong>${a.title}</strong>
                        ${a.questionResults ? `<div style="font-size: 0.72rem; color: var(--text-muted);">${a.questionResults.length} questions evaluated</div>` : ''}
                      </td>
                      <td>
                        <a href="#company/${a.companyId}" style="color: var(--text-primary); font-weight: 500;">${comp ? comp.name : a.companyId}</a>
                      </td>
                      <td>
                        <strong>${pct}%</strong> (${a.score}/${a.totalPossibleScore})
                      </td>
                      <td>
                        <span class="badge ${isPassed ? 'badge-verified' : 'badge-diff-hard'}">
                          ${isPassed ? 'Passed' : 'Review needed'}
                        </span>
                      </td>
                      <td style="color: var(--text-muted); font-size: 0.8rem;">${Math.round((a.timeUsedSeconds || 0) / 60)}m</td>
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
            <div class="empty-state-desc">Take a company-specific assessment to track scoring and timing analytics.</div>
            <a href="#simulator/amazon-sde-oa" class="btn btn-primary btn-sm" style="margin-top: 0.4rem;">Take Amazon SDE Mock</a>
          </div>
        `}
      </div>

      <!-- Bookmarked Companies List -->
      <div class="card" style="margin-bottom: 1.5rem;">
        <div style="margin-bottom: 0.85rem;">
          <h2 style="font-size: 0.95rem; font-weight: 650; color: var(--text-primary);">Bookmarked Employers (${bookmarkedCompanies.length})</h2>
          <p style="font-size: 0.8rem; color: var(--text-muted);">Companies pinned for quick recruitment intelligence lookup.</p>
        </div>

        ${bookmarkedCompanies.length > 0 ? `
          <div class="table-container" style="margin-bottom: 0;">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Employer</th>
                  <th>Category</th>
                  <th>Hiring Track</th>
                  <th style="text-align: right;">Actions</th>
                </tr>
              </thead>
              <tbody>
                ${bookmarkedCompanies.map(c => `
                  <tr>
                    <td>
                      <div style="display: flex; align-items: center; gap: 0.6rem;">
                        <div class="company-avatar">${c.name.charAt(0).toUpperCase()}</div>
                        <a href="#company/${c.id}" style="font-weight: 600; color: var(--text-primary);">${c.name}</a>
                      </div>
                    </td>
                    <td style="color: var(--text-muted); font-size: 0.8rem;">${c.category}</td>
                    <td style="font-size: 0.8rem;">${c.roleTracks[0]?.roleTitle || 'SDE'}</td>
                    <td style="text-align: right;">
                      <div style="display: inline-flex; gap: 0.35rem;">
                        <a href="#company/${c.id}" class="btn btn-secondary btn-sm">Inspect</a>
                        <button class="remove-bookmark-btn btn btn-subtle btn-sm" data-id="${c.id}" title="Remove Bookmark">Remove</button>
                      </div>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        ` : `
          <div style="text-align: center; padding: 1.5rem 1rem; color: var(--text-muted); font-size: 0.825rem;">
            <div>No bookmarked companies. Star employers in the directory for fast access.</div>
            <div style="margin-top: 0.5rem;"><a href="#directory" class="btn btn-secondary btn-sm">Browse Directory</a></div>
          </div>
        `}
      </div>

      <!-- Local Data Management & Privacy Tools -->
      <div class="card">
        <div style="margin-bottom: 0.85rem;">
          <h2 style="font-size: 0.95rem; font-weight: 650; color: var(--text-primary);">Local Storage & Backup Management</h2>
          <p style="font-size: 0.8rem; color: var(--text-muted);">
            CompanyQ operates 100% locally on your browser. No personal data is collected or sent to remote servers.
          </p>
        </div>

        <div style="display: flex; gap: 0.65rem; flex-wrap: wrap;">
          <button id="progress-export-btn" class="btn btn-secondary btn-sm">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            Export Backup (.json)
          </button>
          <button id="progress-import-btn" class="btn btn-secondary btn-sm">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
            Import Backup
          </button>
          <button id="progress-reset-btn" class="btn btn-danger btn-sm" style="margin-left: auto;">
            Reset All Local Data
          </button>
        </div>
      </div>

      <!-- Modals and File Pickers Container -->
      <div id="progress-modal-container"></div>
      <input type="file" id="import-file-input" accept=".json,application/json" style="display: none;">
    `;

    this.bindEvents(container);
  },

  bindEvents(container) {
    const modalContainer = container.querySelector('#progress-modal-container');
    const fileInput = container.querySelector('#import-file-input');

    // Remove bookmark buttons
    container.querySelectorAll('.remove-bookmark-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const cid = btn.getAttribute('data-id');
        StorageManager.toggleBookmark(cid);
        this.render(container);
      });
    });

    // Export progress button
    const exportBtn = container.querySelector('#progress-export-btn');
    if (exportBtn) {
      exportBtn.addEventListener('click', () => {
        const jsonData = StorageManager.exportUserData();
        if (!jsonData) {
          alert('Could not export progress data.');
          return;
        }
        const blob = new Blob([jsonData], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `companyq_progress_backup_${Date.now()}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      });
    }

    // Import progress button
    const importBtn = container.querySelector('#progress-import-btn');
    if (importBtn && fileInput) {
      importBtn.addEventListener('click', () => {
        fileInput.click();
      });

      fileInput.addEventListener('change', (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
          const contents = event.target?.result;
          const res = StorageManager.importUserData(contents);
          if (res.success) {
            alert(`Progress restored successfully! Loaded ${res.importedAttempts} attempt(s) and ${res.importedBookmarks} bookmark(s).`);
            this.render(container);
          } else {
            alert(`Import failed: ${res.error}`);
          }
          fileInput.value = '';
        };
        reader.readAsText(file);
      });
    }

    // Reset button & Confirmation modal
    const resetBtn = container.querySelector('#progress-reset-btn');
    if (resetBtn && modalContainer) {
      resetBtn.addEventListener('click', () => {
        modalContainer.innerHTML = `
          <div class="modal-overlay">
            <div class="modal-content">
              <div class="modal-header">
                <h3 class="modal-title" style="color: var(--status-danger);">Confirm Local Data Reset</h3>
                <button id="modal-reset-x" class="btn btn-subtle btn-sm">&times;</button>
              </div>
              <div class="modal-body">
                <p>Are you sure you want to permanently erase your locally saved attempt history, scores, and bookmarked companies?</p>
                <p style="margin-top: 0.5rem; font-size: 0.8rem; color: var(--text-muted);">
                  This action cannot be undone. You can export a JSON backup beforehand if you wish to preserve your records.
                </p>
              </div>
              <div class="modal-footer">
                <button id="modal-cancel-reset" class="btn btn-secondary btn-sm">Cancel</button>
                <button id="modal-confirm-reset" class="btn btn-danger btn-sm">Yes, Erase Everything</button>
              </div>
            </div>
          </div>
        `;

        const closeModal = () => { modalContainer.innerHTML = ''; };
        modalContainer.querySelector('#modal-reset-x')?.addEventListener('click', closeModal);
        modalContainer.querySelector('#modal-cancel-reset')?.addEventListener('click', closeModal);
        modalContainer.querySelector('#modal-confirm-reset')?.addEventListener('click', () => {
          StorageManager.resetAll();
          closeModal();
          this.render(container);
        });
      });
    }
  }
};
