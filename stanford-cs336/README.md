---
university: Stanford
code: CS336
category: Machine Learning
level: Advanced
tags: [llm, systems]
---
# Stanford CS336 — Language Modeling from Scratch

## Links

- Course site: https://cs336.stanford.edu/
- Lecture materials: two formats depending on the lecture — most lectures use an interactive
  Python "trace" page (`https://cs336.stanford.edu/lectures/?trace=lecture_NN`), while others
  (mostly Tatsu's lectures) are static slide PDFs on
  https://github.com/stanford-cs336/lectures. Noted per-lecture in `weeks/`.
- Assignments: https://github.com/stanford-cs336 — one repo per assignment
  (`assignment1-basics` … `assignment5-alignment`), each with public starter code and a PDF
  handout. Assignments 1 and 2 also have public leaderboards
  (`assignment1-basics-leaderboard`, `assignment2-systems-leaderboard`).
- Lecture videos (YouTube): https://www.youtube.com/playlist?list=PLoROMvodv4rMqXOcazWaTUHhq-yembLCV
  — this is the **current (Spring 2026)** offering, not an older stand-in; the course already ran
  its full quarter (late March–June 2026) so every regular lecture is posted, and the syllabus
  numbering below matches the video titles 1:1, no year-to-year lecture remapping needed. The
  one gap: Lecture 18 (Guest lecture: Daniel Selsam) has no public video — noted in
  `weeks/week-10.md`.

## Structure

- [weeks/](weeks/) — one file per week (`week-01.md` … `week-10.md`), each self-contained: that
  week's lecture(s), slides/trace links, video, and any assignment milestone assigned or due.
  Mirrors the real Spring 2026 schedule's Mon/Wed pacing, with calendar dates stripped out since
  this is meant to be worked through at your own pace. Week 9 has a single lecture (the Monday
  session fell on Memorial Day, May 25, and was skipped in the real offering).

Assignment code, if kept, should live inside the relevant week's file rather than a separate
top-level directory.

## Weeks

| Week | Lectures | Assigned | Due |
|---|---|---|---|
| [1](weeks/week-01.md) | Overview & Tokenization, PyTorch & Resource Accounting | Assignment 1 | — |
| [2](weeks/week-02.md) | Architectures & Hyperparameters, Attention Alternatives & MoE | — | — |
| [3](weeks/week-03.md) | GPUs & TPUs, Kernels & Triton | Assignment 2 | Assignment 1 |
| [4](weeks/week-04.md) | Parallelism, Parallelism (cont'd) | — | — |
| [5](weeks/week-05.md) | Scaling Laws, Inference | Assignment 3 | Assignment 2 |
| [6](weeks/week-06.md) | Scaling Laws (cont'd), Evaluation | Assignment 4 | Assignment 3 |
| [7](weeks/week-07.md) | Data (Sources & Datasets), Data (Filtering & Deduplication) | — | — |
| [8](weeks/week-08.md) | Mid/Post-Training (SFT/RLHF), Post-Training (RLVR) | Assignment 5 | Assignment 4 |
| [9](weeks/week-09.md) | Alignment & Multimodality | — | — |
| [10](weeks/week-10.md) | Guest Lecture (Daniel Selsam), Guest Lecture (Dan Fu) | — | Assignment 5 |

## Implementation

Each assignment is a real code repo (tokenizer, transformer, training loop, distributed
training, data pipeline, RL fine-tuning), not notebooks — closer to the CMU BusTub/Needle style
than CS231n's self-contained notebooks. Code implementations, if kept, live in a separate
private repo, matching the same policy used for the other courses here.

## Self-study access

No official non-enrolled grading path (submissions are via Gradescope for enrolled students
only), but each assignment ships a detailed PDF handout with expected outputs/tests, and
Assignments 1–2 have public leaderboards you can informally target even without enrollment.
Assignment 5's RL/alignment component is the least self-checkable of the five — no leaderboard,
and correctness is judged more qualitatively (model behavior) than the earlier assignments'
concrete numeric targets.
