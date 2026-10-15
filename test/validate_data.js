// test/validate_data.js
const fs = require('fs');

console.log("Validating CompanyQ data files...");

// 1. Companies
const { COMPANIES_DATA } = require('../data/companies.js');
console.log(`✓ Loaded ${COMPANIES_DATA.length} companies.`);
if (COMPANIES_DATA.length < 100) {
  throw new Error(`Expected at least 100 companies, found ${COMPANIES_DATA.length}`);
}

// Check duplicates
const compIds = new Set();
for (const c of COMPANIES_DATA) {
  if (compIds.has(c.id)) {
    throw new Error(`Duplicate company id: ${c.id}`);
  }
  compIds.add(c.id);
  if (!c.name || !c.category || !c.roleTracks || c.roleTracks.length === 0) {
    throw new Error(`Incomplete company profile: ${c.id}`);
  }
}
console.log(`✓ Deduplication verified. All ${compIds.size} company IDs are unique.`);

// 2. Assessment sets
const { ASSESSMENT_SETS } = require('../data/assessment-sets.js');
console.log(`✓ Loaded ${ASSESSMENT_SETS.length} assessment sets.`);
const assessmentIds = new Set();
for (const a of ASSESSMENT_SETS) {
  if (assessmentIds.has(a.id)) {
    throw new Error(`Duplicate assessment set id: ${a.id}`);
  }
  assessmentIds.add(a.id);
  if (!compIds.has(a.companyId)) {
    throw new Error(`Assessment set ${a.id} references non-existent company ${a.companyId}`);
  }
}

// 3. Questions
const { QUESTIONS_DATA } = require('../data/questions.js');
console.log(`✓ Loaded ${QUESTIONS_DATA.length} questions.`);
const questionIds = new Set();
for (const q of QUESTIONS_DATA) {
  if (questionIds.has(q.id)) {
    throw new Error(`Duplicate question id: ${q.id}`);
  }
  questionIds.add(q.id);
  if (!compIds.has(q.companyId)) {
    throw new Error(`Question ${q.id} references non-existent company ${q.companyId}`);
  }
}

// Verify that all questionIds in assessment sets exist in QUESTIONS_DATA
for (const a of ASSESSMENT_SETS) {
  if (!a.evidenceType || !['Verified format', 'Representative simulation', 'Estimated simulation'].includes(a.evidenceType)) {
    throw new Error(`Assessment set ${a.id} has invalid or missing evidenceType: ${a.evidenceType}`);
  }
  if (!a.questionIds || a.questionIds.length < 2) {
    throw new Error(`Assessment set ${a.id} has insufficient questions: ${a.questionIds?.length}`);
  }
  for (const qid of a.questionIds) {
    if (!questionIds.has(qid)) {
      throw new Error(`Assessment set ${a.id} references missing question: ${qid}`);
    }
  }
}
console.log("✓ All assessment sets have valid questions and required evidence types.");

// 4. Verify 100% Company-to-Assessment Coverage
const coveredCompanies = new Set(ASSESSMENT_SETS.map(a => a.companyId));
const uncoveredCompanies = COMPANIES_DATA.filter(c => !coveredCompanies.has(c.id));
if (uncoveredCompanies.length > 0) {
  throw new Error(`Found ${uncoveredCompanies.length} companies without mock assessments!`);
}
console.log(`✓ 100% Coverage Verified: All ${COMPANIES_DATA.length} companies have working mock OA entry points.`);

// 5. Interview prep
const { INTERVIEW_PREP_DATA } = require('../data/interview-prep.js');
console.log(`✓ Loaded ${INTERVIEW_PREP_DATA.length} interview prep tracks.`);

console.log("\nALL DATA & COVERAGE VALIDATIONS PASSED CLEANLY!");

