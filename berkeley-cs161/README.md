---
category: Systems
level: Intermediate
tags: [security, cryptography, web-security, networking]
---
# Berkeley CS161 — Computer Security

## Links

- Course site: https://fa25.cs161.org/ (Fall 2025, David Wagner) — course calendar, all 27
  lecture slide decks, 14 discussion sections with worksheets, and 3 projects.
- Lecture videos (YouTube, "CS 161 (Computer Security) at UC Berkeley" channel): full recordings
  for every lecture, same Fall 2025 offering as the rest of the course site — no year-mismatch to
  reconcile. Each recording covers a 3-hour Monday session and is shared by two consecutive
  lecture numbers where noted below (confirmed both by the course site's own per-lecture
  aria-labels and by matching video titles, e.g. "[CS161 FA25] Lectures 1-2: Security Principles,
  x86 Assembly"). Entry point: https://www.youtube.com/watch?v=2IluqgnUdI4. Lecture 28 was
  planned on the syllabus but has no slides, recording, or content ever posted — noted as such in
  week 15 rather than silently dropped.
- Textbook: the course's own free online textbook, https://textbook.cs161.org — every chapter
  cited in `weeks/*.md` was individually verified to resolve.
- Discussion sections (14, numbered 0–13): each has a public worksheet, solutions, and its own
  video recording — genuinely useful self-study material, not just a grading formality.
- **Homeworks (HW1–7) are NOT public.** Every homework link on the course site points straight to
  a Gradescope assignment (confirmed returning HTTP 401 without a course-roster login) — no
  spec PDF is posted anywhere else. Only the 3 projects below have public specs.
- "Vitamins" (12 short weekly comprehension quizzes, low-stakes) aren't tracked per week here —
  they're minor and, like the homeworks, distributed via Gradescope.

## Structure

- [weeks/](weeks/) — one file per week (`week-01.md` … `week-17.md`), matching the real Fall 2025
  calendar's own week numbering (including the two no-lecture weeks: RRR week and finals week),
  with calendar dates stripped since this is meant to be worked through at your own pace.
  Assignment/project code, if kept, lives inside the relevant week's file rather than a separate
  top-level directory — see "Implementation" below for what's actually committed here (nothing).

## Weeks

| Week | Lectures | Assigned | Due |
|---|---|---|---|
| [1](weeks/week-01.md) | No lecture (first day); Discussion 0: 61C Review | HW1, Project 1 Checkpoint | — |
| [2](weeks/week-02.md) | L1 Introduction and Security Principles, L2 x86 Assembly and Call Stack; Discussion 1: Security Principles and x86 | — | — |
| [3](weeks/week-03.md) | L3 Memory Safety Vulnerabilities, L4 Memory Safety Vulnerabilities 2; Discussion 2: Memory Safety | HW2 | HW1, Project 1 Checkpoint |
| [4](weeks/week-04.md) | L5 Mitigating Memory Safety Vulnerabilities, L6 Intro to Cryptography; Discussion 3: Memory Safety Mitigations | Project 1 (final) | Project 1 (final) |
| [5](weeks/week-05.md) | L7 One-Time Pads and Block Ciphers, L8 Block Cipher Modes of Operation; Discussion 4: Symmetric Cryptography | Project 2 Spec Quiz, HW3 | HW2, Project 2 Spec Quiz |
| [6](weeks/week-06.md) | L9 Cryptographic Hashes and MACs, L10 PRNGs and Diffie-Hellman Key Exchange; Discussion 5: Integrity and Authenticity | Project 2 Design Checkpoint | HW3 |
| [7](weeks/week-07.md) | L11 Public-Key Encryption and Digital Signatures, L12 Certificates/Passwords/Case Studies; Discussion 6: Asymmetric Cryptography | HW4 | HW4, Project 2 Design Checkpoint |
| [8](weeks/week-08.md) | L13 Introduction to Web, L14 Cookies and CSRF; Discussion 7: Cookies and CSRF; **Midterm** | Project 2 Testing Checkpoint, HW5 | — |
| [9](weeks/week-09.md) | L15 XSS and UI Attacks, L16 SQL Injection and CAPTCHAs; Discussion 8: SQL Injection and XSS | — | Project 2 Testing Checkpoint, HW5 |
| [10](weeks/week-10.md) | L17 Intro to Networking, L18 Low-Level Network Attacks; Discussion 9: ARP, DHCP, WPA | HW6 | Project 2 (final) |
| [11](weeks/week-11.md) | L19 BGP and Transport Layer (TCP/UDP), L20 TLS; Discussion 10: TCP and TLS | Project 3 | HW6 |
| [12](weeks/week-12.md) | L21 DNS, L22 DNSSEC; Discussion 11: DNS | HW7 | Project 3 |
| [13](weeks/week-13.md) | L23 Denial of Service and Firewalls, L24 Intrusion Detection; Discussion 12: Intrusion Detection | — | HW7 |
| [14](weeks/week-14.md) | L25 ML/AI Security, L26 Anonymity and Tor; no discussion (Thanksgiving) | — | — |
| [15](weeks/week-15.md) | L27 Phone Security, L28 (no content posted); Discussion 13: Tor and Firewalls | — | — |
| [16](weeks/week-16.md) | No lecture (RRR week) — topical review sessions | — | — |
| [17](weeks/week-17.md) | No lecture — **Final Exam** | — | — |

## Implementation — project code isn't committed here

Matching this repo's policy for every other code course, no project implementations live in this
repo — only the syllabus and links to the public specs/starter code.

- **Project 1 — Buffer overflow / binary exploitation.** Attack a vulnerable C program via
  memory-safety bugs on x86, then defeat/bypass common mitigations. Full spec, starter files, and
  a debugging guide are public: https://fa25.cs161.org/proj1/
- **Project 2 — Applied cryptography.** Design and implement a secure file-sharing system
  (encryption, authentication, key management) — the most substantial of the three, with staged
  checkpoints (spec quiz, design checkpoint, testing checkpoint, final). Full spec public:
  https://fa25.cs161.org/proj2/
- **Project 3 — Web and network security.** An 8-flag capture-the-flag style project spanning web
  exploitation (from earlier lecture topics) and network attacks. Full spec public:
  https://fa25.cs161.org/proj3/
- **Homeworks (HW1–7)** are real and count for a real portion of the grade, but as noted above,
  every homework on the current site is Gradescope-only — there's no public spec to self-study
  against, so `weeks/*.md` notes them as assigned/due without a usable link.

## Self-study access

No official non-enrolled grading path (no public autograder). Self-study is self-checked only:

- **Projects** are the strongest self-study artifact — full specs, starter code, and (for Project
  1 and 3) concrete flags/deliverables you can verify yourself without needing a grader.
- **Discussion worksheets** (14 of them) come with published solutions, so they're fully
  self-checkable — effectively a parallel problem-set track with an answer key, unlike the real
  homeworks.
- **Homeworks and Vitamins** have no public materials at all (Gradescope-only) — skip them or
  substitute the discussion worksheets, which cover similar material with solutions attached.
- **Midterm and Final Exam** have no public practice materials on the current site.
