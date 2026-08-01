---
category: Machine Learning
level: Intro
tags: [ai, search]
---
# Stanford CS221 — Artificial Intelligence: Principles and Techniques

## Links

- Course site: https://stanford-cs221.github.io/spring2026/
- Slide/module browser: https://stanford-cs221.github.io/spring2026/modules/ — CS221 organizes each
  lecture as a set of short modules (5–20 slides each); most lectures also publish one combined
  PDF deck that this syllabus links to directly.
- Homework overview: https://stanford-cs221.github.io/spring2026/homework.html
- Project page: https://stanford-cs221.github.io/spring2026/project.html
- Sample projects: https://github.com/stanford-cs221/sample-projects
- Lecture notes: none. CS221 has no separate written lecture-notes site (unlike CS231n) — slide
  decks and video are the only lecture materials.
- Lecture videos: the Spring 2026 recordings are Canvas/Panopto-hosted, restricted to enrolled
  students. This syllabus links the **Autumn 2021** YouTube playlist instead
  (https://www.youtube.com/playlist?list=PLoROMvodv4rOca_Ovz1DvdtWuz8BfSWL2) — CS221's official
  modular topic-video library. It's not an arbitrary substitute: the live Spring 2026
  `course-data.js` itself links several of its own "offline" modules (e.g.
  `propositional-modus-ponens`, `first-order-modus-ponens`, `probabilistic-programming`, the logic
  `recap`) straight into this same playlist. The playlist mixes clips from the Autumn 2019 and
  Autumn 2021 offerings plus a few standalone 2023 ethics-guest recordings, and its topic-by-topic
  breakdown (Search, MDPs, Games, CSPs, Markov/Bayesian Networks, Logic) matches Spring 2026's
  syllabus almost 1:1 — both are CS221's long-standing "classic" curriculum. (The separate Autumn
  2025 offering restructured the course around newer topics like Policy Gradient and Economics of
  AI and does **not** match this syllabus — don't confuse the two when searching for videos.)
- Textbook: no required textbook. Recommended references (all optional):
  - Russell & Norvig, *Artificial Intelligence: A Modern Approach* — http://aima.cs.berkeley.edu
  - Sutton & Barto, *Reinforcement Learning: An Introduction* (free) — http://incompleteideas.net/book/the-book-2nd.html
  - Hastie, Tibshirani & Friedman, *The Elements of Statistical Learning* (free PDF) — https://web.stanford.edu/~hastie/ElemStatLearn/
  - Koller & Friedman, *Probabilistic Graphical Models* (paywalled, no free link) — http://mitpress.mit.edu/books/probabilistic-graphical-models
  - Tsang, *Foundations of Constraint Satisfaction* — http://www.bracil.net/edward/FCS.html

## Structure

- [weeks/](weeks/) — one file per week (`week-01.md` … `week-10.md`), each self-contained: that
  week's lecture(s), slides, video, and any homework assigned or due. Mirrors the real Spring
  2026 schedule's pacing and ordering, with calendar dates stripped out since this is meant to be
  worked through at your own pace. Where a lecture's slide deck bundles topics with no individual
  public video counterpart, or the reverse, that's called out in the week's file rather than
  glossed over.

Homework code, if kept, should live inside the relevant week's file rather than a separate
top-level directory — status is more useful next to the assignment link than split out.

## Weeks

| Week | Lectures | Assigned | Due |
|---|---|---|---|
| [1](weeks/week-01.md) | Overview, Learning I | HW1 Foundations, HW2 Sentiment (started) | HW1 Foundations |
| [2](weeks/week-02.md) | Learning II, Learning III | — | HW2 Sentiment |
| [3](weeks/week-03.md) | Search I, Search II | HW3 Route Planning | HW3 Route Planning |
| [4](weeks/week-04.md) | MDPs I, MDPs II | HW4 Controlling MountainCar | HW4 Controlling MountainCar |
| [5](weeks/week-05.md) | Games I, Games II | HW5 Pac-Man (started) | — |
| [6](weeks/week-06.md) | Factor Graphs, Beam Search | HW6 Course Scheduling | HW5 Pac-Man |
| [7](weeks/week-07.md) | Bayesian Networks I, Bayesian Networks II | HW7 Car Tracking | HW6 Course Scheduling |
| [8](weeks/week-08.md) | Bayesian Networks III, Logic I | — | HW7 Car Tracking |
| [9](weeks/week-09.md) | Logic II | HW8 From Language to Logic | — |
| [10](weeks/week-10.md) | Conclusion / Summary / Future of AI | — | HW8 From Language to Logic |

Two mandatory, in-person/proctored exams (30% each) fall in weeks 6 and just after week 10 — see
"Self-study access" below for why they're not tracked here.

## Implementation

All eight homeworks are Python programming + written-math assignments (`submission.py` plus a
LaTeX-templated written component), matching CS221's long-running format. Code, if kept, lives in
a separate private repo, matching the policy used for the other courses here.

## Self-study access

CS221's homeworks are graded entirely through Gradescope, and Gradescope enrollment is automatic
via a `@stanford.edu` email — the homework page has no public entry code or alternative path for
outside learners, unlike CMU 15-445's open Gradescope section. Local self-checking varies by
homework rather than being a uniform `grader.py`: some (e.g. HW5 Pac-Man) ship a `grader.py` you
can run locally, though its own docs note it only catches crashes/basic bugs, not timeouts; others
(e.g. HW6 Course Scheduling) ship standalone sanity-check scripts (`run_p2.py`, `run_p3.py`) with
expected outputs to compare against rather than a pass/fail suite; a few (e.g. HW1 Foundations)
mention no local script at all and are Gradescope-only. Check each homework's own page for what it
ships. The two written exams (60% of the real course grade) are proctored and enrollment-only with
no self-study equivalent — a self-studier's checkpoint is whatever each homework's local scripts
let you verify, not the exams.
