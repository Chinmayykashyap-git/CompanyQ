// js/sources.js — Research Methodology & Source Register View
// Transparent documentation of data sourcing, verification hierarchy, uncertainty indicators, and research principles.

const SourcesView = {
  render(container) {
    const totalCompanies = COMPANIES_DATA.length;
    const verifiedCount = COMPANIES_DATA.filter(c => c.dataConfidence === 'verified').length;
    const communityCount = COMPANIES_DATA.filter(c => c.dataConfidence === 'community-reported').length;

    container.innerHTML = `
      <div class="section-header">
        <h1 class="section-title">
          <span>Research Methodology & Source Register</span>
        </h1>
        <p class="section-subtitle">
          Transparent documentation of data collection standards, evidence confidence tiers, and assessment simulation principles.
        </p>
      </div>

      <!-- Overview Stats -->
      <div class="stats-grid" style="margin-bottom: 2rem;">
        <div class="stat-card">
          <span class="stat-label">Total Employers Researched</span>
          <span class="stat-value">${totalCompanies}</span>
          <span class="stat-subtext">100% deduplicated</span>
        </div>
        <div class="stat-card">
          <span class="stat-label">Verified Profiles</span>
          <span class="stat-value" style="color: var(--status-success);">${verifiedCount}</span>
          <span class="stat-subtext">Official career documentation</span>
        </div>
        <div class="stat-card">
          <span class="stat-label">Community Reported</span>
          <span class="stat-value" style="color: var(--status-info);">${communityCount}</span>
          <span class="stat-subtext">Multi-source candidate experiences</span>
        </div>
        <div class="stat-card">
          <span class="stat-label">Uncertainty Flagged</span>
          <span class="stat-value">100%</span>
          <span class="stat-subtext">Clear caveats where processes vary</span>
        </div>
      </div>

      <!-- Research Hierarchy Standards -->
      <div class="card" style="margin-bottom: 1.5rem;">
        <h2 style="font-size: 1.15rem; font-weight: 650; letter-spacing: -0.01em; margin-bottom: 0.5rem; color: var(--text-primary);">Evidence & Confidence Hierarchy</h2>
        <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.55; margin-bottom: 1.25rem;">
          To prevent misleading engineering candidates, CompanyQ operates under strict research integrity rules: we never fabricate round cutoffs, test durations, or passing scores. Numerical values that cannot be reliably verified are represented as null or explicitly labeled as variable.
        </p>

        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
          <div style="padding: 0.85rem 1rem; background-color: var(--status-verified-bg); border: 1px solid var(--status-verified-border); border-left: 3px solid var(--status-verified); border-radius: var(--radius-sm);">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.3rem;">
              <span class="badge badge-verified">Tier 1: Verified (Official)</span>
              <strong style="font-size: 0.875rem; color: var(--text-primary); font-weight: 600;">Primary Documentation & Official University Programs</strong>
            </div>
            <p style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.5;">
              Derived from official company career portals (e.g. Amazon Jobs Software Development Topics, Google How We Hire, Microsoft Interviewing Guide, TCS NextStep campus circulars). These describe confirmed recruitment phases and evaluation standards directly published by the employer.
            </p>
          </div>

          <div style="padding: 0.85rem 1rem; background-color: var(--status-community-bg); border: 1px solid var(--status-community-border); border-left: 3px solid var(--status-community); border-radius: var(--radius-sm);">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.3rem;">
              <span class="badge badge-community">Tier 2: Community Reported</span>
              <strong style="font-size: 0.875rem; color: var(--text-primary); font-weight: 600;">Cross-Validated Candidate Experience Reports</strong>
            </div>
            <p style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.5;">
              Where companies do not publish an exact stage-by-stage breakdown publicly, information is synthesized from multiple independent student placement reports (e.g. IIT/NIT campus drives, GeeksforGeeks interview experiences, LeetCode discuss aggregates). We require cross-corroboration across at least 3 distinct candidates before recording a stage.
            </p>
          </div>

          <div style="padding: 0.85rem 1rem; background-color: var(--status-estimated-bg); border: 1px solid var(--status-estimated-border); border-left: 3px solid var(--status-estimated); border-radius: var(--radius-sm);">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.3rem;">
              <span class="badge badge-estimated">Tier 3: Estimated & Variable</span>
              <strong style="font-size: 0.875rem; color: var(--text-primary); font-weight: 600;">Acknowledged Discretionary Stages</strong>
            </div>
            <p style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.5;">
              Hiring stages that fluctuate depending on candidate seniority, campus tier, or individual engineering teams (such as whether a hiring manager conduct a system design or a behavioral deep-dive) are explicitly marked with an uncertainty notice rather than presented as a rigid checklist.
            </p>
          </div>
        </div>
      </div>

      <!-- Simulation Integrity Charter -->
      <div class="card" style="margin-bottom: 2rem;">
        <h2 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.75rem;">Assessment Simulation Charter</h2>
        <ul style="padding-left: 1.5rem; font-size: 0.9rem; color: var(--text-secondary); line-height: 1.7;">
          <li><strong>No Stolen Assessments:</strong> All practice questions in CompanyQ are 100% original problems constructed to test the exact cognitive and algorithmic patterns verified in company assessments, without infringing on proprietary test banks.</li>
          <li><strong>No Fake Code Execution:</strong> This client-side platform provides sample tests and structured self-review rather than pretending arbitrary user code was compiled in a remote sandbox.</li>
          <li><strong>Platform Benchmarks vs Company Cutoffs:</strong> Passing thresholds are clearly designated as platform-defined training benchmarks (e.g. 75%), not official internal employer cutoffs which are secret and dynamic.</li>
          <li><strong>Local Data Ownership:</strong> All user progress belongs to the candidate and is stored exclusively on their device via standard browser localStorage.</li>
        </ul>
      </div>
    `;
  }
};

