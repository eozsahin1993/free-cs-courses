---
category: Machine Learning
level: Advanced
tags: [computer-vision, deep-learning]
---
# Stanford CS231n — Deep Learning for Computer Vision

## Links

- Course site: https://cs231n.stanford.edu/
- Lecture notes: https://cs231n.github.io/ — covers the "classic" portion of the curriculum
  (image classification, linear classifiers, backprop, neural nets, CNNs) in written form. Newer
  topics (transformers, detection, video, generative models, 3D, vision & language, world
  modeling) postdate the notes site and are only covered in slides/lecture.
- Assignments: https://cs231n.github.io/assignments2026/ (assignment1, assignment2, assignment3)
- Lecture videos (YouTube): current (2026) lecture recordings are posted to Stanford Canvas,
  restricted to enrolled students. This syllabus links the **Spring 2025** playlist instead
  (https://www.youtube.com/playlist?list=PLoROMvodv4rOmsNzYBMe0gJY2XS8AQg16) — CS231n's 10th
  anniversary offering — since its lecture numbering and topics line up almost 1:1 with the 2026
  schedule (both cover the modernized syllabus: transformers, diffusion, self-supervised
  learning). Lectures 17 (World Modeling, guest lecture) and 18 (Human-Centered AI) are new to
  the 2026 offering with no 2025 counterpart — noted in `weeks/week-09.md` and
  `weeks/week-10.md`.

## Structure

- [weeks/](weeks/) — one file per week (`week-01.md` … `week-10.md`), each self-contained: that
  week's lecture(s), slides, notes (where they exist), video, and any assignment/project
  milestone assigned or due. Mirrors the real Spring 2026 schedule's pacing and ordering, but
  with calendar dates stripped out since this is meant to be worked through at your own pace.

Assignment/project code, if kept, should live inside the relevant week's file rather than a
separate top-level directory — status is more useful next to the assignment link than split out.

## Weeks

| Week | Lectures | Assigned | Due |
|---|---|---|---|
| [1](weeks/week-01.md) | Introduction, Image Classification with Linear Classifiers | Assignment 1, Course Project | — |
| [2](weeks/week-02.md) | Regularization & Optimization, Neural Networks & Backpropagation | — | — |
| [3](weeks/week-03.md) | Image Classification with CNNs, CNN Architectures | Assignment 2 | Assignment 1 |
| [4](weeks/week-04.md) | Recurrent Neural Networks, Attention & Transformers | — | Project proposal |
| [5](weeks/week-05.md) | Object Detection & Segmentation, Video Understanding | — | — |
| [6](weeks/week-06.md) | Large Scale Distributed Training, Self-Supervised Learning | Assignment 3 | Assignment 2 |
| [7](weeks/week-07.md) | Midterm, Generative Models 1 | — | — |
| [8](weeks/week-08.md) | Generative Models 2, 3D Vision | — | — |
| [9](weeks/week-09.md) | Vision & Language, World Modeling | — | Assignment 3 |
| [10](weeks/week-10.md) | Human-Centered AI | — | Final report, poster session |

## Implementation

Each assignment (1–3) is a set of self-contained Jupyter notebooks — no course-provided starter
repo to fork (unlike BusTub/Needle in the CMU courses). Notebook/code implementations, if kept,
live in a separate private repo, matching the same policy used for the other courses here.

## Self-study access

Unlike CMU 15-445's Gradescope self-study section, CS231n has no official non-enrolled grading
path. There's nothing to sign up for, though: the starter notebooks (Colab-ready) are public at
the assignments URL above, and each one is self-checkable — gradient checks and expected
loss/output ranges are built into the notebook cells, so you can verify correctness without a
submission system.
