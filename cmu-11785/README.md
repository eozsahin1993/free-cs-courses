---
category: Machine Learning
level: Advanced
tags: [deep-learning, neural-networks, pytorch]
---
# CMU 11-785 — Introduction to Deep Learning

## Links

- Course site: https://deeplearning.cs.cmu.edu/S26/index.html (Spring 2026 offering — the
  semester this syllabus follows; CMU rotates a fresh site for every Fall/Spring term)
- Lecture videos (YouTube): all 29 Spring 2026 lectures (Lecture 0 through Lecture 28) are posted
  to the course's own YouTube channel, https://www.youtube.com/channel/UC8hYZGEkI2dDO8scT8C5UQA —
  the course site explicitly says this channel is "where non-CMU folks can view all lectures and
  recitation recordings." Every lecture below links its own video from the *current* Spring 2026
  offering, so there's no year-substitution needed — full 1:1 coverage.
- Slides: hosted directly on the course site per-lecture (linked from each week file below).
- Textbooks: the course doesn't follow one text; it lists several optional references, all free
  online — *Dive Into Deep Learning* (https://d2l.ai), *Deep Learning* by Goodfellow, Bengio &
  Courville (https://www.deeplearningbook.org/), and *Neural Networks and Deep Learning* by
  Michael Nielsen (http://neuralnetworksanddeeplearning.com/). A few paywalled options (Lewis;
  Rumelhart & McClelland's *Parallel Distributed Processing* vols. 1–2) are mentioned on the site
  but not linked here since they're not free.
- Recitations/Labs & Bootcamps: https://deeplearning.cs.cmu.edu/S26/index.html#recitations —
  Friday sessions covering Python/PyTorch fundamentals, GRUs, attention, and other implementation
  bootcamps with their own notebooks and (for most) YouTube recordings. Not itemized per week
  below — they're supplementary practice, not part of the graded lecture/assignment spine.

### Assignments — a real gap, read before starting

11-785 has four substantial assignments (HW1–HW4), each with two parts — an *Autolab* part (you
implement low-level ops like an MLP, CNN, RNN/CTC, or attention from scratch and submit for
autograding) and a *Kaggle* part (a leaderboard competition applying the same concepts to a real
task: phoneme classification, face verification, speech recognition, etc.) — plus optional bonus
and "build your own autograd engine" components, and a final course project. All of that is real
and well-documented on the current Spring 2026 site (specific release/due dates, topic
descriptions), **but the actual submission systems are gated**: Autolab
(https://autolab.andrew.cmu.edu/courses/11485-s26/) redirects unauthenticated visitors straight to
CMU's SSO login (confirmed directly — no public handout content behind it for the current
semester), and the Kaggle competitions are tied to the enrolled cohort. There is no public
handout-PDF folder for Spring 2026 the way there is for lecture slides.

The links to actual assignment handout PDFs in each week below come from the CMU-IDeeL course
site's own GitHub history — the most recent *publicly reachable* set, pieced together from the
Spring 2023/Fall 2022 offerings (`S24` site path, which still hosts them). Assignment topics have
stayed effectively identical year over year (MLP → CNN → RNN/CTC → attention/transformer, each
paired with a matching Kaggle task), so these are a faithful reference for what the work involves
— but they are **2–3 years stale**, not this semester's actual handout, and there is no way for a
non-CMU reader to submit to Autolab or join the Kaggle leaderboards for a grade. Treat HW1–4 here
as "read the spec, implement it yourself, self-check against the Kaggle task description" rather
than a gradeable self-study track.

## Structure

- [weeks/](weeks/) — one file per week (`week-01.md` … `week-15.md`), each self-contained: that
  week's lecture(s), slides, video, and any assignment milestone assigned or due. Mirrors the real
  Spring 2026 schedule's pacing and ordering, but with calendar dates stripped out since this is
  meant to be worked through at your own pace. Spring break falls between week-08 and week-09,
  noted in `weeks/week-08.md`. Lecture 3 (Training I) fell on a Friday instead of the usual
  Monday/Wednesday slot in the real schedule — folded into week-02 here rather than given its own
  week, since it's a single displaced lecture, not a pacing change.

Assignment code, if kept, should live inside the relevant week's file rather than a separate
top-level directory.

## Weeks

| Week | Lectures | Assigned | Due |
|---|---|---|---|
| [1](weeks/week-01.md) | Course Logistics | — | — |
| [2](weeks/week-02.md) | Introduction, Neural Nets as Universal Approximators, Training I (Learning, ERM) | HW1P1, HW1P2 | — |
| [3](weeks/week-03.md) | Training II (Gradient Descent) | — | HW1 early/checkpoint |
| [4](weeks/week-04.md) | Training III (Backpropagation), Training IV (Convergence, Loss Surfaces, Momentum) | — | — |
| [5](weeks/week-05.md) | Training V (Optimization, SGD), Training VI (Optimizers, Regularizers, BatchNorm, Dropout) | HW2P1, HW2P2 | HW1 final |
| [6](weeks/week-06.md) | CNNs I, CNNs II | — | — |
| [7](weeks/week-07.md) | CNNs III, CNNs IV | — | HW2 early/checkpoint |
| [8](weeks/week-08.md) | RNNs I, RNNs II | HW3P1, HW3P2 | HW2 final |
| — | *Spring break* | | |
| [9](weeks/week-09.md) | Sequence-to-Sequence Models & CTC, CTC (Blanks, Beam Search) | — | — |
| [10](weeks/week-10.md) | Language Models & Translation, Attention Models & Transformers | — | HW3 early/checkpoint |
| [11](weeks/week-11.md) | Transformers & Newer Architectures, Large Language Models | HW4P1, HW4P2 | HW3 final |
| [12](weeks/week-12.md) | Representation Learning & Autoencoders, Variational Autoencoders | — | — |
| [13](weeks/week-13.md) | Diffusion, Generative Adversarial Networks | — | — |
| [14](weeks/week-14.md) | Graph Neural Networks, Reinforcement Learning | — | HW4 early/checkpoint |
| [15](weeks/week-15.md) | Hopfield Networks, Boltzmann Machines | — | HW4 final, HW1–3 bonus/autograd |

## Implementation

There's no course-provided starter repo to fork the way BusTub (15-445) or Needle (10-714) work.
Each Autolab handout is its own self-contained PDF spec plus a handout tarball/notebook; code
written against them, if kept, lives in a separate private repo, matching the policy used for the
other courses in this collection.

## Self-study access

No official non-enrolled grading path exists for this course (unlike 15-445's Gradescope
self-study section). Lectures, slides, and quiz-adjacent reading are fully public and self-paced.
The hands-on side is self-checked at best: work through the stale-but-representative handout PDFs
linked in each week, implement against them, and use the described Kaggle task (frame-level
accuracy, verification AUC, edit distance, etc.) as your own correctness bar — there's no
autograder or leaderboard a non-CMU reader can submit to.
