# CompanyQ: Research Methodology & Source Register

## 1. Objective and Research Philosophy

CompanyQ is designed to replace generic algorithm practice with **company-specific recruitment intelligence**. For Indian software engineering candidates—especially college graduates, interns, and early-career SDE-1 applicants—recruitment processes vary dramatically between Big Tech, high-growth startups, IT services, and global engineering centers.

### The Problem With Typical Prep Platforms
1. **Generic Catalogues:** Most platforms present an undifferentiated catalogue of algorithm problems divorced from actual company screening formats.
2. **Fabricated Cutoffs:** Many sites invent official passing scores (e.g., claiming "Google requires 85% on its OA"), misleading candidates.
3. **Outdated Processes:** Campus hiring formats evolve rapidly (e.g., introduction of behavioral work style surveys, code-tracing questions, and machine coding rounds).

### CompanyQ Research Principles
- **No Fabricated Data:** If a round duration, question count, or passing threshold is discretionary or unverified, it is recorded as `null` or explicitly noted as "Varies by role / team."
- **Source Linkage:** Claims connect to official company careers portals, university recruiting documentation, or verified candidate aggregate reports.
- **Uncertainty Transparency:** Every profile displays its confidence tier (`verified` vs `community-reported`) and last verification date.
- **100% Assessment Coverage With Honest Labeling:** Every single one of the 132 deduplicated employers has a dedicated, functioning practice assessment set mapped directly from its profile and directory cards. Each assessment explicitly labels whether its structure is a **Verified format**, a **Representative simulation**, or an **Estimated simulation**.

---

## 2. Evidence Confidence Hierarchy & Assessment Typology

### Company Profile Confidence
| Tier | Classification | Criteria & Sources | Display Pill | Count |
|---|---|---|---|---|
| **Tier 1** | **Verified** | Official company career pages, official student hiring portals, verified campus circulars (TCS NextStep, Infosys HackWithInfy, Amazon Jobs, Google How We Hire). | `verified` (Green) | **23** |
| **Tier 2** | **Community Reported** | Cross-validated reports from multiple independent recent candidates (placement cells of premier institutes, LeetCode Discuss aggregates, GeeksforGeeks interview archives). | `community-reported` (Blue) | **109** |

### Mock OA Evidence Labels
Every mock assessment set in `data/assessment-sets.js` carries an explicit `evidenceType`:

1. **Verified format (5 sets):**
   - Directly corroborated by published employer documentation or official university recruitment candidate briefing packs.
   - Examples: Amazon SDE-1 / Intern (2 coding problems + Amazon Leadership Principles work style survey), Google Early Career SWE (2 algorithmic challenges with tight time constraints), Microsoft SWE (2 coding + 2 technical debugging / systems concepts), Meta SWE Tech Screen (2 focused coding problems), TCS Digital / Campus (coding + quantitative + technical MCQs).
2. **Representative simulation (19 sets):**
   - Reconstructed from high-confidence, corroborated candidate reports reflecting the exact round structure, testing platform conventions (e.g., HackerRank, CodeSignal, Mettl), and question styles.
   - Examples: Uber, Atlassian, Adobe, NVIDIA, Flipkart, Swiggy, Zomato, PhonePe, Razorpay, Infosys, Wipro, Accenture, Cognizant, Capgemini, Goldman Sachs, Morgan Stanley, Qualcomm, ServiceNow, Stripe.
3. **Estimated simulation (108 sets):**
   - Original, domain-aligned practice tests based on standard requirements for the role track (e.g., high-throughput systems for cloud providers, financial precision for fintechs, distributed state machines for infra) when company-specific assessment blueprints vary by division or campus tier.
   - Explicitly discloses: *"Estimated simulation — Original practice test aligned with typical screening requirements for this role track. Company screening formats may vary."*

---

## 3. Dataset Overview

- **Total Unique Employers:** 132 (Deduplicated; 0 duplicates)
- **Total Dedicated Assessment Sets:** 132 (100% coverage, 0 broken links)
- **Total Original Question Bank:** 65 questions (Algorithmic Coding, SQL Queries, Complexity Analysis, Short-Answer, Cloud/SaaS systems, Fintech reconciliation, Startup logistics, Quantitative Aptitude, C/C++ pointer tracing, OS/DBMS/Networks MCQs and MSQs)
- **Geographic Focus:** India engineering centers (Bengaluru, Hyderabad, Pune, Noida, Gurugram, Chennai, Mumbai) alongside global headquarters.

### Category Breakdown

1. **Big Tech and Product Engineering (15 employers):**
   - Google, Amazon, Microsoft, Meta, Apple, Netflix, NVIDIA, Adobe, Uber, Atlassian, Salesforce, Oracle, Intuit, LinkedIn, Cisco.
2. **SaaS, Cloud and Developer Tools (20 employers):**
   - ServiceNow, SAP Labs, Workday, Snowflake, MongoDB, Datadog, GitHub, GitLab, Twilio, Cloudflare, HashiCorp, Elastic, Box, Dropbox, Okta, Splunk, Confluent, New Relic, Postman, BrowserStack.
3. **Fintech, Payments and Financial Technology (18 employers):**
   - Stripe, PayPal, PhonePe, Razorpay, Paytm, CRED, Groww, Fiserv, Visa, Mastercard, Credit Karma, Slice, BharatPe, Zerodha, Pine Labs, Navi, Jupiter, CoinDCX.
4. **Indian Consumer-Tech and Startups (18 employers):**
   - Flipkart, Swiggy, Zomato, Meesho, Zepto, Dream11, Blinkit, Urban Company, Ola, Nykaa, MakeMyTrip, Delhivery, InMobi, ShareChat, Cars24, Porter, Licious, Cult.fit.
