---
university: MIT
code: 6.858
category: Systems
level: Advanced
tags: [security]
---
# MIT 6.858 — Computer Systems Security

## Links

- Course site (current, Spring 2026): https://css.csail.mit.edu/6.5660/2026/ — course number has
  changed twice since this course was widely known as "6.858": it became **6.5660** for the
  2023/2024 offerings under MIT's course-renumbering initiative, then **6.566** starting with the
  2026 offering. This repo keeps the historical `6.858` name/directory since that's what the
  course is still commonly referenced by, but the schedule, labs, and links below all come from
  the current (2026) site.
- Lecture videos (YouTube): https://www.youtube.com/playlist?list=PLA6Ht2dJt3SId7vE9P5mppWdj65_l6hl7
  — the Spring 2026 offering's own lectures, publicly posted, covering the exact syllabus used
  here (no cross-year topic mapping needed). One exception: Lecture 19 ("Information security in
  real life", guest Colby Morgan) is recorded only to the internal MIT Panopto system and has no
  public copy — noted in `weeks/week-13.md`.
- Lab starter code: https://github.com/mit-pdos/6.566-lab-2026 — public GitHub repo with the
  `zoobar`/`zookws` codebase used across all 5 labs.
- Past quizzes + solutions: https://css.csail.mit.edu/6.5660/2026/quiz.html — self-study exams
  going back to Fall 2009, each with a published solution.
- Textbook: none — the course is entirely paper-based; each lecture assigns one reading (a
  research paper, an RFC/blog post, or a vendor security whitepaper), linked from that lecture's
  page in `weeks/*.md`.

## Structure

- [weeks/](weeks/) — one file per week (`week-01.md` … `week-15.md`), each self-contained: that
  week's lecture(s), assigned reading(s), and anything assigned/due. Mirrors the real Spring 2026
  schedule's pacing and ordering (20 lectures across 15 weeks), with calendar dates stripped since
  this is meant to be worked through at your own pace. Spring break falls between week-07 and
  week-08 (Mar 23–27) — noted as a dash row in the table below and in `weeks/week-07.md`, with no
  separate file, matching mit-6.824's convention. One lecture slot (Feb 24) was cancelled for
  a snow day in the real 2026 semester with no makeup content — noted in `weeks/week-04.md`, no
  lecture number was ever assigned to it.

Lab code, if kept, should live inside the relevant week's file rather than a separate top-level
directory.

## Implementation

Labs build on a shared `zoobar`/`zookws` codebase (a toy web app for trading "zoobars" between
users) across all five assignments — buffer overflow attacks, privilege separation, symbolic
execution for bug-finding, browser/web security, and HTTPS + WebAuthn. Starter code is public
(linked above); lab write-ups/solutions are kept in a separate private repo, not published here,
per course policy against sharing solutions publicly (explicitly requested on the course site:
"please do not publish your code or make it available to current or future students").

## Self-study access

Unlike most self-paced courses in this repo, 6.858 has an official non-enrolled path:
- **Labs** are graded by an autograder (Makefile + grading scripts) — the same ones enrolled
  students use — and can be submitted to the course's Gradescope instance using the public entry
  code posted on the course site (`labs/handin.html`).
- **Quizzes** (1 midterm-style quiz + 1 final) have 16+ years of past exams with published
  solutions for self-checking, since the current-year quiz/final aren't released with solutions
  until after the semester ends.
- **Reading questions** (a short homework question per lecture, due before class) have no
  published answer key — self-check against the paper.

## Weeks

| Week | Lectures | Assigned | Due |
|---|---|---|---|
| [1](weeks/week-01.md) | Introduction/Threat Models, OS and VM Isolation | Lab 1 (Buffer Overflows) | — |
| [2](weeks/week-02.md) | Software Fault Isolation, Trusted Hardware | — | — |
| [3](weeks/week-03.md) | *(no lecture — Presidents Day week)* | Lab 2 (Privilege Separation) | Lab 1 parts 1–2 |
| [4](weeks/week-04.md) | Privilege Separation | — | Lab 1 all parts, Lab 2 part 1 |
| [5](weeks/week-05.md) | Data Center Infrastructure, Mobile Phone Security | — | Lab 2 parts 2–3 |
| [6](weeks/week-06.md) | Web Security Model, Buffer Overflow Defenses | Lab 3 (Symbolic Execution) | Lab 2 all parts |
| [7](weeks/week-07.md) | Symbolic Execution | Lab 4 (Browser Security) | Quiz 1 |
| — | *Spring break* | | |
| [8](weeks/week-08.md) | Supply Chain Security (guest: Russ Cox) | — | Lab 3 part 1 |
| [9](weeks/week-09.md) | Network Security, Secure Channels | Lab 5 (HTTPS + WebAuthn) | Lab 3 all parts |
| [10](weeks/week-10.md) | Certificates, User Authentication | — | Lab 4 part 1 |
| [11](weeks/week-11.md) | *(no lecture — Patriots Day week)* | — | Lab 4 all parts |
| [12](weeks/week-12.md) | Decentralized Key Management (guest: Max Krohn), AI Agent Security (guest: Anish Athalye) | — | Lab 5 part 1 |
| [13](weeks/week-13.md) | Messaging Security, Information Security in Real Life (guest: Colby Morgan) | — | Lab 5 all parts |
| [14](weeks/week-14.md) | Anonymous Communication | — | — |
| [15](weeks/week-15.md) | *(no lecture — finals week)* | — | Final Exam |
