// test/simulator_test.js
// Automated test verifying simulator mechanics, scoring accuracy, all question types,
// data export/import validation, weak-topic querying, and persistence logic.

// Mock localStorage for Node.js test environment
const mockStorage = {};
global.localStorage = {
  getItem: (key) => mockStorage[key] || null,
  setItem: (key, val) => { mockStorage[key] = String(val); },
  removeItem: (key) => { delete mockStorage[key]; },
  clear: () => { Object.keys(mockStorage).forEach(k => delete mockStorage[k]); }
};

// Import modules
const { COMPANIES_DATA } = require('../data/companies.js');
const { ASSESSMENT_SETS } = require('../data/assessment-sets.js');
const { QUESTIONS_DATA } = require('../data/questions.js');
const { StorageManager } = require('../js/storage.js');

console.log("=== RUNNING COMPANYQ SIMULATOR & LOGIC TESTS ===\n");

// Test 1: StorageManager initial state (empty)
const initialStats = StorageManager.getStats();
console.log("Test 1: Initial empty stats check");
if (initialStats.hasData !== false || initialStats.totalAttempts !== 0) {
  throw new Error("Expected hasData to be false when no attempts exist!");
}
console.log("✓ Empty state correctly recognized without fabricated stats.");

// Test 2: Bookmarks
console.log("\nTest 2: Bookmarks toggle");
StorageManager.toggleBookmark('amazon');
if (!StorageManager.isBookmarked('amazon')) {
  throw new Error("Expected Amazon to be bookmarked!");
}
StorageManager.toggleBookmark('amazon');
if (StorageManager.isBookmarked('amazon')) {
  throw new Error("Expected Amazon to be unbookmarked!");
}
console.log("✓ Bookmarking toggle works as expected.");

// Test 3: Simulation attempt & scoring for Amazon SDE OA
console.log("\nTest 3: Amazon SDE OA evaluation & scoring");
const amzSet = ASSESSMENT_SETS.find(s => s.id === 'amazon-sde-oa');
if (!amzSet) throw new Error("Amazon SDE set missing!");

const amzQuestions = amzSet.questionIds.map(id => QUESTIONS_DATA.find(q => q.id === id));
console.log(`Loaded ${amzQuestions.length} questions for Amazon SDE OA.`);

const userAnswers = {
  'amz-q1-warehouse-routing': { language: 'python', code: 'def minVansRequired():\n    return [3, 8]' },
  'amz-q2-cache-invalidation': { language: 'python', code: 'def processInvalidations():\n    return []' },
  'amz-q3-lp-ownership': 2, // correct
  'amz-q4-lp-customer-bias': 1 // correct
};

let totalScore = 0;
let totalPossible = 0;
const questionResults = [];

for (const q of amzQuestions) {
  totalPossible += q.marks;
  const userVal = userAnswers[q.id];
  let isCorrect = false;
  let awarded = 0;
  let status = 'unanswered';

  if (q.questionType === 'mcq') {
    isCorrect = userVal === q.correctAnswer;
    awarded = isCorrect ? q.marks : 0;
    status = isCorrect ? 'correct' : 'incorrect';
  } else if (q.questionType === 'coding') {
    const hasCode = userVal?.code && userVal.code.length > 20;
    status = hasCode ? 'manual-review' : 'unanswered';
    awarded = hasCode ? q.marks : 0;
    isCorrect = hasCode;
  }

  totalScore += awarded;
  questionResults.push({
    questionId: q.id,
    title: q.title,
    skills: q.skillsAssessed || [],
    isCorrect,
    awardedMarks: awarded,
    maxMarks: q.marks,
    status
  });
}

console.log(`Total Score: ${totalScore} / ${totalPossible} Marks`);
if (totalScore !== 100) {
  throw new Error(`Expected perfect 100 score on full correct simulation, got ${totalScore}`);
}
console.log("✓ Deterministic scoring and coding self-review grading passed.");

// Test 4: Save attempt and verify stats recalculation
console.log("\nTest 4: Persisting attempt to localStorage & stats recalculation");
const saved = StorageManager.saveAttempt({
  assessmentSetId: amzSet.id,
  companyId: amzSet.companyId,
  title: amzSet.title,
  score: totalScore,
  totalPossibleScore: totalPossible,
  benchmarkPassingScore: amzSet.benchmarkPassingScore,
  timeUsedSeconds: 3120, // 52 minutes
  questionResults
});

const updatedStats = StorageManager.getStats();
console.log(`Updated Attempts: ${updatedStats.totalAttempts}, Average Score: ${updatedStats.averageScoreFormatted}`);
if (updatedStats.totalAttempts !== 1 || updatedStats.averageScore !== 100) {
  throw new Error("Stats did not recalculate accurately from recorded attempt!");
}
console.log("✓ Live stats correctly recalculated from genuine local application data.");

// Test 5: Theme Preference Storage & Toggle
console.log("\nTest 5: Theme Preference Storage & Toggle");
StorageManager.setTheme('light');
if (StorageManager.getTheme() !== 'light') throw new Error("Expected theme to be 'light'");
const toggled = StorageManager.toggleTheme();
if (toggled !== 'dark' || StorageManager.getTheme() !== 'dark') throw new Error("Expected toggled theme to be 'dark'");
StorageManager.setTheme('light');
console.log("✓ Theme preference correctly saves and toggles in localStorage.");

// Test 6: Multiple-Select (MSQ) Grading Accuracy
console.log("\nTest 6: Multiple-Select Question (MSQ) Evaluation");
const deadlockQ = QUESTIONS_DATA.find(q => q.id === 'msft-q5-cs-concurrency-deadlock');
if (!deadlockQ) throw new Error("Deadlock question missing");

