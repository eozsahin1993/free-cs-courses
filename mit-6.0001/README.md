---
university: MIT
code: 6.0001
category: Programming
level: Beginner
tags: [python, intro-programming]
---
# MIT 6.0001 — Introduction to Computer Science and Programming in Python

## Links

- Course site: https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/
  (Fall 2016, Ana Bell, Eric Grimson, John Guttag) — syllabus/calendar, all 12 lecture slide
  decks + code, 6 problem sets, and full lecture video.
- Lecture videos (YouTube, MIT OpenCourseWare channel): full 12-lecture archive, same Fall 2016
  offering as the rest of the course site — no year-mismatch to reconcile. Every lecture verified
  individually (title + official "MIT OpenCourseWare" channel + resolving OCW resource page)
  before being linked in `weeks/*.md`. Entry point: https://www.youtube.com/watch?v=nykOeWgQcHM
- Textbook: John Guttag, *Introduction to Computation and Programming Using Python: With
  Application to Understanding Data*, 2nd ed. (MIT Press, 2016) — print/e-book only, no free
  copy; `weeks/*.md` doesn't cite chapter numbers since no page mapping is published on OCW.
- No exams page on OCW — the midterm and final quizzes are in-class only, nothing public.

## Structure

- [weeks/](weeks/) — one file per week (`week-01.md` … `week-06.md`). The real course is a
  **half-semester** course: 2 lecture sessions/week + 1 recitation/week, 12 lecture sessions
  total over 6 weeks, with calendar dates stripped since this is meant to be worked through at
  your own pace. Recitations aren't separately itemized here — OCW doesn't publish distinct
  recitation materials for this course, only the 12 numbered lecture sessions. Assignment code,
  if kept, lives inside the relevant week's file rather than a separate top-level directory.

## Weeks

| Week | Lectures | Assigned | Due |
|---|---|---|---|
| [1](weeks/week-01.md) | S1 What is Computation?, S2 Branching and Iteration | Pset 0, Pset 1 | — |
| [2](weeks/week-02.md) | S3 String Manipulation, Guess and Check, Approximations, Bisection; S4 Decomposition, Abstraction, and Functions | Pset 2 | Pset 0 |
| [3](weeks/week-03.md) | S5 Tuples, Lists, Aliasing, Mutability, and Cloning; S6 Recursion and Dictionaries | Pset 3 | Pset 1 |
| [4](weeks/week-04.md) | S7 Testing, Debugging, Exceptions, and Assertions; S8 Object Oriented Programming | — | Pset 2, Quiz 1 |
| [5](weeks/week-05.md) | S9 Python Classes and Inheritance; S10 Understanding Program Efficiency, Part 1 | Pset 4, Pset 5 | Pset 3, Pset 4 |
| [6](weeks/week-06.md) | S11 Understanding Program Efficiency, Part 2; S12 Searching and Sorting | — | Pset 5, Final Quiz |

## Implementation — problem set code isn't committed here

Matching this repo's policy for every other code course, no problem set implementations live
in this repo — only the syllabus and links to the public specs/starter code.

- **6 problem sets** (Pset 0–5, 30% of the real grade) — each a short Python programming
  exercise (guess-and-check numeric algorithms, decomposition/functions, recursion, OOP,
  efficiency, searching/sorting). Specs and starter code are public on OCW; per-lecture code
  files (matching each lecture's live-coded examples) are also public via the
  [Lecture Slides and Code](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/pages/lecture-slides-code/)
  page.
- **Finger exercises** (10% of the real grade, in-class) aren't separately published as a
  standalone resource — treat the "In-Class Questions and Video Solutions" pages (available for
  lectures 1–5 and 7–9) as the closest public equivalent.

## Self-study access

No official non-enrolled grading path (no autograder is public) and **no problem set solutions
are posted** — OCW explicitly states this. Self-study is self-checked only: each problem set
specifies expected behavior/output precisely enough to verify your own implementation by running
it against the spec's examples. The midterm and final quizzes have no public materials at all
(no exams page), so they aren't usable for self-study.
