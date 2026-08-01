---
category: Systems
level: Advanced
tags: [performance, parallelism]
---
# MIT 6.172 — Performance Engineering of Software Systems

## Links

- Course site: https://ocw.mit.edu/courses/6-172-performance-engineering-of-software-systems-fall-2018/
  (Fall 2018, Charles Leiserson & Julian Shun) — syllabus, calendar, all 23 lecture slide decks,
  10 homeworks, 4 projects, and practice quizzes.
- Lecture videos (YouTube, MIT OpenCourseWare channel): full 23-lecture archive, same Fall 2018
  offering as everything else on the course site — no year-mismatch to reconcile, unlike some
  other courses in this repo. Playlist entry point:
  https://www.youtube.com/watch?v=o7h_sYMk_oc — every lecture verified individually (title +
  official "MIT OpenCourseWare" channel) before being linked in `weeks/*.md`.
- Prerequisites: 6.004 (Computation Structures), 6.006 (Introduction to Algorithms), 6.031
  (Software Construction). The course itself is taught in C.
- Textbook: none assigned — "reading materials will be posted on the class website." The
  readings page (https://ocw.mit.edu/courses/6-172-performance-engineering-of-software-systems-fall-2018/pages/readings/)
  lists supplemental papers (GraphIt, OpenTuner, Cilk++, cache-oblivious algorithms, etc.), not
  organized per-lecture and not required — `weeks/*.md` doesn't cite them.

## Structure

- [weeks/](weeks/) — one file per week (`week-01.md` … `week-15.md`), matching the real Fall 2018
  calendar's pacing (23 lectures + 10 recitations across 14 weeks of instruction, then a
  presentations-only week 15), with calendar dates stripped since this is meant to be worked
  through at your own pace. Assignment/project code, if kept, lives inside the relevant week's
  file rather than a separate top-level directory — see "Implementation" below for what's
  actually committed here (nothing).

## Weeks

| Week | Lectures | Assigned | Due |
|---|---|---|---|
| [1](weeks/week-01.md) | L1 Introduction and Matrix Multiplication; R1 Basic Tools | HW1 | — |
| [2](weeks/week-02.md) | L2 Bentley Rules for Optimizing Work, L3 Bit Hacks; R2 Profiling | HW2, Project 1 Beta | HW1 |
| [3](weeks/week-03.md) | L4 Assembly Language & Computer Architecture, L5 C to Assembly | HW3, Project 1 Final | HW2, Project 1 Beta |
| [4](weeks/week-04.md) | L6 Multicore Programming, L7 Races and Parallelism; R3 Cilk and Reducers | HW4 | HW3, Project 1 (MITPOSSE code review) |
| [5](weeks/week-05.md) | L8 Analysis of Multithreaded Algorithms, L9 What Compilers Can and Cannot Do; R4 Analysis | HW5, Project 2 Beta | HW4, Project 1 Final |
| [6](weeks/week-06.md) | L10 Measurement and Timing; R5 Quiz Review | Project 2 Final | HW5, Project 2 Beta |
| [7](weeks/week-07.md) | L11 Storage Allocation; R6 Memory Allocation | HW6 | Quiz 1 |
| [8](weeks/week-08.md) | L12 Parallel Storage Allocation, L13 The Cilk Runtime System; R7 Compiler Instrumentation | HW7, Project 3 Beta | HW6, Project 2 Final |
| [9](weeks/week-09.md) | L14 Caching and Cache-Efficient Algorithms, L15 Cache-Oblivious Algorithms; R8 Caching | HW8, Project 3 Final | HW7, Project 3 Beta |
| [10](weeks/week-10.md) | L16 Nondeterministic Parallel Programming, L17 Synchronization Without Locks; R9 Deterministic Execution | HW9 | HW8, Project 3 (MITPOSSE code review) |
| [11](weeks/week-11.md) | L18 Domain Specific Languages and Autotuning, L19 Leiserchess Codewalk; R10 Quiz Review | Project 4 Beta 1 | HW9, Project 3 Final |
| [12](weeks/week-12.md) | No lectures/recitations | — | Quiz 2 |
| [13](weeks/week-13.md) | L20 Speculative Parallelism & Leiserchess, L21 Tuning a TSP Algorithm (guest lecture); Recitation: Synchronization Primitives | HW10, Project 4 Beta 2 | Project 4 Beta 1 |
| [14](weeks/week-14.md) | L22 Graph Optimization, L23 High Performance in Dynamic Languages (guest lecture) | Project 4 Final | HW10, Project 4 Beta 2 |
| [15](weeks/week-15.md) | No lectures/recitations | — | Student presentations, Project 4 (final code + MITPOSSE review) |

## Implementation — homework/project code isn't committed here

Matching this repo's policy for every other code course (mit-6.824, cmu-15445, etc.), no
homework or project implementations live in this repo — only the syllabus and links to the
public specs/starter code. If you work through it, keep the code in a separate private repo.

- **Homeworks** (10, ~10% of the real grade) are short tool/technique exercises — profiling a
  serial merge sort, vectorizing code, using Cilk reducers, writing a custom allocator, etc.
  Specs are public on OCW; several are self-checkable against expected output, and none has a
  published official solution.
- **Projects** (4, ~58% of the real grade) are the substantial hands-on work: Project 1 (bit
  hacks), Project 2 (collision detection), Project 3 (serial dynamic memory allocator), and
  Project 4 (Leiserchess — a term-long parallel chess engine, beta/final submissions). All four
  have public assignment pages and starter-code ZIPs on OCW. In the real course these are graded
  by runtime performance and reviewed by industry volunteers ("MITPOSSE"); self-study has no
  equivalent review step, but the specs, starter code, and performance targets are all public,
  so you can benchmark your own solution against the assignment's stated goals.

## Self-study access

No official non-enrolled grading path (no Gradescope-style autograder is public). Self-study
options:
- **Practice quizzes** (4, at https://ocw.mit.edu/courses/6-172-performance-engineering-of-software-systems-fall-2018/pages/quizzes/):
  3 of the 4 have published solutions; Practice Quiz 3 has none.
- **Homeworks/projects**: self-check against the assignment's stated correctness/performance
  targets — no official answer key, but several homeworks (e.g. profiling, vectorization) have
  an objectively measurable "did it get faster" outcome.