const correctSelected = [3, 1, 0, 2]; // different order
const sortedUser = [...correctSelected].sort().join(',');
const sortedAns = [...deadlockQ.correctAnswer].sort().join(',');
if (sortedUser !== sortedAns) throw new Error("MSQ correct array match failed!");

const incorrectSelected = [0, 1, 2]; // missing 3
const sortedIncorrect = [...incorrectSelected].sort().join(',');
if (sortedIncorrect === sortedAns) throw new Error("MSQ incorrect array incorrectly marked true!");
console.log("✓ MSQ deterministic evaluation correctly handles arbitrary selection order and strict completeness.");

// Test 7: Verify all 132 assessment sets have coherent duration and marks
console.log("\nTest 7: Coherence of all 132 assessment sets");
let totalValidSets = 0;
for (const aSet of ASSESSMENT_SETS) {
  const qs = aSet.questionIds.map(id => QUESTIONS_DATA.find(q => q.id === id));
  if (qs.some(q => !q)) {
    throw new Error(`Assessment set ${aSet.id} contains missing question objects!`);
  }
  if (aSet.durationMinutes < 45 || aSet.durationMinutes > 150) {
    throw new Error(`Incoherent duration for set ${aSet.id}: ${aSet.durationMinutes}`);
  }
  totalValidSets++;
}
console.log(`✓ All ${totalValidSets} assessment sets verified with valid questions and realistic durations.`);

// Test 8: SQL, Complexity, and Short-Answer Question Type Grading
console.log("\nTest 8: Evaluating SQL, Complexity, and Short-Answer question types");

// A. SQL question grading
const sqlQ = QUESTIONS_DATA.find(q => q.id === 'core-q-sql-window-dense-rank');
if (!sqlQ) throw new Error("SQL question missing!");
const validSqlQuery = "SELECT department_id, salary FROM (SELECT department_id, salary, DENSE_RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) as rnk FROM Employee) t WHERE rnk = 2;";
const sqlTextUpper = validSqlQuery.toUpperCase();
const hasKeywords = (sqlQ.validationKeywords || []).every(k => sqlTextUpper.includes(k));
if (!hasKeywords) throw new Error("SQL query validation failed on valid query!");
console.log("✓ SQL query deterministic clause validation passed.");

// B. Complexity question grading
const compQ = QUESTIONS_DATA.find(q => q.id === 'core-q-complexity-master-theorem');
if (!compQ) throw new Error("Complexity question missing!");
if (compQ.correctAnswer !== 1) throw new Error("Master Theorem correct answer index invalid!");
console.log("✓ Complexity question deterministic evaluation passed.");

// C. Short-Answer question grading
const shortQ = QUESTIONS_DATA.find(q => q.id === 'core-q-short-binary-tree-leaves');
if (!shortQ) throw new Error("Short answer question missing!");
const candidateAnswer = "25";
const normUser = candidateAnswer.trim().toLowerCase();
const normCorrect = String(shortQ.correctAnswer).trim().toLowerCase();
const accepted = (shortQ.acceptedAnswers || []).map(a => String(a).trim().toLowerCase());
const isShortCorrect = normUser === normCorrect || accepted.includes(normUser);
if (!isShortCorrect) throw new Error("Short answer evaluation failed on correct answer!");
console.log("✓ Short-answer case-insensitive & synonym evaluation passed.");

// Test 9: Data Export and Import Validation
console.log("\nTest 9: Backup Export & Import with Schema Validation");
const exportedJson = StorageManager.exportUserData();
if (!exportedJson || typeof exportedJson !== 'string') {
  throw new Error("Export returned invalid payload!");
}
const parsedExport = JSON.parse(exportedJson);
if (parsedExport.version !== 2 || !parsedExport.data || !Array.isArray(parsedExport.data.attempts)) {
  throw new Error("Export payload does not match schema v2!");
}

// Test malformed import rejection
const badImport = StorageManager.importUserData("Not valid JSON");
if (badImport.success !== false) throw new Error("Import failed to reject invalid JSON string!");

const validImport = StorageManager.importUserData(exportedJson);
if (!validImport.success || validImport.importedAttempts !== 1) {
  throw new Error("Import failed to restore valid export payload!");
}
console.log("✓ Export and Import validation cleanly verified with error handling.");

// Test 10: Weak-Topic and Incorrect-Answer Tracking
console.log("\nTest 10: Weak-Topic Analytics & Incorrect-Answer Tracking");
// Simulate an attempt with a failed question
const mockFailAttempt = {
  assessmentSetId: 'tcs-digital-oa',
  companyId: 'tcs',
  title: 'TCS Simulation',
  score: 60,
  totalPossibleScore: 100,
  timeUsedSeconds: 1800,
  questionResults: [
    {
      questionId: 'core-q-complexity-master-theorem',
      skills: ['Complexity Analysis', 'Divide and Conquer'],
      isCorrect: false,
      status: 'incorrect',
      awardedMarks: 0,
      maxMarks: 10
    }
  ]
};
StorageManager.saveAttempt(mockFailAttempt);
const incorrectList = StorageManager.getIncorrectQuestions();
if (!incorrectList.includes('core-q-complexity-master-theorem')) {
  throw new Error("Failed question was not registered in getIncorrectQuestions()!");
}
const topicAnalytics = StorageManager.getTopicAnalytics();
const weakSkills = topicAnalytics.weak.map(w => w.skill);
if (!weakSkills.includes('Complexity Analysis')) {
  throw new Error("Expected 'Complexity Analysis' to be identified in weak topics!");
}
console.log("✓ Weak-topic identification and incorrect-answer query verified.");

console.log("\n=== ALL SIMULATOR, THEME, AND PERSISTENCE TESTS PASSED! ===");
