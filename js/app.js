// js/app.js — CompanyQ Application Controller & Router
// Single Page Application router handling hash routes, view lifecycle, and navigation states.

const App = {
  mainContainer: null,
  activeRoute: '',

  init() {
    this.mainContainer = document.getElementById('app-main');
    this.bindGlobalNavigation();
    this.handleRoute();

    // Listen for hash changes
    window.addEventListener('hashchange', () => this.handleRoute());

    // Listen for Escape key to close modals
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const modals = document.querySelectorAll('.modal-overlay');
        modals.forEach(m => m.remove());
      }
    });

    console.log('CompanyQ initialized successfully with 130+ company profiles.');
  },

  bindGlobalNavigation() {
    // Mobile navigation toggle
    const toggleBtn = document.getElementById('mobile-nav-toggle');
    const navLinks = document.getElementById('nav-links');
    if (toggleBtn && navLinks) {
      toggleBtn.addEventListener('click', () => {
        navLinks.classList.toggle('mobile-open');
      });

      // Close mobile nav on link click
      navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          navLinks.classList.remove('mobile-open');
        });
      });
    }

    // Theme toggle button setup
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      const updateThemeIcon = (theme) => {
        if (theme === 'dark') {
          // Show sun icon (click to switch to light)
          themeBtn.innerHTML = `
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          `;
          themeBtn.setAttribute('title', 'Switch to Light Theme');
        } else {
          // Show moon icon (click to switch to dark)
          themeBtn.innerHTML = `
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          `;
          themeBtn.setAttribute('title', 'Switch to Dark Theme');
        }
      };

      // Set initial state
      const currentTheme = StorageManager.getTheme();
      StorageManager.setTheme(currentTheme);
      updateThemeIcon(currentTheme);

      // Listen for click
      themeBtn.addEventListener('click', () => {
        const nextTheme = StorageManager.toggleTheme();
        updateThemeIcon(nextTheme);
      });
    }
  },

  updateActiveNavLink(routeName) {
    document.querySelectorAll('.nav-link').forEach(link => {
      const href = link.getAttribute('href') || '';
      if (href === `#${routeName}` || 
          (routeName === 'simulator' && href.startsWith('#simulator'))) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  },

  parseHash() {
    const hash = window.location.hash.substring(1) || 'home';
    const [pathPart, queryPart] = hash.split('?');
    const segments = pathPart.split('/').filter(Boolean);

    const params = {};
    if (queryPart) {
      const searchParams = new URLSearchParams(queryPart);
      for (const [k, v] of searchParams.entries()) {
        params[k] = v;
      }
    }

    return {
      base: segments[0] || 'home',
      id: segments[1] || null,
      params
    };
  },

  handleRoute() {
    window.scrollTo({ top: 0, behavior: 'instant' });
    const { base, id, params } = this.parseHash();
    this.activeRoute = base;
    this.updateActiveNavLink(base);

    switch (base) {
      case 'home':
        LandingPageView.render(this.mainContainer);
        break;

      case 'dashboard':
        DashboardView.render(this.mainContainer);
        break;

      case 'directory':
        DirectoryView.render(this.mainContainer, params);
        break;

      case 'company':
        if (id) {
          CompanyProfileView.render(this.mainContainer, id);
        } else {
          window.location.hash = '#directory';
        }
        break;

      case 'simulator':
        SimulatorView.render(this.mainContainer, id || 'amazon-sde-oa');
        break;

      case 'drill': {
        const topic = params.topic || (id ? decodeURIComponent(id) : null);
        let qids = [];
        let title = 'Weak-Topic Review Drill';
        if (topic) {
          title = `Targeted Skill Drill: ${topic}`;
          qids = QUESTIONS_DATA.filter(q => (q.skillsAssessed || []).some(s => s.toLowerCase() === topic.toLowerCase())).map(q => q.id);
        } else {
          qids = StorageManager.getIncorrectQuestions();
          if (qids.length === 0) {
            // If no incorrect questions recorded yet, pull representative foundational questions
            qids = ['amz-q1-warehouse-routing', 'msft-q1-string-compression', 'tcs-q4-sql-subquery-mcq', 'core-q-complexity-master-theorem'];
            title = 'Foundational Concept Drill';
          }
        }
        SimulatorView.startDrill(qids, title);
        break;
      }

      case 'interview':
        InterviewPrepView.render(this.mainContainer);
        break;

      case 'progress':
        ProgressView.render(this.mainContainer);
        break;

      case 'sources':
        SourcesView.render(this.mainContainer);
        break;

      default:
        LandingPageView.render(this.mainContainer);
        break;
    }
  }
};

// Start application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});

