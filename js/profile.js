// js/profile.js — Company Recruitment Intelligence Profile
// Technical research page with documented stages, verification sources, and practice triggers.

const CompanyProfileView = {
  activeTrackIndex: 0,

  render(container, companyId) {
    const comp = COMPANIES_DATA.find(c => c.id === companyId);
    if (!comp) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-title">Company Profile Not Found</div>
          <div class="empty-state-desc">The employer identifier "${companyId}" does not exist in the database.</div>
          <a href="#directory" class="btn btn-secondary btn-sm" style="margin-top: 0.5rem;">Return to directory</a>
        </div>
      `;
      return;
    }

    // Record as recently viewed
    StorageManager.addRecentCompany(comp.id);

    const isBookmarked = StorageManager.isBookmarked(comp.id);
    const tracks = comp.roleTracks || [];
    const activeTrack = tracks[this.activeTrackIndex] || tracks[0];
    const stages = activeTrack ? activeTrack.assessmentStages : [];
    const attempts = StorageManager.getAttemptsForCompany(comp.id);
    const matchingMock = ASSESSMENT_SETS.find(s => s.companyId === comp.id);

    container.innerHTML = `
      <!-- Breadcrumb navigation -->
      <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 1rem; display: flex; align-items: center; gap: 0.4rem;">
        <a href="#directory" style="color: var(--text-muted);">Companies</a>
        <span>/</span>
        <a href="#directory?cat=${encodeURIComponent(comp.category)}" style="color: var(--text-muted);">${comp.category}</a>
        <span>/</span>
        <span style="color: var(--text-primary); font-weight: 500;">${comp.name}</span>
      </div>

      <!-- Profile Header -->
      <div class="profile-header">
        <div class="profile-top">
          <div>
            <div style="display: flex; align-items: center; gap: 0.6rem; flex-wrap: wrap; margin-bottom: 0.35rem;">
              <h1 class="profile-title">${comp.name}</h1>
              <span class="badge ${comp.dataConfidence === 'verified' ? 'badge-verified' : 'badge-community'}">
                ${comp.dataConfidence === 'verified' ? 'Verified format' : 'Community reported'}
              </span>
              <button id="profile-bookmark-btn" class="bookmark-btn" title="${isBookmarked ? 'Remove bookmark' : 'Bookmark company'}">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="${isBookmarked ? '#f59e0b' : 'none'}" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              </button>
            </div>
            <div style="font-size: 0.85rem; color: var(--text-muted);">
              ${comp.category}${comp.aliases && comp.aliases.length > 0 ? ` · Known as ${comp.aliases.join(', ')}` : ''}
            </div>
          </div>
          
          <div>
            ${matchingMock ? `
              <a href="#simulator/${matchingMock.id}" class="btn btn-primary">
                Start Mock Assessment &rarr;
              </a>
            ` : ''}
          </div>
        </div>

        <p class="profile-desc">${comp.overview}</p>

        <!-- Technical Metadata Grid -->
        <div class="profile-info-grid">
          <div class="info-item">
            <span class="info-label">Global Headquarters</span>
            <span class="info-val">${comp.headquarters || 'Unspecified'}</span>
          </div>
          <div class="info-item">
            <span class="info-label">India Engineering Hubs</span>
            <span class="info-val">${comp.indiaOffices && comp.indiaOffices.length > 0 ? comp.indiaOffices.join(', ') : 'Varies'}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Last Sourced / Verified</span>
            <span class="info-val">${comp.lastVerified || 'Recent'}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Primary Source Link</span>
            <span class="info-val">
              ${comp.sourceUrls && comp.sourceUrls.length > 0 ? `
                <a href="${comp.sourceUrls[0]}" target="_blank" rel="noopener noreferrer" style="color: var(--accent); display: inline-flex; align-items: center; gap: 0.2rem;">
                  Official Career Guide
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
              ` : '<span style="color: var(--text-muted);">Candidate Aggregates</span>'}
            </span>
          </div>
        </div>
      </div>

      <!-- Role Tracks Segmented Control -->
      ${tracks.length > 1 ? `
        <div style="margin-bottom: 1.25rem;">
          <div style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.4rem;">Select Hiring Track:</div>
          <div style="display: flex; gap: 0.35rem; flex-wrap: wrap;">
            ${tracks.map((t, idx) => `
              <button class="filter-pill ${idx === this.activeTrackIndex ? 'active' : ''} tab-btn" data-track="${idx}">
                ${t.roleTitle} (${t.hiringType})
              </button>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Track Metadata Summary -->
      <div class="card" style="margin-bottom: 1.5rem;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem;">
          <div>
            <div style="display: flex; align-items: center; gap: 0.4rem; margin-bottom: 0.2rem;">
              <span class="badge badge-gray">${activeTrack.hiringType}</span>
              <span style="font-size: 0.8rem; color: var(--text-muted);">Target: ${activeTrack.experienceLevels.join(', ')}</span>
            </div>
            <h2 style="font-size: 1.15rem; font-weight: 650; color: var(--text-primary);">
              ${activeTrack.roleTitle}
            </h2>
            <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.15rem;">
              Location: ${activeTrack.location}
            </div>
          </div>

          <div style="display: flex; gap: 1.25rem; background-color: var(--bg-subtle); padding: 0.6rem 1rem; border-radius: var(--radius-sm); border: 1px solid var(--border-default);">
            <div>
              <div style="font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase; font-weight: 600;">Reported Rounds</div>
              <div style="font-size: 1.1rem; font-weight: 700; color: var(--text-primary);">
                ${activeTrack.reportedRoundCountMin ? `${activeTrack.reportedRoundCountMin}–${activeTrack.reportedRoundCountMax || activeTrack.reportedRoundCountTypical}` : 'Varies'}
              </div>
            </div>
            <div style="border-left: 1px solid var(--border-default); padding-left: 1.25rem;">
              <div style="font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase; font-weight: 600;">Documented Stages</div>
              <div style="font-size: 1.1rem; font-weight: 700; color: var(--accent);">${stages.length}</div>
            </div>
          </div>
        </div>

        ${activeTrack.variationNotes ? `
          <div style="font-size: 0.8rem; color: var(--text-secondary); background-color: var(--bg-subtle); padding: 0.5rem 0.75rem; border-radius: var(--radius-sm); border-left: 3px solid var(--border-strong); margin-top: 0.85rem;">
            <strong>Recruitment Variation Note:</strong> ${activeTrack.variationNotes}
          </div>
        ` : ''}
      </div>

      <!-- Recruitment Stages Timeline (Clean Vertical Node Layout) -->
      <div style="margin-bottom: 2rem;">
        <h3 style="font-size: 1rem; font-weight: 650; margin-bottom: 0.85rem; color: var(--text-primary);">
          Documented Recruitment Process Timeline
        </h3>

        <div class="timeline-container">
          ${stages.map((stage, idx) => `
            <div class="timeline-item">
              <div class="timeline-node ${idx === 0 ? 'active' : ''}"></div>
              <div class="timeline-card">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.5rem; margin-bottom: 0.4rem;">
                  <div>
                    <span style="font-size: 0.72rem; color: var(--text-muted); font-weight: 600; text-transform: uppercase;">
                      Stage ${idx + 1} · ${stage.stageType}
                    </span>
                    <h4 class="timeline-title">${stage.stageName}</h4>
                  </div>
                  <span class="badge ${stage.confidence === 'verified' ? 'badge-verified' : 'badge-community'}">
                    ${stage.confidence}
                  </span>
                </div>

                <div class="timeline-meta" style="margin-bottom: 0.5rem;">
                  <span><strong>Format:</strong> ${stage.format || 'Standard evaluation'}</span>
                  <span><strong>Duration:</strong> ${stage.durationMinutes ? `${stage.durationMinutes}m` : 'Varies'}</span>
                  <span><strong>Questions:</strong> ${stage.questionCount ? `${stage.questionCount} Qs` : 'Varies'}</span>
                  <span><strong>Difficulty:</strong> ${stage.difficultyDistribution || 'Standard engineering'}</span>
                </div>

                ${stage.skillsAssessed && stage.skillsAssessed.length > 0 ? `
                  <div style="display: flex; gap: 0.3rem; flex-wrap: wrap; margin-bottom: 0.5rem;">
                    ${stage.skillsAssessed.map(s => `<span class="badge badge-gray">${s}</span>`).join('')}
                  </div>
                ` : ''}

                ${stage.uncertaintyNotes ? `
                  <div style="font-size: 0.78rem; color: var(--text-muted); background-color: var(--bg-subtle); padding: 0.4rem 0.6rem; border-radius: var(--radius-xs); margin-bottom: 0.4rem;">
                    <strong>Evidence note:</strong> ${stage.uncertaintyNotes}
                  </div>
                ` : ''}

                <div style="font-size: 0.72rem; color: var(--text-muted); display: flex; align-items: center; gap: 0.25rem;">
                  <span>Source:</span>
                  <a href="${stage.sourceUrl || comp.sourceUrls[0]}" target="_blank" rel="noopener noreferrer" style="color: var(--accent);">
                    ${stage.evidenceType === 'official-portal' ? 'Official Portal Documentation' : 'Candidate Report'}
                  </a>
                  <span>· Verified: ${stage.lastVerified || comp.lastVerified}</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Action Panel & Previous Attempts -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.25rem; margin-bottom: 1.5rem;">
        
        <!-- Practice Assessment Card -->
        <div class="card">
          <h3 style="font-size: 0.95rem; font-weight: 650; margin-bottom: 0.35rem;">Assessment Practice</h3>
          <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.85rem;">
            Practice with timed mock assessments or prepare subsequent technical and design rounds.
          </p>

          ${matchingMock ? `
            <div style="padding: 0.85rem; background-color: var(--bg-subtle); border-radius: var(--radius-sm); border: 1px solid var(--border-default); margin-bottom: 0.75rem;">
              <div style="font-weight: 600; font-size: 0.9rem; color: var(--text-primary);">${matchingMock.title}</div>
              <div style="font-size: 0.78rem; color: var(--text-muted); margin: 0.2rem 0 0.5rem 0;">${matchingMock.description}</div>
              <a href="#simulator/${matchingMock.id}" class="btn btn-primary btn-sm">
                Start Timed Simulation (${matchingMock.durationMinutes}m) &rarr;
              </a>
            </div>
          ` : `
            <div style="padding: 0.85rem; background-color: var(--bg-subtle); border-radius: var(--radius-sm); border: 1px solid var(--border-default); margin-bottom: 0.75rem;">
              <div style="font-weight: 600; font-size: 0.9rem;">Practice Assessment Available</div>
              <a href="#simulator/amazon-sde-oa" class="btn btn-secondary btn-sm" style="margin-top: 0.4rem;">
                Launch Practice Simulation &rarr;
              </a>
            </div>
          `}

          <a href="#interview" class="btn btn-subtle btn-sm" style="width: 100%; justify-content: flex-start; padding: 0.5rem 0.25rem;">
            Prepare subsequent interview rounds (LLD, DSA, Behavioral) &rarr;
          </a>
        </div>

        <!-- Previous Local Attempts for this Employer -->
        <div class="card">
          <h3 style="font-size: 0.95rem; font-weight: 650; margin-bottom: 0.35rem;">Local Performance Record</h3>
          <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.85rem;">
            Locally saved attempt history for ${comp.name}.
          </p>

          ${attempts.length > 0 ? `
            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
              ${attempts.map(a => {
                const pct = Math.round((a.score / (a.totalPossibleScore || 100)) * 100);
                return `
                  <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.5rem 0.65rem; background-color: var(--bg-subtle); border-radius: var(--radius-xs); border: 1px solid var(--border-default);">
                    <div>
                      <div style="font-weight: 600; font-size: 0.85rem;">${a.title}</div>
                      <div style="font-size: 0.72rem; color: var(--text-muted);">${new Date(a.completedAt).toLocaleDateString()} · ${Math.round((a.timeUsedSeconds || 0) / 60)}m</div>
                    </div>
                    <span class="badge ${pct >= 70 ? 'badge-verified' : 'badge-diff-hard'}">${pct}%</span>
                  </div>
                `;
              }).join('')}
            </div>
          ` : `
            <div style="text-align: center; padding: 1.5rem 0.75rem; color: var(--text-muted); font-size: 0.8rem;">
              <div>No recorded attempts for ${comp.name} yet.</div>
              <div style="margin-top: 0.25rem; font-size: 0.75rem;">Completing an assessment will record your score and timing here.</div>
            </div>
          `}
        </div>

      </div>
    `;

    // Bind track switcher tab buttons
    container.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const trackIdx = parseInt(btn.getAttribute('data-track'), 10);
        this.activeTrackIndex = trackIdx;
        this.render(container, companyId);
      });
    });

    // Bind bookmark toggle
    const bookmarkBtn = container.querySelector('#profile-bookmark-btn');
    if (bookmarkBtn) {
      bookmarkBtn.addEventListener('click', () => {
        StorageManager.toggleBookmark(comp.id);
        this.render(container, companyId);
      });
    }
  }
};
