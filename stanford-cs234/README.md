# Stanford CS234 — Reinforcement Learning

## Links

- Course site: https://web.stanford.edu/class/cs234/ (Winter 2026, taught by Emma Brunskill)
- Lecture materials (slides): https://web.stanford.edu/class/cs234/modules.html — each lecture has
  a pre-class and post-class (annotated) slide deck.
- Assignments: https://web.stanford.edu/class/cs234/assignments.html — specs/starter code hosted
  at `cs234.stanford.edu/assignments/a{1,2,3}/`.
- Course schedule: https://web.stanford.edu/class/cs234/index.html ("Draft Course Schedule"
  section) — the week-by-week table this syllabus's pacing is based on. Note the schedule table
  and the modules page don't perfectly agree on which calendar session maps to which lecture
  number (e.g. the schedule shows only two "Policy Search" sessions before moving on, while
  modules.html groups three lecture decks — 5, 6, 7 — under "Policy Gradient"); where that's
  ambiguous, the week file says so and matches by topic instead of forcing a number.
- Lecture videos: Winter 2026 recordings are Canvas-restricted. This syllabus links the **Spring
  2024** YouTube playlist instead
  (https://www.youtube.com/playlist?list=PLoROMvodv4rN4wG6Nk6sNpTEbuOSosZdX) — the most recent
  public recording, also taught by Brunskill, whose 16-lecture topic sequence (MDPs → policy
  evaluation → Q-learning → policy gradient → offline RL/RLHF → exploration → multi-agent/game
  playing → value alignment) covers the same core curriculum as Winter 2026, though the two years
  don't split topics into lectures identically. The Winter 2026 guest lecture on world modeling
  (Shane Gu) has no counterpart in the 2024 playlist — noted in that week's file.
- Textbook: Sutton & Barto, *Reinforcement Learning: An Introduction* (2nd ed.), free —
  http://incompleteideas.net/book/RLbook2018.pdf. No other textbook is required; a few lectures
  also point at Lattimore & Szepesvári's free *Bandit Algorithms* —
  https://tor-lattimore.com/downloads/book/book.pdf.
- Prerequisite review handouts (linked from Lecture 1): linear algebra
  http://cs229.stanford.edu/section/cs229-linalg.pdf, probability
  http://cs229.stanford.edu/section/cs229-prob.pdf.

## Structure

- [weeks/](weeks/) — one file per week (`week-01.md` … `week-11.md`), matching the real Winter
  2026 schedule's own pacing (an 11-week quarter, including two lecture-free weeks: a midterm week
  and a final-writeup week), with calendar dates stripped since this is meant to be worked through
  at your own pace.

Assignment code/write-ups, if kept, live inside the relevant week's file rather than a separate
top-level directory.

## Weeks

| Week | Lectures | Assigned | Due |
|---|---|---|---|
| [1](weeks/week-01.md) | Introduction to RL; Tabular MDP Planning | Assignment 1 | — |
| [2](weeks/week-02.md) | Tabular RL Policy Evaluation; Q-learning & Function Approximation | Assignment 2 | Assignment 1 |
| [3](weeks/week-03.md) | Policy Gradient (Policy Search, part 1) | — | — |
| [4](weeks/week-04.md) | Policy Gradient (parts 2–3); Imitation Learning & Learning from Human Input & Batch RL | — | Assignment 2 |
| [5](weeks/week-05.md) | Data-Efficient RL (Offline RL, RLHF); Midterm | Assignment 3 | — |
| [6](weeks/week-06.md) | Data-Efficient RL (Offline RL / Bandits); Strategic Data Gathering & Exploration | — | — |
| [7](weeks/week-07.md) | Exploration (continued) | — | Assignment 3 |
| [8](weeks/week-08.md) | Exploration (continued); MCTS and Conquering Go | — | — |
| [9](weeks/week-09.md) | Guest Lecture: World of World Modeling (Shane Gu); In-Class Quiz | — | — |
| [10](weeks/week-10.md) | Ethics & Society Guest Lecture: Alignment, Impacts; Poster Session | — | — |
| [11](weeks/week-11.md) | (no lecture — final project writeup) | — | Final Project Writeup |

## Implementation

Assignments 1–3 mix written derivations with Python coding (a LaTeX-templated written component
plus starter code). Code/write-ups, if kept, live in a separate private repo, matching the policy
used for the other courses here.

## Self-study access

Grading runs through Gradescope with written work compiled into a single PDF; there's no public
non-enrolled Gradescope section the way CMU 15-445 has one, and no solutions are posted publicly.
Treat the assignments as self-checked only — verify your own derivations against the lecture
notes/textbook and your code's behavior on the provided environments, since there's no official
outside-student grading path.
