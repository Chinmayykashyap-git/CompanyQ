# CompanyQ: Limitations and Backend Requirements

## Executive Summary

CompanyQ is built as a lightweight, responsive, client-side application using standard HTML5, CSS3, Vanilla JavaScript, and browser `localStorage`. This architecture ensures:
- Zero installation or build-tool overhead.
- Instant, sub-second initial load without external API dependencies.
- Complete candidate privacy: all scores, test attempts, bookmarks, and drafts remain strictly on the user's local device.

However, a production recruitment assessment platform requires extensive backend infrastructure. This document provides an honest, technical accounting of what operates locally versus what would require server-side systems.

---

## 1. Current Client-Side Architecture vs. Production Backend

| Feature Domain | Current Client-Side Implementation | Production Backend Architecture Requirement |
|---|---|---|
| **Code Evaluation** | Structured code editor with language templates, sample test case viewer, and post-submission criteria self-review. | Multi-tenant sandboxed execution engine (Docker / gVisor / Firecracker microVMs) with memory limits, strict CPU quotas, execution timeouts, and syscall filtering (seccomp). |
| **Objective Grading** | Deterministic evaluation of MCQs, MSQs, debugging fixes, and output prediction in JavaScript. | Server-side answer masking: answers and scoring keys must never be exposed to the client DOM or network inspector until after the testing window closes. |
| **Data Persistence** | Browser `localStorage` (device-scoped, reset on cache clearing). | Relational/Document DB (PostgreSQL, DynamoDB) with OAuth 2.0 / JWT authentication, allowing candidates to retain attempt history across laptops, tablets, and phones. |
| **Proctoring & Anti-Cheat** | Honest simulation mode with timer countdown and window focus warnings. | WebRTC audio/video streaming, biometric gaze tracking, continuous clipboard monitoring, full-screen lockdown APIs, and automated screen recording analysis. |
| **Recruitment Data Updates** | Structured JavaScript modules (`companies.js`, `questions.js`). | Headless CMS or automated ingestion pipeline with verification workflows, ATS webhooks, and recruiter verified contributions. |

---

## 2. Code Execution Engine Architecture (Specification)

If remote compilation is added in Phase 2, the recommended architecture consists of:

```
[Candidate Browser]
       │
       ▼ (HTTPS / WSS WebSocket)
[API Gateway & Rate Limiter]
       │
       ▼ (gRPC Job Queue)
[Execution Coordinator / Task Queue (Redis / RabbitMQ)]
       │
       ▼
[Worker Node Pools (Kubernetes + gVisor Sandbox)]
 ├── Isolated Container (Python 3.12 / OpenJDK 21 / GCC 13)
 ├── Strict cgroups limits: 256MB RAM, 1000ms CPU timeout
 ├── Read-only root filesystem with ephemeral /tmp
 └── Ephemeral test case runner executing hidden inputs
       │
       ▼ (Structured Test Results JSON)
[Scoring Service -> Candidate Client]
```

### Security Considerations:
- **Fork Bombs:** Limit maximum task processes (`pids.max = 64`).
- **Network Exfiltration:** Strip all egress network interfaces inside the container (`--net=none`).
- **Arbitrary File Access:** Chroot execution jail preventing access to host credentials or operating system files.

---

## 3. Proctoring & Assessment Security Requirements

A certified recruitment assessment requires:
1. **Server-Side Timer Authority:** Timer countdowns must be validated by the backend server timestamps, preventing client-side system clock manipulation.
2. **Dynamic Question Rotation:** Randomize question parameters (e.g. changing numeric constraints or array values) to prevent automated solution lookup.
3. **Session Replay & Telemetry:** Capture typing cadence, paste volume, and keystroke intervals to flag copy-paste automation.

---

## 4. Platform Benchmarks vs. Official Company Cutoffs

- **Platform Benchmark:** CompanyQ calculates a platform-defined practice benchmark (typically 65% to 80%) indicating whether a candidate solved problems with optimal time and space complexity.
- **Company Cutoffs:** Official employer cutoffs are strictly confidential, vary by university tier and application pool size, and are subject to dynamic normalization. CompanyQ does not invent or claim official pass thresholds.

