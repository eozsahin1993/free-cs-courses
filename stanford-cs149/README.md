---
category: Systems
level: Advanced
tags: [parallel-computing, gpu, cuda]
---
# Stanford CS149 — Parallel Computing

## Links

- Course site: https://gfxcourses.stanford.edu/cs149/fall25/ (Fall 2025 offering, taught by Kayvon
  Fatahalian and Kunle Olukotun)
- Lecture videos (YouTube): https://www.youtube.com/playlist?list=PLoROMvodv4rMp7MTFr4hQsDEcX7Bx6Odp
  — the course site says this outright: "We cannot distribute lecture videos to the public this
  year, but videos from a prior version of the course (2023) are available on Stanford's YouTube
  Channel." That 2023 recording (19 lectures) is what every week file below links to. Matched by
  topic, not lecture number (numbering drifts year to year): 14 of 18 Fall 2025 lectures have a
  clear same-topic 2023 video, 2 more (`week-02.md`'s Lecture 4, `week-06.md`'s Lecture 11) have a
  same-*area* but differently-titled 2023 counterpart, and 2 (`week-06.md`'s Lecture 13,
  `week-06.md`'s Lecture 12 — both newer AI/datacenter-scale content) have no 2023 counterpart at
  all and are marked `none`.
- Slides: linked individually per lecture from the course site itself
  (`gfxcourses.stanford.edu/cs149/fall25/lecture/<topic>/`) — these ARE the current Fall 2025
  deck, unlike the videos.
- Programming assignments: https://github.com/stanford-cs149/asst1 (and `asst2`, `asst3`,
  `asst4-trainium2`, `asst5-kernels` in the same `stanford-cs149` GitHub org) — public repos, no
  Stanford login needed. Assignment 1 profiles a quad-core CPU, 2 schedules task graphs, 3 is a
  CUDA circle renderer, 4 targets a Trainium2 accelerator, 5 is CUDA kernel optimization.
- Written assignments: PDFs hosted directly on the course site (linked from each relevant week),
  e.g. https://gfxcourses.stanford.edu/cs149/fall25content/static/pdfs/written_asst1.pdf
- Textbook: none required. The course site suggests *Computer Architecture, 6th ed.: A
  Quantitative Approach* (Hennessy & Patterson) as optional, paywalled supplementary reading for
  architecture background — not linked here since it isn't free.

## Structure

- [weeks/](weeks/) — one file per week (`week-01.md` … `week-10.md`), matching Stanford's 10-week
  quarter pacing (2 lectures/week, Tue/Thu, with two single-lecture weeks — `week-07.md` and
  `week-09.md` — where the real schedule only met once). Calendar dates are stripped since this is
  meant to be worked through at your own pace. Thanksgiving break falls right after
  `week-09.md`'s lecture — noted there rather than given its own file.

Programming/written assignment work, if kept, should live inside the relevant week's file rather
than a separate top-level directory — status is more useful next to the assignment link than
split out.

## Weeks

| Week | Lectures | Assigned | Due |
|---|---|---|---|
| [1](weeks/week-01.md) | Why Parallelism? Why Efficiency?; A Modern Multi-Core Processor (Part I) | PA1 | — |
| [2](weeks/week-02.md) | Multi-Core Architecture (Part II) + ISPC; Parallelizing Code: An Example Thought Process | Written 1 | — |
| [3](weeks/week-03.md) | Program Optimization 1: Work Distribution and Scheduling; Program Optimization 2: Locality and Communication | PA2, Written 2 | PA1, Written 1 |
| [4](weeks/week-04.md) | GPU Architecture and CUDA Programming; Data-Parallel Thinking | PA3 | PA2 |
| [5](weeks/week-05.md) | Efficiently Evaluating DNNs on GPUs; Hardware Specialization | Written 3 | Written 2 |
| [6](weeks/week-06.md) | Programming Systems for Specialized Hardware; Mapping AI Applications to the Datacenter; Domain-Specific Programming Systems and AI-Driven Performance Optimization | PA4 | PA3 |
| [7](weeks/week-07.md) | Cache Coherence | Written 4 | Written 3 |
| [8](weeks/week-08.md) | Implementing Synchronization + Memory Consistency; Fine-Grained Locking and Lock-Free Programming | PA5 | PA4 |
| [9](weeks/week-09.md) | Transactional Memory (Part I) | — | — |
| [10](weeks/week-10.md) | Transactional Memory (Part II) + AMA | — | Written 4, PA5, Final exam |

Note: week 6 bundles 3 lectures (11–13) since Lecture 13 is short/topically adjacent to 11–12 in
the current syllabus and there's no clean 2-lecture split point there; every other week is 2
lectures, matching the real Tue/Thu pacing.

## Implementation

Programming assignment code is kept in a separate private repo (not published here), matching the
policy used for the other code-based courses in this collection.

## Self-study access

No official non-enrolled grading path was found — Gradescope submission is enrollment-only, and
there's a midterm + final exam as part of the grade (12% and 16% respectively) that self-study
learners obviously can't sit. The programming assignments are still fully workable standalone
though: each GitHub repo includes the assignment's own correctness/performance checking scripts,
so you can verify your solution without the class infrastructure.
