---
category: Systems
level: Intermediate
tags: [compilers]
---
# Stanford CS143 — Compilers

## Links

- Course site: https://web.stanford.edu/class/cs143/
- Syllabus/schedule: https://web.stanford.edu/class/cs143/syllabus.html
- Course info (grading, staff, textbook): https://web.stanford.edu/class/cs143/course_info.html
- Textbook: none required. *Compilers: Principles, Techniques, and Tools* (Aho, Lam, Sethi, Ullman —
  the "Dragon Book") is listed as an optional reference; paywalled, no free link.
- Lecture videos: the current (Spring 2026) lectures aren't recorded/posted publicly. This
  syllabus instead links the YouTube playlist "Compilers - Alex Aiken | Stanford"
  (https://www.youtube.com/playlist?list=PLEAYkSg4uSQ3yc_zf_f1GOxl5CZo0LVBb, channel
  `@compilercourse1974`) — Aiken's self-paced Coursera-era recording, split into short
  (3–25 min) numbered segments per topic. Segment numbering (`01 …`, `02 …`, …) maps directly
  onto the current 18-lecture on-campus numbering — **but the playlist only goes up through
  lecture 14** (Local Optimization); lectures 15–18 (Global Optimization, Register Allocation,
  Garbage Collection, and whatever lecture 18 ends up being) have no video on this playlist and
  no other verified official recording was found — flagged rather than filled in with an
  unverified reupload. See `weeks/week-08.md` through `week-10.md`.
- Handouts (assignments, lecture slides, Cool manual/tour/runtime, SPIM manual): linked inline in
  each week's file. All are publicly reachable, no login required.

## Structure

- [weeks/](weeks/) — one file per week (`week-01.md` … `week-10.md`), each self-contained: that
  week's lecture(s) with slides/video, and any programming/written assignment assigned or due.
  Mirrors the real Spring 2026 schedule's pacing (Stanford quarter, Tue/Thu lectures), calendar
  dates stripped since this is meant to be worked through at your own pace. The in-class midterm
  falls in week 5 and the final exam is after week 10 — both noted in their respective files.

Project code, if kept, should live inside the relevant week's file rather than a separate
top-level directory — status is more useful next to the assignment link than split out.

## Weeks

| Week | Lectures | Assigned | Due |
|---|---|---|---|
| [1](weeks/week-01.md) | Course Overview, Cool: The Course Project | — | — |
| [2](weeks/week-02.md) | Lexical Analysis, Finite Automata | PA1, WA1 | — |
| [3](weeks/week-03.md) | Introduction to Parsing, Syntax-Directed Translation | PA2, WA2 | PA1, WA1 |
| [4](weeks/week-04.md) | Top-Down Parsing & Bottom-Up Parsing I, Bottom-Up Parsing II | — | WA2 |
| [5](weeks/week-05.md) | Semantic Analysis and Type Checking I, In-class Midterm | PA3 | PA2 |
| [6](weeks/week-06.md) | Type Checking II, Runtime Organization | — | — |
| [7](weeks/week-07.md) | Code Generation, Operational Semantics | WA3, PA4 | PA3 |
| [8](weeks/week-08.md) | Local Optimization, Global Optimization | WA4 | WA3 |
| [9](weeks/week-09.md) | Register Allocation, Garbage Collection | — | PA4 |
| [10](weeks/week-10.md) | Lecture 18 (TBD), Last Day of Classes | — | WA4, PA5 (extra credit) |
| — | *Final Exam* (after week 10) | — | — |

## Implementation

The 4 required programming assignments build a single compiler for Cool (Stanford's teaching
language) in C++, in stages: PA1 lexer (flex), PA2 parser (bison), PA3 static semantics/type
checking, PA4 code generation (targets MIPS, run via the SPIM simulator). PA5 is optional extra
credit. Code, if kept, lives in a separate private repo, matching the same policy used for the
other courses here.

## Self-study access

No official non-enrolled grading path (unlike 15-445's Gradescope self-study section) was found.
The course is fully self-checkable anyway: every handout (PA1–PA5, WA1–WA4) is public, all four
written-assignment solutions (`WA1sol.pdf`–`WA4sol.pdf`) are posted alongside the assignments, and
past midterms/finals are posted with solutions too. Programming assignments are self-verified by
running your own Cool compiler against test programs (the Cool reference manual and tour are
public) rather than a submission autograder.
