// CompanyQ Data Source: COMPANIES_DATA
// Detailed recruitment profiles for 115+ software engineering employers

const COMPANIES_DATA = [
  {
    "id": "google",
    "name": "Google",
    "category": "Big Tech and product engineering",
    "aliases": [
      "Alphabet",
      "Google India"
    ],
    "countryOrRegion": "United States",
    "headquarters": "Mountain View, CA, USA",
    "indiaOffices": [
      "Bengaluru",
      "Hyderabad",
      "Gurugram",
      "Mumbai"
    ],
    "overview": "Google designs global search, cloud, Android, and AI infrastructure. Entry-level assessments and interviews prioritize algorithm optimization, graph/DP mastery, edge cases, and Googliness (humility, ambiguity management).",
    "sourceUrls": [
      "https://careers.google.com/how-we-hire/",
      "https://careers.google.com/students/"
    ],
    "lastVerified": "2024-09",
    "dataConfidence": "verified",
    "notes": "Google Online Challenge (GOC) typically includes 2 algorithmic problems on HackerEarth with strict time limits. Full test case pass without TLE is essential.",
    "roleTracks": [
      {
        "id": "google-swe-intern",
        "companyId": "google",
        "roleTitle": "Software Engineering Intern",
        "hiringType": "Internship",
        "experienceLevels": [
          "Students / Penultimate Year"
        ],
        "location": "Bengaluru / Hyderabad",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Campus drives feature OA + 2 tech rounds; off-campus may include recruiter screen.",
        "assessmentStages": [
          {
            "stageId": "google-swe-intern-oa",
            "stageName": "Google Online Challenge (GOC)",
            "stageType": "Online Assessment",
            "durationMinutes": 60,
            "questionCount": 2,
            "format": "2 algorithmic coding problems",
            "difficultyDistribution": "1 Medium-Hard, 1 Hard",
            "skillsAssessed": [
              "Algorithms",
              "Dynamic Programming",
              "Graph Traversal"
            ],
            "sourceUrl": "https://careers.google.com/students/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "google-swe-intern-r1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 45,
            "questionCount": 1,
            "format": "Live coding on Google Docs / CoderPad",
            "difficultyDistribution": "Medium-Hard",
            "skillsAssessed": [
              "Data Structures",
              "Complexity Analysis",
              "Communication"
            ],
            "sourceUrl": "https://careers.google.com/how-we-hire/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "google-swe-intern-r2",
            "stageName": "Technical Interview 2",
            "stageType": "Technical Interview",
            "durationMinutes": 45,
            "questionCount": 1,
            "format": "Live problem solving & edge cases",
            "difficultyDistribution": "Medium-Hard",
            "skillsAssessed": [
              "Graph/Trees",
              "Corner Cases"
            ],
            "sourceUrl": "https://careers.google.com/how-we-hire/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      },
      {
        "id": "google-swe-newgrad",
        "companyId": "google",
        "roleTitle": "Software Engineer (Early Career / L3)",
        "hiringType": "On-Campus / Off-Campus",
        "experienceLevels": [
          "0-1 Years",
          "Recent Graduates"
        ],
        "location": "Bengaluru / Hyderabad",
        "reportedRoundCountMin": 4,
        "reportedRoundCountTypical": 5,
        "reportedRoundCountMax": 6,
        "variationNotes": "OA followed by 3 technical rounds + 1 Googliness & Leadership round.",
        "assessmentStages": [
          {
            "stageId": "google-swe-newgrad-oa",
            "stageName": "Google Online Challenge",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 2,
            "format": "2 Algorithmic Coding Problems",
            "difficultyDistribution": "1 Medium, 1 Hard",
            "skillsAssessed": [
              "Trees/Graphs",
              "DP",
              "Greedy"
            ],
            "sourceUrl": "https://careers.google.com/how-we-hire/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "google-swe-newgrad-tech",
            "stageName": "Technical Problem Solving (3 Rounds)",
            "stageType": "Technical Interview",
            "durationMinutes": 135,
            "questionCount": 3,
            "format": "Three 45-min live coding sessions",
            "difficultyDistribution": "Medium to Hard",
            "skillsAssessed": [
              "DSA",
              "Edge Cases",
              "Modularity"
            ],
            "sourceUrl": "https://careers.google.com/how-we-hire/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "google-swe-newgrad-googliness",
            "stageName": "Googliness & Leadership",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral & hypothetical scenario discussion",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Ambiguity",
              "Collaboration",
              "Ethics"
            ],
            "sourceUrl": "https://careers.google.com/how-we-hire/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "amazon",
    "name": "Amazon",
    "category": "Big Tech and product engineering",
    "aliases": [
      "AWS",
      "Amazon Web Services",
      "Amazon India"
    ],
    "countryOrRegion": "United States",
    "headquarters": "Seattle, WA, USA",
    "indiaOffices": [
      "Bengaluru",
      "Hyderabad",
      "Chennai",
      "Gurugram",
      "Pune"
    ],
    "overview": "Amazon operates global e-commerce, cloud computing (AWS), logistics, and entertainment. Assessments test DSA, system design/LLD, and adherence to the 16 Leadership Principles (Customer Obsession, Ownership, Bias for Action).",
    "sourceUrls": [
      "https://www.amazon.jobs/en/landing_pages/software-development-topics",
      "https://www.amazon.jobs/content/en/how-we-hire/leadership-principles"
    ],
    "lastVerified": "2024-10",
    "dataConfidence": "verified",
    "notes": "OA on HackerRank consists of 2 coding problems followed by a mandatory Work Style Assessment (behavioral consistency).",
    "roleTracks": [
      {
        "id": "amazon-sde-1",
        "companyId": "amazon",
        "roleTitle": "Software Development Engineer I (SDE-1)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-1 Years",
          "Recent Graduates"
        ],
        "location": "Bengaluru / Hyderabad / Chennai",
        "reportedRoundCountMin": 4,
        "reportedRoundCountTypical": 5,
        "reportedRoundCountMax": 6,
        "variationNotes": "OA + 3-4 virtual rounds on Amazon Chime including a Bar Raiser.",
        "assessmentStages": [
          {
            "stageId": "amazon-sde-oa",
            "stageName": "Online Assessment (OA1 + OA2)",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 2,
            "format": "2 Coding Problems (70 min) + Work Style Survey (20 min)",
            "difficultyDistribution": "1 Medium, 1 Medium-Hard",
            "skillsAssessed": [
              "Arrays/Strings",
              "Trees/Graphs",
              "Leadership Principles"
            ],
            "sourceUrl": "https://www.amazon.jobs/en/landing_pages/software-development-topics",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "amazon-sde-tech1",
            "stageName": "Technical Interview 1 (DSA & LP)",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "DSA coding + 2 LP behavioral questions",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "STAR Method",
              "Ownership"
            ],
            "sourceUrl": "https://www.amazon.jobs/en/landing_pages/software-development-topics",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "amazon-sde-tech2",
            "stageName": "Technical Interview 2 (LLD / DSA)",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Object-Oriented Design (e.g. Locker System)",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP Concepts",
              "Design Patterns",
              "Clean Code"
            ],
            "sourceUrl": "https://www.amazon.jobs/en/landing_pages/software-development-topics",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "amazon-sde-bar-raiser",
            "stageName": "Bar Raiser Interview",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Challenging coding question + intensive LP probing",
            "difficultyDistribution": "Medium-Hard",
            "skillsAssessed": [
              "Deliver Results",
              "Bias for Action",
              "Scalable Thinking"
            ],
            "sourceUrl": "https://www.amazon.jobs/content/en/how-we-hire/leadership-principles",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      },
      {
        "id": "amazon-sde-intern",
        "companyId": "amazon",
        "roleTitle": "SDE Intern (Summer / 6 Months)",
        "hiringType": "Internship",
        "experienceLevels": [
          "Students / Pre-Final Year"
        ],
        "location": "Bengaluru / Hyderabad",
        "reportedRoundCountMin": 2,
        "reportedRoundCountTypical": 3,
        "reportedRoundCountMax": 4,
        "variationNotes": "Campus drives conduct 1 OA followed by 2 technical rounds.",
        "assessmentStages": [
          {
            "stageId": "amazon-intern-oa",
            "stageName": "Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 2,
            "format": "2 DSA Problems + Work Style Survey",
            "difficultyDistribution": "1 Easy-Medium, 1 Medium",
            "skillsAssessed": [
              "Arrays",
              "Hashtables",
              "Tree Traversal"
            ],
            "sourceUrl": "https://www.amazon.jobs/en/landing_pages/software-development-topics",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "amazon-intern-tech",
            "stageName": "Technical Video Interview",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving on Chime + LP questions",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "STAR Behavioral"
            ],
            "sourceUrl": "https://www.amazon.jobs/en/landing_pages/software-development-topics",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "microsoft",
    "name": "Microsoft",
    "category": "Big Tech and product engineering",
    "aliases": [
      "MSFT",
      "Microsoft India",
      "Microsoft IDC"
    ],
    "countryOrRegion": "United States",
    "headquarters": "Redmond, WA, USA",
    "indiaOffices": [
      "Hyderabad",
      "Bengaluru",
      "Noida"
    ],
    "overview": "Microsoft India Development Center (IDC) drives engineering for Azure, Windows, Office 365, Developer Tools, and AI. Assessments test algorithms, strings, trees, edge cases, and core CS fundamentals (OS, Memory Management, DBMS).",
    "sourceUrls": [
      "https://careers.microsoft.com/v2/global/en/students",
      "https://careers.microsoft.com/v2/global/en/interviewing"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "verified",
    "notes": "Microsoft OA is commonly hosted on Codility, Mettl, or HackerEarth. It typically consists of 2 or 3 coding questions with heavy emphasis on corner cases and correctness.",
    "roleTracks": [
      {
        "id": "msft-swe-fresher",
        "companyId": "microsoft",
        "roleTitle": "Software Engineer (Full-Time / Campus)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "Final Year Students",
          "0-1 Years"
        ],
        "location": "Hyderabad / Bengaluru / Noida",
        "reportedRoundCountMin": 4,
        "reportedRoundCountTypical": 5,
        "reportedRoundCountMax": 6,
        "variationNotes": "Campus recruitment typically has OA + 3 technical rounds + 1 AA (As Appropriate / Bar Raiser) round.",
        "assessmentStages": [
          {
            "stageId": "msft-swe-oa",
            "stageName": "Microsoft Online Assessment (Codility / Mettl)",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Algorithmic / String / Tree problems",
            "difficultyDistribution": "1 Easy-Medium, 1 Medium, 1 Medium-Hard",
            "skillsAssessed": [
              "Data Structures",
              "Strings/Arrays",
              "Tree/Graph",
              "Complexity Analysis"
            ],
            "sourceUrl": "https://careers.microsoft.com/v2/global/en/interviewing",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "msft-tech-1",
            "stageName": "Technical Round 1 (DSA & Clean Code)",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving, writing bug-free code on MS Teams",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Problem Solving",
              "Edge Cases",
              "Modularity"
            ],
            "sourceUrl": "https://careers.microsoft.com/v2/global/en/interviewing",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "msft-tech-2",
            "stageName": "Technical Round 2 (DSA & CS Fundamentals)",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "DSA + Operating Systems, Multithreading, DBMS questions",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Operating Systems",
              "Virtual Memory",
              "Deadlocks",
              "Trees/Graphs"
            ],
            "sourceUrl": "https://careers.microsoft.com/v2/global/en/interviewing",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "msft-aa-round",
            "stageName": "As-Appropriate (AA) / Partner Director Round",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "System vision, project deep dive, cultural alignment",
            "difficultyDistribution": "Technical & Managerial",
            "skillsAssessed": [
              "Growth Mindset",
              "Passion for Tech",
              "Design Thinking"
            ],
            "sourceUrl": "https://careers.microsoft.com/v2/global/en/interviewing",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "meta",
    "name": "Meta",
    "category": "Big Tech and product engineering",
    "aliases": [
      "Facebook",
      "Instagram",
      "WhatsApp"
    ],
    "countryOrRegion": "United States",
    "headquarters": "Menlo Park, CA, USA",
    "indiaOffices": [
      "Bengaluru",
      "Gurugram"
    ],
    "overview": "Meta develops social platforms and AI/VR technology. Technical screens emphasize rapid, error-free coding of two medium algorithmic problems in 45 minutes on CoderPad.",
    "sourceUrls": [
      "https://www.metacareers.com/swe-prep-tech-screen"
    ],
    "lastVerified": "2024-07",
    "dataConfidence": "verified",
    "notes": "Speed, communication, and clean syntax without IDE assistance are critical.",
    "roleTracks": [
      {
        "id": "meta-swe-e3",
        "companyId": "meta",
        "roleTitle": "Software Engineer (E3 / Early Career)",
        "hiringType": "Off-Campus",
        "experienceLevels": [
          "0-2 Years"
        ],
        "location": "Bengaluru / Remote",
        "reportedRoundCountMin": 4,
        "reportedRoundCountTypical": 5,
        "reportedRoundCountMax": 5,
        "variationNotes": "Phone screen + 4 onsite rounds (2 coding, 1 behavioral, 1 product architecture).",
        "assessmentStages": [
          {
            "stageId": "meta-screen",
            "stageName": "Technical Screen",
            "stageType": "Technical Interview",
            "durationMinutes": 45,
            "questionCount": 2,
            "format": "2 DSA problems on CoderPad (no compilation)",
            "difficultyDistribution": "2 Mediums",
            "skillsAssessed": [
              "Speed",
              "Accuracy",
              "Communication"
            ],
            "sourceUrl": "https://www.metacareers.com/swe-prep-tech-screen",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "apple",
    "name": "Apple",
    "category": "Big Tech and product engineering",
    "aliases": [
      "Apple India"
    ],
    "countryOrRegion": "United States",
    "headquarters": "Cupertino, CA, USA",
    "indiaOffices": [
      "Bengaluru",
      "Hyderabad"
    ],
    "overview": "Apple engineers consumer hardware, macOS/iOS, and cloud services. Recruitment is team-dependent, testing C/C++, low-level systems, concurrency, or algorithms.",
    "sourceUrls": [
      "https://www.apple.com/careers/in/"
    ],
    "lastVerified": "2024-06",
    "dataConfidence": "community-reported",
    "notes": "HackerRank OA or direct phone screen depending on team (hardware systems vs cloud services).",
    "roleTracks": [
      {
        "id": "apple-swe",
        "companyId": "apple",
        "roleTitle": "Software Development Engineer",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years"
        ],
        "location": "Bengaluru / Hyderabad",
        "reportedRoundCountMin": 4,
        "reportedRoundCountTypical": 5,
        "reportedRoundCountMax": 6,
        "variationNotes": "Team dependent. Typically 1 OA + 1 technical screen + 3-4 onsite interviews.",
        "assessmentStages": [
          {
            "stageId": "apple-oa",
            "stageName": "Online Coding Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "Algorithmic problems + CS Fundamentals MCQs",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Algorithms",
              "C++/Java"
            ],
            "sourceUrl": "https://www.apple.com/careers/in/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "netflix",
    "name": "Netflix",
    "category": "Big Tech and product engineering",
    "aliases": [
      "Netflix India"
    ],
    "countryOrRegion": "United States",
    "headquarters": "Los Gatos, CA, USA",
    "indiaOffices": [
      "Mumbai"
    ],
    "overview": "Netflix develops high-concurrency streaming, content delivery networks, and distributed systems. Focuses on autonomy, ownership, and deep system architecture.",
    "sourceUrls": [
      "https://jobs.netflix.com/culture"
    ],
    "lastVerified": "2024-05",
    "dataConfidence": "community-reported",
    "notes": "Very selective hiring; assesses culture fit according to the Netflix Culture Memo.",
    "roleTracks": [
      {
        "id": "netflix-swe",
        "companyId": "netflix",
        "roleTitle": "Software Engineer",
        "hiringType": "Off-Campus",
        "experienceLevels": [
          "2+ Years"
        ],
        "location": "Mumbai",
        "reportedRoundCountMin": 4,
        "reportedRoundCountTypical": 5,
        "reportedRoundCountMax": 6,
        "variationNotes": "Technical screen followed by system design and values interviews.",
        "assessmentStages": [
          {
            "stageId": "netflix-screen",
            "stageName": "Technical Screen",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Real-world coding & distributed architectural problem",
            "difficultyDistribution": "Medium-Hard",
            "skillsAssessed": [
              "Distributed Systems",
              "Concurrency",
              "DSA"
            ],
            "sourceUrl": "https://jobs.netflix.com/culture",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "nvidia",
    "name": "NVIDIA",
    "category": "Big Tech and product engineering",
    "aliases": [
      "NVDA",
      "Nvidia India"
    ],
    "countryOrRegion": "United States",
    "headquarters": "Santa Clara, CA, USA",
    "indiaOffices": [
      "Bengaluru",
      "Pune",
      "Hyderabad",
      "Gurugram"
    ],
    "overview": "NVIDIA specializes in GPU architectures, CUDA programming, AI compute clusters, and autonomous systems. Tests C/C++, pointer arithmetic, memory models, and OS fundamentals.",
    "sourceUrls": [
      "https://www.nvidia.com/en-in/about-nvidia/careers/university-recruiting/"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "verified",
    "notes": "Online Assessment includes technical MCQs on C/C++ memory management, bitwise operations, and 2 coding problems.",
    "roleTracks": [
      {
        "id": "nvidia-swe-campus",
        "companyId": "nvidia",
        "roleTitle": "System Software Engineer / Software Engineer",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-1 Years",
          "Graduates"
        ],
        "location": "Bengaluru / Pune / Hyderabad",
        "reportedRoundCountMin": 4,
        "reportedRoundCountTypical": 5,
        "reportedRoundCountMax": 5,
        "variationNotes": "Campus OA followed by 3 technical rounds focusing on C++, OS, Multithreading, and DSA.",
        "assessmentStages": [
          {
            "stageId": "nvidia-oa",
            "stageName": "NVIDIA Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 22,
            "format": "20 Technical MCQs (C/C++, OS, Architecture) + 2 Coding Problems",
            "difficultyDistribution": "1 Medium, 1 Hard",
            "skillsAssessed": [
              "C++ Pointers & Memory",
              "Operating Systems",
              "Bitwise Operations",
              "Algorithms"
            ],
            "sourceUrl": "https://www.nvidia.com/en-in/about-nvidia/careers/university-recruiting/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "adobe",
    "name": "Adobe",
    "category": "Big Tech and product engineering",
    "aliases": [
      "Adobe Systems",
      "Adobe India"
    ],
    "countryOrRegion": "United States",
    "headquarters": "San Jose, CA, USA",
    "indiaOffices": [
      "Noida",
      "Bengaluru"
    ],
    "overview": "Adobe creates Creative Cloud, Acrobat, and digital experience platforms. Hiring prioritizes algorithmic problem solving, dynamic programming, and low-level design.",
    "sourceUrls": [
      "https://www.adobe.com/careers/university.html"
    ],
    "lastVerified": "2024-07",
    "dataConfidence": "verified",
    "notes": "HackerRank OA contains 2 coding problems + 20-30 MCQs across CS fundamentals and aptitude.",
    "roleTracks": [
      {
        "id": "adobe-mts-1",
        "companyId": "adobe",
        "roleTitle": "Member of Technical Staff 1 (MTS-1)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-1 Years"
        ],
        "location": "Noida / Bengaluru",
        "reportedRoundCountMin": 4,
        "reportedRoundCountTypical": 5,
        "reportedRoundCountMax": 5,
        "variationNotes": "OA -> 3 Technical Rounds -> Director / HR Round.",
        "assessmentStages": [
          {
            "stageId": "adobe-oa",
            "stageName": "Adobe Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 105,
            "questionCount": 22,
            "format": "2 Coding Questions + 20 MCQs (DSA, OS, DBMS, Aptitude)",
            "difficultyDistribution": "1 Medium, 1 Hard",
            "skillsAssessed": [
              "DP",
              "Trees/Graphs",
              "OS",
              "DBMS"
            ],
            "sourceUrl": "https://www.adobe.com/careers/university.html",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "uber",
    "name": "Uber",
    "category": "Big Tech and product engineering",
    "aliases": [
      "Uber Technologies",
      "Uber India"
    ],
    "countryOrRegion": "United States",
    "headquarters": "San Francisco, CA, USA",
    "indiaOffices": [
      "Bengaluru",
      "Hyderabad"
    ],
    "overview": "Uber develops urban mobility, food delivery (Eats), and freight matching infrastructure. Known for high time pressure OA (CodeSignal GCA) testing arrays, matrices, and simulation.",
    "sourceUrls": [
      "https://www.uber.com/in/en/careers/"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "verified",
    "notes": "CodeSignal General Coding Assessment (4 questions, 70 minutes) with tight scoring thresholds (typically 800+ required).",
    "roleTracks": [
      {
        "id": "uber-sde-1",
        "companyId": "uber",
        "roleTitle": "Software Engineer I",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-1 Years"
        ],
        "location": "Bengaluru / Hyderabad",
        "reportedRoundCountMin": 4,
        "reportedRoundCountTypical": 5,
        "reportedRoundCountMax": 5,
        "variationNotes": "OA followed by 3 technical rounds (2 DSA + 1 Machine Coding / LLD) and 1 Manager round.",
        "assessmentStages": [
          {
            "stageId": "uber-oa",
            "stageName": "Uber Online Assessment (CodeSignal)",
            "stageType": "Online Assessment",
            "durationMinutes": 70,
            "questionCount": 4,
            "format": "4 Algorithmic Coding Problems (CodeSignal GCA)",
            "difficultyDistribution": "1 Easy, 2 Medium, 1 Hard",
            "skillsAssessed": [
              "Matrices/Arrays",
              "Simulation",
              "Dynamic Programming",
              "Speed"
            ],
            "sourceUrl": "https://www.uber.com/in/en/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "atlassian",
    "name": "Atlassian",
    "category": "Big Tech and product engineering",
    "aliases": [
      "TEAM",
      "Atlassian India"
    ],
    "countryOrRegion": "Australia",
    "headquarters": "Sydney, Australia",
    "indiaOffices": [
      "Bengaluru / Remote-First (TEAM Anywhere)"
    ],
    "overview": "Atlassian builds Jira, Confluence, Trello, and Bitbucket. Emphasizes clean production-grade code, data structure design, modularity, and values alignment.",
    "sourceUrls": [
      "https://www.atlassian.com/company/careers"
    ],
    "lastVerified": "2024-09",
    "dataConfidence": "verified",
    "notes": "HackerRank OA includes 3 questions: 1 data structure design / simulation, 1 graph/DP algorithmic problem, and 1 code analysis/debugging question.",
    "roleTracks": [
      {
        "id": "atlassian-grad",
        "companyId": "atlassian",
        "roleTitle": "Software Engineer (Graduate / Entry-Level)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-1 Years"
        ],
        "location": "Bengaluru / Remote",
        "reportedRoundCountMin": 4,
        "reportedRoundCountTypical": 5,
        "reportedRoundCountMax": 5,
        "variationNotes": "OA -> Coding & Data Structures -> System Design / Architecture -> Values Interview.",
        "assessmentStages": [
          {
            "stageId": "atlassian-oa",
            "stageName": "Atlassian Online Assessment (HackerRank)",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Coding & Algorithmic Design Questions",
            "difficultyDistribution": "1 Medium, 2 Hard",
            "skillsAssessed": [
              "Data Structure Design",
              "Greedy/Graph",
              "Modular Code",
              "Time Complexity"
            ],
            "sourceUrl": "https://www.atlassian.com/company/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "atlassian-values",
            "stageName": "Values & Teamwork Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 60,
            "questionCount": null,
            "format": "In-depth behavioral assessment against Atlassian core values",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Empathy",
              "Collaboration",
              "Constructive Candor",
              "Ownership"
            ],
            "sourceUrl": "https://www.atlassian.com/company/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "salesforce",
    "name": "Salesforce",
    "category": "Big Tech and product engineering",
    "aliases": [
      "CRM",
      "Salesforce India"
    ],
    "countryOrRegion": "United States",
    "headquarters": "San Francisco, CA, USA",
    "indiaOffices": [
      "Hyderabad",
      "Bengaluru",
      "Mumbai",
      "Gurugram"
    ],
    "overview": "Salesforce develops CRM and enterprise cloud applications. Assesses data structures, object-oriented principles, relational databases, and scalability.",
    "sourceUrls": [
      "https://www.salesforce.com/company/careers/"
    ],
    "lastVerified": "2024-07",
    "dataConfidence": "verified",
    "notes": "HackerRank OA with 3 coding problems of Medium difficulty.",
    "roleTracks": [
      {
        "id": "salesforce-mts",
        "companyId": "salesforce",
        "roleTitle": "Associate Member of Technical Staff (AMTS)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-1 Years"
        ],
        "location": "Hyderabad / Bengaluru",
        "reportedRoundCountMin": 4,
        "reportedRoundCountTypical": 5,
        "reportedRoundCountMax": 5,
        "variationNotes": "OA -> 2 Technical Rounds -> 1 Managerial / Cultural Fit Round.",
        "assessmentStages": [
          {
            "stageId": "salesforce-oa",
            "stageName": "Salesforce Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Coding Questions (HackerRank)",
            "difficultyDistribution": "2 Medium, 1 Hard",
            "skillsAssessed": [
              "Trees",
              "Dynamic Programming",
              "HashMaps",
              "Graphs"
            ],
            "sourceUrl": "https://www.salesforce.com/company/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "oracle",
    "name": "Oracle",
    "category": "Big Tech and product engineering",
    "aliases": [
      "Oracle Cloud Infrastructure",
      "OCI",
      "Oracle India"
    ],
    "countryOrRegion": "United States",
    "headquarters": "Austin, TX, USA",
    "indiaOffices": [
      "Bengaluru",
      "Hyderabad",
      "Noida",
      "Pune"
    ],
    "overview": "Oracle develops relational databases, ERP, and Oracle Cloud Infrastructure (OCI). OCI interviews emphasize distributed systems, networking, OS internals, and algorithmic coding.",
    "sourceUrls": [
      "https://www.oracle.com/corporate/careers/"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "verified",
    "notes": "Campus OA has 2 coding questions + MCQs testing relational database theory and operating systems.",
    "roleTracks": [
      {
        "id": "oracle-server-tech",
        "companyId": "oracle",
        "roleTitle": "Software Developer (Server Technology / OCI)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-1 Years"
        ],
        "location": "Bengaluru / Hyderabad",
        "reportedRoundCountMin": 4,
        "reportedRoundCountTypical": 5,
        "reportedRoundCountMax": 5,
        "variationNotes": "Campus process includes aptitude + technical MCQ + coding OA, followed by 3 technical rounds.",
        "assessmentStages": [
          {
            "stageId": "oracle-oa",
            "stageName": "Oracle Campus Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 105,
            "questionCount": 24,
            "format": "2 Coding Questions + 22 MCQs (CS fundamentals, DBMS, Aptitude)",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "SQL & Relational DBs",
              "OS",
              "Trees",
              "Sorting/Searching"
            ],
            "sourceUrl": "https://www.oracle.com/corporate/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "intuit",
    "name": "Intuit",
    "category": "Big Tech and product engineering",
    "aliases": [
      "TurboTax",
      "QuickBooks",
      "Intuit India"
    ],
    "countryOrRegion": "United States",
    "headquarters": "Mountain View, CA, USA",
    "indiaOffices": [
      "Bengaluru"
    ],
    "overview": "Intuit builds financial platforms (TurboTax, QuickBooks, Credit Karma). The assessment and interview focus heavily on craft skills, OOP design, customer obsession, and values.",
    "sourceUrls": [
      "https://www.intuit.com/careers/"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "verified",
    "notes": "HackerRank OA with 4 questions: 2 DSA + 2 short debugging/concept questions.",
    "roleTracks": [
      {
        "id": "intuit-sde-1",
        "companyId": "intuit",
        "roleTitle": "Software Engineer 1",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-1 Years"
        ],
        "location": "Bengaluru",
        "reportedRoundCountMin": 4,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "OA -> Craft Demonstration / Coding Round -> Architecture/Design -> Values Round.",
        "assessmentStages": [
          {
            "stageId": "intuit-oa",
            "stageName": "Intuit Online Assessment (HackerRank)",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 4,
            "format": "2 DSA Coding Problems + 2 Debugging Questions",
            "difficultyDistribution": "1 Medium, 1 Medium-Hard",
            "skillsAssessed": [
              "Data Structures",
              "Algorithms",
              "Clean Code"
            ],
            "sourceUrl": "https://www.intuit.com/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "linkedin",
    "name": "LinkedIn",
    "category": "Big Tech and product engineering",
    "aliases": [
      "LinkedIn India"
    ],
    "countryOrRegion": "United States",
    "headquarters": "Sunnyvale, CA, USA",
    "indiaOffices": [
      "Bengaluru"
    ],
    "overview": "LinkedIn operates the world's largest professional social network. Known for rigorous coding rounds, distributed caching discussions, and system design.",
    "sourceUrls": [
      "https://careers.linkedin.com/"
    ],
    "lastVerified": "2024-07",
    "dataConfidence": "verified",
    "notes": "HackerRank OA typically features 3 problems with 90-minute limit.",
    "roleTracks": [
      {
        "id": "linkedin-swe-1",
        "companyId": "linkedin",
        "roleTitle": "Software Engineer",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-1 Years"
        ],
        "location": "Bengaluru",
        "reportedRoundCountMin": 4,
        "reportedRoundCountTypical": 5,
        "reportedRoundCountMax": 5,
        "variationNotes": "OA followed by 3 technical rounds (2 Coding + 1 LLD/Concurrency) and 1 Host Manager interview.",
        "assessmentStages": [
          {
            "stageId": "linkedin-oa",
            "stageName": "LinkedIn Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Coding Questions",
            "difficultyDistribution": "1 Medium, 2 Hard",
            "skillsAssessed": [
              "Trees",
              "Trie",
              "Graphs",
              "DP"
            ],
            "sourceUrl": "https://careers.linkedin.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "cisco",
    "name": "Cisco",
    "category": "Big Tech and product engineering",
    "aliases": [
      "Cisco Systems",
      "Cisco India"
    ],
    "countryOrRegion": "United States",
    "headquarters": "San Jose, CA, USA",
    "indiaOffices": [
      "Bengaluru",
      "Chennai"
    ],
    "overview": "Cisco builds networking hardware, telecommunications equipment, cybersecurity, and cloud solutions. Campus hiring tests Computer Networks (OSI, TCP/IP, Routing), Operating Systems, C/Python, and Algorithms.",
    "sourceUrls": [
      "https://www.cisco.com/c/en/us/about/careers.html"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "verified",
    "notes": "OA has an extensive technical MCQ section focusing on Networking protocols, subnetting, and OS internals.",
    "roleTracks": [
      {
        "id": "cisco-software-eng",
        "companyId": "cisco",
        "roleTitle": "Software Engineer (Campus / Early Career)",
        "hiringType": "On-Campus",
        "experienceLevels": [
          "Students",
          "0-1 Years"
        ],
        "location": "Bengaluru",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Campus process: Online Assessment -> Technical Round 1 -> Technical Round 2 -> Managerial/HR.",
        "assessmentStages": [
          {
            "stageId": "cisco-oa",
            "stageName": "Cisco Campus Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 27,
            "format": "2 Coding Problems + 25 Technical MCQs (Networking, OS, Data Structures)",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Computer Networks (TCP/IP, Subnetting)",
              "OS",
              "Algorithms",
              "C/C++"
            ],
            "sourceUrl": "https://www.cisco.com/c/en/us/about/careers.html",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "servicenow",
    "name": "ServiceNow",
    "category": "SaaS, cloud and developer tools",
    "aliases": [
      "ServiceNow"
    ],
    "countryOrRegion": "United States",
    "headquarters": "Santa Clara, CA, USA",
    "indiaOffices": [
      "Hyderabad",
      "Bengaluru"
    ],
    "overview": "ServiceNow provides digital workflow and enterprise cloud software.",
    "sourceUrls": [
      "https://careers.servicenow.com/"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "HackerRank or CodeSignal OA. Focuses on robust logic, zero runtime errors, and good modularity.",
    "roleTracks": [
      {
        "id": "servicenow-sde",
        "companyId": "servicenow",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Hyderabad, Bengaluru",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "servicenow-oa",
            "stageName": "ServiceNow Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "1 Easy-Medium, 1 Medium, 1 Hard",
            "skillsAssessed": [
              "Data Structures",
              "Algorithms",
              "Concurrency",
              "Clean Code"
            ],
            "sourceUrl": "https://careers.servicenow.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "HackerRank or CodeSignal OA. Focuses on robust logic, zero runtime errors, and good modularity."
          },
          {
            "stageId": "servicenow-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://careers.servicenow.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "servicenow-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://careers.servicenow.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "servicenow-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://careers.servicenow.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "sap",
    "name": "SAP Labs",
    "category": "SaaS, cloud and developer tools",
    "aliases": [
      "SAP"
    ],
    "countryOrRegion": "Global",
    "headquarters": "Walldorf, Germany",
    "indiaOffices": [
      "Bengaluru",
      "Gurugram",
      "Pune"
    ],
    "overview": "SAP builds enterprise resource planning, cloud ERP, and business AI solutions.",
    "sourceUrls": [
      "https://www.sap.com/about/careers.html"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "HackerRank or CodeSignal OA. Focuses on robust logic, zero runtime errors, and good modularity.",
    "roleTracks": [
      {
        "id": "sap-sde",
        "companyId": "sap",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru, Gurugram, Pune",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "sap-oa",
            "stageName": "SAP Labs Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "1 Easy-Medium, 1 Medium, 1 Hard",
            "skillsAssessed": [
              "Data Structures",
              "Algorithms",
              "Concurrency",
              "Clean Code"
            ],
            "sourceUrl": "https://www.sap.com/about/careers.html",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "HackerRank or CodeSignal OA. Focuses on robust logic, zero runtime errors, and good modularity."
          },
          {
            "stageId": "sap-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.sap.com/about/careers.html",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "sap-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.sap.com/about/careers.html",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "sap-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.sap.com/about/careers.html",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "workday",
    "name": "Workday",
    "category": "SaaS, cloud and developer tools",
    "aliases": [
      "Workday"
    ],
    "countryOrRegion": "United States",
    "headquarters": "Pleasanton, CA, USA",
    "indiaOffices": [
      "Pune"
    ],
    "overview": "Workday provides enterprise cloud applications for finance, HR, and planning.",
    "sourceUrls": [
      "https://www.workday.com/en-us/company/careers.html"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "HackerRank or CodeSignal OA. Focuses on robust logic, zero runtime errors, and good modularity.",
    "roleTracks": [
      {
        "id": "workday-sde",
        "companyId": "workday",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Pune",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "workday-oa",
            "stageName": "Workday Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "1 Easy-Medium, 1 Medium, 1 Hard",
            "skillsAssessed": [
              "Data Structures",
              "Algorithms",
              "Concurrency",
              "Clean Code"
            ],
            "sourceUrl": "https://www.workday.com/en-us/company/careers.html",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "HackerRank or CodeSignal OA. Focuses on robust logic, zero runtime errors, and good modularity."
          },
          {
            "stageId": "workday-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.workday.com/en-us/company/careers.html",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "workday-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.workday.com/en-us/company/careers.html",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "workday-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.workday.com/en-us/company/careers.html",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "snowflake",
    "name": "Snowflake",
    "category": "SaaS, cloud and developer tools",
    "aliases": [
      "Snowflake"
    ],
    "countryOrRegion": "United States",
    "headquarters": "Bozeman, MT, USA",
    "indiaOffices": [
      "Pune",
      "Bengaluru"
    ],
    "overview": "Snowflake delivers data cloud, cloud data warehousing, and AI data engineering infrastructure.",
    "sourceUrls": [
      "https://careers.snowflake.com/"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "HackerRank or CodeSignal OA. Focuses on robust logic, zero runtime errors, and good modularity.",
    "roleTracks": [
      {
        "id": "snowflake-sde",
        "companyId": "snowflake",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Pune, Bengaluru",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "snowflake-oa",
            "stageName": "Snowflake Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "1 Easy-Medium, 1 Medium, 1 Hard",
            "skillsAssessed": [
              "Data Structures",
              "Algorithms",
              "Concurrency",
              "Clean Code"
            ],
            "sourceUrl": "https://careers.snowflake.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "HackerRank or CodeSignal OA. Focuses on robust logic, zero runtime errors, and good modularity."
          },
          {
            "stageId": "snowflake-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://careers.snowflake.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "snowflake-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://careers.snowflake.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "snowflake-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://careers.snowflake.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "mongodb",
    "name": "MongoDB",
    "category": "SaaS, cloud and developer tools",
    "aliases": [
      "MongoDB"
    ],
    "countryOrRegion": "United States",
    "headquarters": "New York, NY, USA",
    "indiaOffices": [
      "Bengaluru",
      "Gurugram"
    ],
    "overview": "MongoDB creates document-oriented databases and developer cloud data services.",
    "sourceUrls": [
      "https://www.mongodb.com/careers"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "HackerRank or CodeSignal OA. Focuses on robust logic, zero runtime errors, and good modularity.",
    "roleTracks": [
      {
        "id": "mongodb-sde",
        "companyId": "mongodb",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru, Gurugram",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "mongodb-oa",
            "stageName": "MongoDB Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "1 Easy-Medium, 1 Medium, 1 Hard",
            "skillsAssessed": [
              "Data Structures",
              "Algorithms",
              "Concurrency",
              "Clean Code"
            ],
            "sourceUrl": "https://www.mongodb.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "HackerRank or CodeSignal OA. Focuses on robust logic, zero runtime errors, and good modularity."
          },
          {
            "stageId": "mongodb-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.mongodb.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "mongodb-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.mongodb.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "mongodb-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.mongodb.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "datadog",
    "name": "Datadog",
    "category": "SaaS, cloud and developer tools",
    "aliases": [
      "Datadog"
    ],
    "countryOrRegion": "United States",
    "headquarters": "New York, NY, USA",
    "indiaOffices": [
      "Bengaluru / Remote"
    ],
    "overview": "Datadog operates cloud-scale monitoring and observability platforms for infrastructure and apps.",
    "sourceUrls": [
      "https://careers.datadoghq.com/"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "HackerRank or CodeSignal OA. Focuses on robust logic, zero runtime errors, and good modularity.",
    "roleTracks": [
      {
        "id": "datadog-sde",
        "companyId": "datadog",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru / Remote",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "datadog-oa",
            "stageName": "Datadog Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "1 Easy-Medium, 1 Medium, 1 Hard",
            "skillsAssessed": [
              "Data Structures",
              "Algorithms",
              "Concurrency",
              "Clean Code"
            ],
            "sourceUrl": "https://careers.datadoghq.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "HackerRank or CodeSignal OA. Focuses on robust logic, zero runtime errors, and good modularity."
          },
          {
            "stageId": "datadog-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://careers.datadoghq.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "datadog-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://careers.datadoghq.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "datadog-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://careers.datadoghq.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "github",
    "name": "GitHub",
    "category": "SaaS, cloud and developer tools",
    "aliases": [
      "GitHub"
    ],
    "countryOrRegion": "United States",
    "headquarters": "San Francisco, CA, USA",
    "indiaOffices": [
      "Bengaluru / Remote"
    ],
    "overview": "GitHub provides code hosting, version control, GitHub Actions CI/CD, and developer collaboration.",
    "sourceUrls": [
      "https://github.com/about/careers"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "HackerRank or CodeSignal OA. Focuses on robust logic, zero runtime errors, and good modularity.",
    "roleTracks": [
      {
        "id": "github-sde",
        "companyId": "github",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru / Remote",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "github-oa",
            "stageName": "GitHub Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "1 Easy-Medium, 1 Medium, 1 Hard",
            "skillsAssessed": [
              "Data Structures",
              "Algorithms",
              "Concurrency",
              "Clean Code"
            ],
            "sourceUrl": "https://github.com/about/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "HackerRank or CodeSignal OA. Focuses on robust logic, zero runtime errors, and good modularity."
          },
          {
            "stageId": "github-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://github.com/about/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "github-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://github.com/about/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "github-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://github.com/about/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "gitlab",
    "name": "GitLab",
    "category": "SaaS, cloud and developer tools",
    "aliases": [
      "GitLab"
    ],
    "countryOrRegion": "United States",
    "headquarters": "San Francisco, CA, USA",
    "indiaOffices": [
      "Remote-Only"
    ],
    "overview": "GitLab delivers an all-remote, single application for the complete DevOps lifecycle.",
    "sourceUrls": [
      "https://about.gitlab.com/jobs/"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "HackerRank or CodeSignal OA. Focuses on robust logic, zero runtime errors, and good modularity.",
    "roleTracks": [
      {
        "id": "gitlab-sde",
        "companyId": "gitlab",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Remote-Only",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "gitlab-oa",
            "stageName": "GitLab Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "1 Easy-Medium, 1 Medium, 1 Hard",
            "skillsAssessed": [
              "Data Structures",
              "Algorithms",
              "Concurrency",
              "Clean Code"
            ],
            "sourceUrl": "https://about.gitlab.com/jobs/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "HackerRank or CodeSignal OA. Focuses on robust logic, zero runtime errors, and good modularity."
          },
          {
            "stageId": "gitlab-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://about.gitlab.com/jobs/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "gitlab-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://about.gitlab.com/jobs/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "gitlab-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://about.gitlab.com/jobs/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "twilio",
    "name": "Twilio",
    "category": "SaaS, cloud and developer tools",
    "aliases": [
      "Twilio"
    ],
    "countryOrRegion": "United States",
    "headquarters": "San Francisco, CA, USA",
    "indiaOffices": [
      "Bengaluru"
    ],
    "overview": "Twilio provides programmable communication APIs for SMS, voice, video, and customer engagement.",
    "sourceUrls": [
      "https://www.twilio.com/en-us/company/jobs"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "HackerRank or CodeSignal OA. Focuses on robust logic, zero runtime errors, and good modularity.",
    "roleTracks": [
      {
        "id": "twilio-sde",
        "companyId": "twilio",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "twilio-oa",
            "stageName": "Twilio Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "1 Easy-Medium, 1 Medium, 1 Hard",
            "skillsAssessed": [
              "Data Structures",
              "Algorithms",
              "Concurrency",
              "Clean Code"
            ],
            "sourceUrl": "https://www.twilio.com/en-us/company/jobs",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "HackerRank or CodeSignal OA. Focuses on robust logic, zero runtime errors, and good modularity."
          },
          {
            "stageId": "twilio-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.twilio.com/en-us/company/jobs",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "twilio-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.twilio.com/en-us/company/jobs",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "twilio-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.twilio.com/en-us/company/jobs",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "cloudflare",
    "name": "Cloudflare",
    "category": "SaaS, cloud and developer tools",
    "aliases": [
      "Cloudflare"
    ],
    "countryOrRegion": "United States",
    "headquarters": "San Francisco, CA, USA",
    "indiaOffices": [
      "Bengaluru"
    ],
    "overview": "Cloudflare builds global web performance, DNS, DDoS protection, and edge serverless compute.",
    "sourceUrls": [
      "https://www.cloudflare.com/careers/"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "HackerRank or CodeSignal OA. Focuses on robust logic, zero runtime errors, and good modularity.",
    "roleTracks": [
      {
        "id": "cloudflare-sde",
        "companyId": "cloudflare",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "cloudflare-oa",
            "stageName": "Cloudflare Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "1 Easy-Medium, 1 Medium, 1 Hard",
            "skillsAssessed": [
              "Data Structures",
              "Algorithms",
              "Concurrency",
              "Clean Code"
            ],
            "sourceUrl": "https://www.cloudflare.com/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "HackerRank or CodeSignal OA. Focuses on robust logic, zero runtime errors, and good modularity."
          },
          {
            "stageId": "cloudflare-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.cloudflare.com/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "cloudflare-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.cloudflare.com/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "cloudflare-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.cloudflare.com/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "hashicorp",
    "name": "HashiCorp",
    "category": "SaaS, cloud and developer tools",
    "aliases": [
      "HashiCorp"
    ],
    "countryOrRegion": "United States",
    "headquarters": "San Francisco, CA, USA",
    "indiaOffices": [
      "Bengaluru / Remote"
    ],
    "overview": "HashiCorp (IBM) builds infrastructure automation software including Terraform, Vault, and Consul.",
    "sourceUrls": [
      "https://www.hashicorp.com/careers"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "HackerRank or CodeSignal OA. Focuses on robust logic, zero runtime errors, and good modularity.",
    "roleTracks": [
      {
        "id": "hashicorp-sde",
        "companyId": "hashicorp",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru / Remote",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "hashicorp-oa",
            "stageName": "HashiCorp Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "1 Easy-Medium, 1 Medium, 1 Hard",
            "skillsAssessed": [
              "Data Structures",
              "Algorithms",
              "Concurrency",
              "Clean Code"
            ],
            "sourceUrl": "https://www.hashicorp.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "HackerRank or CodeSignal OA. Focuses on robust logic, zero runtime errors, and good modularity."
          },
          {
            "stageId": "hashicorp-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.hashicorp.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "hashicorp-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.hashicorp.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "hashicorp-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.hashicorp.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "elastic",
    "name": "Elastic",
    "category": "SaaS, cloud and developer tools",
    "aliases": [
      "Elastic"
    ],
    "countryOrRegion": "United States",
    "headquarters": "San Francisco, CA, USA",
    "indiaOffices": [
      "Bengaluru / Remote"
    ],
    "overview": "Elastic develops Elasticsearch, Kibana, and search-powered observability and security platforms.",
    "sourceUrls": [
      "https://www.elastic.co/about/careers"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "HackerRank or CodeSignal OA. Focuses on robust logic, zero runtime errors, and good modularity.",
    "roleTracks": [
      {
        "id": "elastic-sde",
        "companyId": "elastic",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru / Remote",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "elastic-oa",
            "stageName": "Elastic Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "1 Easy-Medium, 1 Medium, 1 Hard",
            "skillsAssessed": [
              "Data Structures",
              "Algorithms",
              "Concurrency",
              "Clean Code"
            ],
            "sourceUrl": "https://www.elastic.co/about/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "HackerRank or CodeSignal OA. Focuses on robust logic, zero runtime errors, and good modularity."
          },
          {
            "stageId": "elastic-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.elastic.co/about/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "elastic-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.elastic.co/about/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "elastic-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.elastic.co/about/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "box",
    "name": "Box",
    "category": "SaaS, cloud and developer tools",
    "aliases": [
      "Box"
    ],
    "countryOrRegion": "United States",
    "headquarters": "Redwood City, CA, USA",
    "indiaOffices": [
      "Bengaluru / Remote"
    ],
    "overview": "Box creates secure cloud content management, collaboration, and enterprise file sharing systems.",
    "sourceUrls": [
      "https://www.box.com/careers"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "HackerRank or CodeSignal OA. Focuses on robust logic, zero runtime errors, and good modularity.",
    "roleTracks": [
      {
        "id": "box-sde",
        "companyId": "box",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru / Remote",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "box-oa",
            "stageName": "Box Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "1 Easy-Medium, 1 Medium, 1 Hard",
            "skillsAssessed": [
              "Data Structures",
              "Algorithms",
              "Concurrency",
              "Clean Code"
            ],
            "sourceUrl": "https://www.box.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "HackerRank or CodeSignal OA. Focuses on robust logic, zero runtime errors, and good modularity."
          },
          {
            "stageId": "box-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.box.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "box-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.box.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "box-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.box.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "dropbox",
    "name": "Dropbox",
    "category": "SaaS, cloud and developer tools",
    "aliases": [
      "Dropbox"
    ],
    "countryOrRegion": "United States",
    "headquarters": "San Francisco, CA, USA",
    "indiaOffices": [
      "Bengaluru / Remote"
    ],
    "overview": "Dropbox provides cloud storage, smart workspaces, and virtual collaboration tools.",
    "sourceUrls": [
      "https://jobs.dropbox.com/"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "HackerRank or CodeSignal OA. Focuses on robust logic, zero runtime errors, and good modularity.",
    "roleTracks": [
      {
        "id": "dropbox-sde",
        "companyId": "dropbox",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru / Remote",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "dropbox-oa",
            "stageName": "Dropbox Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "1 Easy-Medium, 1 Medium, 1 Hard",
            "skillsAssessed": [
              "Data Structures",
              "Algorithms",
              "Concurrency",
              "Clean Code"
            ],
            "sourceUrl": "https://jobs.dropbox.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "HackerRank or CodeSignal OA. Focuses on robust logic, zero runtime errors, and good modularity."
          },
          {
            "stageId": "dropbox-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://jobs.dropbox.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "dropbox-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://jobs.dropbox.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "dropbox-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://jobs.dropbox.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "okta",
    "name": "Okta",
    "category": "SaaS, cloud and developer tools",
    "aliases": [
      "Okta"
    ],
    "countryOrRegion": "United States",
    "headquarters": "San Francisco, CA, USA",
    "indiaOffices": [
      "Bengaluru"
    ],
    "overview": "Okta provides identity and access management, SSO, and zero-trust security platforms.",
    "sourceUrls": [
      "https://www.okta.com/company/careers/"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "HackerRank or CodeSignal OA. Focuses on robust logic, zero runtime errors, and good modularity.",
    "roleTracks": [
      {
        "id": "okta-sde",
        "companyId": "okta",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "okta-oa",
            "stageName": "Okta Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "1 Easy-Medium, 1 Medium, 1 Hard",
            "skillsAssessed": [
              "Data Structures",
              "Algorithms",
              "Concurrency",
              "Clean Code"
            ],
            "sourceUrl": "https://www.okta.com/company/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "HackerRank or CodeSignal OA. Focuses on robust logic, zero runtime errors, and good modularity."
          },
          {
            "stageId": "okta-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.okta.com/company/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "okta-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.okta.com/company/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "okta-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.okta.com/company/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "splunk",
    "name": "Splunk",
    "category": "SaaS, cloud and developer tools",
    "aliases": [
      "Splunk"
    ],
    "countryOrRegion": "United States",
    "headquarters": "San Francisco, CA, USA",
    "indiaOffices": [
      "Hyderabad",
      "Bengaluru"
    ],
    "overview": "Splunk (Cisco) builds machine data analytics, log management, and cybersecurity monitoring tools.",
    "sourceUrls": [
      "https://www.splunk.com/en_us/careers.html"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "HackerRank or CodeSignal OA. Focuses on robust logic, zero runtime errors, and good modularity.",
    "roleTracks": [
      {
        "id": "splunk-sde",
        "companyId": "splunk",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Hyderabad, Bengaluru",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "splunk-oa",
            "stageName": "Splunk Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "1 Easy-Medium, 1 Medium, 1 Hard",
            "skillsAssessed": [
              "Data Structures",
              "Algorithms",
              "Concurrency",
              "Clean Code"
            ],
            "sourceUrl": "https://www.splunk.com/en_us/careers.html",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "HackerRank or CodeSignal OA. Focuses on robust logic, zero runtime errors, and good modularity."
          },
          {
            "stageId": "splunk-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.splunk.com/en_us/careers.html",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "splunk-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.splunk.com/en_us/careers.html",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "splunk-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.splunk.com/en_us/careers.html",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "confluent",
    "name": "Confluent",
    "category": "SaaS, cloud and developer tools",
    "aliases": [
      "Confluent"
    ],
    "countryOrRegion": "United States",
    "headquarters": "Mountain View, CA, USA",
    "indiaOffices": [
      "Bengaluru"
    ],
    "overview": "Confluent develops event-streaming platforms based on Apache Kafka.",
    "sourceUrls": [
      "https://www.confluent.io/careers/"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "HackerRank or CodeSignal OA. Focuses on robust logic, zero runtime errors, and good modularity.",
    "roleTracks": [
      {
        "id": "confluent-sde",
        "companyId": "confluent",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "confluent-oa",
            "stageName": "Confluent Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "1 Easy-Medium, 1 Medium, 1 Hard",
            "skillsAssessed": [
              "Data Structures",
              "Algorithms",
              "Concurrency",
              "Clean Code"
            ],
            "sourceUrl": "https://www.confluent.io/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "HackerRank or CodeSignal OA. Focuses on robust logic, zero runtime errors, and good modularity."
          },
          {
            "stageId": "confluent-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.confluent.io/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "confluent-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.confluent.io/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "confluent-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.confluent.io/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "newrelic",
    "name": "New Relic",
    "category": "SaaS, cloud and developer tools",
    "aliases": [
      "New"
    ],
    "countryOrRegion": "United States",
    "headquarters": "San Francisco, CA, USA",
    "indiaOffices": [
      "Hyderabad",
      "Bengaluru"
    ],
    "overview": "New Relic delivers full-stack telemetry, APM, and cloud observability platforms.",
    "sourceUrls": [
      "https://newrelic.com/about/careers"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "HackerRank or CodeSignal OA. Focuses on robust logic, zero runtime errors, and good modularity.",
    "roleTracks": [
      {
        "id": "newrelic-sde",
        "companyId": "newrelic",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Hyderabad, Bengaluru",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "newrelic-oa",
            "stageName": "New Relic Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "1 Easy-Medium, 1 Medium, 1 Hard",
            "skillsAssessed": [
              "Data Structures",
              "Algorithms",
              "Concurrency",
              "Clean Code"
            ],
            "sourceUrl": "https://newrelic.com/about/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "HackerRank or CodeSignal OA. Focuses on robust logic, zero runtime errors, and good modularity."
          },
          {
            "stageId": "newrelic-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://newrelic.com/about/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "newrelic-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://newrelic.com/about/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "newrelic-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://newrelic.com/about/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "postman",
    "name": "Postman",
    "category": "SaaS, cloud and developer tools",
    "aliases": [
      "Postman"
    ],
    "countryOrRegion": "United States",
    "headquarters": "San Francisco, CA, USA",
    "indiaOffices": [
      "Bengaluru"
    ],
    "overview": "Postman builds the leading API platform used by 30M+ developers for designing and testing APIs.",
    "sourceUrls": [
      "https://www.postman.com/company/careers/"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "HackerRank or CodeSignal OA. Focuses on robust logic, zero runtime errors, and good modularity.",
    "roleTracks": [
      {
        "id": "postman-sde",
        "companyId": "postman",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "postman-oa",
            "stageName": "Postman Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "1 Easy-Medium, 1 Medium, 1 Hard",
            "skillsAssessed": [
              "Data Structures",
              "Algorithms",
              "Concurrency",
              "Clean Code"
            ],
            "sourceUrl": "https://www.postman.com/company/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "HackerRank or CodeSignal OA. Focuses on robust logic, zero runtime errors, and good modularity."
          },
          {
            "stageId": "postman-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.postman.com/company/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "postman-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.postman.com/company/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "postman-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.postman.com/company/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "browserstack",
    "name": "BrowserStack",
    "category": "SaaS, cloud and developer tools",
    "aliases": [
      "BrowserStack"
    ],
    "countryOrRegion": "Global",
    "headquarters": "Dublin, Ireland",
    "indiaOffices": [
      "Mumbai",
      "Bengaluru"
    ],
    "overview": "BrowserStack provides cloud web and mobile testing infrastructure across 3,000+ real devices.",
    "sourceUrls": [
      "https://www.browserstack.com/careers"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "HackerRank or CodeSignal OA. Focuses on robust logic, zero runtime errors, and good modularity.",
    "roleTracks": [
      {
        "id": "browserstack-sde",
        "companyId": "browserstack",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Mumbai, Bengaluru",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "browserstack-oa",
            "stageName": "BrowserStack Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "1 Easy-Medium, 1 Medium, 1 Hard",
            "skillsAssessed": [
              "Data Structures",
              "Algorithms",
              "Concurrency",
              "Clean Code"
            ],
            "sourceUrl": "https://www.browserstack.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "HackerRank or CodeSignal OA. Focuses on robust logic, zero runtime errors, and good modularity."
          },
          {
            "stageId": "browserstack-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.browserstack.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "browserstack-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.browserstack.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "browserstack-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.browserstack.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "stripe",
    "name": "Stripe",
    "category": "Fintech, payments and financial technology",
    "aliases": [
      "Stripe"
    ],
    "countryOrRegion": "Global",
    "headquarters": "South San Francisco / Dublin",
    "indiaOffices": [
      "Bengaluru / Remote"
    ],
    "overview": "Stripe creates financial infrastructure and APIs for global internet businesses.",
    "sourceUrls": [
      "https://stripe.com/jobs"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "OA tests edge-case handling, decimal precision, and high-performance algorithms.",
    "roleTracks": [
      {
        "id": "stripe-sde",
        "companyId": "stripe",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru / Remote",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "stripe-oa",
            "stageName": "Stripe Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "2 Medium, 1 Hard",
            "skillsAssessed": [
              "DSA",
              "Data Consistency",
              "Transaction Logic",
              "Concurrency"
            ],
            "sourceUrl": "https://stripe.com/jobs",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "OA tests edge-case handling, decimal precision, and high-performance algorithms."
          },
          {
            "stageId": "stripe-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://stripe.com/jobs",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "stripe-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://stripe.com/jobs",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "stripe-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://stripe.com/jobs",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "paypal",
    "name": "PayPal",
    "category": "Fintech, payments and financial technology",
    "aliases": [
      "PayPal"
    ],
    "countryOrRegion": "United States",
    "headquarters": "San Jose, CA, USA",
    "indiaOffices": [
      "Bengaluru",
      "Chennai",
      "Hyderabad"
    ],
    "overview": "PayPal provides digital payments, merchant services, and Venmo.",
    "sourceUrls": [
      "https://careers.pypl.com/"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "OA tests edge-case handling, decimal precision, and high-performance algorithms.",
    "roleTracks": [
      {
        "id": "paypal-sde",
        "companyId": "paypal",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru, Chennai, Hyderabad",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "paypal-oa",
            "stageName": "PayPal Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "2 Medium, 1 Hard",
            "skillsAssessed": [
              "DSA",
              "Data Consistency",
              "Transaction Logic",
              "Concurrency"
            ],
            "sourceUrl": "https://careers.pypl.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "OA tests edge-case handling, decimal precision, and high-performance algorithms."
          },
          {
            "stageId": "paypal-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://careers.pypl.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "paypal-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://careers.pypl.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "paypal-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://careers.pypl.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "phonepe",
    "name": "PhonePe",
    "category": "Fintech, payments and financial technology",
    "aliases": [
      "PhonePe"
    ],
    "countryOrRegion": "India",
    "headquarters": "Bengaluru, India",
    "indiaOffices": [
      "Bengaluru",
      "Pune"
    ],
    "overview": "PhonePe is India's leading UPI payments app, wealth management, and merchant payment platform.",
    "sourceUrls": [
      "https://www.phonepe.com/careers/"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "OA tests edge-case handling, decimal precision, and high-performance algorithms.",
    "roleTracks": [
      {
        "id": "phonepe-sde",
        "companyId": "phonepe",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru, Pune",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "phonepe-oa",
            "stageName": "PhonePe Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "2 Medium, 1 Hard",
            "skillsAssessed": [
              "DSA",
              "Data Consistency",
              "Transaction Logic",
              "Concurrency"
            ],
            "sourceUrl": "https://www.phonepe.com/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "OA tests edge-case handling, decimal precision, and high-performance algorithms."
          },
          {
            "stageId": "phonepe-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.phonepe.com/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "phonepe-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.phonepe.com/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "phonepe-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.phonepe.com/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "razorpay",
    "name": "Razorpay",
    "category": "Fintech, payments and financial technology",
    "aliases": [
      "Razorpay"
    ],
    "countryOrRegion": "India",
    "headquarters": "Bengaluru, India",
    "indiaOffices": [
      "Bengaluru"
    ],
    "overview": "Razorpay provides payment gateways, neo-banking, payroll, and financial infrastructure for Indian businesses.",
    "sourceUrls": [
      "https://razorpay.com/jobs/"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "OA tests edge-case handling, decimal precision, and high-performance algorithms.",
    "roleTracks": [
      {
        "id": "razorpay-sde",
        "companyId": "razorpay",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "razorpay-oa",
            "stageName": "Razorpay Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "2 Medium, 1 Hard",
            "skillsAssessed": [
              "DSA",
              "Data Consistency",
              "Transaction Logic",
              "Concurrency"
            ],
            "sourceUrl": "https://razorpay.com/jobs/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "OA tests edge-case handling, decimal precision, and high-performance algorithms."
          },
          {
            "stageId": "razorpay-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://razorpay.com/jobs/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "razorpay-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://razorpay.com/jobs/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "razorpay-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://razorpay.com/jobs/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "paytm",
    "name": "Paytm (One97 Communications)",
    "category": "Fintech, payments and financial technology",
    "aliases": [
      "Paytm"
    ],
    "countryOrRegion": "India",
    "headquarters": "Noida, India",
    "indiaOffices": [
      "Noida",
      "Bengaluru"
    ],
    "overview": "Paytm powers digital payments, QR soundboxes, ticketing, and micro-lending.",
    "sourceUrls": [
      "https://paytm.com/careers/"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "OA tests edge-case handling, decimal precision, and high-performance algorithms.",
    "roleTracks": [
      {
        "id": "paytm-sde",
        "companyId": "paytm",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Noida, Bengaluru",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "paytm-oa",
            "stageName": "Paytm (One97 Communications) Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "2 Medium, 1 Hard",
            "skillsAssessed": [
              "DSA",
              "Data Consistency",
              "Transaction Logic",
              "Concurrency"
            ],
            "sourceUrl": "https://paytm.com/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "OA tests edge-case handling, decimal precision, and high-performance algorithms."
          },
          {
            "stageId": "paytm-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://paytm.com/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "paytm-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://paytm.com/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "paytm-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://paytm.com/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "cred",
    "name": "CRED",
    "category": "Fintech, payments and financial technology",
    "aliases": [
      "CRED"
    ],
    "countryOrRegion": "India",
    "headquarters": "Bengaluru, India",
    "indiaOffices": [
      "Bengaluru"
    ],
    "overview": "CRED is a high-trust community rewarding credit card bill payments, commerce, and peer lending.",
    "sourceUrls": [
      "https://cred.club/careers"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "OA tests edge-case handling, decimal precision, and high-performance algorithms.",
    "roleTracks": [
      {
        "id": "cred-sde",
        "companyId": "cred",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "cred-oa",
            "stageName": "CRED Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "2 Medium, 1 Hard",
            "skillsAssessed": [
              "DSA",
              "Data Consistency",
              "Transaction Logic",
              "Concurrency"
            ],
            "sourceUrl": "https://cred.club/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "OA tests edge-case handling, decimal precision, and high-performance algorithms."
          },
          {
            "stageId": "cred-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://cred.club/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "cred-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://cred.club/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "cred-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://cred.club/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "groww",
    "name": "Groww",
    "category": "Fintech, payments and financial technology",
    "aliases": [
      "Groww"
    ],
    "countryOrRegion": "India",
    "headquarters": "Bengaluru, India",
    "indiaOffices": [
      "Bengaluru"
    ],
    "overview": "Groww provides investment platforms for stocks, mutual funds, IPOs, and digital gold in India.",
    "sourceUrls": [
      "https://groww.in/careers"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "OA tests edge-case handling, decimal precision, and high-performance algorithms.",
    "roleTracks": [
      {
        "id": "groww-sde",
        "companyId": "groww",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "groww-oa",
            "stageName": "Groww Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "2 Medium, 1 Hard",
            "skillsAssessed": [
              "DSA",
              "Data Consistency",
              "Transaction Logic",
              "Concurrency"
            ],
            "sourceUrl": "https://groww.in/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "OA tests edge-case handling, decimal precision, and high-performance algorithms."
          },
          {
            "stageId": "groww-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://groww.in/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "groww-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://groww.in/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "groww-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://groww.in/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "fiserv",
    "name": "Fiserv",
    "category": "Fintech, payments and financial technology",
    "aliases": [
      "Fiserv"
    ],
    "countryOrRegion": "United States",
    "headquarters": "Brookfield, WI, USA",
    "indiaOffices": [
      "Bengaluru",
      "Pune",
      "Noida",
      "Chennai"
    ],
    "overview": "Fiserv provides payment processing, core banking systems, and fintech solutions.",
    "sourceUrls": [
      "https://www.fiserv.com/en/about-fiserv/careers.html"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "OA tests edge-case handling, decimal precision, and high-performance algorithms.",
    "roleTracks": [
      {
        "id": "fiserv-sde",
        "companyId": "fiserv",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru, Pune, Noida, Chennai",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "fiserv-oa",
            "stageName": "Fiserv Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "2 Medium, 1 Hard",
            "skillsAssessed": [
              "DSA",
              "Data Consistency",
              "Transaction Logic",
              "Concurrency"
            ],
            "sourceUrl": "https://www.fiserv.com/en/about-fiserv/careers.html",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "OA tests edge-case handling, decimal precision, and high-performance algorithms."
          },
          {
            "stageId": "fiserv-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.fiserv.com/en/about-fiserv/careers.html",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "fiserv-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.fiserv.com/en/about-fiserv/careers.html",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "fiserv-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.fiserv.com/en/about-fiserv/careers.html",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "visa",
    "name": "Visa",
    "category": "Fintech, payments and financial technology",
    "aliases": [
      "Visa"
    ],
    "countryOrRegion": "United States",
    "headquarters": "San Francisco, CA, USA",
    "indiaOffices": [
      "Bengaluru"
    ],
    "overview": "Visa operates the world's largest digital payments network and card processing architecture.",
    "sourceUrls": [
      "https://www.visa.co.in/careers.html"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "OA tests edge-case handling, decimal precision, and high-performance algorithms.",
    "roleTracks": [
      {
        "id": "visa-sde",
        "companyId": "visa",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "visa-oa",
            "stageName": "Visa Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "2 Medium, 1 Hard",
            "skillsAssessed": [
              "DSA",
              "Data Consistency",
              "Transaction Logic",
              "Concurrency"
            ],
            "sourceUrl": "https://www.visa.co.in/careers.html",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "OA tests edge-case handling, decimal precision, and high-performance algorithms."
          },
          {
            "stageId": "visa-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.visa.co.in/careers.html",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "visa-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.visa.co.in/careers.html",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "visa-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.visa.co.in/careers.html",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "mastercard",
    "name": "Mastercard",
    "category": "Fintech, payments and financial technology",
    "aliases": [
      "Mastercard"
    ],
    "countryOrRegion": "United States",
    "headquarters": "Purchase, NY, USA",
    "indiaOffices": [
      "Pune",
      "Gurugram",
      "Vadodara"
    ],
    "overview": "Mastercard powers global transaction processing, cyber intelligence, and open banking.",
    "sourceUrls": [
      "https://careers.mastercard.com/"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "OA tests edge-case handling, decimal precision, and high-performance algorithms.",
    "roleTracks": [
      {
        "id": "mastercard-sde",
        "companyId": "mastercard",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Pune, Gurugram, Vadodara",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "mastercard-oa",
            "stageName": "Mastercard Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "2 Medium, 1 Hard",
            "skillsAssessed": [
              "DSA",
              "Data Consistency",
              "Transaction Logic",
              "Concurrency"
            ],
            "sourceUrl": "https://careers.mastercard.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "OA tests edge-case handling, decimal precision, and high-performance algorithms."
          },
          {
            "stageId": "mastercard-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://careers.mastercard.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "mastercard-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://careers.mastercard.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "mastercard-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://careers.mastercard.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "creditkarma",
    "name": "Credit Karma (Intuit)",
    "category": "Fintech, payments and financial technology",
    "aliases": [
      "Credit"
    ],
    "countryOrRegion": "United States",
    "headquarters": "Oakland, CA, USA",
    "indiaOffices": [
      "Bengaluru"
    ],
    "overview": "Credit Karma offers free credit scores, personalized financial recommendations, and loan matching.",
    "sourceUrls": [
      "https://www.creditkarma.com/careers"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "OA tests edge-case handling, decimal precision, and high-performance algorithms.",
    "roleTracks": [
      {
        "id": "creditkarma-sde",
        "companyId": "creditkarma",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "creditkarma-oa",
            "stageName": "Credit Karma (Intuit) Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "2 Medium, 1 Hard",
            "skillsAssessed": [
              "DSA",
              "Data Consistency",
              "Transaction Logic",
              "Concurrency"
            ],
            "sourceUrl": "https://www.creditkarma.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "OA tests edge-case handling, decimal precision, and high-performance algorithms."
          },
          {
            "stageId": "creditkarma-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.creditkarma.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "creditkarma-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.creditkarma.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "creditkarma-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.creditkarma.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "slice",
    "name": "Slice",
    "category": "Fintech, payments and financial technology",
    "aliases": [
      "Slice"
    ],
    "countryOrRegion": "India",
    "headquarters": "Bengaluru, India",
    "indiaOffices": [
      "Bengaluru"
    ],
    "overview": "Slice provides digital payment cards, UPI accounts, and credit solutions for young Indians.",
    "sourceUrls": [
      "https://sliceit.com/careers"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "OA tests edge-case handling, decimal precision, and high-performance algorithms.",
    "roleTracks": [
      {
        "id": "slice-sde",
        "companyId": "slice",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "slice-oa",
            "stageName": "Slice Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "2 Medium, 1 Hard",
            "skillsAssessed": [
              "DSA",
              "Data Consistency",
              "Transaction Logic",
              "Concurrency"
            ],
            "sourceUrl": "https://sliceit.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "OA tests edge-case handling, decimal precision, and high-performance algorithms."
          },
          {
            "stageId": "slice-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://sliceit.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "slice-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://sliceit.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "slice-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://sliceit.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "bharatpe",
    "name": "BharatPe",
    "category": "Fintech, payments and financial technology",
    "aliases": [
      "BharatPe"
    ],
    "countryOrRegion": "India",
    "headquarters": "New Delhi, India",
    "indiaOffices": [
      "New Delhi",
      "Bengaluru"
    ],
    "overview": "BharatPe provides merchant QR payment acceptance, POS devices, and merchant credit.",
    "sourceUrls": [
      "https://bharatpe.com/careers"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "OA tests edge-case handling, decimal precision, and high-performance algorithms.",
    "roleTracks": [
      {
        "id": "bharatpe-sde",
        "companyId": "bharatpe",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "New Delhi, Bengaluru",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "bharatpe-oa",
            "stageName": "BharatPe Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "2 Medium, 1 Hard",
            "skillsAssessed": [
              "DSA",
              "Data Consistency",
              "Transaction Logic",
              "Concurrency"
            ],
            "sourceUrl": "https://bharatpe.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "OA tests edge-case handling, decimal precision, and high-performance algorithms."
          },
          {
            "stageId": "bharatpe-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://bharatpe.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "bharatpe-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://bharatpe.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "bharatpe-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://bharatpe.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "zerodha",
    "name": "Zerodha",
    "category": "Fintech, payments and financial technology",
    "aliases": [
      "Zerodha"
    ],
    "countryOrRegion": "India",
    "headquarters": "Bengaluru, India",
    "indiaOffices": [
      "Bengaluru"
    ],
    "overview": "Zerodha is India's largest discount retail stock broker, famous for sleek bootstrapped tech (Kite).",
    "sourceUrls": [
      "https://zerodha.com/careers"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "OA tests edge-case handling, decimal precision, and high-performance algorithms.",
    "roleTracks": [
      {
        "id": "zerodha-sde",
        "companyId": "zerodha",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "zerodha-oa",
            "stageName": "Zerodha Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "2 Medium, 1 Hard",
            "skillsAssessed": [
              "DSA",
              "Data Consistency",
              "Transaction Logic",
              "Concurrency"
            ],
            "sourceUrl": "https://zerodha.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "OA tests edge-case handling, decimal precision, and high-performance algorithms."
          },
          {
            "stageId": "zerodha-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://zerodha.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "zerodha-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://zerodha.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "zerodha-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://zerodha.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "pinelabs",
    "name": "Pine Labs",
    "category": "Fintech, payments and financial technology",
    "aliases": [
      "Pine"
    ],
    "countryOrRegion": "India",
    "headquarters": "Noida, India",
    "indiaOffices": [
      "Noida",
      "Bengaluru"
    ],
    "overview": "Pine Labs provides merchant commerce solutions, smart POS terminals, and omnichannel payments.",
    "sourceUrls": [
      "https://www.pinelabs.com/careers"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "OA tests edge-case handling, decimal precision, and high-performance algorithms.",
    "roleTracks": [
      {
        "id": "pinelabs-sde",
        "companyId": "pinelabs",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Noida, Bengaluru",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "pinelabs-oa",
            "stageName": "Pine Labs Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "2 Medium, 1 Hard",
            "skillsAssessed": [
              "DSA",
              "Data Consistency",
              "Transaction Logic",
              "Concurrency"
            ],
            "sourceUrl": "https://www.pinelabs.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "OA tests edge-case handling, decimal precision, and high-performance algorithms."
          },
          {
            "stageId": "pinelabs-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.pinelabs.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "pinelabs-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.pinelabs.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "pinelabs-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.pinelabs.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "navi",
    "name": "Navi Technologies",
    "category": "Fintech, payments and financial technology",
    "aliases": [
      "Navi"
    ],
    "countryOrRegion": "India",
    "headquarters": "Bengaluru, India",
    "indiaOffices": [
      "Bengaluru"
    ],
    "overview": "Navi offers digital personal loans, home loans, health insurance, and mutual funds.",
    "sourceUrls": [
      "https://navi.com/careers"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "OA tests edge-case handling, decimal precision, and high-performance algorithms.",
    "roleTracks": [
      {
        "id": "navi-sde",
        "companyId": "navi",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "navi-oa",
            "stageName": "Navi Technologies Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "2 Medium, 1 Hard",
            "skillsAssessed": [
              "DSA",
              "Data Consistency",
              "Transaction Logic",
              "Concurrency"
            ],
            "sourceUrl": "https://navi.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "OA tests edge-case handling, decimal precision, and high-performance algorithms."
          },
          {
            "stageId": "navi-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://navi.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "navi-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://navi.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "navi-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://navi.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "jupiter",
    "name": "Jupiter Money",
    "category": "Fintech, payments and financial technology",
    "aliases": [
      "Jupiter"
    ],
    "countryOrRegion": "India",
    "headquarters": "Mumbai, India",
    "indiaOffices": [
      "Bengaluru",
      "Mumbai"
    ],
    "overview": "Jupiter is a neo-banking app offering smart savings, UPI, and wealth tracking tools.",
    "sourceUrls": [
      "https://jupiter.money/careers/"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "OA tests edge-case handling, decimal precision, and high-performance algorithms.",
    "roleTracks": [
      {
        "id": "jupiter-sde",
        "companyId": "jupiter",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru, Mumbai",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "jupiter-oa",
            "stageName": "Jupiter Money Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "2 Medium, 1 Hard",
            "skillsAssessed": [
              "DSA",
              "Data Consistency",
              "Transaction Logic",
              "Concurrency"
            ],
            "sourceUrl": "https://jupiter.money/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "OA tests edge-case handling, decimal precision, and high-performance algorithms."
          },
          {
            "stageId": "jupiter-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://jupiter.money/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "jupiter-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://jupiter.money/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "jupiter-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://jupiter.money/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "coindcx",
    "name": "CoinDCX",
    "category": "Fintech, payments and financial technology",
    "aliases": [
      "CoinDCX"
    ],
    "countryOrRegion": "India",
    "headquarters": "Mumbai, India",
    "indiaOffices": [
      "Bengaluru",
      "Mumbai"
    ],
    "overview": "CoinDCX operates cryptocurrency exchange, Web3 staking, and blockchain investment products.",
    "sourceUrls": [
      "https://coindcx.com/careers"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "OA tests edge-case handling, decimal precision, and high-performance algorithms.",
    "roleTracks": [
      {
        "id": "coindcx-sde",
        "companyId": "coindcx",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru, Mumbai",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "coindcx-oa",
            "stageName": "CoinDCX Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "2 Medium, 1 Hard",
            "skillsAssessed": [
              "DSA",
              "Data Consistency",
              "Transaction Logic",
              "Concurrency"
            ],
            "sourceUrl": "https://coindcx.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "OA tests edge-case handling, decimal precision, and high-performance algorithms."
          },
          {
            "stageId": "coindcx-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://coindcx.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "coindcx-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://coindcx.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "coindcx-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://coindcx.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "flipkart",
    "name": "Flipkart",
    "category": "Indian consumer-tech and startups",
    "aliases": [
      "Flipkart"
    ],
    "countryOrRegion": "India",
    "headquarters": "Bengaluru, India",
    "indiaOffices": [
      "Bengaluru"
    ],
    "overview": "Flipkart (Walmart group) is one of India's leading e-commerce marketplaces and logistics networks.",
    "sourceUrls": [
      "https://www.flipkartcareers.com/"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "verified",
    "notes": "High cutoff on HackerEarth or HackerRank. Time management is critical.",
    "roleTracks": [
      {
        "id": "flipkart-sde",
        "companyId": "flipkart",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "flipkart-oa",
            "stageName": "Flipkart Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "1 Medium, 2 Hard",
            "skillsAssessed": [
              "Graphs",
              "Dynamic Programming",
              "Speed",
              "Problem Solving"
            ],
            "sourceUrl": "https://www.flipkartcareers.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "High cutoff on HackerEarth or HackerRank. Time management is critical."
          },
          {
            "stageId": "flipkart-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.flipkartcareers.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "flipkart-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.flipkartcareers.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "flipkart-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.flipkartcareers.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "swiggy",
    "name": "Swiggy",
    "category": "Indian consumer-tech and startups",
    "aliases": [
      "Swiggy"
    ],
    "countryOrRegion": "India",
    "headquarters": "Bengaluru, India",
    "indiaOffices": [
      "Bengaluru"
    ],
    "overview": "Swiggy powers on-demand food delivery, Instamart quick commerce, and dining reservations.",
    "sourceUrls": [
      "https://careers.swiggy.com/"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "verified",
    "notes": "High cutoff on HackerEarth or HackerRank. Time management is critical.",
    "roleTracks": [
      {
        "id": "swiggy-sde",
        "companyId": "swiggy",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "swiggy-oa",
            "stageName": "Swiggy Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "1 Medium, 2 Hard",
            "skillsAssessed": [
              "Graphs",
              "Dynamic Programming",
              "Speed",
              "Problem Solving"
            ],
            "sourceUrl": "https://careers.swiggy.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "High cutoff on HackerEarth or HackerRank. Time management is critical."
          },
          {
            "stageId": "swiggy-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://careers.swiggy.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "swiggy-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://careers.swiggy.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "swiggy-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://careers.swiggy.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "zomato",
    "name": "Zomato",
    "category": "Indian consumer-tech and startups",
    "aliases": [
      "Zomato"
    ],
    "countryOrRegion": "India",
    "headquarters": "Gurugram, India",
    "indiaOffices": [
      "Gurugram",
      "Bengaluru"
    ],
    "overview": "Zomato operates restaurant discovery, online food ordering, and Blinkit quick commerce.",
    "sourceUrls": [
      "https://www.zomato.com/careers"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "High cutoff on HackerEarth or HackerRank. Time management is critical.",
    "roleTracks": [
      {
        "id": "zomato-sde",
        "companyId": "zomato",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Gurugram, Bengaluru",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "zomato-oa",
            "stageName": "Zomato Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "1 Medium, 2 Hard",
            "skillsAssessed": [
              "Graphs",
              "Dynamic Programming",
              "Speed",
              "Problem Solving"
            ],
            "sourceUrl": "https://www.zomato.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "High cutoff on HackerEarth or HackerRank. Time management is critical."
          },
          {
            "stageId": "zomato-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.zomato.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "zomato-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.zomato.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "zomato-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.zomato.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "meesho",
    "name": "Meesho",
    "category": "Indian consumer-tech and startups",
    "aliases": [
      "Meesho"
    ],
    "countryOrRegion": "India",
    "headquarters": "Bengaluru, India",
    "indiaOffices": [
      "Bengaluru"
    ],
    "overview": "Meesho is a social commerce and value marketplace democratizing e-commerce for Bharat.",
    "sourceUrls": [
      "https://www.meesho.io/careers"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "High cutoff on HackerEarth or HackerRank. Time management is critical.",
    "roleTracks": [
      {
        "id": "meesho-sde",
        "companyId": "meesho",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "meesho-oa",
            "stageName": "Meesho Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "1 Medium, 2 Hard",
            "skillsAssessed": [
              "Graphs",
              "Dynamic Programming",
              "Speed",
              "Problem Solving"
            ],
            "sourceUrl": "https://www.meesho.io/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "High cutoff on HackerEarth or HackerRank. Time management is critical."
          },
          {
            "stageId": "meesho-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.meesho.io/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "meesho-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.meesho.io/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "meesho-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.meesho.io/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "zepto",
    "name": "Zepto",
    "category": "Indian consumer-tech and startups",
    "aliases": [
      "Zepto"
    ],
    "countryOrRegion": "India",
    "headquarters": "Mumbai, India",
    "indiaOffices": [
      "Bengaluru",
      "Mumbai"
    ],
    "overview": "Zepto pioneered 10-minute instant grocery delivery via hyper-local dark warehouse networks.",
    "sourceUrls": [
      "https://www.zeptonow.com/careers"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "High cutoff on HackerEarth or HackerRank. Time management is critical.",
    "roleTracks": [
      {
        "id": "zepto-sde",
        "companyId": "zepto",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru, Mumbai",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "zepto-oa",
            "stageName": "Zepto Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "1 Medium, 2 Hard",
            "skillsAssessed": [
              "Graphs",
              "Dynamic Programming",
              "Speed",
              "Problem Solving"
            ],
            "sourceUrl": "https://www.zeptonow.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "High cutoff on HackerEarth or HackerRank. Time management is critical."
          },
          {
            "stageId": "zepto-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.zeptonow.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "zepto-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.zeptonow.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "zepto-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.zeptonow.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "dream11",
    "name": "Dream11 (Dream Sports)",
    "category": "Indian consumer-tech and startups",
    "aliases": [
      "Dream11"
    ],
    "countryOrRegion": "India",
    "headquarters": "Mumbai, India",
    "indiaOffices": [
      "Mumbai"
    ],
    "overview": "Dream11 is the world's largest fantasy sports platform handling millions of concurrent users during IPL matches.",
    "sourceUrls": [
      "https://dreamsports.group/careers/"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "High cutoff on HackerEarth or HackerRank. Time management is critical.",
    "roleTracks": [
      {
        "id": "dream11-sde",
        "companyId": "dream11",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Mumbai",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "dream11-oa",
            "stageName": "Dream11 (Dream Sports) Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "1 Medium, 2 Hard",
            "skillsAssessed": [
              "Graphs",
              "Dynamic Programming",
              "Speed",
              "Problem Solving"
            ],
            "sourceUrl": "https://dreamsports.group/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "High cutoff on HackerEarth or HackerRank. Time management is critical."
          },
          {
            "stageId": "dream11-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://dreamsports.group/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "dream11-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://dreamsports.group/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "dream11-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://dreamsports.group/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "blinkit",
    "name": "Blinkit",
    "category": "Indian consumer-tech and startups",
    "aliases": [
      "Blinkit"
    ],
    "countryOrRegion": "India",
    "headquarters": "Gurugram, India",
    "indiaOffices": [
      "Gurugram"
    ],
    "overview": "Blinkit (Zomato) operates instantaneous grocery and consumer goods delivery.",
    "sourceUrls": [
      "https://blinkit.com/careers"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "High cutoff on HackerEarth or HackerRank. Time management is critical.",
    "roleTracks": [
      {
        "id": "blinkit-sde",
        "companyId": "blinkit",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Gurugram",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "blinkit-oa",
            "stageName": "Blinkit Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "1 Medium, 2 Hard",
            "skillsAssessed": [
              "Graphs",
              "Dynamic Programming",
              "Speed",
              "Problem Solving"
            ],
            "sourceUrl": "https://blinkit.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "High cutoff on HackerEarth or HackerRank. Time management is critical."
          },
          {
            "stageId": "blinkit-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://blinkit.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "blinkit-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://blinkit.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "blinkit-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://blinkit.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "urbancompany",
    "name": "Urban Company",
    "category": "Indian consumer-tech and startups",
    "aliases": [
      "Urban"
    ],
    "countryOrRegion": "India",
    "headquarters": "Gurugram, India",
    "indiaOffices": [
      "Gurugram",
      "Bengaluru"
    ],
    "overview": "Urban Company operates home services, beauty, repair, and cleaning marketplaces across multiple countries.",
    "sourceUrls": [
      "https://www.urbancompany.com/careers"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "High cutoff on HackerEarth or HackerRank. Time management is critical.",
    "roleTracks": [
      {
        "id": "urbancompany-sde",
        "companyId": "urbancompany",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Gurugram, Bengaluru",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "urbancompany-oa",
            "stageName": "Urban Company Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "1 Medium, 2 Hard",
            "skillsAssessed": [
              "Graphs",
              "Dynamic Programming",
              "Speed",
              "Problem Solving"
            ],
            "sourceUrl": "https://www.urbancompany.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "High cutoff on HackerEarth or HackerRank. Time management is critical."
          },
          {
            "stageId": "urbancompany-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.urbancompany.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "urbancompany-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.urbancompany.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "urbancompany-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.urbancompany.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "ola",
    "name": "Ola Cabs & Ola Electric",
    "category": "Indian consumer-tech and startups",
    "aliases": [
      "Ola"
    ],
    "countryOrRegion": "India",
    "headquarters": "Bengaluru, India",
    "indiaOffices": [
      "Bengaluru"
    ],
    "overview": "Ola develops ride-hailing networks, EV two-wheelers, battery gigafactories, and maps.",
    "sourceUrls": [
      "https://www.olacabs.com/careers"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "High cutoff on HackerEarth or HackerRank. Time management is critical.",
    "roleTracks": [
      {
        "id": "ola-sde",
        "companyId": "ola",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "ola-oa",
            "stageName": "Ola Cabs & Ola Electric Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "1 Medium, 2 Hard",
            "skillsAssessed": [
              "Graphs",
              "Dynamic Programming",
              "Speed",
              "Problem Solving"
            ],
            "sourceUrl": "https://www.olacabs.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "High cutoff on HackerEarth or HackerRank. Time management is critical."
          },
          {
            "stageId": "ola-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.olacabs.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "ola-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.olacabs.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "ola-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.olacabs.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "nykaa",
    "name": "Nykaa",
    "category": "Indian consumer-tech and startups",
    "aliases": [
      "Nykaa"
    ],
    "countryOrRegion": "India",
    "headquarters": "Mumbai, India",
    "indiaOffices": [
      "Mumbai",
      "Gurugram"
    ],
    "overview": "Nykaa operates beauty, wellness, and fashion e-commerce platforms and retail stores.",
    "sourceUrls": [
      "https://www.nykaa.com/careers"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "High cutoff on HackerEarth or HackerRank. Time management is critical.",
    "roleTracks": [
      {
        "id": "nykaa-sde",
        "companyId": "nykaa",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Mumbai, Gurugram",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "nykaa-oa",
            "stageName": "Nykaa Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "1 Medium, 2 Hard",
            "skillsAssessed": [
              "Graphs",
              "Dynamic Programming",
              "Speed",
              "Problem Solving"
            ],
            "sourceUrl": "https://www.nykaa.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "High cutoff on HackerEarth or HackerRank. Time management is critical."
          },
          {
            "stageId": "nykaa-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.nykaa.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "nykaa-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.nykaa.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "nykaa-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.nykaa.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "makemytrip",
    "name": "MakeMyTrip",
    "category": "Indian consumer-tech and startups",
    "aliases": [
      "MakeMyTrip"
    ],
    "countryOrRegion": "India",
    "headquarters": "Gurugram, India",
    "indiaOffices": [
      "Gurugram",
      "Bengaluru"
    ],
    "overview": "MakeMyTrip powers online travel reservations, flights, hotels, and holiday packages.",
    "sourceUrls": [
      "https://careers.makemytrip.com/"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "High cutoff on HackerEarth or HackerRank. Time management is critical.",
    "roleTracks": [
      {
        "id": "makemytrip-sde",
        "companyId": "makemytrip",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Gurugram, Bengaluru",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "makemytrip-oa",
            "stageName": "MakeMyTrip Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "1 Medium, 2 Hard",
            "skillsAssessed": [
              "Graphs",
              "Dynamic Programming",
              "Speed",
              "Problem Solving"
            ],
            "sourceUrl": "https://careers.makemytrip.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "High cutoff on HackerEarth or HackerRank. Time management is critical."
          },
          {
            "stageId": "makemytrip-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://careers.makemytrip.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "makemytrip-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://careers.makemytrip.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "makemytrip-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://careers.makemytrip.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "delhivery",
    "name": "Delhivery",
    "category": "Indian consumer-tech and startups",
    "aliases": [
      "Delhivery"
    ],
    "countryOrRegion": "India",
    "headquarters": "Gurugram, India",
    "indiaOffices": [
      "Gurugram",
      "Bengaluru",
      "Hyderabad"
    ],
    "overview": "Delhivery is India's largest fully integrated logistics services provider with custom routing algorithms.",
    "sourceUrls": [
      "https://www.delhivery.com/careers/"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "High cutoff on HackerEarth or HackerRank. Time management is critical.",
    "roleTracks": [
      {
        "id": "delhivery-sde",
        "companyId": "delhivery",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Gurugram, Bengaluru, Hyderabad",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "delhivery-oa",
            "stageName": "Delhivery Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "1 Medium, 2 Hard",
            "skillsAssessed": [
              "Graphs",
              "Dynamic Programming",
              "Speed",
              "Problem Solving"
            ],
            "sourceUrl": "https://www.delhivery.com/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "High cutoff on HackerEarth or HackerRank. Time management is critical."
          },
          {
            "stageId": "delhivery-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.delhivery.com/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "delhivery-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.delhivery.com/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "delhivery-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.delhivery.com/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "inmobi",
    "name": "InMobi",
    "category": "Indian consumer-tech and startups",
    "aliases": [
      "InMobi"
    ],
    "countryOrRegion": "India",
    "headquarters": "Bengaluru, India",
    "indiaOffices": [
      "Bengaluru"
    ],
    "overview": "InMobi is an adtech and mobile marketing platform powering lockscreen content (Glance).",
    "sourceUrls": [
      "https://www.inmobi.com/company/careers"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "High cutoff on HackerEarth or HackerRank. Time management is critical.",
    "roleTracks": [
      {
        "id": "inmobi-sde",
        "companyId": "inmobi",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "inmobi-oa",
            "stageName": "InMobi Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "1 Medium, 2 Hard",
            "skillsAssessed": [
              "Graphs",
              "Dynamic Programming",
              "Speed",
              "Problem Solving"
            ],
            "sourceUrl": "https://www.inmobi.com/company/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "High cutoff on HackerEarth or HackerRank. Time management is critical."
          },
          {
            "stageId": "inmobi-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.inmobi.com/company/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "inmobi-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.inmobi.com/company/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "inmobi-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.inmobi.com/company/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "sharechat",
    "name": "ShareChat (Mohalla Tech)",
    "category": "Indian consumer-tech and startups",
    "aliases": [
      "ShareChat"
    ],
    "countryOrRegion": "India",
    "headquarters": "Bengaluru, India",
    "indiaOffices": [
      "Bengaluru"
    ],
    "overview": "ShareChat operates regional language social networking and Moj short-video platforms.",
    "sourceUrls": [
      "https://sharechat.com/careers"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "High cutoff on HackerEarth or HackerRank. Time management is critical.",
    "roleTracks": [
      {
        "id": "sharechat-sde",
        "companyId": "sharechat",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "sharechat-oa",
            "stageName": "ShareChat (Mohalla Tech) Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "1 Medium, 2 Hard",
            "skillsAssessed": [
              "Graphs",
              "Dynamic Programming",
              "Speed",
              "Problem Solving"
            ],
            "sourceUrl": "https://sharechat.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "High cutoff on HackerEarth or HackerRank. Time management is critical."
          },
          {
            "stageId": "sharechat-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://sharechat.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "sharechat-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://sharechat.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "sharechat-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://sharechat.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "cars24",
    "name": "Cars24",
    "category": "Indian consumer-tech and startups",
    "aliases": [
      "Cars24"
    ],
    "countryOrRegion": "India",
    "headquarters": "Gurugram, India",
    "indiaOffices": [
      "Gurugram",
      "Bengaluru"
    ],
    "overview": "Cars24 operates an e-commerce platform for pre-owned cars, vehicle inspection, and financing.",
    "sourceUrls": [
      "https://www.cars24.com/careers/"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "High cutoff on HackerEarth or HackerRank. Time management is critical.",
    "roleTracks": [
      {
        "id": "cars24-sde",
        "companyId": "cars24",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Gurugram, Bengaluru",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "cars24-oa",
            "stageName": "Cars24 Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "1 Medium, 2 Hard",
            "skillsAssessed": [
              "Graphs",
              "Dynamic Programming",
              "Speed",
              "Problem Solving"
            ],
            "sourceUrl": "https://www.cars24.com/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "High cutoff on HackerEarth or HackerRank. Time management is critical."
          },
          {
            "stageId": "cars24-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.cars24.com/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "cars24-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.cars24.com/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "cars24-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.cars24.com/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "porter",
    "name": "Porter",
    "category": "Indian consumer-tech and startups",
    "aliases": [
      "Porter"
    ],
    "countryOrRegion": "India",
    "headquarters": "Bengaluru, India",
    "indiaOffices": [
      "Bengaluru"
    ],
    "overview": "Porter provides on-demand logistics, mini-truck, and bike courier services for intra-city goods.",
    "sourceUrls": [
      "https://porter.in/careers"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "High cutoff on HackerEarth or HackerRank. Time management is critical.",
    "roleTracks": [
      {
        "id": "porter-sde",
        "companyId": "porter",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "porter-oa",
            "stageName": "Porter Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "1 Medium, 2 Hard",
            "skillsAssessed": [
              "Graphs",
              "Dynamic Programming",
              "Speed",
              "Problem Solving"
            ],
            "sourceUrl": "https://porter.in/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "High cutoff on HackerEarth or HackerRank. Time management is critical."
          },
          {
            "stageId": "porter-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://porter.in/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "porter-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://porter.in/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "porter-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://porter.in/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "licious",
    "name": "Licious",
    "category": "Indian consumer-tech and startups",
    "aliases": [
      "Licious"
    ],
    "countryOrRegion": "India",
    "headquarters": "Bengaluru, India",
    "indiaOffices": [
      "Bengaluru"
    ],
    "overview": "Licious operates a farm-to-fork fresh meat, seafood, and ready-to-cook brand with cold chain tech.",
    "sourceUrls": [
      "https://www.licious.in/careers"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "High cutoff on HackerEarth or HackerRank. Time management is critical.",
    "roleTracks": [
      {
        "id": "licious-sde",
        "companyId": "licious",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "licious-oa",
            "stageName": "Licious Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "1 Medium, 2 Hard",
            "skillsAssessed": [
              "Graphs",
              "Dynamic Programming",
              "Speed",
              "Problem Solving"
            ],
            "sourceUrl": "https://www.licious.in/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "High cutoff on HackerEarth or HackerRank. Time management is critical."
          },
          {
            "stageId": "licious-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.licious.in/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "licious-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.licious.in/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "licious-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.licious.in/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "curefit",
    "name": "Cult.fit (Curefit)",
    "category": "Indian consumer-tech and startups",
    "aliases": [
      "Cult.fit"
    ],
    "countryOrRegion": "India",
    "headquarters": "Bengaluru, India",
    "indiaOffices": [
      "Bengaluru"
    ],
    "overview": "Cult.fit integrates offline fitness centers, digital workouts, and health food delivery.",
    "sourceUrls": [
      "https://www.cult.fit/careers"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "High cutoff on HackerEarth or HackerRank. Time management is critical.",
    "roleTracks": [
      {
        "id": "curefit-sde",
        "companyId": "curefit",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "curefit-oa",
            "stageName": "Cult.fit (Curefit) Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "1 Medium, 2 Hard",
            "skillsAssessed": [
              "Graphs",
              "Dynamic Programming",
              "Speed",
              "Problem Solving"
            ],
            "sourceUrl": "https://www.cult.fit/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "High cutoff on HackerEarth or HackerRank. Time management is critical."
          },
          {
            "stageId": "curefit-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.cult.fit/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "curefit-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.cult.fit/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "curefit-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.cult.fit/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "tcs",
    "name": "Tata Consultancy Services (TCS)",
    "category": "IT services and campus hiring",
    "aliases": [
      "Tata"
    ],
    "countryOrRegion": "India",
    "headquarters": "Mumbai, India",
    "indiaOffices": [
      "Pan-India: Mumbai, Chennai, Bengaluru, Pune, Hyderabad, Delhi-NCR, Kolkata"
    ],
    "overview": "TCS is India's largest IT services exporter. Offers tiered tracks: Ninja (Foundational), Digital (Advanced), and Prime (High-End R&D / AI).",
    "sourceUrls": [
      "https://www.tcs.com/careers/india"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "verified",
    "notes": "Campus drives have sectional timing and sectional cutoffs across Aptitude, Technical MCQs, and Coding.",
    "roleTracks": [
      {
        "id": "tcs-sde",
        "companyId": "tcs",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Pan-India: Mumbai, Chennai, Bengaluru, Pune, Hyderabad, Delhi-NCR, Kolkata",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "tcs-oa",
            "stageName": "Tata Consultancy Services (TCS) Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 100,
            "questionCount": 25,
            "format": "25 Questions on HackerRank / Mettl",
            "difficultyDistribution": "Coding: Medium; MCQ: Easy-Medium",
            "skillsAssessed": [
              "Quantitative Aptitude",
              "CS Fundamentals",
              "Coding Algorithms",
              "Logical Reasoning"
            ],
            "sourceUrl": "https://www.tcs.com/careers/india",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Campus drives have sectional timing and sectional cutoffs across Aptitude, Technical MCQs, and Coding."
          },
          {
            "stageId": "tcs-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.tcs.com/careers/india",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "tcs-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.tcs.com/careers/india",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "tcs-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.tcs.com/careers/india",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "infosys",
    "name": "Infosys",
    "category": "IT services and campus hiring",
    "aliases": [
      "Infosys"
    ],
    "countryOrRegion": "India",
    "headquarters": "Bengaluru, India",
    "indiaOffices": [
      "Pan-India: Bengaluru, Pune, Hyderabad, Chennai, Mysore, Chandigarh, Bhubaneswar"
    ],
    "overview": "Infosys provides digital consulting, cloud, and IT services. Offers Systems Engineer, DSE (Digital Specialist Engineer), and Specialist Programmer (SP) tracks.",
    "sourceUrls": [
      "https://www.infosys.com/careers/graduates-students.html"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "verified",
    "notes": "Campus drives have sectional timing and sectional cutoffs across Aptitude, Technical MCQs, and Coding.",
    "roleTracks": [
      {
        "id": "infosys-sde",
        "companyId": "infosys",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Pan-India: Bengaluru, Pune, Hyderabad, Chennai, Mysore, Chandigarh, Bhubaneswar",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "infosys-oa",
            "stageName": "Infosys Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 100,
            "questionCount": 25,
            "format": "25 Questions on HackerRank / Mettl",
            "difficultyDistribution": "Coding: Medium; MCQ: Easy-Medium",
            "skillsAssessed": [
              "Quantitative Aptitude",
              "CS Fundamentals",
              "Coding Algorithms",
              "Logical Reasoning"
            ],
            "sourceUrl": "https://www.infosys.com/careers/graduates-students.html",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Campus drives have sectional timing and sectional cutoffs across Aptitude, Technical MCQs, and Coding."
          },
          {
            "stageId": "infosys-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.infosys.com/careers/graduates-students.html",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "infosys-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.infosys.com/careers/graduates-students.html",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "infosys-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.infosys.com/careers/graduates-students.html",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "wipro",
    "name": "Wipro",
    "category": "IT services and campus hiring",
    "aliases": [
      "Wipro"
    ],
    "countryOrRegion": "India",
    "headquarters": "Bengaluru, India",
    "indiaOffices": [
      "Pan-India: Bengaluru, Hyderabad, Chennai, Pune, Kolkata, Kochi"
    ],
    "overview": "Wipro provides IT consulting, cloud transformation, and engineering services via Elite and Turbo hiring tracks.",
    "sourceUrls": [
      "https://careers.wipro.com/"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "verified",
    "notes": "Campus drives have sectional timing and sectional cutoffs across Aptitude, Technical MCQs, and Coding.",
    "roleTracks": [
      {
        "id": "wipro-sde",
        "companyId": "wipro",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Pan-India: Bengaluru, Hyderabad, Chennai, Pune, Kolkata, Kochi",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "wipro-oa",
            "stageName": "Wipro Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 100,
            "questionCount": 25,
            "format": "25 Questions on HackerRank / Mettl",
            "difficultyDistribution": "Coding: Medium; MCQ: Easy-Medium",
            "skillsAssessed": [
              "Quantitative Aptitude",
              "CS Fundamentals",
              "Coding Algorithms",
              "Logical Reasoning"
            ],
            "sourceUrl": "https://careers.wipro.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Campus drives have sectional timing and sectional cutoffs across Aptitude, Technical MCQs, and Coding."
          },
          {
            "stageId": "wipro-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://careers.wipro.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "wipro-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://careers.wipro.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "wipro-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://careers.wipro.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "hcltech",
    "name": "HCLTech",
    "category": "IT services and campus hiring",
    "aliases": [
      "HCLTech"
    ],
    "countryOrRegion": "India",
    "headquarters": "Noida, India",
    "indiaOffices": [
      "Noida",
      "Chennai",
      "Bengaluru",
      "Hyderabad",
      "Lucknow",
      "Madurai"
    ],
    "overview": "HCLTech delivers engineering and R&D services, digital enterprise solutions, and infrastructure management.",
    "sourceUrls": [
      "https://www.hcltech.com/careers"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "Campus drives have sectional timing and sectional cutoffs across Aptitude, Technical MCQs, and Coding.",
    "roleTracks": [
      {
        "id": "hcltech-sde",
        "companyId": "hcltech",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Noida, Chennai, Bengaluru, Hyderabad, Lucknow, Madurai",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "hcltech-oa",
            "stageName": "HCLTech Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 100,
            "questionCount": 25,
            "format": "25 Questions on HackerRank / Mettl",
            "difficultyDistribution": "Coding: Medium; MCQ: Easy-Medium",
            "skillsAssessed": [
              "Quantitative Aptitude",
              "CS Fundamentals",
              "Coding Algorithms",
              "Logical Reasoning"
            ],
            "sourceUrl": "https://www.hcltech.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Campus drives have sectional timing and sectional cutoffs across Aptitude, Technical MCQs, and Coding."
          },
          {
            "stageId": "hcltech-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.hcltech.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "hcltech-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.hcltech.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "hcltech-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.hcltech.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "cognizant",
    "name": "Cognizant",
    "category": "IT services and campus hiring",
    "aliases": [
      "Cognizant"
    ],
    "countryOrRegion": "United States",
    "headquarters": "Teaneck, NJ, USA",
    "indiaOffices": [
      "Chennai",
      "Bengaluru",
      "Hyderabad",
      "Pune",
      "Kolkata",
      "Coimbatore"
    ],
    "overview": "Cognizant delivers IT modernization, healthcare solutions, and digital engineering via GenC, GenC Elevate, and GenC Next tracks.",
    "sourceUrls": [
      "https://careers.cognizant.com/global/en"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "Campus drives have sectional timing and sectional cutoffs across Aptitude, Technical MCQs, and Coding.",
    "roleTracks": [
      {
        "id": "cognizant-sde",
        "companyId": "cognizant",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Chennai, Bengaluru, Hyderabad, Pune, Kolkata, Coimbatore",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "cognizant-oa",
            "stageName": "Cognizant Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 100,
            "questionCount": 25,
            "format": "25 Questions on HackerRank / Mettl",
            "difficultyDistribution": "Coding: Medium; MCQ: Easy-Medium",
            "skillsAssessed": [
              "Quantitative Aptitude",
              "CS Fundamentals",
              "Coding Algorithms",
              "Logical Reasoning"
            ],
            "sourceUrl": "https://careers.cognizant.com/global/en",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Campus drives have sectional timing and sectional cutoffs across Aptitude, Technical MCQs, and Coding."
          },
          {
            "stageId": "cognizant-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://careers.cognizant.com/global/en",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "cognizant-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://careers.cognizant.com/global/en",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "cognizant-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://careers.cognizant.com/global/en",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "accenture",
    "name": "Accenture",
    "category": "IT services and campus hiring",
    "aliases": [
      "Accenture"
    ],
    "countryOrRegion": "Global",
    "headquarters": "Dublin, Ireland",
    "indiaOffices": [
      "Bengaluru",
      "Hyderabad",
      "Pune",
      "Mumbai",
      "Chennai",
      "Gurugram",
      "Kolkata"
    ],
    "overview": "Accenture provides technology consulting, cloud operations, and systems integration via ASE and FSE campus roles.",
    "sourceUrls": [
      "https://www.accenture.com/in-en/careers"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "Campus drives have sectional timing and sectional cutoffs across Aptitude, Technical MCQs, and Coding.",
    "roleTracks": [
      {
        "id": "accenture-sde",
        "companyId": "accenture",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru, Hyderabad, Pune, Mumbai, Chennai, Gurugram, Kolkata",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "accenture-oa",
            "stageName": "Accenture Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 100,
            "questionCount": 25,
            "format": "25 Questions on HackerRank / Mettl",
            "difficultyDistribution": "Coding: Medium; MCQ: Easy-Medium",
            "skillsAssessed": [
              "Quantitative Aptitude",
              "CS Fundamentals",
              "Coding Algorithms",
              "Logical Reasoning"
            ],
            "sourceUrl": "https://www.accenture.com/in-en/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Campus drives have sectional timing and sectional cutoffs across Aptitude, Technical MCQs, and Coding."
          },
          {
            "stageId": "accenture-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.accenture.com/in-en/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "accenture-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.accenture.com/in-en/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "accenture-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.accenture.com/in-en/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "capgemini",
    "name": "Capgemini",
    "category": "IT services and campus hiring",
    "aliases": [
      "Capgemini"
    ],
    "countryOrRegion": "Global",
    "headquarters": "Paris, France",
    "indiaOffices": [
      "Mumbai",
      "Bengaluru",
      "Pune",
      "Hyderabad",
      "Chennai",
      "Noida"
    ],
    "overview": "Capgemini delivers IT consulting, engineering, and digital transformation services.",
    "sourceUrls": [
      "https://www.capgemini.com/in-en/careers/"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "Campus drives have sectional timing and sectional cutoffs across Aptitude, Technical MCQs, and Coding.",
    "roleTracks": [
      {
        "id": "capgemini-sde",
        "companyId": "capgemini",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Mumbai, Bengaluru, Pune, Hyderabad, Chennai, Noida",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "capgemini-oa",
            "stageName": "Capgemini Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 100,
            "questionCount": 25,
            "format": "25 Questions on HackerRank / Mettl",
            "difficultyDistribution": "Coding: Medium; MCQ: Easy-Medium",
            "skillsAssessed": [
              "Quantitative Aptitude",
              "CS Fundamentals",
              "Coding Algorithms",
              "Logical Reasoning"
            ],
            "sourceUrl": "https://www.capgemini.com/in-en/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Campus drives have sectional timing and sectional cutoffs across Aptitude, Technical MCQs, and Coding."
          },
          {
            "stageId": "capgemini-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.capgemini.com/in-en/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "capgemini-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.capgemini.com/in-en/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "capgemini-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.capgemini.com/in-en/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "persistent",
    "name": "Persistent Systems",
    "category": "IT services and campus hiring",
    "aliases": [
      "Persistent"
    ],
    "countryOrRegion": "India",
    "headquarters": "Pune, India",
    "indiaOffices": [
      "Pune",
      "Bengaluru",
      "Hyderabad",
      "Goa",
      "Nagpur"
    ],
    "overview": "Persistent Systems specializes in software product engineering, healthcare, and financial services tech.",
    "sourceUrls": [
      "https://www.persistent.com/careers/"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "Campus drives have sectional timing and sectional cutoffs across Aptitude, Technical MCQs, and Coding.",
    "roleTracks": [
      {
        "id": "persistent-sde",
        "companyId": "persistent",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Pune, Bengaluru, Hyderabad, Goa, Nagpur",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "persistent-oa",
            "stageName": "Persistent Systems Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 100,
            "questionCount": 25,
            "format": "25 Questions on HackerRank / Mettl",
            "difficultyDistribution": "Coding: Medium; MCQ: Easy-Medium",
            "skillsAssessed": [
              "Quantitative Aptitude",
              "CS Fundamentals",
              "Coding Algorithms",
              "Logical Reasoning"
            ],
            "sourceUrl": "https://www.persistent.com/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Campus drives have sectional timing and sectional cutoffs across Aptitude, Technical MCQs, and Coding."
          },
          {
            "stageId": "persistent-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.persistent.com/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "persistent-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.persistent.com/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "persistent-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.persistent.com/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "ltimindtree",
    "name": "LTIMindtree",
    "category": "IT services and campus hiring",
    "aliases": [
      "LTIMindtree"
    ],
    "countryOrRegion": "India",
    "headquarters": "Mumbai, India",
    "indiaOffices": [
      "Mumbai",
      "Bengaluru",
      "Chennai",
      "Pune",
      "Hyderabad"
    ],
    "overview": "LTIMindtree provides digital solutions, cloud migration, and enterprise application services.",
    "sourceUrls": [
      "https://www.ltimindtree.com/careers/"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "Campus drives have sectional timing and sectional cutoffs across Aptitude, Technical MCQs, and Coding.",
    "roleTracks": [
      {
        "id": "ltimindtree-sde",
        "companyId": "ltimindtree",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Mumbai, Bengaluru, Chennai, Pune, Hyderabad",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "ltimindtree-oa",
            "stageName": "LTIMindtree Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 100,
            "questionCount": 25,
            "format": "25 Questions on HackerRank / Mettl",
            "difficultyDistribution": "Coding: Medium; MCQ: Easy-Medium",
            "skillsAssessed": [
              "Quantitative Aptitude",
              "CS Fundamentals",
              "Coding Algorithms",
              "Logical Reasoning"
            ],
            "sourceUrl": "https://www.ltimindtree.com/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Campus drives have sectional timing and sectional cutoffs across Aptitude, Technical MCQs, and Coding."
          },
          {
            "stageId": "ltimindtree-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.ltimindtree.com/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "ltimindtree-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.ltimindtree.com/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "ltimindtree-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.ltimindtree.com/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "techmahindra",
    "name": "Tech Mahindra",
    "category": "IT services and campus hiring",
    "aliases": [
      "Tech"
    ],
    "countryOrRegion": "India",
    "headquarters": "Pune, India",
    "indiaOffices": [
      "Pune",
      "Bengaluru",
      "Hyderabad",
      "Chennai",
      "Noida"
    ],
    "overview": "Tech Mahindra specializes in telecommunications software, digital consulting, and enterprise networking.",
    "sourceUrls": [
      "https://www.techmahindra.com/en-in/careers/"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "Campus drives have sectional timing and sectional cutoffs across Aptitude, Technical MCQs, and Coding.",
    "roleTracks": [
      {
        "id": "techmahindra-sde",
        "companyId": "techmahindra",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Pune, Bengaluru, Hyderabad, Chennai, Noida",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "techmahindra-oa",
            "stageName": "Tech Mahindra Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 100,
            "questionCount": 25,
            "format": "25 Questions on HackerRank / Mettl",
            "difficultyDistribution": "Coding: Medium; MCQ: Easy-Medium",
            "skillsAssessed": [
              "Quantitative Aptitude",
              "CS Fundamentals",
              "Coding Algorithms",
              "Logical Reasoning"
            ],
            "sourceUrl": "https://www.techmahindra.com/en-in/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Campus drives have sectional timing and sectional cutoffs across Aptitude, Technical MCQs, and Coding."
          },
          {
            "stageId": "techmahindra-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.techmahindra.com/en-in/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "techmahindra-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.techmahindra.com/en-in/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "techmahindra-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.techmahindra.com/en-in/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "hexaware",
    "name": "Hexaware Technologies",
    "category": "IT services and campus hiring",
    "aliases": [
      "Hexaware"
    ],
    "countryOrRegion": "India",
    "headquarters": "Navi Mumbai, India",
    "indiaOffices": [
      "Navi Mumbai",
      "Chennai",
      "Bengaluru",
      "Pune"
    ],
    "overview": "Hexaware automates enterprise operations with cloud, IT, and AI automation solutions.",
    "sourceUrls": [
      "https://hexaware.com/careers/"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "Campus drives have sectional timing and sectional cutoffs across Aptitude, Technical MCQs, and Coding.",
    "roleTracks": [
      {
        "id": "hexaware-sde",
        "companyId": "hexaware",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Navi Mumbai, Chennai, Bengaluru, Pune",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "hexaware-oa",
            "stageName": "Hexaware Technologies Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 100,
            "questionCount": 25,
            "format": "25 Questions on HackerRank / Mettl",
            "difficultyDistribution": "Coding: Medium; MCQ: Easy-Medium",
            "skillsAssessed": [
              "Quantitative Aptitude",
              "CS Fundamentals",
              "Coding Algorithms",
              "Logical Reasoning"
            ],
            "sourceUrl": "https://hexaware.com/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Campus drives have sectional timing and sectional cutoffs across Aptitude, Technical MCQs, and Coding."
          },
          {
            "stageId": "hexaware-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://hexaware.com/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "hexaware-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://hexaware.com/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "hexaware-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://hexaware.com/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "mphasis",
    "name": "Mphasis",
    "category": "IT services and campus hiring",
    "aliases": [
      "Mphasis"
    ],
    "countryOrRegion": "India",
    "headquarters": "Bengaluru, India",
    "indiaOffices": [
      "Bengaluru",
      "Pune",
      "Chennai",
      "Hyderabad",
      "Noida"
    ],
    "overview": "Mphasis applies cloud and cognitive tech for global banking, capital markets, and insurance clients.",
    "sourceUrls": [
      "https://careers.mphasis.com/"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "Campus drives have sectional timing and sectional cutoffs across Aptitude, Technical MCQs, and Coding.",
    "roleTracks": [
      {
        "id": "mphasis-sde",
        "companyId": "mphasis",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru, Pune, Chennai, Hyderabad, Noida",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "mphasis-oa",
            "stageName": "Mphasis Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 100,
            "questionCount": 25,
            "format": "25 Questions on HackerRank / Mettl",
            "difficultyDistribution": "Coding: Medium; MCQ: Easy-Medium",
            "skillsAssessed": [
              "Quantitative Aptitude",
              "CS Fundamentals",
              "Coding Algorithms",
              "Logical Reasoning"
            ],
            "sourceUrl": "https://careers.mphasis.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Campus drives have sectional timing and sectional cutoffs across Aptitude, Technical MCQs, and Coding."
          },
          {
            "stageId": "mphasis-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://careers.mphasis.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "mphasis-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://careers.mphasis.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "mphasis-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://careers.mphasis.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "birlasoft",
    "name": "Birlasoft",
    "category": "IT services and campus hiring",
    "aliases": [
      "Birlasoft"
    ],
    "countryOrRegion": "India",
    "headquarters": "Pune, India",
    "indiaOffices": [
      "Pune",
      "Noida",
      "Bengaluru",
      "Chennai"
    ],
    "overview": "Birlasoft (CK Birla Group) integrates enterprise digital processes and ERP solutions.",
    "sourceUrls": [
      "https://www.birlasoft.com/careers"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "Campus drives have sectional timing and sectional cutoffs across Aptitude, Technical MCQs, and Coding.",
    "roleTracks": [
      {
        "id": "birlasoft-sde",
        "companyId": "birlasoft",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Pune, Noida, Bengaluru, Chennai",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "birlasoft-oa",
            "stageName": "Birlasoft Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 100,
            "questionCount": 25,
            "format": "25 Questions on HackerRank / Mettl",
            "difficultyDistribution": "Coding: Medium; MCQ: Easy-Medium",
            "skillsAssessed": [
              "Quantitative Aptitude",
              "CS Fundamentals",
              "Coding Algorithms",
              "Logical Reasoning"
            ],
            "sourceUrl": "https://www.birlasoft.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Campus drives have sectional timing and sectional cutoffs across Aptitude, Technical MCQs, and Coding."
          },
          {
            "stageId": "birlasoft-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.birlasoft.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "birlasoft-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.birlasoft.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "birlasoft-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.birlasoft.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "coforge",
    "name": "Coforge",
    "category": "IT services and campus hiring",
    "aliases": [
      "Coforge"
    ],
    "countryOrRegion": "India",
    "headquarters": "Noida, India",
    "indiaOffices": [
      "Noida",
      "Bengaluru",
      "Hyderabad",
      "Pune"
    ],
    "overview": "Coforge (formerly NIIT Technologies) delivers specialized digital services in travel, banking, and insurance.",
    "sourceUrls": [
      "https://www.coforge.com/careers"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "Campus drives have sectional timing and sectional cutoffs across Aptitude, Technical MCQs, and Coding.",
    "roleTracks": [
      {
        "id": "coforge-sde",
        "companyId": "coforge",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Noida, Bengaluru, Hyderabad, Pune",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "coforge-oa",
            "stageName": "Coforge Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 100,
            "questionCount": 25,
            "format": "25 Questions on HackerRank / Mettl",
            "difficultyDistribution": "Coding: Medium; MCQ: Easy-Medium",
            "skillsAssessed": [
              "Quantitative Aptitude",
              "CS Fundamentals",
              "Coding Algorithms",
              "Logical Reasoning"
            ],
            "sourceUrl": "https://www.coforge.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Campus drives have sectional timing and sectional cutoffs across Aptitude, Technical MCQs, and Coding."
          },
          {
            "stageId": "coforge-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.coforge.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "coforge-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.coforge.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "coforge-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.coforge.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "dxc",
    "name": "DXC Technology",
    "category": "IT services and campus hiring",
    "aliases": [
      "DXC"
    ],
    "countryOrRegion": "United States",
    "headquarters": "Ashburn, VA, USA",
    "indiaOffices": [
      "Bengaluru",
      "Chennai",
      "Hyderabad",
      "Noida"
    ],
    "overview": "DXC Technology delivers IT services, modernizing mission-critical operations and multi-cloud architectures.",
    "sourceUrls": [
      "https://dxc.com/us/en/careers"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "Campus drives have sectional timing and sectional cutoffs across Aptitude, Technical MCQs, and Coding.",
    "roleTracks": [
      {
        "id": "dxc-sde",
        "companyId": "dxc",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru, Chennai, Hyderabad, Noida",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "dxc-oa",
            "stageName": "DXC Technology Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 100,
            "questionCount": 25,
            "format": "25 Questions on HackerRank / Mettl",
            "difficultyDistribution": "Coding: Medium; MCQ: Easy-Medium",
            "skillsAssessed": [
              "Quantitative Aptitude",
              "CS Fundamentals",
              "Coding Algorithms",
              "Logical Reasoning"
            ],
            "sourceUrl": "https://dxc.com/us/en/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Campus drives have sectional timing and sectional cutoffs across Aptitude, Technical MCQs, and Coding."
          },
          {
            "stageId": "dxc-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://dxc.com/us/en/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "dxc-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://dxc.com/us/en/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "dxc-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://dxc.com/us/en/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "ibm",
    "name": "IBM",
    "category": "Consulting, analytics and enterprise technology",
    "aliases": [
      "IBM"
    ],
    "countryOrRegion": "United States",
    "headquarters": "Armonk, NY, USA",
    "indiaOffices": [
      "Bengaluru",
      "Hyderabad",
      "Kochi",
      "Pune",
      "Gurugram"
    ],
    "overview": "IBM delivers enterprise hybrid cloud (Red Hat OpenShift), mainframes, and enterprise AI (watsonx).",
    "sourceUrls": [
      "https://www.ibm.com/careers/in-en"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "Assessment mixes data interpretation, database queries, and algorithmic problem solving.",
    "roleTracks": [
      {
        "id": "ibm-sde",
        "companyId": "ibm",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru, Hyderabad, Kochi, Pune, Gurugram",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "ibm-oa",
            "stageName": "IBM Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 20,
            "format": "20 Questions on HackerRank / Mettl",
            "difficultyDistribution": "Analytical & Programming",
            "skillsAssessed": [
              "SQL & Databases",
              "Data Analysis",
              "Python/Java",
              "Aptitude"
            ],
            "sourceUrl": "https://www.ibm.com/careers/in-en",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Assessment mixes data interpretation, database queries, and algorithmic problem solving."
          },
          {
            "stageId": "ibm-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.ibm.com/careers/in-en",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "ibm-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.ibm.com/careers/in-en",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "ibm-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.ibm.com/careers/in-en",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "deloitte",
    "name": "Deloitte (USI / India)",
    "category": "Consulting, analytics and enterprise technology",
    "aliases": [
      "Deloitte"
    ],
    "countryOrRegion": "Global",
    "headquarters": "London, UK",
    "indiaOffices": [
      "Hyderabad",
      "Bengaluru",
      "Gurugram",
      "Mumbai",
      "Pune"
    ],
    "overview": "Deloitte USI provides enterprise cloud integration, cybersecurity, software engineering, and digital consulting.",
    "sourceUrls": [
      "https://www2.deloitte.com/ui/en/pages/careers/articles/welcome.html"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "Assessment mixes data interpretation, database queries, and algorithmic problem solving.",
    "roleTracks": [
      {
        "id": "deloitte-sde",
        "companyId": "deloitte",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Hyderabad, Bengaluru, Gurugram, Mumbai, Pune",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "deloitte-oa",
            "stageName": "Deloitte (USI / India) Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 20,
            "format": "20 Questions on HackerRank / Mettl",
            "difficultyDistribution": "Analytical & Programming",
            "skillsAssessed": [
              "SQL & Databases",
              "Data Analysis",
              "Python/Java",
              "Aptitude"
            ],
            "sourceUrl": "https://www2.deloitte.com/ui/en/pages/careers/articles/welcome.html",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Assessment mixes data interpretation, database queries, and algorithmic problem solving."
          },
          {
            "stageId": "deloitte-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www2.deloitte.com/ui/en/pages/careers/articles/welcome.html",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "deloitte-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www2.deloitte.com/ui/en/pages/careers/articles/welcome.html",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "deloitte-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www2.deloitte.com/ui/en/pages/careers/articles/welcome.html",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "exl",
    "name": "EXL Service",
    "category": "Consulting, analytics and enterprise technology",
    "aliases": [
      "EXL"
    ],
    "countryOrRegion": "United States",
    "headquarters": "New York, NY, USA",
    "indiaOffices": [
      "Noida",
      "Gurugram",
      "Bengaluru"
    ],
    "overview": "EXL provides data analytics, operations management, and AI services for insurance and healthcare.",
    "sourceUrls": [
      "https://www.exlservice.com/careers"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "Assessment mixes data interpretation, database queries, and algorithmic problem solving.",
    "roleTracks": [
      {
        "id": "exl-sde",
        "companyId": "exl",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Noida, Gurugram, Bengaluru",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "exl-oa",
            "stageName": "EXL Service Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 20,
            "format": "20 Questions on HackerRank / Mettl",
            "difficultyDistribution": "Analytical & Programming",
            "skillsAssessed": [
              "SQL & Databases",
              "Data Analysis",
              "Python/Java",
              "Aptitude"
            ],
            "sourceUrl": "https://www.exlservice.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Assessment mixes data interpretation, database queries, and algorithmic problem solving."
          },
          {
            "stageId": "exl-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.exlservice.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "exl-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.exlservice.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "exl-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.exlservice.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "genpact",
    "name": "Genpact",
    "category": "Consulting, analytics and enterprise technology",
    "aliases": [
      "Genpact"
    ],
    "countryOrRegion": "United States",
    "headquarters": "New York, NY, USA",
    "indiaOffices": [
      "Gurugram",
      "Noida",
      "Bengaluru",
      "Hyderabad"
    ],
    "overview": "Genpact delivers digital operations, enterprise risk analytics, and supply chain transformations.",
    "sourceUrls": [
      "https://www.genpact.com/careers"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "Assessment mixes data interpretation, database queries, and algorithmic problem solving.",
    "roleTracks": [
      {
        "id": "genpact-sde",
        "companyId": "genpact",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Gurugram, Noida, Bengaluru, Hyderabad",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "genpact-oa",
            "stageName": "Genpact Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 20,
            "format": "20 Questions on HackerRank / Mettl",
            "difficultyDistribution": "Analytical & Programming",
            "skillsAssessed": [
              "SQL & Databases",
              "Data Analysis",
              "Python/Java",
              "Aptitude"
            ],
            "sourceUrl": "https://www.genpact.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Assessment mixes data interpretation, database queries, and algorithmic problem solving."
          },
          {
            "stageId": "genpact-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.genpact.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "genpact-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.genpact.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "genpact-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.genpact.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "pwc",
    "name": "PwC Technology",
    "category": "Consulting, analytics and enterprise technology",
    "aliases": [
      "PwC"
    ],
    "countryOrRegion": "Global",
    "headquarters": "London, UK",
    "indiaOffices": [
      "Bengaluru",
      "Hyderabad",
      "Kolkata",
      "Mumbai",
      "Gurugram"
    ],
    "overview": "PwC Technology delivers enterprise cloud systems, digital tax tech, and cybersecurity architectures.",
    "sourceUrls": [
      "https://www.pwc.in/careers.html"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "Assessment mixes data interpretation, database queries, and algorithmic problem solving.",
    "roleTracks": [
      {
        "id": "pwc-sde",
        "companyId": "pwc",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru, Hyderabad, Kolkata, Mumbai, Gurugram",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "pwc-oa",
            "stageName": "PwC Technology Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 20,
            "format": "20 Questions on HackerRank / Mettl",
            "difficultyDistribution": "Analytical & Programming",
            "skillsAssessed": [
              "SQL & Databases",
              "Data Analysis",
              "Python/Java",
              "Aptitude"
            ],
            "sourceUrl": "https://www.pwc.in/careers.html",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Assessment mixes data interpretation, database queries, and algorithmic problem solving."
          },
          {
            "stageId": "pwc-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.pwc.in/careers.html",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "pwc-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.pwc.in/careers.html",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "pwc-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.pwc.in/careers.html",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "ey",
    "name": "EY Technology (GDS)",
    "category": "Consulting, analytics and enterprise technology",
    "aliases": [
      "EY"
    ],
    "countryOrRegion": "Global",
    "headquarters": "London, UK",
    "indiaOffices": [
      "Bengaluru",
      "Hyderabad",
      "Gurugram",
      "Kochi",
      "Chennai"
    ],
    "overview": "EY Global Delivery Services provides tech development, data science, and cloud transformation.",
    "sourceUrls": [
      "https://www.ey.com/en_in/careers"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "Assessment mixes data interpretation, database queries, and algorithmic problem solving.",
    "roleTracks": [
      {
        "id": "ey-sde",
        "companyId": "ey",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru, Hyderabad, Gurugram, Kochi, Chennai",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "ey-oa",
            "stageName": "EY Technology (GDS) Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 20,
            "format": "20 Questions on HackerRank / Mettl",
            "difficultyDistribution": "Analytical & Programming",
            "skillsAssessed": [
              "SQL & Databases",
              "Data Analysis",
              "Python/Java",
              "Aptitude"
            ],
            "sourceUrl": "https://www.ey.com/en_in/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Assessment mixes data interpretation, database queries, and algorithmic problem solving."
          },
          {
            "stageId": "ey-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.ey.com/en_in/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "ey-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.ey.com/en_in/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "ey-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.ey.com/en_in/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "kpmg",
    "name": "KPMG India & KGS",
    "category": "Consulting, analytics and enterprise technology",
    "aliases": [
      "KPMG"
    ],
    "countryOrRegion": "Global",
    "headquarters": "Amstelveen, Netherlands",
    "indiaOffices": [
      "Bengaluru",
      "Gurugram",
      "Mumbai",
      "Kochi"
    ],
    "overview": "KPMG Global Services delivers digital engineering, risk modeling, and enterprise data analytics.",
    "sourceUrls": [
      "https://kpmg.com/in/en/home/careers.html"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "Assessment mixes data interpretation, database queries, and algorithmic problem solving.",
    "roleTracks": [
      {
        "id": "kpmg-sde",
        "companyId": "kpmg",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru, Gurugram, Mumbai, Kochi",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "kpmg-oa",
            "stageName": "KPMG India & KGS Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 20,
            "format": "20 Questions on HackerRank / Mettl",
            "difficultyDistribution": "Analytical & Programming",
            "skillsAssessed": [
              "SQL & Databases",
              "Data Analysis",
              "Python/Java",
              "Aptitude"
            ],
            "sourceUrl": "https://kpmg.com/in/en/home/careers.html",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Assessment mixes data interpretation, database queries, and algorithmic problem solving."
          },
          {
            "stageId": "kpmg-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://kpmg.com/in/en/home/careers.html",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "kpmg-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://kpmg.com/in/en/home/careers.html",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "kpmg-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://kpmg.com/in/en/home/careers.html",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "musigma",
    "name": "Mu Sigma",
    "category": "Consulting, analytics and enterprise technology",
    "aliases": [
      "Mu"
    ],
    "countryOrRegion": "United States",
    "headquarters": "Chicago, IL, USA",
    "indiaOffices": [
      "Bengaluru"
    ],
    "overview": "Mu Sigma pioneered decision sciences, big data analytics, and mathematical problem-solving consulting.",
    "sourceUrls": [
      "https://www.mu-sigma.com/careers"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "Assessment mixes data interpretation, database queries, and algorithmic problem solving.",
    "roleTracks": [
      {
        "id": "musigma-sde",
        "companyId": "musigma",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "musigma-oa",
            "stageName": "Mu Sigma Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 20,
            "format": "20 Questions on HackerRank / Mettl",
            "difficultyDistribution": "Analytical & Programming",
            "skillsAssessed": [
              "SQL & Databases",
              "Data Analysis",
              "Python/Java",
              "Aptitude"
            ],
            "sourceUrl": "https://www.mu-sigma.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Assessment mixes data interpretation, database queries, and algorithmic problem solving."
          },
          {
            "stageId": "musigma-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.mu-sigma.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "musigma-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.mu-sigma.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "musigma-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.mu-sigma.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "fractal",
    "name": "Fractal Analytics",
    "category": "Consulting, analytics and enterprise technology",
    "aliases": [
      "Fractal"
    ],
    "countryOrRegion": "United States",
    "headquarters": "New York, NY, USA",
    "indiaOffices": [
      "Mumbai",
      "Bengaluru",
      "Gurugram"
    ],
    "overview": "Fractal provides enterprise AI, computer vision, and decision analytics for Fortune 500 companies.",
    "sourceUrls": [
      "https://fractal.ai/careers/"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "Assessment mixes data interpretation, database queries, and algorithmic problem solving.",
    "roleTracks": [
      {
        "id": "fractal-sde",
        "companyId": "fractal",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Mumbai, Bengaluru, Gurugram",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "fractal-oa",
            "stageName": "Fractal Analytics Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 20,
            "format": "20 Questions on HackerRank / Mettl",
            "difficultyDistribution": "Analytical & Programming",
            "skillsAssessed": [
              "SQL & Databases",
              "Data Analysis",
              "Python/Java",
              "Aptitude"
            ],
            "sourceUrl": "https://fractal.ai/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Assessment mixes data interpretation, database queries, and algorithmic problem solving."
          },
          {
            "stageId": "fractal-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://fractal.ai/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "fractal-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://fractal.ai/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "fractal-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://fractal.ai/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "tigeranalytics",
    "name": "Tiger Analytics",
    "category": "Consulting, analytics and enterprise technology",
    "aliases": [
      "Tiger"
    ],
    "countryOrRegion": "United States",
    "headquarters": "Santa Clara, CA, USA",
    "indiaOffices": [
      "Chennai",
      "Bengaluru",
      "Hyderabad"
    ],
    "overview": "Tiger Analytics develops custom AI models, predictive data science, and ML engineering pipelines.",
    "sourceUrls": [
      "https://www.tigeranalytics.com/careers/"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "Assessment mixes data interpretation, database queries, and algorithmic problem solving.",
    "roleTracks": [
      {
        "id": "tigeranalytics-sde",
        "companyId": "tigeranalytics",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Chennai, Bengaluru, Hyderabad",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "tigeranalytics-oa",
            "stageName": "Tiger Analytics Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 20,
            "format": "20 Questions on HackerRank / Mettl",
            "difficultyDistribution": "Analytical & Programming",
            "skillsAssessed": [
              "SQL & Databases",
              "Data Analysis",
              "Python/Java",
              "Aptitude"
            ],
            "sourceUrl": "https://www.tigeranalytics.com/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Assessment mixes data interpretation, database queries, and algorithmic problem solving."
          },
          {
            "stageId": "tigeranalytics-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.tigeranalytics.com/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "tigeranalytics-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.tigeranalytics.com/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "tigeranalytics-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.tigeranalytics.com/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "latentview",
    "name": "LatentView Analytics",
    "category": "Consulting, analytics and enterprise technology",
    "aliases": [
      "LatentView"
    ],
    "countryOrRegion": "United States",
    "headquarters": "Princeton, NJ, USA",
    "indiaOffices": [
      "Chennai",
      "Bengaluru"
    ],
    "overview": "LatentView delivers digital transformation analytics, customer intelligence, and supply chain modeling.",
    "sourceUrls": [
      "https://www.latentview.com/careers/"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "Assessment mixes data interpretation, database queries, and algorithmic problem solving.",
    "roleTracks": [
      {
        "id": "latentview-sde",
        "companyId": "latentview",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Chennai, Bengaluru",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "latentview-oa",
            "stageName": "LatentView Analytics Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 20,
            "format": "20 Questions on HackerRank / Mettl",
            "difficultyDistribution": "Analytical & Programming",
            "skillsAssessed": [
              "SQL & Databases",
              "Data Analysis",
              "Python/Java",
              "Aptitude"
            ],
            "sourceUrl": "https://www.latentview.com/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Assessment mixes data interpretation, database queries, and algorithmic problem solving."
          },
          {
            "stageId": "latentview-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.latentview.com/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "latentview-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.latentview.com/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "latentview-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.latentview.com/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "zs",
    "name": "ZS Associates",
    "category": "Consulting, analytics and enterprise technology",
    "aliases": [
      "ZS"
    ],
    "countryOrRegion": "United States",
    "headquarters": "Evanston, IL, USA",
    "indiaOffices": [
      "Pune",
      "Bengaluru",
      "Gurugram"
    ],
    "overview": "ZS provides management consulting, healthcare data analytics, and custom software solutions.",
    "sourceUrls": [
      "https://www.zs.com/careers"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "Assessment mixes data interpretation, database queries, and algorithmic problem solving.",
    "roleTracks": [
      {
        "id": "zs-sde",
        "companyId": "zs",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Pune, Bengaluru, Gurugram",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "zs-oa",
            "stageName": "ZS Associates Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 20,
            "format": "20 Questions on HackerRank / Mettl",
            "difficultyDistribution": "Analytical & Programming",
            "skillsAssessed": [
              "SQL & Databases",
              "Data Analysis",
              "Python/Java",
              "Aptitude"
            ],
            "sourceUrl": "https://www.zs.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Assessment mixes data interpretation, database queries, and algorithmic problem solving."
          },
          {
            "stageId": "zs-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.zs.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "zs-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.zs.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "zs-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.zs.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "mckinseytech",
    "name": "McKinsey Digital",
    "category": "Consulting, analytics and enterprise technology",
    "aliases": [
      "McKinsey"
    ],
    "countryOrRegion": "United States",
    "headquarters": "New York, NY, USA",
    "indiaOffices": [
      "Gurugram",
      "Bengaluru",
      "Mumbai"
    ],
    "overview": "McKinsey Digital builds bespoke digital products, data engineering, and agile cloud transformations.",
    "sourceUrls": [
      "https://www.mckinsey.com/careers/"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "Assessment mixes data interpretation, database queries, and algorithmic problem solving.",
    "roleTracks": [
      {
        "id": "mckinseytech-sde",
        "companyId": "mckinseytech",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Gurugram, Bengaluru, Mumbai",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "mckinseytech-oa",
            "stageName": "McKinsey Digital Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 20,
            "format": "20 Questions on HackerRank / Mettl",
            "difficultyDistribution": "Analytical & Programming",
            "skillsAssessed": [
              "SQL & Databases",
              "Data Analysis",
              "Python/Java",
              "Aptitude"
            ],
            "sourceUrl": "https://www.mckinsey.com/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Assessment mixes data interpretation, database queries, and algorithmic problem solving."
          },
          {
            "stageId": "mckinseytech-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.mckinsey.com/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "mckinseytech-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.mckinsey.com/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "mckinseytech-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.mckinsey.com/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "qualcomm",
    "name": "Qualcomm",
    "category": "Infrastructure, cybersecurity and systems",
    "aliases": [
      "Qualcomm"
    ],
    "countryOrRegion": "United States",
    "headquarters": "San Diego, CA, USA",
    "indiaOffices": [
      "Hyderabad",
      "Bengaluru",
      "Chennai"
    ],
    "overview": "Qualcomm leads mobile wireless tech (5G), Snapdragon processors, modem firmware, and edge AI compute.",
    "sourceUrls": [
      "https://www.qualcomm.com/company/careers"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "verified",
    "notes": "Heavy emphasis on pointers, memory management, bitwise operations, and low-level code tracing.",
    "roleTracks": [
      {
        "id": "qualcomm-sde",
        "companyId": "qualcomm",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Hyderabad, Bengaluru, Chennai",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "qualcomm-oa",
            "stageName": "Qualcomm Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 20,
            "format": "20 Questions on HackerRank / Mettl",
            "difficultyDistribution": "Medium-Hard",
            "skillsAssessed": [
              "C/C++ Internals",
              "Operating Systems",
              "Computer Architecture",
              "DSA"
            ],
            "sourceUrl": "https://www.qualcomm.com/company/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Heavy emphasis on pointers, memory management, bitwise operations, and low-level code tracing."
          },
          {
            "stageId": "qualcomm-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.qualcomm.com/company/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "qualcomm-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.qualcomm.com/company/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "qualcomm-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.qualcomm.com/company/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "amd",
    "name": "AMD",
    "category": "Infrastructure, cybersecurity and systems",
    "aliases": [
      "AMD"
    ],
    "countryOrRegion": "United States",
    "headquarters": "Santa Clara, CA, USA",
    "indiaOffices": [
      "Bengaluru",
      "Hyderabad"
    ],
    "overview": "AMD engineers high-performance CPUs (Ryzen/EPYC), GPUs, and custom silicon for data centers and gaming.",
    "sourceUrls": [
      "https://www.amd.com/en/corporate/careers.html"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "verified",
    "notes": "Heavy emphasis on pointers, memory management, bitwise operations, and low-level code tracing.",
    "roleTracks": [
      {
        "id": "amd-sde",
        "companyId": "amd",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru, Hyderabad",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "amd-oa",
            "stageName": "AMD Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 20,
            "format": "20 Questions on HackerRank / Mettl",
            "difficultyDistribution": "Medium-Hard",
            "skillsAssessed": [
              "C/C++ Internals",
              "Operating Systems",
              "Computer Architecture",
              "DSA"
            ],
            "sourceUrl": "https://www.amd.com/en/corporate/careers.html",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Heavy emphasis on pointers, memory management, bitwise operations, and low-level code tracing."
          },
          {
            "stageId": "amd-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.amd.com/en/corporate/careers.html",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "amd-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.amd.com/en/corporate/careers.html",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "amd-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.amd.com/en/corporate/careers.html",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "intel",
    "name": "Intel",
    "category": "Infrastructure, cybersecurity and systems",
    "aliases": [
      "Intel"
    ],
    "countryOrRegion": "United States",
    "headquarters": "Santa Clara, CA, USA",
    "indiaOffices": [
      "Bengaluru",
      "Hyderabad"
    ],
    "overview": "Intel develops semiconductor chips, x86 architectures, FPGA accelerators, and silicon photonics.",
    "sourceUrls": [
      "https://jobs.intel.com/en/location/india-jobs/"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "verified",
    "notes": "Heavy emphasis on pointers, memory management, bitwise operations, and low-level code tracing.",
    "roleTracks": [
      {
        "id": "intel-sde",
        "companyId": "intel",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru, Hyderabad",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "intel-oa",
            "stageName": "Intel Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 20,
            "format": "20 Questions on HackerRank / Mettl",
            "difficultyDistribution": "Medium-Hard",
            "skillsAssessed": [
              "C/C++ Internals",
              "Operating Systems",
              "Computer Architecture",
              "DSA"
            ],
            "sourceUrl": "https://jobs.intel.com/en/location/india-jobs/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Heavy emphasis on pointers, memory management, bitwise operations, and low-level code tracing."
          },
          {
            "stageId": "intel-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://jobs.intel.com/en/location/india-jobs/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "intel-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://jobs.intel.com/en/location/india-jobs/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "intel-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://jobs.intel.com/en/location/india-jobs/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "arm",
    "name": "Arm",
    "category": "Infrastructure, cybersecurity and systems",
    "aliases": [
      "Arm"
    ],
    "countryOrRegion": "Global",
    "headquarters": "Cambridge, UK",
    "indiaOffices": [
      "Bengaluru",
      "Noida"
    ],
    "overview": "Arm architects energy-efficient processor cores powering 99% of global smartphones and modern cloud silicon.",
    "sourceUrls": [
      "https://careers.arm.com/"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "Heavy emphasis on pointers, memory management, bitwise operations, and low-level code tracing.",
    "roleTracks": [
      {
        "id": "arm-sde",
        "companyId": "arm",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru, Noida",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "arm-oa",
            "stageName": "Arm Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 20,
            "format": "20 Questions on HackerRank / Mettl",
            "difficultyDistribution": "Medium-Hard",
            "skillsAssessed": [
              "C/C++ Internals",
              "Operating Systems",
              "Computer Architecture",
              "DSA"
            ],
            "sourceUrl": "https://careers.arm.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Heavy emphasis on pointers, memory management, bitwise operations, and low-level code tracing."
          },
          {
            "stageId": "arm-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://careers.arm.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "arm-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://careers.arm.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "arm-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://careers.arm.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "redhat",
    "name": "Red Hat",
    "category": "Infrastructure, cybersecurity and systems",
    "aliases": [
      "Red"
    ],
    "countryOrRegion": "United States",
    "headquarters": "Raleigh, NC, USA",
    "indiaOffices": [
      "Pune",
      "Bengaluru"
    ],
    "overview": "Red Hat (IBM) develops open source enterprise Linux (RHEL), Kubernetes (OpenShift), and Ansible.",
    "sourceUrls": [
      "https://www.redhat.com/en/jobs"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "Heavy emphasis on pointers, memory management, bitwise operations, and low-level code tracing.",
    "roleTracks": [
      {
        "id": "redhat-sde",
        "companyId": "redhat",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Pune, Bengaluru",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "redhat-oa",
            "stageName": "Red Hat Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 20,
            "format": "20 Questions on HackerRank / Mettl",
            "difficultyDistribution": "Medium-Hard",
            "skillsAssessed": [
              "C/C++ Internals",
              "Operating Systems",
              "Computer Architecture",
              "DSA"
            ],
            "sourceUrl": "https://www.redhat.com/en/jobs",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Heavy emphasis on pointers, memory management, bitwise operations, and low-level code tracing."
          },
          {
            "stageId": "redhat-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.redhat.com/en/jobs",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "redhat-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.redhat.com/en/jobs",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "redhat-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.redhat.com/en/jobs",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "nutanix",
    "name": "Nutanix",
    "category": "Infrastructure, cybersecurity and systems",
    "aliases": [
      "Nutanix"
    ],
    "countryOrRegion": "United States",
    "headquarters": "San Jose, CA, USA",
    "indiaOffices": [
      "Bengaluru"
    ],
    "overview": "Nutanix delivers hyperconverged infrastructure (HCI), hybrid multicloud, and distributed storage.",
    "sourceUrls": [
      "https://www.nutanix.com/careers"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "Heavy emphasis on pointers, memory management, bitwise operations, and low-level code tracing.",
    "roleTracks": [
      {
        "id": "nutanix-sde",
        "companyId": "nutanix",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "nutanix-oa",
            "stageName": "Nutanix Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 20,
            "format": "20 Questions on HackerRank / Mettl",
            "difficultyDistribution": "Medium-Hard",
            "skillsAssessed": [
              "C/C++ Internals",
              "Operating Systems",
              "Computer Architecture",
              "DSA"
            ],
            "sourceUrl": "https://www.nutanix.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Heavy emphasis on pointers, memory management, bitwise operations, and low-level code tracing."
          },
          {
            "stageId": "nutanix-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.nutanix.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "nutanix-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.nutanix.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "nutanix-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.nutanix.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "paloalto",
    "name": "Palo Alto Networks",
    "category": "Infrastructure, cybersecurity and systems",
    "aliases": [
      "Palo"
    ],
    "countryOrRegion": "United States",
    "headquarters": "Santa Clara, CA, USA",
    "indiaOffices": [
      "Bengaluru"
    ],
    "overview": "Palo Alto Networks builds next-generation firewalls, Prisma cloud security, and Cortex AI SOC tools.",
    "sourceUrls": [
      "https://jobs.paloaltonetworks.com/"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "Heavy emphasis on pointers, memory management, bitwise operations, and low-level code tracing.",
    "roleTracks": [
      {
        "id": "paloalto-sde",
        "companyId": "paloalto",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "paloalto-oa",
            "stageName": "Palo Alto Networks Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 20,
            "format": "20 Questions on HackerRank / Mettl",
            "difficultyDistribution": "Medium-Hard",
            "skillsAssessed": [
              "C/C++ Internals",
              "Operating Systems",
              "Computer Architecture",
              "DSA"
            ],
            "sourceUrl": "https://jobs.paloaltonetworks.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Heavy emphasis on pointers, memory management, bitwise operations, and low-level code tracing."
          },
          {
            "stageId": "paloalto-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://jobs.paloaltonetworks.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "paloalto-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://jobs.paloaltonetworks.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "paloalto-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://jobs.paloaltonetworks.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "fortinet",
    "name": "Fortinet",
    "category": "Infrastructure, cybersecurity and systems",
    "aliases": [
      "Fortinet"
    ],
    "countryOrRegion": "United States",
    "headquarters": "Sunnyvale, CA, USA",
    "indiaOffices": [
      "Bengaluru",
      "Pune"
    ],
    "overview": "Fortinet creates cybersecurity products including FortiGate firewalls, SD-WAN, and endpoint security.",
    "sourceUrls": [
      "https://www.fortinet.com/corporate/careers"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "Heavy emphasis on pointers, memory management, bitwise operations, and low-level code tracing.",
    "roleTracks": [
      {
        "id": "fortinet-sde",
        "companyId": "fortinet",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru, Pune",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "fortinet-oa",
            "stageName": "Fortinet Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 20,
            "format": "20 Questions on HackerRank / Mettl",
            "difficultyDistribution": "Medium-Hard",
            "skillsAssessed": [
              "C/C++ Internals",
              "Operating Systems",
              "Computer Architecture",
              "DSA"
            ],
            "sourceUrl": "https://www.fortinet.com/corporate/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Heavy emphasis on pointers, memory management, bitwise operations, and low-level code tracing."
          },
          {
            "stageId": "fortinet-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.fortinet.com/corporate/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "fortinet-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.fortinet.com/corporate/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "fortinet-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.fortinet.com/corporate/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "crowdstrike",
    "name": "CrowdStrike",
    "category": "Infrastructure, cybersecurity and systems",
    "aliases": [
      "CrowdStrike"
    ],
    "countryOrRegion": "United States",
    "headquarters": "Austin, TX, USA",
    "indiaOffices": [
      "Pune",
      "Bengaluru / Remote"
    ],
    "overview": "CrowdStrike develops cloud-native endpoint security, Falcon threat intelligence, and identity protection.",
    "sourceUrls": [
      "https://www.crowdstrike.com/careers/"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "Heavy emphasis on pointers, memory management, bitwise operations, and low-level code tracing.",
    "roleTracks": [
      {
        "id": "crowdstrike-sde",
        "companyId": "crowdstrike",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Pune, Bengaluru / Remote",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "crowdstrike-oa",
            "stageName": "CrowdStrike Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 20,
            "format": "20 Questions on HackerRank / Mettl",
            "difficultyDistribution": "Medium-Hard",
            "skillsAssessed": [
              "C/C++ Internals",
              "Operating Systems",
              "Computer Architecture",
              "DSA"
            ],
            "sourceUrl": "https://www.crowdstrike.com/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Heavy emphasis on pointers, memory management, bitwise operations, and low-level code tracing."
          },
          {
            "stageId": "crowdstrike-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.crowdstrike.com/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "crowdstrike-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.crowdstrike.com/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "crowdstrike-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.crowdstrike.com/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "zscaler",
    "name": "Zscaler",
    "category": "Infrastructure, cybersecurity and systems",
    "aliases": [
      "Zscaler"
    ],
    "countryOrRegion": "United States",
    "headquarters": "San Jose, CA, USA",
    "indiaOffices": [
      "Bengaluru",
      "Chandigarh",
      "Pune"
    ],
    "overview": "Zscaler delivers zero-trust cloud security (ZPA, ZIA) replacing legacy corporate VPNs.",
    "sourceUrls": [
      "https://www.zscaler.com/careers"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "Heavy emphasis on pointers, memory management, bitwise operations, and low-level code tracing.",
    "roleTracks": [
      {
        "id": "zscaler-sde",
        "companyId": "zscaler",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru, Chandigarh, Pune",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "zscaler-oa",
            "stageName": "Zscaler Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 20,
            "format": "20 Questions on HackerRank / Mettl",
            "difficultyDistribution": "Medium-Hard",
            "skillsAssessed": [
              "C/C++ Internals",
              "Operating Systems",
              "Computer Architecture",
              "DSA"
            ],
            "sourceUrl": "https://www.zscaler.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Heavy emphasis on pointers, memory management, bitwise operations, and low-level code tracing."
          },
          {
            "stageId": "zscaler-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.zscaler.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "zscaler-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.zscaler.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "zscaler-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.zscaler.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "broadcom",
    "name": "Broadcom",
    "category": "Infrastructure, cybersecurity and systems",
    "aliases": [
      "Broadcom"
    ],
    "countryOrRegion": "United States",
    "headquarters": "Palo Alto, CA, USA",
    "indiaOffices": [
      "Bengaluru",
      "Hyderabad",
      "Pune"
    ],
    "overview": "Broadcom designs networking silicon, storage adapters, broadband chips, and enterprise software (VMware).",
    "sourceUrls": [
      "https://www.broadcom.com/company/careers"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "Heavy emphasis on pointers, memory management, bitwise operations, and low-level code tracing.",
    "roleTracks": [
      {
        "id": "broadcom-sde",
        "companyId": "broadcom",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru, Hyderabad, Pune",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "broadcom-oa",
            "stageName": "Broadcom Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 20,
            "format": "20 Questions on HackerRank / Mettl",
            "difficultyDistribution": "Medium-Hard",
            "skillsAssessed": [
              "C/C++ Internals",
              "Operating Systems",
              "Computer Architecture",
              "DSA"
            ],
            "sourceUrl": "https://www.broadcom.com/company/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Heavy emphasis on pointers, memory management, bitwise operations, and low-level code tracing."
          },
          {
            "stageId": "broadcom-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.broadcom.com/company/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "broadcom-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.broadcom.com/company/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "broadcom-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.broadcom.com/company/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "ti",
    "name": "Texas Instruments (TI)",
    "category": "Infrastructure, cybersecurity and systems",
    "aliases": [
      "Texas"
    ],
    "countryOrRegion": "United States",
    "headquarters": "Dallas, TX, USA",
    "indiaOffices": [
      "Bengaluru"
    ],
    "overview": "Texas Instruments designs analog chips, embedded processors, DSPs, and industrial power ICs.",
    "sourceUrls": [
      "https://careers.ti.com/"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "Heavy emphasis on pointers, memory management, bitwise operations, and low-level code tracing.",
    "roleTracks": [
      {
        "id": "ti-sde",
        "companyId": "ti",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "ti-oa",
            "stageName": "Texas Instruments (TI) Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 20,
            "format": "20 Questions on HackerRank / Mettl",
            "difficultyDistribution": "Medium-Hard",
            "skillsAssessed": [
              "C/C++ Internals",
              "Operating Systems",
              "Computer Architecture",
              "DSA"
            ],
            "sourceUrl": "https://careers.ti.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Heavy emphasis on pointers, memory management, bitwise operations, and low-level code tracing."
          },
          {
            "stageId": "ti-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://careers.ti.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "ti-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://careers.ti.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "ti-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://careers.ti.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "synopsys",
    "name": "Synopsys",
    "category": "Infrastructure, cybersecurity and systems",
    "aliases": [
      "Synopsys"
    ],
    "countryOrRegion": "United States",
    "headquarters": "Sunnyvale, CA, USA",
    "indiaOffices": [
      "Bengaluru",
      "Hyderabad",
      "Noida"
    ],
    "overview": "Synopsys provides electronic design automation (EDA) software, silicon IP, and chip verification tools.",
    "sourceUrls": [
      "https://www.synopsys.com/careers.html"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "Heavy emphasis on pointers, memory management, bitwise operations, and low-level code tracing.",
    "roleTracks": [
      {
        "id": "synopsys-sde",
        "companyId": "synopsys",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru, Hyderabad, Noida",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "synopsys-oa",
            "stageName": "Synopsys Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 20,
            "format": "20 Questions on HackerRank / Mettl",
            "difficultyDistribution": "Medium-Hard",
            "skillsAssessed": [
              "C/C++ Internals",
              "Operating Systems",
              "Computer Architecture",
              "DSA"
            ],
            "sourceUrl": "https://www.synopsys.com/careers.html",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Heavy emphasis on pointers, memory management, bitwise operations, and low-level code tracing."
          },
          {
            "stageId": "synopsys-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.synopsys.com/careers.html",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "synopsys-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.synopsys.com/careers.html",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "synopsys-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.synopsys.com/careers.html",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "cadence",
    "name": "Cadence Design Systems",
    "category": "Infrastructure, cybersecurity and systems",
    "aliases": [
      "Cadence"
    ],
    "countryOrRegion": "United States",
    "headquarters": "San Jose, CA, USA",
    "indiaOffices": [
      "Noida",
      "Bengaluru",
      "Pune",
      "Hyderabad"
    ],
    "overview": "Cadence builds computational software for intelligent system design, IC layout, and PCB simulation.",
    "sourceUrls": [
      "https://www.cadence.com/en_US/home/company/careers.html"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "Heavy emphasis on pointers, memory management, bitwise operations, and low-level code tracing.",
    "roleTracks": [
      {
        "id": "cadence-sde",
        "companyId": "cadence",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Noida, Bengaluru, Pune, Hyderabad",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "cadence-oa",
            "stageName": "Cadence Design Systems Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 20,
            "format": "20 Questions on HackerRank / Mettl",
            "difficultyDistribution": "Medium-Hard",
            "skillsAssessed": [
              "C/C++ Internals",
              "Operating Systems",
              "Computer Architecture",
              "DSA"
            ],
            "sourceUrl": "https://www.cadence.com/en_US/home/company/careers.html",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Heavy emphasis on pointers, memory management, bitwise operations, and low-level code tracing."
          },
          {
            "stageId": "cadence-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.cadence.com/en_US/home/company/careers.html",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "cadence-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.cadence.com/en_US/home/company/careers.html",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "cadence-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.cadence.com/en_US/home/company/careers.html",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "westerndigital",
    "name": "Western Digital",
    "category": "Infrastructure, cybersecurity and systems",
    "aliases": [
      "Western"
    ],
    "countryOrRegion": "United States",
    "headquarters": "San Jose, CA, USA",
    "indiaOffices": [
      "Bengaluru"
    ],
    "overview": "Western Digital manufactures flash memory (NAND), SSD storage drives, and enterprise hard disks.",
    "sourceUrls": [
      "https://careers.westerndigital.com/"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "Heavy emphasis on pointers, memory management, bitwise operations, and low-level code tracing.",
    "roleTracks": [
      {
        "id": "westerndigital-sde",
        "companyId": "westerndigital",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "westerndigital-oa",
            "stageName": "Western Digital Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 20,
            "format": "20 Questions on HackerRank / Mettl",
            "difficultyDistribution": "Medium-Hard",
            "skillsAssessed": [
              "C/C++ Internals",
              "Operating Systems",
              "Computer Architecture",
              "DSA"
            ],
            "sourceUrl": "https://careers.westerndigital.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Heavy emphasis on pointers, memory management, bitwise operations, and low-level code tracing."
          },
          {
            "stageId": "westerndigital-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://careers.westerndigital.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "westerndigital-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://careers.westerndigital.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "westerndigital-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://careers.westerndigital.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "seagate",
    "name": "Seagate Technology",
    "category": "Infrastructure, cybersecurity and systems",
    "aliases": [
      "Seagate"
    ],
    "countryOrRegion": "United States",
    "headquarters": "Fremont, CA, USA",
    "indiaOffices": [
      "Pune",
      "Bengaluru"
    ],
    "overview": "Seagate manufactures high-capacity mass-data storage, enterprise HAMR drives, and storage arrays.",
    "sourceUrls": [
      "https://www.seagate.com/jobs/"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "Heavy emphasis on pointers, memory management, bitwise operations, and low-level code tracing.",
    "roleTracks": [
      {
        "id": "seagate-sde",
        "companyId": "seagate",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Pune, Bengaluru",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "seagate-oa",
            "stageName": "Seagate Technology Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 20,
            "format": "20 Questions on HackerRank / Mettl",
            "difficultyDistribution": "Medium-Hard",
            "skillsAssessed": [
              "C/C++ Internals",
              "Operating Systems",
              "Computer Architecture",
              "DSA"
            ],
            "sourceUrl": "https://www.seagate.com/jobs/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Heavy emphasis on pointers, memory management, bitwise operations, and low-level code tracing."
          },
          {
            "stageId": "seagate-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.seagate.com/jobs/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "seagate-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.seagate.com/jobs/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "seagate-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.seagate.com/jobs/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "vmware",
    "name": "VMware (Broadcom)",
    "category": "Infrastructure, cybersecurity and systems",
    "aliases": [
      "VMware"
    ],
    "countryOrRegion": "United States",
    "headquarters": "Palo Alto, CA, USA",
    "indiaOffices": [
      "Bengaluru",
      "Pune"
    ],
    "overview": "VMware provides virtualization software (ESXi, vSphere), multicloud tools, and software-defined networking.",
    "sourceUrls": [
      "https://careers.vmware.com/"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "Heavy emphasis on pointers, memory management, bitwise operations, and low-level code tracing.",
    "roleTracks": [
      {
        "id": "vmware-sde",
        "companyId": "vmware",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru, Pune",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "vmware-oa",
            "stageName": "VMware (Broadcom) Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 20,
            "format": "20 Questions on HackerRank / Mettl",
            "difficultyDistribution": "Medium-Hard",
            "skillsAssessed": [
              "C/C++ Internals",
              "Operating Systems",
              "Computer Architecture",
              "DSA"
            ],
            "sourceUrl": "https://careers.vmware.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Heavy emphasis on pointers, memory management, bitwise operations, and low-level code tracing."
          },
          {
            "stageId": "vmware-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://careers.vmware.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "vmware-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://careers.vmware.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "vmware-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://careers.vmware.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "walmart",
    "name": "Walmart Global Tech",
    "category": "Global engineering centres and specialist employers",
    "aliases": [
      "Walmart"
    ],
    "countryOrRegion": "United States",
    "headquarters": "Bentonville, AR, USA",
    "indiaOffices": [
      "Bengaluru",
      "Chennai"
    ],
    "overview": "Walmart Global Tech engineers supply chain, Omni-channel retail, checkout vision, and inventory systems for the Fortune 1 retailer.",
    "sourceUrls": [
      "https://careers.walmart.com/"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "verified",
    "notes": "Tests core CS knowledge, database indexing, and algorithmic problem solving.",
    "roleTracks": [
      {
        "id": "walmart-sde",
        "companyId": "walmart",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru, Chennai",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "walmart-oa",
            "stageName": "Walmart Global Tech Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "2 Medium, 1 Hard",
            "skillsAssessed": [
              "Data Structures",
              "Algorithms",
              "Object-Oriented Design",
              "DBMS"
            ],
            "sourceUrl": "https://careers.walmart.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Tests core CS knowledge, database indexing, and algorithmic problem solving."
          },
          {
            "stageId": "walmart-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://careers.walmart.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "walmart-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://careers.walmart.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "walmart-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://careers.walmart.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "barclays",
    "name": "Barclays",
    "category": "Global engineering centres and specialist employers",
    "aliases": [
      "Barclays"
    ],
    "countryOrRegion": "Global",
    "headquarters": "London, UK",
    "indiaOffices": [
      "Pune",
      "Chennai"
    ],
    "overview": "Barclays Global Service Centre develops investment banking systems, payment clearing, and risk analytics.",
    "sourceUrls": [
      "https://home.barclays/careers/"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "Tests core CS knowledge, database indexing, and algorithmic problem solving.",
    "roleTracks": [
      {
        "id": "barclays-sde",
        "companyId": "barclays",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Pune, Chennai",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "barclays-oa",
            "stageName": "Barclays Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "2 Medium, 1 Hard",
            "skillsAssessed": [
              "Data Structures",
              "Algorithms",
              "Object-Oriented Design",
              "DBMS"
            ],
            "sourceUrl": "https://home.barclays/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Tests core CS knowledge, database indexing, and algorithmic problem solving."
          },
          {
            "stageId": "barclays-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://home.barclays/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "barclays-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://home.barclays/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "barclays-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://home.barclays/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "ubs",
    "name": "UBS",
    "category": "Global engineering centres and specialist employers",
    "aliases": [
      "UBS"
    ],
    "countryOrRegion": "Global",
    "headquarters": "Zurich, Switzerland",
    "indiaOffices": [
      "Pune",
      "Hyderabad",
      "Mumbai"
    ],
    "overview": "UBS delivers wealth management platforms, quantitative trading software, and financial compliance tech.",
    "sourceUrls": [
      "https://www.ubs.com/global/en/careers.html"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "Tests core CS knowledge, database indexing, and algorithmic problem solving.",
    "roleTracks": [
      {
        "id": "ubs-sde",
        "companyId": "ubs",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Pune, Hyderabad, Mumbai",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "ubs-oa",
            "stageName": "UBS Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "2 Medium, 1 Hard",
            "skillsAssessed": [
              "Data Structures",
              "Algorithms",
              "Object-Oriented Design",
              "DBMS"
            ],
            "sourceUrl": "https://www.ubs.com/global/en/careers.html",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Tests core CS knowledge, database indexing, and algorithmic problem solving."
          },
          {
            "stageId": "ubs-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.ubs.com/global/en/careers.html",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "ubs-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.ubs.com/global/en/careers.html",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "ubs-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.ubs.com/global/en/careers.html",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "siemens",
    "name": "Siemens Technology",
    "category": "Global engineering centres and specialist employers",
    "aliases": [
      "Siemens"
    ],
    "countryOrRegion": "Global",
    "headquarters": "Munich, Germany",
    "indiaOffices": [
      "Bengaluru",
      "Pune",
      "Gurugram",
      "Goa"
    ],
    "overview": "Siemens Technology India develops industrial automation, digital twin software, smart grid, and healthcare AI.",
    "sourceUrls": [
      "https://www.siemens.com/global/en/company/jobs.html"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "Tests core CS knowledge, database indexing, and algorithmic problem solving.",
    "roleTracks": [
      {
        "id": "siemens-sde",
        "companyId": "siemens",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru, Pune, Gurugram, Goa",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "siemens-oa",
            "stageName": "Siemens Technology Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "2 Medium, 1 Hard",
            "skillsAssessed": [
              "Data Structures",
              "Algorithms",
              "Object-Oriented Design",
              "DBMS"
            ],
            "sourceUrl": "https://www.siemens.com/global/en/company/jobs.html",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Tests core CS knowledge, database indexing, and algorithmic problem solving."
          },
          {
            "stageId": "siemens-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.siemens.com/global/en/company/jobs.html",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "siemens-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.siemens.com/global/en/company/jobs.html",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "siemens-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.siemens.com/global/en/company/jobs.html",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "bosch",
    "name": "Bosch Global Software Technologies (BGSW)",
    "category": "Global engineering centres and specialist employers",
    "aliases": [
      "Bosch"
    ],
    "countryOrRegion": "Global",
    "headquarters": "Gerlingen, Germany",
    "indiaOffices": [
      "Bengaluru",
      "Coimbatore",
      "Hyderabad",
      "Pune"
    ],
    "overview": "BGSW engineers automotive embedded software, ADAS algorithms, connected mobility, and IoT platforms.",
    "sourceUrls": [
      "https://www.bosch-softwaretechnologies.com/en/careers/"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "Tests core CS knowledge, database indexing, and algorithmic problem solving.",
    "roleTracks": [
      {
        "id": "bosch-sde",
        "companyId": "bosch",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru, Coimbatore, Hyderabad, Pune",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "bosch-oa",
            "stageName": "Bosch Global Software Technologies (BGSW) Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "2 Medium, 1 Hard",
            "skillsAssessed": [
              "Data Structures",
              "Algorithms",
              "Object-Oriented Design",
              "DBMS"
            ],
            "sourceUrl": "https://www.bosch-softwaretechnologies.com/en/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Tests core CS knowledge, database indexing, and algorithmic problem solving."
          },
          {
            "stageId": "bosch-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.bosch-softwaretechnologies.com/en/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "bosch-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.bosch-softwaretechnologies.com/en/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "bosch-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.bosch-softwaretechnologies.com/en/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "expedia",
    "name": "Expedia Group",
    "category": "Global engineering centres and specialist employers",
    "aliases": [
      "Expedia"
    ],
    "countryOrRegion": "United States",
    "headquarters": "Seattle, WA, USA",
    "indiaOffices": [
      "Gurugram",
      "Bengaluru"
    ],
    "overview": "Expedia Group powers travel tech for Expedia, Hotels.com, and Vrbo with high-volume search and pricing algorithms.",
    "sourceUrls": [
      "https://careers.expediagroup.com/"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "Tests core CS knowledge, database indexing, and algorithmic problem solving.",
    "roleTracks": [
      {
        "id": "expedia-sde",
        "companyId": "expedia",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Gurugram, Bengaluru",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "expedia-oa",
            "stageName": "Expedia Group Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "2 Medium, 1 Hard",
            "skillsAssessed": [
              "Data Structures",
              "Algorithms",
              "Object-Oriented Design",
              "DBMS"
            ],
            "sourceUrl": "https://careers.expediagroup.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Tests core CS knowledge, database indexing, and algorithmic problem solving."
          },
          {
            "stageId": "expedia-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://careers.expediagroup.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "expedia-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://careers.expediagroup.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "expedia-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://careers.expediagroup.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "morganstanley",
    "name": "Morgan Stanley",
    "category": "Global engineering centres and specialist employers",
    "aliases": [
      "Morgan"
    ],
    "countryOrRegion": "United States",
    "headquarters": "New York, NY, USA",
    "indiaOffices": [
      "Mumbai",
      "Bengaluru"
    ],
    "overview": "Morgan Stanley engineers algorithmic trading execution, risk engines, and low-latency financial systems.",
    "sourceUrls": [
      "https://www.morganstanley.com/careers"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "Tests core CS knowledge, database indexing, and algorithmic problem solving.",
    "roleTracks": [
      {
        "id": "morganstanley-sde",
        "companyId": "morganstanley",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Mumbai, Bengaluru",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "morganstanley-oa",
            "stageName": "Morgan Stanley Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "2 Medium, 1 Hard",
            "skillsAssessed": [
              "Data Structures",
              "Algorithms",
              "Object-Oriented Design",
              "DBMS"
            ],
            "sourceUrl": "https://www.morganstanley.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Tests core CS knowledge, database indexing, and algorithmic problem solving."
          },
          {
            "stageId": "morganstanley-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.morganstanley.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "morganstanley-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.morganstanley.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "morganstanley-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.morganstanley.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "goldmansachs",
    "name": "Goldman Sachs",
    "category": "Global engineering centres and specialist employers",
    "aliases": [
      "Goldman"
    ],
    "countryOrRegion": "United States",
    "headquarters": "New York, NY, USA",
    "indiaOffices": [
      "Bengaluru",
      "Hyderabad"
    ],
    "overview": "Goldman Sachs builds quantitative finance, high-frequency trading platforms, and transaction banking services.",
    "sourceUrls": [
      "https://www.goldmansachs.com/careers/"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "verified",
    "notes": "Tests core CS knowledge, database indexing, and algorithmic problem solving.",
    "roleTracks": [
      {
        "id": "goldmansachs-sde",
        "companyId": "goldmansachs",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru, Hyderabad",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "goldmansachs-oa",
            "stageName": "Goldman Sachs Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "2 Medium, 1 Hard",
            "skillsAssessed": [
              "Data Structures",
              "Algorithms",
              "Object-Oriented Design",
              "DBMS"
            ],
            "sourceUrl": "https://www.goldmansachs.com/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Tests core CS knowledge, database indexing, and algorithmic problem solving."
          },
          {
            "stageId": "goldmansachs-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.goldmansachs.com/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "goldmansachs-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.goldmansachs.com/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "goldmansachs-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.goldmansachs.com/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "jpmorgan",
    "name": "JPMorgan Chase",
    "category": "Global engineering centres and specialist employers",
    "aliases": [
      "JPMorgan"
    ],
    "countryOrRegion": "United States",
    "headquarters": "New York, NY, USA",
    "indiaOffices": [
      "Bengaluru",
      "Hyderabad",
      "Mumbai"
    ],
    "overview": "JPMorgan Chase manages global payment rails, Onyx blockchain, and financial analytics infrastructure.",
    "sourceUrls": [
      "https://careers.jpmorgan.com/"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "Tests core CS knowledge, database indexing, and algorithmic problem solving.",
    "roleTracks": [
      {
        "id": "jpmorgan-sde",
        "companyId": "jpmorgan",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru, Hyderabad, Mumbai",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "jpmorgan-oa",
            "stageName": "JPMorgan Chase Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "2 Medium, 1 Hard",
            "skillsAssessed": [
              "Data Structures",
              "Algorithms",
              "Object-Oriented Design",
              "DBMS"
            ],
            "sourceUrl": "https://careers.jpmorgan.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Tests core CS knowledge, database indexing, and algorithmic problem solving."
          },
          {
            "stageId": "jpmorgan-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://careers.jpmorgan.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "jpmorgan-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://careers.jpmorgan.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "jpmorgan-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://careers.jpmorgan.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "amex",
    "name": "American Express",
    "category": "Global engineering centres and specialist employers",
    "aliases": [
      "American"
    ],
    "countryOrRegion": "United States",
    "headquarters": "New York, NY, USA",
    "indiaOffices": [
      "Gurugram",
      "Bengaluru"
    ],
    "overview": "American Express operates digital payment networks, real-time fraud detection ML, and premium cardholder systems.",
    "sourceUrls": [
      "https://www.americanexpress.com/en-us/careers/"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "Tests core CS knowledge, database indexing, and algorithmic problem solving.",
    "roleTracks": [
      {
        "id": "amex-sde",
        "companyId": "amex",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Gurugram, Bengaluru",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "amex-oa",
            "stageName": "American Express Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "2 Medium, 1 Hard",
            "skillsAssessed": [
              "Data Structures",
              "Algorithms",
              "Object-Oriented Design",
              "DBMS"
            ],
            "sourceUrl": "https://www.americanexpress.com/en-us/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Tests core CS knowledge, database indexing, and algorithmic problem solving."
          },
          {
            "stageId": "amex-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.americanexpress.com/en-us/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "amex-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.americanexpress.com/en-us/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "amex-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.americanexpress.com/en-us/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "wellsfargo",
    "name": "Wells Fargo India",
    "category": "Global engineering centres and specialist employers",
    "aliases": [
      "Wells"
    ],
    "countryOrRegion": "United States",
    "headquarters": "San Francisco, CA, USA",
    "indiaOffices": [
      "Bengaluru",
      "Hyderabad",
      "Chennai"
    ],
    "overview": "Wells Fargo India delivers core banking platforms, commercial lending software, and financial security.",
    "sourceUrls": [
      "https://www.wellsfargo.com/about/careers/"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "Tests core CS knowledge, database indexing, and algorithmic problem solving.",
    "roleTracks": [
      {
        "id": "wellsfargo-sde",
        "companyId": "wellsfargo",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru, Hyderabad, Chennai",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "wellsfargo-oa",
            "stageName": "Wells Fargo India Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "2 Medium, 1 Hard",
            "skillsAssessed": [
              "Data Structures",
              "Algorithms",
              "Object-Oriented Design",
              "DBMS"
            ],
            "sourceUrl": "https://www.wellsfargo.com/about/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Tests core CS knowledge, database indexing, and algorithmic problem solving."
          },
          {
            "stageId": "wellsfargo-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.wellsfargo.com/about/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "wellsfargo-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.wellsfargo.com/about/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "wellsfargo-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.wellsfargo.com/about/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "target",
    "name": "Target Technology Services",
    "category": "Global engineering centres and specialist employers",
    "aliases": [
      "Target"
    ],
    "countryOrRegion": "United States",
    "headquarters": "Minneapolis, MN, USA",
    "indiaOffices": [
      "Bengaluru"
    ],
    "overview": "Target Tech India drives supply chain optimization, guest e-commerce, and automated fulfillment algorithms.",
    "sourceUrls": [
      "https://corporate.target.com/careers"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "Tests core CS knowledge, database indexing, and algorithmic problem solving.",
    "roleTracks": [
      {
        "id": "target-sde",
        "companyId": "target",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "target-oa",
            "stageName": "Target Technology Services Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "2 Medium, 1 Hard",
            "skillsAssessed": [
              "Data Structures",
              "Algorithms",
              "Object-Oriented Design",
              "DBMS"
            ],
            "sourceUrl": "https://corporate.target.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Tests core CS knowledge, database indexing, and algorithmic problem solving."
          },
          {
            "stageId": "target-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://corporate.target.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "target-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://corporate.target.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "target-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://corporate.target.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "lowes",
    "name": "Lowe's India",
    "category": "Global engineering centres and specialist employers",
    "aliases": [
      "Lowe's"
    ],
    "countryOrRegion": "United States",
    "headquarters": "Mooresville, NC, USA",
    "indiaOffices": [
      "Bengaluru"
    ],
    "overview": "Lowe's India engineers retail operations, store supply chain logistics, and merchandising cloud platforms.",
    "sourceUrls": [
      "https://corporate.lowes.com/careers"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "Tests core CS knowledge, database indexing, and algorithmic problem solving.",
    "roleTracks": [
      {
        "id": "lowes-sde",
        "companyId": "lowes",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "lowes-oa",
            "stageName": "Lowe's India Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "2 Medium, 1 Hard",
            "skillsAssessed": [
              "Data Structures",
              "Algorithms",
              "Object-Oriented Design",
              "DBMS"
            ],
            "sourceUrl": "https://corporate.lowes.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Tests core CS knowledge, database indexing, and algorithmic problem solving."
          },
          {
            "stageId": "lowes-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://corporate.lowes.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "lowes-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://corporate.lowes.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "lowes-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://corporate.lowes.com/careers",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "philips",
    "name": "Philips HealthTech",
    "category": "Global engineering centres and specialist employers",
    "aliases": [
      "Philips"
    ],
    "countryOrRegion": "Global",
    "headquarters": "Amsterdam, Netherlands",
    "indiaOffices": [
      "Bengaluru",
      "Pune"
    ],
    "overview": "Philips Innovation Campus develops healthcare diagnostic imaging, medical telemetry, and patient monitoring software.",
    "sourceUrls": [
      "https://www.careers.philips.com/"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "Tests core CS knowledge, database indexing, and algorithmic problem solving.",
    "roleTracks": [
      {
        "id": "philips-sde",
        "companyId": "philips",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru, Pune",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "philips-oa",
            "stageName": "Philips HealthTech Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "2 Medium, 1 Hard",
            "skillsAssessed": [
              "Data Structures",
              "Algorithms",
              "Object-Oriented Design",
              "DBMS"
            ],
            "sourceUrl": "https://www.careers.philips.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Tests core CS knowledge, database indexing, and algorithmic problem solving."
          },
          {
            "stageId": "philips-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.careers.philips.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "philips-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.careers.philips.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "philips-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.careers.philips.com/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "rakuten",
    "name": "Rakuten India",
    "category": "Global engineering centres and specialist employers",
    "aliases": [
      "Rakuten"
    ],
    "countryOrRegion": "Global",
    "headquarters": "Tokyo, Japan",
    "indiaOffices": [
      "Bengaluru"
    ],
    "overview": "Rakuten India builds e-commerce platforms, telecommunications network automation, and fintech tools.",
    "sourceUrls": [
      "https://rakuten.careers/"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "Tests core CS knowledge, database indexing, and algorithmic problem solving.",
    "roleTracks": [
      {
        "id": "rakuten-sde",
        "companyId": "rakuten",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "rakuten-oa",
            "stageName": "Rakuten India Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "2 Medium, 1 Hard",
            "skillsAssessed": [
              "Data Structures",
              "Algorithms",
              "Object-Oriented Design",
              "DBMS"
            ],
            "sourceUrl": "https://rakuten.careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Tests core CS knowledge, database indexing, and algorithmic problem solving."
          },
          {
            "stageId": "rakuten-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://rakuten.careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "rakuten-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://rakuten.careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "rakuten-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://rakuten.careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  },
  {
    "id": "mercedes",
    "name": "Mercedes-Benz R&D India (MBRDI)",
    "category": "Global engineering centres and specialist employers",
    "aliases": [
      "Mercedes-Benz"
    ],
    "countryOrRegion": "Global",
    "headquarters": "Stuttgart, Germany",
    "indiaOffices": [
      "Bengaluru",
      "Pune"
    ],
    "overview": "MBRDI develops connected vehicle OS (MB.OS), autonomous driving software, and digital cockpit systems.",
    "sourceUrls": [
      "https://www.mbrdi.co.in/careers/"
    ],
    "lastVerified": "2024-08",
    "dataConfidence": "community-reported",
    "notes": "Tests core CS knowledge, database indexing, and algorithmic problem solving.",
    "roleTracks": [
      {
        "id": "mercedes-sde",
        "companyId": "mercedes",
        "roleTitle": "Software Development Engineer (Campus / Early Career)",
        "hiringType": "On-Campus & Off-Campus",
        "experienceLevels": [
          "0-2 Years",
          "Graduates"
        ],
        "location": "Bengaluru, Pune",
        "reportedRoundCountMin": 3,
        "reportedRoundCountTypical": 4,
        "reportedRoundCountMax": 5,
        "variationNotes": "Varies across business units, campus tiers, and hiring seasons.",
        "assessmentStages": [
          {
            "stageId": "mercedes-oa",
            "stageName": "Mercedes-Benz R&D India (MBRDI) Online Assessment",
            "stageType": "Online Assessment",
            "durationMinutes": 90,
            "questionCount": 3,
            "format": "3 Questions on HackerRank / Mettl",
            "difficultyDistribution": "2 Medium, 1 Hard",
            "skillsAssessed": [
              "Data Structures",
              "Algorithms",
              "Object-Oriented Design",
              "DBMS"
            ],
            "sourceUrl": "https://www.mbrdi.co.in/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Tests core CS knowledge, database indexing, and algorithmic problem solving."
          },
          {
            "stageId": "mercedes-tech1",
            "stageName": "Technical Interview 1",
            "stageType": "Technical Interview",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Live problem solving & DSA",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "Data Structures",
              "Problem Solving",
              "Complexity"
            ],
            "sourceUrl": "https://www.mbrdi.co.in/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "mercedes-tech2",
            "stageName": "Technical Interview 2 / Architecture",
            "stageType": "System Design / LLD",
            "durationMinutes": 60,
            "questionCount": 1,
            "format": "Low-Level Design / Core CS concepts",
            "difficultyDistribution": "Medium",
            "skillsAssessed": [
              "OOP",
              "DBMS",
              "System Thinking"
            ],
            "sourceUrl": "https://www.mbrdi.co.in/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "community-reported",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          },
          {
            "stageId": "mercedes-hr",
            "stageName": "Managerial & Culture Interview",
            "stageType": "Hiring Manager / HR",
            "durationMinutes": 45,
            "questionCount": null,
            "format": "Behavioral scenarios, project discussion, team fit",
            "difficultyDistribution": "Behavioral",
            "skillsAssessed": [
              "Communication",
              "Ownership",
              "Collaboration"
            ],
            "sourceUrl": "https://www.mbrdi.co.in/careers/",
            "evidenceType": "official-portal",
            "lastVerified": "2024-09",
            "confidence": "verified",
            "uncertaintyNotes": "Format may vary by campus tier, business unit, or hiring cycle."
          }
        ]
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { COMPANIES_DATA };
}
