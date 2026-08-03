---
university: Stanford
code: CS229
category: Machine Learning
level: Intermediate
tags: [ml-fundamentals]
---
# Stanford CS229 — Machine Learning

## Links

- Course site: https://cs229.stanford.edu/ — current offerings (e.g. Summer 2026) publish their
  schedule as a Google Sheet linked from the site and gate lecture recordings, slides, and
  problem sets behind Canvas/Gradescope for enrolled students only.
- Lecture notes: https://cs229.stanford.edu/notes2026spring/main_notes.pdf — the actively
  maintained, single consolidated notes document (dated 2026-05-19, 268 pages), covering
  supervised learning, deep learning, generalization/regularization, unsupervised learning, and
  reinforcement learning & control in full mathematical detail. This is the primary notes
  reference for every week below. It does **not** cover decision trees/ensemble methods or factor
  analysis — those topics were dropped from the notes in this edition even though they're still
  lectured — so those weeks link `none` for notes. It does include a newer Part V
  ("Generative models and Foundation Models": diffusion, LoRA, transformers, LLMs, RLHF) that
  postdates this syllabus's source offering entirely; it's not mapped to a week here but is worth
  reading after finishing the core sequence if you want the modern generative-AI material.
- Discussion-section handouts (still live, unlike the old per-lecture notes below):
  linear algebra review https://cs229.stanford.edu/section/cs229-linalg.pdf, probability review
  https://cs229.stanford.edu/section/cs229-prob.pdf, error analysis
  https://cs229.stanford.edu/section/error-analysis.pdf.
- Lecture videos (YouTube): current recordings are Canvas-restricted. This syllabus follows the
  **Autumn 2018** offering instead
  (https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU) — the only offering
  with a complete, matching public record of syllabus + all 20 lecture videos + one discussion
  section video ("Learning Theory"). Its topic sequence (linear models → generative learning →
  kernels/SVM → learning theory/regularization → trees/neural nets → unsupervised learning → RL
  and control) is still the backbone of the current course; the main additions since then are
  transformers/LLM content (folded into a couple of current lectures/CA sessions) that this
  playlist predates and has no video counterpart for.
- Problem sets: Autumn 2018's own problem sets are no longer publicly reachable (the syllabus
  links point to Piazza-gated zip files that 404 for outsiders). The only CS229 problem sets still
  hosted publicly are three from the **Summer 2019** offering:
  https://cs229.stanford.edu/summer2019/ps1.pdf (+ [zip](https://cs229.stanford.edu/summer2019/ps1.zip)),
  https://cs229.stanford.edu/summer2019/ps2.pdf (+ [zip](https://cs229.stanford.edu/summer2019/ps2.zip)),
  https://cs229.stanford.edu/summer2019/ps3.pdf (+ [zip](https://cs229.stanford.edu/summer2019/ps3.zip)).
  Their content (linear classifiers/GDA/GLMs; kernels/perceptron/neural nets/regularization;
  RL/KL-divergence/k-means/EM/PCA/ICA) lines up well with this syllabus's pacing even though they
  come from a different offering — used here for that reason. No PS0/PS4 equivalent or solution
  set is publicly available.
- Textbook: none required — the lecture notes above are the primary written reference.

## Structure

- [weeks/](weeks/) — one file per week (`week-01.md` … `week-10.md`), matching the Autumn 2018
  offering's own 10-week pacing and lecture groupings, with calendar dates stripped since this is
  meant to be worked through at your own pace. Where a lecture's topic has no live notes or video
  counterpart, the week file says so explicitly (e.g. decision trees/ensembling in week 5, factor
  analysis in week 7) rather than linking something dead or unrelated.

Problem set code/solutions, if kept, live inside the relevant week's file rather than a separate
top-level directory.

## Weeks

| Week | Lectures | Assigned | Due |
|---|---|---|---|
| [1](weeks/week-01.md) | Introduction; Linear Regression & Gradient Descent | Problem Set 1 | — |
| [2](weeks/week-02.md) | Weighted LS, Logistic Regression, Newton's Method; Perceptron & GLMs | — | — |
| [3](weeks/week-03.md) | GDA & Naive Bayes; Laplace Smoothing & Support Vector Machines | — | Problem Set 1 |
| [4](weeks/week-04.md) | SVM & Kernels; Bias-Variance, Regularization & Cross-Validation; Discussion: Learning Theory | Problem Set 2 | — |
| [5](weeks/week-05.md) | Decision Trees & Ensemble Methods; Intro to Neural Networks | — | — |
| [6](weeks/week-06.md) | Backprop & Improving Neural Networks; Debugging ML Models & Error Analysis | — | Problem Set 2 |
| [7](weeks/week-07.md) | Expectation-Maximization (k-means, GMM); EM & Factor Analysis | Problem Set 3 | — |
| [8](weeks/week-08.md) | PCA & ICA; ICA & Intro to Reinforcement Learning (MDPs, Bellman Equations) | — | — |
| [9](weeks/week-09.md) | MDPs, Value/Policy Iteration, LQR/LQG; Continuous-State MDPs & Model Simulation | — | — |
| [10](weeks/week-10.md) | Reward Models, Linear Dynamical Systems, Policy Search/REINFORCE; RL Debugging & Wrap-up | — | Problem Set 3 |

## Implementation

Problem sets 1–3 mix written derivations with coding questions (Python, restricted to the
libraries pinned in each set's `environment.yml` — no scikit-learn). Code/write-ups, if kept, live
in a separate private repo, matching the policy used for the other courses here.

## Self-study access

These problem sets were originally submitted via Gradescope for enrolled Summer 2019 students;
that submission path is closed to outside learners now, and no solution set was ever posted
publicly. Treat them as self-checked only — there's no official non-enrolled grading path (unlike
CMU 15-445's Gradescope section) and no built-in autograder (unlike CS231n's notebook gradient
checks).
