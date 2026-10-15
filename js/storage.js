// js/storage.js — LocalStorage Manager for CompanyQ
// Manages local attempts, bookmarks, recents, active mock sessions, question history, and backup export/import.

const STORAGE_KEYS = {
  ATTEMPTS_V2: 'companyq_attempts_v2',
  ATTEMPTS_V1: 'companyq_attempts_v1',
  BOOKMARKS: 'companyq_bookmarks_v1',
  RECENTS: 'companyq_recents_v1',
  ACTIVE_SESSION: 'companyq_active_session_v1',
  PREFERENCES: 'companyq_preferences_v1',
  THEME: 'companyq_theme_v1',
  QUESTION_HISTORY: 'companyq_question_history_v1'
};

const StorageManager = {
  // Theme Management (Light / Dark)
  getTheme() {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.THEME);
      if (saved === 'dark' || saved === 'light') return saved;
      if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
      return 'light';
    } catch (e) {
      return 'light';
    }
  },

  setTheme(theme) {
    try {
      localStorage.setItem(STORAGE_KEYS.THEME, theme);
      if (typeof document !== 'undefined') {
        document.documentElement.setAttribute('data-theme', theme);
      }
      return theme;
    } catch (e) {
      console.error('Error saving theme:', e);
      return 'light';
    }
  },

  toggleTheme() {
    const current = this.getTheme();
    const next = current === 'dark' ? 'light' : 'dark';
    return this.setTheme(next);
  },

  // Attempts Management with Automatic V1 -> V2 Migration & Error Recovery
  getAttempts() {
    try {
      // Check v2 first
      const v2Data = localStorage.getItem(STORAGE_KEYS.ATTEMPTS_V2);
      if (v2Data) {
        const parsed = JSON.parse(v2Data);
        if (Array.isArray(parsed)) return parsed;
      }

      // Check v1 migration
      const v1Data = localStorage.getItem(STORAGE_KEYS.ATTEMPTS_V1);
      if (v1Data) {
        const parsedV1 = JSON.parse(v1Data);
        if (Array.isArray(parsedV1)) {
          // Migrate to v2
          localStorage.setItem(STORAGE_KEYS.ATTEMPTS_V2, JSON.stringify(parsedV1));
          return parsedV1;
        }
      }
      return [];
    } catch (e) {
      console.warn('Recovered from corrupted attempt storage:', e);
      return [];
    }
  },

  saveAttempt(attempt) {
    try {
      const attempts = this.getAttempts();
      const newAttempt = {
        id: 'att_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6),
        completedAt: new Date().toISOString(),
        ...attempt
      };
      attempts.unshift(newAttempt);
      localStorage.setItem(STORAGE_KEYS.ATTEMPTS_V2, JSON.stringify(attempts));
      
      // Update question-level history
      if (Array.isArray(attempt.questionResults)) {
        this.recordQuestionResults(attempt.questionResults);
      }

      this.clearActiveSession();
      return newAttempt;
    } catch (e) {
      console.error('Error saving attempt to localStorage:', e);
      return null;
    }
  },

  getAttemptsForCompany(companyId) {
    return this.getAttempts().filter(a => a.companyId === companyId);
  },

  // Question-Level History Tracking
  getQuestionHistory() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.QUESTION_HISTORY);
      return data ? JSON.parse(data) : {};
    } catch (e) {
      return {};
    }
  },

  recordQuestionResults(questionResults) {
    try {
      const history = this.getQuestionHistory();
      const now = new Date().toISOString();

      questionResults.forEach(r => {
        if (!r.questionId) return;
        const prev = history[r.questionId] || {
          attemptsCount: 0,
          correctCount: 0,
          skills: r.skills || [],
          history: []
        };

        const isCorrect = r.isCorrect || r.status === 'correct' || r.status === 'manual-review';
        prev.attemptsCount += 1;
        if (isCorrect) prev.correctCount += 1;
        prev.lastStatus = r.status;
        prev.lastIsCorrect = isCorrect;
        prev.lastAttemptedAt = now;
        if (r.skills && r.skills.length) {
          prev.skills = Array.from(new Set([...prev.skills, ...r.skills]));
        }

        prev.history.push({
          date: now,
          isCorrect,
          awardedMarks: r.awardedMarks,
          maxMarks: r.maxMarks
        });

        // Keep last 10 snapshots per question to bound storage
        if (prev.history.length > 10) {
          prev.history = prev.history.slice(-10);
        }

        history[r.questionId] = prev;
      });

      localStorage.setItem(STORAGE_KEYS.QUESTION_HISTORY, JSON.stringify(history));
    } catch (e) {
      console.warn('Error recording question results:', e);
    }
  },

  getIncorrectQuestions() {
    const history = this.getQuestionHistory();
    const incorrectIds = [];

    Object.keys(history).forEach(qid => {
      const q = history[qid];
      if (q.lastIsCorrect === false) {
        incorrectIds.push(qid);
      }
    });

    return incorrectIds;
  },

  // Topic & Skill Analytics
  getTopicAnalytics() {
    const attempts = this.getAttempts();
    const topicStats = {};

    attempts.forEach(a => {
      (a.questionResults || []).forEach(qr => {
        const isCorrect = qr.isCorrect || qr.status === 'correct' || qr.status === 'manual-review';
        const skills = qr.skills || [];
        
        skills.forEach(skill => {
          if (!topicStats[skill]) {
            topicStats[skill] = { total: 0, correct: 0, accuracyPct: 0 };
          }
          topicStats[skill].total += 1;
          if (isCorrect) {
            topicStats[skill].correct += 1;
          }
        });
      });
    });

    // Compute percentages
    const result = {
      topics: topicStats,
      strong: [],
      weak: [],
      totalEvaluated: Object.keys(topicStats).length
    };

    Object.keys(topicStats).forEach(skill => {
      const s = topicStats[skill];
      s.accuracyPct = Math.round((s.correct / s.total) * 100);
      if (s.accuracyPct >= 70 && s.total >= 2) {
        result.strong.push({ skill, ...s });
      } else if (s.accuracyPct < 70) {
        result.weak.push({ skill, ...s });
      }
    });

    // Sort weak by lowest accuracy then highest attempts
    result.weak.sort((a, b) => a.accuracyPct - b.accuracyPct || b.total - a.total);
    result.strong.sort((a, b) => b.accuracyPct - a.accuracyPct || b.total - a.total);

    return result;
  },

  // Bookmarks
  getBookmarks() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  },

  isBookmarked(companyId) {
    const bookmarks = this.getBookmarks();
    return bookmarks.includes(companyId);
  },

  toggleBookmark(companyId) {
    try {
      let bookmarks = this.getBookmarks();
      if (bookmarks.includes(companyId)) {
        bookmarks = bookmarks.filter(id => id !== companyId);
      } else {
        bookmarks.push(companyId);
      }
      localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(bookmarks));
      return bookmarks.includes(companyId);
    } catch (e) {
      console.error('Error updating bookmark:', e);
      return false;
    }
  },

  // Recently Viewed Companies
  getRecentCompanies() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.RECENTS);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  },

  addRecentCompany(companyId) {
    try {
      let recents = this.getRecentCompanies();
      recents = recents.filter(id => id !== companyId);
      recents.unshift(companyId);
      if (recents.length > 8) {
        recents = recents.slice(0, 8);
      }
      localStorage.setItem(STORAGE_KEYS.RECENTS, JSON.stringify(recents));
    } catch (e) {
      console.error('Error updating recents:', e);
    }
  },

  // Active Session Persistence
  getActiveSession() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.ACTIVE_SESSION);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      return null;
    }
  },

  saveActiveSession(sessionData) {
    try {
      localStorage.setItem(STORAGE_KEYS.ACTIVE_SESSION, JSON.stringify({
        ...sessionData,
        lastSavedAt: Date.now()
      }));
    } catch (e) {
      console.error('Error saving active session:', e);
    }
  },

  clearActiveSession() {
    try {
      localStorage.removeItem(STORAGE_KEYS.ACTIVE_SESSION);
    } catch (e) {
      console.error('Error clearing active session:', e);
    }
  },

  // Aggregated Stats for Dashboard & Profile
  getStats() {
    const attempts = this.getAttempts();
    if (attempts.length === 0) {
      return {
        totalAttempts: 0,
        averageScore: 0,
        averageScoreFormatted: '0%',
        bestScoreFormatted: '--',
        recentScoreFormatted: '--',
        totalQuestionsAnswered: 0,
        totalQuestionsCorrect: 0,
        accuracyPct: 0,
        totalTimeSpentMinutes: 0,
        passedBenchmarkCount: 0,
        hasData: false,
        sampleConfidence: 'none',
        recentAttempts: [],
        topicAnalytics: { strong: [], weak: [], topics: {} }
      };
    }

    let totalScorePercent = 0;
    let totalSeconds = 0;
    let passedCount = 0;
    let totalQuestions = 0;
    let totalCorrect = 0;
    let bestScorePct = 0;

    for (let i = 0; i < attempts.length; i++) {
      const a = attempts[i];
      const pct = Math.round((a.score / (a.totalPossibleScore || 100)) * 100);
      totalScorePercent += pct;
      if (pct > bestScorePct) bestScorePct = pct;
      totalSeconds += (a.timeUsedSeconds || 0);
      if (pct >= (a.benchmarkPassingScore || 70)) {
        passedCount++;
      }

      if (Array.isArray(a.questionResults)) {
        totalQuestions += a.questionResults.length;
        a.questionResults.forEach(qr => {
          if (qr.isCorrect || qr.status === 'correct' || qr.status === 'manual-review') {
            totalCorrect++;
          }
        });
      }
    }

    const avg = Math.round(totalScorePercent / attempts.length);
    const mostRecentPct = Math.round((attempts[0].score / (attempts[0].totalPossibleScore || 100)) * 100);
    const accuracy = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : avg;

    // Stat confidence label based on sample size
    let sampleConfidence = 'preliminary';
    if (attempts.length >= 5) {
      sampleConfidence = 'confident';
    } else if (attempts.length >= 2) {
      sampleConfidence = 'developing';
    }

    return {
      totalAttempts: attempts.length,
      averageScore: avg,
      averageScoreFormatted: avg + '%',
      bestScoreFormatted: bestScorePct + '%',
      recentScoreFormatted: mostRecentPct + '%',
      totalQuestionsAnswered: totalQuestions,
      totalQuestionsCorrect: totalCorrect,
      accuracyPct: accuracy,
      totalTimeSpentMinutes: Math.round(totalSeconds / 60),
      passedBenchmarkCount: passedCount,
      hasData: true,
      sampleConfidence,
      recentAttempts: attempts.slice(0, 5),
      topicAnalytics: this.getTopicAnalytics()
    };
  },

  // Export User Progress to JSON
  exportUserData() {
    try {
      const exportPayload = {
        version: 2,
        exportedAt: new Date().toISOString(),
        client: 'CompanyQ-SDE-Simulator',
        data: {
          attempts: this.getAttempts(),
          bookmarks: this.getBookmarks(),
          recents: this.getRecentCompanies(),
          questionHistory: this.getQuestionHistory(),
          theme: this.getTheme()
        }
      };
      return JSON.stringify(exportPayload, null, 2);
    } catch (e) {
      console.error('Error exporting data:', e);
      return null;
    }
  },

  // Import User Progress from JSON with Strict Schema Validation
  importUserData(jsonString) {
    try {
      if (!jsonString || typeof jsonString !== 'string') {
        return { success: false, error: 'Empty or invalid input payload' };
      }

      const parsed = JSON.parse(jsonString);

      if (!parsed || typeof parsed !== 'object') {
        return { success: false, error: 'Payload must be a valid JSON object' };
      }

      const data = parsed.data || parsed; // Support both wrapped and direct dumps

      // Validate attempts
      if (data.attempts) {
        if (!Array.isArray(data.attempts)) {
          return { success: false, error: 'Invalid attempts format: expected an array' };
        }
        // Basic element schema check
        for (const att of data.attempts) {
          if (!att.id || typeof att.score !== 'number' || !att.companyId) {
            return { success: false, error: 'Malformed attempt record in import data' };
          }
        }
        localStorage.setItem(STORAGE_KEYS.ATTEMPTS_V2, JSON.stringify(data.attempts));
      }

      // Validate bookmarks
      if (data.bookmarks) {
        if (!Array.isArray(data.bookmarks)) {
          return { success: false, error: 'Invalid bookmarks format: expected array of IDs' };
        }
        const sanitizedBookmarks = data.bookmarks.filter(id => typeof id === 'string');
        localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(sanitizedBookmarks));
      }

      // Validate recents
      if (data.recents && Array.isArray(data.recents)) {
        const sanitizedRecents = data.recents.filter(id => typeof id === 'string');
        localStorage.setItem(STORAGE_KEYS.RECENTS, JSON.stringify(sanitizedRecents));
      }

      // Validate question history
      if (data.questionHistory && typeof data.questionHistory === 'object' && !Array.isArray(data.questionHistory)) {
        localStorage.setItem(STORAGE_KEYS.QUESTION_HISTORY, JSON.stringify(data.questionHistory));
      }

      // Restore theme if specified
      if (data.theme === 'dark' || data.theme === 'light') {
        this.setTheme(data.theme);
      }

      return {
        success: true,
        importedAttempts: data.attempts ? data.attempts.length : 0,
        importedBookmarks: data.bookmarks ? data.bookmarks.length : 0
      };
    } catch (e) {
      return { success: false, error: 'JSON parsing failure: ' + e.message };
    }
  },

  // Reset Everything
  resetAll() {
    try {
      localStorage.removeItem(STORAGE_KEYS.ATTEMPTS_V2);
      localStorage.removeItem(STORAGE_KEYS.ATTEMPTS_V1);
      localStorage.removeItem(STORAGE_KEYS.BOOKMARKS);
      localStorage.removeItem(STORAGE_KEYS.RECENTS);
      localStorage.removeItem(STORAGE_KEYS.ACTIVE_SESSION);
      localStorage.removeItem(STORAGE_KEYS.PREFERENCES);
      localStorage.removeItem(STORAGE_KEYS.QUESTION_HISTORY);
      return true;
    } catch (e) {
      console.error('Error resetting storage:', e);
      return false;
    }
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { StorageManager, STORAGE_KEYS };
}