5. **IT Services and Campus Hiring (15 employers):**
   - TCS, Infosys, Wipro, HCLTech, Cognizant, Accenture, Capgemini, Persistent Systems, LTIMindtree, Tech Mahindra, Hexaware, Mphasis, Birlasoft, Coforge, DXC Technology.
6. **Consulting, Analytics and Enterprise Technology (13 employers):**
   - IBM, Deloitte, EXL, Genpact, PwC Technology, EY Technology (GDS), KPMG, Mu Sigma, Fractal Analytics, Tiger Analytics, LatentView, ZS Associates, McKinsey Digital.
7. **Infrastructure, Semiconductor, Cybersecurity and Systems (17 employers):**
   - Qualcomm, AMD, Intel, Arm, Red Hat, Nutanix, Palo Alto Networks, Fortinet, CrowdStrike, Zscaler, Broadcom, Texas Instruments, Synopsys, Cadence, Western Digital, Seagate, VMware.
8. **Global Engineering Centres and Specialist Employers (16 employers):**
   - Walmart Global Tech, Barclays, UBS, Siemens Technology, Bosch (BGSW), Expedia Group, Morgan Stanley, Goldman Sachs, JPMorgan Chase, American Express, Wells Fargo, Target Tech, Lowe's India, Philips HealthTech, Rakuten India, Mercedes-Benz R&D India (MBRDI).

---

## 4. Key Source Register

### Big Tech & High Scale Systems
- **Google:** [https://careers.google.com/how-we-hire/](https://careers.google.com/how-we-hire/) and [Google Students](https://careers.google.com/students/)
- **Amazon:** [Amazon Software Development Topics](https://www.amazon.jobs/en/landing_pages/software-development-topics) and [Amazon Leadership Principles](https://www.amazon.jobs/content/en/how-we-hire/leadership-principles)
- **Microsoft:** [Microsoft University Recruiting](https://careers.microsoft.com/v2/global/en/students) and [Interviewing at Microsoft](https://careers.microsoft.com/v2/global/en/interviewing)
- **Meta:** [Meta SWE Tech Screen Preparation](https://www.metacareers.com/swe-prep-tech-screen)
- **Atlassian:** [Atlassian Careers & Values](https://www.atlassian.com/company/careers)
- **NVIDIA:** [NVIDIA University Recruiting](https://www.nvidia.com/en-in/about-nvidia/careers/university-recruiting/)
- **Apple:** [Apple Careers](https://www.apple.com/careers/in/)
- **Netflix:** [Netflix Jobs Culture](https://jobs.netflix.com/)
- **Salesforce:** [Salesforce University Recruiting](https://salesforce.com/careers)
- **Uber:** [Uber Engineering Careers](https://www.uber.com/careers)

### Indian Campus & IT Services
- **Tata Consultancy Services (TCS):** [TCS Careers India & NextStep Portal](https://www.tcs.com/careers/india)
- **Infosys:** [Infosys Student & Graduate Careers](https://www.infosys.com/careers/graduates-students.html)
- **Cognizant:** [Cognizant Early Careers](https://careers.cognizant.com/global/en)
- **Accenture India:** [Accenture Campus Recruitment](https://www.accenture.com/in-en/careers)
- **Wipro:** [Wipro Elite NTH / Velocity](https://careers.wipro.com/)
- **Capgemini:** [Capgemini India Early Careers](https://www.capgemini.com/in-en/careers/)
- **Persistent Systems:** [Persistent Careers](https://www.persistent.com/careers/)

### Fintech & Product Engineering
- **Razorpay:** [Razorpay Engineering Careers](https://razorpay.com/jobs/)
- **PhonePe:** [PhonePe Careers](https://www.phonepe.com/careers/)
- **Stripe:** [Stripe Jobs & Engineering Culture](https://stripe.com/jobs)
- **PayPal:** [PayPal Technology Careers](https://careers.pypl.com/)
- **CRED:** [CRED Careers](https://cred.club/careers)
- **Groww:** [Groww Careers](https://groww.in/careers)
- **Flipkart:** [Flipkart Careers](https://www.flipkartcareers.com/)
- **Swiggy:** [Swiggy Careers](https://careers.swiggy.com/)
- **Zomato:** [Zomato Careers](https://www.zomato.com/careers)
- **Goldman Sachs:** [Goldman Sachs Engineering Careers](https://www.goldmansachs.com/careers/)
- **Morgan Stanley:** [Morgan Stanley Technology Careers](https://www.morganstanley.com/people-opportunities/technology)

---

## 5. Protocol for Updating and Expanding Company Data

To add a new employer or update an existing track:

1. **Verify Primary Documentation First:** Check official career portal guides, university hiring FAQs, and official recruiter briefing documents.
2. **Corroborate Multi-Party Reports:** For campus and off-campus specifics (such as testing platforms like HackerRank, Mettl, or CodeSignal), cross-reference verified placement feedback across recent hiring cycles.
3. **Record Track Granularity:** Separate university internships, campus graduate roles, and experienced SDE-1 tracks rather than averaging them into a single conflicting profile.
4. **Attach Explicit Confidence:** Mark as `verified` if directly corroborated by published employer documentation; otherwise mark as `community-reported`.
5. **Assign Proper Assessment Typology:** Mark assessment set as `Verified format`, `Representative simulation`, or `Estimated simulation`.
6. **Never Invent Numerical Values:** If the duration of an interview or question count varies by interviewer discretion, use `null` and document the variance in `uncertaintyNotes`.
