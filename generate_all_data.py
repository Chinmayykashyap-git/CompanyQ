
# generate_all_data.py
import json
import os

os.makedirs("data", exist_ok=True)
os.makedirs("docs", exist_ok=True)

# 1. COMPANIES GENERATION
# 8 Categories
CATEGORIES = [
    "Big Tech and product engineering",
    "SaaS, cloud and developer tools",
    "Fintech, payments and financial technology",
    "Indian consumer-tech and startups",
    "IT services and campus hiring",
    "Consulting, analytics and enterprise technology",
    "Infrastructure, cybersecurity and systems",
    "Global engineering centres and specialist employers"
]

companies_raw = [
    # 1. Big Tech & Product Engineering
    {
        "id": "google",
        "name": "Google",
        "category": "Big Tech and product engineering",
        "aliases": ["Alphabet", "Google India"],
        "countryOrRegion": "United States",
        "headquarters": "Mountain View, CA, USA",
        "indiaOffices": ["Bengaluru", "Hyderabad", "Gurugram", "Mumbai"],
        "overview": "Google builds planet-scale infrastructure, search, cloud, and consumer devices. The hiring process heavily emphasizes algorithmic efficiency, edge-case reasoning, clean code structure, and 'Googliness' (navigating ambiguity, intellectual humility, collaboration).",
        "sourceUrls": [
            "https://careers.google.com/how-we-hire/",
            "https://careers.google.com/students/"
        ],
        "lastVerified": "2024-09",
        "dataConfidence": "verified",
        "notes": "Google's online assessment (Google Online Challenge / HackerEarth or internal platform) usually consists of 2 algorithmic challenges with strict time limits. Unlike some employers, full test case passage without memory leaks or TLE is critical.",
        "tracks": [
            {
                "id": "google-swe-intern",
                "roleTitle": "Software Engineering Intern",
                "hiringType": "Internship",
                "experienceLevels": ["Students / Penultimate Year"],
                "location": "Bengaluru / Hyderabad",
                "reportedRoundCountMin": 3,
                "reportedRoundCountTypical": 4,
                "reportedRoundCountMax": 5,
                "variationNotes": "Campus drives typically feature an Online Challenge followed by 2 technical phone/meet interviews. Off-campus applications may include recruiter screen first.",
                "stages": [
                    {
                        "stageId": "google-swe-intern-oa",
                        "stageName": "Google Online Challenge (GOC)",
                        "stageType": "Online Assessment",
                        "durationMinutes": 60,
                        "questionCount": 2,
                        "format": "2 algorithmic coding problems (Graph, DP, or Combinatorics)",
                        "difficultyDistribution": "1 Medium-Hard, 1 Hard",
                        "skillsAssessed": ["Algorithms", "Data Structures", "Dynamic Programming", "Graph Traversal"],
                        "sourceUrl": "https://careers.google.com/students/",
                        "evidenceType": "verified-campus-report",
                        "lastVerified": "2024-09",
                        "confidence": "verified",
                        "uncertaintyNotes": "Duration is typically 60 minutes for 2 problems on HackerEarth. Problem statements are often story-driven."
                    },
                    {
                        "stageId": "google-swe-intern-r1",
                        "stageName": "Technical Interview 1",
                        "stageType": "Technical Interview",
                        "durationMinutes": 45,
                        "questionCount": 1,
                        "format": "Live Google Docs / CoderPad DSA problem solving with engineer",
                        "difficultyDistribution": "Medium-Hard",
                        "skillsAssessed": ["Problem Solving", "Code Quality", "Communication", "Time Complexity Analysis"],
                        "sourceUrl": "https://careers.google.com/how-we-hire/",
                        "evidenceType": "official-portal",
                        "lastVerified": "2024-09",
                        "confidence": "verified",
                        "uncertaintyNotes": "No compiler execution; candidates explain logic on shared document."
                    },
                    {
                        "stageId": "google-swe-intern-r2",
                        "stageName": "Technical Interview 2",
                        "stageType": "Technical Interview",
                        "durationMinutes": 45,
                        "questionCount": 1,
                        "format": "Live coding + follow-up optimizations",
                        "difficultyDistribution": "Medium-Hard",
                        "skillsAssessed": ["Data Structures", "Algorithm Optimization", "Corner Cases"],
                        "sourceUrl": "https://careers.google.com/how-we-hire/",
                        "evidenceType": "official-portal",
                        "lastVerified": "2024-09",
                        "confidence": "verified",
                        "uncertaintyNotes": "A third tie-breaker round is occasionally scheduled if feedback is mixed."
                    }
                ]
            },
            {
                "id": "google-swe-newgrad",
                "roleTitle": "Software Engineer (Early Career / L3)",
                "hiringType": "On-Campus / Off-Campus",
                "experienceLevels": ["0-1 Years", "Recent Graduates"],
                "location": "Bengaluru / Hyderabad",
                "reportedRoundCountMin": 4,
                "reportedRoundCountTypical": 5,
                "reportedRoundCountMax": 6,
                "variationNotes": "Off-campus candidates go through recruiter screen, OA, followed by 3-4 technical rounds and a Googliness round.",
                "stages": [
                    {
                        "stageId": "google-swe-newgrad-oa",
                        "stageName": "Google Online Challenge",
                        "stageType": "Online Assessment",
                        "durationMinutes": 90,
                        "questionCount": 2,
                        "format": "2 Algorithmic Coding Problems",
                        "difficultyDistribution": "1 Medium, 1 Hard",
                        "skillsAssessed": ["Trees/Graphs", "DP", "Greedy", "Segment Trees/Bit Manipulation"],
                        "sourceUrl": "https://careers.google.com/how-we-hire/",
                        "evidenceType": "verified-campus-report",
                        "lastVerified": "2024-09",
                        "confidence": "verified",
                        "uncertaintyNotes": "Platform is typically HackerEarth or CodeSignal."
                    },
                    {
                        "stageId": "google-swe-newgrad-tech-rounds",
                        "stageName": "3x Technical Problem Solving Rounds",
                        "stageType": "Technical Interview",
                        "durationMinutes": 135,
                        "questionCount": 3,
                        "format": "Three 45-minute independent coding interviews",
                        "difficultyDistribution": "Medium to Hard",
                        "skillsAssessed": ["Data Structures", "Algorithmic Design", "Edge-case handling"],
                        "sourceUrl": "https://careers.google.com/how-we-hire/",
                        "evidenceType": "official-portal",
                        "lastVerified": "2024-09",
                        "confidence": "verified",
                        "uncertaintyNotes": "Each round is conducted independently by a different engineer."
                    },
                    {
                        "stageId": "google-swe-newgrad-googliness",
                        "stageName": "Googliness & Leadership",
                        "stageType": "Hiring Manager / HR",
                        "durationMinutes": 45,
                        "questionCount": null,
                        "format": "Behavioral & hypothetical scenario discussion",
                        "difficultyDistribution": "Behavioral",
                        "skillsAssessed": ["Navigating Ambiguity", "Collaboration", "Ethics", "Inclusive Leadership"],
                        "sourceUrl": "https://careers.google.com/how-we-hire/",
                        "evidenceType": "official-portal",
                        "lastVerified": "2024-09",
                        "confidence": "verified",
                        "uncertaintyNotes": "Assesses culture add and interpersonal dynamics."
                    }
                ]
            }
        ]
    },
    {
        "id": "amazon",
        "name": "Amazon",
        "category": "Big Tech and product engineering",
        "aliases": ["AWS", "Amazon Web Services", "Amazon India"],
        "countryOrRegion": "United States",
        "headquarters": "Seattle, WA, USA",
        "indiaOffices": ["Bengaluru", "Hyderabad", "Chennai", "Gurugram", "Pune"],
        "overview": "Amazon operates e-commerce, cloud computing (AWS), logistics, and digital streaming. SDE hiring heavily tests Data Structures, Algorithms, Object-Oriented Design, and deep alignment with Amazon's 16 Leadership Principles (Customer Obsession, Ownership, Bias for Action, Dive Deep).",
        "sourceUrls": [
            "https://www.amazon.jobs/en/landing_pages/software-development-topics",
            "https://www.amazon.jobs/content/en/how-we-hire/leadership-principles"
        ],
        "lastVerified": "2024-10",
        "dataConfidence": "verified",
        "notes": "Amazon's OA on HackerRank or Mettl traditionally contains 2 coding problems followed by a mandatory 'Work Style Assessment' (approx 50 behavioral prioritization questions) or a work simulation.",
        "tracks": [
            {
                "id": "amazon-sde-1",
                "roleTitle": "Software Development Engineer I (SDE-1)",
                "hiringType": "On-Campus & Off-Campus",
                "experienceLevels": ["0-1 Years", "Recent Graduates"],
                "location": "Bengaluru / Hyderabad / Chennai",
                "reportedRoundCountMin": 4,
                "reportedRoundCountTypical": 5,
                "reportedRoundCountMax": 6,
                "variationNotes": "Off-campus applicants receive OA via HackerRank. Campus drives may have 1 OA + 3-4 virtual rounds on Amazon Chime.",
                "stages": [
                    {
                        "stageId": "amazon-sde-oa",
                        "stageName": "Online Assessment (OA1 + OA2)",
                        "stageType": "Online Assessment",
                        "durationMinutes": 90,
                        "questionCount": 2,
                        "format": "2 Coding Problems (70 min) + Work Style Assessment (20 min)",
                        "difficultyDistribution": "1 Medium, 1 Medium-Hard",
                        "skillsAssessed": ["Arrays/Strings", "Trees/Graphs", "Greedy/DP", "Amazon Leadership Principles"],
                        "sourceUrl": "https://www.amazon.jobs/en/landing_pages/software-development-topics",
                        "evidenceType": "official-portal",
                        "lastVerified": "2024-10",
                        "confidence": "verified",
                        "uncertaintyNotes": "HackerRank format: code must pass both public and hidden unit tests. Work style survey has no right/wrong answers but tests consistency."
                    },
                    {
                        "stageId": "amazon-sde-tech1",
                        "stageName": "Technical Interview 1 (DSA & Leadership)",
                        "stageType": "Technical Interview",
                        "durationMinutes": 60,
                        "questionCount": 1,
                        "format": "Live coding (20 min DSA) + 2 Leadership Principle behavioral questions (20 min)",
                        "difficultyDistribution": "Medium",
                        "skillsAssessed": ["Data Structures", "STAR Method", "Ownership", "Customer Obsession"],
                        "sourceUrl": "https://www.amazon.jobs/en/landing_pages/software-development-topics",
                        "evidenceType": "official-portal",
                        "lastVerified": "2024-10",
                        "confidence": "verified",
                        "uncertaintyNotes": "Every round at Amazon allocates at least 15-20 minutes to LP questions using the STAR framework."
                    },
                    {
                        "stageId": "amazon-sde-tech2",
                        "stageName": "Technical Interview 2 (LLD / DSA)",
                        "stageType": "System Design / LLD",
                        "durationMinutes": 60,
                        "questionCount": 1,
                        "format": "Object-Oriented Design (e.g. Parking Lot, Locker System) or Algorithmic Problem",
                        "difficultyDistribution": "Medium",
                        "skillsAssessed": ["OOP Concepts", "Design Patterns", "Clean Code", "Modularity"],
                        "sourceUrl": "https://www.amazon.jobs/en/landing_pages/software-development-topics",
                        "evidenceType": "community-aggregate",
                        "lastVerified": "2024-10",
                        "confidence": "verified",
                        "uncertaintyNotes": "For SDE-1, focuses on Low-Level Design classes, interfaces, and SOLID principles."
                    },
                    {
                        "stageId": "amazon-sde-bar-raiser",
                        "stageName": "Bar Raiser Interview",
                        "stageType": "Technical Interview",
                        "durationMinutes": 60,
                        "questionCount": 1,
                        "format": "Challenging coding question + intensive Leadership Principle probing by independent interviewer",
                        "difficultyDistribution": "Medium-Hard",
                        "skillsAssessed": ["Deliver Results", "Bias for Action", "Scalable Thinking", "DSA"],
                        "sourceUrl": "https://www.amazon.jobs/content/en/how-we-hire/leadership-principles",
                        "evidenceType": "official-portal",
                        "lastVerified": "2024-10",
                        "confidence": "verified",
                        "uncertaintyNotes": "Bar raisers are external to the hiring team and possess veto power."
                    }
                ]
            },
            {
                "id": "amazon-sde-intern",
                "roleTitle": "SDE Intern (Summer / 6 Months)",
                "hiringType": "Internship",
                "experienceLevels": ["Students / Pre-Final Year"],
                "location": "Bengaluru / Hyderabad / Chennai",
                "reportedRoundCountMin": 2,
                "reportedRoundCountTypical": 3,
                "reportedRoundCountMax": 4,
                "variationNotes": "Some university campus drives conduct 1 OA followed by 2 technical interview rounds; exceptional OA performers occasionally received 1-round fast-track offers in past cycles.",
                "stages": [
                    {
                        "stageId": "amazon-intern-oa",
                        "stageName": "Online Assessment (Coding + Work Simulation)",
                        "stageType": "Online Assessment",
                        "durationMinutes": 90,
                        "questionCount": 2,
                        "format": "2 DSA Problems + Work Style Survey",
                        "difficultyDistribution": "1 Easy-Medium, 1 Medium",
                        "skillsAssessed": ["Arrays", "Hashtables", "Tree Traversal", "Behavioral Consistency"],
                        "sourceUrl": "https://www.amazon.jobs/en/landing_pages/software-development-topics",
                        "evidenceType": "verified-campus-report",
                        "lastVerified": "2024-10",
                        "confidence": "verified",
                        "uncertaintyNotes": "Code explanation section may ask candidates to justify time/space complexity in text."
                    },
                    {
                        "stageId": "amazon-intern-interview",
                        "stageName": "Technical & Behavioral Video Interview",
                        "stageType": "Technical Interview",
                        "durationMinutes": 60,
                        "questionCount": 1,
                        "format": "Live problem solving on Chime + LP questions",
                        "difficultyDistribution": "Medium",
                        "skillsAssessed": ["Data Structures", "Problem Solving", "STAR Behavioral"],
                        "sourceUrl": "https://www.amazon.jobs/en/landing_pages/software-development-topics",
                        "evidenceType": "official-portal",
                        "lastVerified": "2024-10",
                        "confidence": "verified",
                        "uncertaintyNotes": "Focus is on working code and explaining thought process clearly."
                    }
                ]
            }
        ]
    },
    {
        "id": "microsoft",
        "name": "Microsoft",
        "category": "Big Tech and product engineering",
        "aliases": ["MSFT", "Microsoft India", "Microsoft IDC"],
        "countryOrRegion": "United States",
        "headquarters": "Redmond, WA, USA",
        "indiaOffices": ["Hyderabad", "Bengaluru", "Noida"],
        "overview": "Microsoft India Development Center (IDC) drives engineering for Azure, Windows, Office 365, Developer Tools, and AI. Assessments prioritize algorithms, strings, trees, edge cases, and core CS fundamentals (OS, Memory Management, DBMS).",
        "sourceUrls": [
            "https://careers.microsoft.com/v2/global/en/students",
            "https://careers.microsoft.com/v2/global/en/interviewing"
        ],
        "lastVerified": "2024-08",
        "dataConfidence": "verified",
        "notes": "Microsoft OA is commonly hosted on Codility, Mettl, or HackerEarth. It typically consists of 2 or 3 coding questions with heavy emphasis on corner cases and correctness.",
        "tracks": [
            {
                "id": "msft-swe-fresher",
                "roleTitle": "Software Engineer (Full-Time / Campus)",
                "hiringType": "On-Campus & Off-Campus",
                "experienceLevels": ["Final Year Students", "0-1 Years"],
                "location": "Hyderabad / Bengaluru / Noida",
                "reportedRoundCountMin": 4,
                "reportedRoundCountTypical": 5,
                "reportedRoundCountMax": 6,
                "variationNotes": "Campus recruitment typically has OA + 3 technical rounds + 1 AA (As Appropriate / Bar Raiser / Managerial) round.",
                "stages": [
                    {
                        "stageId": "msft-swe-oa",
                        "stageName": "Microsoft Online Assessment (Codility / Mettl)",
                        "stageType": "Online Assessment",
                        "durationMinutes": 90,
                        "questionCount": 3,
                        "format": "3 Algorithmic / String / Tree problems",
                        "difficultyDistribution": "1 Easy-Medium, 1 Medium, 1 Medium-Hard",
                        "skillsAssessed": ["Data Structures", "Strings/Arrays", "Tree/Graph", "Complexity Analysis"],
                        "sourceUrl": "https://careers.microsoft.com/v2/global/en/interviewing",
                        "evidenceType": "verified-campus-report",
                        "lastVerified": "2024-08",
                        "confidence": "verified",
                        "uncertaintyNotes": "On Codility, once submitted a question cannot be re-opened in some versions. Scoring evaluates correctness and performance tests."
                    },
                    {
                        "stageId": "msft-tech-1",
                        "stageName": "Technical Round 1 (DSA & Clean Code)",
                        "stageType": "Technical Interview",
                        "durationMinutes": 60,
                        "questionCount": 1,
                        "format": "Live problem solving, writing bug-free code on MS Teams",
                        "difficultyDistribution": "Medium",
                        "skillsAssessed": ["Problem Solving", "Edge Cases", "Modularity"],
                        "sourceUrl": "https://careers.microsoft.com/v2/global/en/interviewing",
                        "evidenceType": "official-portal",
                        "lastVerified": "2024-08",
                        "confidence": "verified",
                        "uncertaintyNotes": "Interviewer asks candidate to run through dry runs with custom inputs."
                    },
                    {
                        "stageId": "msft-tech-2",
                        "stageName": "Technical Round 2 (DSA & CS Fundamentals)",
                        "stageType": "Technical Interview",
                        "durationMinutes": 60,
                        "questionCount": 1,
                        "format": "DSA + Operating Systems, Multithreading, DBMS questions",
                        "difficultyDistribution": "Medium",
                        "skillsAssessed": ["Operating Systems", "Virtual Memory", "Deadlocks", "Trees/Graphs"],
                        "sourceUrl": "https://careers.microsoft.com/v2/global/en/interviewing",
                        "evidenceType": "verified-campus-report",
                        "lastVerified": "2024-08",
                        "confidence": "verified",
                        "uncertaintyNotes": "Microsoft frequently probes core CS subjects like OS and threads for entry-level roles."
                    },
                    {
                        "stageId": "msft-aa-round",
                        "stageName": "As-Appropriate (AA) / Partner Director Round",
                        "stageType": "Hiring Manager / HR",
                        "durationMinutes": 45,
                        "questionCount": null,
                        "format": "System vision, project deep dive, cultural alignment",
                        "difficultyDistribution": "Technical & Managerial",
                        "skillsAssessed": ["Growth Mindset", "Passion for Tech", "Design Thinking"],
                        "sourceUrl": "https://careers.microsoft.com/v2/global/en/interviewing",
                        "evidenceType": "official-portal",
                        "lastVerified": "2024-08",
                        "confidence": "verified",
                        "uncertaintyNotes": "Similar to Bar Raiser; evaluates long-term potential and growth mindset."
                    }
                ]
            }
        ]
    },
    {
        "id": "meta",
        "name": "Meta",
        "category": "Big Tech and product engineering",
        "aliases": ["Facebook", "Instagram", "WhatsApp", "Meta Platforms"],
        "countryOrRegion": "United States",
        "headquarters": "Menlo Park, CA, USA",
        "indiaOffices": ["Bengaluru", "Gurugram", "Hyderabad"],
        "overview": "Meta builds social media platforms and AR/VR infrastructure. Meta's technical interviews are renowned for rapid, bug-free implementation of medium-to-hard LeetCode-style problems (typically 2 problems in 45 minutes).",
        "sourceUrls": ["https://www.metacareers.com/swe-prep-tech-screen"],
        "lastVerified": "2024-07",
        "dataConfidence": "verified",
        "notes": "Meta rarely conducts campus recruitment in India, mostly hiring experienced engineers or via international rotational programs/hackathons. Speed and clean syntax without hints are essential.",
        "tracks": [
            {
                "id": "meta-swe-e3",
                "roleTitle": "Software Engineer (E3 / Early Career)",
                "hiringType": "Off-Campus",
                "experienceLevels": ["0-2 Years"],
                "location": "Bengaluru / Remote",
                "reportedRoundCountMin": 4,
                "reportedRoundCountTypical": 5,
                "reportedRoundCountMax": 5,
                "variationNotes": "Screening phone round followed by virtual onsite (2 coding, 1 behavioral, 1 product architecture).",
                "stages": [
                    {
                        "stageId": "meta-screen",
                        "stageName": "Technical Screen",
                        "stageType": "Technical Interview",
                        "durationMinutes": 45,
                        "questionCount": 2,
                        "format": "2 DSA problems on CoderPad (no compilation)",
                        "difficultyDistribution": "2 LeetCode Mediums",
                        "skillsAssessed": ["Speed", "Accuracy", "Communication", "Data Structures"],
                        "sourceUrl": "https://www.metacareers.com/swe-prep-tech-screen",
                        "evidenceType": "official-portal",
                        "lastVerified": "2024-07",
                        "confidence": "verified",
                        "uncertaintyNotes": "Candidates are expected to solve both problems in ~35 minutes of actual coding time."
                    }
                ]
            }
        ]
    },
    {
        "id": "apple",
        "name": "Apple",
        "category": "Big Tech and product engineering",
        "aliases": ["Apple India"],
        "countryOrRegion": "United States",
        "headquarters": "Cupertino, CA, USA",
        "indiaOffices": ["Bengaluru", "Hyderabad"],
        "overview": "Apple builds hardware, operating systems (macOS, iOS), and cloud services. Apple hiring is highly team-specific; there is no centralized hiring committee. Questions range from low-level systems (C/C++, memory management) to algorithms and object-oriented design.",
        "sourceUrls": ["https://www.apple.com/careers/in/"],
        "lastVerified": "2024-06",
        "dataConfidence": "community-reported",
        "notes": "Process varies widely by team. Hardware/embedded teams test C/OS; cloud teams test Java/Go/DSA. OA is frequently hosted on HackerRank.",
        "tracks": [
            {
                "id": "apple-swe",
                "roleTitle": "Software Development Engineer",
                "hiringType": "On-Campus & Off-Campus",
                "experienceLevels": ["0-2 Years"],
                "location": "Bengaluru / Hyderabad",
                "reportedRoundCountMin": 4,
                "reportedRoundCountTypical": 5,
                "reportedRoundCountMax": 6,
                "variationNotes": "Team-dependent. Usually 1 OA + 1 technical screen + 4 onsite rounds.",
                "stages": [
                    {
                        "stageId": "apple-oa",
                        "stageName": "Online Coding Assessment",
                        "stageType": "Online Assessment",
                        "durationMinutes": 90,
                        "questionCount": 3,
                        "format": "Algorithmic problems + CS Fundamentals MCQs",
                        "difficultyDistribution": "Medium",
                        "skillsAssessed": ["Data Structures", "Algorithms", "C++/Java", "Complexity"],
                        "sourceUrl": "https://www.apple.com/careers/in/",
                        "evidenceType": "community-aggregate",
                        "lastVerified": "2024-06",
                        "confidence": "community-reported",
                        "uncertaintyNotes": "OA is not universal; some teams start directly with an engineer phone screen."
                    }
                ]
            }
        ]
    },
    {
        "id": "netflix",
        "name": "Netflix",
        "category": "Big Tech and product engineering",
        "aliases": ["Netflix India"],
        "countryOrRegion": "United States",
        "headquarters": "Los Gatos, CA, USA",
        "indiaOffices": ["Mumbai"],
        "overview": "Netflix pioneered modern streaming, microservice architectures, and chaos engineering. Historically hired only senior engineers; now hires early-career in select global hubs with an emphasis on system ownership, autonomy, and cultural alignment (Freedom & Responsibility).",
        "sourceUrls": ["https://jobs.netflix.com/culture"],
        "lastVerified": "2024-05",
        "dataConfidence": "community-reported",
        "notes": "Very selective. Heavy focus on system design, distributed data, and high concurrency.",
        "tracks": [
            {
                "id": "netflix-swe",
                "roleTitle": "Software Engineer",
                "hiringType": "Off-Campus",
                "experienceLevels": ["2+ Years", "Experienced"],
                "location": "Mumbai / Remote",
                "reportedRoundCountMin": 4,
                "reportedRoundCountTypical": 5,
                "reportedRoundCountMax": 6,
                "variationNotes": "Focus is on practical distributed systems and culture fit.",
                "stages": [
                    {
                        "stageId": "netflix-screen",
                        "stageName": "Technical Screen",
                        "stageType": "Technical Interview",
                        "durationMinutes": 60,
                        "questionCount": 1,
                        "format": "Real-world coding / architectural problem",
                        "difficultyDistribution": "Medium-Hard",
                        "skillsAssessed": ["Distributed Systems", "Concurrency", "DSA"],
                        "sourceUrl": "https://jobs.netflix.com/culture",
                        "evidenceType": "community-aggregate",
                        "lastVerified": "2024-05",
                        "confidence": "community-reported",
                        "uncertaintyNotes": "Tests culture alignment with Netflix Culture Memo."
                    }
                ]
            }
        ]
    },
    {
        "id": "nvidia",
        "name": "NVIDIA",
        "category": "Big Tech and product engineering",
        "aliases": ["NVDA", "Nvidia India"],
        "countryOrRegion": "United States",
        "headquarters": "Santa Clara, CA, USA",
        "indiaOffices": ["Bengaluru", "Pune", "Hyderabad", "Gurugram"],
        "overview": "NVIDIA leads accelerated computing, GPUs, CUDA, and AI hardware/software stacks. Assessments heavily test C/C++, OS fundamentals, computer architecture, memory hierarchies, pointers, and data structures.",
        "sourceUrls": ["https://www.nvidia.com/en-in/about-nvidia/careers/university-recruiting/"],
        "lastVerified": "2024-08",
        "dataConfidence": "verified",
        "notes": "Assessment on HackerRank or Mettl has a blend of C/C++ MCQs (pointers, bitwise, memory) and coding problems.",
        "tracks": [
            {
                "id": "nvidia-swe-campus",
                "roleTitle": "System Software Engineer / Software Engineer",
                "hiringType": "On-Campus & Off-Campus",
                "experienceLevels": ["0-1 Years", "Graduates"],
                "location": "Bengaluru / Pune / Hyderabad",
                "reportedRoundCountMin": 4,
                "reportedRoundCountTypical": 5,
                "reportedRoundCountMax": 5,
                "variationNotes": "Campus OA is typically followed by 3 technical rounds focusing on C++, OS, Multithreading, and DSA.",
                "stages": [
                    {
                        "stageId": "nvidia-oa",
                        "stageName": "NVIDIA Online Assessment",
                        "stageType": "Online Assessment",
                        "durationMinutes": 90,
                        "questionCount": 22,
                        "format": "20 Technical MCQs (C/C++, OS, Architecture) + 2 Coding Problems",
                        "difficultyDistribution": "MCQ: Medium; Coding: 1 Medium, 1 Hard",
                        "skillsAssessed": ["C++ Pointers & Memory", "Operating Systems", "Bitwise Operations", "Algorithms"],
                        "sourceUrl": "https://www.nvidia.com/en-in/about-nvidia/careers/university-recruiting/",
                        "evidenceType": "verified-campus-report",
                        "lastVerified": "2024-08",
                        "confidence": "verified",
                        "uncertaintyNotes": "Strict negative marking in MCQs is frequently reported."
                    }
                ]
            }
        ]
    },
    {
        "id": "adobe",
        "name": "Adobe",
        "category": "Big Tech and product engineering",
        "aliases": ["Adobe Systems", "Adobe India"],
        "countryOrRegion": "United States",
        "headquarters": "San Jose, CA, USA",
        "indiaOffices": ["Noida", "Bengaluru"],
        "overview": "Adobe creates creative cloud, document cloud, and enterprise marketing software. Hiring evaluates strong algorithmic problem solving, trees, dynamic programming, and low-level design.",
        "sourceUrls": ["https://www.adobe.com/careers/university.html"],
        "lastVerified": "2024-07",
        "dataConfidence": "verified",
        "notes": "Adobe OA is conducted on HackerRank or Cocubes. Typically 2 coding problems + 20-30 MCQs across CS fundamentals and quantitative aptitude.",
        "tracks": [
            {
                "id": "adobe-mts-1",
                "roleTitle": "Member of Technical Staff 1 (MTS-1)",
                "hiringType": "On-Campus & Off-Campus",
                "experienceLevels": ["0-1 Years"],
                "location": "Noida / Bengaluru",
                "reportedRoundCountMin": 4,
                "reportedRoundCountTypical": 5,
                "reportedRoundCountMax": 5,
                "variationNotes": "Campus process: OA -> 3 Technical Rounds -> Director / HR Round.",
                "stages": [
                    {
                        "stageId": "adobe-oa",
                        "stageName": "Adobe Online Assessment",
                        "stageType": "Online Assessment",
                        "durationMinutes": 105,
                        "questionCount": 22,
                        "format": "2 Coding Questions + 20 MCQs (DSA, OS, DBMS, Aptitude)",
                        "difficultyDistribution": "1 Medium, 1 Hard",
                        "skillsAssessed": ["DP", "Trees/Graphs", "OS", "DBMS"],
                        "sourceUrl": "https://www.adobe.com/careers/university.html",
                        "evidenceType": "verified-campus-report",
                        "lastVerified": "2024-07",
                        "confidence": "verified",
                        "uncertaintyNotes": "Sectional cutoffs often apply between coding and MCQs."
                    }
                ]
            }
        ]
    },
    {
        "id": "uber",
        "name": "Uber",
        "category": "Big Tech and product engineering",
        "aliases": ["Uber Technologies", "Uber India"],
        "countryOrRegion": "United States",
        "headquarters": "San Francisco, CA, USA",
        "indiaOffices": ["Bengaluru", "Hyderabad"],
        "overview": "Uber builds mobility, delivery, and freight networks. Uber's online assessments (CodeSignal General Coding Assessment or HackerRank) are known for high time pressure, tricky edge cases, and graph/matrix algorithms.",
        "sourceUrls": ["https://www.uber.com/in/en/careers/"],
        "lastVerified": "2024-08",
        "dataConfidence": "verified",
        "notes": "CodeSignal score threshold is typically 800+ or 3/3 problems solved on HackerRank.",
        "tracks": [
            {
                "id": "uber-sde-1",
                "roleTitle": "Software Engineer I",
                "hiringType": "On-Campus & Off-Campus",
                "experienceLevels": ["0-1 Years"],
                "location": "Bengaluru / Hyderabad",
                "reportedRoundCountMin": 4,
                "reportedRoundCountTypical": 5,
                "reportedRoundCountMax": 5,
                "variationNotes": "OA followed by 3 technical rounds (2 DSA + 1 Machine Coding / LLD) and 1 Hiring Manager round.",
                "stages": [
                    {
                        "stageId": "uber-oa",
                        "stageName": "Uber Online Assessment (CodeSignal / HackerRank)",
                        "stageType": "Online Assessment",
                        "durationMinutes": 70,
                        "questionCount": 3,
                        "format": "3 Algorithmic Coding Problems",
                        "difficultyDistribution": "1 Easy-Medium, 1 Medium, 1 Hard",
                        "skillsAssessed": ["Graphs/BFS/DFS", "Dynamic Programming", "Simulation", "Arrays"],
                        "sourceUrl": "https://www.uber.com/in/en/careers/",
                        "evidenceType": "verified-campus-report",
                        "lastVerified": "2024-08",
                        "confidence": "verified",
                        "uncertaintyNotes": "Time per question is tight; CodeSignal assesses speed alongside test pass rate."
                    }
                ]
            }
        ]
    },
    {
        "id": "atlassian",
        "name": "Atlassian",
        "category": "Big Tech and product engineering",
        "aliases": ["TEAM", "Atlassian India"],
        "countryOrRegion": "Australia",
        "headquarters": "Sydney, Australia",
        "indiaOffices": ["Bengaluru / Remote-First (TEAM Anywhere)"],
        "overview": "Atlassian develops Jira, Confluence, Bitbucket, and Trello. Famous for rigorous values-based interviewing ('Open company no bullshit', 'Don't #@!% the customer') and system design/coding rounds focused on production-ready modular code.",
        "sourceUrls": ["https://www.atlassian.com/company/careers"],
        "lastVerified": "2024-09",
        "dataConfidence": "verified",
        "notes": "Atlassian OA on HackerRank typically features 3 questions: 1 data structure design / simulation, 1 graph/DP algorithmic problem, and 1 code analysis or debugging question.",
        "tracks": [
            {
                "id": "atlassian-grad",
                "roleTitle": "Software Engineer (Graduate / Entry-Level)",
                "hiringType": "On-Campus & Off-Campus",
                "experienceLevels": ["0-1 Years"],
                "location": "Bengaluru / Remote Anywhere in India",
                "reportedRoundCountMin": 4,
                "reportedRoundCountTypical": 5,
                "reportedRoundCountMax": 5,
                "variationNotes": "Online Assessment -> Coding & Data Structures -> System Design / Architecture -> Values Interview.",
                "stages": [
                    {
                        "stageId": "atlassian-oa",
                        "stageName": "Atlassian Online Assessment (HackerRank)",
                        "stageType": "Online Assessment",
                        "durationMinutes": 90,
                        "questionCount": 3,
                        "format": "3 Coding & Algorithmic Design Questions",
                        "difficultyDistribution": "1 Medium, 2 Hard",
                        "skillsAssessed": ["Data Structure Design", "Greedy/Graph", "Modular Code", "Time Complexity"],
                        "sourceUrl": "https://www.atlassian.com/company/careers",
                        "evidenceType": "verified-campus-report",
                        "lastVerified": "2024-09",
                        "confidence": "verified",
                        "uncertaintyNotes": "Clean variable naming, modular helper functions, and zero memory leaks expected."
                    },
                    {
                        "stageId": "atlassian-values",
                        "stageName": "Values & Teamwork Interview",
                        "stageType": "Hiring Manager / HR",
                        "durationMinutes": 60,
                        "questionCount": null,
                        "format": "In-depth behavioral assessment against Atlassian core values",
                        "difficultyDistribution": "Behavioral",
                        "skillsAssessed": ["Empathy", "Collaboration", "Constructive Candor", "Ownership"],
                        "sourceUrl": "https://www.atlassian.com/company/careers",
                        "evidenceType": "official-portal",
                        "lastVerified": "2024-09",
                        "confidence": "verified",
                        "uncertaintyNotes": "Values round has equal weight to technical rounds."
                    }
                ]
            }
        ]
    },
    {
        "id": "salesforce",
        "name": "Salesforce",
        "category": "Big Tech and product engineering",
        "aliases": ["CRM", "Salesforce India"],
        "countryOrRegion": "United States",
        "headquarters": "San Francisco, CA, USA",
        "indiaOffices": ["Hyderabad", "Bengaluru", "Mumbai", "Gurugram"],
        "overview": "Salesforce provides customer relationship management and enterprise cloud services. OA tests DSA, OOP, and database concepts. Live rounds emphasize problem solving, edge cases, and architectural discussions.",
        "sourceUrls": ["https://www.salesforce.com/company/careers/"],
        "lastVerified": "2024-07",
        "dataConfidence": "verified",
        "notes": "HackerRank OA with 3 coding problems of Medium difficulty.",
        "tracks": [
            {
                "id": "salesforce-mts",
                "roleTitle": "Associate Member of Technical Staff (AMTS)",
                "hiringType": "On-Campus & Off-Campus",
                "experienceLevels": ["0-1 Years"],
                "location": "Hyderabad / Bengaluru",
                "reportedRoundCountMin": 4,
                "reportedRoundCountTypical": 5,
                "reportedRoundCountMax": 5,
                "variationNotes": "OA -> 2 Technical Rounds -> 1 Managerial / Cultural Fit Round.",
                "stages": [
                    {
                        "stageId": "salesforce-oa",
                        "stageName": "Salesforce Online Assessment",
                        "stageType": "Online Assessment",
                        "durationMinutes": 90,
                        "questionCount": 3,
                        "format": "3 Coding Questions (HackerRank)",
                        "difficultyDistribution": "2 Medium, 1 Hard",
                        "skillsAssessed": ["Trees", "Dynamic Programming", "HashMaps", "Graphs"],
                        "sourceUrl": "https://www.salesforce.com/company/careers/",
                        "evidenceType": "verified-campus-report",
                        "lastVerified": "2024-07",
                        "confidence": "verified",
                        "uncertaintyNotes": "All test cases must pass for high shortlisting probability."
                    }
                ]
            }
        ]
    },
    {
        "id": "oracle",
        "name": "Oracle",
        "category": "Big Tech and product engineering",
        "aliases": ["Oracle Cloud Infrastructure", "OCI", "Oracle India"],
        "countryOrRegion": "United States",
        "headquarters": "Austin, TX, USA",
        "indiaOffices": ["Bengaluru", "Hyderabad", "Noida", "Pune"],
        "overview": "Oracle develops relational databases, ERP, and Oracle Cloud Infrastructure (OCI). OCI interviews emphasize distributed systems, networking, OS internals, and algorithmic coding.",
        "sourceUrls": ["https://www.oracle.com/corporate/careers/"],
        "lastVerified": "2024-08",
        "dataConfidence": "verified",
        "notes": "Oracle campus assessments often run on HackerRank or Oracle's internal assessment platform.",
        "tracks": [
            {
                "id": "oracle-server-tech",
                "roleTitle": "Software Developer (Server Technology / OCI)",
                "hiringType": "On-Campus & Off-Campus",
                "experienceLevels": ["0-1 Years"],
                "location": "Bengaluru / Hyderabad",
                "reportedRoundCountMin": 4,
                "reportedRoundCountTypical": 5,
                "reportedRoundCountMax": 5,
                "variationNotes": "Campus process includes an aptitude + technical MCQ + coding OA, followed by 3 technical rounds.",
                "stages": [
                    {
                        "stageId": "oracle-oa",
                        "stageName": "Oracle Campus Assessment",
                        "stageType": "Online Assessment",
                        "durationMinutes": 105,
                        "questionCount": 24,
                        "format": "2 Coding Questions + 22 MCQs (CS fundamentals, DBMS, Aptitude)",
                        "difficultyDistribution": "Medium",
                        "skillsAssessed": ["SQL & Relational DBs", "OS", "Trees", "Sorting/Searching"],
                        "sourceUrl": "https://www.oracle.com/corporate/careers/",
                        "evidenceType": "verified-campus-report",
                        "lastVerified": "2024-08",
                        "confidence": "verified",
                        "uncertaintyNotes": "DBMS concepts (indexing, normal forms, transactions) are heavily tested."
                    }
                ]
            }
        ]
    },
    {
        "id": "intuit",
        "name": "Intuit",
        "category": "Big Tech and product engineering",
        "aliases": ["TurboTax", "QuickBooks", "Intuit India"],
        "countryOrRegion": "United States",
        "headquarters": "Mountain View, CA, USA",
        "indiaOffices": ["Bengaluru"],
        "overview": "Intuit builds financial platforms (TurboTax, QuickBooks, Credit Karma). The assessment and interview focus heavily on craft skills, OOP design, customer obsession, and values.",
        "sourceUrls": ["https://www.intuit.com/careers/"],
        "lastVerified": "2024-08",
        "dataConfidence": "verified",
        "notes": "HackerRank OA with 4 questions: 2 DSA + 2 short debugging/concept questions.",
        "tracks": [
            {
                "id": "intuit-sde-1",
                "roleTitle": "Software Engineer 1",
                "hiringType": "On-Campus & Off-Campus",
                "experienceLevels": ["0-1 Years"],
                "location": "Bengaluru",
                "reportedRoundCountMin": 4,
                "reportedRoundCountTypical": 4,
                "reportedRoundCountMax": 5,
                "variationNotes": "OA -> Craft Demonstration / Coding Round -> Architecture/Design -> Values Round.",
                "stages": [
                    {
                        "stageId": "intuit-oa",
                        "stageName": "Intuit Online Assessment (HackerRank)",
                        "stageType": "Online Assessment",
                        "durationMinutes": 90,
                        "questionCount": 4,
                        "format": "2 DSA Coding Problems + 2 Debugging Questions",
                        "difficultyDistribution": "1 Medium, 1 Medium-Hard",
                        "skillsAssessed": ["Data Structures", "Algorithms", "Clean Code"],
                        "sourceUrl": "https://www.intuit.com/careers/",
                        "evidenceType": "verified-campus-report",
                        "lastVerified": "2024-08",
                        "confidence": "verified",
                        "uncertaintyNotes": "Often features one problem on graph/BFS and one on array hashing."
                    }
                ]
            }
        ]
    },
    {
        "id": "linkedin",
        "name": "LinkedIn",
        "category": "Big Tech and product engineering",
        "aliases": ["LinkedIn India"],
        "countryOrRegion": "United States",
        "headquarters": "Sunnyvale, CA, USA",
        "indiaOffices": ["Bengaluru"],
        "overview": "LinkedIn operates the world's largest professional social network. Known for rigorous coding rounds, distributed caching discussions, and system design.",
        "sourceUrls": ["https://careers.linkedin.com/"],
        "lastVerified": "2024-07",
        "dataConfidence": "verified",
        "notes": "HackerRank OA typically features 3 problems with 90-minute limit.",
        "tracks": [
            {
                "id": "linkedin-swe-1",
                "roleTitle": "Software Engineer",
                "hiringType": "On-Campus & Off-Campus",
                "experienceLevels": ["0-1 Years"],
                "location": "Bengaluru",
                "reportedRoundCountMin": 4,
                "reportedRoundCountTypical": 5,
                "reportedRoundCountMax": 5,
                "variationNotes": "OA followed by 3 technical rounds (2 Coding + 1 LLD/Concurrency) and 1 Host Manager interview.",
                "stages": [
                    {
                        "stageId": "linkedin-oa",
                        "stageName": "LinkedIn Online Assessment",
                        "stageType": "Online Assessment",
                        "durationMinutes": 90,
                        "questionCount": 3,
                        "format": "3 Coding Questions",
                        "difficultyDistribution": "1 Medium, 2 Hard",
                        "skillsAssessed": ["Trees", "Trie", "Graphs", "DP"],
                        "sourceUrl": "https://careers.linkedin.com/",
                        "evidenceType": "verified-campus-report",
                        "lastVerified": "2024-07",
                        "confidence": "verified",
                        "uncertaintyNotes": "High bar; all test cases usually required for interview call."
                    }
                ]
            }
        ]
    },
    {
        "id": "cisco",
        "name": "Cisco",
        "category": "Big Tech and product engineering",
        "aliases": ["Cisco Systems", "Cisco India"],
        "countryOrRegion": "United States",
        "headquarters": "San Jose, CA, USA",
        "indiaOffices": ["Bengaluru", "Chennai"],
        "overview": "Cisco builds networking hardware, telecommunications equipment, cybersecurity, and cloud solutions. Campus hiring tests Computer Networks (OSI, TCP/IP, Routing), Operating Systems, C/Python, and Algorithms.",
        "sourceUrls": ["https://www.cisco.com/c/en/us/about/careers.html"],
        "lastVerified": "2024-08",
        "dataConfidence": "verified",
        "notes": "OA has an extensive technical MCQ section focusing on Networking protocols, subnetting, and OS internals.",
        "tracks": [
            {
                "id": "cisco-software-eng",
                "roleTitle": "Software Engineer (Campus / Early Career)",
                "hiringType": "On-Campus",
                "experienceLevels": ["Students", "0-1 Years"],
                "location": "Bengaluru",
                "reportedRoundCountMin": 3,
                "reportedRoundCountTypical": 4,
                "reportedRoundCountMax": 5,
                "variationNotes": "Campus process: Online Assessment -> Technical Round 1 -> Technical Round 2 -> Managerial/HR.",
                "stages": [
                    {
                        "stageId": "cisco-oa",
                        "stageName": "Cisco Campus Online Assessment",
                        "stageType": "Online Assessment",
                        "durationMinutes": 90,
                        "questionCount": 27,
                        "format": "2 Coding Problems + 25 Technical MCQs (Networking, OS, Data Structures)",
                        "difficultyDistribution": "Medium",
                        "skillsAssessed": ["Computer Networks (TCP/IP, Subnetting)", "OS", "Algorithms", "C/C++"],
                        "sourceUrl": "https://www.cisco.com/c/en/us/about/careers.html",
                        "evidenceType": "verified-campus-report",
                        "lastVerified": "2024-08",
                        "confidence": "verified",
                        "uncertaintyNotes": "High weightage given to networking fundamentals."
                    }
                ]
            }
        ]
    }
]

print(f"Loaded {len(companies_raw)} core big tech companies.")

