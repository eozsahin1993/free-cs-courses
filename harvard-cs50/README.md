---
university: Harvard
code: CS50
category: Programming
level: Beginner
tags: [c, python, sql, web, intro-programming]
---
# Harvard CS50 — Introduction to Computer Science (CS50x)

Deliberate exception to this repo's usual grad-level focus, same as `mit-6.0001` — kept because
it's the standard on-ramp many self-study learners want before the grad-level courses here.

## Links

- Course site: https://cs50.harvard.edu/x/2026/ — CS50x, the free, fully self-paced OpenCourseWare
  edition of Harvard's on-campus CS50 (same lectures/problem sets as the College course, no
  enrollment deadlines). This is the **current** offering, not an older archived year.
- Lecture videos (YouTube, official course channel): full 13-item playlist, current 2026 offering
  — https://www.youtube.com/playlist?list=PLhQjrBD2T380hlTqAU8HfvVepCcjCqTg6. All 11 weeks (0
  through 10) plus the standalone Artificial Intelligence lecture are covered — this is a 100%
  match, not a reconstructed mapping across years. There's also a bonus "Introduction" video (not
  tied to a specific week) at the start of the playlist.
- Problem sets: https://cs50.harvard.edu/x/2026/psets/ — 10 problem sets (0 through 9), each with
  a public spec page linked per-week below.
- Notes: https://cs50.harvard.edu/x/2026/notes/ — per-lecture written notes, one per week
  (including the AI week), linked alongside video in each `weeks/*.md`.
- Development environment: cs50.dev — a free, browser-based GitHub Codespace preconfigured with
  everything needed (no local install, no payment, just a free GitHub account).
- No assigned textbook — the course is entirely lecture + notes + problem sets.

## Structure

- [weeks/](weeks/) — one file per week (`week-01.md` … `week-12.md`), covering CS50's own Week 0
  through Week 10 plus the standalone Artificial Intelligence week (which sits between Week 7 and
  Week 8 in the real course, with its own lecture but no numbered problem set) — 12 files total.
  File numbering is 1-indexed for consistency with the rest of this repo, but each file's title
  and content preserve CS50's own 0-indexed week/pset numbers (`week-01.md` covers CS50's "Week
  0," problem sets start at "Problem Set 0," etc.) — matches the convention already used for
  `mit-6.0001`. No calendar dates, since CS50x itself is already fully self-paced with no
  deadlines by default. Problem set code, if kept, lives inside the relevant week's file rather
  than a separate top-level directory.

## Weeks

| Week | Topic | Problem Set |
|---|---|---|
| [1](weeks/week-01.md) | Scratch | Pset 0 |
| [2](weeks/week-02.md) | C | Pset 1 |
| [3](weeks/week-03.md) | Arrays | Pset 2 |
| [4](weeks/week-04.md) | Algorithms | Pset 3 |
| [5](weeks/week-05.md) | Memory | Pset 4 |
| [6](weeks/week-06.md) | Data Structures | Pset 5 |
| [7](weeks/week-07.md) | Python | Pset 6 |
| [8](weeks/week-08.md) | SQL | Pset 7 |
| [9](weeks/week-09.md) | Artificial Intelligence | — (no numbered pset) |
| [10](weeks/week-10.md) | HTML, CSS, JavaScript | Pset 8 |
| [11](weeks/week-11.md) | Flask | Pset 9 |
| [12](weeks/week-12.md) | The End | Final Project |

## Implementation

Problem set code is kept in a separate private repo, not published here, matching this repo's
policy for every other code course. CS50 additionally runs everything through its own tools:
`cs50.dev` (a GitHub Codespace) for development, and `check50`/`style50`/`submit50` for
correctness-checking, style-linting, and submission respectively.

## Self-study access

Fully self-checkable without any Harvard enrollment or payment:
- **check50** and **style50** are open-source, pip-installable
  (https://github.com/cs50/check50, https://github.com/cs50/style50) and run entirely locally —
  they give the same correctness/style feedback CS50's own grading uses, with no account needed
  at all.
- **cs50.dev** (the Codespace environment) requires only a free GitHub account — no Harvard login,
  no payment.
- **submit50** requires a free GitHub account to record an official submission — this is only
  needed if you want the optional edX/CS50-tracked certificate; check50 alone is sufficient to
  verify your own work is correct.
