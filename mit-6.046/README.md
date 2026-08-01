# MIT 6.046J — Design and Analysis of Algorithms

## Links

- Course site (OCW): https://ocw.mit.edu/courses/6-046j-design-and-analysis-of-algorithms-spring-2015/
- Textbook: Cormen, Leiserson, Rivest, Stein, *Introduction to Algorithms* (CLRS), 3rd ed., MIT Press, 2009 — general reference (no per-lecture chapter map is published for this offering; each lecture's own notes are the primary reading).
- YouTube playlist (mirror): https://www.youtube.com/playlist?list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3oGp
- Internet Archive mirror (fallback if any OCW-hosted video ever disappears): https://archive.org/details/MIT6.046JS15
- Prerequisites (per the real course): mit-6.006 (Introduction to Algorithms) and 6.042J/18.062J (Math for CS).

## Offering: Spring 2015 (Erik Demaine, Srini Devadas, Nancy Lynch)

Chosen because it's the most complete package on OCW: full video for every lecture, typed and
(mostly) handwritten notes per lecture, 11 recitations with video, all 10 problem sets with
solutions, and both quizzes plus the final exam with solutions. All links were individually
verified to resolve — none are broken or behind a login.

**6.046J ≠ 6.854J.** "Advanced Algorithms" (6.854J/18.415J) is a separate, harder PhD-level
follow-on course that requires 6.046 as a prerequisite — it is not another name for this course.
No 6.854J OCW offering (2001, 2003, 2005, 2008 were checked) has a public video lecture set, so
if you're specifically after 6.854J content, OCW won't get you there; this syllabus is 6.046J.

## Structure

- [weeks/](weeks/) — one file per week (`week-01.md` … `week-12.md`). The real course interleaves
  lectures (L1–L24) and recitations (R1–R11) in a specific order tied to problem-set due dates;
  these week files preserve that exact interleaving (roughly 3 sessions/week), just with calendar
  dates stripped out. Recitation 3's video was never published by OCW ("Video for Recitation 3 is
  not available") — not a broken link, its notes are still there.

## Weeks

| Week | Sessions | Problem Set | Exam |
|---|---|---|---|
| [1](weeks/week-01.md) | L1 Overview/Interval Scheduling; L2 D&C: Convex Hull, Median Finding; R1 | PS1 assigned | — |
| [2](weeks/week-02.md) | L3 D&C: FFT; R2 B-trees; L4 D&C: van Emde Boas Trees | PS1 due; PS2 assigned & due; PS3 assigned | — |
| [3](weeks/week-03.md) | R3 Union-find; L5 Amortized Analysis; L6 Randomization: Matrix Multiply, Quicksort | PS3 due; PS4 assigned | — |
| [4](weeks/week-04.md) | R4 Randomized Median; L7 Skip Lists; L8 Universal & Perfect Hashing | PS4 due | — |
| [5](weeks/week-05.md) | R5 DP: More Examples; L9 Range Trees; L10 Advanced DP | PS5 assigned | Quiz 1 |
| [6](weeks/week-06.md) | L11 All-Pairs Shortest Paths; L12 MST; R6 Greedy: More Examples | PS5 due; PS6 assigned | — |
| [7](weeks/week-07.md) | L13 Max Flow, Min Cut; L14 Matching; R7 Flow/Matching Applications | PS6 due; PS7 assigned | — |
| [8](weeks/week-08.md) | L15 LP, Reductions, Simplex; L16 P/NP/NPC; R8 More Reductions | PS7 due | — |
| [9](weeks/week-09.md) | L17 Approximation Algorithms; L18 Fixed-Parameter Algorithms; R9 Approximations | PS8 assigned & due; PS9 assigned | Quiz 2 |
| [10](weeks/week-10.md) | L19 Sync. Distributed Algorithms; L20 Async. Distributed Algorithms; R10 | PS9 due; PS10 assigned | — |
| [11](weeks/week-11.md) | L21 Crypto: Hash Functions; L22 Crypto: Encryption; R11 | PS10 due | — |
| [12](weeks/week-12.md) | L23 Cache-Oblivious: Medians & Matrices; L24 Cache-Oblivious: Searching & Sorting | — | Final exam |
