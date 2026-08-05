---
university: CMU
code: 18-447
category: Systems
level: Intermediate
tags: [computer-architecture, pipelining, caches, mips]
---
# CMU 18-447 — Introduction to Computer Architecture

## Links

- Course site (Spring 2015, Onur Mutlu — his last CMU offering before moving to ETH Zürich): dead on
  the live web. `www.ece.cmu.edu/~ece447/s15/...` and `course.ece.cmu.edu/~ece447/s15/...` now
  blanket-301-redirect to the current (unrelated) James Hoe course page regardless of the requested
  sub-page. The full DokuWiki schedule survives on the Wayback Machine:
  https://web.archive.org/web/20150918225918/http://www.ece.cmu.edu/~ece447/s15/doku.php?id=schedule
- Syllabus (archived):
  https://web.archive.org/web/20151010031342/http://www.ece.cmu.edu/~ece447/s15/lib/exe/fetch.php?media=syllabus-18-447-mutlu-s15.pdf
- Lecture videos (YouTube, "Carnegie Mellon Computer Architecture" channel):
  https://www.youtube.com/playlist?list=PL5PHm2jkkXmi5CxxI7b3JCL1TWybTDtKq — all 33 numbered
  lectures plus recitations and midterm/final review sessions. Video IDs used in `weeks/` were
  pulled directly from the official wiki's own schedule page (each lecture row embeds its own
  `{{youtube>link:...}}` tag), not cross-referenced from a different year, so the mapping is exact.
  One session (the 4/29 Q&A Session) has no video in the official schedule — noted in
  `weeks/week-16.md`.
- Slides: hosted on the same dead course wiki, but 32 of the 33 numbered lecture decks are
  individually archived on the Wayback Machine (verified working, one URL per lecture in
  `weeks/`). Lecture 12 (Out-of-Order Execution)'s deck was never captured — only a dead
  redirect exists — noted in `weeks/week-05.md`.
- Third-party mirror with embedded video players and the course description:
  http://www.infocobuild.com/education/audio-video-courses/computer-science/18-447-spring2015-carnegie-mellon.html
- Lab handouts + starter code: https://github.com/juay-goh/18-447 — the course's own lab tarballs
  were never captured by the Wayback Machine (dead end), but this repo mirrors the genuine
  official Spring 2015 handouts: spec PDFs for all 8 labs (confirmed by their own CMU/CALCM
  copyright headers and "CMU 18-447 ... Spring 2015" title pages), plus real, unsolved starter
  code for labs 1, 2, 3, 5, and 6 (e.g. lab 1's `process_instruction()` is a 9-line empty stub, and
  lab 2's decoder only implements one instruction as a worked example — not a completed solution).
  Labs 4, 7, and 8 in this mirror are spec-only (7 and 8 include a compiled `refsim` reference
  simulator but no starter source).
- Textbook: **none required.** The syllabus recommends *Computer Organization and Design: The
  Hardware/Software Interface* (4th ed.) by Patterson & Hennessy as an optional supplement — it's
  paywalled, no free edition.

## Structure

- [weeks/](weeks/) — one file per week (`week-01.md` … `week-16.md`), matching the real Spring
  2015 schedule's own week numbering and pacing, with calendar dates stripped since this is
  self-paced. Spring break falls in week-09 (no content that week, noted in its file). Week 17
  (a lone Final Exam with no lecture) is folded into week-16's Due section rather than getting its
  own file.
- Lab code, if kept, should live inside the relevant week's file rather than a separate top-level
  directory.
- Homework problem sets (HW0–HW7) are mentioned in each week's Assigned/Due sections for pacing
  context, but their spec PDFs are **not linked** — every one of them (including the single file a
  prior pass thought had survived) resolves to a dead redirect on the Wayback Machine, and no
  GitHub mirror of them was found. They're flagged `no public spec found` rather than omitted
  silently.

## Weeks

| Week | Lectures | Lab | Due |
|---|---|---|---|
| [1](weeks/week-01.md) | Introduction, Fundamental Concepts & ISA, ISA Tradeoffs | Lab 1 assigned | — |
| [2](weeks/week-02.md) | ISA Tradeoffs (cont.) & MIPS ISA, Recitation 1 | Lab 2 assigned | Lab 1 |
| [3](weeks/week-03.md) | Intro to Microarchitecture, Multi-Cycle/Microprogrammed µArch, Pipelining | — | — |
| [4](weeks/week-04.md) | Pipelining II, Branch Prediction I, Branch Prediction II | Lab 3 assigned | Lab 2 |
| [5](weeks/week-05.md) | Recitation 2, Precise Exceptions, Out-of-Order Execution | — | — |
| [6](weeks/week-06.md) | OoO Execution & Data Flow, SIMD Processing, GPUs/VLIW/DAE | Lab 4 assigned | Lab 3 |
| [7](weeks/week-07.md) | Static Instruction Scheduling, Memory Hierarchy & Caches, Caches | Lab 5 assigned | — |
| [8](weeks/week-08.md) | High Performance Caches, Virtual Memory | — | Lab 4 |
| — | *Spring break* | | |
| [10](weeks/week-10.md) | Recitation 3, Midterm 1 Review | Lab 6 assigned | Midterm 1, Lab 5 |
| [11](weeks/week-11.md) | Main Memory, Memory Controllers, Memory Management | — | — |
| [12](weeks/week-12.md) | Simulation & Latency Tolerance, Prefetching, More Prefetching & NVM | Lab 7 assigned | Lab 6 |
| [13](weeks/week-13.md) | Multiprocessors, Memory Consistency & Cache Coherence, Cache Coherence | — | — |
| [14](weeks/week-14.md) | In-Memory Processing, Predictable Performance | Lab 8 assigned (extra credit) | — |
| [15](weeks/week-15.md) | Heterogeneous Systems, Midterm 2 Review | — | Midterm 2 |
| [16](weeks/week-16.md) | Interconnection Networks, Q&A Session, Final Review | — | Lab 7, Lab 8, Final Exam |

## Implementation

Lab code (a MIPS-like processor built up from a C functional simulator to a pipelined
SystemVerilog/RTL implementation with caches, branch prediction, and multicore cache coherence)
is kept in a separate private repo, matching mit-6.824's and cmu-15445's policy.

Starter code source: https://github.com/juay-goh/18-447

## Self-study access

No official non-enrolled grading path exists — the course used CMU Blackboard for grades and
(per the syllabus) in-person recitation check-offs for labs, neither of which is available outside
CMU. Labs are self-checked only: labs 6–8 in the GitHub mirror include a compiled `refsim`
reference simulator to diff your output against; earlier labs have no built-in grading and rely on
the provided test `inputs/` plus your own judgment.
