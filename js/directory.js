// js/directory.js — Company Directory View Controller
// High-density, searchable directory inspired by GitHub repository lists and Linear data tables.

const DirectoryView = {
  state: {
    query: '',
    selectedCategory: 'all',
    selectedHiringType: 'all',
    selectedConfidence: 'all',
    sortBy: 'name-asc',
    currentPage: 1,
    pageSize: 25
  },

  initFromParams(params) {
    if (params) {
      if (params.q) this.state.query = params.q;
      if (params.cat) this.state.selectedCategory = params.cat;
      if (params.type) this.state.selectedHiringType = params.type;
      if (params.conf) this.state.selectedConfidence = params.conf;
      if (params.sort) this.state.sortBy = params.sort;
      if (params.page) this.state.currentPage = parseInt(params.page, 10) || 1;
    }
  },

  getFilteredCompanies() {
    let list = [...COMPANIES_DATA];

    // Search query
    if (this.state.query.trim()) {
      const q = this.state.query.toLowerCase().trim();
      list = list.filter(c => {
        const nameMatch = c.name.toLowerCase().includes(q);
        const aliasMatch = c.aliases && c.aliases.some(a => a.toLowerCase().includes(q));
        const catMatch = c.category.toLowerCase().includes(q);
        const officesMatch = c.indiaOffices && c.indiaOffices.some(o => o.toLowerCase().includes(q));
        const trackMatch = c.roleTracks && c.roleTracks.some(t => t.roleTitle.toLowerCase().includes(q));
        return nameMatch || aliasMatch || catMatch || officesMatch || trackMatch;
      });
    }

    // Category
    if (this.state.selectedCategory !== 'all') {
      list = list.filter(c => c.category === this.state.selectedCategory);
    }

    // Hiring Type
    if (this.state.selectedHiringType !== 'all') {
      list = list.filter(c => {
        return c.roleTracks && c.roleTracks.some(t => 
          t.hiringType.toLowerCase().includes(this.state.selectedHiringType.toLowerCase())
        );
      });
    }

    // Confidence
    if (this.state.selectedConfidence !== 'all') {
      list = list.filter(c => c.dataConfidence === this.state.selectedConfidence);
    }

    // Sorting
    list.sort((a, b) => {
      if (this.state.sortBy === 'name-asc') {
        return a.name.localeCompare(b.name);
      } else if (this.state.sortBy === 'name-desc') {
        return b.name.localeCompare(a.name);
      } else if (this.state.sortBy === 'confidence') {
        if (a.dataConfidence === b.dataConfidence) return a.name.localeCompare(b.name);
        return a.dataConfidence === 'verified' ? -1 : 1;
      } else if (this.state.sortBy === 'stages') {
        const stagesA = a.roleTracks[0]?.assessmentStages?.length || 0;
        const stagesB = b.roleTracks[0]?.assessmentStages?.length || 0;
        return stagesB - stagesA;
      }
      return 0;
    });

    return list;
  },

  render(container, params) {
    this.initFromParams(params);
    const filtered = this.getFilteredCompanies();
    const totalFiltered = filtered.length;
    const totalPages = Math.ceil(totalFiltered / this.state.pageSize) || 1;
    
    // Clamp current page
    if (this.state.currentPage > totalPages) this.state.currentPage = totalPages;
    if (this.state.currentPage < 1) this.state.currentPage = 1;

    const startIndex = (this.state.currentPage - 1) * this.state.pageSize;
    const paginated = filtered.slice(startIndex, startIndex + this.state.pageSize);

    const categories = [
      'Big Tech and product engineering',
      'SaaS, cloud and developer tools',
      'Fintech, payments and financial technology',
      'Indian consumer-tech and startups',
      'IT services and campus hiring',
      'Consulting, analytics and enterprise technology',
      'Infrastructure, cybersecurity and systems',
      'Global engineering centres and specialist employers'
    ];

    const hasActiveFilters = Boolean(
      this.state.query ||
      this.state.selectedCategory !== 'all' ||
      this.state.selectedHiringType !== 'all' ||
      this.state.selectedConfidence !== 'all'
    );

    container.innerHTML = `
      <div class="section-header">
        <h1 class="section-title">Companies</h1>
        <p class="section-subtitle">
          Database of 132 technology employers with documented interview stages and simulation assessments.
        </p>
      </div>

      <!-- Compact Search & Filter Toolbar -->
      <div class="filter-toolbar">
        <div class="search-input-wrapper">
          <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <input type="text" id="dir-search-input" class="search-input" placeholder="Filter by company name, technology stack, role, or hub location..." value="${this.escapeHtml(this.state.query)}">
        </div>

        <div class="filter-controls">
          <select id="dir-cat-select" class="filter-select">
            <option value="all" ${this.state.selectedCategory === 'all' ? 'selected' : ''}>All Categories (${COMPANIES_DATA.length})</option>
            ${categories.map(cat => `
              <option value="${cat}" ${this.state.selectedCategory === cat ? 'selected' : ''}>${cat}</option>
            `).join('')}
          </select>

          <select id="dir-type-select" class="filter-select">
            <option value="all" ${this.state.selectedHiringType === 'all' ? 'selected' : ''}>All Hiring Tracks</option>
            <option value="intern" ${this.state.selectedHiringType === 'intern' ? 'selected' : ''}>Internships</option>
            <option value="campus" ${this.state.selectedHiringType === 'campus' ? 'selected' : ''}>Campus Drives</option>
            <option value="off-campus" ${this.state.selectedHiringType === 'off-campus' ? 'selected' : ''}>Off-Campus & Lateral</option>
          </select>

          <select id="dir-conf-select" class="filter-select">
            <option value="all" ${this.state.selectedConfidence === 'all' ? 'selected' : ''}>All Evidence Tiers</option>
            <option value="verified" ${this.state.selectedConfidence === 'verified' ? 'selected' : ''}>Verified (Official documentation)</option>
            <option value="community-reported" ${this.state.selectedConfidence === 'community-reported' ? 'selected' : ''}>Community Reported</option>
          </select>

          <select id="dir-sort-select" class="filter-select" style="margin-left: auto;">
            <option value="name-asc" ${this.state.sortBy === 'name-asc' ? 'selected' : ''}>Sort: Name (A to Z)</option>
            <option value="name-desc" ${this.state.sortBy === 'name-desc' ? 'selected' : ''}>Sort: Name (Z to A)</option>
            <option value="confidence" ${this.state.sortBy === 'confidence' ? 'selected' : ''}>Sort: Verified First</option>
            <option value="stages" ${this.state.sortBy === 'stages' ? 'selected' : ''}>Sort: Most Stages Documented</option>
          </select>

          ${hasActiveFilters ? `
            <button id="dir-clear-filters" class="btn btn-subtle btn-sm">Reset filters</button>
          ` : ''}
        </div>
      </div>

      <!-- Filter Result Count Summary -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem; font-size: 0.8rem; color: var(--text-muted);">
        <div>
          Showing <strong>${startIndex + 1}&ndash;${Math.min(startIndex + this.state.pageSize, totalFiltered)}</strong> of <strong>${totalFiltered}</strong> employers
          ${this.state.selectedCategory !== 'all' ? ` in <em>${this.state.selectedCategory}</em>` : ''}
        </div>
        ${totalPages > 1 ? `<div>Page ${this.state.currentPage} of ${totalPages}</div>` : ''}
      </div>

      <!-- High-Density Employer Directory Table -->
      ${paginated.length > 0 ? `
        <div class="table-container">
          <table class="data-table">
            <thead>
              <tr>
                <th style="width: 280px;">Company</th>
                <th>Track / Role</th>
                <th>Assessment Format</th>
                <th>Evidence</th>
                <th>Duration & Score</th>
                <th style="text-align: right; width: 140px;">Actions</th>
              </tr>
            </thead>
            <tbody>
              ${paginated.map(comp => {
                const isBookmarked = StorageManager.isBookmarked(comp.id);
                const primaryTrack = comp.roleTracks[0] || {};
                const matchingMock = ASSESSMENT_SETS.find(s => s.companyId === comp.id);
                const monogram = comp.name.charAt(0).toUpperCase();

                return `
                  <tr>
                    <td>
                      <div style="display: flex; align-items: center; gap: 0.65rem;">
                        <button class="bookmark-btn" data-id="${comp.id}" title="${isBookmarked ? 'Remove bookmark' : 'Bookmark company'}">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="${isBookmarked ? '#f59e0b' : 'none'}" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                        </button>
                        <div class="company-avatar">${monogram}</div>
                        <div>
                          <a href="#company/${comp.id}" style="font-weight: 600; color: var(--text-primary);">
                            ${comp.name}
                          </a>
                          <div style="font-size: 0.72rem; color: var(--text-muted);">${comp.category}</div>
                        </div>
                      </div>
                    </td>

                    <td>
                      <div style="font-weight: 500;">${primaryTrack.roleTitle || 'SDE'}</div>
                      <div style="font-size: 0.72rem; color: var(--text-muted);">${primaryTrack.level || 'Entry Level'}</div>
                    </td>

                    <td>
                      <div style="font-size: 0.8rem; color: var(--text-primary);">${matchingMock ? matchingMock.platformStyle : 'Standard Technical Assessment'}</div>
                      <div style="font-size: 0.72rem; color: var(--text-muted);">${primaryTrack.assessmentStages?.length || 3} reported interview stages</div>
                    </td>

                    <td>
                      <span class="badge ${comp.dataConfidence === 'verified' ? 'badge-verified' : 'badge-community'}">
                        ${comp.dataConfidence === 'verified' ? 'Verified' : 'Community'}
                      </span>
                    </td>

                    <td style="font-size: 0.8rem; color: var(--text-muted);">
                      ${matchingMock ? `${matchingMock.durationMinutes}m · ${matchingMock.totalMarks} pts` : '75m · 100 pts'}
                    </td>

                    <td style="text-align: right;">
                      <div style="display: inline-flex; gap: 0.35rem;">
                        <a href="#company/${comp.id}" class="btn btn-secondary btn-sm" title="View recruitment stages">
                          Stages
                        </a>
                        ${matchingMock ? `
                          <a href="#simulator/${matchingMock.id}" class="btn btn-primary btn-sm" title="Start simulation">
                            Start OA
                          </a>
                        ` : ''}
                      </div>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>

        <!-- Pagination Controls -->
        ${totalPages > 1 ? `
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1rem;">
            <button id="dir-prev-page" class="btn btn-secondary btn-sm" ${this.state.currentPage === 1 ? 'disabled style="opacity: 0.5;"' : ''}>
              &larr; Previous Page
            </button>
            <div style="font-size: 0.8rem; color: var(--text-muted);">
              Page ${this.state.currentPage} of ${totalPages}
            </div>
            <button id="dir-next-page" class="btn btn-secondary btn-sm" ${this.state.currentPage === totalPages ? 'disabled style="opacity: 0.5;"' : ''}>
              Next Page &rarr;
            </button>
          </div>
        ` : ''}

      ` : `
        <div class="empty-state">
          <svg class="empty-state-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <div class="empty-state-title">No matching companies found</div>
          <div class="empty-state-desc">Try adjusting your search keyword or clearing category filters.</div>
          <button id="empty-clear-filters" class="btn btn-secondary btn-sm" style="margin-top: 0.5rem;">Reset all filters</button>
        </div>
      `}
    `;

    this.bindEvents(container);
  },

  bindEvents(container) {
    // Search input
    const searchInput = container.querySelector('#dir-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.state.query = e.target.value;
        this.state.currentPage = 1;
        this.render(container);
      });
    }

    // Category select
    const catSelect = container.querySelector('#dir-cat-select');
    if (catSelect) {
      catSelect.addEventListener('change', (e) => {
        this.state.selectedCategory = e.target.value;
        this.state.currentPage = 1;
        this.render(container);
      });
    }

    // Hiring Type select
    const typeSelect = container.querySelector('#dir-type-select');
    if (typeSelect) {
      typeSelect.addEventListener('change', (e) => {
        this.state.selectedHiringType = e.target.value;
        this.state.currentPage = 1;
        this.render(container);
      });
    }

    // Confidence select
    const confSelect = container.querySelector('#dir-conf-select');
    if (confSelect) {
      confSelect.addEventListener('change', (e) => {
        this.state.selectedConfidence = e.target.value;
        this.state.currentPage = 1;
        this.render(container);
      });
    }

    // Sort select
    const sortSelect = container.querySelector('#dir-sort-select');
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        this.state.sortBy = e.target.value;
        this.render(container);
      });
    }

    // Reset filters
    const clearBtn = container.querySelector('#dir-clear-filters') || container.querySelector('#empty-clear-filters');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        this.state.query = '';
        this.state.selectedCategory = 'all';
        this.state.selectedHiringType = 'all';
        this.state.selectedConfidence = 'all';
        this.state.currentPage = 1;
        this.render(container);
      });
    }

    // Bookmarking toggle
    container.querySelectorAll('.bookmark-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const cid = btn.getAttribute('data-id');
        StorageManager.toggleBookmark(cid);
        this.render(container);
      });
    });

    // Pagination
    const prevBtn = container.querySelector('#dir-prev-page');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (this.state.currentPage > 1) {
          this.state.currentPage--;
          this.render(container);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    }

    const nextBtn = container.querySelector('#dir-next-page');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        this.state.currentPage++;
        this.render(container);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
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
