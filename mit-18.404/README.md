---
category: Algorithms & Data Structures
level: Intermediate
tags: [theory-of-computation, computability, complexity-theory, automata]
---
# MIT 18.404J — Theory of Computation

## Links

- Course site (OCW): https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/
  (Fall 2020, Michael Sipser) — syllabus, calendar, all 26 lectures' notes, all 6 problem sets,
  and sample midterm/final exams with solutions.
- Textbook: Sipser, *Introduction to the Theory of Computation*, 3rd ed., Cengage Learning, 2012,
  ISBN 9781133187790 — a paywalled commercial textbook, no free copy exists, so no link is given;
  `weeks/*.md` cite chapter/section numbers instead. The syllabus covers chapters 1, 2 (except
  2.4), 3, 4, 5, 6.1, 7, 8, 9.1, 9.2, 10.2 (except primality), and 10.4 through Theorem 10.33.
- YouTube playlist: https://www.youtube.com/playlist?list=PLUl4u3cNGP60_JNv2MmK3wkOt9syvfQWY —
  25 of the 26 lectures are recorded and posted (there's no video for lecture 13; that session was
  the in-class midterm exam, not a lecture). Every video ID was checked individually against its
  lecture number and topic.
- Archive.org mirror (fallback if any OCW-hosted video ever disappears):
  https://archive.org/details/MIT18.404F20

## Structure

- [weeks/](weeks/) — one file per week (`week-01.md` … `week-14.md`), following the real Fall 2020
  pacing of 2 lectures/week (26 lectures total) plus a midterm session and a final exam, with
  calendar dates stripped out since this is meant to be worked through at your own pace.

## Weeks

| Week | Lectures | Problem Set | Exam |
|---|---|---|---|
| [1](weeks/week-01.md) | L1 Intro, Finite Automata, Regular Expressions; L2 Nondeterminism, Closure Properties | — | — |
| [2](weeks/week-02.md) | L3 Regular Pumping Lemma, FA↔Regex; L4 Pushdown Automata, CFG↔PDA | — | — |
| [3](weeks/week-03.md) | L5 CF Pumping Lemma, Turing Machines; L6 TM Variants, Church-Turing Thesis | PS1 due | — |
| [4](weeks/week-04.md) | L7 Decision Problems for Automata/Grammars; L8 Undecidability | — | — |
| [5](weeks/week-05.md) | L9 Reducibility; L10 Computation History Method | PS2 due | — |
| [6](weeks/week-06.md) | L11 Recursion Theorem and Logic; L12 Time Complexity | PS3 due | — |
| [7](weeks/week-07.md) | L13 (no lecture); L14 P and NP, SAT, Poly-Time Reducibility | — | Midterm Exam |
| [8](weeks/week-08.md) | L15 NP-Completeness; L16 Cook-Levin Theorem | PS4 due | — |
| [9](weeks/week-09.md) | L17 Space Complexity, PSPACE, Savitch's Theorem; L18 PSPACE-Completeness | — | — |
| [10](weeks/week-10.md) | L19 Games, Generalized Geography; L20 L and NL, NL = coNL | PS5 due | — |
| [11](weeks/week-11.md) | L21 Hierarchy Theorems; L22 Provably Intractable Problems, Oracles | — | — |
| [12](weeks/week-12.md) | L23 Probabilistic Computation, BPP; L24 Probabilistic Computation (cont.) | — | — |
| [13](weeks/week-13.md) | L25 Interactive Proof Systems, IP; L26 coNP ⊆ IP | PS6 due | — |
| [14](weeks/week-14.md) | — | — | Final Exam |

## Format — proof-based problem sets, not code

18.404J has no programming labs. All six problem sets are written mathematical proofs (automata
constructions, undecidability/NP-hardness reductions, complexity-class arguments) worked directly
from Sipser's textbook, submitted as PDF/scanned handwritten or typeset (e.g. LaTeX) work — there
is no BusTub/MapReduce-style codebase to keep out of this repo.

## Self-study access

All six problem sets are public PDFs on OCW, but **no solutions are published** for them — only
the sample midterm and sample final exams have solutions posted. Self-check problem-set work
against Sipser's textbook (worked examples and the theorems each problem builds on) rather than an
answer key. The sample exams (with solutions) are the only official self-check mechanism; treat
each problem set as self-graded.
